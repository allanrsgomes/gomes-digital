import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutUsSection } from './components/AboutUsSection';
import { ServicesSection } from './components/ServicesSection';
import { PortfolioSection } from './components/PortfolioSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ToolsSection } from './components/ToolsSection';
import { TestimonialsSection } from './components/TestimonialsSection';

function App() {
  return (
    <div className="bg-gray-900">
      <Navbar />
      <main>
        <HeroSection />
        <AboutUsSection />
        <ServicesSection />
        <ContactSection />
        <PortfolioSection />
        <TestimonialsSection />
        <ToolsSection />
      </main>
      <Footer />
    </div>
  )
}

export default App