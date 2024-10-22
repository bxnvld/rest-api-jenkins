const request = require('supertest');
const app = require('../server');

describe('GET /hello/:data',() => {
    it('should return Hello + data', async () => {
      const data = 'World';
      const response = await request(app).get(`/hello/${data}`);
      
      expect(response.statusCode).toBe(200);
      expect(response.text).toBe(`Hello ${data}`);
    });

    it('should return 404 invalid route', async () => {
        const response = await request(app).get('/some-route');

        expect(response.statusCode).toBe(404);
    });
});