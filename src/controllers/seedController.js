
const data = require("../data");
const Education = require("../models/educationModel");
const Project = require("../models/projectModel");
const ToolTechnology = require("../models/toolTechnologyModel");

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


const seedToolsTechnologies = async (req, res, next) => {
    try {
        await ToolTechnology.deleteMany({}); // This line delete existing toolsTechnologies.

        const tools = await ToolTechnology.insertMany(data.toolsTechnologies);

        return res.status(201).json(tools);
    } catch (error) {
        next(error);
    }

}


const seedEducation = async (req, res, next) => {
    try {
        await Education.deleteMany({});

        const education = await Education.insertMany(data.education);
        return res.status(201).json(education);
        
    } catch (error) {
        next(error);    
    }

};

module.exports = {seedProject, seedToolsTechnologies, seedEducation};