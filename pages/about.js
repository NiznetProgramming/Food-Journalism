import Layout from '../components/Layout'

export default function About() {
  return (
    <Layout>
      <main className="about">
        <h1>Da Ting About Me Is</h1>
        <p>Da Ting is.  I am da dumbest food journalism in Jackson Heights Nyuck City and da Vurl. </p>
        <p>I am from India, Nepal, and Tibet and tink all da food is so tasty.  Except Balut.</p>
        <figure className="about-image-wrap">
          <picture>
            <source srcSet={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/streetzin.jpg`} type="image/jpeg" />
            <img src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/streetzin.svg`} alt="Street scene" className="about-image" />
          </picture>
          <figcaption>Jackson Heights street eating — photo by Simi</figcaption>
        </figure>
      </main>
    </Layout>
  )
}
