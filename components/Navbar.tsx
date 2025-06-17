import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full flex justify-center py-6 bg-background/80 backdrop-blur-md z-50 border-b border-primary/20">
      <div className="flex gap-8 text-lg font-semibold">
        <Link href="/about" className="hover:text-primary transition-colors">About</Link>
        <Link href="/strategy" className="hover:text-primary transition-colors">Strategy</Link>
        <Link href="/team" className="hover:text-primary transition-colors">Team</Link>
        <Link href="/advisors" className="hover:text-primary transition-colors">Advisors</Link>
        <Link href="/publications" className="hover:text-primary transition-colors">Publications</Link>
      </div>
    </nav>
  );
}
