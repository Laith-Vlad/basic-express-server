const supertest = require('supertest');
const { app } = require('../src/server');

const request = supertest(app);

describe('Server Test', () => {
  it('should respond with 404 on a bad route', async () => {
    const response = await request.get('/wrong-route');
    expect(response.status).toBe(404);
  });

  it('should respond with 404 on a bad method', async () => {
    const response = await request.post('/person');
    expect(response.status).toBe(404);
  });

  it('should respond with 500 if no name in the query string', async () => {
    const response = await request.get('/person');
    expect(response.status).toBe(500);
  });

  it('should respond with 200 if the name is in the query string', async () => {
    const response = await request.get('/person?name=John');
    expect(response.status).toBe(200);
  });

  it('should respond with the correct output object if the name is in the query string', async () => {
    const response = await request.get('/person?name=John');
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ name: 'John' });
  });
});