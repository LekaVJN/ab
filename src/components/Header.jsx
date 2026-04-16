const navItems = [
  { label: 'О компании', href: '#about' },
  { label: 'География', href: '#geography' },
  { label: 'Преимущества', href: '#advantages' },
  { label: 'Контакты', href: '#contacts' },
];

function Header() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <div className="brand">
          <div className="brand-mark">ВА</div>
          <div>
            <p className="brand-company">ИП Вьюнов А.В.</p>
            <p className="brand-subtitle">Региональная бизнес-поддержка</p>
          </div>
        </div>
        <nav className="top-nav" aria-label="Основное меню">
          <ul>
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
