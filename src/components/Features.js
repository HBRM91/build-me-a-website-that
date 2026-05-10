import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const features = [
  {
    title: "Analyse automatisée",
    description: "Importez vos plans, devis et documents : notre IA extrait et analyse les données en temps réel.",
    icon: "📊",
  },
  {
    title: "Rapports intelligents",
    description: "Générez des rapports conformes aux normes marocaines et européennes en un clic.",
    icon: "📄",
  },
  {
    title: "Prédiction des coûts",
    description: "Anticipez les surcoûts et optimisez vos budgets grâce à l'apprentissage automatique.",
    icon: "💰",
  },
  {
    title: "Collaboration en ligne",
    description: "Travaillez à plusieurs sur un même projet, où que vous soyez, avec un partage sécurisé.",
    icon: "🤝",
  },
];

export default function Features() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="features" className="py-20 px-6 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Fonctionnalités clés
        </h2>
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-blue-500 transition"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}