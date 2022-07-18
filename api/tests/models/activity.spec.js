const {Activity , conn } = require('../../src/db.js');


describe('ACTIVITY MODEL TEST', () => {
  it('No deberia crear una Actividad si la dificultad es mayor a 5', async () => {
    expect.assertions(1)
    try {
      await Activity.create({nombre: "Nadar", dificultad: 7, duracion:3, temporada: "Verano", paises: "Argentina"});
    } catch (error) {
      expect(error.message).toBeDefined();
    }
  })
  it('Deberia crear la Actividad si los datos son correctos', async () => {
    const activity = await Activity.create({
      nombre: 'Bailar',
      dificultad: 3,
      duracion: 2,
      temporada: "Primavera",
      paises: "Panama"
    });
    expect(activity.toJSON()).toHaveProperty('nombre','Bailar');
    expect(activity.toJSON()).toHaveProperty('dificultad', 3);
    expect(activity.toJSON()).toHaveProperty('duracion', "2 hora/s");
    expect(activity.toJSON()).toHaveProperty('temporada', "Primavera");
  });
  
})


