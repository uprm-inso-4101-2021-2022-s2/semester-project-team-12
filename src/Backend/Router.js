const express = require('express')
const router = express.Router()
const User = require('./Controller/user_controller')
const UserDAO = require('./model/user')
const Application = require('./Controller/application_controller')
const Research = require('./Controller/research_controller')
const Res_app = require('./Controller/researchapp_controller')



const app= express()


app.get('/', (req, res)=>{
    res.send("<h1> hi </h1>")
})

        /*==========
         User Views
        ===========*/


//GET ALL USERS
app.get('/users',async (req,res)=>{
    const u_dao = await UserDAO.get_all_user()
    res.send(u_dao);
    }
)

app.get('/user/:us_id(\d+)', (req, res)=>{
    res.send(User.get_user_id(req.params))
})

app.get('/user/Professors', (req, res)=>{
    res.send(User.get_Professors())
})

app.get('/user/:concentration', (req, res)=>{
    let x = res.send(req.params)
    res.send(User.get_user_by_concentration(x))
})

app.put('/user/:us_id/firstname',(req,res) =>{
    let x = res.send(req.params)
    res.send(User.update_first_name(x))
})

        /*==============
         Research Views
         ==============*/


    /*=======================
    Research Application Views
     =======================*/

      /*================
       Application Views
       ================*/


app.listen(process.env.PORT || 3000, () => console.log('App available on http://localhost:3000'))
