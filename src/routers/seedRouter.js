const express = require("express");
const {seedProject, seedToolsTechnologies} = require("../controllers/seedController");
const seedRouter = express.Router();

seedRouter.get("/projects", seedProject);
seedRouter.get("/tools-technologies", seedToolsTechnologies);

module.exports = seedRouter;