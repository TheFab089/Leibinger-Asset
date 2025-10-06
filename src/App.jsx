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
  X
} from 'lucide-react'
import businessGrowthImg from './assets/business-growth.jpg'
import businessHandshakeImg from './assets/business-handshake.jpg'
import seniorBusinessmanImg from './assets/senior-businessman.jpg'
import './App.css'

function App() {
  const [showCookieBanner, setShowCookieBanner] = useState(true)
  const [showPrivacyModal, setShowPrivacyModal] = useState(false)

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-slate-900/95 backdrop-blur-sm z-50 border-b border-slate-800">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="text-xl font-bold">
              LEIBINGER<br />
              <span className="text-sm font-normal">ASSET MANAGEMENT</span>
            </div>
            <nav className="hidden md:flex space-x-6">
              <Button variant="ghost" onClick={() => scrollToSection('wachstum')} className="text-green-400 border border-green-400 hover:bg-green-400 hover:text-slate-900">
                Wachstum
              </Button>
              <Button variant="ghost" onClick={() => scrollToSection('beteiligung')} className="text-blue-400 border border-blue-400 hover:bg-blue-400 hover:text-slate-900">
                Beteiligung
              </Button>
              <Button variant="ghost" onClick={() => scrollToSection('nachfolge')} className="text-orange-400 border border-orange-400 hover:bg-orange-400 hover:text-slate-900">
                Nachfolge
              </Button>
              <Button variant="ghost" className="text-purple-400 border border-purple-400 hover:bg-purple-400 hover:text-slate-900">
                Unternehmensbewertung
              </Button>
              <Button variant="ghost" className="text-teal-400 border border-teal-400 hover:bg-teal-400 hover:text-slate-900">
                Philosophie
              </Button>
              <Button variant="ghost" onClick={() => scrollToSection('investitionsprofil')} className="text-pink-400 border border-pink-400 hover:bg-pink-400 hover:text-slate-900">
                Investitionsprofil
              </Button>
              <Button variant="ghost" className="text-red-400 border border-red-400 hover:bg-red-400 hover:text-slate-900">
                Kontakt
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Ihr Partner für<br />
            <span className="text-blue-400">Wachstum</span>, <span className="text-green-400">Beteiligung</span> und<br />
            <span className="text-orange-400">Nachfolge</span><br />
            <span className="text-2xl md:text-3xl text-slate-300">im Mittelstand</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-4xl mx-auto">
            Wir begleiten Unternehmer aus traditionellen Branchen in Bayern – von der Gründung über die Skalierung bis zur erfolgreichen Unternehmensübergabe. Persönlich, partnerschaftlich und mit einem starken Netzwerk.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 text-lg">
              💰 Unternehmenswert berechnen
            </Button>
            <Button variant="outline" className="border-slate-600 text-white hover:bg-slate-800 px-8 py-3 text-lg">
              Kostenloses Erstgespräch vereinbaren
            </Button>
          </div>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center text-sm text-slate-400">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Kostenlos in 5 Minuten
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Professionelle Methodik
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Sofortiges Ergebnis
            </div>
          </div>
        </div>
      </section>

      {/* Wachstum Section */}
      <section id="wachstum" className="py-16 px-4 bg-slate-800/50">
        <div className="container mx-auto">
          <div className="text-center mb-8">
            <Badge className="bg-green-600 text-white mb-4">Für Gründer & Wachstumsunternehmen</Badge>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Nachhaltiges Wachstum durch<br />
                strategische Partnerschaften.
              </h2>
              <p className="text-slate-300 mb-6 text-lg">
                Sie haben eine starke Vision für Ihr Unternehmen, aber das Tagesgeschäft und fehlende Strukturen bremsen Ihr Wachstum? Wir helfen Ihnen, solide Prozesse aufzubauen, Ihre Effizienz zu steigern und Ihr Unternehmen nachhaltig auf über 1 Mio. EUR Umsatz zu skalieren. Konzentrieren Sie sich auf Ihr Handwerk – wir kümmern uns um die strategische Entwicklung.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                  <span>Strategische Geschäftsplanung & Business Model Development</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                  <span>Prozessoptimierung & Digitalisierung</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                  <span>Finanzplanung & Controlling</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                  <span>Zugang zu unserem Experten-Netzwerk</span>
                </li>
              </ul>
              <Button className="bg-orange-600 hover:bg-orange-700 text-white mb-4">
                Jetzt kostenloses Wachstums-Coaching anfordern
              </Button>
              <br />
              <Button variant="outline" className="border-green-400 text-green-400 hover:bg-green-400 hover:text-slate-900">
                💡 Wo stehen Sie heute? Ermitteln Sie Ihr Wachstumspotential
              </Button>
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
      <section id="beteiligung" className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-8">
            <Badge className="bg-blue-600 text-white mb-4">Für Unternehmensbeteiligungen</Badge>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img 
                src={businessHandshakeImg} 
                alt="Business Partnership" 
                className="rounded-lg shadow-2xl w-full h-auto"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Wir investieren direkt<br />
                in Ihr Unternehmen.
              </h2>
              <p className="text-slate-300 mb-6 text-lg">
                Sie suchen einen starken Partner, der nicht nur Kapital einbringt, sondern sich aktiv an der Weiterentwicklung Ihres Unternehmens beteiligt? Wir investieren direkt in etablierte Betriebe und bringen unsere Expertise, unser Netzwerk und unsere Erfahrung ein. Gemeinsam entwickeln wir Ihr Unternehmen nachhaltig weiter - als echte Partner auf Augenhöhe.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                  <span>Direkte Beteiligung als strategischer Partner</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                  <span>Aktive operative Unterstützung und Expertise</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                  <span>Zugang zu unserem Experten-Netzwerk</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                  <span>Langfristige Partnerschaft für nachhaltiges Wachstum</span>
                </li>
              </ul>
              <Button className="bg-orange-600 hover:bg-orange-700 text-white">
                Partnerschaftsgespräch vereinbaren
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Nachfolge Section */}
      <section id="nachfolge" className="py-16 px-4 bg-slate-800/50">
        <div className="container mx-auto">
          <div className="text-center mb-8">
            <Badge className="bg-orange-600 text-white mb-4">Für Nachfolgeregelung</Badge>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Die Zukunft Ihres<br />
                Unternehmens sichern.
              </h2>
              <p className="text-slate-300 mb-6 text-lg">
                Der Ruhestand rückt näher und Sie möchten sicherstellen, dass Ihr Unternehmen erfolgreich weitergeführt wird? Eine gut geplante Nachfolge ist der Schlüssel zur Sicherung Ihres Lebenswerks. Wir begleiten Sie durch den gesamten Prozess – von der Suche nach dem richtigen Nachfolger bis zur reibungslosen Übergabe. So können Sie Ihren Ruhestand genießen, mit dem Wissen, dass Ihr Unternehmen in eine erfolgreiche Zukunft geht.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-orange-400 mt-1 flex-shrink-0" />
                  <span>Entwicklung einer langfristigen Nachfolgestrategie</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-orange-400 mt-1 flex-shrink-0" />
                  <span>Suche und Auswahl geeigneter Nachfolger (intern/extern)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-orange-400 mt-1 flex-shrink-0" />
                  <span>Begleitung des Übergabeprozesses</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-orange-400 mt-1 flex-shrink-0" />
                  <span>Rechtliche und steuerliche Strukturierung</span>
                </li>
              </ul>
              <Button className="bg-orange-600 hover:bg-orange-700 text-white mb-4">
                Ihre Nachfolge in sicheren Händen – Erstgespräch vereinbaren
              </Button>
              <br />
              <Button variant="outline" className="border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-slate-900">
                💡 Schritt 1 der Nachfolgeplanung: Ermitteln Sie den Wert Ihres Lebenswerks
              </Button>
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
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Mehr als nur ein Investor –<br />
            Wir sind Ihr Partner.
          </h2>
          <p className="text-lg text-slate-300 mb-12 max-w-4xl mx-auto">
            Als Asset Management Unternehmen haben wir es uns zur Aufgabe gemacht, den traditionellen Mittelstand in Bayern zu stärken. Wir kennen die Herausforderungen und die Leidenschaft, die hinter jedem Betrieb stecken. Wir investieren nicht nur Kapital, sondern bringen uns aktiv mit unserer Expertise und unserem Netzwerk ein, um Ihr Unternehmen langfristig erfolgreich zu machen.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-slate-800 border-slate-700">
              <CardContent className="p-6 text-center">
                <Handshake className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Partnerschaft auf Augenhöhe</h3>
                <p className="text-slate-300">Wir arbeiten mit Ihnen zusammen, nicht nur für Sie.</p>
              </CardContent>
            </Card>
            <Card className="bg-slate-800 border-slate-700">
              <CardContent className="p-6 text-center">
                <Building className="w-12 h-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Tiefes Branchenverständnis</h3>
                <p className="text-slate-300">Wir sprechen die Sprache traditioneller Unternehmen.</p>
              </CardContent>
            </Card>
            <Card className="bg-slate-800 border-slate-700">
              <CardContent className="p-6 text-center">
                <TrendingUp className="w-12 h-12 text-orange-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Nachhaltiger Erfolg</h3>
                <p className="text-slate-300">Wir denken in Generationen, nicht in Quartalen.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Investment Profile Section */}
      <section id="investitionsprofil" className="py-16 px-4 bg-slate-800/50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Unser Investitionsprofil
            </h2>
            <p className="text-lg text-slate-300">Passgenaue Lösungen für Ihr Unternehmen</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-slate-800 border-slate-700">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <TrendingUp className="w-8 h-8 text-blue-400" />
                  <h3 className="text-xl font-bold">Unternehmensgröße</h3>
                </div>
                <ul className="space-y-2 text-slate-300">
                  <li>• Umsatz: 500K - 10M EUR</li>
                  <li>• Mitarbeiter: 5 - 100</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-slate-800 border-slate-700">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Building className="w-8 h-8 text-green-400" />
                  <h3 className="text-xl font-bold">Zielbranchen</h3>
                </div>
                <ul className="space-y-2 text-slate-300">
                  <li>• Handwerk</li>
                  <li>• Bau</li>
                  <li>• Industrie</li>
                  <li>• Dienstleistung</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-slate-800 border-slate-700">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <MapPin className="w-8 h-8 text-orange-400" />
                  <h3 className="text-xl font-bold">Geografischer Fokus</h3>
                </div>
                <ul className="space-y-2 text-slate-300">
                  <li>• Bayern (Schwerpunkt)</li>
                  <li>• München & Umgebung</li>
                  <li>• Traditionelle Wirtschaftsregionen</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-slate-800 border-slate-700">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Handshake className="w-8 h-8 text-purple-400" />
                  <h3 className="text-xl font-bold">Beteiligungsart</h3>
                </div>
                <ul className="space-y-2 text-slate-300">
                  <li>• Mehrheitsbeteiligungen</li>
                  <li>• Minderheitsbeteiligungen</li>
                  <li>• Je nach Absprache</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-slate-800 border-slate-700">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <TrendingUp className="w-8 h-8 text-teal-400" />
                  <h3 className="text-xl font-bold">Unternehmenssituation</h3>
                </div>
                <ul className="space-y-2 text-slate-300">
                  <li>• Etablierte Unternehmen</li>
                  <li>• Junge Unternehmen</li>
                  <li>• Start-ups mit Potenzial</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-slate-800 border-slate-700">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Target className="w-8 h-8 text-pink-400" />
                  <h3 className="text-xl font-bold">Investitionsanlässe</h3>
                </div>
                <ul className="space-y-2 text-slate-300">
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
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Unser Investitionsprozess</h3>
            <p className="text-lg text-slate-300">Transparent, professionell und partnerschaftlich - so gestalten wir unsere Beteiligungen.</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <Card className="bg-slate-800 border-slate-700 text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">1</div>
                <h4 className="text-lg font-bold mb-3">Erstgespräch</h4>
                <p className="text-slate-300 text-sm">Unverbindliches Kennenlernen und Potenzialanalyse</p>
              </CardContent>
            </Card>
            <Card className="bg-slate-800 border-slate-700 text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">2</div>
                <h4 className="text-lg font-bold mb-3">Due Diligence</h4>
                <p className="text-slate-300 text-sm">Detaillierte Prüfung und Bewertung des Unternehmens</p>
              </CardContent>
            </Card>
            <Card className="bg-slate-800 border-slate-700 text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">3</div>
                <h4 className="text-lg font-bold mb-3">Verhandlung</h4>
                <p className="text-slate-300 text-sm">Faire Strukturierung der Beteiligung</p>
              </CardContent>
            </Card>
            <Card className="bg-slate-800 border-slate-700 text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">4</div>
                <h4 className="text-lg font-bold mb-3">Partnerschaft</h4>
                <p className="text-slate-300 text-sm">Langfristige Zusammenarbeit und Entwicklung</p>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-12">
            <h4 className="text-xl font-bold mb-4">Interesse an einer Beteiligung?</h4>
            <Button className="bg-orange-600 hover:bg-orange-700 text-white">
              Beteiligungsgespräch vereinbaren
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 px-4 bg-slate-800/50">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Sind Sie bereit für den nächsten Schritt?
          </h2>
          <p className="text-lg text-slate-300 mb-8 max-w-3xl mx-auto">
            Egal ob Sie wachsen, eine Beteiligung suchen oder Ihre Nachfolge regeln möchten – ein Gespräch mit uns ist immer der richtige Anfang. Kontaktieren Sie uns für ein unverbindliches und absolut vertrauliches Erstgespräch.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-lg">
              💰 Unternehmenswert ermitteln
            </Button>
            <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 text-lg">
              Erstgespräch vereinbaren
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-slate-800">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-xl font-bold mb-4 md:mb-0">
              LEIBINGER<br />
              <span className="text-sm font-normal">ASSET MANAGEMENT</span>
            </div>
            <div className="flex gap-4">
              <Button 
                variant="ghost" 
                className="text-slate-400 hover:text-white"
                onClick={() => setShowPrivacyModal(true)}
              >
                Datenschutz
              </Button>
            </div>
          </div>
        </div>
      </footer>

      {/* Privacy Modal */}
      <Dialog open={showPrivacyModal} onOpenChange={setShowPrivacyModal}>
        <DialogContent className="bg-slate-800 border-slate-700 text-white max-w-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold">Datenschutzerklärung</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 text-sm text-slate-300">
            <p>
              Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
            </p>
            <p>
              Die Nutzung unserer Webseite ist in der Regel ohne Angabe personenbezogener Daten möglich. Soweit auf unseren Seiten personenbezogene Daten (beispielsweise Name, Anschrift oder E-Mail-Adressen) erhoben werden, erfolgt dies, soweit möglich, stets auf freiwilliger Basis. Diese Daten werden ohne Ihre ausdrückliche Zustimmung nicht an Dritte weitergegeben.
            </p>
            <p>
              Wir weisen darauf hin, dass die Datenübertragung im Internet (z.B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich.
            </p>
            <h3 className="text-lg font-bold text-white">Cookies und Einwilligung</h3>
            <p>
              Diese Website verwendet Cookies, um Ihnen die bestmögliche Nutzererfahrung zu bieten. Cookies sind kleine Textdateien, die auf Ihrem Gerät gespeichert werden. Wir unterscheiden zwischen verschiedenen Arten von Cookies:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li><strong>Erforderliche Cookies:</strong> Diese sind für das Funktionieren der Website unerlässlich und können nicht deaktiviert werden.</li>
              <li><strong>Analyse-Cookies:</strong> Diese helfen uns zu verstehen, wie Besucher mit der Website interagieren (z.B. Google Analytics).</li>
              <li><strong>Marketing-Cookies:</strong> Diese werden verwendet, um Ihnen relevante Werbung anzuzeigen.</li>
              <li><strong>Funktionale Cookies:</strong> Diese ermöglichen erweiterte Funktionalitäten und Personalisierung.</li>
            </ul>
          </div>
        </DialogContent>
      </Dialog>

      {/* Cookie Banner */}
      {showCookieBanner && (
        <div className="fixed bottom-0 left-0 right-0 bg-white text-slate-900 p-4 shadow-lg z-50">
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-slate-900 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">🍪</span>
                </div>
                <div>
                  <h3 className="font-bold">Cookie-Einstellungen</h3>
                  <p className="text-sm">
                    Wir verwenden Cookies für eine optimale Nutzererfahrung. Erforderliche Cookies sind immer aktiv.{' '}
                    <button 
                      onClick={() => setShowPrivacyModal(true)}
                      className="text-blue-600 hover:underline"
                    >
                      Mehr erfahren →
                    </button>
                  </p>
                </div>
              </div>
              <div className="flex gap-2">
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => setShowCookieBanner(false)}
                >
                  Anpassen
                </Button>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => setShowCookieBanner(false)}
                >
                  Ablehnen
                </Button>
                <Button 
                  size="sm"
                  className="bg-green-600 hover:bg-green-700"
                  onClick={() => setShowCookieBanner(false)}
                >
                  Alle akzeptieren
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
