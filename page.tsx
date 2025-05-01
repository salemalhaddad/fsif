import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans flex flex-col">
      {/* Top Navbar */}
      {/* <nav className="w-full flex justify-center py-6 bg-background/80 backdrop-blur-md z-50 border-b border-primary/20">
        <div className="flex gap-8 text-lg font-semibold"></div>
      </nav> */}

      {/* Main Content */}
      <main className="flex-1 px-4 md:px-12 py-10">
        {/* Hero Section */}
        <section className="mb-12 flex flex-col items-center justify-center">
          <h1 className="text-6xl md:text-6xl font-serif font-extrabold text-primary mb-6 tracking-tight text-center">Falcon Student Investment Fund</h1>
          <p className="text-xl md:text-2xl text-foreground/80 mb-6 max-w-3xl font-sans text-center">
            Abu Dhabi's Premier Undergraduate Investment Organization
          </p>
          <p className="text-lg md:text-xl text-foreground/80 leading-relaxed mb-12 max-w-3xl font-sans text-center">
            At FSIF, we provide students with hands-on investment experience, real-world market exposure, and the opportunity to develop professional skills in the financial industry.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link href="https://docs.google.com/forms/d/1HDeZVcneRjws6pb3o61hzWAgUe6hBXJWQLghdp4DeFc/edit" className="px-8 py-4 rounded bg-background text-primary font-bold text-xl hover:bg-background/90 transition-colors shadow-lg font-sans">
              Join Now
            </Link>
            <Link href="/team" className="px-8 py-4 rounded border border-primary text-background font-bold text-xl hover:bg-primary hover:text-background transition-colors shadow-lg font-sans">
              Team Page
            </Link>
          </div>
        </section>

        {/* Partners Section */}
        <section className="mb-16">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-8">Our Partners</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 justify-center items-center">
              <a href="https://global.vc" target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-105">
                <img src="/global-ventures.png" alt="Global Ventures" className="h-12 object-contain grayscale hover:grayscale-0 transition" />
              </a>
              <a href="https://adnocdrilling.ae/" target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-105">
                <img src="/adnoc-drilling.png" alt="ADNOC Drilling" className="h-12 object-contain grayscale hover:grayscale-0 transition" />
              </a>
			  <a href="https://adgmacademy.com" target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-105">
                <img src="/adgm-academy.png" alt="ADGM Academy" className="h-12 object-contain grayscale hover:grayscale-0 transition" />
              </a>
              <a href="https://sarwa.co" target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-105">
                <img src="/sarwa.png" alt="Sarwa" className="h-12 object-contain grayscale hover:grayscale-0 transition" />
              </a>
              <a href="https://magnitudecreative.com/" target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-105">
                <img src="/magnitude-creative.png" alt="Magnitude Creative" className="h-12 object-contain grayscale hover:grayscale-0 transition" />
              </a>
              {/* <a href="https://www.destinationabudhabi.com/" target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-105">
                <img src="/destination_abudhabi.png" alt="Destination Abu Dhabi" className="h-12 object-contain grayscale hover:grayscale-0 transition" />
              </a> */}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-10 border-t border-primary/20 text-xs text-foreground/60 text-center mt-12">
          <div className="max-w-4xl mx-auto">
            <p>&copy; {new Date().getFullYear()} Falcon Student Investment Fund. All rights reserved.</p>
            <p className="mt-2">
              "Falcon SIF" is a student-run organization. This website is maintained independently of any educational institution. The activities on this website are not supervised or endorsed by any institution.
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
}
