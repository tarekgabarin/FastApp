
exports.up = function(knex) {
  return knex.schema.raw(`ALTER TABLE "weight_checkup" ADD CONSTRAINT run_id_fkey FOREIGN KEY (run_id) REFERENCES run (id);`)
};

exports.down = function(knex) {
  
};
