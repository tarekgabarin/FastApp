
exports.up = function(knex) {
  return knex.schema.createTable('user', (table) => {

    table.increments();
    table.text("user_name");
    table.text('password');
    table.float("starting_weight_in_pounds");
    table.float('current_wieght_in_pounds');
    table.integer('calorie_intake')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('user')
};
