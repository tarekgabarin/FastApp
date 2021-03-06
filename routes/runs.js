var express = require('express');
var router = express.Router();
const queries = require('../db/queries');
const knex = require('../db/db');

router.get('/:user_id', function(req, res, next){
    queries.getEntriesForUser('run', req.params.user_id, 'starting_date').then(runs => {
        res.json(runs)
    }).catch(err => {
        if (err){
            throw err;
        }
    });
});

router.get('/:user_id/recent', (req, res, next) => {
    queries.getMostRecentEntry('run', req.params.user_id, 'starting_date').then(run => {
        res.json(run);
    }).catch(err => {
        if (err){
            throw err;
        }
    });
});

router.put('/end_run/:user_id', (req, res, next) => {

    const editObj = {
        is_active: false,
        ending_date: req.body.ending_date
    }
    queries.editMostRecentEntry('run', req.params.user_id, 'starting_date', editObj).then(oldRun => {
        res.json(oldRun);
    }).catch(err => {
        if (err){
            throw err;
        }
    });

});

router.post('/start_run/:user_id', (req, res, next) => {

    const reqObj = {
        user_id: req.params.user_id,
        is_active: true,
        starting_date: req.body.starting_date,
        ending_date: null,
        eating_window_start_time: req.body.eating_window_start_time,
        eating_window_end_time: req.body.eating_window_end_time,
        calorie_intake: req.body.calorie_intake
    }

    queries.createEntry('run', reqObj).then(run => {
        res.json(run);
    }).catch(err => {
        if (err){
            throw err;
        }
    });

})

module.exports = router;