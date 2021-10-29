const supertest = require('supertest');
const { app, server } = require('../../app');
const request = supertest(app);

const { disconnectDB } = require('../../config/database');

const Chance = require('chance');

describe('Category controller', () => {
  const chance = Chance();

  let token = '';

  const email = chance.email();
  const password = chance.string();

  let _id = '';
  const name = chance.string();
  const secondName = chance.string();
  const newName = chance.string();

  beforeAll(async () => {
    // Fake registration to get auth token
    const res = await request.post('/api/v1/signup').send({
      email,
      password,
      confirmPassword: password,
    });

    token = res.body.token;
  });

  afterAll(async () => {
    disconnectDB();
    server.close();
  });

  describe('POST /categories', () => {
    it('should be a protected route', async () => {
      const res = await request.post('/api/v1/categories');

      expect(res.status).toBe(401);
    });

    it('should thow error if name is not passed', async () => {
      const res = await request
        .post('/api/v1/categories')
        .set('Authorization', `Bearer ${token}`);

      expect(res.status).toBe(400);
    });

    it('should create categories correctly', async () => {
      const res = await request
        .post('/api/v1/categories')
        .set('Authorization', `Bearer ${token}`)
        .send({
          name,
        });

      expect(res.status).toBe(200);

      _id = res.body._id;

      const res2 = await request
        .post('/api/v1/categories')
        .set('Authorization', `Bearer ${token}`)
        .send({
          name: secondName,
        });

      expect(res2.status).toBe(200);
    });
  });

  describe('PUT /categories/:id', () => {
    it('should be a protected route', async () => {
      const res = await request.put('/api/v1/categories');

      expect(res.status).toBe(401);
    });

    it('should thow error if name is not passed', async () => {
      const res = await request
        .put(`/api/v1/categories/${_id}`)
        .set('Authorization', `Bearer ${token}`);

      expect(res.status).toBe(400);
    });

    it('should update category correctly', async () => {
      const res = await request
        .put(`/api/v1/categories/${_id}`)
        .set('Authorization', `Bearer ${token}`)
        .send({
          name: newName,
        });

      expect(res.status).toBe(200);
    });
  });

  describe('GET /categories', () => {
    it('should be a protected route', async () => {
      const res = await request.get('/api/v1/categories');

      expect(res.status).toBe(401);
    });

    it('should return all categories', async () => {
      const res = await request
        .get('/api/v1/categories')
        .set('Authorization', `Bearer ${token}`);

      expect(res.status).toBe(200);
      expect(res.body.length).toBe(2);
    });
  });

  describe('GET /categories/:id', () => {
    it('should be a protected route', async () => {
      const res = await request.get(`/api/v1/categories/${_id}`);

      expect(res.status).toBe(401);
    });

    it('should return the required category', async () => {
      const res = await request
        .get(`/api/v1/categories/${_id}`)
        .set('Authorization', `Bearer ${token}`);

      expect(res.status).toBe(200);
      expect(res.body._id).toBe(_id);
    });
  });

  describe('DELETE /categories/:id', () => {
    it('should be a protected route', async () => {
      const res = await request.delete(`/api/v1/categories/${_id}`);

      expect(res.status).toBe(401);
    });

    it('should delete the required category', async () => {
      const res = await request
        .delete(`/api/v1/categories/${_id}`)
        .set('Authorization', `Bearer ${token}`);

      expect(res.status).toBe(200);
    });
  });
});
