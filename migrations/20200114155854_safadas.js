
exports.up = function(knex) {
    return knex.schema.raw(`ALTER TABLE "weight_checkup" ADD run_id integer;`)
};

exports.down = function(knex) {
  
};
