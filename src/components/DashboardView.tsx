import React, { useState, useEffect } from 'react';
import { 
  FileText, 
  Trash2, 
  Plus, 
  Calendar, 
  Clock, 
  User, 
  CheckCircle, 
  AlertCircle, 
  Activity, 
  Download,
  AlertTriangle,
  Heart,
  ChevronRight,
  BookOpen
} from 'lucide-react';
import { Appointment } from '../types';

export default function DashboardView() {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [symptomLogs, setSymptomLogs] = useState<{ id: string; date: string; symptom: string; level: string }[]>([]);
  
  // Symptom log form state
  const [newSymptom, setNewSymptom] = useState('');
  const [painLevel, setPainLevel] = useState('Mild');

  // Load state from localStorage on mount
  useEffect(() => {
    loadLocalData();
  }, []);

  const loadLocalData = () => {
    // 1. Appointments
    const savedAppts = localStorage.getItem('ratan_lal_appointments');
    if (savedAppts) {
      setAppointments(JSON.parse(savedAppts));
    } else {
      // Default initial mock if empty to demonstrate structure gracefully
      const defaultMock: Appointment[] = [
        {
          id: 'RLH-7821-25',
          doctorName: 'Dr. Alok Sharma',
          doctorImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAAd89svE8pn1J7sK5WsJRYC6Jx_uBB1z7PTuRTDsDFUR7kS_tq9Nvx2bcabL9dzWrcHz4WYQzf9Sw1uC3KPjVfkgMarPlvnIOSpQFEFRkVFlHiRPYCJRxfnR2a9bNTAdiWqa30KszLUlApuRRBjALPIhOC61t8KJF_6WpKcsF7nm4haI3plCJ_r2jz9OU-krxNhyooX3GILB24cOci9bB7eLzKTZQ4ohIKhbRbv5pk_WJCIG-T3EE2yQiaamoWanEdywbzUHujve8P',
          specialty: 'Cardiology',
          date: new Date(Date.now() + 86400000 * 2).toISOString().split('T')[0], // 2 days from now
          timeSlot: '11:30 AM - 12:30 PM',
          patientName: 'John Doe',
          patientPhone: '+91 98765 43210',
          patientEmail: 'johndoe@example.com',
          symptoms: 'Periodic palpitations and high pulse tracking',
          status: 'Confirmed',
          createdAt: new Date().toISOString()
        }
      ];
      localStorage.setItem('ratan_lal_appointments', JSON.stringify(defaultMock));
      setAppointments(defaultMock);
    }

    // 2. Symptom Journal Logs
    const savedLogs = localStorage.getItem('ratan_lal_symptoms');
    if (savedLogs) {
      setSymptomLogs(JSON.parse(savedLogs));
    } else {
      const defaultLogs = [
        { id: 'log-1', date: new Date().toISOString().split('T')[0], symptom: 'Slight lower back tension from physical rehabilitation exercise', level: 'Mild' }
      ];
      localStorage.setItem('ratan_lal_symptoms', JSON.stringify(defaultLogs));
      setSymptomLogs(defaultLogs);
    }
  };

  const handleCancelAppointment = (id: string) => {
    const updated = appointments.map(appt => {
      if (appt.id === id) {
        return { ...appt, status: 'Cancelled' as const };
      }
      return appt;
    });
    localStorage.setItem('ratan_lal_appointments', JSON.stringify(updated));
    setAppointments(updated);
  };

  const handleDeleteAppointment = (id: string) => {
    const filtered = appointments.filter(appt => appt.id !== id);
    localStorage.setItem('ratan_lal_appointments', JSON.stringify(filtered));
    setAppointments(filtered);
  };

  const handleAddSymptomLog = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newSymptom.trim()) return;

    const newLog = {
      id: `log-${Math.random().toString(36).substring(2, 9)}`,
      date: new Date().toISOString().split('T')[0],
      symptom: newSymptom,
      level: painLevel
    };

    const updated = [newLog, ...symptomLogs];
    localStorage.setItem('ratan_lal_symptoms', JSON.stringify(updated));
    setSymptomLogs(updated);
    setNewSymptom('');
  };

  const handleDeleteSymptomLog = (id: string) => {
    const filtered = symptomLogs.filter(log => log.id !== id);
    localStorage.setItem('ratan_lal_symptoms', JSON.stringify(filtered));
    setSymptomLogs(filtered);
  };

  // Pre-made discharge guidance PDF simulation files
  const SIMULATED_GUIDELINES = [
    { name: 'Cardiology Care Intake Guidelines.pdf', size: '1.2 MB', category: 'Cardiology' },
    { name: 'Physiotherapy Outpatient Routine Exercises.pdf', size: '2.4 MB', category: 'Orthopedics' },
    { name: 'NICU Parents Emergency Handbook.pdf', size: '1.8 MB', category: 'Pediatrics' },
    { name: 'Dietary Habits for Hypertensive Control.pdf', size: '0.8 MB', category: 'General Medicine' }
  ];

  return (
    <div id="patient-dashboard-container" className="bg-slate-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Dashboard Title Header */}
        <div className="mb-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <span className="text-emerald-700 text-xs font-mono font-bold uppercase tracking-widest bg-emerald-50 px-3 py-1.5 rounded-full inline-block">
              Secure Patient Health File
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-3">
              Personal Patient Dashboard
            </h1>
            <p className="text-slate-600 mt-2 text-sm sm:text-base">
              Track clinical OPD appointments, log wellness parameters, coordinate symptoms logs, or download preparation pamphlets.
            </p>
          </div>
          
          <div className="flex items-center gap-3.5 bg-white px-5 py-4 rounded-2xl border border-slate-100 shadow-sm shrink-0">
            <div className="bg-emerald-600 p-2 rounded-full text-white">
              <CheckCircle className="w-5 h-5" />
            </div>
            <div>
              <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">Portal Connection</p>
              <h4 className="text-xs sm:text-sm font-extrabold text-slate-900 leading-tight">Secure Cloud Access</h4>
            </div>
          </div>
        </div>

        {/* Bento Board Grids */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Active Appointments block: LEFT 7 - columns */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* Appointments panel */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-sm space-y-6">
              <div className="flex justify-between items-center border-b border-slate-50 pb-4">
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-emerald-600" />
                  <h2 className="font-extrabold text-lg text-slate-900">Registered Appointment Cards</h2>
                </div>
                <span className="text-xs font-mono bg-emerald-50 text-emerald-800 font-extrabold px-2.5 py-1 rounded">
                  {appointments.length} Total
                </span>
              </div>

              {appointments.length === 0 ? (
                <div className="p-10 text-center space-y-4">
                  <AlertCircle className="w-12 h-12 text-slate-300 mx-auto" />
                  <p className="text-slate-600 text-sm">You have zero registered OPD appointments at this moment.</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {appointments.map((appt) => {
                    const isCancelled = appt.status === 'Cancelled';
                    return (
                      <div 
                        key={appt.id} 
                        id={`dashboard-appt-log-${appt.id}`}
                        className={`border rounded-2xl p-5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 transition-all ${
                          isCancelled 
                            ? 'bg-slate-50/70 border-slate-200/60 opacity-60' 
                            : 'bg-white border-slate-200 hover:border-emerald-500/40'
                        }`}
                      >
                        <div className="flex gap-4 items-center">
                          <img 
                            src={appt.doctorImage} 
                            alt={appt.doctorName} 
                            referrerPolicy="no-referrer"
                            className="w-14 h-14 rounded-xl object-cover object-top shrink-0 border border-slate-150"
                          />
                          <div className="space-y-1">
                            <div className="flex items-center gap-2">
                              <span className="block font-black text-slate-900 text-sm sm:text-base">{appt.doctorName}</span>
                              <span className="text-[10px] font-mono bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded font-bold uppercase">
                                {appt.id}
                              </span>
                            </div>
                            
                            <div className="flex flex-wrap gap-x-3 gap-y-1 text-xs text-slate-500 font-mono">
                              <span className="flex items-center gap-1">
                                <Calendar className="w-3.5 h-3.5 text-emerald-600" />
                                <span>{appt.date}</span>
                              </span>
                              <span className="flex items-center gap-1">
                                <Clock className="w-3.5 h-3.5 text-emerald-600" />
                                <span>{appt.timeSlot}</span>
                              </span>
                            </div>
                            <p className="text-xs text-slate-600 leading-tight pt-1 italic font-sans max-w-sm sm:max-w-md line-clamp-1">
                              Symptom: {appt.symptoms}
                            </p>
                          </div>
                        </div>

                        {/* Appt cancel triggers */}
                        <div className="flex items-center gap-3.5 shrink-0 self-end sm:self-auto border-t sm:border-t-0 border-slate-100 pt-3 sm:pt-0 w-full sm:w-auto justify-end">
                          {isCancelled ? (
                            <>
                              <span className="text-[11px] font-mono uppercase bg-red-50 text-red-700 px-2.5 py-1 rounded-lg font-bold">
                                Session Cancelled
                              </span>
                              <button 
                                onClick={() => handleDeleteAppointment(appt.id)}
                                className="text-slate-400 hover:text-red-650 p-1 rounded"
                                title="Remove Log"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </>
                          ) : (
                            <>
                              <span className="text-[11px] font-mono uppercase bg-emerald-50 text-emerald-800 px-2.5 py-1 rounded-lg font-bold">
                                Confirmed Check-In
                              </span>
                              <button
                                onClick={() => handleCancelAppointment(appt.id)}
                                className="text-slate-500 hover:text-red-600 bg-red-50 hover:bg-red-100/50 text-xs py-1.5 px-3 rounded-lg font-bold"
                                id={`cancel-appt-btn-${appt.id}`}
                              >
                                Cancel OPD
                              </button>
                            </>
                          )}
                        </div>

                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Simulated symptom logging and pain tracker */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-sm space-y-6">
              <div className="flex justify-between items-center border-b border-slate-50 pb-4">
                <div className="flex items-center gap-2">
                  <Activity className="w-5 h-5 text-emerald-600" />
                  <h2 className="font-extrabold text-lg text-slate-900">Symptom Journaling logs</h2>
                </div>
              </div>

              {/* Add form */}
              <form onSubmit={handleAddSymptomLog} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="text"
                  placeholder="Record immediate ailments (temp, discomfort, heart rate logs, energy cycles...)"
                  value={newSymptom}
                  onChange={(e) => setNewSymptom(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 px-4 py-2.5 rounded-xl text-xs sm:text-sm focus:outline-none focus:border-emerald-600"
                  id="dashboard-symptom-input"
                />
                
                <div className="flex gap-2">
                  <select
                    value={painLevel}
                    onChange={(e) => setPainLevel(e.target.value)}
                    className="bg-slate-50 border border-slate-200 px-2 rounded-xl text-xs font-bold font-sans cursor-pointer"
                    id="dashboard-pain-level-select"
                  >
                    <option value="Mild">Mild Level</option>
                    <option value="Moderate">Moderate Level</option>
                    <option value="Acute">Acute Discomfort</option>
                  </select>

                  <button
                    type="submit"
                    className="px-4 py-2.5 bg-emerald-700 hover:bg-emerald-600 text-white font-semibold text-xs sm:text-sm rounded-xl shrink-0 flex items-center justify-center gap-1 cursor-pointer"
                    id="submit-symptom-log-button"
                  >
                    <Plus className="w-4 h-4" />
                    <span>Log</span>
                  </button>
                </div>
              </form>

              {/* Symptoms output logs stack */}
              <div className="space-y-3">
                {symptomLogs.length === 0 ? (
                  <p className="text-xs text-slate-400">Your patient symptom diary is empty. Start recording entries above.</p>
                ) : (
                  symptomLogs.map((log) => {
                    const levelColors: Record<string, string> = {
                      'Mild': 'bg-emerald-50 text-emerald-800 border-emerald-100',
                      'Moderate': 'bg-amber-50 text-amber-800 border-amber-100',
                      'Acute': 'bg-rose-50 text-rose-800 border-rose-100'
                    };
                    return (
                      <div 
                        key={log.id} 
                        className="bg-slate-50 border border-slate-100 rounded-xl p-3.5 flex justify-between items-center gap-4 text-xs font-serif"
                        id={`symptom-log-${log.id}`}
                      >
                        <div className="space-y-1 font-sans">
                          <div className="flex gap-2 items-center">
                            <span className="text-[10px] text-slate-400 font-mono font-bold">{log.date}</span>
                            <span className={`px-2 py-0.5 border text-[9px] rounded-full font-mono font-bold uppercase leading-none ${levelColors[log.level] || levelColors['Mild']}`}>
                              {log.level}
                            </span>
                          </div>
                          <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">{log.symptom}</p>
                        </div>
                        <button
                          onClick={() => handleDeleteSymptomLog(log.id)}
                          className="text-slate-400 hover:text-red-650 shrink-0"
                          title="Delete Log"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    );
                  })
                )}
              </div>

            </div>

          </div>

          {/* Guidelines catalog & health checklists: RIGHT 4 - columns */}
          <div className="lg:col-span-4 space-y-8">
            
            {/* Guidebooks list */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-sm space-y-6">
              <div>
                <div className="flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-emerald-600" />
                  <h3 className="font-extrabold text-slate-900 text-lg">Inpatient Prep Library</h3>
                </div>
                <p className="text-slate-500 text-xs mt-1">
                  Official hospital guidelines in downloadable PDF containers.
                </p>
              </div>

              <div className="divide-y divide-slate-100">
                {SIMULATED_GUIDELINES.map((file, idx) => (
                  <div key={idx} className="py-3 flex justify-between items-center gap-4">
                    <div className="space-y-0.5">
                      <span className="block text-xs font-bold text-slate-800 truncate max-w-[190px]" title={file.name}>
                        {file.name}
                      </span>
                      <span className="block text-[10px] text-slate-400 uppercase font-mono tracking-wider font-semibold">
                        {file.category} — {file.size}
                      </span>
                    </div>
                    {/* Trigger local file download browser trigger mockup */}
                    <button
                      onClick={() => alert(`Simulating PDF download for: "${file.name}"`)}
                      className="p-2 border border-slate-100 rounded-lg bg-slate-50 text-slate-600 hover:bg-emerald-50 hover:text-emerald-700 hover:border-emerald-100 transition-colors"
                      title="Download PDF Catalog"
                      id={`btn-download-pdf-${idx}`}
                    >
                      <Download className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Health Checklist tracking block */}
            <div className="bg-gradient-to-tr from-teal-900 to-emerald-950 text-white rounded-3xl p-6 sm:p-8 space-y-4">
              <div className="flex items-center gap-2 text-emerald-300">
                <Heart className="w-5 h-5 animate-pulse" />
                <span className="font-mono text-xs font-bold uppercase tracking-wider">Inpatient Ward Safety Checklist</span>
              </div>
              <h4 className="font-bold text-sm sm:text-base leading-snug">Prepare for Admission with Peace of Mind</h4>
              
              <ul className="space-y-3 pt-2 text-xs">
                <li className="flex gap-2.5 items-start">
                  <span className="bg-emerald-500/20 p-0.5 rounded-full shrink-0">
                    <CheckCircle className="w-4 h-4 text-emerald-400" />
                  </span>
                  <span>Bring clinical referral, lab test papers & discharge files.</span>
                </li>
                <li className="flex gap-2.5 items-start">
                  <span className="bg-emerald-500/20 p-0.5 rounded-full shrink-0">
                    <CheckCircle className="w-4 h-4 text-emerald-400" />
                  </span>
                  <span>Avoid physical jewelry, bulk currency, or active work gear.</span>
                </li>
                <li className="flex gap-2.5 items-start">
                  <span className="bg-emerald-500/20 p-0.5 rounded-full shrink-0">
                    <CheckCircle className="w-4 h-4 text-emerald-400" />
                  </span>
                  <span>Maintain a list of active personal medicine dosages.</span>
                </li>
              </ul>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
