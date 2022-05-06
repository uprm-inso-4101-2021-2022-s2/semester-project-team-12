
const UserDao = require('../model/user');


async function get_all_user(){
    UserDao.get_all_user()
        .then(result=>{
        if(result){
            console.log(result)
            return result;
        }
    });
}

async function get_user_id(user_id){
    const u_dao = UserDao.get_user_by_id(user_id)
        .then(result=>{
            if(result){
                console.log(result)
            }
        })
    return u_dao;
}

async function get_Professors(){
    const u_dao = UserDao.get_Professors()
        .then(result=>{
            if(result){
                console.log(result)
                return result;
            }
        });
    return u_dao;
}

async function get_user_by_concentration(concentration){
    const json = concentration;
    const obj = JSON.parse(json);
    console.log(obj.concentration);
    const u_dao = UserDao.get_user_by_concentration(obj.concentration)
        .then(result=>{
            if(result){
                console.log(result)
            }
        })
    return u_dao;
}

async function check_user(email,password) {
    const u_dao= UserDao;
    u_dao.check_user(JSON.stringify(email), JSON.stringify(password))
        .then(result=>{
            if(result){
                const obj = JSON.parse(result)
                return obj[0].us_id;
            }
        })

    return true;
}

async function delete_user(user_id){
    const u_dao = UserDao.delete_user(user_id)
        .then(result=>{
            if(result){
                console.log("The User:\n" + result + "\n was deleted.");
            }
        })
    return true;
}


async function create_user(email, password, first_name, last_name, isProfessor, Concentration){
    UserDao.create_user(email, password, first_name, last_name, isProfessor, Concentration)
        .then(result=>{
            if(result){
                console.log(result)
            }
        })
    return true;
}

async function update_email(json){
    const obj = JSON.parse(json)
    const id = obj.us_id;
    const email = obj.email;
    UserDao.update_email(id, email)
        .then(result=>{
            if(result){
                console.log("Email Updated")
                console.log(result)
            }
        })
    return true;
}

async function update_password(json){
    const obj = JSON.parse(json)
    const id = obj.us_id;
    const email = obj.password;
    UserDao.update_email(id, email)
        .then(result=>{
            if(result){
                console.log("Password Updated")
            }
        })
    return true;
}

async function update_first_name(json){
    const obj = JSON.parse(json)
    const id = obj.us_id;
    const first = obj.first_name;
    UserDao.update_firstname(id, first)
        .then(result=>{
            if(result){
                console.log("First Name Updated")
            }
        })
    return true;
}

async function update_last_name(json){
    const obj = JSON.parse(json)
    const id = obj.us_id;
    const last = obj.last_name;
    UserDao.update_lastname(id, last)
        .then(result=>{
            if(result){
                console.log("Last Name Updated")
            }
        })
    return true;
}

module.exports = {get_user_id, get_all_user, get_user_by_concentration, get_Professors, check_user, delete_user, create_user, update_email, update_password, update_first_name, update_last_name}


// get_all_user();
// delete_user(27);
// check_user("working@gmail.com", "work")
// get_user_id(2);
// update_email('{"us_id":1, "email":"testing@gmail.com"}')
