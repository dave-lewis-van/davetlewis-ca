---
title: docs.activestate.com
summary: Unified documentation for five open-source language bundles, the ActiveState Platform, and Komodo IDE under a single Markdown and Hugo docs-as-code pipeline.
tags: [Technical Writing, Documentation, Markdown, Docs-as-code]
date: 2020-10-31
organization: ActiveState
featured: false
position: 4
thumbnail: /images/portfolio/activestate_logo.png
thumbnailFit: contain
---

## Context

ActiveState made open-source language distribution tools for developers. Their main products at the time I worked there were ActiveState-branded open-source language bundles that simplified installing and maintaining the language and associated packages. For example, the Python language bundle included common data science and machine learning packages. The ActiveState Platform was later introduced as a SaaS platform for customizing the packages included in the language bundles. 

## Challenge

The open-source language bundles required ActiveState-branded documentation installed on the developer's computer and centrally on the ActiveState website. Each language had different formatting and styling that needed to be standardized.

## Approach

I selected Markdown and the Hugo static site generator as the main technologies. I pre-processed the HTML documentation for each of the five open-source languages to convert it to Markdown and then applied the ActiveState branding using Hugo. I used the static HTML output files for both local developer documentation and the ActiveState Platform.

I also authored the ActiveState product documentation for the ActiveState Platform and the Komodo IDE in Markdown and published it using Hugo.

## Outcome

I reduced the time required to maintain and generate the ActiveState documentation suite using a unified docs-as-code approach. I built an automated pipeline to generate and publish updates to the [docs.activestate.com website](https://web.archive.org/web/20201031094144/https://docs.activestate.com/) [Links to a snapshot from the Internet Archive].