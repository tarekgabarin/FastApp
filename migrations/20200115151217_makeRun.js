exports.up = function(knex) {
    return knex.schema.createTable('weight_checkup', function(table){
        table.increments();
        table.date('date');
        table.float('weight_in_pounds');
        table.integer('user_id').unsigned();
        table.foreign('user_id').references('user.id');
        table.integer('run_id').unsigned();
        table.foreign('run_id').references('run.id');
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('weight_checkup');
};
