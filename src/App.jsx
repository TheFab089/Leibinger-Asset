import { useState } from 'react'
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
import './App.css'

function App() {
  const [showCookieBanner, setShowCookieBanner] = useState(true)
  const [showPrivacyModal, setShowPrivacyModal] = useState(false)
  const [showImpressumModal, setShowImpressumModal] = useState(false)
  const [showCookieSettingsModal, setShowCookieSettingsModal] = useState(false)
  const [showContactForm, setShowContactForm] = useState(false)
  const [showValuationTool, setShowValuationTool] = useState(false)

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
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-24 pb-20 px-6 overflow-hidden min-h-screen flex items-center">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="absolute inset-0 w-full h-full object-cover z-0 opacity-30"
        >
          <source src={backgroundVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
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
                alt="Business Growth Meeting" 
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
                alt="Business Partnership" 
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
                  <span className="text-slate-200">Begleitung des Übergabeprozesses</span>
                </li>
                <li className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-slate-300 mt-1 flex-shrink-0" />
                  <span className="text-slate-200">Rechtliche und steuerliche Strukturierung</span>
                </li>
              </ul>
              <div className="space-y-4">
                <Button 
                  onClick={openContactForm}
                  className="bg-slate-700 hover:bg-slate-600 text-slate-100 hover:text-white border border-slate-600 hover:border-slate-500 px-8 py-3 font-medium transition-all duration-300 w-full sm:w-auto"
                >
                  Nachfolge-Erstgespräch vereinbaren
                </Button>
                <br />
                <Button 
                  onClick={openValuationTool}
                  className="bg-slate-600 hover:bg-slate-500 text-slate-100 hover:text-white border border-slate-500 hover:border-slate-400 px-8 py-3 font-medium transition-all duration-300 w-full sm:w-auto"
                >
                  Unternehmenswert ermitteln
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src={seniorBusinessmanImg} 
                alt="Senior Businessman" 
                className="rounded-lg shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section id="about-us" className="py-24 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-light mb-16 leading-tight">
            Mehr als nur ein Investor –<br />
            <span className="font-medium">Wir sind Ihr Partner</span>
          </h2>
          <p className="text-xl text-slate-300 mb-16 max-w-4xl mx-auto leading-relaxed">
            Als Asset Management Unternehmen haben wir es uns zur Aufgabe gemacht, den traditionellen Mittelstand in Bayern zu stärken. Wir kennen die Herausforderungen und die Leidenschaft, die hinter jedem Betrieb stecken.
          </p>
          <div className="grid md:grid-cols-3 gap-12">
            <Card className="bg-slate-900/50 border-slate-800 hover:bg-slate-900/70 transition-all duration-300">
              <CardContent className="p-8 text-center">
                <Handshake className="w-16 h-16 text-slate-300 mx-auto mb-6" />
                <h3 className="text-2xl font-medium mb-4 text-white">Partnerschaft auf Augenhöhe</h3>
                <p className="text-slate-400 leading-relaxed">Wir arbeiten mit Ihnen zusammen, nicht nur für Sie.</p>
              </CardContent>
            </Card>
            <Card className="bg-slate-900/50 border-slate-800 hover:bg-slate-900/70 transition-all duration-300">
              <CardContent className="p-8 text-center">
                <Building className="w-16 h-16 text-slate-300 mx-auto mb-6" />
                <h3 className="text-2xl font-medium mb-4 text-white">Tiefes Branchenverständnis</h3>
                <p className="text-slate-400 leading-relaxed">Wir sprechen die Sprache traditioneller Unternehmen.</p>
              </CardContent>
            </Card>
            <Card className="bg-slate-900/50 border-slate-800 hover:bg-slate-900/70 transition-all duration-300">
              <CardContent className="p-8 text-center">
                <TrendingUp className="w-16 h-16 text-slate-300 mx-auto mb-6" />
                <h3 className="text-2xl font-medium mb-4 text-white">Nachhaltiger Erfolg</h3>
                <p className="text-slate-400 leading-relaxed">Wir denken in Generationen, nicht in Quartalen.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Investment Profile Section */}
      <section id="investment-profile" className="py-24 px-6 bg-slate-900/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light mb-6 leading-tight">
              Unser <span className="font-medium">Investitionsprofil</span>
            </h2>
            <p className="text-xl text-slate-300">Passgenaue Lösungen für Ihr Unternehmen</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <TrendingUp className="w-8 h-8 text-slate-300" />
                  <h3 className="text-xl font-medium text-white">Unternehmensgröße</h3>
                </div>
                <ul className="space-y-3 text-slate-300">
                  <li>• Umsatz: 500K - 10M EUR</li>
                  <li>• Mitarbeiter: 5 - 100</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <Building className="w-8 h-8 text-slate-300" />
                  <h3 className="text-xl font-medium text-white">Zielbranchen</h3>
                </div>
                <ul className="space-y-3 text-slate-300">
                  <li>• Handwerk</li>
                  <li>• Bau</li>
                  <li>• Industrie</li>
                  <li>• Dienstleistung</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <MapPin className="w-8 h-8 text-slate-300" />
                  <h3 className="text-xl font-medium text-white">Geografischer Fokus</h3>
                </div>
                <ul className="space-y-3 text-slate-300">
                  <li>• Bayern (Schwerpunkt)</li>
                  <li>• München & Umgebung</li>
                  <li>• Traditionelle Wirtschaftsregionen</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <Handshake className="w-8 h-8 text-slate-300" />
                  <h3 className="text-xl font-medium text-white">Beteiligungsart</h3>
                </div>
                <ul className="space-y-3 text-slate-300">
                  <li>• Mehrheitsbeteiligungen</li>
                  <li>• Minderheitsbeteiligungen</li>
                  <li>• Je nach Absprache</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <TrendingUp className="w-8 h-8 text-slate-300" />
                  <h3 className="text-xl font-medium text-white">Unternehmenssituation</h3>
                </div>
                <ul className="space-y-3 text-slate-300">
                  <li>• Etablierte Unternehmen</li>
                  <li>• Junge Unternehmen</li>
                  <li>• Start-ups mit Potenzial</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <Target className="w-8 h-8 text-slate-300" />
                  <h3 className="text-xl font-medium text-white">Investitionsanlässe</h3>
                </div>
                <ul className="space-y-3 text-slate-300">
                  <li>• Nachfolgeproblematik</li>
                  <li>• Wachstumsfinanzierung</li>
                  <li>• Überwindung von Stagnation</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Investment Process Section */}
      <section className="py-24 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light mb-6 leading-tight text-white">
              Unser Investitionsprozess
            </h2>
            <p className="text-xl text-slate-300 max-w-4xl mx-auto">
              Transparent, professionell und partnerschaftlich – so gestalten wir unsere Beteiligungen.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-slate-700 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                <h3 className="text-xl font-medium text-white mb-4">Erstgespräch</h3>
                <p className="text-slate-300 leading-relaxed">
                  Unverbindliches Kennenlernen und Potenzialanalyse
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-slate-700 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <h3 className="text-xl font-medium text-white mb-4">Due Diligence</h3>
                <p className="text-slate-300 leading-relaxed">
                  Detaillierte Prüfung und Bewertung des Unternehmens
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-slate-700 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <h3 className="text-xl font-medium text-white mb-4">Verhandlung</h3>
                <p className="text-slate-300 leading-relaxed">
                  Faire Strukturierung der Beteiligung
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-slate-700 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">4</span>
                </div>
                <h3 className="text-xl font-medium text-white mb-4">Partnerschaft</h3>
                <p className="text-slate-300 leading-relaxed">
                  Langfristige Zusammenarbeit und Entwicklung
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-24 px-6 bg-slate-900/50">
        <div className="container mx-auto text-center max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-light mb-6 leading-tight text-white">
            Bereit für den nächsten Schritt?
          </h2>
          <p className="text-xl text-slate-300 mb-12 leading-relaxed">
            Lassen Sie uns über Ihr Unternehmen sprechen. Vereinbaren Sie noch heute ein kostenloses Erstgespräch oder nutzen Sie unsere professionelle Unternehmensbewertung.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button 
              onClick={openContactForm}
              className="bg-slate-700 hover:bg-slate-600 text-slate-100 hover:text-white border border-slate-600 hover:border-slate-500 px-10 py-4 text-lg font-medium transition-all duration-300"
            >
              Kostenloses Erstgespräch
            </Button>
            <Button 
              onClick={openValuationTool}
              className="bg-slate-600 hover:bg-slate-500 text-slate-100 hover:text-white border border-slate-500 hover:border-slate-400 px-10 py-4 text-lg font-medium transition-all duration-300"
            >
              Unternehmenswert berechnen
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 bg-slate-950 border-t border-slate-800">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
              <img 
                src={logoWhite} 
                alt="LEIBINGER ASSET MANAGEMENT" 
                className="h-8 w-auto mb-6 filter brightness-0 invert"
              />
              <p className="text-slate-400 leading-relaxed">
                Ihr Partner für Wachstum, Beteiligung und Nachfolge im Mittelstand.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-medium mb-4 text-white">Kontakt</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-slate-400" />
                  <span className="text-slate-400">+49 (0) 89 123 456 789</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-slate-400" />
                  <span className="text-slate-400">fl@leibinger-am.de</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-medium mb-4 text-white">Rechtliches</h4>
              <div className="space-y-2">
                <Button 
                  variant="ghost" 
                  onClick={() => setShowPrivacyModal(true)}
                  className="text-slate-400 hover:text-slate-200 p-0 h-auto font-normal"
                >
                  Datenschutz
                </Button>
                <br />
                <Button 
                  variant="ghost" 
                  className="text-slate-400 hover:text-slate-200 p-0 h-auto font-normal"
                >
                  Impressum
                </Button>
              </div>
            </div>
          </div>
          
          <div className="pt-8 border-t border-slate-800 text-center">
            <p className="text-slate-500">
              © 2024 Leibinger Asset Management. Alle Rechte vorbehalten.
            </p>
          </div>
        </div>
      </footer>

      {/* Contact Form Dialog */}
      <Dialog open={showContactForm} onOpenChange={setShowContactForm}>
        <DialogContent className="bg-slate-900 border-slate-700 text-slate-100 max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-2xl font-light">Kostenloses Erstgespräch vereinbaren</DialogTitle>
          </DialogHeader>
          <ContactForm isOpen={showContactForm} />
        </DialogContent>
      </Dialog>

      {/* Valuation Tool Dialog */}
      <Dialog open={showValuationTool} onOpenChange={setShowValuationTool}>
        <DialogContent className="bg-slate-900 border-slate-700 text-slate-100 max-w-[95vw] w-[95vw] max-h-[95vh] h-[95vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-4xl font-light text-white mb-4">Professionelle Unternehmensbewertung</DialogTitle>
          </DialogHeader>
          <ProfessionalValuationTool isOpen={showValuationTool} />
        </DialogContent>
      </Dialog>

      {/* Privacy Modal */}
      <Dialog open={showPrivacyModal} onOpenChange={setShowPrivacyModal}>
        <DialogContent className="bg-slate-900 border-slate-700 text-slate-100 max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-light">Datenschutzerklärung</DialogTitle>
          </DialogHeader>
          <div className="space-y-6 text-slate-300">
            <div>
              <h3 className="text-lg font-medium mb-3 text-white">1. Verantwortliche Stelle</h3>
              <p className="leading-relaxed mb-3">
                Verantwortlich für die Datenverarbeitung auf dieser Website ist:
              </p>
              <p className="leading-relaxed">
                <strong>Leibinger Asset Management</strong><br />
                E-Mail: fl@leibinger-am.de
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-3 text-white">2. Cookies und Tracking</h3>
              <p className="leading-relaxed mb-3">
                Diese Website verwendet Cookies zur Verbesserung der Nutzererfahrung. Wir unterscheiden zwischen:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Technisch notwendige Cookies:</strong> Ermöglichen grundlegende Funktionen der Website (Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO)</li>
                <li><strong>Analyse-Cookies:</strong> Helfen uns, die Website zu verbessern (nur mit Ihrer Einwilligung gemäß Art. 6 Abs. 1 lit. a DSGVO)</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-3 text-white">3. Kontaktformular</h3>
              <p className="leading-relaxed">
                Bei Nutzung des Kontaktformulars werden Ihre Angaben zur Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. 
                Diese Daten geben wir nicht ohne Ihre Einwilligung weiter. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-3 text-white">4. Ihre Rechte</h3>
              <p className="leading-relaxed mb-3">
                Sie haben folgende Rechte bezüglich Ihrer personenbezogenen Daten:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Recht auf Auskunft (Art. 15 DSGVO)</li>
                <li>Recht auf Berichtigung (Art. 16 DSGVO)</li>
                <li>Recht auf Löschung (Art. 17 DSGVO)</li>
                <li>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
                <li>Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</li>
                <li>Recht auf Widerspruch (Art. 21 DSGVO)</li>
                <li>Recht auf Widerruf der Einwilligung (Art. 7 Abs. 3 DSGVO)</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-3 text-white">5. Datensicherheit</h3>
              <p className="leading-relaxed">
                Wir verwenden geeignete technische und organisatorische Sicherheitsmaßnahmen, um Ihre Daten gegen zufällige oder vorsätzliche Manipulationen, 
                teilweisen oder vollständigen Verlust, Zerstörung oder gegen den unbefugten Zugriff Dritter zu schützen.
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-800 py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-slate-400 text-sm">
                © 2024 Leibinger Asset Management. Alle Rechte vorbehalten.
              </p>
            </div>
            <div className="flex space-x-6">
              <Button
                variant="ghost"
                onClick={() => setShowImpressumModal(true)}
                className="text-slate-400 hover:text-white text-sm"
              >
                Impressum
              </Button>
              <Button
                variant="ghost"
                onClick={() => setShowPrivacyModal(true)}
                className="text-slate-400 hover:text-white text-sm"
              >
                Datenschutz
              </Button>
            </div>
          </div>
        </div>
      </footer>

      {/* Impressum Modal */}
      <Dialog open={showImpressumModal} onOpenChange={setShowImpressumModal}>
        <DialogContent className="bg-slate-900 border-slate-700 text-slate-100 max-w-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-white">Impressum</DialogTitle>
          </DialogHeader>
          <div className="space-y-6 text-slate-300">
            <div>
              <h3 className="text-lg font-medium mb-3 text-white">Angaben gemäß § 5 TMG</h3>
              <p className="leading-relaxed">
                <strong>Leibinger Asset Management</strong><br />
                Musterstraße 123<br />
                80331 München<br />
                Deutschland
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-3 text-white">Kontakt</h3>
              <p className="leading-relaxed">
                Telefon: +49 (0) 89 123 456 789<br />
                E-Mail: fl@leibinger-am.de
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-3 text-white">Vertretungsberechtigte Geschäftsführung</h3>
              <p className="leading-relaxed">
                Florian Leibinger
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-3 text-white">Registereintrag</h3>
              <p className="leading-relaxed">
                Eintragung im Handelsregister<br />
                Registergericht: Amtsgericht München<br />
                Registernummer: HRB 123456
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-3 text-white">Umsatzsteuer-ID</h3>
              <p className="leading-relaxed">
                Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
                DE123456789
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-3 text-white">Haftungsausschluss</h3>
              <p className="leading-relaxed">
                Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Cookie Settings Modal */}
      <Dialog open={showCookieSettingsModal} onOpenChange={setShowCookieSettingsModal}>
        <DialogContent className="bg-slate-900 border-slate-700 text-slate-100 max-w-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-white">Cookie-Einstellungen</DialogTitle>
          </DialogHeader>
          <div className="space-y-6 text-slate-300">
            <div>
              <h3 className="text-lg font-medium mb-3 text-white">Cookie-Kategorien</h3>
              <p className="leading-relaxed mb-4">
                Wir verwenden verschiedene Arten von Cookies auf unserer Website. Sie können Ihre Einwilligung für jede Kategorie einzeln verwalten.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-slate-800 rounded-lg">
                <div>
                  <h4 className="font-medium text-white">Technisch notwendige Cookies</h4>
                  <p className="text-sm text-slate-400">Diese Cookies sind für die Grundfunktionen der Website erforderlich.</p>
                </div>
                <div className="text-green-400 font-medium">Immer aktiv</div>
              </div>
              
              <div className="flex items-center justify-between p-4 bg-slate-800 rounded-lg">
                <div>
                  <h4 className="font-medium text-white">Analyse-Cookies</h4>
                  <p className="text-sm text-slate-400">Helfen uns, die Website zu verbessern und das Nutzererlebnis zu optimieren.</p>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-slate-600 text-slate-300"
                >
                  Deaktiviert
                </Button>
              </div>
              
              <div className="flex items-center justify-between p-4 bg-slate-800 rounded-lg">
                <div>
                  <h4 className="font-medium text-white">Marketing-Cookies</h4>
                  <p className="text-sm text-slate-400">Werden verwendet, um personalisierte Werbung anzuzeigen.</p>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-slate-600 text-slate-300"
                >
                  Deaktiviert
                </Button>
              </div>
            </div>
            
            <div className="flex space-x-4 pt-4">
              <Button
                onClick={() => {
                  setShowCookieSettingsModal(false)
                  setShowCookieBanner(false)
                }}
                className="bg-slate-600 hover:bg-slate-500 text-white flex-1"
              >
                Auswahl speichern
              </Button>
              <Button
                onClick={() => {
                  setShowCookieSettingsModal(false)
                  setShowCookieBanner(false)
                }}
                variant="outline"
                className="border-slate-600 text-slate-300 flex-1"
              >
                Alle akzeptieren
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Cookie Banner */}
      {showCookieBanner && (
        <CookieBanner 
          onAcceptAll={() => setShowCookieBanner(false)}
          onRejectAll={() => setShowCookieBanner(false)}
          onCustomize={() => setShowCookieSettingsModal(true)}
          setShowPrivacyModal={setShowPrivacyModal}
        />
      )}
    </div>
  )
}

export default App
