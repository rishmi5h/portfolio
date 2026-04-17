---
title: Building a roast API (and why useless projects are the best)
date: 2026-03-02
readTime: 5 min read
excerpt: A completely unnecessary side project taught me more about deployment, caching, and LLM prompting than any tutorial could.
tags: [side-projects, llm, backend]
---

The roast API on this very site (try the button on the home page) is one of the dumbest things I've built. It takes zero inputs and returns a single string that makes fun of you.

That's it. That's the whole product.

And yet — building it forced me through:

- Picking a hosting provider and wrestling with CORS
- Figuring out cold-start costs and whether caching the output was worth it
- Iterating on the LLM prompt until the roasts stopped being either too mean or too tame
- Setting up a custom subdomain with proper TLS

None of that was interesting in the abstract. But with a dumb concrete goal to chase, every one of those problems became a puzzle I actually wanted to solve. The best way to learn a stack is to build something small and real on top of it — bonus points if nobody else will ever use it.
