import { motion } from 'framer-motion';
import { ShoppingBag, Heart, Search, Menu } from 'lucide-react';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100, damping: 20 }}
      className="fixed top-4 left-4 right-4 md:left-8 md:right-8 z-50 bg-white/70 backdrop-blur-lg border border-white/50 rounded-full shadow-lg shadow-primary/10 px-6 py-3 flex items-center justify-between"
    >
      {/* Logo */}
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-full bg-gray-900 flex items-center justify-center text-white font-serif font-bold text-lg border-2 border-transparent group-hover:border-primary transition-all">
          K
        </div>
        <span className="font-serif font-black text-xl tracking-tight text-gray-900">
          Kawaii<span className="text-primary italic">Vintage</span>
        </span>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-8 font-medium text-gray-600">
        {['New Arrivals', 'Dresses', 'Tops', 'Bottoms', 'Accessories'].map((item) => (
          <a
            key={item}
            href="#"
            className="hover:text-accent transition-colors relative group"
          >
            {item}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent rounded-full transition-all group-hover:w-full" />
          </a>
        ))}
      </div>

      {/* Icons */}
      <div className="flex items-center gap-4">
        <button className="p-2 hover:bg-white/50 rounded-full transition-colors text-gray-600 hover:text-accent">
          <Search size={20} />
        </button>
        <button className="p-2 hover:bg-white/50 rounded-full transition-colors text-gray-600 hover:text-accent">
          <Heart size={20} />
        </button>
        <button className="relative p-2 hover:bg-white/50 rounded-full transition-colors text-gray-600 hover:text-accent">
          <ShoppingBag size={20} />
          <span className="absolute top-0 right-0 w-4 h-4 bg-accent text-white text-[10px] font-bold flex items-center justify-center rounded-full">
            2
          </span>
        </button>
        <button 
          className="md:hidden p-2 hover:bg-white/50 rounded-full transition-colors text-gray-600"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Menu size={20} />
        </button>
      </div>
      
      {/* Mobile Menu (simplified) */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full mt-2 left-0 right-0 bg-white/90 backdrop-blur-xl border border-white/50 rounded-3xl p-6 shadow-xl flex flex-col gap-4 md:hidden"
        >
           {['New Arrivals', 'Dresses', 'Tops', 'Bottoms', 'Accessories'].map((item) => (
            <a key={item} href="#" className="text-lg font-medium text-gray-700 hover:text-accent">
              {item}
            </a>
          ))}
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
