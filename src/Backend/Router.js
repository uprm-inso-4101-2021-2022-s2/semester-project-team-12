const express = require('express')
const router = express.Router()
const User = require('./Controller/user_controller')



        /*============
         User Views
        ============*/

//GET ALL USERS
router.get('/users',(req,res)=>{
    res.send(User.get_all_user());
    }
)

router.get('/user/:us_id', (req, res)=>{
    let x = res.send(req.params)
    res.send(User.get_user_id(x))
})



        /*==============
        Research Views
        ==============*/



module.exports=router;
