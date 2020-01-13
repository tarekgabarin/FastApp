var express = require('express');
var router = express.Router();
const queries = require('../db/queries');
const knex = require('../db/db');

router.get('/:user_id', function(req, res, next){
    queries.getEntriesForUser('weight_checkup', req.params.user_id).then(checkups => {
        res.json(checkups)
    }).catch(err => {
        if (err){
            throw err;
        }
    });
})

router.post('/add/:user_id', function(req, res, next) {

    const reqObj = {
        date: req.body.date,
        weight_in_pounds: req.body.weight,
        user: req.params.user_id
    }

    queries.createEntry('weight_checkup', reqObj).then(weight => {
        res.json(weight);
    }).catch(err => {
        if (err){
            throw err;
        }
    });

});