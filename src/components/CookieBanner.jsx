import { Button } from '@/components/ui/button.jsx'
import { X, Cookie } from 'lucide-react'

const CookieBanner = ({ onAcceptAll, onRejectAll, onCustomize, setShowPrivacyModal }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-sm border-t border-slate-700 p-6">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="flex items-start gap-4 flex-1">
            <Cookie className="w-6 h-6 text-slate-300 mt-1 flex-shrink-0" />
            <div className="flex-1">
              <h3 className="text-lg font-medium text-slate-100 mb-2">
                Cookies & Datenschutz
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Diese Website verwendet Cookies und ähnliche Technologien zur Analyse des Nutzerverhaltens und zur Verbesserung unserer Dienstleistungen. 
                Technisch notwendige Cookies werden automatisch gesetzt. Für alle anderen Cookies benötigen wir Ihre Einwilligung.{' '}
                <button 
                  onClick={() => setShowPrivacyModal(true)}
                  className="text-slate-100 hover:underline font-medium"
                >
                  Datenschutzerklärung lesen →
                </button>
              </p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
            <Button
              variant="outline"
              onClick={onCustomize}
              className="border-slate-600 text-slate-300 hover:bg-slate-800/50 hover:text-slate-100 hover:border-slate-500 transition-all duration-200"
            >
              Cookie-Einstellungen
            </Button>
            <Button
              variant="outline"
              onClick={onRejectAll}
              className="border-slate-600 text-slate-300 hover:bg-slate-800/50 hover:text-slate-100 hover:border-slate-500 transition-all duration-200"
            >
              Nur notwendige
            </Button>
            <Button
              onClick={onAcceptAll}
              className="bg-slate-700 hover:bg-slate-600 text-slate-100 hover:text-white border border-slate-600 hover:border-slate-500 transition-all duration-200"
            >
              Alle akzeptieren
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CookieBanner
