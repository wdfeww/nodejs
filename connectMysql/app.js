var mysql = require('mysql');
var express = require('express');
var app = express();
var name,age;
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "nodejs"
});


var insert = ()=>{
    con.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
    var sql = "INSERT INTO Users (name, age) VALUES ('"+name+"', '"+age+"')";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("1 record inserted");
    });
    });
}

app.post('/user', (req,res)=>{
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', ' POST ');
    name = req.query.name;
    age = req.query.age;
    insert();

});

app.get

app.listen(3000, () => {
    console.log('Server started on port 3000');
});