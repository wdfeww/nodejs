//testovaci subor utils.js
//unit testy

const utils = require('./utils.js');
const expect = require('expect');
//it testovacia funkcia, pozostava z nazvu a funkcie ktora vykonava test
//**inside json** script test ma spustit mocha, spusti test utils.test.js, ak by som napisal *.js vypise vsetky testy
it('should add 2 numbers', () => {
    var res = utils.add(13, 25);
    //if(res!==38)
    //  throw new Error(`Expected 38 but got ${res}`);


    //pomocou modulu expect
    expect(res).toBe(38).toBeAn('number');
});


it('is valid name and age', () => {
    var res = utils.getName('Martin', 32);

    expect(res).toInclude({name: 'Martin'});//ci obsahuje vysledok {name:'Martin'}
    // ak chcem overit presny vystup pouzijem  expect(res).toExpect({name:'Martin', age:32});

});

it('should sub 2 numbers', (done) => {
    utils.sub(13, 3, (res) => {
        expect(res).toBe(10);
        done();
    });
});