const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProjectSchema = require('mongoose').model('Project').scehma;

const TagSchema = new Schema({
    id: { type: String },
    name: { type: String },
    projects: [ProjectSchema]
});

let Tag = mongoose.model('Tag', TagSchema);

module.exports = Tag;