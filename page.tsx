import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans flex flex-col">
      {/* Top Navbar */}
      {/* <nav className="w-full flex justify-center py-6 bg-background/80 backdrop-blur-md z-50 border-b border-primary/20">
        <div className="flex gap-8 text-lg font-semibold"></div>
      </nav> */}

      {/* Main Content */}
      <main className="flex-1 px-4 md:px-16 lg:px-24 py-12 lg:py-16">
        {/* Hero Section */}
        <section className="mb-12 mt-48 flex flex-col items-center justify-center">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-serif font-extrabold text-primary mb-6 tracking-tight text-center">Falcon Student Investment Fund</h1>
          <p className="text-xl md:text-2xl lg:text-3xl text-foreground/80 mb-6 max-w-4xl font-sans text-center">
            Abu Dhabi's First Student-led Simulated Investment Fund
          </p>
          <p className="text-lg md:text-xl lg:text-2xl text-foreground/80 leading-relaxed mb-12 max-w-5xl font-sans text-center">
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

        {/* Alumni Success Section */}
        <section className="mb-24 mt-24">
          <div className="max-w-5xl mx-auto flex flex-col items-center justify-center gap-8 px-4 md:px-0">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-primary mb-8 text-center">Alumni Success</h2>
            <p className="text-lg text-foreground/80 mb-8 text-center max-w-3xl">
              Our talented members have gone on to receive offers from leading financial institutions and investment firms worldwide.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 justify-center items-center w-full">
              <div className="flex justify-center items-center">
                <img
                  src="/ADIA.png"
                  alt="ADIA"
                  className="h-16 object-contain grayscale hover:grayscale-0 transition-all duration-300 hover:scale-105"
                  title="Abu Dhabi Investment Authority"
                />
              </div>
              <div className="flex justify-center items-center">
                <img
                  src="/Maxim.png"
                  alt="Maxim Group"
                  className="h-16 object-contain grayscale hover:grayscale-0 transition-all duration-300 hover:scale-105"
                  title="Maxim Group"
                />
              </div>
              <div className="flex justify-center items-center">
                <img
                  src="/Apollo.png"
                  alt="Apollo Global Management"
                  className="h-16 object-contain grayscale hover:grayscale-0 transition-all duration-300 hover:scale-105"
                  title="Apollo Global Management"
                />
              </div>
              <div className="flex justify-center items-center">
                <img
                  src="/global-ventures.png"
                  alt="Global Ventures"
                  className="h-16 object-contain grayscale hover:grayscale-0 transition-all duration-300 hover:scale-105"
                  title="Global Ventures"
                />
              </div>
              <div className="flex justify-center items-center">
                <img
                  src="/brevan-howard.png"
                  alt="Brevan Howard"
                  className="h-16 object-contain grayscale hover:grayscale-0 transition-all duration-300 hover:scale-105"
                  title="Brevan Howard"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Partners Section */}
        <section className="mb-48 mt-24">
          <div className="max-w-5xl mx-auto flex flex-col items-center justify-center gap-8 px-4 md:px-0">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-primary mb-8 text-center">Our Partners</h2>
            <p className="text-lg text-foreground/80 mb-8 text-center max-w-3xl">
              FSIF collaborates with industry-leading organizations to provide our members with valuable resources and opportunities.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-10 justify-center items-center w-full">
              <div className="flex justify-center items-center">
                <a href="https://global.vc" target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-105">
                  <img src="/global-ventures.png" alt="Global Ventures" className="h-16 object-contain grayscale hover:grayscale-0 transition-all duration-300" />
                </a>
              </div>
              <div className="flex justify-center items-center">
                <a href="https://adnocdrilling.ae/" target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-105">
                  <img src="/adnoc-drilling.png" alt="ADNOC Drilling" className="h-16 object-contain grayscale hover:grayscale-0 transition-all duration-300" />
                </a>
              </div>
              <div className="flex justify-center items-center">
                <a href="https://adgmacademy.com" target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-105">
                  <img src="/adgm-academy.png" alt="ADGM Academy" className="h-16 object-contain grayscale hover:grayscale-0 transition-all duration-300" />
                </a>
              </div>
              <div className="flex justify-center items-center">
                <a href="https://sarwa.co" target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-105">
                  <img src="/sarwa.png" alt="Sarwa" className="h-16 object-contain grayscale hover:grayscale-0 transition-all duration-300" />
                </a>
              </div>
              <div className="flex justify-center items-center col-span-2 md:col-span-4 mt-4">
                <a href="https://magnitudecreative.com/" target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-105">
                  <img src="/magnitude-creative.png" alt="Magnitude Creative" className="h-16 object-contain grayscale hover:grayscale-0 transition-all duration-300" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-10 border-primary/20 text-xs text-foreground/60 text-center">
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
