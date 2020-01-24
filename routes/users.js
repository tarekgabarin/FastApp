var express = require('express');
var router = express.Router();
const queries = require('../db/queries');
var bcrypt = require('bcryptjs');
const passport = require('../auth/local');
const authHelpers = require('../auth/_helpers');
const knex = require('../db/db');

/* GET users listing. */
router.get('/', function(req, res, next) {
  queries.getAll('user').then(users => {
    res.json(users);
  }).catch(err => {
    if (err){
        throw err;
    }
});
});

router.post('/register', (req, res, next) => {
  
  const salt = bcrypt.genSaltSync();
  const hash = bcrypt.hashSync(req.body.password, salt);

  const reqObj = {
    user_name: req.body.user_name,
    email: req.body.email,
    password: hash,
    starting_weight_in_pounds: req.body.starting_weight_in_pounds,
    timezone: req.body.timezone
  }

  queries.createEntry('user', reqObj).then(() => {

  passport.authenticate('local', (err, userObj, info) => {

    if (userObj) {
      res.send({
        userId: userObj.id
      });
    }
  })(req, res, next)

  }).catch(err => {
    if (err){
        throw err;
    }
  });
});

router.post('/login', (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {

    if (err) {  authHelpers.handleResponse(res, 500, 'error'); }
    if (!user) { authHelpers.handleResponse(res, 404, 'User not found'); }
    if (user) {
      req.logIn(user, function (err) {
        if (err) { authHelpers.handleResponse(res, 500, 'error'); }
        authHelpers.handleResponse(res, 200, 'success');
      });
    }
  })(req, res, next);
});

router.get('/logout', (req, res, next) => {
  req.logout();
  authHelpers.handleResponse(res, 200, 'success');
});

router.get('/:id', function(req, res, next) {
  queries.getEntryById('user', req.params.id).then(user => {
    res.json(user);
  }).catch(err => {
    if (err){
        throw err;
    }
});
})

module.exports = router;
