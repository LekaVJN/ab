function ContactsSection() {
  return (
    <section className="section" id="contacts">
      <div className="section-header">
        <p className="section-label">Контакты</p>
        <h2>Готовы ответить на деловой запрос</h2>
      </div>
      <div className="contact-grid">
        <div className="contact-card">
          <p className="contact-label">Контактное лицо</p>
          <p>Индивидуальный предприниматель Вьюнов Андрей Валерьевич</p>
        </div>
        <div className="contact-card">
          <p className="contact-label">Телефон</p>
          <a href="tel:+79237977812">+7 923 797 7812</a>
        </div>
        <div className="contact-card">
          <p className="contact-label">Email</p>
          <a href="mailto:Vyunov2@mail.ru">Vyunov2@mail.ru</a>
        </div>
        <div className="contact-card">
          <p className="contact-label">Адрес деятельности</p>
          <p>Кемеровская обл. – Кузбасс, г. Кемерово, ул. Дзержинского, д. 4А</p>
        </div>
        <div className="contact-card contact-card-cta">
          <p className="contact-label">Свяжитесь прямо сейчас</p>
          <a className="button button-primary" href="tel:+79237977812">Позвонить</a>
        </div>
      </div>
    </section>
  );
}

export default ContactsSection;
