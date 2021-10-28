const request = require('supertest');
const server = request.agent('http://localhost:5000');

describe('Resource controller', () => {
  it('should create a new resource', async () => {
    const res = await server.post('/api/v1/resources/1').send({
      user: '616451fdf227a6002b27d202',
      name: 'Example',
      author: 'Example',
      duration: 100,
      link: 'https://test.com',
    });
    console.log(res);
    expect(res.statusCode).toEqual(200);
  });
});
