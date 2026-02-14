import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Import images directly
import ad1 from '../assets/ad_1.jpg';
import ad2 from '../assets/ad_2.png';
import ad3 from '../assets/ad_3.jpg';
import ad4 from '../assets/ad_4.png';

const ads = [
  { id: 1, src: ad1, alt: "New Collection" },
  { id: 2, src: ad2, alt: "Special Offer" },
  { id: 3, src: ad3, alt: "Limited Edition" },
  { id: 4, src: ad4, alt: "Coming Soon" },
];

const AdCarousel = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % ads.length);
    }, 4000); // Slightly faster for a "lively" feel? Or slower for premium? 4s is good.
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full max-w-lg mx-auto my-8 relative group">
        
      {/* Main Carousel Container */}
      <div className="relative overflow-hidden aspect-[16/9] md:aspect-[2/1] rounded-2xl">
        <AnimatePresence mode="wait">
          <motion.img
            key={index}
            src={ads[index].src}
            alt={ads[index].alt}
            initial={{ opacity: 0, scale: 1.02 }} // Subtle zoom for "premium/cute" feel
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }} // Smooth transition
            className="absolute inset-0 w-full h-full object-cover"
          />
        </AnimatePresence>
      </div>

      {/* Pagination Dots (Outside & Below) - Simple & Cute */}
      <div className="flex justify-center gap-2 mt-4">
        {ads.map((_, i) => (
          <div
            key={i}
            className={`w-2 h-2 rounded-full transition-all duration-500 ${
              i === index ? 'bg-pink-300 w-4' : 'bg-gray-200'
            }`} // Logic: Active dot is pink and slightly wider (pill shape) for cuteness
          />
        ))}
      </div>

    </div>
  );
};

export default AdCarousel;
