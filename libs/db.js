if (process.env.NODE_ENV) {
  var knex = require('knex')({
    connectionString: process.env.DATABASE_URL,
    })
} else {
    var knex = require('knex')({
        client: 'pg',
        connection: {
        database: 'plant_finder_db'
        }
    })
}

module.exports = knex