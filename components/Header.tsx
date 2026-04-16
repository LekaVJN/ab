'use client';

import { useState } from 'react';
import { Mail, Menu, Phone, X } from 'lucide-react';

const links = [
  { label: 'О компании', href: '#company' },
  { label: 'География', href: '#geography' },
  { label: 'Почему мы', href: '#why' },
  { label: 'Тарифы', href: '#pricing' },
  { label: 'Как работаем', href: '#terms' },
  { label: 'Контакты', href: '#contact' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#101922]/92 backdrop-blur-xl">
      <div className="container flex items-center justify-between gap-6 py-4 lg:py-5">
        <a href="#hero" className="flex items-center gap-3 text-white">
          <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-gradient-to-br from-[#14202b] to-[#233344] text-lg font-semibold text-[#8de1db] shadow-soft">
            ВА
          </div>
          <div>
            <p className="text-sm font-semibold">ИП Вьюнов А.В.</p>
            <p className="text-xs text-slate-400">электровелосипеды для курьерских партнеров</p>
          </div>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="text-sm font-medium text-slate-300 transition hover:text-white">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a href="tel:+79237977812" className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white transition hover:bg-white/10 md:inline-flex">
            <Phone size={16} />
            +7 923 797 7812
          </a>
          <button
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white transition hover:bg-white/10 md:hidden"
            aria-label="Открыть меню"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-white/10 bg-[#101922] px-6 py-5 md:hidden">
          <div className="flex flex-col gap-4">
            {links.map((link) => (
              <a key={link.href} href={link.href} className="text-base font-medium text-slate-200" onClick={() => setOpen(false)}>
                {link.label}
              </a>
            ))}
            <a href="tel:+79237977812" className="inline-flex items-center gap-2 rounded-2xl bg-[#162533] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#1d2e3d]">
              <Phone size={16} />
              Позвонить
            </a>
            <a href="mailto:Vyunov2@mail.ru" className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
              <Mail size={16} />
              Письмо
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
