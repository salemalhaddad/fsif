export default function AboutPage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-6 py-16">
      <div className="flex flex-col gap-8">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-muted-foreground">About</p>
          <h1 className="mt-4 text-4xl font-semibold text-foreground">Building the next generation of investors.</h1>
          <p className="mt-6 max-w-2xl text-base text-muted-foreground">
            Falcon Student Investment Fund is Abu Dhabi&apos;s first student-led simulated investment fund, designed to mirror the structure and discipline of institutional asset managers.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl border border-border/70 bg-card/80 p-6">
            <h2 className="text-lg font-semibold text-foreground">Mission</h2>
            <p className="mt-3 text-sm text-muted-foreground">
              Provide rigorous investment training, hands-on research experience, and a collaborative platform for aspiring finance professionals.
            </p>
          </div>
          <div className="rounded-2xl border border-border/70 bg-card/80 p-6">
            <h2 className="text-lg font-semibold text-foreground">Vision</h2>
            <p className="mt-3 text-sm text-muted-foreground">
              Establish a benchmark for student investment funds in the region with institutional-grade processes and outcomes.
            </p>
          </div>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {[
            {
              title: "Investment Committee",
              description: "Formal IC sessions evaluate ideas, challenge assumptions, and document decisions to build accountability.",
            },
            {
              title: "Education & Training",
              description: "Structured onboarding, modeling workshops, and research bootcamps build technical depth.",
            },
            {
              title: "Professional Standards",
              description: "Research templates, compliance guidelines, and governance ensure consistency across cohorts.",
            },
          ].map((item) => (
            <div key={item.title} className="rounded-2xl border border-border/70 bg-card/70 p-6">
              <h3 className="text-base font-semibold text-foreground">{item.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
