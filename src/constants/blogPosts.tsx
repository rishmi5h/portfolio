export type BlogPost = {
  content: string;
  date: string;
  excerpt: string;
  readTime: string;
  slug: string;
  tags: string[];
  title: string;
};

export const blogPosts: BlogPost[] = [
  {
    content: `I've spent the last few years absorbing writing from engineers I admire — long-form deep dives, short sharp takes, and everything in between. Every single one of them, at some point, said the same thing: *just start writing*.

So here we are.

This blog is a scratchpad for things I'm learning, problems I've debugged, and the occasional opinion I can't shake loose. No pressure to be polished. No pressure to be right. Just a place to put the thoughts down while they're still fresh.

If any of it ends up being useful to someone else, that's a bonus.`,
    date: '2026-04-18',
    excerpt:
      "After years of shipping code and reading other people's posts, I'm starting my own corner of the internet to think out loud.",
    readTime: '3 min read',
    slug: 'hello-world',
    tags: ['meta', 'writing'],
    title: 'Hello, world — why I finally started writing',
  },
  {
    content: `The roast API on this very site (try the button on the home page) is one of the dumbest things I've built. It takes zero inputs and returns a single string that makes fun of you.

That's it. That's the whole product.

And yet — building it forced me through:

- Picking a hosting provider and wrestling with CORS
- Figuring out cold-start costs and whether caching the output was worth it
- Iterating on the LLM prompt until the roasts stopped being either too mean or too tame
- Setting up a custom subdomain with proper TLS

None of that was interesting in the abstract. But with a dumb concrete goal to chase, every one of those problems became a puzzle I actually wanted to solve. The best way to learn a stack is to build something small and real on top of it — bonus points if nobody else will ever use it.`,
    date: '2026-03-02',
    excerpt:
      'A completely unnecessary side project taught me more about deployment, caching, and LLM prompting than any tutorial could.',
    readTime: '5 min read',
    slug: 'building-a-roast-api',
    tags: ['side-projects', 'llm', 'backend'],
    title: 'Building a roast API (and why useless projects are the best)',
  },
  {
    content: `Early in my career, debugging felt like magic. Senior engineers would squint at a stack trace for thirty seconds and just *know* where the bug was.

It looked like intuition. It wasn't. It was a habit.

The habit is this: **separate what you know from what you assume, and then go verify one assumption at a time.**

That's it. That's the whole trick.

Most bugs live in the gap between "I'm pretty sure this function returns a string" and what the function actually returns on Tuesday at 3am when the upstream service is degraded. The people who debug fast aren't smarter — they just don't trust their own mental model until they've poked it with a print statement.

Next time you're stuck, write down every assumption the code makes. Then pick the cheapest one to verify. You'll be surprised how often the bug is hiding in the assumption you thought was obviously true.`,
    date: '2026-01-14',
    excerpt:
      "Debugging isn't about being clever. It's about being relentlessly honest with yourself about what you actually know vs. what you assume.",
    readTime: '6 min read',
    slug: 'the-debugging-mindset',
    tags: ['engineering', 'debugging'],
    title: 'The debugging mindset I wish I had when I started',
  },
];
