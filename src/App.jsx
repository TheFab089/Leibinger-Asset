import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent } from '@/components/ui/card.jsx'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { 
  Handshake, 
  TrendingUp, 
  Users, 
  Building, 
  MapPin, 
  Target,
  CheckCircle,
  ArrowRight,
  X,
  Phone,
  Mail
} from 'lucide-react'
import businessGrowthImg from './assets/business-growth.jpg'
import businessHandshakeImg from './assets/business-handshake.jpg'
import seniorBusinessmanImg from './assets/senior-businessman.jpg'
import logoWhite from './assets/logo-white.png'
import backgroundVideo from './assets/LeibingerHomepage.mp4'

import ContactForm from './components/ContactForm.jsx'
import ProfessionalValuationTool from './components/ProfessionalValuationTool.jsx'
import CookieBanner from './components/CookieBanner.jsx'
import MobileNavigation from './components/MobileNavigation.jsx'
import ImpressumModal from './components/ImpressumModal.jsx'
import SEOHead from './components/SEOHead.jsx'
import ErweiterteDatenschutzerklaerung from './components/ErweiterteDatenschutzerklaerung.jsx'
import { CookieWiderrufButton, ErweiterteCookieEinstellungen } from './components/CookieWiderrufButton.jsx'
import FAQSection from './components/FAQSection.jsx'
import './App.css'

function App() {
  const [showCookieBanner, setShowCookieBanner] = useState(true)
  const [showPrivacyModal, setShowPrivacyModal] = useState(false)
  const [showImpressumModal, setShowImpressumModal] = useState(false)
  const [showCookieSettingsModal, setShowCookieSettingsModal] = useState(false)
  const [showContactForm, setShowContactForm] = useState(false)
  const [showValuationTool, setShowValuationTool] = useState(false)
  const [showExtendedCookieSettings, setShowExtendedCookieSettings] = useState(false)

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const openContactForm = () => setShowContactForm(true)
  const openValuationTool = () => setShowValuationTool(true)

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <SEOHead />
      {/* Header */}
      <header className="fixed top-0 w-full bg-slate-950/95 backdrop-blur-sm z-50 border-b border-slate-800">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img 
                src={logoWhite} 
                alt="LEIBINGER ASSET MANAGEMENT" 
                className="h-8 w-auto filter brightness-0 invert"
              />
            </div>
            <nav className="hidden md:flex space-x-8">
              <Button 
                variant="ghost" 
                onClick={() => scrollToSection('wachstum')} 
                className="text-slate-300 hover:text-white hover:bg-slate-800/50 transition-all duration-200 font-medium"
              >
                Wachstum
              </Button>
              <Button 
                variant="ghost" 
                onClick={() => scrollToSection('beteiligung')} 
                className="text-slate-300 hover:text-white hover:bg-slate-800/50 transition-all duration-200 font-medium"
              >
                Beteiligung
              </Button>
              <Button 
                variant="ghost" 
                onClick={() => scrollToSection('nachfolge')} 
                className="text-slate-300 hover:text-white hover:bg-slate-800/50 transition-all duration-200 font-medium"
              >
                Nachfolge
              </Button>
              <Button 
                variant="ghost" 
                onClick={openValuationTool}
                className="text-slate-300 hover:text-white hover:bg-slate-800/50 transition-all duration-200 font-medium"
              >
                Unternehmensbewertung
              </Button>
              <Button 
                variant="ghost" 
                onClick={() => scrollToSection('about-us')}
                className="text-slate-300 hover:text-white hover:bg-slate-800/50 transition-all duration-200 font-medium"
              >
                Philosophie
              </Button>
              <Button 
                variant="ghost" 
                onClick={() => scrollToSection('investment-profile')} 
                className="text-slate-300 hover:text-white hover:bg-slate-800/50 transition-all duration-200 font-medium"
              >
                Investitionsprofil
              </Button>
              <Button 
                variant="ghost" 
                onClick={openContactForm}
                className="text-slate-300 hover:text-white hover:bg-slate-800/50 transition-all duration-200 font-medium"
              >
                Kontakt
              </Button>
            </nav>
            
            {/* Mobile Navigation */}
            <MobileNavigation 
              scrollToSection={scrollToSection}
              openContactForm={openContactForm}
              openValuationTool={openValuationTool}
            />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-24 pb-20 px-6 overflow-hidden min-h-screen flex items-center">
        <video 
          src={backgroundVideo} 
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0 opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-950/50 to-slate-950/70 z-10"></div>
        
        <div className="container mx-auto text-center relative z-20">
          <h1 className="text-5xl md:text-7xl font-light mb-8 leading-tight">
            Ihr Partner für<br />
            <span className="font-medium text-slate-200">Wachstum</span>, <span className="font-medium text-slate-200">Beteiligung</span><br />
            und <span className="font-medium text-slate-200">Nachfolge</span><br />
            <span className="text-3xl md:text-4xl text-slate-400 font-light">im Mittelstand</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-4xl mx-auto font-light leading-relaxed">
            Wir begleiten Unternehmer aus traditionellen Branchen in Bayern – von der Gründung über die Skalierung bis zur erfolgreichen Unternehmensübergabe. Persönlich, partnerschaftlich und mit einem starken Netzwerk.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <Button 
              onClick={openValuationTool}
              className="bg-slate-700 hover:bg-slate-600 text-slate-100 hover:text-white border border-slate-600 hover:border-slate-500 px-10 py-4 text-lg font-medium transition-all duration-300"
            >
              Unternehmenswert berechnen
            </Button>
            <Button 
              onClick={openContactForm}
              className="bg-slate-600 hover:bg-slate-500 text-slate-100 hover:text-white border border-slate-500 hover:border-slate-400 px-10 py-4 text-lg font-medium transition-all duration-300"
            >
              Kostenloses Erstgespräch
            </Button>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-8 justify-center text-sm text-slate-400">
            <div className="flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-slate-300" />
              <span>Kostenlos in 5 Minuten</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-slate-300" />
              <span>Professionelle Methodik</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-slate-300" />
              <span>Sofortiges Ergebnis</span>
            </div>
          </div>
        </div>
      </section>

      {/* Wachstum Section */}
      <section id="wachstum" className="py-24 px-6 bg-slate-900/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-slate-800 text-slate-200 mb-6 px-4 py-2 text-sm font-medium">
              Für Gründer & Wachstumsunternehmen
            </Badge>
          </div>
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-light mb-8 leading-tight">
                Nachhaltiges Wachstum durch<br />
                <span className="font-medium">strategische Partnerschaften</span>
              </h2>
              <p className="text-slate-300 mb-8 text-lg leading-relaxed">
                Sie haben eine starke Vision für Ihr Unternehmen, aber das Tagesgeschäft und fehlende Strukturen bremsen Ihr Wachstum? Wir helfen Ihnen, solide Prozesse aufzubauen, Ihre Effizienz zu steigern und Ihr Unternehmen nachhaltig auf über 1 Mio. EUR Umsatz zu skalieren.
              </p>
              <ul className="space-y-4 mb-10">
                <li className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-slate-300 mt-1 flex-shrink-0" />
                  <span className="text-slate-200">Strategische Geschäftsplanung & Business Model Development</span>
                </li>
                <li className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-slate-300 mt-1 flex-shrink-0" />
                  <span className="text-slate-200">Prozessoptimierung & Digitalisierung</span>
                </li>
                <li className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-slate-300 mt-1 flex-shrink-0" />
                  <span className="text-slate-200">Finanzplanung & Controlling</span>
                </li>
                <li className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-slate-300 mt-1 flex-shrink-0" />
                  <span className="text-slate-200">Zugang zu unserem Experten-Netzwerk</span>
                </li>
              </ul>
              <div className="space-y-4">
                <Button 
                  onClick={openContactForm}
                  className="bg-slate-700 hover:bg-slate-600 text-slate-100 hover:text-white border border-slate-600 hover:border-slate-500 px-8 py-3 font-medium transition-all duration-300 w-full sm:w-auto"
                >
                  Kostenloses Wachstums-Coaching anfordern
                </Button>
                <br />
                <Button 
                  onClick={openValuationTool}
                  className="bg-slate-600 hover:bg-slate-500 text-slate-100 hover:text-white border border-slate-500 hover:border-slate-400 px-8 py-3 font-medium transition-all duration-300 w-full sm:w-auto"
                >
                  Wachstumspotential ermitteln
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src={businessGrowthImg} 
                alt="Geschäftswachstum durch strategische Partnerschaften - Leibinger Asset Management unterstützt Unternehmer bei der Skalierung" 
                className="rounded-lg shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Beteiligung Section */}
      <section id="beteiligung" className="py-24 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-slate-800 text-slate-200 mb-6 px-4 py-2 text-sm font-medium">
              Für Unternehmensbeteiligungen
            </Badge>
          </div>
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img 
                src={businessHandshakeImg} 
                alt="Strategische Unternehmensbeteiligung - Handschlag zwischen Geschäftspartnern als Symbol für vertrauensvolle Zusammenarbeit" 
                className="rounded-lg shadow-2xl w-full h-auto"
              />
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl font-light mb-8 leading-tight">
                Wir investieren direkt<br />
                <span className="font-medium">in Ihr Unternehmen</span>
              </h2>
              <p className="text-slate-300 mb-8 text-lg leading-relaxed">
                Sie suchen einen starken Partner, der nicht nur Kapital einbringt, sondern sich aktiv an der Weiterentwicklung Ihres Unternehmens beteiligt? Wir investieren direkt in etablierte Betriebe und bringen unsere Expertise, unser Netzwerk und unsere Erfahrung ein.
              </p>
              <ul className="space-y-4 mb-10">
                <li className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-slate-300 mt-1 flex-shrink-0" />
                  <span className="text-slate-200">Direkte Beteiligung als strategischer Partner</span>
                </li>
                <li className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-slate-300 mt-1 flex-shrink-0" />
                  <span className="text-slate-200">Aktive operative Unterstützung und Expertise</span>
                </li>
                <li className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-slate-300 mt-1 flex-shrink-0" />
                  <span className="text-slate-200">Zugang zu unserem Experten-Netzwerk</span>
                </li>
                <li className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-slate-300 mt-1 flex-shrink-0" />
                  <span className="text-slate-200">Langfristige Partnerschaft für nachhaltiges Wachstum</span>
                </li>
              </ul>
              <Button 
                onClick={openContactForm}
                className="bg-slate-700 hover:bg-slate-600 text-slate-100 hover:text-white border border-slate-600 hover:border-slate-500 px-8 py-3 font-medium transition-all duration-300"
              >
                Partnerschaftsgespräch vereinbaren
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Nachfolge Section */}
      <section id="nachfolge" className="py-24 px-6 bg-slate-900/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-slate-800 text-slate-200 mb-6 px-4 py-2 text-sm font-medium">
              Für Nachfolgeregelung
            </Badge>
          </div>
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-light mb-8 leading-tight">
                Die Zukunft Ihres<br />
                <span className="font-medium">Unternehmens sichern</span>
              </h2>
              <p className="text-slate-300 mb-8 text-lg leading-relaxed">
                Der Ruhestand rückt näher und Sie möchten sicherstellen, dass Ihr Unternehmen erfolgreich weitergeführt wird? Eine gut geplante Nachfolge ist der Schlüssel zur Sicherung Ihres Lebenswerks. Wir begleiten Sie durch den gesamten Prozess.
              </p>
              <ul className="space-y-4 mb-10">
                <li className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-slate-300 mt-1 flex-shrink-0" />
                  <span className="text-slate-200">Entwicklung einer langfristigen Nachfolgestrategie</span>
                </li>
                <li className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-slate-300 mt-1 flex-shrink-0" />
                  <span className="text-slate-200">Suche und Auswahl geeigneter Nachfolger</span>
                </li>
                <li className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-slate-300 mt-1 flex-shrink-0" />
                  <span className="text-slate-200">Begleitung bei Vertragsverhandlungen und Übergabe</span>
                </li>
                <li className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-slate-300 mt-1 flex-shrink-0" />
                  <span className="text-slate-200">Sicherstellung der Kontinuität und des Unternehmenswerts</span>
                </li>
              </ul>
              <Button 
                onClick={openContactForm}
                className="bg-slate-700 hover:bg-slate-600 text-slate-100 hover:text-white border border-slate-600 hover:border-slate-500 px-8 py-3 font-medium transition-all duration-300"
              >
                Nachfolgeplanung starten
              </Button>
            </div>
            <div className="relative">
              <img 
                src={seniorBusinessmanImg} 
                alt="Erfahrener Unternehmer plant seine Nachfolge - Symbol für die Sicherung des Lebenswerks mit Leibinger Asset Management" 
                className="rounded-lg shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about-us" className="py-24 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-light mb-16">Unsere Philosophie</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <Card className="bg-slate-900 border-slate-800 text-center p-8 transform hover:-translate-y-2 transition-transform duration-300 shadow-lg hover:shadow-slate-700/50">
              <CardContent>
                <div className="flex justify-center mb-6">
                  <div className="bg-slate-800 p-4 rounded-full">
                    <Handshake className="w-8 h-8 text-slate-300" />
                  </div>
                </div>
                <h3 className="text-2xl font-medium mb-4">Partnerschaftlich</h3>
                <p className="text-slate-400 leading-relaxed">Wir arbeiten auf Augenhöhe mit Ihnen zusammen und treffen Entscheidungen gemeinsam.</p>
              </CardContent>
            </Card>
            <Card className="bg-slate-900 border-slate-800 text-center p-8 transform hover:-translate-y-2 transition-transform duration-300 shadow-lg hover:shadow-slate-700/50">
              <CardContent>
                <div className="flex justify-center mb-6">
                  <div className="bg-slate-800 p-4 rounded-full">
                    <TrendingUp className="w-8 h-8 text-slate-300" />
                  </div>
                </div>
                <h3 className="text-2xl font-medium mb-4">Langfristig</h3>
                <p className="text-slate-400 leading-relaxed">Unser Ziel ist die nachhaltige Entwicklung Ihres Unternehmens, nicht der schnelle Exit.</p>
              </CardContent>
            </Card>
            <Card className="bg-slate-900 border-slate-800 text-center p-8 transform hover:-translate-y-2 transition-transform duration-300 shadow-lg hover:shadow-slate-700/50">
              <CardContent>
                <div className="flex justify-center mb-6">
                  <div className="bg-slate-800 p-4 rounded-full">
                    <Users className="w-8 h-8 text-slate-300" />
                  </div>
                </div>
                <h3 className="text-2xl font-medium mb-4">Persönlich</h3>
                <p className="text-slate-400 leading-relaxed">Sie haben einen festen Ansprechpartner, der Sie und Ihr Unternehmen genau kennt.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>



      {/* <FAQSection /> */}

      {/* Footer */}
      <footer className="bg-slate-900/50 border-t border-slate-800 py-12 px-6">
        <div className="container mx-auto text-center text-slate-400">
          <div className="flex justify-center gap-8 mb-8">
            <a href="#" onClick={(e) => {e.preventDefault(); setShowImpressumModal(true);}} className="hover:text-white transition-colors">Impressum</a>
            <a href="#" onClick={(e) => {e.preventDefault(); setShowPrivacyModal(true);}} className="hover:text-white transition-colors">Datenschutz</a>
            <a href="#" onClick={(e) => {e.preventDefault(); openContactForm();}} className="hover:text-white transition-colors">Kontakt</a>
          </div>
          <p>&copy; {new Date().getFullYear()} Leibinger Asset Management. Alle Rechte vorbehalten.</p>
        </div>
      </footer>

      {/* Contact Form Dialog */}
      <Dialog open={showContactForm} onOpenChange={setShowContactForm}>
        <DialogContent className="bg-slate-900 border-slate-700 text-slate-100 max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-2xl font-light">Kostenloses Erstgespräch vereinbaren</DialogTitle>
          </DialogHeader>
          <ContactForm />
        </DialogContent>
      </Dialog>

      {/* Valuation Tool Dialog */}
      <Dialog open={showValuationTool} onOpenChange={setShowValuationTool}>
        <DialogContent className="bg-slate-900 border-slate-700 text-slate-100 !max-w-none !w-screen !max-h-none !h-screen overflow-y-auto !m-0 !p-6 rounded-none !fixed !inset-0 !transform-none !translate-x-0 !translate-y-0">
          <DialogHeader>
            <DialogTitle className="text-4xl font-light text-white mb-4">Professionelle Unternehmensbewertung</DialogTitle>
          </DialogHeader>
          <ProfessionalValuationTool isOpen={showValuationTool} />
        </DialogContent>
      </Dialog>

      {/* Privacy Modal */}
      <Dialog open={showPrivacyModal} onOpenChange={setShowPrivacyModal}>
        <DialogContent className="bg-slate-900 border-slate-700 text-slate-100 max-w-4xl h-[80vh] flex flex-col">
          <DialogHeader>
            <DialogTitle className="text-2xl font-light">Datenschutzerklärung</DialogTitle>
          </DialogHeader>
          <div className="flex-grow overflow-y-auto pr-4">
            <ErweiterteDatenschutzerklaerung />
          </div>
        </DialogContent>
      </Dialog>

      {/* Impressum Modal */}
      <Dialog open={showImpressumModal} onOpenChange={setShowImpressumModal}>
        <DialogContent className="bg-slate-900 border-slate-700 text-slate-100 max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-2xl font-light">Impressum</DialogTitle>
          </DialogHeader>
          <ImpressumModal />
        </DialogContent>
      </Dialog>

      {/* Cookie Settings Modal */}
      <Dialog open={showExtendedCookieSettings} onOpenChange={setShowExtendedCookieSettings}>
        <DialogContent className="bg-slate-900 border-slate-700 text-slate-100 max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-2xl font-light">Cookie-Einstellungen</DialogTitle>
          </DialogHeader>
          <ErweiterteCookieEinstellungen />
        </DialogContent>
      </Dialog>

      <CookieWiderrufButton onClick={() => setShowExtendedCookieSettings(true)} />

      {showCookieBanner && (
        <CookieBanner 
          onAcceptAll={() => setShowCookieBanner(false)}
          onRejectAll={() => setShowCookieBanner(false)}
          onCustomize={() => setShowExtendedCookieSettings(true)}
          setShowPrivacyModal={setShowPrivacyModal}
        />
      )}
    </div>
  );
}

export default App

