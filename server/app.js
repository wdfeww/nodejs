const express = require('express');
var app = express()

app.get('/', (req,res)=>{
    res.send({message:'root message'});

});

app.get('/about', (req,res)=>{
    res.send('<h1>Welcome</h1>');

});

app.use(express.static(__dirname+'/public'));  // v prehliadaci localhost:4040/help.html

app.listen(4040, ()=>{console.log("server running on port 4040");});