'use client';

import { motion } from 'framer-motion';

export default function CompanySection() {
  return (
    <section id="company" className="border-t border-white/10 bg-[#07111f]">
      <div className="container py-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="mx-auto max-w-5xl"
        >
          <div className="section-heading mx-auto max-w-4xl space-y-4 text-center">
            <p className="section-title">О компании</p>
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Комплексный шеринг электровелосипедов для курьерских компаний
            </h2>
            <p className="max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
              ИП Вьюнов А.В. предлагает полный сервис аренды для бизнеса: парк электровелосипедов, гибкую выдачу для курьеров,
              сервисное сопровождение и оперативную замену техники.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {[
              {
                title: 'Комплексный парк',
                text: 'Готовые электровелосипеды для ежедневной работы курьерских команд.',
              },
              {
                title: 'Гибкий шеринг',
                text: 'Адаптивные условия аренды под задачи курьерских компаний.',
              },
              {
                title: 'Лёгкая выдача',
                text: 'Оперативная выдача техники курьерам в удобном режиме.',
              },
              {
                title: 'Сервисное сопровождение',
                text: 'Поддержка и техобслуживание на каждом этапе эксплуатации.',
              },
              {
                title: 'Гарантийное обслуживание',
                text: 'Гарантии на технику и замена оборудования в срок.',
              },
              {
                title: 'Быстрая замена техники',
                text: 'Замена велосипеда за считанные часы при необходимости.',
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.55, ease: 'easeOut', delay: 0.1 + index * 0.05 }}
                className="card-surface p-8"
              >
                <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-4 text-slate-300">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
