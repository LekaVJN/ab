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
          className="mx-auto max-w-4xl rounded-[32px] border border-slate-200 bg-white/95 p-10 shadow-soft backdrop-blur-xl sm:p-12"
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
            <div className="relative mx-auto w-full max-w-[32rem] pt-4">
              <div className="absolute inset-x-[12%] bottom-[14%] top-[22%] rounded-full bg-[#58bcbf]/14 blur-3xl" aria-hidden="true" />
              <div className="absolute inset-x-[28%] bottom-[8%] top-[34%] rounded-full bg-[#d0b06a]/12 blur-3xl" aria-hidden="true" />
              <div className="relative mx-auto aspect-square w-full max-w-[30rem]">
                <img
                  src="hero-bike.png.png"
                  alt="Электровелосипед для курьерской службы"
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-contain"
                  style={{
                    WebkitMaskImage: 'radial-gradient(circle at center, black 60%, rgba(0, 0, 0, 0.88) 76%, transparent 100%)',
                    maskImage: 'radial-gradient(circle at center, black 60%, rgba(0, 0, 0, 0.88) 76%, transparent 100%)',
                  }}
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
