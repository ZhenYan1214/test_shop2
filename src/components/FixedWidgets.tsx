import { ShoppingCart, BookOpen } from 'lucide-react';

const FixedWidgets = () => {
    return (
        <div className="fixed bottom-6 left-6 z-50 flex flex-col items-center gap-3">
            {/* Main Pill Container */}
            <div className="bg-white/95 backdrop-blur-sm rounded-[32px] shadow-lg shadow-pink-100 border border-pink-100 p-3 pt-5 pb-5 w-20 flex flex-col items-center gap-4 animate-fade-in-up">
                
                {/* Brand / Logo Area */}
                <div className="flex flex-col items-center mb-1 group cursor-pointer hover:opacity-70 transition-opacity">
                    <span className="font-serif text-[12px] text-pink-400 tracking-wider font-bold">WanChing</span>
                </div>

                {/* Cart Icon */}
                <div className="flex flex-col items-center gap-1 group cursor-pointer hover:scale-110 transition-transform">
                    <div className="relative">
                        <ShoppingCart size={24} strokeWidth={2} className="text-gray-400 group-hover:text-pink-400 transition-colors" />
                        <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-pink-400 rounded-full border-2 border-white"></span>
                    </div>
                    <span className="text-[10px] text-gray-500 font-sans tracking-wide group-hover:text-pink-400 transition-colors">購物車</span>
                </div>

                {/* Divider Line */}
                <div className="w-8 h-[1px] bg-pink-50"></div>

                {/* Guide Icon */}
                <div className="flex flex-col items-center gap-1 group cursor-pointer hover:scale-110 transition-transform">
                    <BookOpen size={22} strokeWidth={2} className="text-gray-400 group-hover:text-pink-400 transition-colors" />
                    <span className="text-[10px] text-gray-500 font-sans tracking-wide group-hover:text-pink-400 transition-colors">使用說明</span>
                </div>
            </div>
        </div>
    );
};

export default FixedWidgets;
