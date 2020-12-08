const { expect } = require('chai');
const supertest = require('supertest')
const app = require('../src/messages/messages-router')


describe('Messages endpoint', () => {
    it('GET /api/messages responds with 200', () => {
        return supertest(app)
            .get('/api/messages')
            .expect(200)
            .expect('Content-Type', /json/);
    })
})