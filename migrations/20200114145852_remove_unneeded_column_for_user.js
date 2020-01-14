
exports.up = function(knex) {
  return knex.schema.raw(`ALTER TABLE "user" DROP "current_weight_in_pounds"`)
};

exports.down = function(knex) {
  
};
