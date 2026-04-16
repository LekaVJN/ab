import SectionTitle from './SectionTitle.jsx';

function CompanySection() {
  return (
    <section className="section section-alt" id="about">
      <div className="content-grid">
        <div className="text-block">
          <SectionTitle
            label="О компании"
            title="Официальный партнер в сфере городской логистики"
            subtitle="ИП Вьюнов А.В. работает для бизнеса в Кузбассе с понятным и официальным форматом взаимодействия."
          />
          <p>
            Индивидуальный предприниматель Вьюнов Андрей Валерьевич предоставляет деловое сопровождение бизнес-процессов
            на территории Кузбасса с четким и понятным форматом взаимодействия.
          </p>
          <p>
            Работа ведется из Кемерово по стандартам B2B, с акцентом на прозрачность, стабильность и удобную коммуникацию для
            клиентов в регионе.
          </p>
        </div>
        <div className="info-block">
          <div>
            <p className="info-label">Адрес деятельности</p>
            <p>Кемеровская обл. – Кузбасс, г. Кемерово, ул. Дзержинского, д. 4А</p>
          </div>
          <div>
            <p className="info-label">Регистрация</p>
            <p>650010, Кемеровская обл. – Кузбасс, г. Кемерово, ул. Профсоюзная, д. 83А, кв. 2</p>
          </div>
          <div>
            <p className="info-label">Формат</p>
            <p>Официальный индивидуальный предприниматель для прозрачного и делового взаимодействия.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CompanySection;
