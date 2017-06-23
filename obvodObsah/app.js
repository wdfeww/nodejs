var express = require('express');
var app = express();

app.get('/calculations', (req,res)=>{
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', ' GET ');
  var radius = req.query.r;
  var capacity = radius*radius*3.14;
  var circumference = radius*2*3.14;
    res.status(200);
   res.send({
       capacity,
       circumference
   });

});

app.listen(3000, () => {
    console.log('Server started on port 3000');
});