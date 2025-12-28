export default function SuccessionModelPage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-6 py-16">
      <div className="flex flex-col gap-10">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-muted-foreground">Succession</p>
          <h1 className="mt-4 text-4xl font-semibold text-foreground">Continuity through structured leadership development.</h1>
          <p className="mt-6 max-w-2xl text-base text-muted-foreground">
            FSIF operates a multi-year pipeline that prepares analysts for leadership roles while maintaining a consistent investment process.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Analyst Year",
              description: "Foundational training in research, valuation, and internal investment communication.",
            },
            {
              title: "Senior Analyst",
              description: "Sector ownership, mentoring new analysts, and contributing to IC decisions.",
            },
            {
              title: "Leadership Track",
              description: "Committee responsibilities, portfolio oversight, and external representation.",
            },
          ].map((stage) => (
            <div key={stage.title} className="rounded-2xl border border-border/70 bg-card/80 p-6">
              <h2 className="text-lg font-semibold text-foreground">{stage.title}</h2>
              <p className="mt-3 text-sm text-muted-foreground">{stage.description}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
