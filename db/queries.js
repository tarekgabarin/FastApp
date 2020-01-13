const knex = require('../db/db');

module.exports = {
    getAll(tableName){
        return knex(tableName);
    },
    getEntryById(tableName, id){
        return knex(tableName).where({
            id
        });
    }
}