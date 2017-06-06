const notes = require('../notes/notes.js');
//ak pri spusteni pouzijem argument addNote
//npm install yargs - instalacia modulu
const yargs = require('yargs');

var command = process.argv[2];
var argv = yargs.argv;
if (command === 'addNote') {
    notes.addNote(argv.title, argv.body);
} else if (command === 'removeNote') {
    notes.removeNote();
} else if (command === 'readNote') {
    notes.readNote();
} else if (command === 'list') {
    notes.getAll();
} else {
    console.log('Unknown command');
}