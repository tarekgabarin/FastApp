const chai = require('chai');
const should = chai.should();
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
var assert = require('assert');
const server = require('../app');
const knex = require('../db/db');
const passportStub = require('passport-stub');

chai.use(chaiHttp);
passportStub.install(server);

describe('App', () => {

    describe('routes : user', () => {

        // describe('Array', function() {
        //     describe('#indexOf()', function() {
        //       it('should return -1 when the value is not present', function() {
        //         assert.equal([1, 2, 3].indexOf(4), -1);
        //       });
        //     });
        //   });

        beforeEach(() => {
            return knex.migrate.rollback()
            .then(() => { return knex.migrate.latest(); });
          });
        
          afterEach(() => {
            return knex.migrate.rollback();
          });

          describe('POST /user/register', () => {
            it('should register a new user', (done) => {
              chai.request(server)
              .post('/user/register')
              .send({
                user_name: 'Tarek',
                password: 'awesomesauce',
                email: 'awesome@whatever.com',
                starting_weight_in_pounds: 189.0
              })
              .end((err, res) => {
                should.not.exist(err);
                res.redirects.length.should.eql(0);
                res.status.should.eql(200);
                res.type.should.eql('application/json');
                res.body.status.should.eql('success');
                done();
              });
            });
          });

          describe('POST /user/login', () => {
            it('should login existing user', (done) => {
                chai.request(server)
                .post('/user/login')
                .send({
                  email: 'awesome@whatever.com',
                  password: 'awesomesauce',
                })
                .end((err, res) => {
                  should.not.exist(err);
                  res.redirects.length.should.eql(0);
                  res.status.should.eql(200);
                  res.type.should.eql('application/json');
                  res.body.status.should.eql('success');
                  done();
                });
            })
          })
    })

    
})