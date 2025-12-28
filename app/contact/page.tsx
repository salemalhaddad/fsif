export default function ContactPage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-6 py-16">
      <div className="flex flex-col gap-10">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-muted-foreground">Contact</p>
          <h1 className="mt-4 text-4xl font-semibold text-foreground">Engage with the fund.</h1>
          <p className="mt-6 max-w-2xl text-base text-muted-foreground">
            For partnerships, speaker requests, or recruiting inquiries, reach us directly.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-border/70 bg-card/80 p-6">
            <h2 className="text-lg font-semibold text-foreground">General Inquiries</h2>
            <p className="mt-3 text-sm text-muted-foreground">contact@falconsif.org</p>
          </div>
          <div className="rounded-2xl border border-border/70 bg-card/80 p-6">
            <h2 className="text-lg font-semibold text-foreground">Partnerships</h2>
            <p className="mt-3 text-sm text-muted-foreground">partnerships@falconsif.org</p>
          </div>
        </div>
        <a href="mailto:contact@falconsif.org" className="text-sm font-semibold uppercase tracking-[0.3em] text-foreground">
          Send an email →
        </a>
      </div>
    </main>
  );
}
