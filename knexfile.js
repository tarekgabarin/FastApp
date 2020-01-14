// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: 'fastapp',
      host: 'localhost',
      port: 5432,
      user: 'postgres',
      password: 'password'
    },
    migrations: {
      directory: __dirname + '/migrations',
    },
    seeds: {
      directory: __dirname + '/seeds'
    }
  },

  test: {
    client: 'pg',
    connection: {
      database: 'fastapp-test',
      host: 'localhost',
      port: 5432,
      user: 'postgres',
      password: 'password'
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'fastapp',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
