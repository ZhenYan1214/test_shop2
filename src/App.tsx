import { useState } from 'react';
import { Menu, ShoppingBag, Search } from 'lucide-react';
import AdCarousel from './components/AdCarousel';
import ProductCard from './components/ProductCard';
import StaffSnap from './components/StaffSnap';
import FixedWidgets from './components/FixedWidgets';

// Local Images for reliability
import img1 from './assets/1.jpg';
import img2 from './assets/2.jpg';
import img3 from './assets/3.jpg';
import img6 from './assets/6.jpg';
import img8 from './assets/8.jpg';
import img10 from './assets/10.jpg';
import img11 from './assets/11.jpg';

// Main Hero Image
import heroImg from './assets/home.jpg'; 

const newArrivals = [
  { id: 1, title: "Layered patchwork T-shirt", price: "¥7,150", image: img1, isNew: true },
  { id: 2, title: "Front zip star print hoodie", price: "¥9,790", image: img2, isNew: true },
  { id: 3, title: "Cap with stone", price: "¥4,290", image: img3, isNew: true },
];

const rankingItems = [
    { id: 4, title: "Editor's bag", price: "¥9,350", image: img6 },
    { id: 5, title: "Fleece lined logo patchwork", price: "¥9,790", image: img8 },
    { id: 6, title: "Travel bag with shoulder strap", price: "¥9,790", image: img10 },
    { id: 7, title: "Heart button henley neck", price: "¥5,390", image: img11 },
];

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <FixedWidgets />
      
      {/* Navbar */}
      <nav className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="container-custom h-16 flex items-center justify-between">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 hover:bg-gray-50 rounded-full transition-colors">
            <Menu className="w-5 h-5 text-gray-600" />
          </button>
          
          <h1 className="text-xl tracking-[0.2em] font-serif font-bold text-center">WanChing</h1>
          
          <div className="flex items-center gap-2">
            <button className="p-2 hover:bg-gray-50 rounded-full transition-colors"><Search className="w-5 h-5 text-gray-600" /></button>
            <button className="p-2 hover:bg-gray-50 rounded-full transition-colors"><ShoppingBag className="w-5 h-5 text-gray-600" /></button>
          </div>
        </div>
      </nav>

      {/* Hero / Bloom Section */}
      <section className="container-custom py-12 text-center">
        <div className="w-full mb-8">
            <img src={heroImg} alt="Bloom Collection" className="w-full h-auto rounded-sm shadow-sm" />
        </div>
      </section>

      {/* New Arrival */}
      <section className="container-custom py-12">
        <h2 className="text-center text-2xl md:text-3xl text-red-400 font-serif uppercase tracking-widest mb-10">New Arrival</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-8">
            {newArrivals.map(item => (
                <ProductCard key={item.id} product={item} />
            ))}
        </div>
      </section>

      {/* Ad Carousel - Positioned in the middle - Minimal spacing */}
      <section className="py-4 my-4">
        <div className="container-custom">
             <AdCarousel />
        </div>
      </section>

      {/* Ranking */}
      <section className="container-custom py-16">
        <h2 className="text-center text-2xl md:text-3xl text-blue-500 font-serif uppercase tracking-widest mb-10">Ranking</h2>
        
        {/* Categories */}
        <div className="flex justify-center gap-6 mb-10 text-xs text-gray-400 uppercase tracking-widest overflow-x-auto no-scrollbar px-4">
            {['All', 'Tops', 'Bottoms', 'Dress', 'Outer', 'Goods'].map((cat, i) => (
                <button key={cat} className={`whitespace-nowrap hover:text-black transition-colors ${i === 0 ? 'text-blue-500 underline underline-offset-4' : ''}`}>
                    {cat}
                </button>
            ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-8">
            {rankingItems.map((item, index) => (
                <div key={item.id}>
                    <p className="text-blue-400 text-xs mb-2 font-serif italic">No.{index + 1}</p>
                    <ProductCard product={item} />
                </div>
            ))}
        </div>
      </section>

      {/* Staff Snap */}
      <StaffSnap />

      {/* Footer */}
      <footer className="bg-white mt-20 pb-12">
         {/* Breadcrumb line */}
         <div className="border-t border-gray-200">
             <div className="container-custom py-4 text-xs text-gray-500 font-serif">
                 <span>Home</span> <span className="mx-1">&gt;</span> <span>WanChing</span>
             </div>
         </div>
         <div className="border-t border-gray-200 mb-16"></div>

        <div className="container-custom text-center">
            <h2 className="text-4xl tracking-[0.2em] font-serif font-bold mb-6">WanChing</h2>
            <p className="text-xs text-gray-400 mb-12">WanChing Official Online Store</p>
            
            <div className="flex justify-center gap-8 text-[11px] text-gray-400 underline decoration-gray-300 underline-offset-4 tracking-wider mb-12 flex-wrap">
                <a href="#" className="hover:text-gray-600 transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-gray-600 transition-colors">Terms of Use</a>
                <a href="#" className="hover:text-gray-600 transition-colors">Legal</a>
                <a href="#" className="hover:text-gray-600 transition-colors">Company</a>
            </div>
            
            <p className="text-[10px] text-gray-300">Copyright © WanChing All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
