import { motion } from 'framer-motion';

interface ProductProps {
  id: number;
  title: string;
  price: string;
  image: string;
  isNew?: boolean;
}

const ProductCard = ({ product }: { product: ProductProps }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group cursor-pointer flex flex-col gap-3 max-w-[240px] mx-auto"
    >
      <div className="relative overflow-hidden aspect-[3/4] bg-gray-100 round-md">
        <img 
          src={product.image} 
          alt={product.title} 
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        {product.isNew && (
            <span className="absolute top-2 left-2 text-[10px] uppercase tracking-widest text-text-main/80 bg-white/80 px-2 py-1 backdrop-blur-sm">
                New
            </span>
        )}
      </div>

      <div className="text-left space-y-1">
        <h3 className="text-xs tracking-wider text-text-main uppercase line-clamp-1 group-hover:underline decoration-1 underline-offset-4">
          {product.title}
        </h3>
        <p className="text-xs text-text-muted font-sans font-medium">
          {product.price} <span className="text-[10px]">tax in</span>
        </p>
      </div>
    </motion.div>
  );
};

export default ProductCard;

