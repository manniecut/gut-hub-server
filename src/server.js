const knex = require('knex')
const app = require('./app')
const { PORT, DATABASE_URL } = require('./config')

// set up knex instance connected to the database
const db = knex({
    client: 'pg',
    connection: DATABASE_URL
})

// set up variable for knex instance to use throughout app
app.set('db', db)

app.listen(PORT, () => {
    console.log(`Server listenin' at http://localhost:${PORT}`)
})