import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Textarea } from '@/components/ui/textarea.jsx'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select.jsx'
import { Card, CardContent } from '@/components/ui/card.jsx'
import { ArrowRight, ArrowLeft, Calculator, TrendingUp, Building, Users } from 'lucide-react'

const ProfessionalValuationTool = ({ isOpen }) => {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    // Step 1: Basic Company Info
    companyName: '',
    industry: '',
    location: '',
    foundingYear: '',
    legalForm: '',
    employees: '',
    businessModel: '',
    
    // Step 2: Financial Data
    revenue: '',
    revenueGrowth: '',
    ebitda: '',
    ebitdaMargin: '',
    assets: '',
    liabilities: '',
    
    // Step 3: Market & Competition
    marketPosition: '',
    competitiveAdvantage: '',
    customerBase: '',
    marketGrowth: '',
    
    // Contact Info
    contactName: '',
    contactEmail: '',
    contactPhone: ''
  })
  const [valuationResult, setValuationResult] = useState(null)

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const calculateValuation = async () => {
    const revenue = parseFloat(formData.revenue) || 0
    const ebitda = parseFloat(formData.ebitda) || 0
    const revenueGrowth = parseFloat(formData.revenueGrowth) || 0
    const ebitdaMargin = parseFloat(formData.ebitdaMargin) || 0

    // Simplified valuation calculation
    let revenueMultiple = 1.5
    let ebitdaMultiple = 8

    // Adjust multiples based on growth and margin
    if (revenueGrowth > 20) revenueMultiple += 0.5
    if (revenueGrowth > 10) revenueMultiple += 0.3
    if (ebitdaMargin > 15) ebitdaMultiple += 2
    if (ebitdaMargin > 10) ebitdaMultiple += 1

    // Industry adjustments
    const industryMultipliers = {
      'technologie': { revenue: 2.5, ebitda: 12 },
      'software': { revenue: 3.0, ebitda: 15 },
      'handel': { revenue: 1.2, ebitda: 6 },
      'produktion': { revenue: 1.8, ebitda: 8 },
      'dienstleistung': { revenue: 1.5, ebitda: 7 },
      'handwerk': { revenue: 1.3, ebitda: 6 }
    }

    const industryData = industryMultipliers[formData.industry] || { revenue: 1.5, ebitda: 8 }
    revenueMultiple = industryData.revenue
    ebitdaMultiple = industryData.ebitda

    const revenueValuation = revenue * revenueMultiple
    const ebitdaValuation = ebitda * ebitdaMultiple
    
    // Take average of both methods, weighted towards EBITDA if available
    let finalValuation
    if (ebitda > 0) {
      finalValuation = (revenueValuation * 0.3 + ebitdaValuation * 0.7)
    } else {
      finalValuation = revenueValuation
    }

    const minValuation = finalValuation * 0.8
    const maxValuation = finalValuation * 1.2

    const result = {
      minValue: Math.round(minValuation),
      maxValue: Math.round(maxValuation),
      avgValue: Math.round(finalValuation),
      revenueMultiple: revenueMultiple.toFixed(1),
      ebitdaMultiple: ebitdaMultiple.toFixed(1)
    }

    setValuationResult(result)

    // Send valuation data via FormSubmit
    try {
      await fetch('https://formsubmit.co/fl@leibinger-am.de', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          _subject: `Neue Unternehmensbewertung von ${formData.contactName}`,
          _captcha: 'false',
          _template: 'table',
          // Company data
          'Unternehmensname': formData.companyName,
          'Branche': formData.industry,
          'Standort': formData.location,
          'Gründungsjahr': formData.foundingYear,
          'Rechtsform': formData.legalForm,
          'Mitarbeiter': formData.employees,
          'Geschäftsmodell': formData.businessModel,
          // Financial data
          'Jahresumsatz (EUR)': formData.revenue,
          'Umsatzwachstum (%)': formData.revenueGrowth,
          'EBITDA (EUR)': formData.ebitda,
          'EBITDA-Marge (%)': formData.ebitdaMargin,
          'Bilanzsumme (EUR)': formData.assets,
          'Verbindlichkeiten (EUR)': formData.liabilities,
          // Market data
          'Marktposition': formData.marketPosition,
          'Wettbewerbsvorteile': formData.competitiveAdvantage,
          'Kundenbasis': formData.customerBase,
          'Marktwachstum': formData.marketGrowth,
          // Contact data
          'Kontaktname': formData.contactName,
          'E-Mail': formData.contactEmail,
          'Telefon': formData.contactPhone,
          // Valuation results
          'Bewertung Min (EUR)': result.minValue.toLocaleString(),
          'Bewertung Max (EUR)': result.maxValue.toLocaleString(),
          'Bewertung Durchschnitt (EUR)': result.avgValue.toLocaleString(),
          'Umsatz-Multiple': result.revenueMultiple,
          'EBITDA-Multiple': result.ebitdaMultiple
        })
      })
    } catch (error) {
      console.error('Error sending valuation data:', error)
    }
  }

  const nextStep = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1)
    } else {
      calculateValuation()
      setCurrentStep(5)
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const isStepValid = () => {
    switch (currentStep) {
      case 1:
        return formData.companyName && formData.industry && formData.location && formData.foundingYear
      case 2:
        return formData.revenue && formData.ebitda
      case 3:
        return formData.marketPosition && formData.competitiveAdvantage
      case 4:
        return formData.contactName && formData.contactEmail
      default:
        return true
    }
  }

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="text-center mb-10">
              <Building className="w-16 h-16 text-slate-200 mx-auto mb-6" />
              <h3 className="text-3xl font-medium mb-3 text-white">Unternehmensdaten</h3>
              <p className="text-lg text-slate-300">Grundlegende Informationen zu Ihrem Unternehmen</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <label className="block text-base font-medium mb-3 text-slate-200">Unternehmensname *</label>
                <Input
                  value={formData.companyName}
                  onChange={(e) => handleInputChange('companyName', e.target.value)}
                  className="bg-slate-800 border-slate-600 text-slate-100 placeholder:text-slate-400 text-base py-3"
                  placeholder="Ihr Unternehmensname"
                />
              </div>
              <div>
                <label className="block text-base font-medium mb-3 text-slate-200">Branche *</label>
                <Select value={formData.industry} onValueChange={(value) => handleInputChange('industry', value)}>
                  <SelectTrigger className="bg-slate-800 border-slate-600 text-slate-100 text-base py-3">
                    <SelectValue placeholder="Wählen Sie Ihre Branche" className="text-slate-400" />
                  </SelectTrigger>
                  <SelectContent className="bg-slate-800 border-slate-600">
                    <SelectItem value="handwerk" className="text-slate-100 text-base">Handwerk</SelectItem>
                    <SelectItem value="produktion" className="text-slate-100 text-base">Produktion</SelectItem>
                    <SelectItem value="handel" className="text-slate-100 text-base">Handel</SelectItem>
                    <SelectItem value="dienstleistung" className="text-slate-100 text-base">Dienstleistung</SelectItem>
                    <SelectItem value="technologie" className="text-slate-100 text-base">Technologie</SelectItem>
                    <SelectItem value="software" className="text-slate-100 text-base">Software</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <label className="block text-base font-medium mb-3 text-slate-200">Standort (Stadt) *</label>
                <Input
                  value={formData.location}
                  onChange={(e) => handleInputChange('location', e.target.value)}
                  className="bg-slate-800 border-slate-600 text-slate-100 placeholder:text-slate-400 text-base py-3"
                  placeholder="München"
                />
              </div>
              <div>
                <label className="block text-base font-medium mb-3 text-slate-200">Gründungsjahr *</label>
                <Input
                  type="number"
                  value={formData.foundingYear}
                  onChange={(e) => handleInputChange('foundingYear', e.target.value)}
                  className="bg-slate-800 border-slate-600 text-slate-100 placeholder:text-slate-400 text-base py-3"
                  placeholder="2010"
                />
              </div>
              <div>
                <label className="block text-base font-medium mb-3 text-slate-200">Rechtsform</label>
                <Input
                  value={formData.legalForm}
                  onChange={(e) => handleInputChange('legalForm', e.target.value)}
                  className="bg-slate-800 border-slate-600 text-slate-100 placeholder:text-slate-400 text-base py-3"
                  placeholder="GmbH"
                />
              </div>
            </div>

            <div>
              <label className="block text-base font-medium mb-3 text-slate-200">Anzahl Mitarbeiter</label>
              <Input
                type="number"
                value={formData.employees}
                onChange={(e) => handleInputChange('employees', e.target.value)}
                className="bg-slate-800 border-slate-600 text-slate-100 placeholder:text-slate-400 text-base py-3"
                placeholder="25"
              />
            </div>

            <div>
              <label className="block text-base font-medium mb-3 text-slate-200">Geschäftsmodell (kurz)</label>
              <Textarea
                value={formData.businessModel}
                onChange={(e) => handleInputChange('businessModel', e.target.value)}
                className="bg-slate-800 border-slate-600 text-slate-100 placeholder:text-slate-400 text-base py-3"
                rows={4}
                placeholder="Beschreiben Sie kurz Ihr Geschäftsmodell..."
              />
            </div>
          </div>
        )

      case 2:
        return (
          <div className="space-y-6">
            <div className="text-center mb-10">
              <Calculator className="w-16 h-16 text-slate-200 mx-auto mb-6" />
              <h3 className="text-3xl font-medium mb-3 text-white">Finanzdaten</h3>
              <p className="text-lg text-slate-300">Aktuelle Kennzahlen Ihres Unternehmens</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <label className="block text-base font-medium mb-3 text-slate-200">Jahresumsatz (EUR) *</label>
                <Input
                  type="number"
                  value={formData.revenue}
                  onChange={(e) => handleInputChange('revenue', e.target.value)}
                  className="bg-slate-800 border-slate-600 text-slate-100 placeholder:text-slate-400 text-base py-3"
                  placeholder="1500000"
                />
              </div>
              <div>
                <label className="block text-base font-medium mb-3 text-slate-200">Umsatzwachstum (%)</label>
                <Input
                  type="number"
                  value={formData.revenueGrowth}
                  onChange={(e) => handleInputChange('revenueGrowth', e.target.value)}
                  className="bg-slate-800 border-slate-600 text-slate-100 placeholder:text-slate-400 text-base py-3"
                  placeholder="15"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <label className="block text-base font-medium mb-3 text-slate-200">EBITDA (EUR) *</label>
                <Input
                  type="number"
                  value={formData.ebitda}
                  onChange={(e) => handleInputChange('ebitda', e.target.value)}
                  className="bg-slate-800 border-slate-600 text-slate-100 placeholder:text-slate-400 text-base py-3"
                  placeholder="300000"
                />
              </div>
              <div>
                <label className="block text-base font-medium mb-3 text-slate-200">EBITDA-Marge (%)</label>
                <Input
                  type="number"
                  value={formData.ebitdaMargin}
                  onChange={(e) => handleInputChange('ebitdaMargin', e.target.value)}
                  className="bg-slate-800 border-slate-600 text-slate-100 placeholder:text-slate-400 text-base py-3"
                  placeholder="20"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <label className="block text-base font-medium mb-3 text-slate-200">Bilanzsumme (EUR)</label>
                <Input
                  type="number"
                  value={formData.assets}
                  onChange={(e) => handleInputChange('assets', e.target.value)}
                  className="bg-slate-800 border-slate-600 text-slate-100 placeholder:text-slate-400 text-base py-3"
                  placeholder="800000"
                />
              </div>
              <div>
                <label className="block text-base font-medium mb-3 text-slate-200">Verbindlichkeiten (EUR)</label>
                <Input
                  type="number"
                  value={formData.liabilities}
                  onChange={(e) => handleInputChange('liabilities', e.target.value)}
                  className="bg-slate-800 border-slate-600 text-slate-100 placeholder:text-slate-400 text-base py-3"
                  placeholder="200000"
                />
              </div>
            </div>
          </div>
        )

      case 3:
        return (
          <div className="space-y-6">
            <div className="text-center mb-10">
              <TrendingUp className="w-16 h-16 text-slate-200 mx-auto mb-6" />
              <h3 className="text-3xl font-medium mb-3 text-white">Markt & Wettbewerb</h3>
              <p className="text-lg text-slate-300">Positionierung und Wettbewerbsvorteile</p>
            </div>

            <div className="space-y-8">
              <div>
                <label className="block text-base font-medium mb-3 text-slate-200">Marktposition *</label>
                <Select value={formData.marketPosition} onValueChange={(value) => handleInputChange('marketPosition', value)}>
                  <SelectTrigger className="bg-slate-800 border-slate-600 text-slate-100 text-base py-3">
                    <SelectValue placeholder="Wählen Sie Ihre Marktposition" className="text-slate-400" />
                  </SelectTrigger>
                  <SelectContent className="bg-slate-800 border-slate-600">
                    <SelectItem value="marktfuehrer" className="text-slate-100 text-base">Marktführer</SelectItem>
                    <SelectItem value="stark" className="text-slate-100 text-base">Starke Position</SelectItem>
                    <SelectItem value="etabliert" className="text-slate-100 text-base">Etabliert</SelectItem>
                    <SelectItem value="nische" className="text-slate-100 text-base">Nischenplayer</SelectItem>
                    <SelectItem value="herausforderer" className="text-slate-100 text-base">Herausforderer</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-base font-medium mb-3 text-slate-200">Hauptwettbewerbsvorteile *</label>
                <Textarea
                  value={formData.competitiveAdvantage}
                  onChange={(e) => handleInputChange('competitiveAdvantage', e.target.value)}
                  className="bg-slate-800 border-slate-600 text-slate-100 placeholder:text-slate-400 text-base py-3"
                  rows={5}
                  placeholder="Beschreiben Sie Ihre wichtigsten Wettbewerbsvorteile..."
                />
              </div>

              <div>
                <label className="block text-base font-medium mb-3 text-slate-200">Kundenbasis</label>
                <Select value={formData.customerBase} onValueChange={(value) => handleInputChange('customerBase', value)}>
                  <SelectTrigger className="bg-slate-800 border-slate-600 text-slate-100 text-base py-3">
                    <SelectValue placeholder="Beschreiben Sie Ihre Kundenbasis" className="text-slate-400" />
                  </SelectTrigger>
                  <SelectContent className="bg-slate-800 border-slate-600">
                    <SelectItem value="b2b_gross" className="text-slate-100 text-base">B2B - Großkunden</SelectItem>
                    <SelectItem value="b2b_mittel" className="text-slate-100 text-base">B2B - Mittelstand</SelectItem>
                    <SelectItem value="b2b_klein" className="text-slate-100 text-base">B2B - Kleinbetriebe</SelectItem>
                    <SelectItem value="b2c" className="text-slate-100 text-base">B2C - Endkunden</SelectItem>
                    <SelectItem value="gemischt" className="text-slate-100 text-base">Gemischt</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-base font-medium mb-3 text-slate-200">Marktwachstum</label>
                <Select value={formData.marketGrowth} onValueChange={(value) => handleInputChange('marketGrowth', value)}>
                  <SelectTrigger className="bg-slate-800 border-slate-600 text-slate-100 text-base py-3">
                    <SelectValue placeholder="Wie entwickelt sich Ihr Markt?" className="text-slate-400" />
                  </SelectTrigger>
                  <SelectContent className="bg-slate-800 border-slate-600">
                      <SelectItem value="stark_wachsend" className="text-slate-100 text-base">Stark wachsend (&gt;10%)</SelectItem>
                    <SelectItem value="wachsend" className="text-slate-100 text-base">Wachsend (5-10%)</SelectItem>
                    <SelectItem value="stabil" className="text-slate-100 text-base">Stabil (0-5%)</SelectItem>
                    <SelectItem value="schrumpfend" className="text-slate-100 text-base">Schrumpfend</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        )

      case 4:
        return (
          <div className="space-y-6">
            <div className="text-center mb-10">
              <Users className="w-16 h-16 text-slate-200 mx-auto mb-6" />
              <h3 className="text-3xl font-medium mb-3 text-white">Kontaktdaten</h3>
              <p className="text-lg text-slate-300">Für die Zusendung Ihres detaillierten Bewertungsberichts</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <label className="block text-base font-medium mb-3 text-slate-200">Name *</label>
                <Input
                  value={formData.contactName}
                  onChange={(e) => handleInputChange('contactName', e.target.value)}
                  className="bg-slate-800 border-slate-600 text-slate-100 placeholder:text-slate-400 text-base py-3"
                  placeholder="Max Mustermann"
                />
              </div>
              <div>
                <label className="block text-base font-medium mb-3 text-slate-200">E-Mail *</label>
                <Input
                  type="email"
                  value={formData.contactEmail}
                  onChange={(e) => handleInputChange('contactEmail', e.target.value)}
                  className="bg-slate-800 border-slate-600 text-slate-100 placeholder:text-slate-400 text-base py-3"
                  placeholder="max@unternehmen.de"
                />
              </div>
            </div>

            <div>
              <label className="block text-base font-medium mb-3 text-slate-200">Telefon (optional)</label>
              <Input
                type="tel"
                value={formData.contactPhone}
                onChange={(e) => handleInputChange('contactPhone', e.target.value)}
                className="bg-slate-800 border-slate-600 text-slate-100 placeholder:text-slate-400 text-base py-3"
                placeholder="+49 89 123 456 789"
              />
            </div>

            <div className="bg-slate-800/50 p-6 rounded-lg">
              <p className="text-sm text-slate-400">
                Mit dem Absenden erhalten Sie eine erste Bewertungseinschätzung sowie einen detaillierten 
                Bewertungsbericht per E-Mail. Ihre Daten werden vertraulich behandelt und nicht an Dritte weitergegeben.
              </p>
            </div>
          </div>
        )

      case 5:
        return (
          <div className="text-center space-y-8">
            <div>
              <Calculator className="w-16 h-16 text-slate-300 mx-auto mb-6" />
              <h3 className="text-3xl font-medium mb-4">Ihre Unternehmensbewertung</h3>
              <p className="text-slate-400 mb-8">
                Basierend auf Ihren Angaben haben wir eine erste Bewertungseinschätzung erstellt
              </p>
            </div>

            {valuationResult && (
              <Card className="bg-slate-800/50 border-slate-700 max-w-2xl mx-auto">
                <CardContent className="p-8">
                  <div className="text-center mb-8">
                    <div className="text-4xl font-light mb-2">
                      {valuationResult.minValue.toLocaleString()} - {valuationResult.maxValue.toLocaleString()} EUR
                    </div>
                    <div className="text-slate-400">Geschätzter Unternehmenswert</div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 text-left">
                    <div>
                      <div className="text-sm text-slate-400 mb-1">Durchschnittswert</div>
                      <div className="text-2xl font-medium">{valuationResult.avgValue.toLocaleString()} EUR</div>
                    </div>
                    <div>
                      <div className="text-sm text-slate-400 mb-1">Bewertungsmethodik</div>
                      <div className="text-sm">
                        Umsatzmultiple: {valuationResult.revenueMultiple}x<br />
                        EBITDA-Multiple: {valuationResult.ebitdaMultiple}x
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 p-4 bg-slate-900/50 rounded-lg">
                    <p className="text-sm text-slate-400">
                      <strong>Hinweis:</strong> Diese Bewertung ist eine erste Einschätzung basierend auf 
                      Standardmultiplikatoren. Für eine detaillierte Bewertung sind weitere Faktoren wie 
                      Marktposition, Kundenstruktur, Management und Zukunftsperspektiven zu berücksichtigen.
                    </p>
                  </div>
                </CardContent>
              </Card>
            )}

            <div className="space-y-4">
              <Button 
                onClick={() => {
                  setCurrentStep(1)
                  setValuationResult(null)
                  setFormData({
                    companyName: '',
                    industry: '',
                    location: '',
                    foundingYear: '',
                    legalForm: '',
                    employees: '',
                    businessModel: '',
                    revenue: '',
                    revenueGrowth: '',
                    ebitda: '',
                    ebitdaMargin: '',
                    assets: '',
                    liabilities: '',
                    marketPosition: '',
                    competitiveAdvantage: '',
                    customerBase: '',
                    marketGrowth: '',
                    contactName: '',
                    contactEmail: '',
                    contactPhone: ''
                  })
                }}
                className="bg-slate-100 hover:bg-white text-slate-950 px-8 py-3"
              >
                Neue Bewertung durchführen
              </Button>
            </div>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <div className="max-w-4xl mx-auto">
      {currentStep < 5 && (
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <span className="text-sm text-slate-400">Schritt {currentStep} von 4</span>
            <span className="text-sm text-slate-400">{Math.round((currentStep / 4) * 100)}% abgeschlossen</span>
          </div>
          <div className="w-full bg-slate-800 rounded-full h-2">
            <div 
              className="bg-slate-300 h-2 rounded-full transition-all duration-300" 
              style={{ width: `${(currentStep / 4) * 100}%` }}
            ></div>
          </div>
        </div>
      )}

      {renderStep()}

      {currentStep < 5 && (
        <div className="flex justify-between mt-12">
          <Button
            variant="outline"
            onClick={prevStep}
            disabled={currentStep === 1}
            className="border-slate-600 text-slate-200 hover:bg-slate-800 disabled:opacity-50 text-base py-3 px-6"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Zurück
          </Button>
          
          <Button
            onClick={nextStep}
            disabled={!isStepValid()}
            className="bg-slate-600 hover:bg-slate-500 text-white disabled:opacity-50 disabled:cursor-not-allowed text-base py-3 px-6"
          >
            {currentStep === 4 ? 'Bewertung berechnen' : 'Weiter'}
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      )}
    </div>
  )
}

export default ProfessionalValuationTool
