import { motion } from 'framer-motion';

interface MarqueeProps {
  text: string;
  speed?: number;
  className?: string;
  reverse?: boolean;
}

const Marquee = ({ text, speed = 20, className = "", reverse = false }: MarqueeProps) => {
  return (
    <div className={`overflow-hidden whitespace-nowrap flex ${className}`}>
      <motion.div
        className="flex min-w-full gap-8 pr-8"
        animate={{ x: reverse ? ["0%", "-100%"] : ["-100%", "0%"] }}
        transition={{ 
          duration: speed, 
          repeat: Infinity, 
          ease: "linear",
          repeatType: "loop" 
        }}
      >
        {[...Array(4)].map((_, i) => (
          <span key={i} className="inline-block">
            {text}
          </span>
        ))}
      </motion.div>
      <motion.div
        className="flex min-w-full gap-8 pr-8"
        animate={{ x: reverse ? ["0%", "-100%"] : ["-100%", "0%"] }}
        transition={{ 
          duration: speed, 
          repeat: Infinity, 
          ease: "linear",
          repeatType: "loop" 
        }}
      >
        {[...Array(4)].map((_, i) => (
          <span key={i} className="inline-block">
            {text}
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export default Marquee;
