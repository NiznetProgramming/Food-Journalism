import Layout from '../components/Layout'

export default function SpecialInterests() {
  return (
    <Layout>
      <main className="post">
        <figure>
          <img
            src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/russel.jpeg`}
            alt="Russel"
            className="post-image"
            style={{ maxHeight: '600px', maxWidth: '82%', width: 'auto' }}
          />
        </figure>
      </main>
    </Layout>
  )
}
