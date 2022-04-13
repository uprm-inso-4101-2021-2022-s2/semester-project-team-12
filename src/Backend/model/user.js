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
            await Arres_db.query
            ('INSERT INTO "User" ("email", "password", "first_name", "last_name", "isProfessor", "Concentration") VALUES($1,$2,$3,$4,$5,$6)', query);
            return JSON.stringify(query);
        } catch (error) {
            console.error("Email is already in system");
            return false;
        } finally {
            Arres_db.end();
        }
    }

    static async get_all_user() {
        try{
            await Arres_db.connect();
            const result = await Arres_db.query('SELECT * FROM "User"');
            return JSON.stringify(result.rows);
        } catch{
            return false;
        } finally {
            Arres_db.end();
        }
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

    static async check_user(email, password){
        try{
            await Arres_db.connect();
            const result = await Arres_db.query('SELECT * FROM "User" where email = $1 AND password = $2', [JSON.parse(email), JSON.parse(password)])
            if(JSON.stringify(result.rows)!=="[]"){
                return JSON.stringify(result.rows);
            } else{
                throw "User not in system";
            }
        }catch{
            console.log("User not found!")
        } finally {
            Arres_db.end();
        }

    }

    static async delete_user(user_id){
        await Arres_db.connect();
        const result = await Arres_db.query('SELECT * FROM "User" WHERE us_id=$1', [user_id]);
        let json = JSON.stringify(result.rows);
        if(json!=="[]"){
            Arres_db.query('DELETE FROM "User" where us_id = $1', [user_id], (err, res) => {
                if (!err) {
                    const res = JSON.parse(json, (key, value) =>{
                        if(key==="us_id"){
                            console.log(JSON.stringify(value));
                        }
                    })
                } else {
                    console.log(err);
                }
                Arres_db.end();
            })
            return json;
        }else{
            console.log("User does not exist!")
        }
       Arres_db.end();
    }

}

module.exports= UserDAO;