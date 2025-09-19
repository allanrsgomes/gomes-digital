import { Navbar } from './components/Navbar';
import { HeroSection } from './pages/HeroSection';
import { AboutUsSection } from './pages/AboutUsSection';
import { ServicesSection } from './pages/ServicesSection';
import { TestimonialsSection } from './pages/TestimonialsSection';
import { PortfolioSection } from './pages/PortfolioSection';
import { ContactSection } from './pages/ContactSection';
import { ToolsSection } from './pages/ToolsSection';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="bg-gray-900">
      <Navbar />
      <main>
        <HeroSection />
        <AboutUsSection />
        <ServicesSection />
        <TestimonialsSection />
        <PortfolioSection />
        <ContactSection />
        <ToolsSection />
      </main>
      <Footer />
    </div>
  )
}

export default App