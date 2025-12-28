export default function TeamPage() {
  return (
    <main className="min-h-screen bg-background text-foreground px-4 md:px-12 py-10">
      <h1 className="text-5xl font-serif font-extrabold text-primary mb-12 tracking-tight text-center">Our Team</h1>

      {/* Investments Team */}
      <section className="mb-16">
        <h2 className="text-3xl font-serif font-bold text-primary mb-8">Investments Team</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="flex flex-col items-center">
            <img src="/arham-ahmed.jpg" alt="Arham Ahmed" className="h-36 w-36 object-cover rounded-lg mb-2 border-2 border-primary/50" />
            <div className="text-center">
              <h4 className="font-bold text-base text-foreground">Arham Ahmed</h4>
              <p className="text-primary font-semibold">Senior Analyst, US</p>
              <p className="text-xs text-foreground/70">NYU Abu Dhabi</p>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <img src="/hamad-alhosani.jpg" alt="Hamad Al Hosani" className="h-36 w-36 object-cover rounded-lg mb-2 border-2 border-primary/50" />
            <div className="text-center">
              <h4 className="font-bold text-base text-foreground">Hamad Al Hosani</h4>
              <p className="text-primary font-semibold">Analyst, US</p>
              <p className="text-xs text-foreground/70">Zayed University</p>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <img src="/abdulmalek-alhakem.jpg" alt="Abdulmalik Al Hakem" className="h-36 w-36 object-cover rounded-lg mb-2 border-2 border-primary/50" />
            <div className="text-center">
              <h4 className="font-bold text-base text-foreground">Abdulmalik Al Hakem</h4>
              <p className="text-primary font-semibold">Analyst, UAE Market</p>
              <p className="text-xs text-foreground/70">NYU Abu Dhabi</p>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <img src="/Hijab Icons.png" alt="Hijabi Icon" className="h-36 w-36 object-cover rounded-lg mb-2 border-2 border-primary/50" />
            <div className="text-center">
              <h4 className="font-bold text-base text-foreground">Wadima Al Shamsi</h4>
              <p className="text-primary font-semibold">Analyst, US</p>
              <p className="text-xs text-foreground/70">Khalifa University</p>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <img src="/rohan-sabu.jpg" alt="Rohan Sabu" className="h-36 w-36 object-cover rounded-lg mb-2 border-2 border-primary/50" />
            <div className="text-center">
              <h4 className="font-bold text-base text-foreground">Rohan Sabu</h4>
              <p className="text-primary font-semibold">Analyst, US</p>
              <p className="text-xs text-foreground/70">NYU Abu Dhabi</p>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <img src="/hamd-akmal.jpg" alt="Hamd Akmal" className="h-36 w-36 object-cover rounded-lg mb-2 border-2 border-primary/50" />
            <div className="text-center">
              <h4 className="font-bold text-base text-foreground">Hamd Akmal</h4>
              <p className="text-primary font-semibold">Senior Analyst, UAE Market</p>
              <p className="text-xs text-foreground/70">NYU Abu Dhabi</p>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <img src="/abdulrahman-baobaid.jpg" alt="Abdulrahman Ba Obaid" className="h-36 w-36 object-cover rounded-lg mb-2 border-2 border-primary/50" />
            <div className="text-center">
              <h4 className="font-bold text-base text-foreground">Abdulrahman Ba Obaid</h4>
              <p className="text-primary font-semibold">Analyst, UAE Market</p>
              <p className="text-xs text-foreground/70">NYU Abu Dhabi</p>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <img src="/Hijab Icons.png" alt="Hijabi Icon" className="h-36 w-36 object-cover rounded-lg mb-2 border-2 border-primary/50" />
            <div className="text-center">
              <h4 className="font-bold text-base text-foreground">Shahad Al Hadhrami</h4>
              <p className="text-primary font-semibold">Analyst, UAE Market</p>
              <p className="text-xs text-foreground/70">Khalifa University</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
