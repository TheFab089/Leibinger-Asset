import React, { useState } from 'react';
import { Cookie, Settings, X, Check } from 'lucide-react';

const CookieWiderrufButton = ({ onOpenSettings }) => {
  return (
    <button
      onClick={onOpenSettings}
      className="fixed bottom-4 right-4 z-40 bg-slate-700 hover:bg-slate-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-105"
      title="Cookie-Einstellungen ändern"
      aria-label="Cookie-Einstellungen öffnen"
    >
      <Cookie size={20} />
    </button>
  );
};

const ErweiterteCookieEinstellungen = ({ isOpen, onClose }) => {
  const [settings, setSettings] = useState({
    necessary: true, // Immer aktiviert
    analytics: false,
    marketing: false,
    preferences: false
  });

  const handleToggle = (category) => {
    if (category === 'necessary') return; // Kann nicht deaktiviert werden
    
    setSettings(prev => ({
      ...prev,
      [category]: !prev[category]
    }));
  };

  const handleSaveSettings = () => {
    // Hier würden Sie die Cookie-Einstellungen speichern
    localStorage.setItem('cookieSettings', JSON.stringify(settings));
    
    // Cookie-Banner ausblenden falls noch sichtbar
    localStorage.setItem('cookieConsent', 'configured');
    
    onClose();
  };

  const handleAcceptAll = () => {
    const allAccepted = {
      necessary: true,
      analytics: true,
      marketing: true,
      preferences: true
    };
    setSettings(allAccepted);
    localStorage.setItem('cookieSettings', JSON.stringify(allAccepted));
    localStorage.setItem('cookieConsent', 'all');
    onClose();
  };

  const handleRejectAll = () => {
    const onlyNecessary = {
      necessary: true,
      analytics: false,
      marketing: false,
      preferences: false
    };
    setSettings(onlyNecessary);
    localStorage.setItem('cookieSettings', JSON.stringify(onlyNecessary));
    localStorage.setItem('cookieConsent', 'necessary');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-950/90 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative bg-slate-900 rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-700">
          <h2 className="text-xl font-semibold text-slate-100 flex items-center">
            <Settings className="w-6 h-6 mr-2 text-blue-400" />
            Cookie-Einstellungen
          </h2>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white transition-colors"
            aria-label="Cookie-Einstellungen schließen"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          <div className="text-slate-300 text-sm leading-relaxed">
            <p>
              Wir verwenden Cookies, um Ihnen die bestmögliche Nutzererfahrung zu bieten. 
              Sie können Ihre Einstellungen jederzeit anpassen. Weitere Informationen finden Sie in unserer 
              <button className="text-blue-400 hover:text-blue-300 underline ml-1">
                Datenschutzerklärung
              </button>.
            </p>
          </div>

          {/* Cookie Categories */}
          <div className="space-y-4">
            
            {/* Notwendige Cookies */}
            <div className="flex items-center justify-between p-4 bg-slate-800 rounded-lg">
              <div className="flex-1">
                <h4 className="font-medium text-white mb-1">Notwendige Cookies</h4>
                <p className="text-sm text-slate-400">
                  Diese Cookies sind für die Grundfunktionen der Website erforderlich und können nicht deaktiviert werden.
                </p>
                <div className="mt-2 text-xs text-slate-500">
                  Beispiele: Session-Management, Sicherheit, Cookie-Einstellungen
                </div>
              </div>
              <div className="ml-4">
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-slate-400">Immer aktiv</span>
                  <div className="w-12 h-6 bg-green-600 rounded-full flex items-center justify-end px-1">
                    <div className="w-4 h-4 bg-white rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Analyse-Cookies */}
            <div className="flex items-center justify-between p-4 bg-slate-800 rounded-lg">
              <div className="flex-1">
                <h4 className="font-medium text-white mb-1">Analyse-Cookies</h4>
                <p className="text-sm text-slate-400">
                  Helfen uns zu verstehen, wie Besucher mit der Website interagieren, um die Benutzererfahrung zu verbessern.
                </p>
                <div className="mt-2 text-xs text-slate-500">
                  Beispiele: Google Analytics, Besucherstatistiken, Heatmaps
                </div>
              </div>
              <div className="ml-4">
                <button
                  onClick={() => handleToggle('analytics')}
                  className={`w-12 h-6 rounded-full flex items-center transition-colors ${
                    settings.analytics ? 'bg-blue-600 justify-end' : 'bg-slate-600 justify-start'
                  } px-1`}
                >
                  <div className="w-4 h-4 bg-white rounded-full"></div>
                </button>
              </div>
            </div>

            {/* Marketing-Cookies */}
            <div className="flex items-center justify-between p-4 bg-slate-800 rounded-lg">
              <div className="flex-1">
                <h4 className="font-medium text-white mb-1">Marketing-Cookies</h4>
                <p className="text-sm text-slate-400">
                  Werden verwendet, um personalisierte Werbung anzuzeigen und die Effektivität von Werbekampagnen zu messen.
                </p>
                <div className="mt-2 text-xs text-slate-500">
                  Beispiele: Facebook Pixel, Google Ads, Retargeting
                </div>
              </div>
              <div className="ml-4">
                <button
                  onClick={() => handleToggle('marketing')}
                  className={`w-12 h-6 rounded-full flex items-center transition-colors ${
                    settings.marketing ? 'bg-blue-600 justify-end' : 'bg-slate-600 justify-start'
                  } px-1`}
                >
                  <div className="w-4 h-4 bg-white rounded-full"></div>
                </button>
              </div>
            </div>

            {/* Präferenz-Cookies */}
            <div className="flex items-center justify-between p-4 bg-slate-800 rounded-lg">
              <div className="flex-1">
                <h4 className="font-medium text-white mb-1">Präferenz-Cookies</h4>
                <p className="text-sm text-slate-400">
                  Speichern Ihre Einstellungen und Präferenzen, um Ihnen eine personalisierte Erfahrung zu bieten.
                </p>
                <div className="mt-2 text-xs text-slate-500">
                  Beispiele: Spracheinstellungen, Theme-Präferenzen, Formular-Daten
                </div>
              </div>
              <div className="ml-4">
                <button
                  onClick={() => handleToggle('preferences')}
                  className={`w-12 h-6 rounded-full flex items-center transition-colors ${
                    settings.preferences ? 'bg-blue-600 justify-end' : 'bg-slate-600 justify-start'
                  } px-1`}
                >
                  <div className="w-4 h-4 bg-white rounded-full"></div>
                </button>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-slate-700">
            <button
              onClick={handleRejectAll}
              className="flex-1 bg-slate-700 hover:bg-slate-600 text-white px-4 py-3 rounded-lg font-medium transition-colors"
            >
              Nur notwendige
            </button>
            <button
              onClick={handleSaveSettings}
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-lg font-medium transition-colors flex items-center justify-center"
            >
              <Check size={16} className="mr-2" />
              Auswahl speichern
            </button>
            <button
              onClick={handleAcceptAll}
              className="flex-1 bg-green-600 hover:bg-green-700 text-white px-4 py-3 rounded-lg font-medium transition-colors"
            >
              Alle akzeptieren
            </button>
          </div>

          {/* Info */}
          <div className="text-xs text-slate-500 text-center">
            Sie können Ihre Einstellungen jederzeit über den Cookie-Button ändern.
          </div>
        </div>
      </div>
    </div>
  );
};

export { CookieWiderrufButton, ErweiterteCookieEinstellungen };
