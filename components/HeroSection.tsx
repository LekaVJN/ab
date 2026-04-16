'use client';

import { motion } from 'framer-motion';
import HeroBackground from './HeroBackground';

export default function HeroSection() {
  return (
    <section id="hero" className="hero-area glow-section relative overflow-hidden">
      <div className="absolute inset-0 lg:hidden">
        <HeroBackground />
      </div>
      <div className="container relative z-10 py-20 lg:py-24">
        <div className="grid gap-16 lg:grid-cols-[1.05fr_0.95fr] items-center">
          <div className="hidden lg:flex items-center justify-center">
            <HeroBackground />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="space-y-8 max-w-xl"
          >
            <p className="inline-flex rounded-full border border-[#8de1db]/20 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-[#8de1db] shadow-soft">
              Премиальный шеринг электровелосипедов
            </p>

            <div className="space-y-6">
              <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Комплексное решение для курьерских служб: техника, обслуживание и логистика
              </h1>
              <p className="text-lg leading-8 text-slate-200 sm:text-xl">
                Индивидуальный парк электровелосипедов, сервис 7 дней в неделю и прозрачные условия для вашего бизнеса.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full bg-[#58bcbf] px-6 py-3 text-sm font-semibold text-slate-950 shadow-soft hover:bg-[#48a9a9]"
              >
                Оставить заявку
              </a>
              <a
                href="mailto:Vyunov2@mail.ru"
                className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10"
              >
                Написать нам
              </a>
            </div>

            <p className="text-sm leading-7 text-slate-300">
              Поддержка курьерских служб 7 дней в неделю, выездной сервис и экспресс-замена техники.
            </p>

            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-[28px] border border-white/10 bg-white/5 p-5 text-center">
                <p className="text-sm uppercase tracking-[0.24em] text-[#7fd6d5]">Экономия</p>
                <p className="mt-4 text-2xl font-semibold text-white">до 40%</p>
              </div>
              <div className="rounded-[28px] border border-white/10 bg-white/5 p-5 text-center">
                <p className="text-sm uppercase tracking-[0.24em] text-[#7fd6d5]">Города</p>
                <p className="mt-4 text-2xl font-semibold text-white">6 ключевых регионов</p>
              </div>
              <div className="rounded-[28px] border border-white/10 bg-white/5 p-5 text-center">
                <p className="text-sm uppercase tracking-[0.24em] text-[#7fd6d5]">Сервис</p>
                <p className="mt-4 text-2xl font-semibold text-white">7 дней в неделю</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
