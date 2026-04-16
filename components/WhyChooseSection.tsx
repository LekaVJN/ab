'use client';

import { motion } from 'framer-motion';

const features = [
  {
    title: 'Экономия до 40%',
    description: 'Существенное сокращение транспортных расходов на последней миле.',
  },
  {
    title: 'Надежный и оперативный ремонт',
    description: 'Быстрое обслуживание или полная замена велосипеда в кратчайшие сроки.',
  },
  {
    title: 'Выдача без ограничений',
    description: 'Работаем без ограничений по гражданству, ФССП или регистрации.',
  },
  {
    title: 'Экологичность',
    description: 'Современный экологичный подход к городской курьерской сети.',
  },
];

export default function WhyChooseSection() {
  return (
    <section id="why" className="border-t border-white/10 bg-[#07111f]">
      <div className="container py-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="section-heading mx-auto max-w-4xl space-y-4 text-center"
        >
          <p className="section-title">Почему выбирают нас</p>
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Проверенная поддержка для курьерских служб и курьерских партнеров
          </h2>
        </motion.div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55, ease: 'easeOut', delay: 0.1 + index * 0.05 }}
              className="card-surface p-8"
            >
              <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
              <p className="mt-4 text-base leading-7 text-slate-300">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
