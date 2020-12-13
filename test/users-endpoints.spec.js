const { expect } = require('chai')
const knex = require('knex')
const supertest = require('supertest')
const app = require('../src/app')
const fixtures = require('./app.fixtures')

describe('Users Endpoints', function () {
    let db

    const { testUsers, testRecipes, testMessages } = fixtures.makeFixtures();

    before('make knex instance', () => {
        db = knex({
            client: 'pg',
            connection: process.env.TEST_DB_URL
        })
        app.set('db', db)
    })

    after('disconnect from db', () => db.destroy())

    before('clean the table', () => fixtures.cleanTables(db))

    afterEach(`truncate database and restart identities`, () => fixtures.cleanTables(db))


    context('Given there are users in the database', () => {

        beforeEach('seed db', () => {
            fixtures.seedTables(
                db,
                testUsers,
                testRecipes,
                testMessages
            )
        });


        it('Get /api/users responds with 200 and all of the users', () => {
            return supertest(app)
                .get('/api/users')
                .expect(200)
        })

        it('Get /api/users/:userid responds with 200 and a specific user', () => {
            return supertest(app)
                .get('/api/users/1')
                .expect(200)
                .expect('Content-Type', /json/);
        })
    })

})