const { expect } = require('chai')
const knex = require('knex')
const supertest = require('supertest')
const app = require('../src/app')
const fixtures = require('./app.fixtures')

describe('Messages Endpoints', function () {
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


    context('Given there are messages in the database', () => {

        beforeEach('seed db', () => {
            fixtures.seedTables(
                db,
                testUsers,
                testRecipes,
                testMessages
            )
        });

        it('Get /api/messages responds with 200 and all of the users', () => {
            return supertest(app)
                .get('/api/messages')
                .expect(200)
        })

        it('Get /api/messages/:messageid responds with 200 and a specific message', () => {
            return supertest(app)
                .get('/api/messages/1')
                .expect(200)
                .expect('Content-Type', /json/);
        })
    })

})