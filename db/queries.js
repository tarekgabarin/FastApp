const knex = require('../db/db');

module.exports = {
    getAll(tableName){
        return knex(tableName);
    },
    getEntry(table, queryOb){
        return knex(table).where(queryOb);
    },
    getEntryById(tableName, id){
        return knex(tableName).where({
            id
        });
    },
    //Todo make this return back the data
    createEntry(tableName, reqObj){
        return knex(tableName).insert(reqObj);
    },
    getEntriesForUser(tableName, userId, dateColumn){
        return knex(tableName).where({
            user_id: userId
        })
        .orderBy(dateColumn, 'desc');
    },
    editMostRecentEntry(tableName, userId, dateColumn, updateObj){
        return knex(tableName).where({
            user_id: userId
        }).orderBy(dateColumn, 'desc').limit(1).update(updateObj)
    },
    getMostRecentEntry(tableName, userId, dateColumn){
        return knex(tableName).where({
            user_id: userId
        }).orderBy(dateColumn, 'desc').limit(1);
    }
}