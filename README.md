# Muhammad Waleed Asaf — DevOps Portfolio

Source for [waleedasaf.github.io](https://waleedasaf.github.io). A fast, static, DevOps-themed
portfolio built with [Astro](https://astro.build) and deployed to GitHub Pages by GitHub Actions.

## Update content

All text lives in [`src/data/site.ts`](src/data/site.ts): profile, metrics, experience, skills,
projects, certifications and education. Edit it, push to `master`, and the site redeploys.

To refresh the resume download, replace `public/Muhammad_Waleed_Asaf_DevOps_Engineer_Resume.pdf`.

## Develop locally

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to dist/
```

## Deploy

Pushing to `master` runs `.github/workflows/deploy.yml`, which builds the site and publishes it
to GitHub Pages. In the repository settings, **Settings → Pages → Source** must be set to
**GitHub Actions**.
