console.log('Starting notes');
const fs = require('fs');

//stary sposob pridania do modula funkciu
//module.exports.addNote = function(){}

//pridanie funkcie pomocou lambda vyrazov
/*
module.exports.addNote = (title, body) => {
    console.log('Added new note title:', title, 'body', body);
}
module.exports.add = (i, j) => {
   return (i + j);
}
module.exports.removeNote = () => {
    console.log('Note removed');
}
module.exports.readNote = () => {
    console.log('Note read');
}
module.exports.getAll = () => {
    console.log('Note list');
}*/

 var addNote = (title, body) => {
    console.log('Added new note title:', title, 'body', body);
    var notes=[];
    try{
       var stringNotes = fs.readFileSync('notes-data.json');
        notes = JSON.parse(stringNotes);
    }
    catch (e){
        console.log('cannot find file');
    }
    var note = {title, body};
    notes.push(note);
    fs.writeFileSync('notes-data.json',JSON.stringify(notes));
}
var add = (i, j) => {
    return (i + j);
}
var removeNote = () => {
    console.log('Note removed');
}
var readNote = () => {
    console.log('Note read');
}
var getAll = () =>
{
    return
}

module.exports = {
    addNote,
    removeNote,
    readNote,
    getAll,
    add
};