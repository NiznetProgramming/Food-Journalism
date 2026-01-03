import Layout from '../components/Layout'
import { getAllPosts } from '../lib/posts'
import ArticleCard from '../components/ArticleCard'

export default function Home({ posts }) {
  return (
    <Layout>
      <header className="site-header">
        <h1>First Food Journalism Vit Down Syndrome</h1>
        <picture className="header-image-wrap">
          <source srcSet={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/tenzin_fitness.jpg`} type="image/jpeg" />
          <img src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/tenzin_fitness.svg`} alt="Tenzin Fitness" className="header-image" />
        </picture>
      </header>
      <main>
        <section className="posts-grid">
          {posts.map((post) => (
            <ArticleCard key={post.slug} post={post} />
          ))}
        </section>
      </main>
    </Layout>
  )
}

export async function getStaticProps() {
  const posts = getAllPosts()
  return {
    props: { posts },
  }
}
