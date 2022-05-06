const Arres_db = require('../database');

class ResearchAppDAO {
    constructor(re_id, app_id, status) {
        this.re_id = re_id;
        this.app_id = app_id;
        this.status = status;
    }

    static async create_research_application(re_id, app_id, status) {
        let query;
        try {
            query = [
                re_id, app_id, status
            ]

            await Arres_db.connect();
            const check = await Arres_db.query('SELECT rapp_id FROM "Research Application" WHERE re_id=$1 AND app_id=$2', [re_id, app_id])

            if (JSON.stringify(check.rows) !== "[]") {
                throw "error, research application in system."
            }
            await Arres_db.query
            ('INSERT INTO "Research" ("re_id", "app_id", "status") VALUES($1,$2,$3)', query);
            return JSON.stringify(query);
        } catch (error) {
            console.error("Research Application is already in system");
            return false;
        } finally {
            Arres_db.end();
        }
    }

    static async get_all_research_application() {
        try {
            await Arres_db.connect();
            const result = await Arres_db.query('SELECT * FROM "Research Application"');
            return JSON.stringify(result.rows);
        } catch {
            return false;
        } finally {
            Arres_db.end();
        }
    }

    static async get_research_application_by_id(rapp_id) {
        let query;
        try {
            query = [rapp_id]
            await Arres_db.connect();
            const result = await Arres_db.query('SELECT * FROM "Research Application" WHERE rapp_id=$1', query);
            if (JSON.stringify(result.rows) !== "[]") {
                return JSON.stringify(result.rows)
            } else {
                console.log("Research Application does not exist")
            }
        } catch (error) {
            console.error(error.stack);
        } finally {
            Arres_db.end();
        }
    }

    static async get_research_application_by_research_id(re_id) {
        let query;
        try {
            query = [re_id]
            await Arres_db.connect();
            const result = await Arres_db.query('SELECT * FROM "Research Application" WHERE re_id=$1', query);
            if (JSON.stringify(result.rows) !== "[]") {
                return JSON.stringify(result.rows)
            } else {
                console.log("Research Application does not exist")
            }
        } catch (error) {
            console.error(error.stack);
        } finally {
            Arres_db.end();
        }
    }


    static async get_research_application_by_applications(ap_id) {
        let query;
        try {
            query = [ap_id]
            await Arres_db.connect();
            const result = await Arres_db.query('SELECT * FROM "Research Application" WHERE ap_id=$1', query);
            return JSON.stringify(result.rows)
        } catch (error) {
            console.error(error.stack);
        } finally {
            Arres_db.end();
        }
    }

    static async get_research_status(status) {
        let query;
        try {
            query = [status]
            await Arres_db.connect();
            const result = await Arres_db.query('SELECT * FROM "Research Application" WHERE status=$1', query);
            if (JSON.stringify(result.rows) !== "[]") {
                return JSON.stringify(result.rows)
            } else {
                console.log("Researcher Application does not exist")
            }
        } catch (error) {
            console.error(error.stack);
        } finally {
            Arres_db.end();
        }
    }

    static async delete_research_application(rapp_id) {
        await Arres_db.connect();
        const result = await Arres_db.query('SELECT * FROM "Research Application" WHERE rapp_id=$1', [rapp_id]);
        let json = JSON.stringify(result.rows);
        if (json !== "[]") {
            Arres_db.query('DELETE FROM "Research Application" where rapp_id = $1', [rapp_id], (err, res) => {
                if (!err) {
                    const res = JSON.parse(json, (key, value) => {
                        if (key === "rapp_id") {
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
            console.log("Research Application does not exist!")
        }
        Arres_db.end();
    }

    static async update_status(rapp_id, ap_id, status) {
        let query;
        try {
            query = [rapp_id, status]
            await Arres_db.connect()
            const result = await Arres_db.query('SELECT * FROM "Research Application" WHERE rapp_id= $1 AND ap_id=$2', [rapp_id, ap_id]);
            let json = JSON.stringify(result.rows);
            if (json !== "[]") {
                await Arres_db.query('UPDATE "Research Application" SET status = $2 WHERE rapp_id=$1', query);
                return JSON.stringify(result.rows)
            } else {
                console.log("Cannot update Research Application status")
            }
        } catch (error) {
            console.log("Research Application does not exist!");
        } finally {
            Arres_db.end();
        }
    }
}

module.exports= ResearchAppDAO;