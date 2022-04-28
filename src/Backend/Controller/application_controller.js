
const ApplicationDAO = require('../model/application');


async function get_all_application(){
    const rapp_dao = ApplicationDAO.get_all_application()
        .then(result=>{
            if(result){
                console.log(result)
                return result;
            }
        });
    return rapp_dao;
}

async function get_app_by_id(ap_id){
    const json = ap_id;
    const obj = JSON.parse(json);
    console.log(obj.ap_id);
    const ap_dao = ApplicationDAO.get_application_by_id(obj.rapp_id)
        .then(result=>{
            if(result){
                console.log(result)
            }
        })
    return ap_dao;
}

async function get_app_by_user(user_id){
    const json = user_id;
    const obj = JSON.parse(json);
    console.log(obj.user_id);
    const ap_dao = ApplicationDAO.get_application_by_user_id(obj.user_id)
        .then(result=>{
            if(result){
                console.log(result)
            }
        })
    return ap_dao;
}

async function get_app_by_skills(skills){
    const json = skills;
    const obj = JSON.parse(json);
    console.log(obj.application);
    const ap_dao = ApplicationDAO.get_application_by_skills(obj.skills)
        .then(result=>{
            if(result){
                console.log(result)
            }
        })
    return ap_dao;
}

async function create_ap(user_id, cv, about, skills){
    ApplicationDAO.create_application(user_id, cv, about, skills)
        .then(result=>{
            if(result){
                console.log(result)
            }
        })
    return true;
}

async function delete_ap(ap_id){
    const re_dao = ApplicationDAO.delete_application_application(ap_id)
        .then(result=>{
            if(result){
                console.log("The Application:\n" + result + "\n was deleted.");
            }
        })
    return true;
}


async function update_cv(json){
    const obj = JSON.parse(json)
    const id = obj.ap_id;
    const user= obj.user_id;
    const cv = obj.cv;
    ApplicationDAO.update_cv(id, user, cv)
        .then(result=>{
            if(result){
                console.log("CV Updated")
                console.log(result)
            }
        })
    return true;
}

async function update_about(json){
    const obj = JSON.parse(json)
    const id = obj.ap_id;
    const user= obj.user_id;
    const about = obj.about;
    ApplicationDAO.update_about(id, user, about)
        .then(result=>{
            if(result){
                console.log("About Updated")
                console.log(result)
            }
        })
    return true;
}

async function update_skills(json){
    const obj = JSON.parse(json)
    const id = obj.ap_id;
    const user= obj.user_id;
    const skills = obj.skills;
    ApplicationDAO.update_cv(id, user, skills)
        .then(result=>{
            if(result){
                console.log("Skills Updated")
                console.log(result)
            }
        })
    return true;
}

// get_all_research()
// create_research(1, "Software", "Programming", "Testing", "787-000-0000")
// get_research_by_id('{"re_id":1}')
// get_research_by_user('{"user_id":1}')
// get_research_by_department('{"department":"Software"}')
