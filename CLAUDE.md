# blog

Static daily blog. No build step. Hosted on GitHub Pages from `main` / root.

## Adding a post (what the daily run does)

1. Write `posts/YYYY-MM-DD.md` (date in Europe/Zurich). Start with `# Title`, then `*YYYY-MM-DD*` on its own line.
2. Prepend an entry to `posts.json`: `{ "date": "YYYY-MM-DD", "slug": "YYYY-MM-DD", "title": "...", "type": "daily" }`. Keep it valid JSON.
3. If a post for today already exists, do nothing.
4. Commit `post: YYYY-MM-DD` and push to `main`.

## Post content

- A short essay/note (300–600 words), then `## Papers` with 2–3 recent papers: title as a link to arXiv/abs, 1 line of authors/venue, 3–5 sentences on what they did, why it matters, and one caveat.
- Before picking papers, grep `posts/` for the arXiv IDs so nothing is covered twice.
- Plain markdown only. No HTML, no images, no emojis. Never invent papers, results or links; every paper must have been actually fetched.
- Topics: see "Topics" below.

## Topics

(to be filled in)

## Don't touch

`index.html`, `app.js`, `style.css`, `sw.js`, `manifest.json`, `lib/`, `icons/` unless explicitly asked.
