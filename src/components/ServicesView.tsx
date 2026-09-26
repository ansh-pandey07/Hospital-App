import React, { useEffect, useRef } from 'react';
import { 
  Activity, 
  Bone, 
  Scan, 
  Baby, 
  Brain, 
  PhoneCall, 
  HeartHandshake, 
  Check, 
  Calendar,
  AlertTriangle,
  UserRound,
  ArrowRight
} from 'lucide-react';
import { SERVICES, DOCTORS } from '../data';
import { ServiceDetail } from '../types';

interface ServicesViewProps {
  currentTab: string;
  setCurrentTab: (tab: string) => void;
  selectedDepartment: string;
  setSelectedDepartment: (deptId: string) => void;
}

export default function ServicesView({ 
  currentTab, 
  setCurrentTab, 
  selectedDepartment, 
  setSelectedDepartment 
}: ServicesViewProps) {
  
  const contentSectionRef = useRef<HTMLDivElement>(null);

  // Default to Cardiology if none is set
  useEffect(() => {
    if (!selectedDepartment) {
      setSelectedDepartment('cardiology');
    }
  }, [selectedDepartment, setSelectedDepartment]);

  // Smooth scroll into clinical view on trigger
  useEffect(() => {
    if (contentSectionRef.current) {
      contentSectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [selectedDepartment]);

  const activeService = SERVICES.find(s => s.id === selectedDepartment) || SERVICES[0];

  const getServiceIcon = (iconName: string, className: string = "w-6 h-6") => {
    switch (iconName.toLowerCase()) {
      case 'activity': return <Activity className={className} />;
      case 'bone': return <Bone className={className} />;
      case 'scan': return <Scan className={className} />;
      case 'baby': return <Baby className={className} />;
      case 'brain': return <Brain className={className} />;
      default: return <Activity className={className} />;
    }
  };

  const getDepartmentDoctors = (deptId: string) => {
    // Map data specialty to corresponding ID
    const mapping: Record<string, string> = {
      'cardiology': 'Cardiology',
      'orthopedics': 'Orthopedics',
      'pediatrics': 'Pediatrics',
      'neurology': 'Neurology',
      'diagnostics': 'Diagnostics & Radiology'
    };
    const targetDept = mapping[deptId] || '';
    return DOCTORS.filter(doc => doc.specialty === targetDept);
  };

  const currentDeptDoctors = getDepartmentDoctors(activeService.id);

  return (
    <div id="services-view-container" className="bg-slate-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page title header */}
        <div className="mb-12 text-center md:text-left">
          <span className="text-emerald-700 text-xs font-mono font-bold uppercase tracking-widest bg-emerald-50 px-3 py-1.5 rounded-full inline-block">
            Specialized Departments
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-3">
            World-Class Diagnostic & Inpatient Centers
          </h1>
          <p className="text-slate-600 mt-2 text-sm sm:text-base max-w-2xl leading-relaxed">
            Select an auxiliary medical wing from our secondary controller tray to discover surgical treatment programs, specific diagnostics tools, and certified practitioners.
          </p>
        </div>

        {/* Outer Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* LEFT Sidebar - Wing Selector */}
          <div className="lg:col-span-4 space-y-4">
            <div className="bg-white rounded-3xl p-5 border border-slate-100 shadow-sm space-y-2">
              <span className="block text-[11px] font-mono tracking-widest uppercase text-slate-400 px-3 pb-2 font-bold border-b border-slate-50">
                Medical Divisions
              </span>
              <div className="space-y-1.5 pt-2">
                {SERVICES.map((serv) => {
                  const isActive = serv.id === activeService.id;
                  return (
                    <button
                      key={serv.id}
                      id={`sidebar-dept-${serv.id}`}
                      onClick={() => setSelectedDepartment(serv.id)}
                      className={`w-full text-left px-4 py-3.5 rounded-2xl text-sm font-semibold flex items-center gap-3.5 transition-all focus:outline-none ${
                        isActive
                          ? 'bg-gradient-to-r from-emerald-600 to-teal-800 text-white shadow-md'
                          : 'text-slate-700 hover:bg-slate-100 hover:text-slate-900'
                      }`}
                    >
                      <div className={`p-2 rounded-xl transition-colors ${isActive ? 'bg-white/20 text-white' : 'bg-slate-50 text-slate-500'}`}>
                        {getServiceIcon(serv.icon, "w-4 h-4")}
                      </div>
                      <span>{serv.name.split(' ')[0]} Clinical Division</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Quick Emergency Assistance Call Card */}
            <div className="bg-gradient-to-tr from-rose-900 to-slate-950 text-white rounded-3xl p-6 border border-rose-950/20 shadow-md space-y-4">
              <div className="flex items-center gap-3">
                <AlertTriangle className="w-5 h-5 text-rose-400 animate-pulse" />
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-rose-300">Emergency Desk</span>
              </div>
              <h4 className="text-base font-bold leading-tight font-sans">
                {activeService.name.split(' ')[0]} Ward Direct Intervention Line
              </h4>
              <p className="text-slate-300 text-xs">
                To consult the duty registrar or request immediate surgical trauma transport:
              </p>
              <div className="pt-2">
                <a 
                  href={`tel:${activeService.emergencyContact}`} 
                  className="w-full text-center py-3 bg-red-600 hover:bg-red-500 text-white font-mono font-extrabold text-sm rounded-xl flex items-center justify-center gap-2 transition-transform active:scale-95 duration-200"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>{activeService.emergencyContact}</span>
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT Panel - Core Content */}
          <div ref={contentSectionRef} className="lg:col-span-8 space-y-8 h-full">
            <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden flex flex-col justify-between">
              
              {/* Detailed Hero Image */}
              <div className="relative h-64 sm:h-80 bg-slate-200">
                <img 
                  src={activeService.image} 
                  alt={activeService.name} 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-8 sm:p-10">
                  <div className="flex items-center gap-4">
                    <div className="bg-emerald-500/90 p-3 rounded-2xl text-white shadow-lg">
                      {getServiceIcon(activeService.icon, "w-8 h-8")}
                    </div>
                    <div>
                      <span className="block text-[11px] font-mono tracking-widest text-emerald-300 font-extrabold uppercase">
                        Center of Clinical Excellence
                      </span>
                      <h2 className="block text-xl sm:text-2xl font-extrabold text-white mt-1">
                        {activeService.name}
                      </h2>
                    </div>
                  </div>
                </div>
              </div>

              {/* Main Information */}
              <div className="p-8 sm:p-10 space-y-8">
                
                {/* Description block */}
                <div className="space-y-4">
                  <h3 className="text-slate-900 font-extrabold text-lg sm:text-xl">Departmental Diagnostic Scope</h3>
                  <p className="text-slate-700 text-xs sm:text-sm leading-relaxed font-sans">
                    {activeService.fullDescription}
                  </p>
                </div>

                {/* Procedures list */}
                <div className="space-y-4">
                  <h3 className="text-slate-900 font-extrabold text-base sm:text-lg">Key Treatments & Surgical Specializations</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
                    {activeService.treatments.map((treatment, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-600">
                        <div className="mt-0.5 bg-emerald-50 text-emerald-600 p-1 rounded-full shrink-0">
                          <Check className="w-3.5 h-3.5" strokeWidth={3} />
                        </div>
                        <span>{treatment}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* FAQ section */}
                <div className="pt-6 border-t border-slate-100 space-y-4">
                  <h3 className="text-slate-900 font-extrabold text-base sm:text-lg">Specialty Guidelines FAQs</h3>
                  <div className="space-y-4">
                    {activeService.faqs.map((faq, idx) => (
                      <div key={idx} className="bg-slate-50 rounded-2xl p-5 border border-slate-100">
                        <span className="block font-bold text-[13px] sm:text-[14px] text-slate-900 line-clamp-2">
                          Q: {faq.question}
                        </span>
                        <span className="block mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed pl-4 border-l-2 border-emerald-500">
                          {faq.answer}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>

            {/* Department Active Clinicians Board */}
            {currentDeptDoctors.length > 0 && (
              <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-100 shadow-sm space-y-6">
                <div>
                  <h3 className="text-slate-900 font-extrabold text-lg sm:text-xl">Resident Clinical Specialists</h3>
                  <p className="text-slate-500 text-xs sm:text-sm mt-1">
                    The following board certified doctors are on active rotation in this medical block.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {currentDeptDoctors.map((doc) => (
                    <div 
                      key={doc.id} 
                      className="border border-slate-150 rounded-2xl p-5 hover:border-emerald-500/40 hover:bg-slate-50/50 transition-all flex gap-4"
                    >
                      <img 
                        src={doc.image} 
                        alt={doc.name} 
                        referrerPolicy="no-referrer"
                        className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl object-cover object-top shrink-0 border border-slate-200"
                      />
                      <div className="space-y-1.5 flex flex-col justify-center">
                        <span className="block font-bold text-slate-900 text-sm sm:text-base">{doc.name}</span>
                        <span className="block text-[11px] font-mono uppercase tracking-wider text-emerald-800 font-bold bg-emerald-50 px-2 py-0.5 rounded self-start">
                          {doc.specialty}
                        </span>
                        <p className="text-[11px] text-slate-500 line-clamp-2 mt-1">{doc.education}</p>
                        <button
                          onClick={() => {
                            setCurrentTab('doctors');
                          }}
                          className="flex items-center gap-1 text-[11px] font-mono text-emerald-700 font-extrabold hover:underline pt-1.5"
                        >
                          <span>Schedule with {doc.name.split(' ')[1]}</span>
                          <ArrowRight className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>

        </div>

      </div>
    </div>
  );
}
