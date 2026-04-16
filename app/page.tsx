import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import CompanySection from '../components/CompanySection';
import GeographySection from '../components/GeographySection';
import WhyChooseSection from '../components/WhyChooseSection';
import PricingSection from '../components/PricingSection';
import TermsSection from '../components/TermsSection';
import ContactSection from '../components/ContactSection';
import FinalCtaSection from '../components/FinalCtaSection';
import Footer from '../components/Footer';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#0f1720] text-white">
      <Header />
      <main>
        <HeroSection />
        <CompanySection />
        <GeographySection />
        <WhyChooseSection />
        <PricingSection />
        <TermsSection />
        <ContactSection />
        <FinalCtaSection />
      </main>
      <Footer />
    </div>
  );
}
