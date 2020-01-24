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
                starting_weight_in_pounds: 189.0,
                timezone: 'America/Toronto'
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
            });
          });

          describe('GET /user/1', () => {
            it('should return user', (done) => {
              chai.request(server)
              .get('/user/1')
              .end((err, res) => {
                  expect(err).to.not.exist
                  expect(res.statusCode).to.equal(200);
                  expect(res.type).to.equal('application/json');
                  done();
              });
            });
          });

          describe('POST /runs/start_run/:user_id', () => {

            it('should create a run for user', (done) => {
              chai.request(server)
              .post('/runs/start_run/1')
              .send({
                user_id: 1,
                is_active: true,
                starting_date: "2020-01-24T20:02:39Z",
                eating_window_start_time: "05:00:00",
                eating_window_end_time: '24:00:00',
                calorie_intake: 600
              })
              .end((err, res) => {

                  expect(err).to.not.exist
                  expect(res.statusCode).to.equal(200);
                  expect(res.type).to.equal('application/json');
                  done();
              });
            });

          });

          //Todo Fix this
          describe('GET /runs/:user_id', () => {

            it('should get all runs for user', (done) => {
              chai.request(server)
              .get('/runs/1')
              .end((err, res) => {
                  expect(err).to.not.exist
                  expect(res.statusCode).to.equal(200);
                  expect(res.type).to.equal('application/json');
                  done();
              });
            });
          });

          //Todo Fix this 
          describe('GET /runs/:user_id/recent', () => {
            it('should return the most recent run for a user', (done) => {
              chai.request(server)
              .get('/runs/1/recent')
              .end((err, res) => {
                  expect(err).to.not.exist
                  expect(res.statusCode).to.equal(200);
                  expect(res.type).to.equal('application/json');
                  done();
              });
            });
            
          });

          describe('POST /user/logout', () => {
            it('should logout user', (done) => {
              chai.request(server)
              .get('/user/logout')
              .end((err, res) => {
                  expect(err).to.not.exist
                  expect(res.statusCode).to.equal(200);
                  expect(res.type).to.equal('application/json');
                  done();
              });
            });
          });

    })

    
})