const { expect } = require('chai')
const knex = require('knex')
const supertest = require('supertest')
const app = require('../src/app')
const { makeMessagesArray } = require('./app.fixtures')

describe('Messages Endpoints', function() {
    let db

    before('make knex instance', () => {
        db = knex({
            client: 'pg',
            connection: process.env.TEST_DB_URL
        })
        app.set('db', db)
    })

    after('disconnect from db', () => db.destroy())

    before('clean the table', () => db('messages').truncate())

    context('Given there are messages in the database', () => {
        const testMessages = makeMessagesArray();

        beforeEach('insert messages', () => {
            return db
                .into('messages')
                .insert(testMessages)
        })

        it('Get /api/messages responds with 200 and all of the users', () => {
            return supertest(app)
            .get('/api/messages')
            .expect(200)
        })
    })

})