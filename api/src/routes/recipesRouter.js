const {Router} = require('express');
const {recipeHandler,
    recipeIdHandler,
      postHandler} = require("../handlers/recipeHandler")

const recipeRouter = Router();

recipeRouter.get("/", recipeHandler);
recipeRouter.get("/:id", recipeIdHandler);
recipeRouter.post("/", postHandler);


module.exports= recipeRouter;