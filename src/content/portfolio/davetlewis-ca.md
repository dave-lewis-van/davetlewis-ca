---
title: davetlewis.ca
summary: A personal portfolio site built with Astro and Markdown, exploring AI-assisted web development. Hosted on AWS S3 with CloudFront.
tags: [Claude Code, Docs-as-code, Astro, AWS]
date: 2026-04-17
organization: DTL Communications
link: https://davetlewis.ca
featured: true
position: 3
thumbnail: /images/portfolio/davetlewis_ca.png
---

## Context

A technical writer's portfolio site should demonstrate the same principles as good documentation: clear structure, purposeful content, and a maintainable authoring workflow. Building the site myself, rather than using a hosted portfolio tool, was also an opportunity to put docs-as-code practices to work. <a href="https://github.com/dave-lewis-van/davetlewis-ca" target="_blank">View the repository on Github.</a>

## Approach

Built with [Astro](https://astro.build), a static site generator well-suited to content-focused sites. Content is written in Markdown and managed as a content collection — the same pattern used in many modern documentation systems. The site is deployed to AWS S3 and served via CloudFront, with a CI/CD pipeline through GitHub Actions.

The site is an experiment in AI-assisted development. Claude Code handled the majority of the initial front-end implementation (component structure, Tailwind CSS styling, and responsive layout) while I focused on content, architecture decisions, and design direction.

## Outcome

A fast, fully static site with no client-side JavaScript, a clean dark mode, and a docs-as-code workflow that makes content updates as simple as editing a Markdown file. The AI-assisted development approach cut implementation time significantly while keeping the codebase readable and maintainable.
