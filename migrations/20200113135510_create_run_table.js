
exports.up = function(knex) {
  knex.schema.createTable('run', function(table){
      table.increment();
      table.date('starting_date');
      table.date('ending_date');
      table.time('eating_window_start_time');
      table.time('eating_window_end_time');
      table.integer('user_id').unsigned();
      table.foreign('user_id').references('user.id');
  })
};

exports.down = function(knex) {
  
};
