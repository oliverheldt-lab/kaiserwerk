
import React, { useState, useEffect } from 'react';
import { ExternalLink, ImageIcon, X } from 'lucide-react';

interface GalleryImage {
  primary: string;
  fallback: string;
}

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  // Liste der Bilder mit primären URLs (SkiWelt) und lokalen Fallbacks
  const galleryImages: GalleryImage[] = [
    { primary: "https://tourism.skiwelt.at/media/provider/image00017-6.jpg", fallback: "images/fallback/1.jpg" },
    { primary: "https://tourism.skiwelt.at/media/provider/image00003-2.webp", fallback: "images/fallback/2.jpg" },
    { primary: "https://tourism.skiwelt.at/media/provider/dsc-1281.webp", fallback: "images/fallback/3.jpg" },
    { primary: "https://tourism.skiwelt.at/media/provider/image00009-1.jpg", fallback: "images/fallback/4.jpg" },
    { primary: "https://tourism.skiwelt.at/media/provider/image00007-2.jpg", fallback: "images/fallback/5.jpg" },
    { primary: "https://tourism.skiwelt.at/media/provider/image00021-1.jpg", fallback: "images/fallback/6.jpg" },
  ];

  const galleryUrl = "https://www.skiwelt.at/de/unterkuenfte/details/ferienwohnung-appartement-ferienwohnung-kaiserwerk.html";

  // Verhindert das Scrollen der Seite im Hintergrund, wenn die Lightbox offen ist
  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedImage]);

  // Handler für fehlerhaft geladene Bilder (toter Link)
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>, fallbackSrc: string) => {
    const target = e.currentTarget;
    // Verhindert Endlosschleife, falls das Fallback-Bild auch nicht existiert
    if (!target.src.includes(fallbackSrc)) {
      target.src = fallbackSrc;
    }
  };

  return (
    <>
      {/* Lightbox Overlay */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-kaiserBlack/95 p-4 md:p-10 animate-fade-in backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-6 right-6 md:top-10 md:right-10 p-3 text-white/70 hover:text-white bg-black/40 hover:bg-kaiserRed rounded-full transition-all z-[110]"
            onClick={() => setSelectedImage(null)}
            aria-label="Schließen"
          >
            <X size={24} />
          </button>
          
          <img 
            src={selectedImage.primary} 
            alt="Kaiserwerk Impression Vollbild" 
            className="max-w-full max-h-[90vh] object-contain shadow-2xl rounded-sm border border-white/10"
            onClick={(e) => e.stopPropagation()} // Verhindert Schließen, wenn direkt aufs Bild geklickt wird
            onError={(e) => handleImageError(e, selectedImage.fallback)}
          />
        </div>
      )}

      <div className="py-24 bg-kaiserBlack text-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl mb-4 tracking-tight uppercase">Galerie & Eindrücke</h2>
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-12 h-[1px] bg-kaiserGold/50"></div>
              <div className="w-2 h-2 rotate-45 bg-kaiserRed"></div>
              <div className="w-12 h-[1px] bg-kaiserGold/50"></div>
            </div>
            <p className="text-gray-400 max-w-2xl mx-auto italic font-light text-lg">
              Ein exklusiver Einblick in Ihre Auszeit im Kaiserwerk.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {galleryImages.map((img, idx) => (
              <div 
                key={idx} 
                className="group relative overflow-hidden rounded-sm aspect-[3/2] cursor-pointer shadow-2xl border border-white/5" 
                onClick={() => setSelectedImage(img)}
              >
                <img 
                  src={img.primary} 
                  alt={`Kaiserwerk Impression ${idx + 1}`} 
                  className="object-cover w-full h-full transition-transform duration-[2000ms] group-hover:scale-110 opacity-80 group-hover:opacity-100"
                  loading="lazy"
                  onError={(e) => handleImageError(e, img.fallback)}
                />
                
                {/* Overlay styling */}
                <div className="absolute inset-0 bg-gradient-to-t from-kaiserBlack/60 via-transparent to-transparent opacity-60 group-hover:opacity-20 transition-opacity"></div>
                
                <div className="absolute inset-0 border border-kaiserGold/10 m-4 pointer-events-none group-hover:border-kaiserGold/40 transition-all duration-700"></div>
                
                <div className="absolute bottom-0 left-0 right-0 p-8 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-kaiserRed/90 rounded-full">
                      <ImageIcon size={14} className="text-white" />
                    </div>
                    <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-white drop-shadow-md">Vollbild anzeigen</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col items-center gap-8">
            <div className="text-center">
              <p className="text-gray-500 text-[10px] uppercase tracking-[0.4em] mb-6 font-semibold">Erleben Sie die gesamte Vielfalt</p>
              <a 
                href={galleryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-6 bg-transparent border border-kaiserGold/30 text-white px-16 py-5 rounded-sm hover:bg-kaiserGold hover:text-kaiserBlack transition-all uppercase text-xs font-bold tracking-[0.3em] shadow-xl overflow-hidden"
              >
                <span className="relative z-10">Alle Bilder bei SkiWelt.at</span>
                <ExternalLink size={16} className="relative z-10 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
