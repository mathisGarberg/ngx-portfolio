const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProjectSchema = require('mongoose').model('Project').scehma;

// create category schema and model
const CategorySchema = new Schema({
    id: { type: String },
    name: { type: String },
    projects: [ProjectSchema]
});

let Category = mongoose.model('Category', CategorySchema);

module.exports = Category;