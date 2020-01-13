
exports.up = function(knex) {
  return knex.schema.table('user', (table) => {
      table.renameColumn('current_wieght_in_pounds', 'current_weight_in_pounds')
  })
};

exports.down = function(knex) {
  
};
