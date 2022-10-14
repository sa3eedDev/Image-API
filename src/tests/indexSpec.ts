import app from '../index';
import supertest from 'supertest';

const request = supertest(app);

describe('test Server', () => {
  it('Server is running', (done) => {
    request.get('/').expect(200, done());
  });
});
