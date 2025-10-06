import React, { useState } from 'react';
import { X, MapPin, Phone, Mail, Building } from 'lucide-react';

const ImpressumModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Impressum Link */}
      <button
        onClick={() => setIsOpen(true)}
        className="text-slate-400 hover:text-slate-200 transition-colors text-sm"
      >
        Impressum
      </button>

      {/* Impressum Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-slate-950/90 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />
          
          {/* Modal Content */}
          <div className="relative bg-slate-900 rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-slate-700">
              <h2 className="text-xl font-semibold text-slate-100">Impressum</h2>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 text-slate-400 hover:text-white transition-colors"
                aria-label="Impressum schließen"
              >
                <X size={20} />
              </button>
            </div>

            {/* Content */}
            <div className="p-6 space-y-6 text-slate-200">
              {/* Angaben gemäß § 5 TMG */}
              <section>
                <h3 className="text-lg font-medium text-slate-100 mb-4 flex items-center">
                  <Building className="w-5 h-5 mr-2 text-blue-400" />
                  Angaben gemäß § 5 TMG
                </h3>
                <div className="space-y-2">
                  <p className="font-medium">Leibinger Asset Management GmbH</p>
                  <div className="flex items-start space-x-2">
                    <MapPin className="w-4 h-4 mt-1 text-slate-400 flex-shrink-0" />
                    <div>
                      <p>Musterstraße 123</p>
                      <p>80331 München</p>
                      <p>Deutschland</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Kontakt */}
              <section>
                <h3 className="text-lg font-medium text-slate-100 mb-4">Kontakt</h3>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Phone className="w-4 h-4 text-slate-400" />
                    <span>+49 (0) 89 123 456 789</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Mail className="w-4 h-4 text-slate-400" />
                    <span>info@leibinger-am.de</span>
                  </div>
                </div>
              </section>

              {/* Handelsregister */}
              <section>
                <h3 className="text-lg font-medium text-slate-100 mb-4">Handelsregister</h3>
                <div className="space-y-1">
                  <p>Registergericht: Amtsgericht München</p>
                  <p>Registernummer: HRB 123456</p>
                </div>
              </section>

              {/* Umsatzsteuer-ID */}
              <section>
                <h3 className="text-lg font-medium text-slate-100 mb-4">Umsatzsteuer-ID</h3>
                <p>Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:</p>
                <p className="font-mono">DE123456789</p>
              </section>

              {/* Geschäftsführung */}
              <section>
                <h3 className="text-lg font-medium text-slate-100 mb-4">Geschäftsführung</h3>
                <p>Max Mustermann, Maria Musterfrau</p>
              </section>

              {/* Aufsichtsbehörde */}
              <section>
                <h3 className="text-lg font-medium text-slate-100 mb-4">Aufsichtsbehörde</h3>
                <div className="space-y-1">
                  <p>Bundesanstalt für Finanzdienstleistungsaufsicht (BaFin)</p>
                  <p>Graurheindorfer Straße 108</p>
                  <p>53117 Bonn</p>
                </div>
              </section>

              {/* Haftungsausschluss */}
              <section>
                <h3 className="text-lg font-medium text-slate-100 mb-4">Haftungsausschluss</h3>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-slate-100 mb-2">Haftung für Inhalte</h4>
                    <p className="text-sm leading-relaxed">
                      Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht unter der Verpflichtung, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-slate-100 mb-2">Haftung für Links</h4>
                    <p className="text-sm leading-relaxed">
                      Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-slate-100 mb-2">Urheberrecht</h4>
                    <p className="text-sm leading-relaxed">
                      Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
                    </p>
                  </div>
                </div>
              </section>

              {/* Hinweis */}
              <div className="bg-slate-800 p-4 rounded-lg">
                <p className="text-sm text-slate-300">
                  <strong>Hinweis:</strong> Die oben genannten Daten sind Beispieldaten und müssen durch die tatsächlichen Unternehmensdaten ersetzt werden.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ImpressumModal;
