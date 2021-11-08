const supertest = require('supertest');
const { app, server } = require('../../app');
const request = supertest(app);

const { disconnectDB } = require('../../config/database');

const Chance = require('chance');

describe('Controllers', () => {
  const chance = Chance();

  let token = '';

  let _id = '';
  let _id2 = '';

  const name = chance.string();
  const name2 = chance.string();

  beforeAll(async () => {
    // Fake registration to get auth token
    const email = chance.email();
    const password = chance.string();
    const res = await request.post('/api/v1/signup').send({
      email,
      password,
      confirmPassword: password,
    });

    token = res.body.token;
  });

  afterAll(() => {
    disconnectDB();
    server.close();
  });

  describe('-- Categories --', () => {
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
            name: name2,
          });

        expect(res2.status).toBe(200);

        _id2 = res2.body._id;
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
            name: chance.string(),
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
        const res = await request.delete(`/api/v1/categories/${_id2}`);

        expect(res.status).toBe(401);
      });

      it('should delete the required category', async () => {
        const res = await request
          .delete(`/api/v1/categories/${_id2}`)
          .set('Authorization', `Bearer ${token}`);

        expect(res.status).toBe(200);
      });
    });
  });

  describe('-- Resources --', () => {
    let resource_id = '';

    describe('POST /resources/:category', () => {
      it('should be a protected route', async () => {
        const res = await request.post(`/api/v1/resources/${_id}`);

        expect(res.status).toBe(401);
      });

      it('should thow error if name is not passed', async () => {
        const res = await request
          .post(`/api/v1/resources/${_id}`)
          .set('Authorization', `Bearer ${token}`)
          .send({
            author: chance.string(),
            duration: chance.integer(),
            link: chance.url(),
          });

        expect(res.status).toBe(400);
      });

      it('should thow error if duration is not numeric', async () => {
        const res = await request
          .post(`/api/v1/resources/${_id}`)
          .set('Authorization', `Bearer ${token}`)
          .send({
            name: chance.string(),
            author: chance.string(),
            duration: chance.string(),
            link: chance.url(),
          });

        expect(res.status).toBe(400);
      });

      it('should thow error if link is not a valid URL', async () => {
        const res = await request
          .post(`/api/v1/resources/${_id}`)
          .set('Authorization', `Bearer ${token}`)
          .send({
            name: chance.string(),
            author: chance.string(),
            duration: chance.integer(),
            link: chance.string(),
          });

        expect(res.status).toBe(400);
      });

      it('should create resource correctly', async () => {
        const res = await request
          .post(`/api/v1/resources/${_id}`)
          .set('Authorization', `Bearer ${token}`)
          .send({
            name: chance.string(),
            author: chance.string(),
            duration: chance.integer(),
            link: chance.url(),
          });

        expect(res.status).toBe(200);

        resource_id = res.body._id;
      });
    });

    describe('PUT /resources//:id', () => {
      it('should be a protected route', async () => {
        const res = await request.put(`/api/v1/resources/${resource_id}`);

        expect(res.status).toBe(401);
      });

      it('should thow error if name is not passed', async () => {
        const res = await request
          .put(`/api/v1/resources/${resource_id}`)
          .set('Authorization', `Bearer ${token}`)
          .send({
            author: chance.string(),
            duration: chance.integer(),
            link: chance.url(),
          });

        expect(res.status).toBe(400);
      });

      it('should thow error if duration is not numeric', async () => {
        const res = await request
          .put(`/api/v1/resources/${resource_id}`)
          .set('Authorization', `Bearer ${token}`)
          .send({
            name: chance.string(),
            author: chance.string(),
            duration: chance.string(),
            link: chance.url(),
          });

        expect(res.status).toBe(400);
      });

      it('should thow error if link is not a valid URL', async () => {
        const res = await request
          .put(`/api/v1/resources/${resource_id}`)
          .set('Authorization', `Bearer ${token}`)
          .send({
            name: chance.string(),
            author: chance.string(),
            duration: chance.integer(),
            link: chance.string(),
          });

        expect(res.status).toBe(400);
      });

      it('should update resource correctly', async () => {
        const res = await request
          .put(`/api/v1/resources/${resource_id}`)
          .set('Authorization', `Bearer ${token}`)
          .send({
            name: chance.string(),
            author: chance.string(),
            duration: chance.integer(),
            link: chance.url(),
          });

        expect(res.status).toBe(200);
      });
    });

    describe('DELETE /resources/:id', () => {
      it('should be a protected route', async () => {
        const res = await request.delete(`/api/v1/resources/${resource_id}`);

        expect(res.status).toBe(401);
      });

      it('should delete the required resource', async () => {
        const res = await request
          .delete(`/api/v1/resources/${resource_id}`)
          .set('Authorization', `Bearer ${token}`);

        expect(res.status).toBe(200);
      });
    });
  });
});
