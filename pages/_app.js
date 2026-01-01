import '../styles/global.css'

export default function App({ Component, pageProps }) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''
  return (
    <>
      <style jsx global>{`
        :root {
          --base-path: '${basePath}';
          --india-flag: url('${basePath}/images/india_flag.svg');
        }
      `}</style>
      <Component {...pageProps} />
    </>
  )
}
