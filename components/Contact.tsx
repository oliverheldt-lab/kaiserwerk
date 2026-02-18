
import React, { useState } from 'react';
import { Mail, Globe, CheckCircle2, Phone, Heart, ShieldCheck } from 'lucide-react';

const Contact: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    setIsSubmitting(true);

    try {
      // reCAPTCHA v3 Token anfordern
      const token = await new Promise<string>((resolve, reject) => {
        if (typeof (window as any).grecaptcha === 'undefined') {
          reject(new Error('reCAPTCHA not loaded'));
          return;
        }
        (window as any).grecaptcha.ready(() => {
          (window as any).grecaptcha.execute('6Ld2sWUsAAAAAOUgew4avb8tjM7e6s9YIizftRz3', { action: 'submit' })
            .then((t: string) => resolve(t));
        });
      });

      // Vorbereitung der Daten für imEmailForm.php
      const body = new FormData();
      body.append('imObjectForm_2_1', formData.name);
      body.append('imObjectForm_2_2', formData.email);
      body.append('imObjectForm_2_3', ''); 
      body.append('imObjectForm_2_4', ''); 
      body.append('imObjectForm_2_5', ''); 
      body.append('imObjectForm_2_6', ''); 
      body.append('imObjectForm_2_7', formData.message);
      
      // reCAPTCHA Response Token mitsenden
      body.append('g-recaptcha-response', token);
      
      // Pflichtfelder für den Bot-Schutz des PHP-Skripts
      body.append('imJsCheck', 'jsactive');
      body.append('imSpProt', '');

      await fetch('/imemail/imEmailForm.php', {
        method: 'POST',
        body: body,
      });

      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Fehler beim Senden:', error);
      // Fallback zu Mailto falls reCAPTCHA oder API scheitert
      const mailtoLink = `mailto:Haus@ingrid-ellmau.at?subject=Buchungsanfrage Kaiserwerk&body=${encodeURIComponent(formData.message)}`;
      window.location.href = mailtoLink;
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="py-24 bg-kaiserWhite">
        <div className="container mx-auto px-6 flex justify-center">
          <div className="bg-white p-12 rounded-lg shadow-xl text-center max-w-2xl border-t-8 border-kaiserRed animate-fade-in">
            <div className="flex justify-center mb-6 text-green-500">
              <CheckCircle2 size={64} />
            </div>
            <h2 className="font-serif text-3xl mb-4 text-kaiserBlack uppercase tracking-widest">Anfrage gesendet</h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Vielen Dank für Ihr Interesse am Kaiserwerk! Ihre Nachricht wurde erfolgreich übermittelt. 
              Wir werden Ihre Anfrage zeitnah bearbeiten und uns bei Ihnen melden.
            </p>
            <button 
              onClick={() => setIsSubmitted(false)}
              className="bg-kaiserBlack text-white px-8 py-3 rounded-sm uppercase tracking-widest text-xs font-bold hover:bg-kaiserRed transition-colors"
            >
              Neues Formular
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-24 bg-kaiserWhite">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Host Info */}
          <div className="space-y-12">
            <div>
              <h2 className="font-serif text-4xl mb-8 uppercase tracking-widest">Kontakt</h2>
              <div className="bg-white p-8 rounded-lg shadow-xl border-t-4 border-kaiserRed">
                <p className="text-2xl font-serif text-kaiserRed mb-4 italic">Alpine Herzlichkeit</p>
                <p className="text-gray-700 leading-relaxed mb-8">
                  Gemeinsam mit Ingrid Vererfven gelangen Sie charmant zum individuellen Angebot und Top Service.
                </p>
                
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-10">
                  <div className="space-y-6 flex-grow">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-kaiserWhite flex items-center justify-center text-kaiserRed">
                        <Globe size={20} />
                      </div>
                      <div>
                        <p className="text-sm text-gray-400 uppercase tracking-tighter">Inseriert seit</p>
                        <p className="font-medium">2010</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-kaiserWhite flex items-center justify-center text-kaiserRed">
                        <Phone size={20} />
                      </div>
                      <div>
                        <p className="text-sm text-gray-400 uppercase tracking-tighter">Telefon</p>
                        <a 
                          href="tel:+436643879206" 
                          className="font-medium text-lg hover:text-kaiserRed transition-colors"
                        >
                          +43 664 3879 206
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-kaiserWhite flex items-center justify-center text-kaiserRed">
                        <Heart size={20} />
                      </div>
                      <div>
                        <p className="text-sm text-gray-400 uppercase tracking-tighter">Gästebetreuung & Reservierung</p>
                        <p className="font-medium text-lg">Ingrid Vererfven</p>
                      </div>
                    </div>
                  </div>

                  {/* Kleeblatt Image */}
                  <div className="shrink-0 flex items-center justify-center">
                    <img 
                      src="images/kleeblatt.jpeg" 
                      alt="Kleeblatt für Glück" 
                      className="h-60 w-60 md:h-72 md:w-72 object-contain opacity-95 hover:scale-105 transition-transform duration-500 drop-shadow-md"
                    />
                  </div>
                </div>

                <div className="flex items-center gap-4 pt-4 mt-8 border-t">
                  <div>
                    <p className="text-sm text-gray-400 uppercase tracking-tighter">Kontaktsprache</p>
                    <p className="text-gray-600 font-medium">Englisch, Französisch, Deutsch, Niederländisch</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white p-10 rounded-lg shadow-lg">
            <h3 className="font-serif text-2xl mb-8 uppercase tracking-widest border-b border-gray-100 pb-4">Anfrage senden</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] uppercase font-bold text-gray-400 tracking-wider mb-2">Vor- / Nachname</label>
                  <input 
                    type="text" 
                    required
                    className="w-full px-4 py-3 bg-kaiserWhite border border-transparent focus:border-kaiserRed focus:bg-white outline-none transition-all rounded-sm text-sm"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-[10px] uppercase font-bold text-gray-400 tracking-wider mb-2">E-Mail Adresse</label>
                  <input 
                    type="email" 
                    required
                    className="w-full px-4 py-3 bg-kaiserWhite border border-transparent focus:border-kaiserRed focus:bg-white outline-none transition-all rounded-sm text-sm"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] uppercase font-bold text-gray-400 tracking-wider mb-2">Ihre Nachricht</label>
                <textarea 
                  rows={6}
                  required
                  placeholder="Erzählen Sie uns von Ihren Urlaubsplänen..."
                  className="w-full px-4 py-3 bg-kaiserWhite border border-transparent focus:border-kaiserRed focus:bg-white outline-none transition-all rounded-sm resize-none text-sm"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                ></textarea>
              </div>

              <button 
                type="submit"
                disabled={isSubmitting}
                className={`w-full font-bold py-4 rounded-sm uppercase tracking-[0.3em] text-xs transition-all shadow-lg active:scale-[0.98] ${
                  !isSubmitting 
                  ? 'bg-kaiserRed hover:bg-red-800 text-white cursor-pointer' 
                  : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                }`}
              >
                {isSubmitting ? 'Wird geprüft...' : 'Unverbindlich anfragen'}
              </button>
              
              <div className="flex items-center justify-center gap-2 pt-4">
                <ShieldCheck size={12} className="text-gray-400" />
                <p className="text-[9px] text-gray-400 text-center italic uppercase tracking-wider">
                  Geschützt durch Google reCAPTCHA
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
      
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default Contact;
