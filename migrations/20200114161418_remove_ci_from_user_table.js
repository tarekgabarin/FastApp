
exports.up = function(knex) {
    return knex.schema.raw(`ALTER TABLE "user" DROP "calorie_intake";`)
};

exports.down = function(knex) {
  
};
