# Saif2098.github.io

Personal academic website of **Saif Ur Rahman** — Ph.D. candidate in Computer Science, University of Illinois Urbana-Champaign.

**Live:** https://Saif2098.github.io

Built with [Jekyll](https://jekyllrb.com), based on [sbryngelson/academic-website-template](https://github.com/sbryngelson/academic-website-template). Publications are generated from BibTeX by [jekyll-scholar](https://github.com/inukshuk/jekyll-scholar).

---

## How it deploys

Push to `master` → GitHub Actions builds → GitHub Pages serves. That's it; there is nothing to run by hand.

```
master ──push──> .github/workflows/deploy.yml ──> github-pages environment
```

Two settings this depends on, both already configured:

- **Settings → Pages → Source** is *GitHub Actions*, not "deploy from a branch". It must stay that way — jekyll-scholar is not on GitHub Pages' built-in plugin allowlist, so the native builder would produce an **empty Publications page** while everything else looked fine.
- The **`github-pages` environment** restricts deployments to `master`. Deploying from any other branch is rejected before the job starts (it fails with zero steps run, which looks mysterious if you don't know).

Watch a deploy under the repo's **Actions** tab. After it goes green, the canary to check is that **Publications lists both papers** — if jekyll-scholar didn't run, that page renders empty and nothing else looks wrong.

## Branches

| Branch | What it is |
|---|---|
| `master` | **Live site.** Every push deploys. |
| `main` | The previous academicpages site, kept for reference. |
| `v1-academicpages` | The same old site, under a clearer name. |
| `redesign` | Where the current design was built. Merged; safe to delete. |

`master`'s history still contains the old site — the migration was a fast-forward, not a force-push, so nothing was overwritten.

## Running it locally

Needs Ruby ≥ 3.2 and Bundler.

```bash
bundle install
bundle exec jekyll serve      # http://localhost:4000
```

The server rebuilds on save, **except for `_config.yml`** — changes there need a restart.

To work on a redesign without disturbing the live site, use a worktree rather than a copy, so merging back is trivial:

```bash
git worktree add ../website-experiment -b my-experiment
cd ../website-experiment && bundle exec jekyll serve --port 4001
```

Now compare `:4000` (live) against `:4001` (experiment) side by side. Merge with `git checkout master && git merge my-experiment`.

---

## Editing

### Add a news item

`_data/news.yml`, newest first. HTML is allowed in `headline`.

```yaml
- date: Aug 2026
  headline: '<strong>PU-HNO</strong> submitted to <em>NeurIPS 2026</em>.'
```

The home page shows the newest four with a "See all news" link; `/allnews.html` shows every one.

### Add a publication

`assets/ref.bib`. Use `@inproceedings` for the Conference section and `@unpublished` for Preprints. Alongside standard BibTeX fields, this site understands seven of its own:

| Field | Purpose |
|---|---|
| `venue` | Short venue shown above the title, e.g. `ACM EWSN '26` |
| `status` | Grey note beside it, e.g. `Submitted to NeurIPS 2026` |
| `topics` | Comma-separated tags shown as chips |
| `image` | Filename in `images/publications/` for the thumbnail |
| `pdf` | Absolute URL for the PDF button |
| `code` | Absolute URL for a Code button |
| `award` | Renders an accent badge, e.g. `Best Paper` |

For `@unpublished`, put the bare arXiv ID in `doi` (e.g. `2608.18495`) — the template prefixes it to build the arXiv link.

> **These seven are presentation-only.** The BibTeX dialog strips them before you copy, so nobody ends up with `image = {...}` in their `.bib`. If you add another display field, add its name to `PRESENTATION_FIELDS` in `assets/js/site.js` — and see the JavaScript note below.

Your name is bolded automatically from `scholar.last_name` / `first_name` in `_config.yml`.

### Add or edit a research project

`_pages/research.md`. Copy an existing `<article class="proj-card">` block. Entries are numbered automatically — don't hardcode numbers.

To add a figure, drop a `<figure class="proj-figure">` **directly above** the `.proj-lead` paragraph; it floats right and the prose wraps around it. Two projects have `<!-- TODO: project image -->` placeholders waiting for artwork.

### Edit page text

`_pages/*.md` — `home.md`, `research.md`, `publications.md`, `teaching.md`, `cv.md`. Ordinary Markdown.

The home page's availability notice is a parameter, so it lives with the content rather than in the template:

```liquid
{% include hero.html notice="I am looking for a research internship in Summer 2027." %}
```

Delete the `notice="…"` part to hide the banner entirely.

### Change name, links, or contact details

`_config.yml`. Every link is guarded by an empty-string check, so **blanking a value removes it everywhere at once** — hero, footer, and the JSON-LD `sameAs` in `_includes/head.html`.

`google_scholar` is currently blank on purpose, pending a real profile. Paste the URL there and the link returns in all three places.

`accent_color` now feeds **only** `favicon.svg` (which is Liquid-templated, initials and all). The site's real palette lives in `_sass/base/_variables.scss`.

### Replace the CV

Overwrite `papers/cv.pdf`. It's linked from the hero, the footer, and the CV page.

### Add images

`images/research/` for project figures, `images/publications/` for citation thumbnails (3:2 works best), `images/` for the portrait.

---

## Design

The visual language is *Offprint*: the page should read first as a well-set academic publication, and reveal its wireless subject through quieter detail.

- **Type** — Instrument Serif (display), Schibsted Grotesk (text), Geist Mono (instrument labels). Loaded from Google Fonts in `_includes/head.html`; **the loader URL and the `--font-*` tokens must change together**, or you ship a stack whose first family silently 404s.
- **Colour** — paper and ink with one vermilion accent, plus an "instrument" cyan reserved for technical marks (venues, dates, project indices) and never used for prose. Dark mode is the same publication printed white-on-black.
- **Ground** — a fixed measurement graticule echoing WiNeRF's sampling grid, fading down the viewport, over paper grain.
- **Numbering** — sections and project entries are numbered with CSS counters, and `h2:only-of-type` suppresses the numeral on pages with a single section.
- **Motion** — one CSS-only staggered reveal at first paint. No JavaScript involved.

All tokens live in `_sass/base/_variables.scss`. **Token names are load-bearing** — some are consumed by inline `style=""` in markup (`--space-*`, `--accent`, `--text-secondary`, `--text-muted`, `--container-max`), so change values freely but rename with care.

---

## Things that will bite you

**JavaScript needs a manual build.** The browser loads `assets/js/site.min.js`, which is a committed artifact, and **CI has no Node step**. Editing `assets/js/site.js` without rebuilding ships nothing at all — silently.

```bash
esbuild assets/js/site.js --bundle --minify --outfile=assets/js/site.min.js
```

Commit source and artifact together. (`npm run build:js` does the same thing if you have Node; a standalone `esbuild` binary is enough.)

**Bootstrap is vendored.** `_sass/bootstrap/` and `assets/javascript/bootstrap/` carry `__DO_NOT_MODIFY` markers. Override in `_sass/components/` instead. Only a subset is imported — notably `bootstrap/helpers` is **not**, so helper classes like `.sticky-top` do nothing (the navbar states `position: sticky` itself).

**Case sensitivity.** macOS doesn't care about filename case; the Linux build runner does. A file referenced as `Photo.png` but saved as `photo.png` works locally and 404s live.

**`_config.yml` changes need a server restart** — the watcher won't pick them up.

---

## Layout

```
_config.yml            site metadata, links, nav
_data/news.yml         news items
_pages/                the five pages + 404
_includes/             head, header, footer, hero, news-card
_layouts/              default, homelay, gridlay, bibtemplate
_sass/                 base/ components/ layouts/ utilities/  (+ vendored bootstrap/)
assets/main.scss       the single SCSS entry point
assets/ref.bib         publications
assets/js/site.js      source  →  site.min.js (committed artifact)
images/  papers/       content assets
```
