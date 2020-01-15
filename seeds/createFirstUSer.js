
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('user').del()
    .then(function () {
      // Inserts seed entries
      return knex('user').insert([
        {
          user_name: 'JoeDoe',
          password: 'password',
          email: 'joe@whatever.com',
          starting_weight_in_pounds: 189.0
        },
      ]);
    });
};
