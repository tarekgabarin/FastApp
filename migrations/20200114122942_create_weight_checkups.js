
exports.up = function(knex) {
    return knex.schema.createTable('weight_checkup', function(table){
        table.increments();
        table.date('date');
        table.float('weight_in_pounds');
        table.time('eating_window_end_time');
        table.integer('user_id').unsigned();
        table.foreign('user_id').references('user.id');
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('weight_checkup');
};
