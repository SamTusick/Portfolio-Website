# Portfolio Website

Personal portfolio for Samuel Tusick, an AI and automation engineer and Software Engineering student at FGCU.

Live site: https://samtusick.github.io/Portfolio-Website/

## Stack

React 19, Vite 6, Framer Motion, react-icons, plain CSS. The contact form posts to Formspree.

## Run locally

```bash
cd portfolio-site
npm ci
npm run dev
```

Other scripts: `npm run lint`, `npm run build`, `npm run preview`.

## Deploy

Pushing to `main` runs `.github/workflows/deploy.yml`, which installs with `npm ci`, lints, builds, and publishes `portfolio-site/dist` to the `gh-pages` branch with `JamesIves/github-pages-deploy-action`. The Vite `base` is `/Portfolio-Website/`, so the site is served from that path.

## Editing content

- Projects: `portfolio-site/src/data/projectsData.js`
- Page copy: `portfolio-site/src/pages/`
- Resume and CV PDFs: `portfolio-site/public/`
