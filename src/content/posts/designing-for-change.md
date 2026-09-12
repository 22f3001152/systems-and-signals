---
title: "Designing for change, not for guesses"
description: "A practical way to decide where flexibility belongs—and where a direct implementation is the better design."
slug: "designing-for-change"
publishedAt: 2026-09-10
category: "Software Design"
tags: [architecture, trade-offs]
cover: ../../assets/posts/architecture-map.svg
coverAlt: "Abstract cards connected across an architecture map"
featured: true
order: 1
---

Software design is often described as the art of anticipating change. The harder part is deciding **which changes deserve to shape the system today**.

## Start with the pressure, not the pattern

Before choosing a pattern, name the pressure acting on the code:

- Does an external system change independently of us?
- Do teams need to release at different speeds?
- Is this business rule likely to acquire variants?
- Would failure need a different recovery strategy?

```mermaid
flowchart LR
  A[Observed pressure] --> B{Independent change?}
  B -- No --> C[Keep it direct]
  B -- Yes --> D[Create a boundary]
  D --> E[Measure the cost]
```

## Leave a seam, not a framework

A seam can be small: a function, module, or well-owned data structure. Small seams preserve options without asking the whole codebase to pay for them.

> The best design makes the next responsible change unsurprising.
