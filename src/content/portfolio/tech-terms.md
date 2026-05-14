---
title: tech-terms API
summary: A public REST API for technical writing terminology, validated and deployed using a docs-as-code CI/CD pipeline.
tags: [Technical Writing, API, Python, Docs-as-code, ReadMe]
date: 2026-05-13
organization: Personal
featured: true
position: 1
thumbnail: /images/portfolio/read_me.png
thumbnailFit: contain
link: https://tech-terms.readme.io/docs/getting-started
---

## Context

Technical writers regularly encounter jargon—terms like "docs-as-code," "contract testing," or "ASGI"—that don't have a single authoritative definition. I built tech-terms as a public glossary API that centralizes definitions for common technical writing and engineering concepts, organized by domain (frontend, backend, devops, and docs-as-code).

## Challenge

The goal was to build something that demonstrated the full docs-as-code workflow from a technical writer's perspective: not just authoring content, but owning the pipeline that validates, tests, and publishes it. That meant integrating API specification generation, linting, and contract testing into a single CI/CD workflow, and defining a clear handoff between developer and technical writer contributions.

## Approach

I used FastAPI to build the live API. The OpenAPI specification is generated directly from the FastAPI app using a custom script, then validated with Spectral to enforce naming and documentation conventions. Schemathesis runs property-based contract tests against the live API on every push, catching spec-to-implementation drift automatically.

The CI/CD pipeline (GitHub Actions) runs generate → lint → test on every push to the `v1.0` branch. Merging to `v1.0` triggers an automatic deploy to Railway (where the API is hosted) and syncs any doc changes to ReadMe, where the public-facing API reference lives.

## Outcome

The API reference on ReadMe only updates when the full pipeline passes: the OpenAPI spec must be regenerated, linted, and contract-tested before any merge to `v1.0` triggers the sync. Documentation that fails validation never reaches readers. The published reference is available at [tech-terms.readme.io](https://tech-terms.readme.io/docs/getting-started), and the source is on [GitHub](https://github.com/dave-lewis-van/tech-terms).
