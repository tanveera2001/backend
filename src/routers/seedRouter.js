const express = require("express");
const {seedProject} = require("../controllers/seedController");
const seedRouter = express.Router();

seedRouter.get("/projects", seedProject);

module.exports = seedRouter;