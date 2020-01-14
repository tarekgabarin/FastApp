
exports.up = function(knex) {
   return knex.schema.createTable('run', function(table){
        table.increment();
        table.boolean('is_active')
        table.date('starting_date');
        table.date('ending_date');
        table.time('eating_window_start_time');
        table.time('eating_window_end_time');
        table.integer('user_id').unsigned();
        table.foreign('user_id').references('user.id');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('run')
};
