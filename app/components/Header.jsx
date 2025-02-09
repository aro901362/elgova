import Link from "next/link"

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-6 py-3 flex items-center justify-between">
        <div className="text-2xl font-bold text-gray-800">
          <Link href="/">Elgova</Link>
        </div>
        <ul className="flex space-x-6">
          <li>
            <Link href="/" className="text-gray-800 hover:text-gray-600 transition-colors duration-200">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="text-gray-800 hover:text-gray-600 transition-colors duration-200">
              About
            </Link>
          </li>
          <li>
            <Link href="/chat" className="text-gray-800 hover:text-gray-600 transition-colors duration-200">
              Chat
            </Link>
          </li>
          <li>
            <Link href="/blog" className="text-gray-800 hover:text-gray-600 transition-colors duration-200">
              Blog
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

