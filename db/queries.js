const knex = require('../db/db');

module.exports = {
    getAll(tableName){
        return knex(tableName);
    },
    getEntryById(tableName, id){
        return knex(tableName).where({
            id
        });
    },
    //Todo make this return back the data
    createEntry(tableName, reqObj){
        return knex(tableName).insert(reqObj).select('*').where({
            user_name: reqObj.user_name
        })
    },
    getEntriesForUser(tableName, userId){
        return knex(tableName).where({
            user_id: userId
        })
        .orderBy('date', 'desc');
    },
    editMostRecentEntry(tableName, userId, updateObj){
        return knex(tableName).where({
            user_id: userId
        }).orderBy('date', 'desc').limit(1).update(updateObj)
    },
    getMostRecentEntry(tableName, userId){
        return knex(tableName).where({
            user_id: userId
        }).orderBy('date', 'desc').limit(1);
    }
}