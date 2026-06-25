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

### GitHub Pages（自动部署）

1. 将仓库推送到 GitHub，并确保默认分支为 `main`。
2. 推送后等待 [Deploy workflow](.github/workflows/deploy.yml) 跑通（会把 `dist/` 推到 `gh-pages` 分支）。
3. 打开 **Settings → Pages**（[iis-lab Pages 设置](https://github.com/Xinrui-Fang/iis-lab/settings/pages)）：
   - **Build and deployment → Source** 选 **Deploy from a branch**
   - **Branch** 选 `gh-pages`，文件夹选 **`/ (root)`**
   - 保存

若曾选过 **GitHub Actions** 作为 Source 却出现 `Failed to create deployment (404)`，请改用上方的 **Deploy from a branch → gh-pages**，或先在 Pages 里点一次 **Save** 启用 Pages 后再重跑 workflow。

- 站点地址：`https://xinrui-fang.github.io/iis-lab/`
- 若仓库名为 `<user>.github.io`，构建时 `VITE_BASE_PATH` 会自动设为 `/`

本地构建与线上一致（子路径示例）：

```bash
VITE_BASE_PATH=/iis-lab/ npm run build
```

`npm run build` 会生成 `dist/404.html`，用于 GitHub Pages 上的客户端路由回退。

### 其他静态托管

`dist/` 也可部署到 Netlify、Vercel 等；需配置 SPA 回退到 `index.html`。
