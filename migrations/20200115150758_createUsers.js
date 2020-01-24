exports.up = function(knex) {
    return knex.schema.createTable('user', (table) => {
        table.increments();
        table.text("user_name");
        table.text('password');
        table.text('email');
        table.float("starting_weight_in_pounds");
        table.text('timezone')
      });
};

exports.down = function(knex) {
    return knex.schema.dropTable('user');
};
