const {ObjectId, MongoClient} = require('mongodb');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TestDB');

var user = mongoose.model('Users', {
    name: {
        type: String
    },
    age: {
        type: Number,
        integer: true,
        default: 21
    },
    location: {
        type: String
    }
});//novy model databazy, default hodnota, trimm osekanie medzier

var newUser = new user({
    name: 'Ferko',
    age: 32,
    location: 'Bratislava'
});//novy uzivatel pomocou modelu

newUser.save().then((doc) => {
    console.log('Saved user', doc);
}, (e) => {
    console.log('Unable to save user');
});//ulozenie do databazy a overenie ci nenastala chyba

/*

 MongoClient.connect('mongodb://localhost:27017/TestDB', (err, db) => {
 if (err) {
 return console.log('unable to connect to mongodb');
 }
 console.log('Connection ok');

 /* db.collection('Users').insertOne({
 name:'John',
 age:23,
 location:'Kosice'
 },(err, result)=>{
 if(err){
 console.log('Unable to insert data');
 }console.log(result.ops);
 });*/
/*  db.collection('Users').insertMany([{
 name: 'Mark',
 age: 52,
 location: 'Kosice'
 }, {
 name: 'Angelika',
 age: 33,
 location: 'Bratislava'
 }, {
 name: 'James',
 age: 32,
 location: 'USA'
 }],(err, result)=>{
 if(err){
 console.log('Unable to insert data');
 }console.log(result.ops);
 });*/ //viac zaznamov
/*
 db.collection('Users').find().count().then((count) => {
 console.log(`count: ${count}`);
 }, (err) => {
 console.log('Error', err);
 });//vracia pocet vsetkych riadkov v tabulke Users

 db.collection('Users').find({name: 'Mark'}).toArray().then((res) => {
 console.log(JSON.stringify(res));
 });//vyhladavam riadok podla columnu name = Mark

 db.collection('Users').find({_id: new ObjectId("594a152dc1648907f81d9607")}).toArray().then((res) => {
 console.log(res);
 });// vyhladavanie podla idcka

 //mazanie
 //deleteMany vymaze vsetky
 //deleteOne vymaze jeden
 //findOneAndDelete
 db.collection('Users').findOneAndDelete({_id: 0}).then((res) => {
 console.log(res);
 });

 //update
 db.collection('Users').findOneAndUpdate({_id: 1}, {
 $set: {name: 'Filip'},
 $inc: {age: 1}
 }, {returnOriginal: true}).then((res) => {//ak je return original true tak zobrazi stary zaznam pred zmenou
 console.log(res);
 });//set nastavi hodnotu, inc inkrementuje premennu

 db.close();

 });*/

