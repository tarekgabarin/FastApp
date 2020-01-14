
exports.up = function(knex) {
    return knex.schema.raw(`ALTER TABLE "run" ADD calorie_intake integer;`)
};

exports.down = function(knex) {
  
};
