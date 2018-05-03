const express = require('express');
const router = express.Router();
const Project = require('../models/projects');

// Get all projects
router.get('/projects', function (req, res, next) {
    Project.find({}, (err, projects) => {
        if (err) {
            console.log(err);
        } else {
            res.send(projects);
        }
    })
});

// get a single post
router.get('/projects/:id', (req, res, next) => {
    Post.findById({_id: req.params.id}).then((project) => {
        res.send(project);
    });
});

module.exports = router;