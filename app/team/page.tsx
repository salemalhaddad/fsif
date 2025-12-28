export default function TeamPage() {
  const investmentsTeam = [
    {
      name: "Arham Ahmed",
      role: "Senior Analyst, US",
      school: "NYU Abu Dhabi",
      image: "/arham-ahmed.jpg",
    },
    {
      name: "Hamad Al Hosani",
      role: "Analyst, US",
      school: "Zayed University",
      image: "/hamad-alhosani.jpg",
    },
    {
      name: "Abdulmalik Al Hakem",
      role: "Analyst, UAE Market",
      school: "NYU Abu Dhabi",
      image: "/abdulmalek-alhakem.jpg",
    },
    {
      name: "Wadima Al Shamsi",
      role: "Analyst, US",
      school: "Khalifa University",
      image: "/Hijab Icons.png",
    },
    {
      name: "Rohan Sabu",
      role: "Analyst, US",
      school: "NYU Abu Dhabi",
      image: "/rohan-sabu.jpg",
    },
    {
      name: "Hamd Akmal",
      role: "Senior Analyst, UAE Market",
      school: "NYU Abu Dhabi",
      image: "/hamd-akmal.jpg",
    },
    {
      name: "Abdulrahman Ba Obaid",
      role: "Analyst, UAE Market",
      school: "NYU Abu Dhabi",
      image: "/abdulrahman-baobaid.jpg",
    },
    {
      name: "Shahad Al Hadhrami",
      role: "Analyst, UAE Market",
      school: "Khalifa University",
      image: "/Hijab Icons.png",
    },
  ];

  return (
    <main className="mx-auto w-full max-w-6xl px-6 py-16">
      <div className="flex flex-col gap-12">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-muted-foreground">Team</p>
          <h1 className="mt-4 text-4xl font-semibold text-foreground">Student leadership with institutional standards.</h1>
          <p className="mt-6 max-w-2xl text-base text-muted-foreground">
            Our leadership team oversees investment research, portfolio construction, and organizational operations.
          </p>
        </div>

        <section>
          <h2 className="text-2xl font-semibold text-foreground">Investments Team</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {investmentsTeam.map((member) => (
              <div key={member.name} className="rounded-2xl border border-border/70 bg-card/80 p-5 text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="mx-auto h-28 w-28 rounded-2xl object-cover"
                />
                <h3 className="mt-4 text-sm font-semibold text-foreground">{member.name}</h3>
                <p className="text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-muted-foreground">{member.role}</p>
                <p className="mt-1 text-xs text-muted-foreground">{member.school}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
