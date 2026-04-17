---
title: The debugging mindset I wish I had when I started
date: 2026-01-14
readTime: 6 min read
excerpt: Debugging isn't about being clever. It's about being relentlessly honest with yourself about what you actually know vs. what you assume.
tags: [engineering, debugging]
---

Early in my career, debugging felt like magic. Senior engineers would squint at a stack trace for thirty seconds and just _know_ where the bug was.

It looked like intuition. It wasn't. It was a habit.

The habit is this: **separate what you know from what you assume, and then go verify one assumption at a time.**

That's it. That's the whole trick.

Most bugs live in the gap between "I'm pretty sure this function returns a string" and what the function actually returns on Tuesday at 3am when the upstream service is degraded. The people who debug fast aren't smarter — they just don't trust their own mental model until they've poked it with a print statement.

Next time you're stuck, write down every assumption the code makes. Then pick the cheapest one to verify. You'll be surprised how often the bug is hiding in the assumption you thought was obviously true.
