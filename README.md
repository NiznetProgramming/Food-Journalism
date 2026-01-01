# Food Journal — Next.js starter

Starter scaffold for a small food journalism blog using Next.js (plain JavaScript), MDX posts, and GitHub Pages deploy.

Features:
- Next.js + plain JS
- MDX content from `/posts`
- Basic components (Nav, Footer, ArticleCard)
- Plain CSS styling (`/styles/global.css`)
- GitHub Actions workflow to deploy the static `out/` folder to GitHub Pages

Quick start:
1. Install dependencies: `npm install`
2. Run dev server: `npm run dev`
3. Build and export: `npm run build` (generates `out/`)
4. Deploy with `npm run deploy` (uses `gh-pages`) or push to `main` to trigger the included GitHub Action.

Notes for GitHub Pages:
- If you host at `https://username.github.io/repo`, you may need to set the `assetPrefix` and `basePath` in `next.config.js` to `'/repo'` so assets resolve correctly. Alternatively, host as a user page or use a custom domain.
- Set the repository field in `package.json` to your repo if you use `gh-pages`.

Customize styles in `/styles/global.css` and add posts to `/posts` as `.mdx` files.

Images
- Add photos to `public/images` and reference them in posts like `![alt text](/images/photo.jpg)`. Place high-resolution images and optionally provide resized variants for responsive `srcset` usage.
