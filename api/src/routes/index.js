const express = require('express');
const {pais, countries, actividad} = require ('../routes/Funciones.js')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = express.Router();
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


router.get("/countries" , countries)

router.get("/countries/:idpais", pais)

router.post("/actividad" , actividad)




module.exports = router;
