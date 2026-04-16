const cities = ['Кемерово', 'Омск', 'Томск', 'Новосибирск', 'Барнаул', 'Красноярск'];

function GeographySection() {
  return (
    <section className="section" id="geography">
      <div className="section-header">
        <p className="section-label">География присутствия</p>
        <h2>Региональное покрытие ключевых центров Сибири</h2>
      </div>
      <div className="city-grid">
        {cities.map((city) => (
          <article key={city} className="city-card">
            <span className="city-icon">•</span>
            <h3>{city}</h3>
          </article>
        ))}
      </div>
    </section>
  );
}

export default GeographySection;
