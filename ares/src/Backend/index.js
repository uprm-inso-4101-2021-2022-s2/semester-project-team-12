
// const express = require('express')
// const sqlite3 = require("sqlite3").verbose();
//
// const db = new sqlite3.Database('./mock.db',sqlite3.OPEN_READWRITE, (err)=>{
//     if(err) return console.error(err.message());
//
//     console.log("Connection successful")
// })


const app = express()

app.set('port', 3000)

app.listen(app.get('port'), ()=> {
        console.log('Server on port', app.get('port'))
    }
)