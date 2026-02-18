
import React from 'react';
import { Maximize, Car, Home, Layers, MapPin, Sparkles } from 'lucide-react';

const ApartmentDetails: React.FC = () => {
  // Custom House with Heart Icon to match the screenshot perfectly
  const HouseHeartIcon = ({ size = 40, className = "" }: { size?: number, className?: string }) => (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="1.5" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      {/* Slightly larger heart, centered better in the house body */}
      <path 
        d="M12 13c-1.8-1.8-4.5 0.5-2 3.5 2.5 3 2 3 2 3s-0.5 0 2-3c2.5-3 0-5.3-2-3.5" 
        fill="currentColor" 
        fillOpacity="0.2" 
      />
      <path 
        d="M12 13c-1.8-1.8-4.5 0.5-2 3.5 2.5 3 2 3 2 3s-0.5 0 2-3c2.5-3 0-5.3-2-3.5" 
      />
    </svg>
  );

  return (
    <div className="py-24 bg-white relative overflow-hidden">
      {/* Subtle background decorative element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-kaiserWhite/50 -z-0 transform skew-x-12 translate-x-1/2"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl text-kaiserBlack mb-6 uppercase tracking-[0.2em]">Die Wohnung</h2>
            <div className="flex items-center justify-center gap-3">
              <div className="w-12 h-[1px] bg-kaiserGold"></div>
              <div className="w-2 h-2 bg-kaiserRed rotate-45"></div>
              <div className="w-12 h-[1px] bg-kaiserGold"></div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* Text Content */}
            <div className="space-y-12">
              <div className="relative">
                <span className="absolute -top-10 -left-6 text-9xl font-serif text-kaiserRed/5 select-none font-bold">70</span>
                <p className="text-4xl font-serif text-kaiserRed italic mb-6">Einzigartig!</p>
                <p className="text-2xl text-gray-800 leading-relaxed font-light">
                  Mit <span className="font-semibold border-b-2 border-kaiserGold/30">70 m² innen</span> und fast <span className="font-semibold border-b-2 border-kaiserGold/30">100 m² außen</span> genießen Sie einen gigantischen Verwöhnbereich zum kreativen Abschalten.
                </p>
              </div>

              {/* Highlight Card - "IHR ZUHAUSE AUF ZEIT" moved ABOVE details */}
              <div className="bg-white p-10 rounded-xl shadow-2xl relative overflow-hidden group border border-gray-50">
                {/* Watermark effect icon on the right */}
                <div className="absolute -top-4 -right-8 opacity-[0.03] group-hover:opacity-[0.06] transition-opacity duration-700 pointer-events-none">
                   <HouseHeartIcon size={240} />
                </div>

                <div className="flex items-start gap-6 mb-8 relative z-10">
                  {/* Black circle icon with custom house and heart */}
                  <div className="shrink-0 w-20 h-20 bg-kaiserBlack rounded-full flex items-center justify-center shadow-lg border border-kaiserGold/20">
                    <HouseHeartIcon size={44} className="text-kaiserGold" />
                  </div>
                  
                  <h3 className="font-serif text-3xl md:text-4xl text-kaiserBlack leading-tight tracking-tight mt-1">
                    IHR ZUHAUSE AUF<br />ZEIT
                  </h3>
                </div>

                <ul className="space-y-4 relative z-10">
                  {[
                    "Herzlich willkommen: Ideal für Familien & Vierbeiner",
                    "Viel Freiraum: 2 Doppelzimmer & 2 Bäder",
                    "Zum Aufwärmen: Private Infrarot-Sauna"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-4 text-gray-700">
                      <div className="shrink-0 w-2 h-2 bg-kaiserRed rounded-full shadow-sm"></div>
                      <p className="text-lg font-medium">{item}</p>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Specific Details Grid moved BELOW the highlight card */}
              <div className="grid grid-cols-2 gap-4">
                 <div className="flex items-start gap-4 p-4 bg-kaiserWhite/40 border border-gray-100 rounded-sm col-span-2">
                    <MapPin className="text-kaiserRed shrink-0" size={20} />
                    <div>
                      <p className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">Adresse</p>
                      <p className="text-sm font-medium text-kaiserBlack">
                        Dorf 12, 6351 Scheffau am Wilden Kaiser
                        <a 
                          href="https://www.google.com/maps/@47.5264446,12.2507529,3a,75y,130.46h,88.35t/data=!3m7!1e1!3m5!1s62puYqAFMGsllzg_j3g3uQ!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D1.6453319988991382%26panoid%3D62puYqAFMGsllzg_j3g3uQ%26yaw%3D130.46405229991967!7i16384!8i8192?entry=ttu&g_ep=EgoyMDI2MDIwNC4wIKXMDSoASAFQAw%3D%3D" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="ml-2 text-kaiserRed hover:underline decoration-kaiserGold transition-all font-semibold"
                        >
                          (Google Maps)
                        </a>
                      </p>
                    </div>
                 </div>
                 <div className="flex items-start gap-4 p-4 bg-kaiserWhite/40 border border-gray-100 rounded-sm">
                    <Home className="text-kaiserRed shrink-0" size={20} />
                    <div>
                      <p className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">Unterkunftsart</p>
                      <p className="text-sm font-medium text-kaiserBlack">Ferienwohnung</p>
                    </div>
                 </div>
                 <div className="flex items-start gap-4 p-4 bg-kaiserWhite/40 border border-gray-100 rounded-sm">
                    <Layers className="text-kaiserRed shrink-0" size={20} />
                    <div>
                      <p className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">Lage</p>
                      <p className="text-sm font-medium text-kaiserBlack">Erdgeschoss mit Terrasse</p>
                    </div>
                 </div>
                 <div className="flex items-start gap-4 p-4 bg-kaiserWhite/40 border border-gray-100 rounded-sm col-span-2">
                    <Car className="text-kaiserRed shrink-0" size={20} />
                    <div>
                      <p className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">Kostenloses Parken</p>
                      <p className="text-sm font-medium text-kaiserBlack">Tiefgarage (bis 2,10m Höhe) oder direkt am Haus</p>
                    </div>
                 </div>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                 <div className="bg-white border border-gray-100 p-8 text-center hover:border-kaiserGold hover:shadow-lg transition-all duration-500 rounded-sm">
                    <Maximize className="mx-auto text-kaiserGold mb-3" size={36} />
                    <p className="text-[10px] uppercase tracking-[0.3em] text-gray-400 font-bold mb-1">Gesamtfläche</p>
                    <p className="text-3xl font-serif font-bold text-kaiserBlack">170 m²</p>
                 </div>
                 <div className="bg-white border border-gray-100 p-8 text-center hover:border-kaiserGold hover:shadow-lg transition-all duration-500 rounded-sm">
                    <Sparkles className="mx-auto text-kaiserGold mb-3" size={36} />
                    <p className="text-[10px] uppercase tracking-[0.3em] text-gray-400 font-bold mb-1">Design</p>
                    <p className="text-3xl font-serif font-bold text-kaiserBlack">Stilvoll</p>
                 </div>
              </div>
            </div>

            {/* Image Section */}
            <div className="relative group">
              <div className="absolute -inset-6 bg-kaiserGold/10 rounded-sm -z-10 rotate-1 group-hover:rotate-0 transition-transform duration-700"></div>
              <div className="aspect-[4/5] lg:aspect-square w-full bg-gray-200 rounded-sm shadow-2xl flex flex-col items-center justify-center border border-gray-200 overflow-hidden relative">
                <img 
                  src="images/wohnung.jpeg" 
                  alt="Kaiserwerk Ferienwohnung" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[3000ms]"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-700"></div>
                
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-8 text-center">
                  <div className="bg-kaiserBlack/60 backdrop-blur-md px-8 py-4 rounded-sm border border-kaiserGold/50 uppercase tracking-[0.4em] text-xs font-bold shadow-2xl">
                    Kaiserwerk Ferienwohnung
                  </div>
                </div>

                {/* Corner Accents */}
                <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-kaiserGold/60 m-4"></div>
                <div className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 border-kaiserGold/60 m-4"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApartmentDetails;
