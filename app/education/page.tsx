export default function EducationPage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-6 py-16">
      <div className="flex flex-col gap-10">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-muted-foreground">Education</p>
          <h1 className="mt-4 text-4xl font-semibold text-foreground">Training built for institutional readiness.</h1>
          <p className="mt-6 max-w-2xl text-base text-muted-foreground">
            Our curriculum combines technical modeling, research writing, and investment communication to prepare students for finance careers.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {[
            {
              title: "Research Workshops",
              description: "Fundamental analysis, valuation methods, and sector deep dives.",
            },
            {
              title: "Investment Writing",
              description: "Training on professional memos, thesis articulation, and risk disclosure.",
            },
            {
              title: "Pitch Competitions",
              description: "Live IC-style presentations with critical feedback loops.",
            },
            {
              title: "Industry Dialogues",
              description: "Guest speakers from asset management, investment banking, and private markets.",
            },
          ].map((item) => (
            <div key={item.title} className="rounded-2xl border border-border/70 bg-card/80 p-6">
              <h2 className="text-lg font-semibold text-foreground">{item.title}</h2>
              <p className="mt-3 text-sm text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
