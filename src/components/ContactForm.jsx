import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Textarea } from '@/components/ui/textarea.jsx'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select.jsx'
import { CheckCircle, Loader2 } from 'lucide-react'

const ContactForm = ({ isOpen }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    interest: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('https://formsubmit.co/fl@leibinger-am.de', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          _subject: `Neue Kontaktanfrage von ${formData.name}`,
          _captcha: 'false',
          _template: 'table'
        })
      })

      if (response.ok) {
        setIsSubmitted(true)
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          interest: '',
          message: ''
        })
      }
    } catch (error) {
      console.error('Error submitting form:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="text-center py-12">
        <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-6" />
        <h3 className="text-2xl font-medium mb-4">Vielen Dank für Ihre Anfrage!</h3>
        <p className="text-slate-400 mb-6">
          Wir haben Ihre Nachricht erhalten und werden uns innerhalb von 24 Stunden bei Ihnen melden.
        </p>
        <Button 
          onClick={() => setIsSubmitted(false)}
          className="bg-slate-100 hover:bg-white text-slate-950"
        >
          Neue Anfrage senden
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium mb-2">Name *</label>
          <Input
            type="text"
            value={formData.name}
            onChange={(e) => handleInputChange('name', e.target.value)}
            required
            className="bg-slate-800 border-slate-700 text-slate-100 focus:border-slate-500"
            placeholder="Ihr vollständiger Name"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">E-Mail *</label>
          <Input
            type="email"
            value={formData.email}
            onChange={(e) => handleInputChange('email', e.target.value)}
            required
            className="bg-slate-800 border-slate-700 text-slate-100 focus:border-slate-500"
            placeholder="ihre.email@beispiel.de"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium mb-2">Telefon</label>
          <Input
            type="tel"
            value={formData.phone}
            onChange={(e) => handleInputChange('phone', e.target.value)}
            className="bg-slate-800 border-slate-700 text-slate-100 focus:border-slate-500"
            placeholder="+49 (0) 89 123 456 789"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Unternehmen</label>
          <Input
            type="text"
            value={formData.company}
            onChange={(e) => handleInputChange('company', e.target.value)}
            className="bg-slate-800 border-slate-700 text-slate-100 focus:border-slate-500"
            placeholder="Ihr Unternehmen"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Interesse *</label>
        <Select value={formData.interest} onValueChange={(value) => handleInputChange('interest', value)}>
          <SelectTrigger className="bg-slate-800 border-slate-700 text-slate-100 focus:border-slate-500">
            <SelectValue placeholder="Wählen Sie Ihr Interesse" />
          </SelectTrigger>
          <SelectContent className="bg-slate-800 border-slate-700">
            <SelectItem value="wachstum" className="text-slate-100 focus:bg-slate-700">Wachstumsfinanzierung</SelectItem>
            <SelectItem value="beteiligung" className="text-slate-100 focus:bg-slate-700">Unternehmensbeteiligung</SelectItem>
            <SelectItem value="nachfolge" className="text-slate-100 focus:bg-slate-700">Nachfolgeregelung</SelectItem>
            <SelectItem value="bewertung" className="text-slate-100 focus:bg-slate-700">Unternehmensbewertung</SelectItem>
            <SelectItem value="beratung" className="text-slate-100 focus:bg-slate-700">Allgemeine Beratung</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Nachricht *</label>
        <Textarea
          value={formData.message}
          onChange={(e) => handleInputChange('message', e.target.value)}
          required
          rows={5}
          className="bg-slate-800 border-slate-700 text-slate-100 focus:border-slate-500 resize-none"
          placeholder="Beschreiben Sie kurz Ihr Anliegen und Ihre aktuelle Situation..."
        />
      </div>

      <div className="text-sm text-slate-400">
        <p>
          Mit dem Absenden stimmen Sie der Verarbeitung Ihrer Daten gemäß unserer{' '}
          <button type="button" className="text-slate-200 hover:underline">
            Datenschutzerklärung
          </button>{' '}
          zu. Ihre Daten werden vertraulich behandelt und nicht an Dritte weitergegeben.
        </p>
      </div>

      <Button
        type="submit"
        disabled={isSubmitting || !formData.name || !formData.email || !formData.interest || !formData.message}
        className="w-full bg-slate-100 hover:bg-white text-slate-950 py-3 font-medium transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
            Nachricht wird gesendet...
          </>
        ) : (
          'Nachricht senden'
        )}
      </Button>
    </form>
  )
}

export default ContactForm
