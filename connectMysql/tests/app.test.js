const {app} = require('../app');
const request = require('supertest');
const expect = require('expect');
//test sa spusta pomocou prikazu npm test
const user = {
    name: 'Mark',
    age: 92
};


describe('/user', () => {
    it('Test adding user into database', (done) => {

        request(app)
            .post('/user')
            .query(user)
            .expect(200)
            .end((err, res) => {
                if (err) {
                    return done(err);
                }


            });

        setTimeout(done, 500);
    });

    it('Test load webpage', (done) => {

        request(app)
            .get('/')
            .expect(200)
            .end((err, res) => {
                if (err) {
                    return done(err);
                }

                setTimeout(done, 500);

            });


    });
});

