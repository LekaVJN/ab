function SectionTitle({ label, title, subtitle }) {
  return (
    <div className="section-title">
      <p className="section-label">{label}</p>
      <h2>{title}</h2>
      {subtitle && <p className="section-description">{subtitle}</p>}
    </div>
  );
}

export default SectionTitle;
