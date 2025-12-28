import Link from "next/link";

const footerLinks = [
  { href: "/about", label: "About" },
  { href: "/strategy", label: "Strategy" },
  { href: "/publications", label: "Publications" },
  { href: "/team", label: "Team" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border/70 bg-background/70 backdrop-blur-sm">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 py-12 text-sm text-muted-foreground">
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <div className="max-w-xl">
            <p className="text-lg font-serif text-foreground">Falcon Student Investment Fund</p>
            <p className="mt-2 text-sm text-muted-foreground">
              A student-led, research-driven investment fund based in Abu Dhabi, focused on professional training and disciplined analysis.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-x-10 gap-y-2 text-sm">
            {footerLinks.map((link) => (
              <Link key={link.href} href={link.href} className="hover:text-foreground transition-colors">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="border-t border-border/60 pt-6 text-xs text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Falcon Student Investment Fund. All rights reserved.</p>
          <p className="mt-2">
            Falcon Student Investment Fund is a student-run organization. The content on this website is for educational purposes and does not constitute investment advice.
          </p>
        </div>
      </div>
    </footer>
  );
}
