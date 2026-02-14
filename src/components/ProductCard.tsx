import { motion } from 'framer-motion';
import { Heart, ShoppingBag } from 'lucide-react';
import { useRef, useState } from 'react';

interface ProductProps {
  id: number;
  title: string;
  price: string;
  image: string;
  tags: string[];
  isNew?: boolean;
}

const ProductCard = ({ product }: { product: ProductProps }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) / 25;
    const y = (e.clientY - top - height / 2) / 25;
    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className="group relative bg-white p-2"
    >
      {/* Sticker - New Arrival */}
      {product.isNew && (
        <div className="absolute -top-3 -right-3 z-20 w-16 h-16 bg-accent rounded-full flex items-center justify-center text-white text-[10px] font-bold uppercase tracking-widest shadow-md rotate-12">
           New!
        </div>
      )}

      {/* Image Container */}
      <div className="relative aspect-[3/4] overflow-hidden border-2 border-gray-900 rounded-[1rem] bg-gray-100 mb-4 bg-clip-padding">
        <img 
          src={product.image} 
          alt={product.title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
        />
        
        {/* Wishlist Button - Top Right */}
        <motion.button 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="absolute top-3 right-3 p-3 bg-white border-2 border-gray-900 rounded-full text-gray-900 hover:bg-primary transition-colors z-10"
        >
            <Heart size={18} />
        </motion.button>

        {/* Tags */}
        <div className="absolute top-4 left-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
            {product.tags.map(tag => (
                <span key={tag} className="px-3 py-1 bg-white border border-gray-900 rounded-lg text-[10px] font-bold text-gray-900 uppercase tracking-wider w-fit shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                    {tag}
                </span>
            ))}
        </div>
        
        {/* Quick Add Overlay */}
        <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out">
            <button className="w-full py-3 bg-gray-900 text-white rounded-lg font-bold text-sm flex items-center justify-center gap-2 hover:bg-gray-800 transition-colors border-2 border-transparent">
                <ShoppingBag size={16} />
                Add to Cart
            </button>
        </div>
      </div>

      {/* Info */}
      <div className="px-1">
        <div className="flex justify-between items-start mb-2">
            <h3 className="font-serif font-bold text-xl text-gray-900 leading-tight">
            {product.title}
            </h3>
        </div>
        <div className="flex justify-between items-center">
             <p className="text-gray-500 text-xs font-bold uppercase tracking-wider">Vintage Grade A</p>
             <span className="font-sans font-black text-lg text-gray-900 bg-secondary/30 px-2 rounded-md">{product.price}</span>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
