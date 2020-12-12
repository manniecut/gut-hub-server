const { expect } = require('chai')
const knex = require('knex')
const supertest = require('supertest')
const app = require('../src/app')
const { makeRecipesArray } = require('./app.fixtures')

describe('Recipes Endpoints', function() {
    let db

    before('make knex instance', () => {
        db = knex({
            client: 'pg',
            connection: process.env.TEST_DB_URL
        })
        app.set('db', db)
    })

    after('disconnect from db', () => db.destroy())

    before('clean the table', () => db('recipes').truncate())

    context('Given there are recipes in the database', () => {
        const testRecipes = makeRecipesArray();

        beforeEach('insert recipes', () => {
            return db
                .into('recipes')
                .insert(testRecipes)
        })

        it('Get /api/recipes responds with 200 and all of the recipes', () => {
            return supertest(app)
            .get('/api/recipes')
            .expect(200)
        })
    })

})