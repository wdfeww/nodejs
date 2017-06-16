

module.exports.add = (i, j) => (i + j); //skratena verzia spocitania 2 cisel returne sucet
module.exports.sub = (i, j, callback) => {
    setTimeout(()=> { callback(i-j); } , 1800);
};
module.exports.square = (j) => (j * j);
module.exports.getName = (name, age) => ({name: name, age: age});