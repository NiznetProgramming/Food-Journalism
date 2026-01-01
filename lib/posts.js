const fs = require('fs')
const path = require('path')
const matter = require('gray-matter')

const postsDirectory = path.join(process.cwd(), 'posts')

function getPostSlugs() {
  return fs.readdirSync(postsDirectory).filter((f) => f.endsWith('.mdx'))
}

function getPostBySlug(slug) {
  const realSlug = slug.replace(/\.mdx$/, '')
  const fullPath = path.join(postsDirectory, `${realSlug}.mdx`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)
  return { slug: realSlug, meta: data, content }
}

function getAllPosts() {
  const slugs = getPostSlugs()
  const posts = slugs.map((slug) => {
    const { slug: s, meta, content } = getPostBySlug(slug)
    const date = meta && meta.date ? new Date(meta.date).toISOString().split('T')[0] : null
    return {
      slug: s,
      title: meta.title || s,
      date,
      excerpt: meta.excerpt || (content && content.slice(0, 140) + '...'),
      image: meta && meta.image ? `/images/${meta.image}` : null,
    }
  })
  return posts.sort((a, b) => (a.date < b.date ? 1 : -1))
}

async function getPostData(slug) {
  const post = getPostBySlug(slug)
  // normalize meta.date to string and normalize image path so it's JSON-serializable
  const normalizedMeta = {
    ...post.meta,
    date: post.meta && post.meta.date ? new Date(post.meta.date).toISOString().split('T')[0] : null,
    image: post.meta && post.meta.image ? `/images/${post.meta.image}` : null,
  }
  // next-mdx-remote's serialize is ESM-only; dynamically import it here
  const { serialize } = await import('next-mdx-remote/serialize')
  const mdxSource = await serialize(post.content, { scope: normalizedMeta })
  return {
    slug: post.slug,
    mdxSource,
    meta: normalizedMeta,
  }
}

module.exports = { getAllPosts, getPostData, getPostBySlug }
