'use client';

import { motion } from 'framer-motion';

const plans = [
  {
    title: 'Электровелосипед',
    price: '12 500 руб/мес',
    description: 'Максимальная скорость и выносливость курьера',
  },
  {
    title: 'Механический велосипед',
    price: '2 800 руб/мес',
    description: 'Практичное и экономичное решение для доставки',
  },
];

export default function PricingSection() {
  return (
    <section id="pricing" className="relative overflow-hidden border-t border-white/10 bg-[#101820]">
      <div className="absolute left-0 top-16 hidden h-64 w-64 rounded-full bg-[#8de1db]/10 blur-3xl md:block" aria-hidden="true" />
      <div className="container py-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="section-heading mx-auto max-w-4xl space-y-4 text-center"
        >
          <p className="section-title">Гибкие тарифы</p>
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Понятные тарифы на технику
          </h2>
        </motion.div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55, ease: 'easeOut', delay: 0.1 + index * 0.05 }}
              className="card-surface p-8"
            >
              <span className="inline-flex rounded-full bg-[#143149] px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#7fd6d5]">
                {plan.title}
              </span>
              <p className="mt-6 text-4xl font-semibold text-white">{plan.price}</p>
              <p className="mt-4 text-base leading-7 text-slate-300">{plan.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
