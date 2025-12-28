export default function StrategyPage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-6 py-16">
      <div className="flex flex-col gap-10">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-muted-foreground">Strategy</p>
          <h1 className="mt-4 text-4xl font-semibold text-foreground">Long-term fundamental investing with a disciplined process.</h1>
          <p className="mt-6 max-w-2xl text-base text-muted-foreground">
            Our strategy emphasizes quality businesses, durable competitive advantages, and valuation discipline. We study global
            best practices and apply them to a simulated portfolio across UAE market leaders and global equities.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {[
            {
              title: "Investment Philosophy",
              description: "Focus on companies with resilient cash flows, capable management teams, and sustainable growth drivers.",
            },
            {
              title: "Portfolio Construction",
              description: "Position sizing based on conviction, with sector and risk limits to reduce concentration.",
            },
            {
              title: "Risk Management",
              description: "Downside scenarios, stop-loss reviews, and quarterly stress tests.",
            },
            {
              title: "Research Coverage",
              description: "Dedicated analyst coverage of UAE market leaders and global blue chips aligned with our mandate.",
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
