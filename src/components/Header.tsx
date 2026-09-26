import React, { useState } from 'react';
import { Menu, X, Heart, Shield, Phone, CalendarRange } from 'lucide-react';

interface HeaderProps {
  currentTab: string;
  setCurrentTab: (tab: string) => void;
}

export default function Header({ currentTab, setCurrentTab }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Departments & Services' },
    { id: 'doctors', label: 'Find Doctors & Book' },
    { id: 'dashboard', label: 'Patient Portal' }
  ];

  const handleNavClick = (tabId: string) => {
    setCurrentTab(tabId);
    setIsOpen(false);
  };

  return (
    <header id="hospital-header" className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm transition-all duration-300">
      {/* Top Banner with Emergency Contact */}
      <div className="bg-gradient-to-r from-emerald-700 to-teal-800 text-white text-xs px-4 py-2 flex flex-wrap justify-between items-center font-mono tracking-wide">
        <div className="flex items-center gap-2">
          <span className="inline-block w-2 h-2 rounded-full bg-red-400 animate-pulse" />
          <span>24/7 Clinical Emergency Hotline: <strong className="text-amber-200 font-sans">+91 (11) 4555-0900</strong></span>
        </div>
        <div className="hidden md:flex items-center gap-6">
          <div className="flex items-center gap-1.5">
            <Shield className="w-3.5 h-3.5 text-teal-200" />
            <span>NABH Accredited Tertiary Center</span>
          </div>
          <div>
            <span>Walk-ins welcome for Diagnostics</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <button 
            onClick={() => handleNavClick('home')} 
            className="flex items-center gap-3 group text-left focus:outline-none"
            id="logo-button"
          >
            <div className="bg-gradient-to-tr from-emerald-600 to-teal-800 p-2.5 rounded-xl shadow-md group-hover:scale-105 transition-transform duration-300">
              <Heart className="w-6 h-6 text-white" strokeWidth={2.5} />
            </div>
            <div>
              <span className="block font-sans text-xl font-extrabold tracking-tight text-slate-950 uppercase leading-none">
                Ratan Lal
              </span>
              <span className="block font-mono text-[10px] uppercase tracking-[0.25em] text-slate-500 font-semibold mt-1">
                Hospital & Research
              </span>
            </div>
          </button>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = currentTab === item.id;
              return (
                <button
                  key={item.id}
                  id={`nav-link-${item.id}`}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative px-4 py-2 rounded-lg text-sm font-semibold tracking-tight transition-all duration-200 ${
                    isActive
                      ? 'text-emerald-700 bg-emerald-50/50'
                      : 'text-slate-600 hover:text-emerald-800 hover:bg-slate-50'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-emerald-600 rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a 
              href="tel:+911145550900" 
              className="flex items-center gap-1.5 text-slate-700 text-sm font-semibold font-mono hover:text-emerald-700 transition-colors"
            >
              <Phone className="w-4 h-4 text-emerald-600" />
              <span>Contact Desk</span>
            </a>
            
            <button
              onClick={() => handleNavClick('doctors')}
              id="cta-nav-book"
              className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-slate-900 rounded-xl group bg-gradient-to-br from-emerald-500 to-teal-700 group-hover:from-emerald-500 group-hover:to-teal-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-emerald-200 shadow-sm mt-2 transition-transform active:scale-95 duration-200"
            >
              <span className="relative px-4 py-2.5 transition-all ease-in duration-75 bg-white rounded-lg group-hover:bg-opacity-0 group-hover:text-white flex items-center gap-2">
                <CalendarRange className="w-4 h-4 text-emerald-700 group-hover:text-white" />
                <span>Book Now</span>
              </span>
            </button>
          </div>

          {/* Mobile hamburger menu */}
          <div className="flex lg:hidden items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-slate-600 hover:bg-slate-100 hover:text-slate-900"
              aria-label="Toggle Menu"
              id="mobile-menu-toggle"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isOpen && (
        <div id="mobile-menu-panel" className="lg:hidden border-t border-slate-100 bg-white/95 divide-y divide-slate-100 flex flex-col px-4 pt-2 pb-6 space-y-2 animate-fade-in">
          {navItems.map((item) => {
            const isActive = currentTab === item.id;
            return (
              <button
                key={item.id}
                id={`mobile-nav-${item.id}`}
                onClick={() => handleNavClick(item.id)}
                className={`w-full text-left py-3.5 px-3 text-base font-semibold rounded-lg transition-colors ${
                  isActive
                    ? 'text-emerald-700 bg-emerald-50'
                    : 'text-slate-600 hover:bg-slate-50'
                }`}
              >
                {item.label}
              </button>
            );
          })}
          <div className="pt-4 flex flex-col gap-3 px-3">
            <button
              onClick={() => handleNavClick('doctors')}
              className="w-full bg-gradient-to-r from-emerald-600 to-teal-800 text-white font-semibold text-center py-3 rounded-xl flex items-center justify-center gap-2 shadow-sm"
              id="mobile-book-now"
            >
              <CalendarRange className="w-5 h-5" />
              <span>Book Appointment</span>
            </button>
            <a 
              href="tel:+911145550900"
              className="flex items-center justify-center gap-2 text-slate-700 font-mono text-sm border border-slate-200 py-2.5 rounded-xl bg-slate-50"
            >
              <Phone className="w-4 h-4 text-emerald-600" />
              <span>Call +91-11-4555-0900</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
