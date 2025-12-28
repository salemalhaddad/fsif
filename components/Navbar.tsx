import Link from "next/link";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/strategy", label: "Strategy" },
  { href: "/publications", label: "Publications" },
  { href: "/team", label: "Team" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-6 py-4 md:flex-row md:items-center md:justify-between">
        <Link href="/" className="flex flex-col leading-none">
          <span className="text-lg font-serif text-foreground">Falcon Student Investment Fund</span>
        </Link>
        <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="transition-colors hover:text-foreground">
              {link.label}
            </Link>
          ))}
          <Link
            href="/join"
            className="rounded-full border border-foreground/20 px-4 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-foreground transition-colors hover:bg-foreground hover:text-background"
          >
            Join
          </Link>
        </nav>
      </div>
    </header>
  );
}
