import { useState } from 'react';
import { motion } from 'framer-motion';

export default function CTA() {
  const [form, setForm] = useState({ email: '', phone: '' });
  const [status, setStatus] = useState('idle');

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const res = await fetch(process.env.NEXT_PUBLIC_CTA_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error('Erreur');

      setStatus('success');
      setForm({ email: '', phone: '' });
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="cta" className="py-20 px-6 bg-blue-900 bg-opacity-20">
      <div className="max-w-xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Prêt à révolutionner vos études ?
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Laissez-nous votre email et votre téléphone, notre équipe vous recontactera
            sous 24h pour une démo personnalisée.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 justify-center">
            <input
              type="email"
              name="email"
              placeholder="Votre email"
              value={form.email}
              onChange={handleChange}
              required
              className="flex-1 p-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-blue-500 outline-none"
              aria-label="Adresse email"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Votre téléphone"
              value={form.phone}
              onChange={handleChange}
              required
              className="flex-1 p-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-blue-500 outline-none"
              aria-label="Numéro de téléphone"
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              className={`px-6 py-3 rounded-lg font-semibold transition ${
                status === 'loading' ? 'bg-gray-600 cursor-wait' : 'bg-blue-600 hover:bg-blue-700'
              }`}
              aria-label="Obtenir une démo"
            >
              {status === 'loading' ? 'Envoi…' : 'Obtenir une démo'}
            </button>
          </form>
          {status === 'success' && (
            <p className="mt-4 text-green-400">Merci ! Nous vous contacterons bientôt.</p>
          )}
          {status === 'error' && (
            <p className="mt-4 text-red-400">Erreur d&apos;envoi. Veuillez réessayer.</p>
          )}
        </motion.div>
      </div>
    </section>
  );
}