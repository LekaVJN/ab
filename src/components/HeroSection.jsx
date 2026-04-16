function HeroSection() {
  return (
    <section className="hero" id="hero">
      <div className="hero-content">
        <span className="eyebrow">Партнерство для бизнеса</span>
        <h1>Надежный партнер для бизнеса в сфере городской логистики и операционного сопровождения</h1>
        <p className="hero-text">
          Официальный формат работы, прозрачные условия и региональное присутствие в ключевых городах Сибири.
        </p>
        <div className="hero-actions">
          <a className="button button-primary" href="#contacts">Обсудить сотрудничество</a>
          <a className="button button-secondary" href="mailto:Vyunov2@mail.ru">Связаться</a>
        </div>
      </div>
      <div className="hero-visual" aria-hidden="true">
        <div className="hero-card">
          <div className="hero-graph" />
          <div className="hero-info">
            <span>Логистика</span>
            <span>Операционное сопровождение</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
