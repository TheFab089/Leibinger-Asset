import React, { useState } from 'react';
import { X, Shield, Eye, Database, Clock, UserCheck } from 'lucide-react';

const ErweiterteDatenschutzerklaerung = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Datenschutz Link */}
      <button
        onClick={() => setIsOpen(true)}
        className="text-slate-400 hover:text-slate-200 transition-colors text-sm"
      >
        Datenschutzerklärung
      </button>

      {/* Datenschutz Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-slate-950/90 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />
          
          {/* Modal Content */}
          <div className="relative bg-slate-900 rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-slate-700 sticky top-0 bg-slate-900">
              <h2 className="text-xl font-semibold text-slate-100 flex items-center">
                <Shield className="w-6 h-6 mr-2 text-blue-400" />
                Datenschutzerklärung
              </h2>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 text-slate-400 hover:text-white transition-colors"
                aria-label="Datenschutzerklärung schließen"
              >
                <X size={20} />
              </button>
            </div>

            {/* Content */}
            <div className="p-6 space-y-8 text-slate-200">
              
              {/* 1. Verantwortliche Stelle */}
              <section>
                <h3 className="text-lg font-medium text-slate-100 mb-4 flex items-center">
                  <UserCheck className="w-5 h-5 mr-2 text-blue-400" />
                  1. Verantwortliche Stelle
                </h3>
                <div className="bg-slate-800 p-4 rounded-lg">
                  <p className="font-medium mb-2">Leibinger Asset Management GmbH</p>
                  <p>Musterstraße 123, 80331 München</p>
                  <p>E-Mail: datenschutz@leibinger-am.de</p>
                  <p>Telefon: +49 (0) 89 123 456 789</p>
                </div>
              </section>

              {/* 2. Allgemeine Hinweise */}
              <section>
                <h3 className="text-lg font-medium text-slate-100 mb-4">2. Allgemeine Hinweise zur Datenverarbeitung</h3>
                <div className="space-y-4">
                  <p className="leading-relaxed">
                    Diese Datenschutzerklärung klärt Sie über die Art, den Umfang und Zweck der Verarbeitung von personenbezogenen Daten 
                    (nachfolgend kurz „Daten") im Rahmen der Erbringung unserer Leistungen sowie innerhalb unseres Onlineangebotes und 
                    der mit ihm verbundenen Webseiten, Funktionen und Inhalte auf.
                  </p>
                  <p className="leading-relaxed">
                    Im Hinblick auf die verwendeten Begrifflichkeiten, wie z.B. „Verarbeitung" oder „Verantwortlicher" verweisen wir 
                    auf die Definitionen im Art. 4 der Datenschutzgrundverordnung (DSGVO).
                  </p>
                </div>
              </section>

              {/* 3. Arten der verarbeiteten Daten */}
              <section>
                <h3 className="text-lg font-medium text-slate-100 mb-4 flex items-center">
                  <Database className="w-5 h-5 mr-2 text-green-400" />
                  3. Arten der verarbeiteten Daten
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-slate-800 p-4 rounded-lg">
                    <h4 className="font-medium text-slate-100 mb-2">Bestandsdaten</h4>
                    <p className="text-sm">Name, Adresse, E-Mail-Adresse, Telefonnummer, Unternehmensdaten</p>
                  </div>
                  <div className="bg-slate-800 p-4 rounded-lg">
                    <h4 className="font-medium text-slate-100 mb-2">Kontaktdaten</h4>
                    <p className="text-sm">E-Mail-Adresse, Telefonnummer, Postanschrift</p>
                  </div>
                  <div className="bg-slate-800 p-4 rounded-lg">
                    <h4 className="font-medium text-slate-100 mb-2">Inhaltsdaten</h4>
                    <p className="text-sm">Texteingaben, Nachrichten, Bewertungsangaben</p>
                  </div>
                  <div className="bg-slate-800 p-4 rounded-lg">
                    <h4 className="font-medium text-slate-100 mb-2">Nutzungsdaten</h4>
                    <p className="text-sm">Besuchte Webseiten, Interesse an Inhalten, Zugriffszeiten</p>
                  </div>
                  <div className="bg-slate-800 p-4 rounded-lg">
                    <h4 className="font-medium text-slate-100 mb-2">Meta-/Kommunikationsdaten</h4>
                    <p className="text-sm">Geräte-Informationen, IP-Adressen, Browser-Informationen</p>
                  </div>
                </div>
              </section>

              {/* 4. Zwecke der Verarbeitung */}
              <section>
                <h3 className="text-lg font-medium text-slate-100 mb-4">4. Zwecke der Verarbeitung</h3>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>Bereitstellung des Onlineangebotes, seiner Funktionen und Inhalte</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>Beantwortung von Kontaktanfragen und Kommunikation mit Nutzern</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>Sicherheitsmaßnahmen und Betriebssicherheit</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>Reichweitenmessung und Marketing (mit Einwilligung)</span>
                  </li>
                </ul>
              </section>

              {/* 5. Cookies und Tracking */}
              <section>
                <h3 className="text-lg font-medium text-slate-100 mb-4 flex items-center">
                  <Eye className="w-5 h-5 mr-2 text-orange-400" />
                  5. Cookies und Tracking-Technologien
                </h3>
                <div className="space-y-4">
                  <div className="bg-slate-800 p-4 rounded-lg">
                    <h4 className="font-medium text-slate-100 mb-2">Technisch notwendige Cookies</h4>
                    <p className="text-sm mb-2">
                      <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse)
                    </p>
                    <p className="text-sm">
                      Diese Cookies sind für die Grundfunktionen der Website erforderlich und können nicht deaktiviert werden.
                    </p>
                  </div>
                  
                  <div className="bg-slate-800 p-4 rounded-lg">
                    <h4 className="font-medium text-slate-100 mb-2">Analyse-Cookies</h4>
                    <p className="text-sm mb-2">
                      <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. a DSGVO (Einwilligung)
                    </p>
                    <p className="text-sm">
                      Helfen uns, die Website zu verbessern und das Nutzererlebnis zu optimieren. Nur mit Ihrer Einwilligung.
                    </p>
                  </div>
                  
                  <div className="bg-slate-800 p-4 rounded-lg">
                    <h4 className="font-medium text-slate-100 mb-2">Marketing-Cookies</h4>
                    <p className="text-sm mb-2">
                      <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. a DSGVO (Einwilligung)
                    </p>
                    <p className="text-sm">
                      Werden verwendet, um personalisierte Werbung anzuzeigen. Nur mit Ihrer Einwilligung.
                    </p>
                  </div>
                </div>
              </section>

              {/* 6. Kontaktformular */}
              <section>
                <h3 className="text-lg font-medium text-slate-100 mb-4">6. Kontaktformular und E-Mail-Kontakt</h3>
                <div className="bg-slate-800 p-4 rounded-lg space-y-3">
                  <p className="text-sm">
                    <strong>Verarbeitete Daten:</strong> Name, E-Mail-Adresse, Telefonnummer, Unternehmen, Nachrichteninhalt
                  </p>
                  <p className="text-sm">
                    <strong>Zweck:</strong> Bearbeitung der Anfrage und Kontaktaufnahme
                  </p>
                  <p className="text-sm">
                    <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. b DSGVO (Vertragsanbahnung) oder Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse)
                  </p>
                  <p className="text-sm">
                    <strong>Speicherdauer:</strong> Bis zur vollständigen Bearbeitung der Anfrage, danach Löschung nach 3 Jahren
                  </p>
                </div>
              </section>

              {/* 7. Server-Logfiles */}
              <section>
                <h3 className="text-lg font-medium text-slate-100 mb-4">7. Server-Logfiles</h3>
                <div className="bg-slate-800 p-4 rounded-lg space-y-3">
                  <p className="text-sm">
                    <strong>Verarbeitete Daten:</strong> IP-Adresse, Datum und Uhrzeit der Anfrage, Zeitzonendifferenz zur Greenwich Mean Time (GMT), 
                    Inhalt der Anforderung, HTTP-Status-Code, übertragene Datenmenge, Website von der die Anforderung kommt, Browser-Informationen
                  </p>
                  <p className="text-sm">
                    <strong>Zweck:</strong> Gewährleistung eines stabilen und sicheren Betriebs der Website
                  </p>
                  <p className="text-sm">
                    <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse)
                  </p>
                  <p className="text-sm">
                    <strong>Speicherdauer:</strong> 7 Tage, danach automatische Löschung
                  </p>
                </div>
              </section>

              {/* 8. Ihre Rechte */}
              <section>
                <h3 className="text-lg font-medium text-slate-100 mb-4 flex items-center">
                  <Clock className="w-5 h-5 mr-2 text-purple-400" />
                  8. Ihre Rechte als betroffene Person
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-slate-800 p-4 rounded-lg">
                    <h4 className="font-medium text-slate-100 mb-2">Auskunftsrecht (Art. 15 DSGVO)</h4>
                    <p className="text-sm">Sie haben das Recht, Auskunft über Ihre von uns verarbeiteten personenbezogenen Daten zu verlangen.</p>
                  </div>
                  <div className="bg-slate-800 p-4 rounded-lg">
                    <h4 className="font-medium text-slate-100 mb-2">Berichtigungsrecht (Art. 16 DSGVO)</h4>
                    <p className="text-sm">Sie haben das Recht, unverzüglich die Berichtigung unrichtiger Daten zu verlangen.</p>
                  </div>
                  <div className="bg-slate-800 p-4 rounded-lg">
                    <h4 className="font-medium text-slate-100 mb-2">Löschungsrecht (Art. 17 DSGVO)</h4>
                    <p className="text-sm">Sie haben das Recht, die Löschung Ihrer personenbezogenen Daten zu verlangen.</p>
                  </div>
                  <div className="bg-slate-800 p-4 rounded-lg">
                    <h4 className="font-medium text-slate-100 mb-2">Widerspruchsrecht (Art. 21 DSGVO)</h4>
                    <p className="text-sm">Sie haben das Recht, der Verarbeitung Ihrer Daten zu widersprechen.</p>
                  </div>
                </div>
              </section>

              {/* 9. Widerruf der Einwilligung */}
              <section>
                <h3 className="text-lg font-medium text-slate-100 mb-4">9. Widerruf der Einwilligung</h3>
                <div className="bg-blue-900/30 border border-blue-700 p-4 rounded-lg">
                  <p className="text-sm leading-relaxed">
                    Sie haben das Recht, eine erteilte Einwilligung jederzeit zu widerrufen. Der Widerruf der Einwilligung 
                    berührt nicht die Rechtmäßigkeit der aufgrund der Einwilligung bis zum Widerruf erfolgten Verarbeitung. 
                    Sie können Ihre Cookie-Einstellungen jederzeit über den Cookie-Button am unteren Bildschirmrand ändern.
                  </p>
                </div>
              </section>

              {/* 10. Beschwerderecht */}
              <section>
                <h3 className="text-lg font-medium text-slate-100 mb-4">10. Beschwerderecht bei der Aufsichtsbehörde</h3>
                <div className="bg-slate-800 p-4 rounded-lg">
                  <p className="text-sm mb-2">
                    Sie haben das Recht, sich bei einer Aufsichtsbehörde zu beschweren, wenn Sie der Ansicht sind, 
                    dass die Verarbeitung Ihrer personenbezogenen Daten gegen die DSGVO verstößt.
                  </p>
                  <p className="text-sm">
                    <strong>Zuständige Aufsichtsbehörde:</strong><br />
                    Bayerisches Landesamt für Datenschutzaufsicht<br />
                    Promenade 18, 91522 Ansbach<br />
                    Telefon: +49 (0) 981 180093-0<br />
                    E-Mail: poststelle@lda.bayern.de
                  </p>
                </div>
              </section>

              {/* 11. Änderungen */}
              <section>
                <h3 className="text-lg font-medium text-slate-100 mb-4">11. Änderungen der Datenschutzerklärung</h3>
                <p className="text-sm leading-relaxed">
                  Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie stets den aktuellen rechtlichen 
                  Anforderungen entspricht oder um Änderungen unserer Leistungen in der Datenschutzerklärung umzusetzen. 
                  Für Ihren erneuten Besuch gilt dann die neue Datenschutzerklärung.
                </p>
                <p className="text-sm mt-2">
                  <strong>Stand:</strong> Oktober 2025
                </p>
              </section>

              {/* Hinweis */}
              <div className="bg-orange-900/30 border border-orange-700 p-4 rounded-lg">
                <p className="text-sm text-orange-200">
                  <strong>Wichtiger Hinweis:</strong> Diese Datenschutzerklärung ist ein Muster und muss an die spezifischen 
                  Gegebenheiten Ihres Unternehmens angepasst werden. Konsultieren Sie einen Rechtsanwalt für eine 
                  rechtssichere Implementierung.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ErweiterteDatenschutzerklaerung;
