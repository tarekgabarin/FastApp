const chai = require('chai');
///const should = chai.should();
var expect  = require('chai').expect;
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

        before(() => {
            return knex.migrate.rollback()
            .then(() => { return knex.migrate.latest(); });
          });
        
          after(() => {
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
                expect(err).to.not.exist
                expect(res.statusCode).to.equal(200);
                expect(res.type).to.equal('application/json');
               // expect(res.body.status).to.equal('success');
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
                  expect(err).to.not.exist
                  expect(res.statusCode).to.equal(200);
                  expect(res.type).to.equal('application/json');
                 // expect(res.body.status).to.equal('success');
                  done();
                });
            })
          })
    })

    
})