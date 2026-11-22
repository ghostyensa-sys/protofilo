# Ali Al Aidarous — Portfolio

Personal portfolio site. Private project work is shown through the story, craft metrics, and screenshots when they can be shared. There are no public GitHub links to the product repos.

## Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS
- Motion
- Deploy: Vercel

## Develop

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). `/` redirects to Arabic (`/ar`). English is at `/en`.

## Add project screenshots

1. Export PNGs or JPGs and redact anything sensitive.
2. Place them under `public/projects/[slug]/`.
3. Keep the filenames already listed in `src/content/projects.ts`.

The case page shows a screenshot only after that file exists. Until then the gallery stays hidden.

Slugs: `support-dashboard`, `jisr-payslips`, `cross-org-requests`.

## Site URL

Set `NEXT_PUBLIC_SITE_URL` to the public origin, for example `https://example.com`, before deploying. Canonical links, the sitemap, and share images use it. On Vercel, `VERCEL_URL` is the fallback.

## Deploy to Vercel

Push this portfolio repo (not the private product repos) to GitHub, import it in Vercel as a Next.js project, set `NEXT_PUBLIC_SITE_URL`, and deploy.
