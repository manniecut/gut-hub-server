const { expect } = require('chai');
const supertest = require('supertest')
const app = require('../src/app')

describe('Server is running', () => {
    it('GET /health responds with 200 containing "Server is active"', () => {
        return supertest(app)
            .get('/health')
            .expect(200, 'Server is active')
            
    })
})