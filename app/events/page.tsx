export default function EventsPage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-6 py-16">
      <div className="flex flex-col gap-10">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-muted-foreground">Events</p>
          <h1 className="mt-4 text-4xl font-semibold text-foreground">Institutional exposure through curated programming.</h1>
          <p className="mt-6 max-w-2xl text-base text-muted-foreground">
            Our calendar blends investment committee reviews with external speakers, alumni sessions, and professional development events.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Investment Pitch Night",
              date: "May 2025",
              description: "Finalist teams present live to the committee with full Q&A.",
            },
            {
              title: "Partner Networking Mixer",
              date: "July 2025",
              description: "Focused networking with regional investment firms.",
            },
          ].map((event) => (
            <div key={event.title} className="rounded-2xl border border-border/70 bg-card/80 p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">{event.date}</p>
              <h2 className="mt-3 text-lg font-semibold text-foreground">{event.title}</h2>
              <p className="mt-3 text-sm text-muted-foreground">{event.description}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
