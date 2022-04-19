const Arres_db = require('../database');

class UserDAO {
    constructor(email, password, first_name, last_name, isprofessor, concentration) {
        this.email = email;
        this.password = password;
        this.first_name = first_name;
        this.last_name = last_name;
        this.isprofessor = isprofessor;
        this.concentration = concentration;
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

    static async get_user_by_concentration(concentration){
        let query;
        try {
            query=[concentration]
            await Arres_db.connect();
            const result = await Arres_db.query('SELECT * FROM "User" WHERE concentration=$1',query);
            return JSON.stringify(result.rows)
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
                    const result = JSON.parse(json, (key, value) =>{
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

    static async get_Professors(){
        try {
            await Arres_db.connect();
            const result = await Arres_db.query('SELECT * FROM "User" WHERE isprofessor=1');
                return JSON.stringify(result.rows)
        } catch (error) {
            console.error(error.stack);
        } finally {
            Arres_db.end();
        }
    }

    static async update_email(us_id, email){
        let query;
        try {
            query=[us_id,email]
            await Arres_db.connect()
            const result = await Arres_db.query('SELECT * FROM "User" WHERE us_id=$1', [us_id]);
            let json = JSON.stringify(result.rows);
            if(json!=="[]") {
                await Arres_db.query('UPDATE "User" SET email = $2 WHERE us_id=$1', query);
                return JSON.stringify(result.rows)
            } else {
                console.log(error)
            }
        } catch (error) {
            console.log("User does not exist!");
        } finally {
            Arres_db.end();
        }
    }

    static async update_password(us_id, password) {
        let query;
        try {
            query = [us_id, password]
            await Arres_db.connect()
            const result = await Arres_db.query('SELECT * FROM "User" WHERE us_id=$1', [us_id]);
            let json = JSON.stringify(result.rows);
            if (json !== "[]") {
                await Arres_db.query('UPDATE "User" SET password = $2 WHERE us_id=$1', query);
                return JSON.stringify(result.rows)
            } else {
                console.log(error)
            }
        } catch (error) {
            console.log("User does not exist!");
        } finally {
            Arres_db.end();
        }
    }

    static async update_firstname(us_id, first_name) {
        let query;
        try {
            query = [us_id, first_name]
            await Arres_db.connect()
            const result = await Arres_db.query('SELECT * FROM "User" WHERE us_id=$1', [us_id]);
            let json = JSON.stringify(result.rows);
            if (json !== "[]") {
                await Arres_db.query('UPDATE "User" SET first_name = $2 WHERE us_id=$1', query);
                return JSON.stringify(result.rows)
            } else {
                console.log(error)
            }
        } catch (error) {
            console.log("User does not exist!");
        } finally {
            Arres_db.end();
        }
    }

    static async update_lastname(us_id, last_name) {
        let query;
        try {
            query = [us_id, last_name]
            await Arres_db.connect()
            const result = await Arres_db.query('SELECT * FROM "User" WHERE us_id=$1', [us_id]);
            let json = JSON.stringify(result.rows);
            if (json !== "[]") {
                await Arres_db.query('UPDATE "User" SET last_name = $2 WHERE us_id=$1', query);
                return JSON.stringify(result.rows)
            } else {
                console.log(error)
            }
        } catch (error) {
            console.log("User does not exist!");
        } finally {
            Arres_db.end();
        }
    }


}

module.exports= UserDAO;