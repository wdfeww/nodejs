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
var fetchNotes = ()=>{
    try{
        var stringNotes = fs.readFileSync('notes-data.json');
        return JSON.parse(stringNotes);
    }
    catch (e){
        return [];
    }
}

var saveNotes = (notes)=> {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
}

 var addNote = (title, body) => {
    var notes = fetchNotes();
    var note = {title, body};
    var dupliciteNotes = notes.filter((note)=> note.title === title);
    if(dupliciteNotes.length == 0) {
        notes.push(note);
        saveNotes(notes);
        return note;
    }
    return null;
}
var add = (i, j) => {
    return (i + j);
}
var removeNote = (title) => {
    var notes = fetchNotes();
    var filtredNotes = notes.filter((note)=> note.title !== title);
    if(filtredNotes.length != notes.length) {
        saveNotes(filtredNotes);
        return true;
    }
    return false;

}
var readNote = (title) => {
    var notes = fetchNotes();
    var note = notes.filter((note)=>note.title === title)
    return note;

}
var getAll = () =>
{
return fetchNotes();
}

module.exports = {
    addNote,
    removeNote,
    readNote,
    getAll,
    add
};