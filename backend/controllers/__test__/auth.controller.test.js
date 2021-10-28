const supertest = require('supertest');
const { app, server } = require('../../app');
const request = supertest(app);

const { disconnectDB } = require('../../config/database');

const Chance = require('chance');

describe('Authentication controller', () => {
  const chance = Chance();

  const email = chance.email();
  const password = chance.string({ length: 8 });

  afterAll(async () => {
    disconnectDB();
    server.close();
  });

  describe('POST /signup', () => {
    // Errors
    it('should throw error if password do not match', async () => {
      const confirmPassword = password + chance.string({ length: 5 });
      const res = await request.post('/api/v1/signup').send({
        email,
        password,
        confirmPassword: confirmPassword,
      });

      expect(res.status).toBe(400);
    });

    it('should throw error if email is not passed', async () => {
      const res = await request.post('/api/v1/signup').send({
        password,
        confirmPassword: password,
      });

      expect(res.status).toBe(400);
    });

    it('should throw error if password is not passed', async () => {
      const res = await request.post('/api/v1/signup').send({
        email,
      });

      expect(res.status).toBe(400);
    });

    it('should register new user correctly', async () => {
      const res = await request.post('/api/v1/signup').send({
        email,
        password,
        confirmPassword: password,
      });

      expect(res.status).toBe(200);
    });

    it('should not register a user with the same email', async () => {
      const res = await request.post('/api/v1/signup').send({
        email,
        password,
        confirmPassword: password,
      });

      expect(res.status).toBe(400);
    });
  });

  describe('POST /signin', () => {
    it('should throw error if email is not passed', async () => {
      const res = await request.post('/api/v1/signin').send({
        password,
      });

      expect(res.status).toBe(400);
    });

    it('should throw error if password is not passed', async () => {
      const res = await request.post('/api/v1/signin').send({
        email,
      });

      expect(res.status).toBe(400);
    });

    it('should throw error if user does not exist', async () => {
      const res = await request.post('/api/v1/signin').send({
        email: chance.email(),
        password,
      });

      expect(res.status).toBe(400);
    });

    it('should throw error if password is invalid', async () => {
      const res = await request.post('/api/v1/signin').send({
        email,
        password: chance.string(),
      });

      expect(res.status).toBe(400);
    });

    it('should login with registered user', async () => {
      const res = await request.post('/api/v1/signin').send({
        email,
        password,
      });

      expect(res.status).toBe(200);
    });
  });
});
