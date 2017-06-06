console.log("Starting app");
const fs = require('fs');
const notes = require('./notes/notes.js');
// ak exituje prepise aj nie vytvori
fs.appendFile('greeting.txt', 'Hello');
const os = require('os');
var user = os.userInfo();
//fs.appendFile('greeting.txt', `User: ${user.username}`);
fs.appendFile('greeting.txt', `User: ${user.username}, Age: ${notes.age}`);
notes.addNote();
//ak ma funkcia navratovu hodnotu string mozem vypisat string var response = notes.addNote(); console.log(response);

var result = notes.add(1, 2);
console.log(result);