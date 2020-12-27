const { expect } = require('chai')
const knex = require('knex')
const supertest = require('supertest')
const app = require('../src/app')
const fixtures = require('./app.fixtures')

describe('Login Endpoint', function () {
    
    let db

    const { testUsers, testRecipes, testMessages } = fixtures.makeFixtures();
    const testUser = fixtures.randomUser();

    before('make knex instance', () => {
        db = knex({
            client: 'pg',
            connection: process.env.TEST_DB_URL
        })
        app.set('db', db)
    })

    after('disconnect from db', () => db.destroy())

    before('clean the tables', () => fixtures.cleanTables(db))

    afterEach(`cleam the tables`, () => fixtures.cleanTables(db))


    context('The user is trying to log in', () => {

        beforeEach('seed db', () => {
            fixtures.seedTables(
                db,
                testUsers,
                testRecipes,
                testMessages
            )
        });

        it(`responds 400 'required' error when key is missing`, () => {
                const loginInfo = { username: testUser.username }            
                return (
                    supertest(app)
                        .post(`/api/login`)
                        .send(loginInfo)
                        .expect(
                            400,
                            { error: `Missing '${key}' in request body` }
                        )
                );
            });
            it(`responds 400 'invalid username or password' when bad username exists`, () => {
                const userInvalidUser = { username: 'wrong', pass: 'wrong' };
                return (
                    supertest(app)
                        .post(`/api/login`)
                        .send(userInvalidUser)
                        .expect(
                            400,
                            { error: `Incorrect username or password` }
                        )
                );
            });

            it(`responds 400 'invalid username or password' when bad password exists`, () => {
                const userInvalidPass = { username: testUser.username, pass: 'wrong' };
                return (
                    supertest(app)
                        .post(`/api/login`)
                        .send(userInvalidPass)
                        .expect(
                            400,
                            { error: `Incorrect username or password` }
                        )
                );
            });

            it(`responds 200 when valid credentials`, () => {
                const validUserCreds = {
                    username: testUser.username,
                    password: testUser.pass
                };

                return (
                    supertest(app)
                        .post(`/api/login`)
                        .send(validUserCreds)
                        .expect(200)
                );
            });
        });
    })



