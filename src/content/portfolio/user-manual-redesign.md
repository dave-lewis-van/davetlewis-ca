---
title: User Manual Redesign
summary: Restructured a 200-page user manual for an enterprise IoT platform using DITA, enabling single-source publishing across web, PDF, and in-app help.
tags: [DITA, User manuals, Single-sourcing]
date: 2023-11-01
organization: Placeholder Client C
---

## Context

An enterprise IoT platform shipped a 200-page PDF manual that was updated twice a year. Support calls spiked after every firmware release because the manual was already out of date by the time customers received it.

## Challenge

Manual was authored in Word with heavy formatting applied directly — no structure, no reuse. Publishing to multiple outputs (web help, in-app tooltips, PDF) required manual copy-paste work each cycle.

## Approach

Migrated content to DITA using task, concept, and reference topic types. Established a component content strategy so shared content (warnings, specifications) was authored once and reused across deliverables. Set up DITA-OT publishing for web, PDF, and a lightweight JSON feed for in-app tooltips.

## Outcome

Release cycle for documentation updates dropped from 6 weeks to 3 days. In-app help tooltips are now generated automatically from the same source as the web manual.
