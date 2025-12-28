import Link from "next/link";

export default function Home() {
  return (
    <main className="relative">
      <section className="relative overflow-hidden border-b border-border/70">
        <div className="absolute inset-0 bg-grid-slate opacity-40" />
        <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 py-24">
          <div className="flex flex-col gap-6">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-muted-foreground">
              Abu Dhabi · Student-led · Research-Driven
            </p>
            <h1 className="text-4xl font-semibold leading-tight text-foreground sm:text-5xl lg:text-6xl">
              Falcon Student Investment Fund
            </h1>
            <p className="max-w-2xl text-lg text-muted-foreground">
              FSIF is an institutional-style, student-managed investment fund delivering rigorous equity research, disciplined portfolio construction, and professional training for the next generation of investors.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="https://docs.google.com/forms/d/e/1FAIpQLSfqN8NfNnI4Us5XJS50nq-Ik9D_zT5vr6vBsEj5KDUryrbGdA/viewform?usp=header"
                className="rounded-full bg-primary px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Apply for Membership
              </Link>
              <Link
                href="/publications"
                className="rounded-full border border-foreground/30 px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-foreground transition-colors hover:bg-foreground hover:text-background"
              >
                View Publications
              </Link>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { label: "Simulated AUM", value: "$100K" },
              { label: "Portfolio Universe", value: "UAE Market + Global Large Cap" },
              {
                label: "Equity Research Reports",
                value: "7 Published",
              },
            ].map((metric) => (
              <div
                key={metric.label}
                className="rounded-2xl border border-border/70 bg-card/80 p-6 backdrop-blur"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
                  {metric.label}
                </p>
                <p className="mt-3 text-2xl font-semibold text-foreground">{metric.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-muted-foreground">Mandate</p>
            <h2 className="mt-4 text-3xl font-semibold text-foreground">Institutional discipline, student leadership.</h2>
            <p className="mt-6 text-base text-muted-foreground">
              We combine structured investment training with real-world research processes. Our analysts build conviction through
              fundamental analysis, sector mapping, and risk-aware portfolio construction.
            </p>
          </div>
          <div className="grid gap-6">
            {[
              {
                title: "Equity Research",
                description: "Bottom-up coverage on UAE market leaders and global large cap names with full valuation models.",
              },
              {
                title: "Governance",
                description: "Investment committee reviews, quarterly rebalancing, and documented decisions.",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl border border-border/70 bg-card/70 p-6">
                <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-border/70 bg-background/70">
        <div className="mx-auto w-full max-w-6xl px-6 py-20">
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-4">
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-muted-foreground">Investment Process</p>
              <h2 className="text-3xl font-semibold text-foreground">A repeatable workflow inspired by institutional standards.</h2>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {[
                {
                  title: "Idea Origination",
                  description: "Screening, sector tailwinds, and quarterly thematic reports.",
                },
                {
                  title: "Underwriting",
                  description: "Full models, management quality assessment, and downside scenarios.",
                },
                {
                  title: "Decision & Monitoring",
                  description: "Investment memos, committee votes, and catalyst-driven updates.",
                },
              ].map((step, index) => (
                <div key={step.title} className="rounded-2xl border border-border/70 bg-card/80 p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
                    Step {index + 1}
                  </p>
                  <h3 className="mt-3 text-lg font-semibold text-foreground">{step.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-20">
        <div className="flex flex-col gap-10">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-muted-foreground">Research</p>
            <h2 className="mt-4 text-3xl font-semibold text-foreground">Recent publications and coverage.</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { title: "Borouge Equity Research", sector: "Energy & Materials", date: "March 2025" },
              { title: "Walmart Equity Research", sector: "Consumer Staples", date: "March 2025" },
              { title: "Palo Alto Networks Equity Research", sector: "Technology", date: "March 2025" },
            ].map((pub) => (
              <div key={pub.title} className="rounded-2xl border border-border/70 bg-card/80 p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">{pub.sector}</p>
                <h3 className="mt-3 text-lg font-semibold text-foreground">{pub.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{pub.date}</p>
              </div>
            ))}
          </div>
          <div>
            <Link href="/publications" className="text-sm font-semibold uppercase tracking-[0.3em] text-foreground">
              Explore all publications →
            </Link>
          </div>
        </div>
      </section>

      <section className="border-t border-border/70">
        <div className="mx-auto w-full max-w-6xl px-6 py-20">
          <div className="flex flex-col gap-8 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-muted-foreground">Network</p>
            <h2 className="text-3xl font-semibold text-foreground">Alumni and partner relationships.</h2>
            <p className="text-sm text-muted-foreground">
              Our members progress to leading investment institutions while collaborating with regional partners.
            </p>
            <div className="grid grid-cols-2 gap-8 md:grid-cols-5">
              {[
                { src: "/ADIA.png", label: "Abu Dhabi Investment Authority" },
                { src: "/Apollo.png", label: "Apollo Global Management" },
                { src: "/Maxim.png", label: "Maxim Group" },
                { src: "/global-ventures.png", label: "Global Ventures" },
                { src: "/brevan-howard.png", label: "Brevan Howard" },
              ].map((logo) => (
                <div key={logo.label} className="flex items-center justify-center">
                  <img
                    src={logo.src}
                    alt={logo.label}
                    className="h-12 object-contain grayscale transition duration-300 hover:grayscale-0"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
