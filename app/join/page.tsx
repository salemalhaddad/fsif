export default function JoinPage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-6 py-16">
      <div className="flex flex-col gap-10">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-muted-foreground">Join</p>
          <h1 className="mt-4 text-4xl font-semibold text-foreground">Apply to the next cohort.</h1>
          <p className="mt-6 max-w-2xl text-base text-muted-foreground">
            FSIF recruits analytical, collaborative students who want to build institutional investment skills. Applications are open to all majors.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {[
            "Resume and brief cover note submission.",
            "Technical and behavioral interview.",
            "Case study: equity research memo.",
            "Final committee review.",
          ].map((step, index) => (
            <div key={step} className="rounded-2xl border border-border/70 bg-card/80 p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">Step {index + 1}</p>
              <p className="mt-3 text-sm text-muted-foreground">{step}</p>
            </div>
          ))}
        </div>
        <div className="rounded-2xl border border-border/70 bg-card/80 p-6">
          <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-lg font-semibold text-foreground">Ready to apply?</h2>
              <p className="mt-2 text-sm text-muted-foreground">Submit your application and we will be in touch.</p>
            </div>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSfqN8NfNnI4Us5XJS50nq-Ik9D_zT5vr6vBsEj5KDUryrbGdA/viewform?usp=header"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-primary px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Apply Now
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
