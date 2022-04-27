
const ResearchDao = require('../model/research');


async function get_all_research(){
    const re_dao = ResearchDao.get_all_research()
        .then(result=>{
            if(result){
                console.log(result)
                return result;
            }
        });
    return u_dao;
}


async function get_research_by_id(re_id){
    const json = re_id;
    const obj = JSON.parse(json);
    console.log(obj.id);
    const u_dao = ResearchDao.get_research_by_id(obj.id)
        .then(result=>{
            if(result){
                console.log(result)
            }
        })
    return u_dao;
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
