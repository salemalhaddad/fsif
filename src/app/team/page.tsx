import Navigation from '@/components/Navigation'
import Image from 'next/image'

export default function Team() {
  return (
    <>
      <Navigation />
      <div className="text-center mt-12">
        <h1>Meet Our Team</h1>
        <p className="mb-10">Our team combines students from across Abu Dhabi who the fund's innovative investment strategies.</p>
        <div className="flex justify-center flex-wrap">
          <div className="team-member">
            <Image src="/salem_al_haddad.png" alt="Salem Al Haddad" width={200} height={200} className="mb-4" />
            <h2 className="font-bold">Salem Al Haddad</h2>
            <p>Co-President, Managing Director<br/>Khalifa University</p>
          </div>
          <div className="team-member">
            <Image src="/mohamed_ba_dhaib.jpeg" alt="Mohamed Ba Dhaib" width={200} height={200} className="mb-4" />
            <h2 className="font-bold">Mohamed Ba Dhaib</h2>
            <p>Chief Investment Officer<br/>NYU Abu Dhabi</p>
          </div>
          <div className="team-member">
            <Image src="/hyunbae_kim.jpeg" alt="Hyunbae Kim" width={200} height={200} className="mb-4" />
            <h2 className="font-bold">Hyunbae Kim</h2>
            <p>Portfolio Manager<br/>NYU Abu Dhabi</p>
          </div>
          <div className="team-member">
            <Image src="/pratik_kayastha.png" alt="Pratik Kayastha" width={200} height={200} className="mb-4" />
            <h2 className="font-bold">Pratik Kayastha</h2>
            <p>Risk Management, PM<br/>NYU Abu Dhabi</p>
          </div>
        </div>
      </div>
    </>
  )
}