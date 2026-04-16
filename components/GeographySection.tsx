'use client';

import { motion } from 'framer-motion';

const cities = ['Кемерово', 'Омск', 'Томск', 'Новосибирск', 'Барнаул', 'Красноярск'];

export default function GeographySection() {
  return (
    <section id="geography" className="border-t border-slate-300 bg-slate-200/90 text-slate-950 relative overflow-hidden">
      <div className="absolute right-0 top-12 hidden h-72 w-72 rounded-full bg-[#58bcbf]/10 blur-3xl md:block" aria-hidden="true" />
      <div className="container py-20">
        <div className="mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="section-heading mx-auto max-w-4xl space-y-4 text-center"
          >
            <p className="section-title">География присутствия</p>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              Широкая география партнерской сети в ключевых городах
            </h2>
            <p className="max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
              Наша сеть охватывает ключевые города Сибири, обеспечивая надежную поддержку курьерским службам и курьерским компаниям.
            </p>
          </motion.div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
            {cities.map((city, index) => (
              <motion.div
                key={city}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.55, ease: 'easeOut', delay: 0.1 + index * 0.05 }}
                className="w-full max-w-[360px] rounded-[28px] border border-slate-200 bg-white/95 p-7 shadow-soft transition hover:-translate-y-1 hover:shadow-xl"
              >
                <p className="text-sm uppercase tracking-[0.3em] text-[#57b8b9]">Город</p>
                <h3 className="mt-5 text-3xl font-semibold text-slate-950">{city}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
