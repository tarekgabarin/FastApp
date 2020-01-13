
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {
          id: 1, 
          user_name: 'user',
          password: 'password',
          email: 'user@email.com',
          starting_weight_in_pounds: 186.0,
          current_weight_in_pounds: 186.0,
          calorie_intake: 600
        },
      ]);
    });
};
