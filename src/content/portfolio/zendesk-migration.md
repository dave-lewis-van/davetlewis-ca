---
title: Zendesk Knowledge Migration
summary: Led the migration of more than 1,500 DITA topics from product-focused webhelp sites to a unified Zendesk Knowledge Base, including a full toolchain transition and custom publishing automation.
tags: [DITA, Content strategy, Zendesk]
date: 2025-01-01
organization: Alida
featured: true
position: 2
---

## Context

Alida's documentation had grown into a collection of five standalone, product-specific webhelp sites. As the platform consolidated, the fragmented help experience became a liability: users had to know which site to visit, and content overlapped or drifted out of sync across properties.

## Challenge

The migration involved more than 1,500 DITA topics spread across multiple sites. Beyond the sheer volume, the project required a simultaneous toolchain transition — moving from XMetaL Author to Oxygen XML Author — and establishing a new publishing pipeline that could deliver directly to Zendesk Knowledge. Redirect management, content validation, and a review workflow all had to be solved from scratch.

## Approach

Led the migration project end to end. Converted the authoring environment from XMetaL to Oxygen XML Author, reconfiguring DITA maps and output transforms for direct publishing to Zendesk.

Built a set of GitHub Actions–based workflows to support the new pipeline:

- A **staging workflow** to publish documentation drafts outside of Zendesk for stakeholder review before going live.
- An optional **validation workflow** that could be run as a step in the **staging workflow** using Schematron rules to catch structural and content errors in DITA source before publishing.
- A **redirect workflow** to manage article URL changes in Zendesk, preventing broken links for existing users.

## Outcome

All documentation consolidated into a single Zendesk Knowledge Base. The automated workflows — staging, validation, and redirects — became the standard publishing process going forward, reducing manual steps and catching errors before they reached production.
