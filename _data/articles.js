const contentful = require('contentful');
const fs = require('fs');
const path = require('path');

const contentfulClient = contentful.createClient({
  accessToken: '73940eda44dadba56db69ec6395029036dbd43845eb476473e17a79f627d351a',
  space: '66vjslfacivy'
});

const fetchArticles = () => {
  contentfulClient.getEntries({
    content_type: '2PqfXUJwE8qSYKuM0U6w8M'
  })
  .then(entries => {
    entries.items.forEach(item => {
      const fileName = item.fields.slug;
      const posts = path.resolve(process.cwd(), 'src', 'site', 'articles');
      const year = item.fields.date.split('-')[0];

      const md = `---\ntags: articles \ntitle: "${item.fields.articleName} — Alex Clapperton — Professional Front-End Web Developer" \nlayout: _layouts/post\n---\n`

      const data = `${md.trim()}\n\n${item.fields.post}`;

      fs.mkdirSync(`${posts}/${year}/${fileName}`, { recursive: true });
      fs.writeFileSync(`${posts}/${year}/${fileName}/index.hbs`, data);
    })
  })
}

fetchArticles();
