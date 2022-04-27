const Arres_db = require('../database');

class ResearchDAO {
    constructor(user_id, department, title, description, contacts) {
        this.user_id = user_id;
        this.department = department;
        this.title = title;
        this.description = description;
        this.contacts = contacts;
    }

    static async create_research(user_id, department, title, description, contacts) {
        let query;
        try {
            query = [
                user_id, department, title, description, contacts
            ]

            await Arres_db.connect();
            const check = await Arres_db.query('SELECT re_id FROM "Research" WHERE title=$1 AND user_id=$2', [title, user_id])

            if(JSON.stringify(check.rows)!=="[]"){
                throw "error, user in system"
            }
            await Arres_db.query
            ('INSERT INTO "User" ("user_id", "department", "title", "description", "contacts") VALUES($1,$2,$3,$4,$5)', query);
            return JSON.stringify(query);
        } catch (error) {
            console.error("Research is already in system");
            return false;
        } finally {
            Arres_db.end();
        }
    }

    static async get_all_research() {
        try{
            await Arres_db.connect();
            const result = await Arres_db.query('SELECT * FROM "Research"');
            return JSON.stringify(result.rows);
        } catch{
            return false;
        } finally {
            Arres_db.end();
        }
    }

    static async get_research_by_id(re_id){
        let query;
        try {
            query = [re_id]
            await Arres_db.connect();
            const result = await Arres_db.query('SELECT * FROM "Research" WHERE re_id=$1', query);
            if(JSON.stringify(result.rows)!=="[]"){
                return JSON.stringify(result.rows)
            }else{
                console.log("Research does not exist")
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

module.exports= ResearchDAO;