
const express = require('express');
const Arres_db = require('../database');
const UserDao = require('../model/user');
const {callback} = require("pg/lib/native/query");

// const insert_user= async(email, password, first_name, last_name, isProfessor, Concentration) =>{
//     let query;
//     try {
//         query = [
//             email, password, first_name, last_name, isProfessor, Concentration
//         ]
//
//         await Arres_db.connect();
//         await Arres_db.query
//         ('INSERT INTO "User" ("email", "password", "first_name", "last_name", "isProfessor", "Concentration") VALUES($1,$2,$3,$4,$5,$6)', query);
//
//         return JSON.stringify(query);
//     } catch (error) {
//         console.error(error.stack);
//         return false;
//     } finally {
//         Arres_db.end();
//     }
// };
//
function get_all_user(){
    let u_dao = UserDao.get_all_user();
    return u_dao;
}

async function get_user_id(user_id){
    const json = '{"user_id":' + user_id + '}'
    let id = JSON.parse(json)
    console.log(id.user_id)
    const u_dao = UserDao.get_user_by_id(id.user_id)
        .then(result=>{
        if(result){
            console.log(result)
        }
    })
    return u_dao;
}

function check_user(email,password) {
    let u_dao = UserDao.check_user(JSON.stringify(email), JSON.stringify(password));
    return u_dao;
}

function delete_user(user_id){
    let u_dao = UserDao.delete_user(user_id);
    return u_dao;
}

// delete_user(20);
// check_user("working@gmail.com", "work")

get_user_id(1);

// UserDao.create_user('E@gmail.com', 'F','G', 'H', 1, 'Spanish')
//     .then(result=>{
//         if(result){
//             console.log(result)
//         }
//     })
