import Header from './components/Header.jsx';
import HeroSection from './components/HeroSection.jsx';
import CompanySection from './components/CompanySection.jsx';
import GeographySection from './components/GeographySection.jsx';
import AdvantagesSection from './components/AdvantagesSection.jsx';
import CollaborationSection from './components/CollaborationSection.jsx';
import RequisitesSection from './components/RequisitesSection.jsx';
import ContactsSection from './components/ContactsSection.jsx';
import FinalCtaSection from './components/FinalCtaSection.jsx';

function App() {
  return (
    <div className="app-shell">
      <Header />
      <main>
        <HeroSection />
        <CompanySection />
        <GeographySection />
        <AdvantagesSection />
        <CollaborationSection />
        <RequisitesSection />
        <ContactsSection />
        <FinalCtaSection />
      </main>
    </div>
  );
}

export default App;
