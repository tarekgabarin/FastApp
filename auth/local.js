const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const authHelpers = require('./_helpers');

const init = require('./passport');
const knex = require('../db/db');

const options = {};

init();

passport.use(new LocalStrategy(options, (user_name, password, done) => {
  knex('users').where({ user_name }).first()
  .then((user) => {
    if (!user) return done(null, false);
    if (!authHelpers.comparePass(password, user.password)) {
      return done(null, false);
    } else {
      return done(null, user);
    }
  })
  .catch((err) => { return done(err); });
}));

module.exports = passport;