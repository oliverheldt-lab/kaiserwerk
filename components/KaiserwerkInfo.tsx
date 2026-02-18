
import React from 'react';

const KaiserwerkInfo: React.FC = () => {
  return (
    <div className="py-24 bg-kaiserWhite">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="flex justify-center mb-8">
             <img 
              src="images/wappen.jpg" 
              alt="Wappen Kaiserwerk" 
              className="h-32 object-contain"
            />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl text-kaiserBlack mb-8 uppercase tracking-widest">KAISERWERK</h2>
          <h3 className="text-xl md:text-2xl font-serif text-kaiserRed italic mb-8">„Zum Wohl und Fühlen“</h3>
          <div className="w-20 h-1 bg-kaiserRed mx-auto mb-10"></div>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed italic mb-12">
            ist das Credo der großartigen Ferienwohnung im Kaiserwerk. Direkt am Fuße des Wilden Kaisers gelegen, trägt eine sensationelle Terrasse ebenso zum Wohlbefinden bei wie die Privatsauna, ein Lift und die Tiefgarage.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-serif text-kaiserRed mb-4 uppercase">Harmonie am Berg</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                Das Kaiserwerk ist die geniale Antwort auf den Wunsch, in anmutigem und ästhetischem Ambiente direkt beim Wilden Kaiser zu relaxen – „griabig“, mit privatem Wellness und mit Muße gesund zu leben.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-serif text-kaiserRed mb-4 uppercase">Phantasievolles Wohndesign</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                Eine Komposition aus modernen Elementen und antiken, handgemachten Möbeln, die liebevoll kombiniert wurden, um eine einzigartige alpine Atmosphäre zu schaffen.
              </p>
            </div>
          </div>
          
          {/* Host Image Section */}
          <div className="flex flex-col items-center">
            <div className="relative group overflow-hidden rounded-sm shadow-2xl max-w-xs mx-auto border-4 border-white">
              <img 
                src="images/christine_torsten_klein.jpg" 
                alt="Ihre Gastgeber Familie Köhling" 
                className="w-full h-auto transform transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-kaiserRed/5 group-hover:bg-transparent transition-colors duration-500"></div>
            </div>
            
            {/* Elegant Host Banner */}
            <div className="w-full max-w-xs mt-4 bg-kaiserBlack p-5 rounded-sm shadow-xl border-l-4 border-kaiserRed relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-full -mr-12 -mt-12 pointer-events-none"></div>
              <p className="text-white text-[10px] uppercase tracking-[0.4em] font-bold mb-1 opacity-80">Ihre Gastgeber</p>
              <p className="font-serif text-xl text-kaiserGold italic">Familie Köhling</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KaiserwerkInfo;
