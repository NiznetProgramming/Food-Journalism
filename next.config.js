/**
 * Next.js config for GitHub Pages project site under /Food-Journalism
 * Ensures exported assets reference the repository sub-path correctly.
 */
const repoBasePath = '/Food-Journalism'

module.exports = {
  trailingSlash: true,
  basePath: repoBasePath,
  assetPrefix: repoBasePath,
  images: {
    // disable next's image optimization for static export / GitHub Pages
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: repoBasePath,
  },
}