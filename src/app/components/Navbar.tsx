import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="flex">
      <ul>
        <li>
          <Link href="/">Welcome</Link>
        </li>
        <li>
          <Link href="/movies">Movies</Link>
        </li>
        <li>
          <Link href="/settings">Settings</Link>
        </li>
      </ul>
    </nav>
  )
}
