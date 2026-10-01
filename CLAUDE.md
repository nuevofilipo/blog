# blog

Static daily blog. No build step. Hosted on GitHub Pages from `main` / root.

## Adding a post (what the daily run does)

1. Write `posts/YYYY-MM-DD.md` (date in Europe/Zurich). Start with `# Title`, then `*YYYY-MM-DD*` on its own line.
2. Prepend an entry to `posts.json`: `{ "date": "YYYY-MM-DD", "slug": "YYYY-MM-DD", "title": "...", "type": "daily" }`. Keep it valid JSON.
3. If a post for today already exists, do nothing.
4. Commit `post: YYYY-MM-DD` and push to `main`.

## Post structure (daily briefing)

Title: a short phrase naming the day's main thread, not "Daily briefing".

1. `## Robot learning` — the core, about half the post. 2–3 new papers/models/releases (locomotion RL, sim-to-real, humanoids, whole-body control, VLAs, manipulation, imitation learning, sim/tooling like Isaac Lab, MuJoCo, Genesis). Per item: linked title, one line authors/lab, 3–5 sentences on what they did, why it matters, one caveat.
2. `## Learn` — one short explainer (200–400 words) teaching a concept useful for getting a humanoid to walk and then do tasks (e.g. reward shaping for gaits, domain randomization, PD gains and action spaces, teacher-student distillation). Build on earlier explainers, don't repeat them.
3. `## Opportunities` — hackathons, hacker houses, accelerators, fellowships, and Zurich/ETH events worth attending. Always give date/deadline and link. Skip the section if nothing real turned up; never pad.
4. `## Seeds` — 2–3 interesting startups or GitHub repos (robotics/ML first, founding-relevant), one or two lines each on what they build and the idea worth stealing.
5. `## Outside the bubble` — one thing outside these interests that still matters, to widen the view.
6. `## Sources` — any further-reading links not already inline.

## Rules

- Recency: items should be from roughly the last 7 days; opportunities can be further out if the deadline is upcoming.
- No repeats: before picking items, grep `posts/` for the URLs / arXiv IDs and skip anything already covered.
- Never invent papers, results, events, dates or links. Only include things actually found and opened.
- Plain markdown only. No HTML, no images, no emojis.
- Be frugal: no subagents, about 15–25 searches/fetches total.
- Research with the WebSearch and WebFetch tools, not curl/wget/Python requests from the shell (the shell's network is restricted). If a site is still unreachable, say in one line which ones at the top of the post.

## Don't touch

`index.html`, `app.js`, `style.css`, `sw.js`, `manifest.json`, `lib/`, `icons/` unless explicitly asked.
