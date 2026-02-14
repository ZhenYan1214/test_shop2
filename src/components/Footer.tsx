const Footer = () => {
  return (
    <footer className="bg-white/50 border-t border-white/60 backdrop-blur-sm mt-12">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="font-heading font-bold text-xl">KawaiiVintage</h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              Curating the cutest Japanese vintage fashion for you. Sustainable, stylish, and one-of-a-kind.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-4 text-gray-800">Shop</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><a href="#" className="hover:text-primary transition-colors">New Arrivals</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Best Sellers</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Sale</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4 text-gray-800">Support</h4>
             <ul className="space-y-2 text-sm text-gray-500">
              <li><a href="#" className="hover:text-primary transition-colors">Shipping & Returns</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Contact Us</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4 text-gray-800">Stay Cute</h4>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-white border border-gray-200 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 w-full"
              />
              <button className="bg-primary text-white p-2 rounded-full hover:bg-primary/90 transition-colors">
                Example
              </button>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-100 text-center text-xs text-gray-400">
          © 2026 KawaiiVintage. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
