// Importing images from assets
import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img5 from '../assets/5.jpeg';

const snaps = [
  { id: 1, image: img1, user: "Sakura", height: "162cm" },
  { id: 2, image: img2, user: "Minami", height: "158cm" },
  { id: 3, image: img3, user: "Yuna", height: "165cm" },
  { id: 4, image: img5, user: "Rin", height: "155cm" },
];

const StaffSnap = () => {
  return (
    <section className="py-16">
      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-3xl text-blue-500 uppercase tracking-widest mb-2 font-serif">Staff Snap</h2>
        <p className="text-xs text-gray-400 tracking-widest">REAL STYLING BY STAFF</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 container-custom">
        {snaps.map((snap) => (
            <div key={snap.id} className="group cursor-pointer">
                <div className="overflow-hidden aspect-[3/4] mb-3 relative">
                    <img 
                        src={snap.image} 
                        alt={`Staff ${snap.user}`} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                        <p className="text-white text-[10px] tracking-wider text-center">{snap.height}</p>
                    </div>
                </div>
                <div className="text-center">
                     <p className="text-xs text-gray-500 uppercase tracking-wider group-hover:text-black transition-colors">{snap.user}</p>
                </div>
            </div>
        ))}
      </div>
    </section>
  );
};

export default StaffSnap;
