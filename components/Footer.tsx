
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const Footer: React.FC = () => {
  const [isImpressumOpen, setIsImpressumOpen] = useState(false);

  return (
    <footer className="bg-kaiserBlack text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8 border-b border-gray-800 pb-8">
          <div className="flex items-center gap-4">
            <div className="font-serif text-2xl tracking-widest text-kaiserRed uppercase">Kaiserwerk</div>
            <img 
              src="images/wappen.jpg" 
              alt="Wappen Kaiserwerk" 
              className="h-12 w-auto object-contain"
            />
          </div>
          <div className="flex gap-8 text-sm text-gray-400">
            <a href="#kaiserwerk" className="hover:text-white transition-colors uppercase tracking-widest">Home</a>
            <a href="#details" className="hover:text-white transition-colors uppercase tracking-widest">Wohnung</a>
            <a href="#contact" className="hover:text-white transition-colors uppercase tracking-widest">Kontakt</a>
          </div>
        </div>
        
        {/* Legal Toggle Section */}
        <div className="mb-8">
          <button 
            onClick={() => setIsImpressumOpen(!isImpressumOpen)}
            className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-gray-500 hover:text-white transition-colors mx-auto md:mx-0"
          >
            {isImpressumOpen ? 'Impressum schließen' : 'Impressum & Rechtliches anzeigen'}
            {isImpressumOpen ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
          </button>

          {isImpressumOpen && (
            <div className="mt-8 p-8 bg-white/5 rounded-sm border border-white/10 text-xs text-gray-400 leading-relaxed animate-fade-in">
              <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-6">
                  <section>
                    <h4 className="text-white font-bold uppercase mb-2 tracking-wider">Impressum</h4>
                    <p className="font-bold text-gray-300">Angaben gemäß § 5 TMG:</p>
                    <p>Kaiserwerk</p>
                    <p className="mt-4 font-bold text-gray-300">Verantwortlich für den Inhalt:</p>
                    <div className="mt-2 space-y-2">
                      <p>Familie Köhling</p>
                      <img 
                        src="images/impressum.jpg" 
                        alt="Impressum Familie Köhling" 
                        className="max-w-[280px] h-auto opacity-90 rounded-sm border border-white/10 shadow-lg"
                      />
                    </div>
                  </section>

                  <section>
                    <h4 className="text-white font-bold uppercase mb-2 tracking-wider">Bildnachweise</h4>
                    <p>Quellenangaben für die verwendeten Bilder und Grafiken: Für verlinkte Inhalte gelten die Quellenangeben der verlinkten Bilder auf der ursprünglichen Website.</p>
                    <p className="mt-2">Die statisch hinterlegten Bilder beziehen sich nicht auf Quellen Dritter oder sind separat gekennzeichnet.</p>
                  </section>

                  <section>
                    <h4 className="text-white font-bold uppercase mb-2 tracking-wider">Haftung für Inhalte</h4>
                    <p>Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit and Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.</p>
                  </section>
                </div>

                <div className="space-y-6">
                  <section>
                    <h4 className="text-white font-bold uppercase mb-2 tracking-wider">Haftung für Links</h4>
                    <p>Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.</p>
                  </section>

                  <section>
                    <h4 className="text-white font-bold uppercase mb-2 tracking-wider">Urheberrecht</h4>
                    <p>Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.</p>
                  </section>

                  <section>
                    <h4 className="text-white font-bold uppercase mb-2 tracking-wider">Datenschutz</h4>
                    <p>Die Nutzung unserer Webseite ist in der Regel ohne Angabe personenbezogener Daten möglich. Soweit auf unseren Seiten personenbezogene Daten (beispielsweise Name, Anschrift oder eMail-Adressen) erhoben werden, erfolgt dies, soweit möglich, stets auf freiwilliger Basis. Diese Daten werden ohne Ihre ausdrückliche Zustimmung nicht an Dritte weitergegeben.</p>
                  </section>

                  <div className="pt-4 border-t border-white/10 italic text-[10px]">
                    <p>Quellverweis: Disclaimer von eRecht24, dem Portal zum Internetrecht von Rechtsanwalt Sören Siebert</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        
        <div className="flex flex-col md:flex-row justify-between text-[10px] text-gray-500 gap-4 uppercase tracking-[0.2em]">
          <div className="flex flex-col gap-1">
            <p>© {new Date().getFullYear()} Kaiserwerk. Alle Rechte vorbehalten.</p>
            <p className="text-kaiserGold/50">Design & Realisierung: Oliver Heldt</p>
          </div>
          <div className="flex flex-col md:items-end gap-1">
            <span className="text-gray-600">Ihre Gastgeber</span>
            <span className="text-kaiserRed font-bold">Familie Köhling</span>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.4s ease-out forwards;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
