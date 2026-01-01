import { getAllPosts, getPostData } from '../../lib/posts'
import Layout from '../../components/Layout'
import { MDXRemote } from 'next-mdx-remote'

export default function PostPage({ mdxSource, meta }) {
  return (
    <Layout>
      <article className="post">
        <h1>{meta.title}</h1>
        {meta.excerpt && <p className="description">{meta.excerpt}</p>}
        {meta.image && <img src={meta.image} alt={meta.title} className="post-image" loading="lazy" decoding="async" />}
        <p className="meta">{meta.date}</p>
        <div className="post-body">
          <MDXRemote {...mdxSource} />
        </div>
      </article>
    </Layout>
  )
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.slug)
  return { props: { mdxSource: postData.mdxSource, meta: postData.meta } }
}

export async function getStaticPaths() {
  const posts = getAllPosts()
  return {
    paths: posts.map((p) => ({ params: { slug: p.slug } })),
    fallback: false,
  }
}
