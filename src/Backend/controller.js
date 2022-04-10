

const {Client} = require('pg');

const client = new Client ({
    connectionString: process.env.DATABASE_URL ||
        "postgres://lnnbqdnuqfxyts:c9f40136a6003f07d7c62a14cf4dc50f242c53e03b6b44733f717468085e81a7@ec2-18-214-134-226.compute-1.amazonaws.com:5432/d24aijjaddl6n2,",
    dialect: 'postgres',
    dialectOptions: {
        ssl: require
    }
});

client.connect();
client.query ('select * from User', (err, res)=>{
    if (!err){
        console.log(res.rows);
    }
    else{
        console.log(err);
    }
    client.end;
})
