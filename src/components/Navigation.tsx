import Link from 'next/link'

export default function Navigation() {
  return (
    <nav>
      <div className="container mx-auto">
        <ul className="flex justify-end">
          <li className="mr-6"><Link href="/" className="hover:text-gray-300">Home</Link></li>
          <li className="mr-6"><Link href="/team" className="hover:text-gray-300">Team</Link></li>
          <li className="mr-6"><Link href="/strategy" className="hover:text-gray-300">Strategy</Link></li>
          <li className="mr-6"><Link href="/advisors" className="hover:text-gray-300">Our Advisors</Link></li>
          <li>
            <a 
              href="https://docs.google.com/forms/d/e/1FAIpQLSci8GsoJk0Dtx-lDpyKg4o1O3WoQkrjuYsnc4TN7RenmVKKqw/viewform?usp=sf_link" 
              className="hover:text-gray-300"
            >
              Apply
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}