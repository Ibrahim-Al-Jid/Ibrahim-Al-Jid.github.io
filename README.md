# ibrahim-al-jid.github.io

Personal portfolio of Ibrahim Hamdy — data science, AI agents, and front-end craft. Bilingual (English / العربية) with full RTL support.

Live at **https://ibrahim-al-jid.github.io**

## Stack

- [Astro](https://astro.build) 7 (static output)
- [Tailwind CSS](https://tailwindcss.com) 4
- [GSAP](https://gsap.com) for scroll-driven motion (content stays visible with JS disabled)
- Deployed on GitHub Pages via GitHub Actions

## Structure

```
src/
  data/content.ts       all site copy, EN + AR
  data/caseStudies.ts   six project case studies (EN + AR)
  components/           Nav, Hero, Agents, PipelineDiagram, Work, About, Skills, Journey, Contact, Footer
  layouts/Base.astro    SEO/OG meta, fonts, lang/dir handling
  pages/                /, /ar/, /work/[slug], /ar/work/[slug], 404
public/
  assets/               avatar, og image
  cv/                   downloadable CVs (master + per-track variants)
.github/workflows/      deploy.yml (build + GitHub Pages)
```

## CVs

The PDFs under `public/cv/` are built from a separate CV-as-code pipeline (YAML content + HTML template → headless Chrome), so per-track variants stay in sync:

- `ibrahim-hamdy-master.pdf`
- `ibrahim-hamdy-front-end.pdf`
- `ibrahim-hamdy-data-analysis.pdf`
- `ibrahim-hamdy-ml-ai-engineer.pdf`
- `ibrahim-hamdy-backend-fullstack.pdf`

## Develop

```sh
npm install
npm run dev
npm run build   # outputs to dist/
```
