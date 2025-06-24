import React from 'react';

export default function ArticlePage({ title, content, affiliateLink }) {
  return (
    <main className="p-8 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-4">{title}</h1>
      <article className="prose prose-lg" dangerouslySetInnerHTML={{ __html: content }} />
      <a
        href={affiliateLink}
        target="_blank"
        className="block mt-6 text-blue-600 font-semibold hover:underline"
      >
        Läs mer & öppna konto
      </a>
    </main>
  );
}

export async function getStaticProps({ params }) {
  const articles = {
    'smabolag-2025': {
      title: '5 svenska småbolag med potential 2025',
      affiliateLink: 'https://affiliate.avanza.se/track123',
      content: `
        <p>Sverige är fullt av intressanta tillväxtbolag med starka nischpositioner. Här är fem bolag vi tror kan växa kraftigt under 2025:</p>
        <ol>
          <li><strong>VBG Group</strong> – Industriell nischspelare inom fordonskomponenter.</li>
          <li><strong>Hexatronic</strong> – Fiberutbyggnaden fortsätter globalt, och Hexatronic är väl positionerade.</li>
          <li><strong>Teqnion</strong> – Ett förvärvsdrivet mikrobolag med stabil tillväxtfilosofi.</li>
          <li><strong>Oncopeptides</strong> – Bioteknikbolag med potentiell återkomst efter regulatoriska hinder.</li>
          <li><strong>Note</strong> – Kontraktstillverkning med strukturell medvind från Europa och hållbarhet.</li>
        </ol>
        <p>Alla dessa bolag innebär risk men också möjlighet till hög avkastning för den långsiktige investeraren.</p>
      `
    },
    'starta-foretag-ai': {
      title: 'Starta företag med AI – Så gör du 2025',
      affiliateLink: 'https://affiliate.nordnet.se/ai-bok',
      content: `
        <p>Att starta företag med hjälp av AI är enklare än någonsin. Här är en konkret plan för att komma igång 2025:</p>
        <ol>
          <li><strong>Identifiera ett problem</strong> i en nisch du förstår (t.ex. HR, utbildning, e-handel).</li>
          <li><strong>Använd GPT</strong> för att skapa prototyper, texter, pitchar och kundkommunikation.</li>
          <li><strong>Bygg ett MVP</strong> snabbt med low-code/no-code-verktyg.</li>
          <li><strong>Testa mot riktiga kunder</strong> direkt via sociala medier eller nyhetsbrev.</li>
          <li><strong>Skala med hjälp av AI-agenter</strong> för support, marknadsföring och analys.</li>
        </ol>
        <p>Företagande har aldrig varit så tillgängligt för så många. Nyckeln är att skapa verkligt värde – AI är bara verktyget.</p>
      `
    }
  };

  const article = articles[params.slug];
  return { props: { ...article } };
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { slug: 'smabolag-2025' } },
      { params: { slug: 'starta-foretag-ai' } }
    ],
    fallback: false
  };
}
