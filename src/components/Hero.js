import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          L'IA au service de vos bureaux d'études
        </h1>
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-8">
          Automatisez vos études, rapportez des données fiables et accélérez vos
          processus grâce à nos outils intelligents conçus pour les professionnels
          au Maroc et en Europe.
        </p>
        <div className="flex gap-4 justify-center">
          <a
            href="#cta"
            aria-label="Demander une démo"
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition"
          >
            Demander une démo
          </a>
          <a
            href="#features"
            aria-label="En savoir plus"
            className="px-6 py-3 border border-gray-600 hover:border-gray-400 rounded-lg font-semibold transition"
          >
            En savoir plus
          </a>
        </div>
      </motion.div>
      {/* Illustration AI tools – simple SVG */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="mt-16"
      >
        <svg
          width="300"
          height="200"
          viewBox="0 0 300 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          className="opacity-80"
        >
          <circle cx="50" cy="100" r="20" stroke="#3B82F6" strokeWidth="2" />
          <circle cx="250" cy="100" r="20" stroke="#3B82F6" strokeWidth="2" />
          <line x1="70" y1="100" x2="230" y2="100" stroke="#3B82F6" strokeWidth="2" strokeDasharray="4" />
          <rect x="110" y="40" width="80" height="120" rx="8" fill="#1E3A5F" stroke="#3B82F6" strokeWidth="2" />
          <circle cx="150" cy="80" r="10" fill="#3B82F6" />
          <rect x="120" y="110" width="60" height="4" fill="#60A5FA" />
          <rect x="120" y="120" width="40" height="4" fill="#60A5FA" />
          <rect x="120" y="130" width="50" height="4" fill="#60A5FA" />
        </svg>
      </motion.div>
    </section>
  );
}