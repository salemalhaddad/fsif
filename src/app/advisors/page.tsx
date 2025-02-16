import Navigation from '@/components/Navigation'
import Image from 'next/image'

export default function Advisors() {
  return (
    <>
      <Navigation />
      <div className="text-center mt-12">
        <h1>Meet Our Advisors</h1>
        <p className="mb-10">Our advisors bring a wealth of diverse experiences and backgrounds, with strong expertise in education, investment, and governance.</p>
        <div className="flex justify-center flex-wrap">
          <div className="advisor">
            <Image src="/peter_mccreanor.png" alt="Peter McCreanor" width={200} height={200} className="mb-4" />
            <h2 className="font-bold">Peter McCreanor</h2>
            <p>CEO, Tribe Infrastructure Group</p>
            <a href="https://www.linkedin.com/in/peter-mccreanor-b0809710/">
              <Image src="/linkedin_logo.png" alt="LinkedIn" width={20} height={20} className="mx-auto mt-2" />
            </a>
          </div>
          <div className="advisor">
            <Image src="/bernardo_bortolotti.jpeg" alt="Bernardo Bortolotti" width={200} height={200} className="mb-4" />
            <h2 className="font-bold">Bernardo Bortolotti, PhD</h2>
            <p>Executive Director, Transition Investment Lab, Stern at NYUAD</p>
            <a href="https://www.linkedin.com/in/bernardo-bortolotti-715180?originalSubdomain=ae">
              <Image src="/linkedin_logo.png" alt="LinkedIn" width={20} height={20} className="mx-auto mt-2" />
            </a>
          </div>
          <div className="advisor">
            <Image src="/hamdan_alyousefi.jpeg" alt="Hamdan Al Yousefi" width={200} height={200} className="mb-4" />
            <h2 className="font-bold">Hamdan Al Yousefi</h2>
            <p>Youth Council Member, Mubadala</p>
            <a href="https://www.linkedin.com/in/hamdan-al-yousefi-1444a6a4">
              <Image src="/linkedin_logo.png" alt="LinkedIn" width={20} height={20} className="mx-auto mt-2" />
            </a>
          </div>
          <div className="advisor">
            <Image src="/neel_vohra.png" alt="Neel Vohra" width={200} height={200} className="mb-4" />
            <h2 className="font-bold">Neel Vohra, CFA</h2>
            <p>Entrepreneur, Head, ORF Middle East</p>
            <a href="https://ae.linkedin.com/in/neelvohra">
              <Image src="/linkedin_logo.png" alt="LinkedIn" width={20} height={20} className="mx-auto mt-2" />
            </a>
          </div>
          <div className="advisor">
            <Image src="/raunakk_jalan.jpeg" alt="Raunakk Jalan" width={200} height={200} className="mb-4" />
            <h2 className="font-bold">Raunakk Jalan</h2>
            <p>President of IAG, NYU</p>
            <a href="https://linkedin.com/raunakk_jalan">
              <Image src="/linkedin_logo.png" alt="LinkedIn" width={20} height={20} className="mx-auto mt-2" />
            </a>
          </div>
        </div>
      </div>
    </>
  )
}