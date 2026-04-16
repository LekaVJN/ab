function RequisitesSection() {
  return (
    <section className="section section-alt" id="requisites">
      <div className="section-header">
        <p className="section-label">Реквизиты</p>
        <h2>Деловой формат взаимодействия</h2>
      </div>
      <div className="requisites-card">
        <div>
          <p className="requisites-label">Полное наименование</p>
          <p>Индивидуальный предприниматель Вьюнов Андрей Валерьевич</p>
        </div>
        <div>
          <p className="requisites-label">ИНН / ОГРН</p>
          <p>421218017590 / 326420500046345</p>
        </div>
        <div>
          <p className="requisites-label">Банк</p>
          <p>ООО «Банк Точка»</p>
        </div>
        <div>
          <p className="requisites-label">Р/с</p>
          <p>40802810720000966365</p>
        </div>
        <div>
          <p className="requisites-label">К/с</p>
          <p>30101810745374525104</p>
        </div>
        <div>
          <p className="requisites-label">БИК</p>
          <p>044525104</p>
        </div>
      </div>
    </section>
  );
}

export default RequisitesSection;
