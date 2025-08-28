const express = require("express");
const {seedProject, seedToolsTechnologies, seedEducation} = require("../controllers/seedController");
const seedRouter = express.Router();

seedRouter.get("/projects", seedProject);
seedRouter.get("/tools-technologies", seedToolsTechnologies);
seedRouter.get("/education", seedEducation);

module.exports = seedRouter;