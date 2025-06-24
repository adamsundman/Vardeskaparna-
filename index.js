import React from 'react';
import Link from 'next/link';

const articles = [
  {
    title: '5 svenska småbolag med potential 2025',
    slug: 'smabolag-2025',
    description: 'Vi analyserar fem små svenska tillväxtbolag som kan explodera på börsen de kommande åren.',
    affiliateLink: 'https://affiliate.avanza.se/track123'
  },
  {
    title: 'Starta företag med AI – Så gör du 2025',
    slug: 'starta-foretag-ai',
    description: 'Hur du använder AI för att starta ett bolag utan startkapital och med låg risk.',
    affiliateLink: 'https://affiliate.nordnet.se/ai-bok'
  }
];

export default function Home() {
  return (
    <main className="p-8 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">Värdeskaparna</h1>
      <p className="mb-8 text-lg">Insikter om investeringar, AI och hur du skapar värde från grunden.</p>

      <div className="space-y-6">
        {articles.map(article => (
          <div key={article.slug} className="border p-4 rounded-xl shadow-sm">
            <h2 className="text-2xl font-semibold">
              <Link href={`/${article.slug}`}>{article.title}</Link>
            </h2>
            <p className="mt-2 text-gray-700">{article.description}</p>
            <a
              href={article.affiliateLink}
              target="_blank"
              className="inline-block mt-4 text-blue-600 hover:underline"
            >
              Läs mer & öppna konto
            </a>
          </div>
        ))}
      </div>
    </main>
  );
}
