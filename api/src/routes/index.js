const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const recipesRouter= require("./recipesRouter");
const dietsRouter=require("./dietsRouter")


const router = Router();

router.use("/recipes", recipesRouter);
router.use("/diets", dietsRouter);

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;
