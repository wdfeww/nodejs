const _ = require('lodash');

var name = 'Jan';
var city = 74;

console.log(name, _.isString(name));

var myArray = ['Jan', 7, 'Ivan', 8 , 7, 'Jan', 4, 'Ivan'];
//zrusit duplicity v poli
var filtredArray = _.uniq(myArray);
console.log(filtredArray);