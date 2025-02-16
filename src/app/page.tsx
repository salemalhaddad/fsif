import Navigation from '@/components/Navigation'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Navigation />
      <div className="md:mx-40 md:my-40 my-10 text-center">
        <h1>Welcome to Falcon Student Investment Fund, Abu Dhabi's Only Student Investment Fund</h1>
        <p>Falcon Student Investment Fund (FSIF) is the first independent undergraduate investment fund in Middle East. We unite exceptional students to invest in financially promising public companies across the UAE, and the developed markets.</p>
        <Link href="https://docs.google.com/forms/d/e/1FAIpQLSci8GsoJk0Dtx-lDpyKg4o1O3WoQkrjuYsnc4TN7RenmVKKqw/viewform?usp=sf_link">
          <button className="bg-white text-black mt-5 font-bold py-2 px-4 rounded border border-black hover:bg-gray-200">
            Join Us
          </button>
        </Link>
        <Link href="mailto:contact@falconsif.org">
          <button className="bg-black text-white mt-5 font-bold py-2 px-4 rounded border border-white hover:bg-gray-800 ml-4">
            Sponsor Us
          </button>
        </Link>
      </div>
    </>
  )
}