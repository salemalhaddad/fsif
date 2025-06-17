import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Publications | Falcon Student Investment Fund',
  description: 'Access our latest research reports, equity analyses, and pitch decks from the Falcon Student Investment Fund team.',
};

type Publication = {
  id: string;
  title: string;
  type: 'Report' | 'Pitch Deck' | 'Research' | 'Newsletter';
  sector: string;
  date: string;
  embedUrl: string;
  thumbnail: string;
};

// Mock data - replace with your actual Google Drive embed links
const publications: Publication[] = [
  {
    id: '1',
    title: 'Borouge Equity Research Report',
    type: 'Research',
    sector: 'Energy',
    date: 'March 2025',
    embedUrl: 'https://drive.google.com/file/d/19edWA4jIdTZLDJv1Ssp6rDH1M8cdyHZc/view?usp=sharing',
    thumbnail: 'borouge.png',
  },
  {
	id: '2',
	title: 'Walmart Equity Research Report',
	type: 'Research',
	sector: 'Retail',
	date: 'March 2025',
	embedUrl: 'https://drive.google.com/file/d/1o-e2IDY41rMsJxQpW22_Lqf_5ZZrYs5n/view?usp=sharing',
	thumbnail: 'walmart.png',
  },
  {
	id: '3',
	title: 'Palo Alto Network Equity Research Report',
	type: 'Research',
	sector: 'Technology',
	date: 'March 2025',
	embedUrl: 'https://drive.google.com/file/d/1qldLyuYPH2zriqFU_0Whtw294MCFgswG/view?usp=sharing',
	thumbnail: 'panw.png',
  }
  // Add more publications as needed
];

export default function PublicationsPage() {
  const sectors = ['All', ...Array.from(new Set(publications.map(pub => pub.sector)))];
  const types = ['All', ...Array.from(new Set(publications.map(pub => pub.type)))];

  return (
    <main className="min-h-screen pt-24 px-4 md:px-8 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">Publications</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {publications.map((publication) => (
            <div key={publication.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="h-48 bg-gray-100 relative">
                {/* Thumbnail or preview */}
                <img src={publication.thumbnail} className="mx-auto w-full h-full object-cover" alt={publication.title} />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-primary">{publication.sector}</span>
                  <span className="text-sm text-gray-500">{publication.date}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{publication.title}</h3>
                <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-primary/10 text-primary">
                  {publication.type}
                </span>
                <div className="mt-4">
                  <a
                    href={publication.embedUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-primary hover:underline"
                  >
                    View Publication
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 ml-1"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
