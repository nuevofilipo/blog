const main = document.getElementById('main');
const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

async function getJSON(url) {
  const r = await fetch(url, { cache: 'no-cache' });
  if (!r.ok) throw new Error(url + ' ' + r.status);
  return r.json();
}

async function showList() {
  const posts = (await getJSON('posts.json')).sort((a, b) => b.date.localeCompare(a.date));
  document.title = 'blog';
  main.innerHTML = '<ul class="posts">' + posts.map(p =>
    `<li><span class="date">${esc(p.date)}</span><a href="?p=${encodeURIComponent(p.slug)}">${esc(p.title)}</a>` +
    (p.type ? ` <span class="type">${esc(p.type)}</span>` : '') + '</li>').join('') + '</ul>';
}

async function showPost(slug) {
  if (!/^[\w-]+$/.test(slug)) throw new Error('bad slug');
  const r = await fetch(`posts/${slug}.md`, { cache: 'no-cache' });
  if (!r.ok) throw new Error('not found');
  const md = await r.text();
  main.innerHTML = '<article>' + marked.parse(md) + '</article><p><a href="./">← all posts</a></p>';
  const h1 = main.querySelector('h1');
  document.title = h1 ? h1.textContent : slug;
  main.querySelectorAll('article a[href^="http"]').forEach(a => { a.target = '_blank'; a.rel = 'noopener'; });
}

const slug = new URLSearchParams(location.search).get('p');
(slug ? showPost(slug) : showList()).catch(e => { main.textContent = 'error: ' + e.message; });

if ('serviceWorker' in navigator) navigator.serviceWorker.register('sw.js');
