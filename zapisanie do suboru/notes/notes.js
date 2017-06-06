console.log('Starting notes');
module.exports.age = 25;

//stary sposob pridania do modula funkciu
//module.exports.addNote = function(){}

//pridanie funkcie pomocou lambda vyrazov
module.exports.addNote = () => {
    console.log('Add new note');
}
module.exports.add = (i, j) => {
   return (i + j);
}