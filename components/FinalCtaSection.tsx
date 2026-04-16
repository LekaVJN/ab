'use client';

import { motion } from 'framer-motion';

export default function FinalCtaSection() {
  return (
    <section className="border-t border-slate-200 bg-slate-100 text-slate-950">
      <div className="container py-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="mx-auto max-w-3xl rounded-[32px] border border-slate-200 bg-white/95 p-10 shadow-soft backdrop-blur-xl sm:p-12"
        >
          <div className="space-y-8 text-center">
            <p className="inline-flex rounded-full bg-[#e7f8f8] px-4 py-1 text-sm font-semibold uppercase tracking-[0.24em] text-[#158889]">
              Готовы к переменам
            </p>
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
                Обсудим формат сотрудничества и удобные условия аренды для вашего бизнеса.
              </h2>
              <p className="mx-auto max-w-2xl text-base leading-7 text-slate-600">
                Легкая, аккуратная и премиальная презентация условий, без лишних акцентов и визуального давления.
              </p>
            </div>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-[#58bcbf] px-8 py-4 text-sm font-semibold text-slate-950 shadow-soft transition hover:bg-[#48a9a9]"
            >
              Связаться
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
