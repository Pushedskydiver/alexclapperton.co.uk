[![Netlify Status](https://api.netlify.com/api/v1/badges/c83fbc0c-462f-4d64-810c-7470afc73313/deploy-status)](https://app.netlify.com/sites/quizzical-leavitt-1e7adc/deploys)

# alexclapperton.co.uk

This site is built with [Eleventy](https://www.11ty.dev/docs/) and [Netlify](https://netlify.com) using the following stack:

- [Nunjucks](https://mozilla.github.io/nunjucks/) (Template language used in Eleventy)
- [Contenful](https://www.contentful.com/) (Headless CMS)
- [Tailwind CSS](https://tailwindcss.com/) (Utility-first CSS framework)
- [TypeScript](https://www.typescriptlang.org/)
- [Webpack](https://webpack.js.org/) (Module bundler)

---

## Developing locally

### Install dependencies

```bash
npm install
```

### Run the site locally

Use the Netlify CLI to inject environment variables stored against the Netlify site — no local `.env` file needed!

```bash
netlify dev
```

### Required environment variables

- `CONTENTFUL_ACCESS_TOKEN`
- `CONTENTFUL_ENVIRONMENT`
- `CONTENTFUL_SPACE_ID`
- `FAUNADB_ADMIN_SECRET`
- `FAUNADB_SERVER_SECRET`
- `GCM_API_KEY`
- `VAPID_PRIVATE_KEY`
- `VAPID_PUBLIC_KEY`

## Commands

### Development

- `npm run webpack:dev`: Compiles Tailwind CSS and Typescript in development mode and listens for changes to CSS and TypeScript files
- `npm run eleventy:dev`: Spins up local environment of eleventy and listens for changes to Nunjucks files and other assets
- `npm run dev`: Concurrently runs `webpack:dev` and `eleventy:dev` to spin up local environment
- `netlify dev`: Spins up local Netlify dev environment to allow the use of Netlify features. [Netlify CLI](https://docs.netlify.com/cli/get-started/) is needed to run this command.

### Production

- `npm run webpack:prod`: Compiles Tailwind CSS and Typescript ready for production
- `npm run eleventy:prod`: Compiles Nunjucks files ready for production
- `npm run build`: Command used in Netlify to run `webpack:prod` and `eleventy:prod`

## Latest articles

<!-- BLOG-POST-LIST:START -->
- [How to build an accessible accordion with and without JavaScript](https://www.alexclapperton.co.uk/articles/2022/how-to-build-an-accessible-accordion-with-and-without-javascript/)
- [A brief introduction on using CSS Grid](https://www.alexclapperton.co.uk/articles/2018/a-brief-introduction-on-using-css-grid/)
- [The digital industry: A developers perspective](https://www.alexclapperton.co.uk/articles/2016/the-digital-industry-a-developers-perspective/)
- [Performance and optimisation: Getting your website up to speed](https://www.alexclapperton.co.uk/articles/2016/performance-and-optimisation-getting-your-website-up-to-speed/)
- [Working with Grid: The holy grail of CSS layout](https://www.alexclapperton.co.uk/articles/2017/working-with-grid-the-holy-grail-of-css-layout/)
<!-- BLOG-POST-LIST:END -->
