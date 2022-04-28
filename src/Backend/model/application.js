const Arres_db = require('../database');

class ApplicationDAO {
    constructor(user_id, cv, about, skills) {
        this.user_id = user_id;
        this.cv = cv;
        this.about = about;
        this.skills = skills;
    }

    static async create_application(user_id, cv, about, skills) {
        let query;
        try {
            query = [
                user_id, cv, about, skills
            ]

            await Arres_db.connect();
            await Arres_db.query
            ('INSERT INTO "Application" ("user_id", "cv", "about", "skills") VALUES($1,$2,$3,$4)', query);
            return JSON.stringify(query);
        } catch (error) {
            console.error(error.stack);
            return false;
        } finally {
            Arres_db.end();
        }
    }

    static async get_all_application() {
        try {
            await Arres_db.connect();
            const result = await Arres_db.query('SELECT * FROM "Application"');
            return JSON.stringify(result.rows);
        } catch {
            return false;
        } finally {
            Arres_db.end();
        }
    }

    static async get_application_by_id(ap_id) {
        let query;
        try {
            query = [ap_id]
            await Arres_db.connect();
            const result = await Arres_db.query('SELECT * FROM "Application" WHERE ap_id=$1', query);
            if (JSON.stringify(result.rows) !== "[]") {
                return JSON.stringify(result.rows)
            } else {
                console.log("Application does not exist")
            }
        } catch (error) {
            console.error(error.stack);
        } finally {
            Arres_db.end();
        }
    }

    static async get_application_by_user_id(user_id) {
        let query;
        try {
            query = [user_id]
            await Arres_db.connect();
            const result = await Arres_db.query('SELECT * FROM "Application" WHERE user_id=$1', query);
            if (JSON.stringify(result.rows) !== "[]") {
                return JSON.stringify(result.rows)
            } else {
                console.log("Application does not exist")
            }
        } catch (error) {
            console.error(error.stack);
        } finally {
            Arres_db.end();
        }
    }


    static async get_application_by_skills(skills) {
        let query;
        try {
            query = [skills]
            await Arres_db.connect();
            const result = await Arres_db.query('SELECT * FROM "Application" WHERE skills=$1', query);
            return JSON.stringify(result.rows)
        } catch (error) {
            console.error(error.stack);
        } finally {
            Arres_db.end();
        }
    }

    static async delete_application_application(ap_id) {
        await Arres_db.connect();
        const result = await Arres_db.query('SELECT * FROM "Application" WHERE ap_id=$1', [ap_id]);
        let json = JSON.stringify(result.rows);
        if (json !== "[]") {
            Arres_db.query('DELETE FROM "Research Application" where ap_id = $1', [ap_id], (err, res) => {
                if (!err) {
                    const res = JSON.parse(json, (key, value) => {
                        if (key === "ap_id") {
                            console.log(JSON.stringify(value));
                        }
                    })
                } else {
                    console.log(err);
                }
                Arres_db.end();
            })
            return json;
        } else {
            console.log("Application does not exist!")
        }
        Arres_db.end();
    }

    static async update_cv(ap_id, user_id, cv) {
        let query;
        try {
            query = [ap_id, cv]
            await Arres_db.connect()
            const result = await Arres_db.query('SELECT * FROM "Application" WHERE ap_id= $1 AND user_id = $2', [ap_id,user_id]);
            let json = JSON.stringify(result.rows);
            if (json !== "[]") {
                await Arres_db.query('UPDATE "Research Application" SET cv = $2 WHERE ap_id=$1', query);
                return JSON.stringify(result.rows)
            } else {
                console.log("Cannot update Application cv")
            }
        } catch (error) {
            console.log("Application does not exist!");
        } finally {
            Arres_db.end();
        }
    }

    static async update_about(ap_id, user_id, about) {
        let query;
        try {
            query = [ap_id, about]
            await Arres_db.connect()
            const result = await Arres_db.query('SELECT * FROM "Application" WHERE ap_id= $1 AND user_id= $2', [ap_id, user_id]);
            let json = JSON.stringify(result.rows);
            if (json !== "[]") {
                await Arres_db.query('UPDATE "Research Application" SET about = $2 WHERE ap_id=$1', query);
                return JSON.stringify(result.rows)
            } else {
                console.log("Cannot update Application about")
            }
        } catch (error) {
            console.log("Application does not exist!");
        } finally {
            Arres_db.end();
        }
    }

    static async update_skills(ap_id, user_id, skills) {
        let query;
        try {
            query = [ap_id, skills]
            await Arres_db.connect()
            const result = await Arres_db.query('SELECT * FROM "Application" WHERE ap_id= $1 AND user_id= $2', [ap_id, user_id]);
            let json = JSON.stringify(result.rows);
            if (json !== "[]") {
                await Arres_db.query('UPDATE "Research Application" SET skills = $2 WHERE ap_id=$1', query);
                return JSON.stringify(result.rows)
            } else {
                console.log("Cannot update Application skills")
            }
        } catch (error) {
            console.log("Application does not exist!");
        } finally {
            Arres_db.end();
        }
    }
}

module.exports= ApplicationDAO;