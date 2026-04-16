'use client';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0d141c] text-slate-400">
      <div className="container py-10">
        <div className="grid gap-8 md:grid-cols-[1.5fr_1fr] lg:grid-cols-[1.6fr_1fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.22em] text-[#7fd6d5]">ИП Вьюнов А.В.</p>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-400">
              Электровелосипеды для курьерских партнеров: выдача, обслуживание и замена в нескольких городах Сибири.
            </p>
          </div>
          <div className="grid gap-3 text-sm leading-7 text-slate-400">
            <p>
              <span className="font-semibold text-white">ИНН:</span> 421218017590
            </p>
            <p>
              <span className="font-semibold text-white">ОГРН:</span> 326420500046345
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
