import Head from 'next/head';
import Hero from '../components/Hero';
import Features from '../components/Features';
import About from '../components/About';
import Contact from '../components/Contact';
import CTA from '../components/CTA';

export default function Home() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>BureauAI – Solutions IA pour Bureaux d'Études</title>
        <meta name="description" content="BureauAI offre des outils d'IA puissants pour les bureaux d'études au Maroc et en Europe. Optimisez vos études, réduisez les coûts et gagnez en productivité." />
        <meta property="og:title" content="BureauAI – Solutions IA pour Bureaux d'Études" />
        <meta property="og:description" content="Automatisez vos analyses, rapports et calculs grâce à l'intelligence artificielle." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://bureauai.vercel.app" />
        <meta property="og:image" content="https://bureauai.vercel.app/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="BureauAI – Solutions IA pour Bureaux d'Études" />
        <meta name="twitter:description" content="Automatisez vos analyses, rapports et calculs grâce à l'intelligence artificielle." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-h-screen bg-gray-900 text-gray-100">
        <Hero />
        <Features />
        <About />
        <Contact />
        <CTA />
      </main>
    </>
  );
}