const {Activity , conn } = require('../../src/db.js');
const request = require('supertest');
const app = require('../../src/app.js');



describe('POST /actividad', () => {
    it('deberia devolver un status 404 y un msg de error si no mandan datos', async () => {
        expect.assertions(2);
      const res = await request(app).post('/actividad');
      expect(res.statusCode).toBe(404);
      expect(res.body).toBeDefined();
    });
});