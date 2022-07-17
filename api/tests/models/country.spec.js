 const {Country ,conn } = require('../../src/db.js');

 describe('Country Models', () => {
  beforeAll(async () => {
    await conn.sync({ force: true });
  });

    describe('COUNTRY MODEL TEST', () => {
        it('no deberia crear un Country si le falta el nombre', async () => {
          expect.assertions(1);
          try {
            await Country.create({bandera: "https://flagcdn.com/ar.svg",continente: "America" , capital: "Buenos Aires"});
          } catch (error) {
            expect(error.message).toBeDefined();
          }
        })
        it('no deberia crear un Country si le falta la bandera', async () => {
            expect.assertions(1);
            try {
              await Country.create({nombre: "Argentina",continente: "America" , capital: "Buenos Aires"});
            } catch (error) {
              expect(error.message).toBeDefined();
            }
          })
          it('no deberia crear un Country si le falta el continente', async () => {
            expect.assertions(1);
            try {
              await Country.create({nombre: "Argentina",bandera: "https://flagcdn.com/ar.svg" , capital: "Buenos Aires"});
            } catch (error) {
              expect(error.message).toBeDefined();
            }
          })
          it('no deberia crear un Country si le falta la capital', async () => {
            expect.assertions(1);
            try {
              await Country.create({nombre: "Argentina",bandera: "https://flagcdn.com/ar.svg" , continente: "America"});
            } catch (error) {
              expect(error.message).toBeDefined();
            }
          })
          it('deberia crear el Country si todas las propiedades requeridas estan ok', async () => {
            const country = await Country.create({
              id: "ARG",
              nombre: 'Argentina',
              bandera: "https://flagcdn.com/ar.svg",
              continente: "America",
              capital: "Buenos Aires"
            })
            expect(country.toJSON()).toEqual({
                id: "ARG",
                nombre: 'Argentina',
                bandera: "https://flagcdn.com/ar.svg",
                continente: "America",
                capital: "Buenos Aires",
                subregion:null,
                area:null ,
                poblacion:null 
            });
          });
    })
   
 })
