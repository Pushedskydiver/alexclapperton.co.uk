const contentful = require('contentful');
const fs = require('fs');
const path = require('path');

const contentfulClient = contentful.createClient({
  accessToken: '73940eda44dadba56db69ec6395029036dbd43845eb476473e17a79f627d351a',
  space: '66vjslfacivy'
});

function fetchProjects() {
  contentfulClient.getEntries({ content_type: 'sFzTZbSuM8coEwygeUYes' })
    .then(entries => {
      entries.items.forEach(item => {
        const fileName = item.fields.slug;
        const projects = path.resolve(process.cwd(), 'src', 'site', 'portfolio');

        const md = `---\ntags: projects \ntitle: "${item.fields.projectName}" \nlayout: _layouts/project\n---\n`

        const data = `${md.trim()}\n\n${item.fields.projectContent}`;

        fs.mkdirSync(`${projects}/${fileName}`, { recursive: true });
        fs.writeFileSync(`${projects}/${fileName}/index.hbs`, data);
      })
    })
}

module.exports = fetchProjects;
