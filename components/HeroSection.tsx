'use client';

import { motion } from 'framer-motion';
import HeroBackground from './HeroBackground';

export default function HeroSection() {
  return (
    <section id="hero" className="hero-area glow-section relative overflow-hidden">
      <div className="hero-background-stage">
        <HeroBackground />
      </div>
      <div className="container relative z-10 flex min-h-[640px] items-center py-20 lg:min-h-[760px] lg:py-28">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-[42rem] space-y-8"
        >
          <div className="space-y-6">
            <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Электровелосипеды для курьерских служб под ключ
            </h1>
            <p className="max-w-3xl text-lg leading-8 text-slate-200 sm:text-xl">
              Выдаём электровелосипеды для курьеров и берём на себя техобслуживание, сервис и ремонт, чтобы ваши курьеры
              быстрее выходили на линию, а ваш бизнес не тратил ресурсы на содержание собственного велопарка.
            </p>
          </div>

          <p className="border-t border-white/10 pt-6 text-sm leading-7 text-slate-300">
            Запуск от 1 дня при наличии велосипедов • 6 городов • работа по договору
          </p>

          <div className="flex flex-col items-start gap-4 pt-2 sm:gap-5">
            <a
              href="tel:+79237977812"
              className="inline-flex min-h-14 min-w-[18rem] items-center justify-center rounded-full bg-[#58bcbf] px-8 py-3 text-center text-xl font-semibold leading-none text-slate-950 shadow-soft hover:bg-[#48a9a9]"
            >
              Обсудить подключение
            </a>
            <p className="max-w-2xl text-[1.5rem] font-medium leading-[1.4] text-slate-100 sm:text-[1.8rem]">
              Вы работаете с курьерами. Мы отвечаем за велосипеды.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
