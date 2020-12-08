const { expect } = require('chai');
const supertest = require('supertest')
const app = require('../src/recipes/recipes-router')


describe('Recipes endpoint', () => {
    it('GET /api/recipes responds with 200', () => {
        return supertest(app)
            .get('/api/recipes')
            .expect(200)
            .expect('Content-Type', /json/);
    })
})
