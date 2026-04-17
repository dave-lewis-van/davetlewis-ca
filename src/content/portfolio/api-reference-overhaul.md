---
title: API Reference Overhaul
summary: Rewrote a legacy REST API reference for a payments platform, reducing average time-to-first-call for new integrators from 4 hours to under 45 minutes.
tags: [API docs, OpenAPI, Developer experience]
date: 2024-09-01
client: Placeholder Client A
featured: true
---

## Context

The payments platform had grown organically over five years. The API reference was a mix of auto-generated Swagger output and hand-written Confluence pages, with no consistent structure or examples.

## Challenge

Integrating developers were opening support tickets at a high rate during their first week. Exit surveys pointed to unclear authentication docs and missing error-handling guidance as the top pain points.

## Approach

Audited all 47 endpoints against support ticket themes. Established a consistent template per endpoint: purpose, request/response schema, code examples in three languages, and a dedicated errors section. Worked with the backend team to surface undocumented edge cases.

## Outcome

Time-to-first-successful-call dropped from ~4 hours to under 45 minutes in usability testing. Support tickets from new integrators fell 60% in the first quarter after launch.
