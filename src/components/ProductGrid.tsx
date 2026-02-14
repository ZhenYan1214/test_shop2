import ProductCard from './ProductCard';
import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img5 from '../assets/5.jpeg';
import img6 from '../assets/6.jpg';
import img8 from '../assets/8.jpg';

const products = [
  {
    id: 1,
    title: "Vintage Denim Jacket",
    price: "$85.00",
    image: img2,
    tags: ["Denim", "Vintage"],
    isNew: true
  },
  {
    id: 2,
    title: "Plaid Wool Skirt",
    price: "$42.00",
    image: img1,
    tags: ["School", "Cute"],
    isNew: false
  },
  {
    id: 3,
    title: "Oversized Knit Sweater",
    price: "$60.00",
    image: img3,
    tags: ["Knit", "Cozy"],
    isNew: false
  },
  {
    id: 4,
    title: "Floral Tea Dress",
    price: "$58.00",
    image: img5,
    tags: ["Dress", "Floral"],
    isNew: true
  },
  {
    id: 5,
    title: "Classic Trench Coat",
    price: "$120.00",
    image: img6,
    tags: ["Outerwear", "Classic"],
    isNew: false
  },
  {
    id: 6,
    title: "Retro Graphic Tee",
    price: "$35.00",
    image: img8,
    tags: ["Casual", "90s"],
    isNew: false
  }
];

const ProductGrid = () => {
  return (
    <section>
      <div className="flex items-end justify-between mb-16 border-b-2 border-gray-900 pb-4">
        <div>
           <span className="block font-sans text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Collection 001</span>
           <h2 className="font-serif font-bold text-5xl text-gray-900 leading-none">
             Fresh <span className="text-secondary italic">Pick</span>
           </h2>
        </div>
        <div className="hidden md:flex gap-4">
           {['All', 'Tops', 'Bottoms', 'Dresses'].map(cat => (
               <button key={cat} className="px-4 py-1 text-sm font-bold uppercase hover:bg-gray-900 hover:text-white transition-colors border border-transparent hover:border-gray-900 rounded-full">
                   {cat}
               </button>
           ))}
        </div>
      </div>
      
      {/* Masonry-ish Layout (using CSS Grid) */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-8 space-y-8">
        {products.map(product => (
          <div key={product.id} className="break-inside-avoid">
             <ProductCard product={product} />
          </div>
        ))}
      </div>
      
       <div className="mt-20 text-center relative">
         <div className="absolute top-1/2 left-0 w-full h-[2px] bg-gray-200 -z-10"></div>
         <button className="px-10 py-4 bg-white border-2 border-gray-900 rounded-full font-bold text-lg hover:bg-gray-900 hover:text-white transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]">
            View All Collections
        </button>
       </div>
    </section>
  );
};

export default ProductGrid;
