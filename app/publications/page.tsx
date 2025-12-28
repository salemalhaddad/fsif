import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Publications | Falcon Student Investment Fund',
  description: 'Access our latest research reports, equity analyses, and pitch decks from the Falcon Student Investment Fund team.',
};

type Publication = {
  id: string;
  title: string;
  type: "Report" | "Pitch Deck" | "Research" | "Newsletter";
  sector: string;
  date: string;
  embedUrl: string;
  ticker: string;
};

const publications: Publication[] = [
  {
    id: "1",
    title: "Borouge Equity Research Report",
    type: "Research",
    sector: "Energy & Materials",
    date: "March 2025",
    embedUrl: "https://drive.google.com/file/d/19edWA4jIdTZLDJv1Ssp6rDH1M8cdyHZc/view?usp=sharing",
    ticker: "UAE Market",
  },
  {
    id: "2",
    title: "Walmart Equity Research Report",
    type: "Research",
    sector: "Consumer Staples",
    date: "March 2025",
    embedUrl: "https://drive.google.com/file/d/1o-e2IDY41rMsJxQpW22_Lqf_5ZZrYs5n/view?usp=sharing",
    ticker: "Global Large Cap",
  },
  {
    id: "3",
    title: "Palo Alto Networks Equity Research Report",
    type: "Research",
    sector: "Technology",
    date: "March 2025",
    embedUrl: "https://drive.google.com/file/d/1qldLyuYPH2zriqFU_0Whtw294MCFgswG/view?usp=sharing",
    ticker: "Global Large Cap",
  },
  {
    id: "4",
    title: "Salik Equity Research Report",
    type: "Research",
    sector: "Infrastructure",
    date: "November 2025",
    embedUrl: "https://docs.google.com/presentation/d/18JtuGTW6P_CSHLCbfsiIJnxHT3qyrDLw/edit?usp=sharing&ouid=103991898234770058852&rtpof=true&sd=true",
    ticker: "UAE Market",
  },
  {
    id: "5",
    title: "TAQA Equity Research Report",
    type: "Research",
    sector: "Utilities",
    date: "November 2025",
    embedUrl: "https://docs.google.com/presentation/d/1RZJQSccgmLLozgHg3Uw0vCZW6o6R6BTu/edit?usp=drive_link&ouid=103991898234770058852&rtpof=true&sd=true",
    ticker: "UAE Market",
  },
  {
    id: "6",
    title: "Occidental Petroleum Equity Research Report",
    type: "Research",
    sector: "Energy",
    date: "November 2025",
    embedUrl: "https://docs.google.com/presentation/d/1x_i6BSgMWfq9RwaR8riKVYmwb1pT1ysh/edit?usp=sharing&ouid=103991898234770058852&rtpof=true&sd=true",
    ticker: "Global Large Cap",
  },
  {
    id: "7",
    title: "Aldar Properties Equity Research Report",
    type: "Research",
    sector: "Real Estate",
    date: "November 2025",
    embedUrl: "https://docs.google.com/presentation/d/1KQh1k9lStB4tz-5D1qfkjNUXwt8ngHGx/edit?usp=sharing&ouid=103991898234770058852&rtpof=true&sd=true",
    ticker: "UAE Market",
  },
];

export default function PublicationsPage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-6 py-16">
      <div className="flex flex-col gap-10">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-muted-foreground">Publications</p>
          <h1 className="mt-4 text-4xl font-semibold text-foreground">Research reports and investment memos.</h1>
          <p className="mt-6 max-w-2xl text-base text-muted-foreground">
            Our analysts publish institutional-style research across regional and global equities. New coverage is added quarterly.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {publications.map((publication) => (
            <div key={publication.id} className="rounded-2xl border border-border/70 bg-card/80 p-6">
              <div className="flex items-center justify-between">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">{publication.sector}</p>
                <span className="rounded-full border border-foreground/20 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-foreground">
                  {publication.type}
                </span>
              </div>
              <h2 className="mt-4 text-lg font-semibold text-foreground">{publication.title}</h2>
              <div className="mt-2 flex items-center justify-between text-xs text-muted-foreground">
                <span className="font-semibold uppercase tracking-[0.3em]">{publication.date}</span>
                <span className="font-semibold uppercase tracking-[0.3em]">{publication.ticker}</span>
              </div>
              <a
                href={publication.embedUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex text-xs font-semibold uppercase tracking-[0.3em] text-foreground hover:text-primary"
              >
                View publication →
              </a>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
