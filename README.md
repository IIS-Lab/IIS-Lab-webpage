# IIS Lab Website

React + TypeScript + Vite rebuild of [Interactive Intelligent Systems Laboratory](https://iis-lab.org/) at The University of Tokyo.

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Build

```bash
npm run build
npm run preview
```

## Structure

- `src/pages/` — route pages (Home, Research, Publications, Members, DLS, What's up?, Contact, Join)
- `src/data/` — TypeScript loaders and types
- `src/data/markdown/` — site content (news, members, research, bilingual copy)
- `src/components/` — layout, header, footer, bilingual sections, news timeline

## Deploy

### GitHub Pages (automatic deployment)

1. Push the repository to GitHub with `main` as the default branch.
2. Wait for the [Deploy workflow](.github/workflows/deploy.yml) to finish (it publishes `dist/` to the `gh-pages` branch).
3. Open **Settings → Pages** ([iis-lab Pages settings](https://github.com/Xinrui-Fang/iis-lab/settings/pages)):
   - **Build and deployment → Source**: **Deploy from a branch**
   - **Branch**: `gh-pages`, folder **`/ (root)`**
   - Save

If you previously chose **GitHub Actions** as the source and see `Failed to create deployment (404)`, switch to **Deploy from a branch → gh-pages**, or click **Save** once in Pages settings to enable Pages, then re-run the workflow.

- Live site: `https://xinrui-fang.github.io/iis-lab/`
- If the repository is named `<user>.github.io`, the build sets `VITE_BASE_PATH` to `/` automatically.

Build locally with the same base path as production (subpath example):

```bash
VITE_BASE_PATH=/iis-lab/ npm run build
```

`npm run build` also generates `dist/404.html` for client-side routing on GitHub Pages.

### Other static hosts

You can deploy `dist/` to Netlify, Vercel, etc. Configure SPA fallback to `index.html`.
