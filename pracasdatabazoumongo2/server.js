var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./model/todo');
var {ObjectID} = require('mongodb');

var app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    var todo = new Todo({
        text: req.body.text
    });

    todo.save().then((doc) => {
        res.send(doc);
    }, (e) => {
        res.status(400).send(e);
    });
});
/*
app.get('/todos', (req, res) => {
    Todo.find().then((result) => {
        res.send(result);
    }, (err) => {
        res.status(400).send(err);
    });
});*/

app.get('/todos/:id', (req, res) => {
    var id = req.param.id;
    if (!ObjectID.isValid(id)) {
        return res.status(404).send();
    }
    Todo.findById(id).then((result) => {
        if (!result) {//ak je result prazdny
            return res.status(204).send();//prazdny result kod 204 prazdny content
        }
        res.status(200).send();
        return res.send(result);
    }).catch((err)=>{
        res.status(400).send();
    });
});



app.listen(3000, () => {
    console.log('Server started on port 3000');
});

module.exports = {app};