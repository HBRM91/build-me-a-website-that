import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-20 px-6 bg-gray-800">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            À propos de BureauAI
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            Fondée par des ingénieurs et des data scientists, BureauAI est née d&apos;un constat :
            les bureaux d&apos;études passent trop de temps sur des tâches répétitives. 
            Notre mission est de libérer ce temps en offrant des outils d&apos;intelligence artificielle 
            spécialement adaptés aux normes et aux marchés marocains et européens.
          </p>
          <p className="mt-4 text-lg text-gray-300 leading-relaxed">
            Nous accompagnons déjà plus de 50 bureaux d&apos;études dans leur transformation digitale,
            avec des gains de productivité allant jusqu&apos;à 40%.
          </p>
        </motion.div>
      </div>
    </section>
  );
}