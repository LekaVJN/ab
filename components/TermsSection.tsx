'use client';

import { motion } from 'framer-motion';

const terms = [
  {
    title: 'Удобные расчеты',
    description: 'Прозрачная система платежей и отчетности для полного контроля расходов.',
  },
  {
    title: 'Депозитная система',
    description: 'Работа по месячной предоплате, которая помогает планировать бюджет и сохранять стабильность парка.',
  },
  {
    title: 'Долгосрочные гарантии',
    description: 'Защита интересов партнеров и стабильность поставок техники в необходимых объемах.',
  },
  {
    title: 'Низкие издержки',
    description: 'Минимальные расходы на обслуживание и комплектующие при высоком качестве сервиса.',
  },
];

const steps = [
  {
    number: '1',
    title: 'Заключаем договор',
    description: 'Оформляем официальное соглашение с понятными условиями и сроками.',
  },
  {
    number: '2',
    title: 'Выставляем счёт на депозит',
    description: 'Подготавливаем прозрачный расчёт и выставляем счет на предварительный взнос.',
  },
  {
    number: '3',
    title: 'Получаем запрос на потребность',
    description: 'Вы принимаете решение по количеству электровелосипедов для курьеров.',
  },
  {
    number: '4',
    title: 'Назначаем дату выдачи',
    description: 'Согласуем дату и обеспечиваем своевременную передачу техники.',
  },
];

export default function TermsSection() {
  return (
    <section id="terms" className="border-t border-slate-200 bg-slate-100/95 text-slate-950">
      <div className="container py-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="section-heading mx-auto max-w-4xl space-y-4 text-center"
        >
          <p className="section-title">Условия сотрудничества</p>
          <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
            Прозрачные условия сотрудничества
          </h2>
          <p className="max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
            Деловой формат работы с понятными расчетами, четким порядком и прозрачной цепочкой взаимодействия.
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
            <p className="section-title">Как мы работаем</p>
            <h3 className="mt-4 text-2xl font-semibold text-slate-950">Понятный порядок взаимодействия</h3>
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
              Прозрачные и открытые расчёты, понятный порядок взаимодействия и деловой формат сотрудничества.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
