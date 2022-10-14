import app from '../../../index';
import supertest from 'supertest';

const request = supertest(app);

describe('Testing images controller functions', () => {
  describe('Testing checkInput', () => {
    it('Test error message if file not avaliable', (done) => {
      request
        .get('/api/images?filename=NotFound&width=2000&height=2000')
        .expect(410, done());
    });

    it('test checkinput with an avaliable file', (done) => {
      request
        .get('/api/images?filename=fjord&width=2000&height=2000')
        .expect(200, done());
    });
  });
});
