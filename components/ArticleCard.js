import Link from 'next/link'

export default function ArticleCard({ post }) {
  return (
    <article className="card">
      <Link href={`/posts/${post.slug}`}>
        <div className="card-link">
          {post.image && <img src={post.image} alt={post.title} className="card-image" />}
          <h2>{post.title}</h2>
          <p>{post.excerpt}</p>
          <p className="meta">{post.date}</p>
        </div>
      </Link>
    </article>
  )
}
