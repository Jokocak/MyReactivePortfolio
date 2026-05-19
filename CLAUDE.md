# James Kocak — Portfolio Source of Truth

Canonical record of what the live portfolio currently shows and how the React
app is organized. Live site: https://james-kocak.netlify.app/.

The underlying personal facts (identity, experience, projects, skills) live in
the separate resume repo's CLAUDE.md. When site copy here contradicts that
file, **the resume repo wins** and this file (and the site) should be updated
to match. Lines marked **[stale]** flag known drift.

This file is informational, not aspirational — it documents reality. If
something belongs on the portfolio but isn't there yet, it goes under
"Missing / stale" so the gap is visible, not under "Currently displayed".

---

## Identity & Contact (as shown on site)

- **Name:** James Kocak
- **Display title:** "Associate Engineer"
- **Location:** Charlotte, NC (not currently displayed in the UI)
- **Email:** jamkocak88@gmail.com (routed through EmailJS contact form, not
  shown as plaintext)
- **GitHub:** https://github.com/Jokocak
- **LinkedIn:** https://linkedin.com/in/james-kocak
- **Profile photo:** `src/assets/jamkocak88@gmail.com-1.jpg`

---

## Education (as shown on site)

- **School:** North Carolina State University
- **Degree:** "Bachelors in Computer Science"
- **Graduation:** May 2025
- **GPA:** 3.6 / 4.0
- **Logo:** `src/assets/ncsu-logo-asset.png`

**[stale]** Resume source-of-truth has "Magna Cum Laude" — portfolio omits it.

---

## Experience (as shown on site)

Driven by `src/content/experience.js`. Single entry currently:

### Wells Fargo — Associate Engineer
- **Location:** Charlotte, NC
- **Dates:** July 2025 – Present
- **Logo:** none yet (`logo: null`) — card renders details without a logo
  until an asset is provided.
- **Description (verbatim, paragraphs in `experience.js`):**
  > "Building and maintaining the Automated Vulnerability Remediation System
  > (AVRS) — a set of Python microservices that ingest application-security
  > findings, route them through AI agents (including GitHub Copilot), and
  > auto-open remediation pull requests. Architecture spans MongoDB-backed
  > orchestration, Kafka-driven status tracking, and GitHub-integrated agent
  > dispatch."
  >
  > "Earlier work on the team covered CI pipelines in GitHub Actions for
  > Autosys JIL builds and Android project builds. Day-to-day work also
  > includes code review and design discussions across Python codebases,
  > with daily use of Claude and AI-powered developer tools to accelerate
  > delivery."

Site copy intentionally avoids the unverified metrics flagged in the resume
source-of-truth (e.g. "100+ teams", "60% PR acceptance rate", "thousands of
events/day"). When those are confirmed there, this section can pick them up.

---

## Projects — currently displayed

Card data lives in `src/content/projects.js` (the `softwareProjects` array).
Each card has a description and a "More" button that opens a modal whose
contents come from the per-project component imported in `App.jsx` and
registered in the `projectComponents` map keyed by project `id`. Icons are
referenced by string `iconKey` and resolved through `projectIconMap` at the
top of `App.jsx`.

### Kitchen Display System (id 5)
- **Description (verbatim, projects.js):** "Designed a full-stack kitchen
  display system integrating Clover API for real-time order display, with a
  scalable Expo/React Native, Django, and MySQL backend, reducing errors by
  30%, boosting order processing by 20%, and enhancing team productivity by
  15% through Agile mentorship and a Project Design Document."
- **Modal component:** `src/projects/KitchenDisplaySystem.jsx`
- **Repo:** https://github.com/Jokocak/PoppyCoxKDS
- **Video:** placeholder — modal currently says "Coming Soon".

### CoffeeMaker (id 4)
- **Description (verbatim, projects.js):** "Collaborated in a team to develop
  CoffeeMaker, a fullstack web application for coffee order management.
  Implemented robust CRUD operations and REST API endpoints using Spring Boot
  on the backend, and built a dynamic, user-friendly frontend. The project
  emphasized agile teamwork and best practices in software engineering."
- **Modal component:** `src/projects/CoffeeMaker.jsx`
- **Repo:** https://github.com/Jokocak/CoffeeMaker
- **Live demo:** https://coffeemaker.up.railway.app/login
- **Video:** `src/assets/CoffeeMakerDemo.mp4` (2.4 MB).

### Data Product Catalog (id 2)
- **Description (verbatim, projects.js):** "Engineered a scalable PostgreSQL
  ingestion pipeline for millions of records, developed a sub-minute
  identification algorithm for optimal data product blueprint matches, and
  implemented full CRUD functionality to manage 10k+ data assets."
- **Modal component:** `src/projects/DataProductCatalog.jsx`
- **No repo link** (private / unreleased).

---

## Projects — missing entirely

Present in the resume source-of-truth but absent from the portfolio:

- **Clarus** (Jan 2026 – Present) — Flutter / Dart / Supabase / Postgres /
  MethodFi / Plaid / OAuth. Cross-platform budgeting & debt-payoff app with
  Plaid + MethodFi aggregation, RLS-isolated multi-tenant Postgres, dynamic-
  programming payoff optimizer.
- **Multiplayer Kayak Game** (Apr 2026 – Present) — Godot 4 / GDScript /
  ENet / Steamworks. Authoritative server with client-side prediction +
  reconciliation, Steamworks matchmaking.

---

## Skills (as displayed)

Five cards driven by `src/content/skills.js`, rendered with the
`.skills-secondary` wrapper (3-column grid):

| Card | Items |
|------|-------|
| Languages | Python, Java, TypeScript, JavaScript, Dart, SQL |
| Frameworks & Libraries | React, Spring Boot, FastAPI, FastMCP, Flutter |
| Data & Infrastructure | PostgreSQL, MongoDB, MySQL, Kafka, Docker, Kubernetes, GitHub Actions |
| AI & Security | AI agent orchestration, LLM integration, Claude / MCP, OWASP, SAST / DAST, Vulnerability remediation |
| Practices | Agile, Code Review, Technical Writing, Cross-functional Collaboration |

Resume source-of-truth lists a few items intentionally omitted here to keep
each card scannable: GDScript, JFrog Artifactory, Harness, Linux. Add to
the relevant card if/when they become load-bearing to recruiter fit.

---

## Certifications (as shown on site)

Driven by `src/content/certifications.js`:

- **Claude Code Certification** — `verifyUrl` set, "Verify Credential"
  button. Logo: `src/assets/claude-logo-asset.png`.
- **Databricks Certified Data Engineer Associate** — `verifyUrl` set,
  "Verify Credential" button. Logo: `src/assets/databricks-logo-asset.png`.

---

## About / Bio (verbatim, `src/content/about.js`)

Two paragraphs:

> "I'm a software engineer who builds backend systems — Python microservices
> with FastAPI, and the CI pipelines that automatically build, test, scan,
> and publish their artifacts. The work I enjoy most is invisible: services
> that quietly move data between systems so other people don't have to think
> about it."
>
> "Lately I've been extending that into MCP servers with FastMCP — backend
> services designed for LLM agents instead of human-facing apps. Same
> instincts, new consumer."

By convention, the About blurb does **not** name the employer — Wells Fargo
mentions are kept isolated to the Experience section. Keep this split when
editing the bio.

---

## Resume PDF

`src/assets/James_Kocak_Resume.pdf` (~80 KB) is the canonical resume artifact
on the site. Path is held in `src/content/profile.js` as `profile.resume` and
consumed by the hero section. Surfaced via:

- **Preview Resume** button — opens a modal that embeds the PDF via
  `<object>` in `App.jsx`.
- **Download Resume** link — `<a download>` in the hero, also pointing at
  `profile.resume`.

There is no resume builder in this repo. Updating the site's resume means
replacing this PDF. Source for resume content is the resume repo's CLAUDE.md.

---

## Site sections (rendering order)

Single `<App>` component, hash-anchor navigation, no router. Sections in DOM
order (sidebar nav lives inside the `.sidebar` `<nav>` at the top of
`App.jsx`):

1. `#home` — hero (photo, name, title, social icons, resume buttons)
2. `#about`
3. `#experience`
4. `#skills`
5. `#projects`
6. `#certifications`
7. `#education`
8. `#thank-you` — closing message
9. `#contact-me` — EmailJS form

Education sits below Certifications by design — the lead story is the
Wells Fargo role + recent skills + projects + credentials; the degree is
context, not the headline.

Sidebar is hidden on viewports below 768px.

---

# Dev guide

## Stack

- **React 19** + **Vite 6**, vanilla JS (`.jsx`, no TypeScript).
- **Styling:** vanilla CSS, everything in one file: `src/App.css` (~772
  lines). Font: Montserrat (Google Fonts, loaded in `index.html`).
- **Icons:** `react-icons` — `FaGithub`, `FaLinkedin`, `MdEmail`,
  `FaDatabase`, `FaDisplay`, `FaCode`, `FaGears`, `LuBrainCircuit`.
- **Contact form:** `@emailjs/browser`. Credentials are env vars in `.env`
  (gitignored), wired up by `src/config/email-config.js` via
  `import.meta.env.VITE_SERVICE_ID` / `VITE_TEMPLATE_ID` / `VITE_PUBLIC_KEY`.
- **No router, no state library, no CSS framework, no test framework.**
- **Deployed to Netlify** at https://james-kocak.netlify.app/. No
  `netlify.toml` and no CI workflow in-repo — Netlify auto-builds on push.

`emailjs@^4.0.3` is also in `dependencies` alongside `@emailjs/browser`.
That's a Node SMTP package and almost certainly an install mistake — verify
and remove before adding dependencies of your own.

## Content architecture

Site content is data-driven via the `src/content/` directory. `App.jsx` is
the rendering shell — sections, layout, modals, event handlers — and pulls
all copy/data from these modules:

- `src/content/profile.js` — name, displayed title, photo asset, resume
  asset, GitHub + LinkedIn URLs.
- `src/content/about.js` — the About blurb (array of paragraph strings;
  each entry renders as its own `<p>` inside the About card).
- `src/content/education.js` — single education object (school, degree,
  date, GPA, logo asset, alt text).
- `src/content/experience.js` — array of experience entries. Currently
  empty; renders nothing until populated and an Experience section is
  wired up.
- `src/content/skills.js` — array of `{ title, items[] }` skill cards.
- `src/content/projects.js` — `softwareProjects` array of
  `{ id, title, description, iconKey }`. `iconKey` is resolved to a JSX
  icon element by `projectIconMap` at the top of `App.jsx` — that keeps
  the data file free of JSX so it stays serializable-ish and easy to
  re-source.
- `src/content/certifications.js` — array of certification objects;
  `verifyUrl: null` switches the button to the disabled "in progress"
  style.

Asset imports live inside the content modules (not `App.jsx`) so the data
file is the single owner of "what photo / logo / file belongs to this
entry."

## File map

- `my-reactive-portfolio/src/App.jsx` — the entire site is one component
  (~390 lines). Each section is a `<section id="...">` block; data comes
  from `src/content/`.
- `my-reactive-portfolio/src/content/` — all site copy and data. See
  Content architecture above.
- `my-reactive-portfolio/src/App.css` — all styling.
- `my-reactive-portfolio/src/projects/*.jsx` — modal contents per project.
  Registered in the `projectComponents` map inside `App.jsx`, keyed by
  project `id`.
- `my-reactive-portfolio/src/assets/` — profile photo, resume PDF, project
  video, cert/school logos. Some unused 2–10 MB photos still ship in the
  bundle; trim before adding more.
- `my-reactive-portfolio/src/config/email-config.js` — EmailJS env wiring.
- `my-reactive-portfolio/public/folder-icon.svg` — favicon.

## Edit conventions

- **Adding a project:** add an entry to `src/content/projects.js` with a
  unique `id`, set an `iconKey` (and register a new icon in
  `projectIconMap` inside `App.jsx` if the key is new), create a modal
  component at `src/projects/<Name>.jsx`, and register the id in the
  `projectComponents` map inside `App.jsx`.
- **Adding a skill:** add an item to an existing card in
  `src/content/skills.js`, or add a new `{ title, items[] }` object to the
  array for a new card. No JSX edits needed.
- **Adding a certification:** add an entry to
  `src/content/certifications.js`. Set `verifyUrl` to a string for an
  active link or `null` to render the disabled "Credential In Progress"
  style.
- **Updating the bio, education, profile photo, social URLs, resume PDF
  path:** edit the matching `src/content/*.js` file — never hardcode this
  into `App.jsx`.
- **Styling:** reuse `.card`, `.certifications-grid`, `.skill-card`,
  `.section` where they fit — those are the established patterns. New
  classes go in `App.css`.
- **Run locally:** `cd my-reactive-portfolio && npm run dev`.
- **Lint:** `npm run lint`.
- **Build:** `npm run build` (outputs to `dist/`).
- **Branching:** `main` is the production branch; `development` is the
  working branch. Netlify auto-builds on push — verify the deploy branch
  before pushing user-visible copy changes.

## Things to NOT do

- **Don't add top-level dependencies casually.** The runtime dep list is
  intentionally small (5 packages). New deps need a reason.
- **Don't introduce TypeScript, a CSS framework, or a router as a side
  effect** of an unrelated change. Those are deliberate decisions, not
  drive-bys.
- **Don't fabricate site content to match the resume.** If a section is
  stale, fix the section — don't pretend it already says the right thing.
- **Don't hardcode copy back into `App.jsx`.** All site copy belongs in
  `src/content/*.js`. If you find yourself typing a sentence inside JSX
  that isn't UI chrome, route it through a content module instead.
- **Don't commit `.env` or EmailJS secrets.** `.env` is gitignored; keep it
  that way.
- **Don't ship the unused multi-MB photos** by adding new imports that
  reference them. The unused candidates in `src/assets/` should be removed,
  not propagated.

---

## Framing notes

The portfolio's current voice is generic / backend-leaning. The resume
source-of-truth supports four richer framings: full-stack, backend /
platform, AI / ML, security / AppSec. When rewriting site copy (bio, project
descriptions, skills grouping), **pick one framing** and apply it
consistently — don't mash all four into the bio.
