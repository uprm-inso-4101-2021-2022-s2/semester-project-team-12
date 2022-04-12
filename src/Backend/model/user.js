const Arres_db = require('../database');

class UserDAO {
    constructor(email, password, first_name, last_name, isProfessor, Concentration) {
        this.email = email;
        this.password = password;
        this.first_name = first_name;
        this.last_name = last_name;
        this.isProfessor = isProfessor;
        this.Concentration = Concentration;
    }

    static async create_user(email, password, first_name, last_name, isProfessor, Concentration) {
        let query;
        try {
            query = [
                email, password, first_name, last_name, isProfessor, Concentration
            ]

            await Arres_db.connect();
            const check = await Arres_db.query('SELECT us_id FROM "User" WHERE email=$1', [email])

            if(JSON.stringify(check.rows)!=="[]"){
                throw "error, user in system"
            }
            const result = await Arres_db.query
            ('INSERT INTO "User" ("email", "password", "first_name", "last_name", "isProfessor", "Concentration") VALUES($1,$2,$3,$4,$5,$6)', query);
            console.log(result.rows)
            return JSON.stringify(query);
        } catch (error) {
            console.error("Email is already in system");
            return false;
        } finally {
            Arres_db.end();
        }
    }

    static get_all_user() {
        Arres_db.connect();
        Arres_db.query('SELECT * FROM "User"', (err, res) => {
            if (!err) {
                console.log(res.rows);
            } else {
                console.log(err);
            }
            Arres_db.end();
        })
    }

    static async get_user_by_id(user_id){
        let query;
        try {
            query = [user_id]
            await Arres_db.connect();
            const result = await Arres_db.query('SELECT * FROM "User" WHERE us_id=$1', query);
            if(JSON.stringify(result.rows)!=="[]"){
                return JSON.stringify(result.rows)
            }else{
                console.log("User does not exist")
            }
        } catch (error) {
            console.error(error.stack);
        } finally {
            Arres_db.end();
        }
    }

    static check_user(email, password){
        Arres_db.connect();
        Arres_db.query('SELECT * FROM "User" where email = $1 AND password = $2', [JSON.parse(email), JSON.parse(password)], (err, res) => {
            if (!err) {
                console.log(res.rows);
            } else {
                return false;
            }
            Arres_db.end();
        })
    }

    static delete_user(user_id){
        Arres_db.connect();
        Arres_db.query('DELETE FROM "User" where us_id = $1', [user_id], (err, res) => {
            if (!err) {
                console.log("Process Finished");
            } else {
                console.log(err);
            }
            Arres_db.end();
        })
    }

}

module.exports= UserDAO;