var express = require('express');
var router = express.Router();
const queries = require('../db/queries');
const knex = require('../db/db');

router.get('/:user_id', function(req, res, next){
    queries.getEntriesForUser('weight_checkup', req.params.user_id, 'date').then(checkups => {
        res.json(checkups)
    }).catch(err => {
        if (err){
            throw err;
        }
    });
});

router.get('/recent/:user_id', (req, res, next) => {
    queries.getMostRecentEntry('weight_checkup', req.params.user_id, 'date').then(weightCheckup => {
        res.json(weightCheckup);
    }).catch(err => {
        if (err){
            throw err;
        }
    });
})

router.put('/edit/:user_id', (req, res, next) => {

    const updateObj = {
        weight_in_pounds: req.body.weight_in_pounds
    }

    queries.editMostRecentEntry('weight_checkup', req.params.user_id, 'date', updateObj).then(updatedWeightCheckup => {
        res.json(updatedWeightCheckup)
    }).catch(err => {
        if (err){
            throw err;
        }
    });

});

router.post('/add/:run_id/:user_id', function(req, res, next) {

    const reqObj = {
        date: req.body.date,
        weight_in_pounds: req.body.weight,
        user_id: req.params.user_id,
        run_id: req.params.run_id
    }

    queries.createEntry('weight_checkup', reqObj).then(weight => {
        res.json(weight);
    }).catch(err => {
        if (err){
            throw err;
        }
    });

});

module.exports = router;