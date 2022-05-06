const express = require('express')
const router = express.Router()
const User = require('./Controller/user_controller')
const UserDAO = require('./model/user')
const ApplicationDAO = require('./model/application')
const ResearchDAO = require('./model/research')
const Res_appDAO = require('./model/research_application')



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

app.get('/user/:us_id', (req, res)=>{
    const us_id = req.params.us_id
    res.send(UserDAO.get_user_by_id(us_id, res))
})

app.get('/user/Professors', async (req, res)=>{
    res.send(UserDAO.get_Professors())
})

app.get('/user/:concentration', async (req, res)=>{
    let x = res.send(req.params)
    res.send(UserDAO.get_user_by_concentration(x))
})

app.put('/user/:us_id/firstname', async (req,res) =>{
    res.send(UserDAO.update_firstname(req.params))

})

        /*==============
         Research Views
         ==============*/
app.get('/research', async (req,res)=>{
    const re_dao = await ResearchDAO.get_all_research()
    res.send(re_dao);
    }
)

app.get('/research/2', async (req,res)=>{
    // let x = res.send(req.params)
    const re_dao = await ResearchDAO.get_research_by_id(2)
    res.send(re_dao);
    }
)


    /*=======================
    Research Application Views
     =======================*/

      /*================
       Application Views
       ================*/


app.listen(process.env.PORT || 3000, () => console.log('App available on http://localhost:3000'))
