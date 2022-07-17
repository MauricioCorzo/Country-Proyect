/* eslint-disable import/no-extraneous-dependencies */
// const { expect } = require('chai');
const request = require('supertest');
const app = require('../../src/app.js');
const { Country, conn } = require('../../src/db.js');

describe('Country Routes', () => {
    beforeAll(async () => {
      await conn.sync({ force: true });
    });

    describe('Country Routes', () => {
        it('deberia traer todos los paises y mandar un status 200', async () => {
          const res = await request(app).get('/countries');
          expect(res.statusCode).toBe(200);
          expect(res.body).toHaveLength(250)
    })
    it('deberia traer los paises que coincidan con el query', async () => {
        const res = await request(app).get('/countries?name=a');
        expect(res.statusCode).toBe(200);
        expect(res.body).toHaveLength(15)
      })
      it('deberia devolver un mensaje de error si le enviamos un dato erroneo', async () => {
        expect.assertions(2)
        const res = await request(app).get('/countries?name=ararfaef');
        expect(res.statusCode).toBe(404);
        expect(res.body).toBeDefined();
      })
      it('deberia traer el pais correcto por params', async () => {
        const res = await request(app).get('/countries/arg');
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual(
          [{id: "ARG",
          nombre: "Argentina",
          bandera: "https://flagcdn.com/w320/ar.png",
          continente: "Americas",
          capital: "Buenos Aires",
          subregion: "South America",
          area: 2780400,
          poblacion: 45376763,
          activities: []
        }]
        )
      })
})
})
