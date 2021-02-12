var express = require('express');
var router = express.Router();
var projectsData = require('../data/projects.json');
var skillsData = require('../data/skills.json');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('layout', { title: 'Ross Keeley', description: 'Full Stack Developer', projectsData, skillsData });
});

module.exports = router;
