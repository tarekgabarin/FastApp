
exports.up = function(knex) {
    return knex.schema.raw(`ALTER TABLE "weight_checkup" DROP CONSTRAINT run_id_fkey;`)
};

exports.down = function(knex) {
  
};
