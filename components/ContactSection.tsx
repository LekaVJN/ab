'use client';

import { motion } from 'framer-motion';

export default function ContactSection() {
  return (
    <section id="contact" className="border-t border-white/10 bg-[#101820]">
      <div className="container py-20">
        <div className="mx-auto grid items-start gap-10 lg:grid-cols-[1.3fr_0.8fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="space-y-8"
          >
            <p className="section-title">Свяжитесь с нами</p>
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Обсудим парк, выдачу и условия работы
            </h2>
            <p className="max-w-2xl text-base leading-8 text-slate-300">
              Расскажите, сколько курьеров у вас в работе и в каком городе нужен парк. Подскажем по выдаче, обслуживанию и
              удобному формату взаимодействия.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  label: 'Контактное лицо',
                  value: 'Вьюнов Андрей Валерьевич',
                  type: 'text',
                },
                {
                  label: 'Телефон',
                  value: '+7 923 797 7812',
                  type: 'tel',
                  href: 'tel:+79237977812',
                },
                {
                  label: 'Email',
                  value: 'Vyunov2@mail.ru',
                  type: 'email',
                  href: 'mailto:Vyunov2@mail.ru',
                },
                {
                  label: 'График связи',
                  value: 'Будни, срочные вопросы - по телефону',
                  type: 'text',
                },
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.55, ease: 'easeOut', delay: 0.1 + index * 0.05 }}
                  className="card-surface p-6"
                >
                  <p className="text-sm uppercase tracking-[0.24em] text-[#7fd6d5]">{item.label}</p>
                  {item.type === 'text' ? (
                    <p className="mt-4 text-lg font-semibold text-white">{item.value}</p>
                  ) : (
                    <a href={item.href} className="mt-4 block text-lg font-semibold text-white">
                      {item.value}
                    </a>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
            className="rounded-[28px] border border-slate-200 bg-[#0f1720]/88 p-8 shadow-soft"
          >
            <p className="section-title">Реквизиты</p>
            <div className="mt-8 space-y-5 text-sm leading-7 text-slate-300">
              <div>
                <p className="font-semibold text-white">Полное наименование</p>
                <p>Индивидуальный предприниматель Вьюнов Андрей Валерьевич</p>
              </div>
              <div>
                <p className="font-semibold text-white">Сокращенно</p>
                <p>ИП Вьюнов А.В.</p>
              </div>
              <div>
                <p className="font-semibold text-white">Адрес регистрации</p>
                <p>650010, Кемеровская обл. - Кузбасс, г. Кемерово, ул. Профсоюзная, д. 83А, кв. 2</p>
              </div>
              <div>
                <p className="font-semibold text-white">ИНН / ОГРН</p>
                <p>421218017590 / 326420500046345</p>
              </div>
              <div>
                <p className="font-semibold text-white">Банк</p>
                <p>ООО "Банк Точка"</p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <p className="font-semibold text-white">Расчетный счет</p>
                  <p>40802810720000966365</p>
                </div>
                <div>
                  <p className="font-semibold text-white">Корр. счет</p>
                  <p>30101810745374525104</p>
                </div>
              </div>
              <div>
                <p className="font-semibold text-white">БИК</p>
                <p>044525104</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
