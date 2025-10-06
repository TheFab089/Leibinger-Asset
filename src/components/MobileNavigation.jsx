import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const MobileNavigation = ({ scrollToSection, openContactForm, openValuationTool }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleNavClick = (action) => {
    if (typeof action === 'function') {
      action();
    } else {
      scrollToSection(action);
    }
    setIsOpen(false); // Menü nach Klick schließen
  };

  return (
    <>
      {/* Mobile Menu Button - nur auf kleinen Bildschirmen sichtbar */}
      <button
        onClick={toggleMenu}
        className="md:hidden p-2 text-slate-300 hover:text-white transition-colors"
        aria-label="Navigation öffnen"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-slate-950/90 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />
          
          {/* Menu Content */}
          <div className="relative bg-slate-900 h-full w-80 max-w-sm shadow-xl">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-slate-700">
              <h2 className="text-lg font-medium text-slate-100">Navigation</h2>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 text-slate-400 hover:text-white transition-colors"
                aria-label="Menü schließen"
              >
                <X size={20} />
              </button>
            </div>

            {/* Navigation Items */}
            <nav className="p-6 space-y-4">
              <button
                onClick={() => handleNavClick('wachstum')}
                className="block w-full text-left px-4 py-3 text-slate-200 hover:text-white hover:bg-slate-800 rounded-lg transition-all duration-200"
              >
                <span className="text-green-400 mr-3">●</span>
                Wachstum
              </button>
              
              <button
                onClick={() => handleNavClick('beteiligung')}
                className="block w-full text-left px-4 py-3 text-slate-200 hover:text-white hover:bg-slate-800 rounded-lg transition-all duration-200"
              >
                <span className="text-blue-400 mr-3">●</span>
                Beteiligung
              </button>
              
              <button
                onClick={() => handleNavClick('nachfolge')}
                className="block w-full text-left px-4 py-3 text-slate-200 hover:text-white hover:bg-slate-800 rounded-lg transition-all duration-200"
              >
                <span className="text-orange-400 mr-3">●</span>
                Nachfolge
              </button>

              <div className="border-t border-slate-700 pt-4 mt-4">
                <button
                  onClick={() => handleNavClick(openValuationTool)}
                  className="block w-full text-left px-4 py-3 text-slate-200 hover:text-white hover:bg-slate-800 rounded-lg transition-all duration-200"
                >
                  <span className="text-purple-400 mr-3">●</span>
                  Unternehmensbewertung
                </button>
                
                <button
                  onClick={() => handleNavClick('about-us')}
                  className="block w-full text-left px-4 py-3 text-slate-200 hover:text-white hover:bg-slate-800 rounded-lg transition-all duration-200"
                >
                  <span className="text-cyan-400 mr-3">●</span>
                  Philosophie
                </button>
                
                <button
                  onClick={() => handleNavClick('investment-profile')}
                  className="block w-full text-left px-4 py-3 text-slate-200 hover:text-white hover:bg-slate-800 rounded-lg transition-all duration-200"
                >
                  <span className="text-pink-400 mr-3">●</span>
                  Investitionsprofil
                </button>
                
                <button
                  onClick={() => handleNavClick(openContactForm)}
                  className="block w-full text-left px-4 py-3 text-slate-200 hover:text-white hover:bg-slate-800 rounded-lg transition-all duration-200"
                >
                  <span className="text-purple-400 mr-3">●</span>
                  Kontakt
                </button>
              </div>

              {/* Call-to-Action Buttons */}
              <div className="border-t border-slate-700 pt-4 mt-6 space-y-3">
                <button
                  onClick={() => handleNavClick(openValuationTool)}
                  className="w-full bg-slate-700 hover:bg-slate-600 text-slate-100 hover:text-white px-4 py-3 rounded-lg font-medium transition-all duration-300"
                >
                  Unternehmenswert berechnen
                </button>
                
                <button
                  onClick={() => handleNavClick(openContactForm)}
                  className="w-full bg-slate-600 hover:bg-slate-500 text-slate-100 hover:text-white px-4 py-3 rounded-lg font-medium transition-all duration-300"
                >
                  Kostenloses Erstgespräch
                </button>
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default MobileNavigation;
