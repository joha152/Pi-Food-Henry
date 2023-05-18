const {Router} = require("express");
const dietHandler = require("../handlers/dietHandler")

const dietsRouter = Router();

dietsRouter.get("/", dietHandler);

module.exports= dietsRouter;