import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Heart, 
  CalendarRange, 
  ArrowUpRight, 
  ChevronRight, 
  Award, 
  ShieldCheck, 
  ThumbsUp, 
  Stethoscope, 
  UserRound, 
  Activity, 
  Bone, 
  Baby, 
  Brain, 
  HelpCircle,
  Plus
} from 'lucide-react';
import { 
  DOCTORS, 
  TESTIMONIALS, 
  HOSPITAL_METRICS, 
  GENERAL_FAQS, 
  SPECIAL_SERVICES_GRID, 
  HERO_BACKGROUND 
} from '../data';

interface HomeViewProps {
  setCurrentTab: (tab: string) => void;
  setSelectedDepartment: (deptId: string) => void;
}

export default function HomeView({ setCurrentTab, setSelectedDepartment }: HomeViewProps) {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const handleDeptClick = (deptId: string) => {
    setSelectedDepartment(deptId);
    setCurrentTab('services');
  };

  const getDeptIcon = (deptName: string) => {
    switch (deptName.toLowerCase()) {
      case 'cardiology': return <Activity className="w-5 h-5" />;
      case 'orthopedics': return <Bone className="w-5 h-5" />;
      case 'pediatrics': return <Baby className="w-5 h-5" />;
      case 'neurology': return <Brain className="w-5 h-5" />;
      default: return <Stethoscope className="w-5 h-5" />;
    }
  };

  return (
    <div id="home-view-container" className="bg-slate-50 min-h-screen">
      
      {/* 1. Hero Section */}
      <section 
        id="hero-banner" 
        className="relative bg-teal-950 text-white overflow-hidden py-24 md:py-32 flex items-center justify-center min-h-[85vh]"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(13, 27, 42, 0.95), rgba(13, 44, 42, 0.8)), url(${HERO_BACKGROUND})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-slate-50 to-transparent pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
          <div className="max-w-3xl">
            
            {/* Tagline */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-xs font-mono font-bold uppercase tracking-widest mb-6"
            >
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>World-Class Medical Excellence</span>
            </motion.div>

            {/* Display Title */}
            <motion.h1 
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-none"
            >
              Caring with Precision,<br />
              <span className="text-emerald-400 bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">
                Healing with Empathy.
              </span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-6 text-base sm:text-lg text-slate-300 leading-relaxed font-sans max-w-2xl"
            >
              Welcome to Ratan Lal Hospital, where state-of-the-art robotic medical tech meets compassionate clinical service. Our premier specialized doctors provide patients with unparalleled therapy and care.
            </motion.p>

            {/* Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <button
                onClick={() => setCurrentTab('doctors')}
                id="hero-cta-book"
                className="px-6 py-3.5 bg-gradient-to-r from-emerald-600 to-teal-700 hover:from-emerald-500 hover:to-teal-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-emerald-900/30 transition-all flex items-center gap-2 transform active:scale-95 duration-2 * cursor-pointer"
              >
                <CalendarRange className="w-5 h-5 text-white" />
                <span>Schedule Appointment</span>
              </button>

              <button
                onClick={() => setCurrentTab('services')}
                id="hero-cta-services"
                className="px-6 py-3.5 bg-slate-800/80 hover:bg-slate-700/80 text-white font-semibold rounded-xl border border-slate-700 transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>View Hospital Wings</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 2. Metrics Bento Section */}
      <section id="metrics-section" className="relative z-20 -mt-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-xl border border-slate-100 p-8 sm:p-10">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 divide-y md:divide-y-0 md:divide-x divide-slate-100">
            {HOSPITAL_METRICS.map((metric, idx) => (
              <div 
                key={idx} 
                className="text-center pt-6 md:pt-0 md:px-4 flex flex-col justify-center"
                id={`hospital-metric-${idx}`}
              >
                <span className="block text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-sans">
                  {metric.value}
                </span>
                <span className="block text-xs uppercase tracking-wider text-slate-500 font-mono mt-2 leading-tight">
                  {metric.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Specialized Departments Preview Cards Grid */}
      <section id="specialties-section" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-emerald-700 text-xs font-mono font-bold uppercase tracking-widest bg-emerald-50 px-3 py-1.5 rounded-full inline-block">
            Specialized Care Centers
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-950 tracking-tight mt-4">
            Our Centers of Medical Excellence
          </h2>
          <p className="text-slate-600 mt-3 text-sm sm:text-base leading-relaxed">
            From pediatric immunizations to complex, multi-stage bypass operations, our clinical wings are staffed to support specialized wellness journeys.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SPECIAL_SERVICES_GRID.map((dept) => (
            <div
              key={dept.target}
              id={`dept-preview-${dept.target}`}
              className="group bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="relative h-48 overflow-hidden bg-slate-100">
                  <img
                    src={dept.img}
                    alt={dept.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/95 backdrop-blur-sm text-[10px] font-mono font-bold uppercase text-emerald-800 rounded-full shadow-sm">
                      {dept.tag}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-emerald-700 mb-2">
                    {getDeptIcon(dept.title)}
                    <h3 className="font-bold text-lg text-slate-900 group-hover:text-emerald-700 transition-colors">
                      {dept.title}
                    </h3>
                  </div>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mt-1">
                    {dept.desc}
                  </p>
                </div>
              </div>
              <div className="px-6 pb-6 pt-2">
                <button
                  onClick={() => handleDeptClick(dept.target)}
                  className="w-full text-center text-xs font-semibold text-emerald-700 bg-emerald-50 group-hover:bg-emerald-600 group-hover:text-white py-3 rounded-lg flex items-center justify-center gap-1.5 transition-all"
                >
                  <span>Explore Wing Details</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Doctors Team Showcase */}
      <section id="doctors-highlight" className="py-20 bg-slate-100/60 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <span className="text-emerald-700 text-xs font-mono font-bold uppercase tracking-widest bg-emerald-50 px-3 py-1.5 rounded-full inline-block">
                Clinical Specialists
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-950 tracking-tight mt-4">
                Consult with Senior Specialists
              </h2>
              <p className="text-slate-600 mt-2 text-sm sm:text-base leading-relaxed">
                Our resident medical board is made up of prestigious international clinicians, authors, and pediatric supervisors.
              </p>
            </div>
            <button
              onClick={() => setCurrentTab('doctors')}
              className="px-6 py-3 bg-white hover:bg-slate-50 text-slate-800 font-semibold text-sm border border-slate-200/80 rounded-xl flex items-center gap-2 group shadow-sm transition-all"
            >
              <span>Search Specialist Directory</span>
              <ChevronRight className="w-4 h-4 text-emerald-600 transition-transform group-hover:translate-x-0.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {DOCTORS.slice(0, 4).map((doctor) => (
              <div 
                key={doctor.id} 
                id={`doctor-card-${doctor.id}`}
                className="bg-white rounded-2xl overflow-hidden border border-slate-200/50 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-64 bg-slate-100">
                    <img 
                      src={doctor.image} 
                      alt={doctor.name} 
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-top"
                    />
                    <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md px-3.5 py-2.5 rounded-xl border border-white/50 shadow-sm">
                      <span className="block text-[11px] uppercase tracking-widest text-emerald-800 font-mono font-bold leading-none">
                        {doctor.specialty}
                      </span>
                      <span className="block text-[14px] font-extrabold text-slate-900 mt-1 leading-tight">
                        {doctor.name}
                      </span>
                    </div>
                  </div>
                  <div className="p-5 text-xs text-slate-600 space-y-2 leading-relaxed">
                    <p className="font-semibold text-slate-800">{doctor.education}</p>
                    <p className="line-clamp-3 text-slate-500 italic mt-1 font-sans">
                      "{doctor.bio}"
                    </p>
                  </div>
                </div>
                <div className="px-5 pb-5 pt-2">
                  <button
                    onClick={() => {
                      setCurrentTab('doctors');
                    }}
                    className="w-full text-center border border-emerald-600 text-emerald-700 hover:bg-emerald-600 hover:text-white py-2.5 rounded-lg text-xs font-bold transition-all"
                  >
                    Check Available Days
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Patient Testimonials */}
      <section id="patient-success" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-emerald-700 text-xs font-mono font-bold uppercase tracking-widest bg-emerald-50 px-3 py-1.5 rounded-full inline-block">
            Success & Recoveries
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mt-4">
            Empathy is Best Heard in Their Words
          </h2>
          <p className="text-slate-600 mt-2 text-sm">
            Read from patients who went and beat critical ailments under our clinicians watch.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {TESTIMONIALS.map((test) => (
            <div 
              key={test.id} 
              id={test.id}
              className="bg-white border border-slate-100 rounded-3xl p-8 sm:p-10 shadow-sm relative flex flex-col justify-between"
            >
              <div className="space-y-6">
                <div className="flex items-center gap-1">
                  {[...Array(test.rating)].map((_, i) => (
                    <ThumbsUp key={i} className="w-4 h-4 text-amber-500 fill-amber-400" />
                  ))}
                </div>
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed italic relative z-10 font-sans">
                  "{test.text}"
                </p>
              </div>

              <div className="flex items-center gap-4 mt-8 pt-6 border-t border-slate-50">
                <img 
                  src={test.image} 
                  alt={test.name} 
                  referrerPolicy="no-referrer"
                  className="w-14 h-14 rounded-full border-2 border-emerald-500 object-cover"
                />
                <div>
                  <h4 className="font-bold text-slate-900 text-sm sm:text-base">{test.name}</h4>
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 mt-0.5 font-mono">
                    <span>{test.role}</span>
                    <span>•</span>
                    <span className="text-emerald-700 font-sans font-semibold bg-emerald-50 px-2 py-0.5 rounded">
                      {test.treatmentRec}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. FAQ Section */}
      <section id="general-faq-anchor" className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-emerald-950/20 via-slate-900/10 to-transparent pointer-events-none" />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-cyan-400 text-xs font-mono font-bold uppercase tracking-widest border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 rounded-full inline-block">
              Hospital Guidelines & Desk Help
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-4">
              Patient Guidelines FAQ
            </h2>
          </div>

          <div className="space-y-4">
            {GENERAL_FAQS.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div 
                  key={idx} 
                  className="bg-slate-850/80 rounded-2xl border border-slate-800 overflow-hidden"
                  id={`home-faq-wrapper-${idx}`}
                >
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                    className="w-full text-left px-6 py-5 sm:py-6 flex justify-between items-center transition-all focus:outline-none focus:bg-slate-800"
                    id={`home-faq-toggle-${idx}`}
                  >
                    <span className="font-bold text-sm sm:text-base text-slate-100 pr-4">
                      {faq.question}
                    </span>
                    <Plus className={`w-5 h-5 text-emerald-400 transition-transform ${isOpen ? 'rotate-45' : ''}`} />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 text-xs sm:text-sm text-slate-350 leading-relaxed border-t border-slate-800/50 pt-4 animate-fade-in">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

    </div>
  );
}
