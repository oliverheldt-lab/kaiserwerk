
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Image - Representative stock image of a wooden alpine house with blue sky */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0 transition-transform duration-[15000ms] scale-110 animate-subtle-zoom"
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2070&auto=format&fit=crop')`,
          backgroundPosition: '50% 40%'
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="relative z-10 text-center text-white px-6 flex flex-col items-center">
        {/* Crest - Local JPG showing original colors based on user request */}
        <div className="mb-6 animate-fade-in">
           <img 
            src="images/wappen.jpg" 
            alt="Wappen Kaiserwerk" 
            className="h-28 md:h-36 object-contain drop-shadow-2xl opacity-100"
          />
        </div>

        <h1 className="font-serif text-5xl md:text-8xl mb-8 drop-shadow-lg tracking-tight uppercase">
          KAISERWERK
        </h1>
        
        <div className="mb-12">
          <p className="text-lg md:text-2xl font-light max-w-3xl mx-auto opacity-95 leading-relaxed drop-shadow-md font-sans tracking-wide">
            Stilvolles Design in vollendeter alpiner Harmonie. Direkt am Wilden Kaiser.
          </p>
        </div>
        
        <a 
          href="#details" 
          className="inline-block bg-kaiserRed hover:bg-red-800 text-white font-medium px-14 py-5 rounded-sm transition-all shadow-2xl uppercase tracking-[0.2em] text-xs border border-kaiserRed hover:border-white"
        >
          Ferienwohnung erkunden
        </a>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce flex flex-col items-center gap-3">
        <span className="text-[9px] uppercase tracking-[0.4em] opacity-50 font-bold text-white">Entdecken</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent mx-auto"></div>
      </div>
      
      <style>{`
        @keyframes subtle-zoom {
          from { transform: scale(1.05); }
          to { transform: scale(1.15); }
        }
        .animate-subtle-zoom {
          animation: subtle-zoom 25s ease-in-out infinite alternate;
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 1.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default Hero;