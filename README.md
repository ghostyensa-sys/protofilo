# Ali Al Aidarous — Portfolio

Personal portfolio site. Private project work is shown with **screenshots** and **craft metrics** (LOC, functions, issues solved) — no public GitHub links.

## Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS
- Motion (`motion` / Framer Motion library)
- Deploy: Vercel

## Develop

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Add project screenshots

1. Export PNGs/JPGs (redact anything sensitive).
2. Place them under `public/projects/[slug]/` (see folders already created).
3. Match filenames in `src/content/projects.ts` (`screenshots` + `metrics`).

Slugs: `support-dashboard`, `jisr-payslips`, `cross-org-requests`, `nyx-w`.

## Deploy to Vercel

Push this **portfolio** repo (not your private product repos) to GitHub, import in Vercel as a Next.js project, deploy.
