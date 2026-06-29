# jhewhome.xyz — Personal Portfolio

Personal portfolio site for **Jerome Tuballas De Guzman** — full-stack developer, PUP IT faculty, and MSIT candidate.

Built with [Astro](https://astro.build) for fast static delivery. The graduate research project (AHOP) remains on `ahop.jhewhome.xyz`.

## Pages

| Route | Purpose |
|-------|---------|
| `/` | Home — hero, highlights, featured projects, skills |
| `/projects` | Full project list with case-study details |
| `/about` | Biography, timeline, technical profile |
| `/services` | Freelance offerings and process |
| `/contact` | Email, links, availability |

## Quick start

```bash
cd c:\PUP\htdocs\jhewhome-portfolio
npm install
npm run dev
```

Open [http://localhost:4321](http://localhost:4321).

## Before you deploy

Edit `src/data/site.ts`:

1. **Social links** — add your GitHub and LinkedIn URLs in `social`

Edit `src/data/projects.ts` to add screenshots, GitHub repos, or refine project copy.

## Build

```bash
npm run build
```

Output goes to `dist/` — upload this folder to your host, or connect the repo to Vercel/Netlify.

## Deploy to jhewhome.xyz

### Option A — Vercel (recommended)

1. Push this folder to a GitHub repository
2. Import the repo at [vercel.com](https://vercel.com)
3. Framework preset: **Astro**
4. Add custom domain: `jhewhome.xyz` and `www.jhewhome.xyz`
5. At your domain registrar, point DNS to Vercel:
   - `A` record → `76.76.21.21`
   - `CNAME` for `www` → `cname.vercel-dns.com`

`ahop.jhewhome.xyz` stays unchanged — keep its existing A/CNAME records pointing to your PHP host.

### Option B — Netlify

Same flow as Vercel. Build command: `npm run build`, publish directory: `dist`.

### Option C — Existing PHP host (cPanel / InfinityFree)

If your registrar host only supports PHP:

1. Run `npm run build` locally
2. Upload everything inside `dist/` to the web root for `jhewhome.xyz`
3. Add a `.htaccess` in the root if needed for clean URLs (Astro static output uses folder-based routes by default)

For subdomain separation:

| Host | Purpose |
|------|---------|
| `jhewhome.xyz` | This Astro portfolio (`dist/`) |
| `ahop.jhewhome.xyz` | AHOP PHP app (unchanged) |

## Project structure

```
src/
  components/   Header, Footer, ProjectCard, HighlightCard
  data/         site.ts (bio, skills, services), projects.ts
  layouts/      Layout.astro
  pages/        Route pages
  styles/       global.css
public/         favicon, static assets
```

## License

Private — personal portfolio. All rights reserved.
