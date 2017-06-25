var mysql = require('mysql');
var express = require('express');
const hbs = require('hbs');

var app = express();
app.set('view engine','hbs');

var pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'nodejs'
});


var insert = (name,age, res) => {6

    pool.getConnection((err, connection) => {
        if (err) {
            throw err;

        }
        var sql = "INSERT INTO Users (name, age) VALUES ('"+ name +"', " + age + ")";
        connection.query(sql, (err, results) => {
            if (err) {
                throw err;
                res.status(400).send();
            } else {
                console.log("user added into database");
                res.status(200).send();
            }

        });
        connection.release();
    });
};

app.post('/user', (req, res) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', ' POST ');
    var name = req.query.name;
    var age = req.query.age;
    insert(name, age, res);

});

app.get('/', (req,res)=>{
    res.render('index.hbs');//call back funkcia ktora bude dynamicky menit stranka

});

app.listen(3030, () => {
    console.log('Server started on port 3030');
});