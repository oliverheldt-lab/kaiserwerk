
import React, { useEffect, useState } from 'react';
import { 
  Calendar as CalendarIcon, 
  Info, 
  Clock, 
  Users, 
  PawPrint, 
  Sparkles, 
  CheckCircle
} from 'lucide-react';

interface Rate {
  persons: string;
  amount: string;
}

interface Season {
  name: string;
  periods: string[];
  rates: Rate[];
}

interface InfoItem {
  label: string;
  value: string;
  icon: string;
}

interface PricingData {
  seasons: Season[];
  importantInfo: InfoItem[];
}

const iconMap: Record<string, React.ReactNode> = {
  Clock: <Clock size={32} />,
  Users: <Users size={32} />,
  PawPrint: <PawPrint size={32} />,
  Sparkles: <Sparkles size={32} />
};

const Availability: React.FC = () => {
  const [data, setData] = useState<PricingData | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Preisdaten laden
    fetch('preise_dynamisch.json')
      .then(res => {
        if (!res.ok) {
          throw new Error(`Server antwortete mit Status ${res.status}`);
        }
        return res.json();
      })
      .then(json => {
        setData(json);
        setError(null);
      })
      .catch(err => {
        console.error("Fehler beim Laden der preise_dynamisch.json:", err);
        setError("Preisdaten konnten nicht geladen werden.");
      });

    // Widget Script laden und initialisieren
    const scriptId = 'wilder-kaiser-widget-script';
    let script = document.getElementById(scriptId) as HTMLScriptElement;

    if (!script) {
      script = document.createElement('script');
      script.id = scriptId;
      script.src = "https://partner.wilderkaiser.info/static/widgets/js/widget-booking.js";
      script.async = true;
      document.body.appendChild(script);
    } else {
      // Falls das Script schon geladen wurde, versuchen wir die Re-Initialisierung
      // Viele MCO-Widgets reagieren auf einen globalen Aufruf, falls vorhanden.
      if ((window as any).MCO && (window as any).MCO.init) {
        (window as any).MCO.init();
      }
    }
  }, []);

  const isSeasonActive = (periods: string[]): boolean => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    return periods.some(period => {
      try {
        const [startStr, endStr] = period.split(' - ');
        const parseDate = (str: string) => {
          const [d, m, y] = str.trim().split('.').map(Number);
          return new Date(2000 + y, m - 1, d);
        };
        const start = parseDate(startStr);
        const end = parseDate(endStr);
        end.setHours(23, 59, 59, 999);
        return today >= start && today <= end;
      } catch (e) {
        return false;
      }
    });
  };

  if (error) return (
    <div className="py-24 text-center text-gray-500 italic px-6">
      <div className="max-w-md mx-auto p-6 border border-dashed border-gray-200 rounded-lg">
        <Info className="mx-auto mb-4 text-kaiserGold" size={32} />
        <p className="text-kaiserBlack font-medium mb-2">{error}</p>
        <p className="text-xs text-gray-400">Stellen Sie sicher, dass die Datei 'preise_dynamisch.json' im Stammverzeichnis Ihres FTP-Uploads liegt.</p>
      </div>
    </div>
  );
  
  if (!data) return (
    <div className="py-24 flex justify-center items-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-kaiserRed"></div>
    </div>
  );

  return (
    <div className="py-24 container mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="font-serif text-4xl md:text-5xl mb-4 tracking-tight uppercase">Verfügbarkeit & Preise</h2>
        <div className="flex items-center justify-center gap-3">
          <div className="w-12 h-[1px] bg-kaiserGold"></div>
          <div className="w-2 h-2 bg-kaiserRed rotate-45"></div>
          <div className="w-12 h-[1px] bg-kaiserGold"></div>
        </div>
      </div>

      <div className="grid xl:grid-cols-12 gap-12 mb-20">
        {/* Linke Spalte: Preise & Saisons */}
        <div className="xl:col-span-6">
          <div className="flex items-center gap-3 mb-8 border-b border-gray-100 pb-4">
            <h3 className="text-2xl font-serif text-kaiserBlack uppercase tracking-wider">Preise & Saisonzeiten</h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {data.seasons.map((season, idx) => {
              const active = isSeasonActive(season.periods);
              return (
                <div 
                  key={idx} 
                  className={`relative bg-white rounded-xl shadow-sm border transition-all duration-500 p-6 flex flex-col ${
                    active 
                    ? 'border-kaiserRed ring-2 ring-kaiserRed/20 shadow-xl scale-[1.02] bg-kaiserRed/[0.02]' 
                    : 'border-gray-100 hover:shadow-md'
                  }`}
                >
                  {active && (
                    <div className="absolute -top-3 right-4 bg-kaiserRed text-white text-[10px] font-bold px-3 py-1 rounded-full shadow-lg flex items-center gap-1 animate-pulse">
                      <CheckCircle size={10} />
                      AKTUELL
                    </div>
                  )}
                  
                  <h4 className={`text-xl font-bold mb-3 ${active ? 'text-kaiserRed' : 'text-kaiserBlack'}`}>
                    {season.name}
                  </h4>
                  
                  <div className="space-y-1 mb-6">
                    {season.periods.map((period, pIdx) => (
                      <p key={pIdx} className={`text-sm font-medium ${active ? 'text-kaiserRed/70' : 'text-gray-500'}`}>
                        {period}
                      </p>
                    ))}
                  </div>
                  
                  <div className="mt-auto grid grid-cols-3 gap-2">
                    {season.rates.map((rate, rIdx) => (
                      <div key={rIdx} className={`rounded-lg p-3 text-center border ${active ? 'bg-white border-kaiserRed/20' : 'bg-gray-50 border-gray-50'}`}>
                        <p className={`text-[10px] font-bold uppercase mb-1 tracking-tighter whitespace-nowrap ${active ? 'text-kaiserRed/50' : 'text-gray-400'}`}>
                          {rate.persons}
                        </p>
                        <p className={`text-lg font-black leading-none ${active ? 'text-kaiserRed' : 'text-kaiserBlack'}`}>
                          {rate.amount}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
          
          <div className="mt-8 flex items-start gap-3 bg-kaiserGold/5 p-4 rounded-sm border-l-4 border-kaiserGold">
            <Info size={18} className="text-kaiserGold shrink-0 mt-1" />
            <p className="text-xs text-gray-600 leading-relaxed italic">
              Alle Preise verstehen sich in Euro pro Nacht. Zuzüglich Endreinigung. 
              Änderungen und Irrtümer vorbehalten.
            </p>
          </div>
        </div>

        {/* Rechte Spalte: Belegungsplan (Widget) */}
        <div className="xl:col-span-6">
          <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm flex flex-col h-full sticky top-24">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-kaiserRed text-white rounded-full">
                <CalendarIcon size={24} />
              </div>
              <h3 className="text-2xl font-serif uppercase tracking-tight">Belegungsplan</h3>
            </div>
            
            <p className="text-gray-600 mb-8 leading-relaxed italic text-sm">
              Prüfen Sie hier die freien Termine für Ihren Aufenthalt im Kaiserwerk. Der Kalender ist stets auf dem aktuellsten Stand.
            </p>
            
            {/* Das eigentliche Buchungs-Widget */}
            <div className="flex-grow w-full min-h-[500px] bg-kaiserWhite/30 rounded-lg overflow-hidden border border-gray-100 p-1 shadow-inner">
               <div 
                 className="mco-widget-booking" 
                 data-token="AT0tLXKqqIBgYmc48Y5hRFcXw9DYoxZ4jCI6gtOY7a3x0" 
                 data-id="4"
                 style={{ minHeight: '500px' }}
               ></div>
            </div>
            
            <div className="mt-6 pt-6 border-t border-gray-100">
               <p className="text-[9px] uppercase tracking-[0.2em] font-bold text-gray-400 text-center">
                 Live-Synchronisation via SkiWelt Wilder Kaiser
               </p>
            </div>
          </div>
        </div>
      </div>

      {/* Weitere Informationen */}
      <div className="space-y-12 max-w-5xl mx-auto">
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
          <div className="px-10 py-6 border-b border-gray-100 text-center">
            <h3 className="text-2xl font-bold text-kaiserBlack tracking-tight">Weitere Infos</h3>
          </div>
          <div className="p-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-8">
              {data.importantInfo.map((info, iIdx) => (
                <div key={iIdx} className="flex flex-col items-center text-center group">
                  <div className="text-kaiserBlack mb-4 group-hover:text-kaiserRed transition-all duration-300 group-hover:scale-110">
                    {iconMap[info.icon]}
                  </div>
                  <p className="text-xs font-bold text-kaiserBlack mb-1 uppercase tracking-wider">{info.label}</p>
                  <p className="text-xs text-gray-500 leading-tight font-medium">{info.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Availability;
