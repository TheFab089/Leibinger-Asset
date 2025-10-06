import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEOHead = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    "name": "Leibinger Asset Management GmbH",
    "description": "Ihr Partner für Wachstum, Beteiligung und Nachfolge im Mittelstand. Wir begleiten Unternehmer aus traditionellen Branchen in Bayern von der Gründung über die Skalierung bis zur erfolgreichen Unternehmensübergabe.",
    "url": "https://www.leibinger-am.de",
    "logo": "https://www.leibinger-am.de/logo.png",
    "image": "https://www.leibinger-am.de/og-image.jpg",
    "telephone": "+49-89-123456789",
    "email": "info@leibinger-am.de",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Musterstraße 123",
      "addressLocality": "München",
      "postalCode": "80331",
      "addressCountry": "DE"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "48.1351",
      "longitude": "11.5820"
    },
    "areaServed": {
      "@type": "Place",
      "name": "Bayern, Deutschland"
    },
    "serviceType": [
      "Unternehmensbeteiligung",
      "Wachstumsfinanzierung",
      "Nachfolgeberatung",
      "Asset Management"
    ],
    "founder": {
      "@type": "Person",
      "name": "Max Mustermann"
    },
    "foundingDate": "2020",
    "numberOfEmployees": "10-50",
    "sameAs": [
      "https://www.linkedin.com/company/leibinger-asset-management",
      "https://www.xing.com/companies/leibingerassetmanagement"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Finanzdienstleistungen",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Wachstumsfinanzierung",
            "description": "Finanzierung für expandierende Mittelstandsunternehmen"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Unternehmensbeteiligung",
            "description": "Strategische Beteiligungen an etablierten Unternehmen"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Nachfolgeberatung",
            "description": "Begleitung bei Unternehmensübergaben und Nachfolgeregelungen"
          }
        }
      ]
    }
  };

  return (
    <Helmet>
      {/* Basis Meta-Tags */}
      <title>Leibinger Asset Management - Ihr Partner für Wachstum, Beteiligung und Nachfolge</title>
      <meta 
        name="description" 
        content="Leibinger Asset Management begleitet Mittelstandsunternehmen in Bayern bei Wachstum, Beteiligung und Nachfolge. Persönlich, partnerschaftlich und mit einem starken Netzwerk. Jetzt kostenloses Erstgespräch vereinbaren." 
      />
      <meta 
        name="keywords" 
        content="Asset Management, Unternehmensbeteiligung, Wachstumsfinanzierung, Nachfolgeberatung, Mittelstand, Bayern, München, Private Equity, Unternehmensberatung" 
      />
      <meta name="author" content="Leibinger Asset Management GmbH" />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="de" />
      <meta name="geo.region" content="DE-BY" />
      <meta name="geo.placename" content="München" />
      <meta name="geo.position" content="48.1351;11.5820" />
      <meta name="ICBM" content="48.1351, 11.5820" />

      {/* Open Graph Meta-Tags für Social Media */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Leibinger Asset Management - Ihr Partner für Wachstum, Beteiligung und Nachfolge" />
      <meta property="og:description" content="Wir begleiten Mittelstandsunternehmen in Bayern bei Wachstum, Beteiligung und Nachfolge. Persönlich, partnerschaftlich und mit einem starken Netzwerk." />
      <meta property="og:url" content="https://www.leibinger-am.de" />
      <meta property="og:image" content="https://www.leibinger-am.de/og-image.jpg" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="Leibinger Asset Management - Professionelle Finanzdienstleistungen" />
      <meta property="og:site_name" content="Leibinger Asset Management" />
      <meta property="og:locale" content="de_DE" />

      {/* Twitter Card Meta-Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Leibinger Asset Management - Ihr Partner für Wachstum, Beteiligung und Nachfolge" />
      <meta name="twitter:description" content="Wir begleiten Mittelstandsunternehmen in Bayern bei Wachstum, Beteiligung und Nachfolge." />
      <meta name="twitter:image" content="https://www.leibinger-am.de/og-image.jpg" />
      <meta name="twitter:image:alt" content="Leibinger Asset Management" />

      {/* Canonical URL */}
      <link rel="canonical" href="https://www.leibinger-am.de" />

      {/* Hreflang für mehrsprachige Websites */}
      <link rel="alternate" hrefLang="de" href="https://www.leibinger-am.de" />
      <link rel="alternate" hrefLang="x-default" href="https://www.leibinger-am.de" />

      {/* Favicon und App Icons */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="manifest" href="/site.webmanifest" />

      {/* Strukturierte Daten (JSON-LD) */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>

      {/* Zusätzliche SEO-Meta-Tags */}
      <meta name="theme-color" content="#1e293b" />
      <meta name="msapplication-TileColor" content="#1e293b" />
      <meta name="application-name" content="Leibinger Asset Management" />
      <meta name="apple-mobile-web-app-title" content="Leibinger Asset Management" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
    </Helmet>
  );
};

export default SEOHead;
