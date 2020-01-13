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
    createEntry(tableName, reqObj){
        return knex(tableName).insert(reqObj);
    },
    getEntriesForUser(tableName, userId){
        return knex(tableName).where({
            user_id: userId
        })
        .orderBy('date', 'desc');
    }
}