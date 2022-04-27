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
            ('INSERT INTO "Research" ("user_id", "department", "title", "description", "contacts") VALUES($1,$2,$3,$4,$5)', query);
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

    static async get_research_by_department(department){
        let query;
        try {
            query=[department]
            await Arres_db.connect();
            const result = await Arres_db.query('SELECT * FROM "Research" WHERE department=$1',query);
            return JSON.stringify(result.rows)
        } catch (error) {
            console.error(error.stack);
        } finally {
            Arres_db.end();
        }
    }


    static async get_research_by_user(user_id){
        let query;
        try {
            query = [user_id]
            await Arres_db.connect();
            const result = await Arres_db.query('SELECT * FROM "Research" WHERE user_id=$1', query);
            if(JSON.stringify(result.rows)!=="[]"){
                return JSON.stringify(result.rows)
            }else{
                console.log("Researcher does not exist")
            }
        } catch (error) {
            console.error(error.stack);
        } finally {
            Arres_db.end();
        }
    }

    static async get_research_by_title(title){
        try {
            await Arres_db.connect();
            const result = await Arres_db.query('SELECT * FROM "Research" WHERE title=1', [title]);
            return JSON.stringify(result.rows)
        } catch (error) {
            console.error(error.stack);
        } finally {
            Arres_db.end();
        }
    }

    static async delete_research(re_id){
        await Arres_db.connect();
        const result = await Arres_db.query('SELECT * FROM "Research" WHERE re_id=$1', [re_id]);
        let json = JSON.stringify(result.rows);
        if(json!=="[]"){
            Arres_db.query('DELETE FROM "Research" where re_id = $1', [re_id], (err, res) => {
                if (!err) {
                    const res = JSON.parse(json, (key, value) =>{
                        if(key==="re_id"){
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

    static async update_department(re_id, user_id, department){
        let query;
        try {
            query=[re_id, department]
            await Arres_db.connect()
            const result = await Arres_db.query('SELECT * FROM "Research" WHERE re_id= $1 AND user_id=$2', [re_id, user_id]);
            let json = JSON.stringify(result.rows);
            if(json!=="[]") {
                await Arres_db.query('UPDATE "Research" SET department = $2 WHERE re_id=$1', query);
                return JSON.stringify(result.rows)
            } else {
                console.log("Cannot update department")
            }
        } catch (error) {
            console.log("User does not exist!");
        } finally {
            Arres_db.end();
        }
    }

    static async update_title(re_id, user_id, title) {
        let query;
        try {
            query = [re_id, title]
            await Arres_db.connect()
            const result = await Arres_db.query('SELECT * FROM "Research" WHERE re_id= $1 AND user_id=$2', [re_id, user_id]);
            let json = JSON.stringify(result.rows);
            if (json !== "[]") {
                await Arres_db.query('UPDATE "Research" SET title = $2 WHERE re_id=$1', query);
                return JSON.stringify(result.rows)
            } else {
                console.log("Cannot update title")
            }
        } catch (error) {
            console.log("Research does not exist!");
        } finally {
            Arres_db.end();
        }
    }

    static async update_description(re_id, user_id, description) {
        let query;
        try {
            query = [re_id, description]
            await Arres_db.connect()
            const result = await Arres_db.query('SELECT * FROM "Research" WHERE re_id= $1 AND user_id=$2', [re_id, user_id]);
            let json = JSON.stringify(result.rows);
            if (json !== "[]") {
                await Arres_db.query('UPDATE "Research" SET description = $2 WHERE re_id=$1', query);
                return JSON.stringify(result.rows)
            } else {
                console.log("Cannot update contacts")
            }
        } catch (error) {
            console.log("Research does not exist!");
        } finally {
            Arres_db.end();
        }
    }


    static async update_contact(re_id, user_id, contacts) {
        let query;
        try {
            query = [re_id, contacts]
            await Arres_db.connect()
            const result = await Arres_db.query('SELECT * FROM "Research" WHERE re_id= $1 AND user_id=$2', [re_id, user_id]);
            let json = JSON.stringify(result.rows);
            if (json !== "[]") {
                await Arres_db.query('UPDATE "Research" SET contacts = $2 WHERE re_id=$1', query);
                return JSON.stringify(result.rows)
            } else {
                console.log("Cannot update contacts")
            }
        } catch (error) {
            console.log("Research does not exist!");
        } finally {
            Arres_db.end();
        }
    }

}

module.exports= ResearchDAO;