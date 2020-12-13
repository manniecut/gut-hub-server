const { expect } = require('chai')
const knex = require('knex')
const supertest = require('supertest')
const app = require('../src/app')
const fixtures = require('./app.fixtures')

describe('Recipes Endpoints', function () {
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

    before('clean the table', () => db('recipes').truncate())

    afterEach(`truncate database and restart identities`, () => fixtures.cleanTables(db))


    context('Given there are recipes in the database', () => {
        beforeEach('seed db', () => {
            fixtures.seedTables(
                db,
                testUsers,
                testRecipes,
                testMessages
            )
        });

        it('Get /api/recipes responds with 200 and all of the recipes', () => {
            return supertest(app)
                .get('/api/recipes')
                .expect(200)
        })

        it('Get /api/recipes/:recipeid responds with 200 and a specific recipe', () => {
            return supertest(app)
                .get('/api/recipes/1')
                .expect(200)
                .expect('Content-Type', /json/);
        })
    })

})