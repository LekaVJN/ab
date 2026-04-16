const advantages = [
  { title: 'Надежное партнерство', description: 'Ясные условия, честная деловая коммуникация и стабильный формат работы.' },
  { title: 'Прозрачные условия', description: 'Официальное оформление и открытая документация для корпоративного взаимодействия.' },
  { title: 'Региональное покрытие', description: 'Присутствие в ключевых городах Сибири обеспечивает доступность решений.' },
  { title: 'Оперативная связь', description: 'Быстрая реакция на запросы и удобная коммуникация по телефону и почте.' },
  { title: 'Долгосрочный подход', description: 'Стабильное сотрудничество без резких изменений и неожиданных условий.' },
];

function AdvantagesSection() {
  return (
    <section className="section section-alt" id="advantages">
      <div className="section-header">
        <p className="section-label">Преимущества сотрудничества</p>
        <h2>Партнер, который работает по понятным бизнес-стандартам</h2>
      </div>
      <div className="advantages-grid">
        {advantages.map((item) => (
          <article key={item.title} className="feature-card">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default AdvantagesSection;
