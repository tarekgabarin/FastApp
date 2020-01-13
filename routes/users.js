var express = require('express');
var router = express.Router();
const queries = require('../db/queries');

/* GET users listing. */
router.get('/', function(req, res, next) {
  queries.getAll('user').then(users => {

    console.log('users is', users);

    res.json(users);
  });
});

router.get('/:id', function(req, res, next) {
  queries.getEntryById('user', req.params.id).then(user => {
    res.json(user);
  })
})

module.exports = router;
