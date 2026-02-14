import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import Marquee from './components/Marquee';

function App() {
  return (
    <div className="min-h-screen bg-cream text-text font-sans selection:bg-primary selection:text-white overflow-x-hidden relative">
      <CustomCursor />
      <div className="bg-noise" />
      <Navbar />
      <main className="pt-24 pb-16 px-4 md:px-8 max-w-7xl mx-auto space-y-24">
        <Hero />
        
        {/* Decorative Marquee */}
        <div className="-mx-4 md:-mx-8 overflow-hidden py-4 bg-accent text-white -rotate-1 border-y-2 border-white/20">
             <Marquee text="kawaii • vintage • tokyo • 2026 • sustainable • fashion •" speed={15} className="font-heading font-bold text-4xl tracking-widest uppercase opacity-90" />
        </div>
        
        <ProductGrid />
      </main>
      <Footer />
    </div>
  );
}

export default App;
