const fs = require('fs');
const path = require('path');
const projectsService = require('../_services/projects');

function buildMarkdown(project) {
  const thumbnail = project.featuredImage.fields;

  return `
---
tags: projects
title: "${project.projectName}"
description: "${project.projectName}"
category: ${project.category}
date: ${project.date}
stack: [${project.tags}]
thumbnail:
  url: ${thumbnail.file.url}
  alt: "${thumbnail.file.description}"
  square: ${project.projectData.isFeaturedImageSquare}
layout: _layouts/project
---
  `;
}

function buildData(project) {
  const fileName = project.slug;
  const projects = path.resolve(process.cwd(), 'src', 'site', 'portfolio');
  const md = buildMarkdown(project);
  const data = `${md.trim()}\n\n${project.projectContent}`;

  fs.mkdirSync(`${projects}/${fileName}`, { recursive: true });
  fs.writeFileSync(`${projects}/${fileName}/index.hbs`, data);
}

async function fetchProjects() {
  return await projectsService.getProjects().then(collection => {
    const projects = collection.items.map(item => item.fields);

    projects.forEach(buildData);
  });
}

module.exports = fetchProjects;
