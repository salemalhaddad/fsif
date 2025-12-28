export default function PartnersPage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-6 py-16">
      <div className="flex flex-col gap-10">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-muted-foreground">Partners</p>
          <h1 className="mt-4 text-4xl font-semibold text-foreground">Collaborating with regional leaders.</h1>
          <p className="mt-6 max-w-2xl text-base text-muted-foreground">
            We work with organizations that support capital markets education and experiential learning for students.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { src: "/global-ventures.png", name: "Global Ventures" },
            { src: "/adnoc-drilling.png", name: "ADNOC Drilling" },
            { src: "/adgm-academy.png", name: "ADGM Academy" },
            { src: "/sarwa.png", name: "Sarwa" },
            { src: "/magnitude-creative.png", name: "Magnitude Creative" },
          ].map((partner) => (
            <div
              key={partner.name}
              className="flex items-center justify-center rounded-2xl border border-border/70 bg-card/80 p-6"
            >
              <img src={partner.src} alt={partner.name} className="h-12 object-contain grayscale" />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
