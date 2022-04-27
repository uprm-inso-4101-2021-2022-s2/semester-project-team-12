
const ResearchAppDao = require('../model/research_application');


async function get_all_research_app(){
    const rapp_dao = ResearchAppDao.get_all_research_application()
        .then(result=>{
            if(result){
                console.log(result)
                return result;
            }
        });
    return rapp_dao;
}

async function get_research_app_by_id(rapp_id){
    const json = rapp_id;
    const obj = JSON.parse(json);
    console.log(obj.rapp_id);
    const rapp_dao = ResearchAppDao.get_research_application_by_research_id(obj.rapp_id)
        .then(result=>{
            if(result){
                console.log(result)
            }
        })
    return rapp_dao;
}

async function get_research_app_by_research(re_id){
    const json = re_id;
    const obj = JSON.parse(json);
    console.log(obj.re_id);
    const rapp_dao = ResearchAppDao.get_research_application_by_research_id(obj.re_id)
        .then(result=>{
            if(result){
                console.log(result)
            }
        })
    return rapp_dao;
}

async function get_research_app_by_application(application){
    const json = application;
    const obj = JSON.parse(json);
    console.log(obj.application);
    const rapp_dao = ResearchAppDao.get_research_application_by_applications(obj.application)
        .then(result=>{
            if(result){
                console.log(result)
            }
        })
    return rapp_dao;
}

async function get_research_by_status(status){
    const json = status;
    const obj = JSON.parse(json);
    console.log(obj.status);
    const rapp_dao = ResearchAppDao.get_research_status(obj.status)
        .then(result=>{
            if(result){
                console.log(result)
            }
        })
    return rapp_dao;
}

async function create_research_app(re_id, ap_id, status){
    ResearchAppDao.create_research_application(re_id, ap_id, status)
        .then(result=>{
            if(result){
                console.log(result)
            }
        })
    return true;
}

async function delete_user(rapp_id){
    const re_dao = ResearchAppDao.delete_research_application(rapp_id)
        .then(result=>{
            if(result){
                console.log("The Research Application:\n" + result + "\n was deleted.");
            }
        })
    return true;
}


async function update_status(json){
    const obj = JSON.parse(json)
    const id = obj.re_id
    const appid= obj.app_id;
    const status = obj.status;
    ResearchAppDao.update_department(id, appid, status)
        .then(result=>{
            if(result){
                console.log("Status Updated")
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
