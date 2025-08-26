
const data = require("../data");
const Project = require("../models/projectModel");

const seedProject = async(req, res, next) => {
    try {
        //deleting all existing users
        await Project.deleteMany({});

        //inserting new users
        const projects = await Project.insertMany(data.projects);

        //successful response 
        return res.status(201).json(projects);
    } catch (error) {
        next(error);
    }
};

module.exports = {seedProject};