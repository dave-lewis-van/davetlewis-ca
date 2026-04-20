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

Alida's documentation had grown into a collection of five standalone, product-specific webhelp sites resulting in a fragmented user experience. Alida's support knowledge base was already stored in Zendesk Knowledge, so migrating the documentation to Zendesk provided a unified location for all product support information, simplifying access for customers and the Alida support team.

## Challenge

The migration involved more than 1,500 DITA topics spread across product-specific user guides. These topics needed to be orgainzed as articles in categories and sections in Zendesk with each section in Zendesk mapping to a separate DITA map file. This content planning exercise and reorganization required a significant investment of work upfront, but resulted in a much cleaner organization of the articles in the knowledge base.

Beyond the sheer volume, the project required a simultaneous toolchain transition. We moved from XMetaL Author to Oxygen XML Author, which supported publising DITA content directly to Zendesk. I established new workflows for validating DITA content before publication, posting review documentation to staging sites, and managing redirects for Zendesk articles.

## Approach

Led the migration project end to end. Converted the authoring environment from XMetaL to Oxygen XML Author, reconfiguring DITA maps and output transforms for direct publishing to Zendesk.

Built a set of Python scripts to test the migration in a sandbox environment and then migrate the articles to Zendesk. This included mapping article IDs for cross-references between different Zendesk sections.

Built a set of GitHub Actions–based workflows to support the new pipeline:

- A **staging workflow** to publish documentation drafts outside of Zendesk for stakeholder review before going live.
- An optional **validation workflow** that could be run as a step in the **staging workflow** using Schematron rules to catch structural and content errors in DITA source before publishing. This included simple rules, such as checking to ensure that a topic had a title or that elements weren't empty, and more complicated rules that verified that required NPS trademark information was included and applied correctly.
- A **redirect workflow** to manage article URL changes in Zendesk, preventing broken links for existing users. This workflow was configured to run automatically changes to a CSV file storing the redirect entries was checked in to GitHub.

## Outcome

All documentation consolidated into a single Zendesk Knowledge Base along with existing support knowledge base articles. The automated workflows became the standard publishing process going forward, reducing manual steps and catching errors before they reached production.
