const { expect } = require('chai');
const supertest = require('supertest')
const app = require('../src/users/users-router')


describe('Users endpoint', () => {
    it('GET /api/users responds with 200', () => {
        return supertest(app)
            .get('/api/users')
            .expect(200)
            .expect('Content-Type', /json/);
    })
})