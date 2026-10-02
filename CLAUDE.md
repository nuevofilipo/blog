# blog

Static daily blog. No build step. Hosted on GitHub Pages from `main` / root.

## Adding a post (what the daily run does)

1. Write `posts/YYYY-MM-DD.md` (date in Europe/Zurich). Start with `# Title`, then `*YYYY-MM-DD*` on its own line.
2. Prepend an entry to `posts.json`: `{ "date": "YYYY-MM-DD", "slug": "YYYY-MM-DD", "title": "...", "type": "daily" }`. Keep it valid JSON.
3. If a post for today already exists, then add a version "b" etc.
4. Commit `post: YYYY-MM-DD` and push to `main`.

Include a Title: a short phrase naming the day's main thread, not "Daily briefing".

## Rules

- Recency: items should be from roughly the last 7 days; opportunities can be further out if the deadline is upcoming.
- No repeats: before picking items, grep `posts/` for the URLs / arXiv IDs and skip anything already covered.
- Plain markdown only. No HTML, no images, no emojis.
- Go search the web

## Don't touch

`index.html`, `app.js`, `style.css`, `sw.js`, `manifest.json`, `lib/`, `icons/` unless explicitly asked.
