import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Star, Sparkles } from 'lucide-react';
import img2 from '../assets/2.jpg'; // Main hero image
import img5 from '../assets/5.jpeg'; // Secondary image

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const rotateVar = useTransform(scrollYProgress, [0, 1], [0, 360]);

  return (
    <section ref={ref} className="relative min-h-[85vh] flex items-center justify-center overflow-visible mx-auto pt-10">
      
      {/* Magazine Layout: Absolute Text Background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none select-none opacity-[0.03]">
          <h1 className="text-[20vw] font-serif font-black leading-none text-gray-900 tracking-tighter">
            KAWAII VINTAGE
          </h1>
      </div>

      {/* Main Content Grid */}
      <div className="relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Left: Text Content (Span 7) */}
        <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left relative">
           
           {/* Sticker */}
           <motion.div 
             animate={{ rotate: [0, 10, -10, 0] }}
             transition={{ duration: 5, repeat: Infinity }}
             className="absolute -top-12 -left-8 md:-left-16 text-accent hidden lg:block"
           >
              <Sparkles size={64} strokeWidth={1} fill="currentColor" className="opacity-50" />
           </motion.div>

           <motion.div
             initial={{ opacity: 0, x: -50 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.8 }}
             className="relative"
           >
              <span className="inline-block px-4 py-1 border border-gray-900 rounded-full font-sans text-xs font-bold uppercase tracking-widest mb-6 bg-white text-gray-900 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                Tokyo Pop Aesthetic
              </span>
              
              <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl font-medium leading-[0.85] text-gray-900 mb-8 tracking-tight">
                New <i className="font-serif italic font-light text-primary">Era</i> <br/>
                Of <span className="underline decoration-wavy decoration-accent decoration-2 underline-offset-8">Cute</span>.
              </h1>
              
              <p className="font-sans text-lg text-gray-600 mb-10 max-w-lg leading-relaxed">
                Curated vintage fashion that speaks to your soul.
                <span className="font-serif italic text-gray-500 block mt-2 text-xl">"Wear your story."</span>
              </p>

              <div className="flex gap-4">
                 <motion.button 
                    whileHover={{ scale: 1.05, boxShadow: "6px 6px 0px 0px rgba(0,0,0,1)" }}
                    whileTap={{ scale: 0.95, boxShadow: "0px 0px 0px 0px rgba(0,0,0,1)" }}
                    className="px-8 py-4 bg-accent text-white font-bold text-lg border-2 border-gray-900 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all"
                  >
                    Shop Collection
                  </motion.button>
              </div>
           </motion.div>
        </div>

        {/* Right: Image Collage (Span 5) */}
        <div className="lg:col-span-5 relative h-[500px] lg:h-[700px] w-full mt-12 lg:mt-0">
            {/* Image 1 - Main */}
            <motion.div 
               style={{ y: useTransform(scrollYProgress, [0, 1], [0, -50]) }}
               className="absolute top-10 left-10 right-10 bottom-20 bg-white p-2 border-2 border-gray-900 shadow-[8px_8px_0px_0px_rgba(255,209,220,1)] z-20"
            >
               <img src={img2} alt="Main Fashion" className="w-full h-full object-cover filter contrast-110" />
               
               {/* Overlay Text */}
               <div className="absolute -bottom-6 -right-6 bg-white border-2 border-gray-900 px-4 py-2 font-serif italic text-xl font-bold rotate-[-5deg] z-30 shadow-[4px_4px_0px_0px_rgba(200,230,201,1)]">
                 Spring 2026
               </div>
            </motion.div>

            {/* Image 2 - Background Interaction */}
            <motion.div 
               initial={{ rotate: 12 }}
               whileHover={{ rotate: 5, scale: 1.05, zIndex: 30 }}
               className="absolute top-0 right-0 w-48 h-64 bg-white p-2 border-2 border-gray-900 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] z-10 origin-bottom-left"
            >
               <img src={img5} alt="Detail Fashion" className="w-full h-full object-cover" />
            </motion.div>

             {/* Sticker Decorations */}
             <motion.div style={{ rotate: rotateVar }} className="absolute bottom-10 -left-4 z-40 text-primary mix-blend-multiply">
                <Star size={80} fill="currentColor" />
             </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
