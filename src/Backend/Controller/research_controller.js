
const ResearchDao = require('../model/research');


async function get_all_research(){
    const re_dao = ResearchDao.get_all_research()
        .then(result=>{
            if(result){
                console.log(result)
                return result;
            }
        });
    return re_dao;
}

async function get_research_by_id(re_id){
    const json = re_id;
    const obj = JSON.parse(json);
    console.log(obj.re_id);
    const re_dao = ResearchDao.get_research_by_id(obj.re_id)
        .then(result=>{
            if(result){
                console.log(result)
            }
        })
    return re_dao;
}

async function get_research_by_user(user_id){
    const json = user_id;
    const obj = JSON.parse(json);
    console.log(obj.user_id);
    const re_dao = ResearchDao.get_research_by_user(obj.user_id)
        .then(result=>{
            if(result){
                console.log(result)
            }
        })
    return re_dao;
}

async function get_research_by_department(department){
    const json = department;
    const obj = JSON.parse(json);
    console.log(obj.department);
    const re_dao = ResearchDao.get_research_by_department(obj.department)
        .then(result=>{
            if(result){
                console.log(result)
            }
        })
    return re_dao;
}

async function get_research_by_title(title){
    const json = title;
    const obj = JSON.parse(json);
    console.log(obj.title);
    const re_dao = ResearchDao.get_research_by_title(obj.title)
        .then(result=>{
            if(result){
                console.log(result)
            }
        })
    return re_dao;
}

async function create_research(user_id, department, title, description, contacts){
    ResearchDao.create_research(user_id, department, title, description, contacts)
        .then(result=>{
            if(result){
                console.log(result)
            }
        })
    return true;
}

async function delete_user(re_id){
    const re_dao = ResearchDao.delete_research(re_id)
        .then(result=>{
            if(result){
                console.log("The Research:\n" + result + "\n was deleted.");
            }
        })
    return true;
}


async function update_department(json){
    const obj = JSON.parse(json)
    const id = obj.re_id
    const user= obj.user_id;
    const department = obj.department;
    ResearchDao.update_department(id, user, department)
        .then(result=>{
            if(result){
                console.log("Department Updated")
                console.log(result)
            }
        })
    return true;
}

async function update_title(json){
    const obj = JSON.parse(json)
    const id = obj.re_id
    const user= obj.user_id;
    const title = obj.title;
    ResearchDao.update_title(id, user, title)
        .then(result=>{
            if(result){
                console.log("Title Updated")
            }
        })
    return true;
}

async function update_description(json){
    const obj = JSON.parse(json)
    const id = obj.re_id
    const user= obj.user_id;
    const description = obj.description;
    ResearchDao.update_description(id, user, description)
        .then(result=>{
            if(result){
                console.log("Description Updated")
            }
        })
    return true;
}

async function update_contact(json){
    const obj = JSON.parse(json)
    const id = obj.re_id
    const user= obj.user_id;
    const contacts = obj.contacts;
    ResearchDao.update_contact(id, user, contacts)
        .then(result=>{
            if(result){
                console.log("Contacts Updated")
            }
        })
    return true;
}


// get_all_research()
// create_research(1, "Software", "Programming", "Testing", "787-000-0000")
// get_research_by_id('{"re_id":1}')
// get_research_by_user('{"user_id":1}')
// get_research_by_department('{"department":"Software"}')
