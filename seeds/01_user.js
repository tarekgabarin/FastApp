
exports.seed = function(knex) {
  return knex('user').del()
    .then(function () {
      return knex('user').insert([
        {
          id: 1, 
          user_name: 'user',
          password: 'password',
          starting_weight_in_pounds: 186.0,
          current_weight_in_pounds: 186.0,
          calorie_intake: 600
        },
      ]);
    });
};
