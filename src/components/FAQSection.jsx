import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const FAQSection = () => {
  const [openItems, setOpenItems] = useState(new Set());

  const toggleItem = (index) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index);
    } else {
      newOpenItems.add(index);
    }
    setOpenItems(newOpenItems);
  };

  const faqs = [
    {
      question: "Welche Unternehmen sind für eine Beteiligung interessant?",
      answer: "Wir fokussieren uns auf etablierte Mittelstandsunternehmen in Bayern mit einem Jahresumsatz zwischen 5 und 50 Millionen Euro. Besonders interessant sind Unternehmen aus traditionellen Branchen wie Handwerk, Produktion und Handel mit stabilen Geschäftsmodellen und Wachstumspotenzial. Wichtig sind auch eine solide Marktposition, ein erfahrenes Management-Team und nachhaltige Wettbewerbsvorteile."
    },
    {
      question: "Wie läuft der Bewertungsprozess ab?",
      answer: "Unser Bewertungsprozess erfolgt in vier strukturierten Schritten: Zunächst führen wir eine Erstanalyse Ihres Unternehmens durch, gefolgt von einer detaillierten Due Diligence-Prüfung. Anschließend erstellen wir eine fundierte Unternehmensbewertung unter Verwendung verschiedener Bewertungsmethoden und berücksichtigen sowohl finanzielle Kennzahlen als auch strategische Faktoren. Der gesamte Prozess dauert in der Regel 6-12 Wochen und wird transparent mit Ihnen kommuniziert."
    },
    {
      question: "Was unterscheidet Leibinger Asset Management von anderen Anbietern?",
      answer: "Unser Fokus liegt auf langfristigen Partnerschaften statt kurzfristigen Renditen. Wir bringen nicht nur Kapital, sondern auch unser umfangreiches Netzwerk und unsere operative Expertise ein. Als regionaler Partner verstehen wir die Besonderheiten des bayerischen Mittelstands und agieren stets auf Augenhöhe. Unsere Erfahrung in traditionellen Branchen und unser partnerschaftlicher Ansatz unterscheiden uns von rein finanzorientierten Investoren."
    },
    {
      question: "Wie lange dauert eine typische Beteiligung?",
      answer: "Unsere Beteiligungen sind auf einen Zeitraum von 5-10 Jahren ausgelegt. Wir begleiten Unternehmen langfristig und unterstützen sie bei der strategischen Weiterentwicklung, Prozessoptimierung und Wachstumsfinanzierung. Ein vorzeitiger Ausstieg ist möglich, wenn alle Parteien davon profitieren und die Unternehmensziele erreicht wurden. Unser Ziel ist es, nachhaltige Wertsteigerung zu schaffen."
    },
    {
      question: "Welche Unterstützung bieten Sie über die Finanzierung hinaus?",
      answer: "Wir bieten umfassende operative Unterstützung durch unser Experten-Netzwerk: strategische Beratung bei Geschäftsentwicklung, Unterstützung bei Digitalisierungsprojekten, Optimierung von Geschäftsprozessen, Aufbau von Controlling-Systemen, Personalentwicklung und Führungskräfte-Coaching. Zusätzlich vermitteln wir Kontakte zu Kunden, Lieferanten und weiteren Geschäftspartnern aus unserem Netzwerk."
    },
    {
      question: "Wie hoch ist die Mindestbeteiligung und welche Anteile übernehmen Sie?",
      answer: "Unsere Mindestinvestition liegt bei 1 Million Euro. Je nach Unternehmenssituation und Zielsetzung übernehmen wir Minderheits- oder Mehrheitsbeteiligungen zwischen 25% und 75%. Wichtig ist uns dabei, dass die Gründer und das Management-Team weiterhin stark eingebunden bleiben und gemeinsam mit uns das Unternehmen weiterentwickeln. Die genaue Beteiligungsstruktur wird individuell verhandelt."
    }
  ];

  // Strukturierte Daten für SEO
  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <section className="py-24 px-6 bg-slate-900/30">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <HelpCircle className="w-8 h-8 text-blue-400 mr-3" />
            <h2 className="text-4xl md:text-5xl font-light text-slate-100">
              Häufig gestellte <span className="font-medium">Fragen</span>
            </h2>
          </div>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Hier finden Sie Antworten auf die wichtigsten Fragen zu unseren Dienstleistungen 
            und unserem Vorgehen bei Beteiligungen und Nachfolgeregelungen.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-slate-800/50 border border-slate-700 rounded-lg overflow-hidden">
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-slate-800/70 transition-colors"
              >
                <h3 className="font-medium text-slate-100 pr-4">
                  {faq.question}
                </h3>
                {openItems.has(index) ? (
                  <ChevronUp className="w-5 h-5 text-slate-400 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0" />
                )}
              </button>
              
              {openItems.has(index) && (
                <div className="px-6 pb-5">
                  <div className="border-t border-slate-700 pt-4">
                    <p className="text-slate-300 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-slate-400 mb-6">
            Haben Sie weitere Fragen? Wir beraten Sie gerne persönlich.
          </p>
          <button className="bg-slate-700 hover:bg-slate-600 text-slate-100 hover:text-white border border-slate-600 hover:border-slate-500 px-8 py-3 rounded-lg font-medium transition-all duration-300">
            Kostenloses Beratungsgespräch vereinbaren
          </button>
        </div>
      </div>

      {/* Strukturierte Daten für SEO */}
      <script type="application/ld+json">
        {JSON.stringify(faqStructuredData)}
      </script>
    </section>
  );
};

export default FAQSection;
