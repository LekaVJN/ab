'use client';

import { motion } from 'framer-motion';

const features = [
  {
    title: 'Оперативная связь',
    description: 'На связи по телефону и в мессенджерах с менеджерами и курьерами, когда нужно быстро решить вопрос.',
  },
  {
    title: 'Плановое ТО каждые 2 недели',
    description: 'Регулярно обслуживаем технику, чтобы она оставалась в рабочем состоянии и не копила проблемы.',
  },
  {
    title: 'Ремонт и выездная помощь',
    description: 'Если ситуация сложная и нужна помощь с техникой, можем забрать велосипед и решить вопрос на своей стороне.',
  },
  {
    title: 'Замена, когда она нужна',
    description: 'Если ремонт затягивается, выдаем замену, чтобы курьер не выпадал из работы.',
  },
];

export default function WhyChooseSection() {
  return (
    <section id="why" className="border-t border-white/10 bg-[#0f1821]">
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
            Поддержка, которую удобно встроить в работу партнера
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
