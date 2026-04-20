# davetlewis.ca

Personal portfolio site for Dave Lewis, Technical Writer. Built with Astro and Tailwind CSS, deployed to AWS S3 via CloudFront.

Live at [davetlewis.ca](https://davetlewis.ca).

## Stack

| Layer | Technology |
|---|---|
| Framework | [Astro](https://astro.build) v6 (static output) |
| Styling | [Tailwind CSS](https://tailwindcss.com) v4 with `@tailwindcss/typography` |
| Typography | [Inter](https://rsms.me/inter/) via `@fontsource/inter` |
| Content | Astro Content Collections (Markdown) |
| Hosting | AWS S3 + CloudFront |
| CI/CD | GitHub Actions |

## Project structure

```
src/
├── components/       # Nav, Footer, Logo, PortfolioCard
├── content/
│   └── portfolio/    # Portfolio case studies (.md)
├── content.config.ts # Content collection schema
├── layouts/
│   └── BaseLayout.astro
├── pages/
│   ├── index.astro
│   ├── about.astro
│   ├── resume.astro
│   ├── contact.astro
│   └── portfolio/
│       ├── index.astro
│       └── [id].astro
└── styles/
    └── global.css    # Tailwind theme overrides, font imports
```

## Local development

Requires Node ≥ 22.12.0.

```sh
npm install
npm run dev        # Dev server at http://localhost:4321
npm run build      # Production build to dist/
npm run preview    # Preview production build locally
```

## Adding a portfolio item

Create a new Markdown file in `src/content/portfolio/`. The filename becomes the URL slug (`/portfolio/<slug>`).

Required frontmatter fields:

```yaml
---
title: Project Title
summary: One or two sentence description shown on the portfolio index.
tags: [Tag One, Tag Two]
date: 2025-01-01
position: 1          # Controls display order on the portfolio index
---
```

Optional fields: `organization`, `link` (must be a full URL), `featured` (boolean, defaults to false).

## Deployment

Push to `main` triggers `.github/workflows/deploy.yml`, which:

1. Builds the site to `dist/`
2. Syncs `dist/` to the S3 bucket (`aws s3 sync --delete`)
3. Invalidates the CloudFront distribution

Required GitHub secrets: `AWS_ACCESS_KEY_ID`, `AWS_SECRET_ACCESS_KEY`, `AWS_REGION`, `S3_BUCKET`, `CLOUDFRONT_DISTRIBUTION_ID`.

See [`.github/infrastructure.md`](.github/infrastructure.md) for AWS resource IDs.
