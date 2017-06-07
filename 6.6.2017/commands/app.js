const notes = require('../notes/notes.js');
//ak pri spusteni pouzijem argument addNote
//npm install yargs - instalacia modulu
const yargs = require('yargs');

var command = process.argv[2];
var argv = yargs.argv;
if (command === 'addNote') {
  var note = notes.addNote(argv.title, argv.body)
    if(note)
        console.log("Note was added. Detail: title: ", note.title,"body: ", note.body)
    else
        console.log("Note was not added (note title already exists)")
}

else if (command === 'removeNote') {
   var note = notes.removeNote(argv.title);
   if(note)
       console.log("Note with title:", argv.title, "was removed");
    else
       console.log("Note with title:", argv.title, "was not removed because it not exists");
}

else if (command === 'readNote') {
    var note = notes.readNote();
   if(note)
       console.log("Your message is:",note.body);
    else
        console.log("No messages on title:", note.title);

}

else if (command === 'list') {
  var allNotes = notes.getAll();
  var n;
  var counter = 0;
  for(n in allNotes ){
      console.log(counter+".","Message: Title:",n.title,"Body:",n.body);
      counter++;
  }
} else {
    console.log('Unknown command');
}