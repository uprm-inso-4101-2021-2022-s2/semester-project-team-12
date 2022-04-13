
const express = require('express');
const Arres_db = require('../database');
const UserDao = require('../model/user');


function get_all_user(){
    const u_dao = UserDao.get_all_user()
        .then(result=>{
        if(result){
            console.log(result)
            return result;
        }
    });
    return u_dao;
}

async function get_user_id(user_id){
    const json = user_id;
    const obj = JSON.parse(json);
    console.log(obj.name);
    const u_dao = UserDao.get_user_by_id(obj.name)
        .then(result=>{
            if(result){
                console.log(result)
            }
        })
    return u_dao;
}

function check_user(email,password) {
    const u_dao= UserDao;
    u_dao.check_user(JSON.stringify(email), JSON.stringify(password))
        .then(result=>{
            if(result){
                const obj = JSON.parse(result)
                a = obj[0].us_id;
                return a;
            }
        })

    return true;
}

function delete_user(user_id){
    const u_dao = UserDao.delete_user(user_id)
        .then(result=>{
            if(result){
                console.log("The User:\n" + result + "\n was deleted.");
            }
        })
    return true;
}


function create_user(email, password, first_name, last_name, isProfessor, Concentration){
    UserDao.create_user(email, password, first_name, last_name, isProfessor, Concentration)
        .then(result=>{
            if(result){
                console.log(result)
            }
        })
    return true;
}


module.exports = {get_user_id, get_all_user, check_user, delete_user, create_user}


// get_all_user();
// delete_user(27);
// check_user("working@gmail.com", "work")
// get_user_id('{"name":10}');
