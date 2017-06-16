const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TestDB', (err,db)=>{
    if(err){
        return console.log('unable to connect to mongodb');
    }console.log('Connection ok');

    db.collection('Users').insertOne({
        name:'John',
        age:23,
        location:'Kosice'
    },(err, result)=>{
        if(err){
            console.log('Unable to insert data');
        }console.log(result.ops);
    });
});

