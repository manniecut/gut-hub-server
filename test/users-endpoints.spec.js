const { expect } = require('chai')
const knex = require('knex')
const supertest = require('supertest')
const app = require('../src/app')
const { makeUsersArray } = require('./app.fixtures')

describe('Users Endpoints', function() {
    let db

    before('make knex instance', () => {
        db = knex({
            client: 'pg',
            connection: process.env.TEST_DB_URL
        })
        app.set('db', db)
    })

    after('disconnect from db', () => db.destroy())

    before('clean the table', () => db('users').truncate())

    context('Given there are users in the database', () => {
        const testUsers = makeUsersArray();

        beforeEach('insert users', () => {
            return db
                .into('users')
                .insert(testUsers)
        })

        it('Get /api/users responds with 200 and all of the users', () => {
            return supertest(app)
            .get('/api/users')
            .expect(200)
        })
    })

})