const {Client} = require('pg');

const client = new Client ({
    host: "ec2-18-214-134-226.compute-1.amazonaws.com",
    port:5432,
    user: "lnnbqdnuqfxyts",
    password: "c9f40136a6003f07d7c62a14cf4dc50f242c53e03b6b44733f717468085e81a7",
    database: "d24aijjaddl6n2",

    ssl:{
        rejectUnauthorized: false
    }
})

client.connect();

client.query('SELECT * FROM "User"', (err, res)=>{
    if (!err){
        console.log(res.rows);
    }
    else{
        console.log(err);
    }
    client.end();
})
