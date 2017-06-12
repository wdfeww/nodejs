const express = require('express');
const hbs = require('hbs');
hbs.registerPartials(__dirname+'/views/partials');//registracia priecinka do hbs

hbs.registerHelper('getCurrentYear', ()=>{
    return (new Date().getFullYear());
});//registracia helpra funkcia vracia rok

hbs.registerHelper('screamIt', (text)=>{
    return (text.toUpperCase());
});

var app = express();

app.use((req,res,next)=>{
    var now = new Date();
console.log(`${now}, ${req.method},${req.url}`);
next();
});

var d = new Date();
var weekday = new Array(7);
weekday[0] =  'Sunday';
weekday[1] = 'Monday';
weekday[2] = 'Tuesday';
weekday[3] = 'Wednesday';
weekday[4] = 'Thursday';
weekday[5] = 'Friday';
weekday[6] = 'Saturday';
var da = weekday[d.getDay()];

app.set('view engine','hbs');//registracia enginu hbs do app
app.get('/', (req,res)=>{
    res.send({message:'root message'});

});

app.get('/about', (req,res)=>{
    res.render('about.hbs', {
    pageTitle:'Moja stranka',
    year: new Date().getFullYear(),
    day: da,
    name: 'wdfeww',
    month: new Date().getMonth()+1
});//call back funkcia ktora bude dynamicky menit stranka

});

app.use(express.static(__dirname+'/public'));  // v prehliadaci localhost:4040/help.html

app.listen(4040, ()=>{console.log("server running on port 4040");});