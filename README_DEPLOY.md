Deployment notes

- If the site is served at `https://username.github.io/repo`, set `assetPrefix` and `basePath` in `next.config.js` to `'/repo'` and rebuild.
- The included GitHub Action will build and publish the `out/` folder to the `gh-pages` branch on push to `main`.
- Alternatively you can run `npm run deploy` locally (requires `gh-pages` to be installed).
