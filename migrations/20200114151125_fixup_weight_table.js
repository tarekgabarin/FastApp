
exports.up = function(knex) {
    return knex.schema.raw(`ALTER TABLE "weight_checkup" DROP COLUMN "eating_window_end_time";`)
};

exports.down = function(knex) {
  
};
