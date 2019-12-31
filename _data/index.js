const fetchArticles = require('./articles');
const fetchProjects = require('./projects');
const compileSass = require('./styles');

fetchArticles();
fetchProjects();
compileSass();
