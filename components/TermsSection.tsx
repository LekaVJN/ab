'use client';

import { motion } from 'framer-motion';

const terms = [
  {
    title: 'Понятный договор',
    description: 'Согласуем условия заранее и фиксируем их в договоре без лишних формулировок.',
  },
  {
    title: 'Прозрачные расчеты',
    description: 'Понятно, за что вы платите, какие есть сроки и как считается парк.',
  },
  {
    title: 'Плановое обслуживание',
    description: 'ТО проводим регулярно, чтобы техника оставалась в рабочем состоянии без авралов.',
  },
  {
    title: 'Срочная связь',
    description: 'По срочным вопросам можно быстро связаться по телефону, даже если сервисные работы идут только в будни.',
  },
];

const steps = [
  {
    number: '1',
    title: 'Заключаем договор с партнером',
    description: 'Согласуем условия, фиксируем порядок работы и запускаем процесс без сложной подготовки.',
  },
  {
    number: '2',
    title: 'Партнер направляет курьеров',
    description: 'Получаем от вас список или поток курьеров, которым нужна техника в конкретном городе.',
  },
  {
    number: '3',
    title: 'Выдаем технику',
    description: 'Передаем велосипеды курьерам, объясняем базовые правила и фиксируем выдачу.',
  },
  {
    number: '4',
    title: 'Обслуживаем и меняем при необходимости',
    description: 'Дальше берем на себя плановое ТО, ремонт и замену техники, если это требуется.',
  },
];

export default function TermsSection() {
  return (
    <section id="terms" className="border-t border-slate-200 bg-[#f3f5f7] text-slate-950">
      <div className="container py-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="section-heading mx-auto max-w-4xl space-y-4 text-center"
        >
          <p className="section-title">Как мы работаем</p>
          <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
            Простой и понятный процесс работы
          </h2>
          <p className="max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
            Без сложной схемы: договор, выдача техники курьерам, плановое обслуживание и быстрая связь по рабочим вопросам.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
          className="mt-12 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]"
        >
          <div className="grid gap-6">
            {terms.map((term, index) => (
              <motion.div
                key={term.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.55, ease: 'easeOut', delay: 0.1 + index * 0.05 }}
                className="rounded-[28px] border border-slate-200 bg-white/95 p-8 shadow-soft"
              >
                <h3 className="text-2xl font-semibold text-slate-950">{term.title}</h3>
                <p className="mt-4 text-base leading-8 text-slate-600">{term.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="rounded-[28px] border border-slate-200 bg-white/95 p-8 shadow-soft">
            <p className="section-title">Порядок работы</p>
            <h3 className="mt-4 text-2xl font-semibold text-slate-950">От заявки до работающего парка</h3>
            <div className="mt-8 space-y-4">
              {steps.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.55, ease: 'easeOut', delay: 0.12 + index * 0.05 }}
                  className="rounded-[28px] border border-slate-200 bg-slate-50 p-5"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#58bcbf]/15 text-[#0f1d34] font-semibold">
                      {step.number}
                    </div>
                    <p className="text-lg font-semibold text-slate-950">{step.title}</p>
                  </div>
                  <p className="mt-3 text-slate-600">{step.description}</p>
                </motion.div>
              ))}
            </div>
            <p className="mt-8 text-sm leading-7 text-slate-600">
              Сервисные работы планируем в будни, а по срочным вопросам можно быстро связаться по телефону.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
