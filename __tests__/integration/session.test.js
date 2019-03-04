const request = require('supertest');
const { User } = require('../../src/app/models');
const truncate = require('../utils/truncate');
const app = require('../../src/app');

describe('Auth', () => {
  beforeEach(async () => {
    await truncate();
  });

  it('should authenticate with right credentials', async () => {
    const user = User.create({
      name: 'alan',
      email: 'toto@toto.com',
      password_hash: '123123',
    });

    const response = await request(app)
      .post('/sessions')
      .send({
        email: user.email,
        password: '123456',
      });

    expect(response.status).toBe(200);
  });
});
