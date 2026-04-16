'use client';

import { motion } from 'framer-motion';

export default function CompanySection() {
  return (
    <section id="company" className="border-t border-white/10 bg-[#101922]">
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
              Понятный формат работы для курьерских партнеров
            </h2>
            <p className="max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
              Работаем с партнерскими компаниями по простой схеме: договор, выдача техники курьерам, плановое обслуживание,
              ремонт и замена без лишней бюрократии.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {[
              {
                title: 'Договор с партнером',
                text: 'Работаем официально, с понятными условиями и фиксированным порядком взаимодействия.',
              },
              {
                title: 'Выдача курьерам',
                text: 'Курьеры приходят от партнера, мы выдаем подготовленные велосипеды и фиксируем выдачу.',
              },
              {
                title: 'Плановое ТО',
                text: 'Бесплатное техническое обслуживание примерно раз в две недели.',
              },
              {
                title: 'Ремонт без лишней паузы',
                text: 'Если проблема с техникой не связана с действиями курьера, помогаем разобраться и забираем велосипед при необходимости.',
              },
              {
                title: 'Быстрая замена',
                text: 'Когда ремонт занимает время, выдаем замену, чтобы работа не останавливалась.',
              },
              {
                title: 'Связь по делу',
                text: 'На связи с менеджерами и курьерами по телефону и в мессенджерах.',
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
