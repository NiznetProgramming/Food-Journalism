import Link from 'next/link'

export default function Layout({ children }) {
  return (
    <div className="container">
      <nav className="nav">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
      </nav>
      {children}
      <footer className="footer">
        <p>© {new Date().getFullYear()} Best Food Journalism</p>
      </footer>
    </div>
  )
}
