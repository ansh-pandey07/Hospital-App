import React from 'react';
import { Heart, Mail, Phone, MapPin, ShieldAlert, Award, Clock } from 'lucide-react';

interface FooterProps {
  setCurrentTab: (tab: string) => void;
}

export default function Footer({ setCurrentTab }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="hospital-footer" className="bg-slate-900 text-slate-300 border-t border-slate-850">
      
      {/* Top emergency outreach banner */}
      <div className="bg-gradient-to-r from-red-950 to-slate-900 border-b border-red-900/40 px-4 py-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-4 text-center md:text-left">
            <div className="bg-red-500/20 p-3 rounded-full text-red-400">
              <ShieldAlert className="w-8 h-8" />
            </div>
            <div>
              <h4 className="text-white font-sans font-bold text-lg">Clinical Emergency or Ambulance Rescue</h4>
              <p className="text-red-300 text-xs mt-1 max-w-lg">
                Our advanced life support mobile responders are stationed around the capital. Call immediately for trauma, chest pain, or trauma support.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center sm:items-end gap-1">
            <a 
              href="tel:+911145550999" 
              className="px-6 py-3.5 bg-red-600 hover:bg-red-500 text-white font-mono text-xl font-extrabold rounded-xl shadow-lg transition-transform active:scale-95 duration-200 flex items-center gap-2"
              id="emergency-rescue-call-button"
            >
              <Phone className="w-5 h-5" />
              <span>+91 (11) 4555-0999</span>
            </a>
            <span className="text-[10px] uppercase text-red-400 tracking-widest font-mono mt-1">Priority Trauma Intake Line</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Brand/About */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="bg-emerald-600 p-2 rounded-xl text-white">
                <Heart className="w-5 h-5 fill-white" />
              </div>
              <span className="font-sans text-lg font-black tracking-tight text-white uppercase">
                Ratan Lal Hospital
              </span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed">
              Established in 1994, Ratan Lal Hospital has provided top-tier inpatient, diagnostic, and clinical research services of global standards. Accredited by NABH, we deliver elite-level specialist care centered around empathy and advanced clinical solutions.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <Award className="w-5 h-5 text-emerald-400" />
              <span className="text-xs font-mono text-emerald-400 font-bold uppercase tracking-wider">
                India Healthcare Excellence Awardee
              </span>
            </div>
          </div>

          {/* Quick Nav links */}
          <div>
            <h5 className="text-white font-semibold text-sm uppercase tracking-wider mb-6">Patient Navigation</h5>
            <ul className="space-y-3.5 text-xs">
              <li>
                <button onClick={() => setCurrentTab('home')} className="hover:text-white transition-colors text-slate-400 hover:underline">
                  Hospital Overview
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentTab('services')} className="hover:text-white transition-colors text-slate-400 hover:underline">
                  Clinical Specialties
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentTab('doctors')} className="hover:text-white transition-colors text-slate-400 hover:underline">
                  Book Appointments
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentTab('dashboard')} className="hover:text-white transition-colors text-slate-400 hover:underline">
                  Patient Health Portal
                </button>
              </li>
              <li>
                <a href="#general-faq-anchor" onClick={() => setCurrentTab('home')} className="hover:text-white transition-colors text-slate-400 hover:underline">
                  General Hospital FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Operational Hours */}
          <div>
            <h5 className="text-white font-semibold text-sm uppercase tracking-wider mb-6">OPD & Visit Hours</h5>
            <div className="space-y-4 text-xs text-slate-400">
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <div>
                  <span className="block font-medium text-white">Outpatient Ward (OPD)</span>
                  <span className="block mt-0.5 font-mono">Mon to Sat: 08:00 AM – 08:00 PM</span>
                  <span className="block font-mono text-red-400">Sunday: Closed for Routine OPD</span>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <ShieldAlert className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                <div>
                  <span className="block font-medium text-white">Diagnostics & Molecular Labs</span>
                  <span className="block mt-0.5 font-mono">Open Daily: 24 Hours / 365 Days</span>
                  <span className="block text-[10px] text-slate-500">Scheduled scans require booking</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Details */}
          <div>
            <h5 className="text-white font-semibold text-sm uppercase tracking-wider mb-6">Facility Address</h5>
            <ul className="space-y-4 text-xs text-slate-400">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                <span>
                  Sector 12, Outer Ring Road, Near City Center Circle, New Delhi, Delhi 110075
                </span>
              </li>
              <li className="flex items-center gap-2.5 font-mono text-slate-300">
                <Phone className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>+91 (11) 4555-0900 (OPD Desk)</span>
              </li>
              <li className="flex items-center gap-2.5 font-mono text-slate-300">
                <Mail className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>services@ratanlalhospital.org</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Legal and Disclaimer */}
        <div className="mt-16 pt-8 border-t border-slate-800 text-center text-[11px] text-slate-500 space-y-3.5">
          <p>© {currentYear} Ratan Lal Hospital & Allied Research Center. All rights reserved.</p>
          <p className="max-w-4xl mx-auto leading-relaxed">
            Clinical Warning: The contents listed throughout this patient web portal are provided solely for public informational assistance. They do not constitute formal diagnostic advice, and any urgent symptoms or health dilemmas should be instantly directed to direct medical personnel or emergency rooms.
          </p>
        </div>
      </div>
    </footer>
  );
}
