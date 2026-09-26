import React, { useState, useEffect } from 'react';
import { 
  Search, 
  Filter, 
  MapPin, 
  Clock, 
  CalendarRange, 
  User, 
  Mail, 
  Phone, 
  AlertCircle, 
  CheckCircle2, 
  FileText, 
  Star, 
  Calendar,
  Sparkles,
  Printer
} from 'lucide-react';
import { DOCTORS } from '../data';
import { Doctor, Appointment } from '../types';

interface DoctorsViewProps {
  currentTab: string;
  setCurrentTab: (tab: string) => void;
  onAppointmentCreated: () => void;
}

export default function DoctorsView({ currentTab, setCurrentTab, onAppointmentCreated }: DoctorsViewProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSpecialty, setSelectedSpecialty] = useState('All');
  
  // Booking Form State
  const [bookingSpecialty, setBookingSpecialty] = useState('Cardiology');
  const [selectedDoctorId, setSelectedDoctorId] = useState('');
  const [bookingDate, setBookingDate] = useState('');
  const [selectedTimeSlot, setSelectedTimeSlot] = useState('');
  const [patientName, setPatientName] = useState('');
  const [patientPhone, setPatientPhone] = useState('');
  const [patientEmail, setPatientEmail] = useState('');
  const [symptoms, setSymptoms] = useState('');
  
  const [errorMsg, setErrorMsg] = useState('');
  const [activeTicket, setActiveTicket] = useState<Appointment | null>(null);

  // Time Slots definition
  const TIME_SLOTS = [
    '09:00 AM - 10:00 AM',
    '10:15 AM - 11:15 AM',
    '11:30 AM - 12:30 PM',
    '02:00 PM - 03:00 PM',
    '03:15 PM - 04:15 PM',
    '04:30 PM - 05:30 PM'
  ];

  // Unique list of specialties
  const specialties = ['All', 'Cardiology', 'Orthopedics', 'Pediatrics', 'Neurology', 'General Medicine & Family Health', 'Diagnostics & Radiology'];

  // Filtered doctors list
  const filteredDoctors = DOCTORS.filter(doc => {
    const matchesSearch = doc.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          doc.education.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSpecialty = selectedSpecialty === 'All' || doc.specialty === selectedSpecialty;
    return matchesSearch && matchesSpecialty;
  });

  // Keep booking doctors matching chosen specialty in the scheduler form
  const schedulableDoctors = DOCTORS.filter(doc => {
    // Map internal categories or use loose match
    if (bookingSpecialty === 'Cardiology') return doc.specialty === 'Cardiology';
    if (bookingSpecialty === 'Orthopedics') return doc.specialty === 'Orthopedics';
    if (bookingSpecialty === 'Pediatrics') return doc.specialty === 'Pediatrics';
    if (bookingSpecialty === 'Neurology') return doc.specialty === 'Neurology';
    if (bookingSpecialty === 'Diagnostics & Labs') return doc.specialty === 'Diagnostics & Radiology';
    return doc.specialty === 'General Medicine & Family Health';
  });

  // Select first doctor of chosen category automatically on category change
  useEffect(() => {
    if (schedulableDoctors.length > 0) {
      setSelectedDoctorId(schedulableDoctors[0].id);
    } else {
      setSelectedDoctorId('');
    }
  }, [bookingSpecialty]);

  const handleConsultTrigger = (doctor: Doctor) => {
    // Adjust specialty and doctor in form
    const specMap: Record<string, string> = {
      'Cardiology': 'Cardiology',
      'Orthopedics': 'Orthopedics',
      'Pediatrics': 'Pediatrics',
      'Neurology': 'Neurology',
      'Diagnostics & Radiology': 'Diagnostics & Labs',
      'General Medicine & Family Health': 'General Medicine'
    };
    setBookingSpecialty(specMap[doctor.specialty] || 'Cardiology');
    setSelectedDoctorId(doctor.id);
    
    // Smooth scroll directly to scheduling block
    const formSec = document.getElementById('scheduler-card-anchor');
    if (formSec) {
      formSec.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Form submission handler
  const handleBookNow = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    // Form validation
    if (!selectedDoctorId) {
      setErrorMsg('Please select a specialist from our roster.');
      return;
    }
    if (!bookingDate) {
      setErrorMsg('Please specify a secure appointment calendar day.');
      return;
    }
    if (!selectedTimeSlot) {
      setErrorMsg('Please select a clinical hour slot.');
      return;
    }
    if (!patientName.trim()) {
      setErrorMsg('Please state the patient first and last name.');
      return;
    }
    if (!patientPhone.trim()) {
      setErrorMsg('Please specify a valid patient cell contact.');
      return;
    }
    if (!patientEmail.trim()) {
      setErrorMsg('Please state a valid patient email address.');
      return;
    }

    const doctorDetails = DOCTORS.find(d => d.id === selectedDoctorId);
    if (!doctorDetails) return;

    // Create unique Ticket
    const ticketId = `RLH-${Math.floor(1000 + Math.random() * 9000)}-${Math.floor(10 + Math.random() * 89)}`;
    const newAppointment: Appointment = {
      id: ticketId,
      doctorName: doctorDetails.name,
      doctorImage: doctorDetails.image,
      specialty: doctorDetails.specialty,
      date: bookingDate,
      timeSlot: selectedTimeSlot,
      patientName: patientName,
      patientPhone: patientPhone,
      patientEmail: patientEmail,
      symptoms: symptoms || 'Routine preventative checkup',
      status: 'Confirmed',
      createdAt: new Date().toISOString()
    };

    // Save to localStorage
    const saved = localStorage.getItem('ratan_lal_appointments');
    const existing: Appointment[] = saved ? JSON.parse(saved) : [];
    existing.unshift(newAppointment);
    localStorage.setItem('ratan_lal_appointments', JSON.stringify(existing));

    // Clear Form inputs
    setPatientName('');
    setPatientPhone('');
    setPatientEmail('');
    setSymptoms('');
    setSelectedTimeSlot('');

    // Trigger ticket preview & callback
    setActiveTicket(newAppointment);
    onAppointmentCreated();

    // Scroll to ticket receipt
    setTimeout(() => {
      const ticketElem = document.getElementById('ticket-receipt-anchor');
      if (ticketElem) {
        ticketElem.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  // Immediate next 7 days for selection
  const getNextDays = () => {
    const list = [];
    const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    for (let i = 1; i <= 8; i++) {
      const date = new Date();
      date.setDate(date.getDate() + i);
      if (date.getDay() !== 0) { // Skip Sundays as OPD is closed
        const dStr = date.toISOString().split('T')[0];
        const label = `${weekdays[date.getDay()]}, ${date.getDate()} ${date.toLocaleString('default', { month: 'short' })}`;
        list.push({ value: dStr, label });
      }
    }
    return list;
  };

  const bookingDates = getNextDays();

  return (
    <div id="doctors-view-container" className="bg-slate-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Banner */}
        <div className="mb-12 text-center md:text-left">
          <span className="text-emerald-700 text-xs font-mono font-bold uppercase tracking-widest bg-emerald-50 px-3 py-1.5 rounded-full inline-block">
            Consult Roster
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-3">
            Find Specialists & Plan Consultations
          </h1>
          <p className="text-slate-600 mt-2 text-sm sm:text-base max-w-2xl">
            Filter our Senior Resident Medical Board by medical specialization, search directly by doctor name, or use our digital OPD scheduler.
          </p>
        </div>

        {/* Outer Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* LEFT 7-cols: Search & Doctors List */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Search Filters Card */}
            <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm space-y-4">
              <div className="relative">
                <Search className="absolute left-4 top-3.5 text-slate-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search specialists by name, credentials, or education..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-slate-50 rounded-2xl border border-slate-200 focus:outline-none focus:border-emerald-600 focus:bg-white text-sm"
                  id="doctor-search-input"
                />
              </div>

              {/* Specialty Chips */}
              <div className="space-y-2">
                <span className="block text-[11px] font-mono uppercase tracking-wider text-slate-400">
                  Filter by Specialization
                </span>
                <div className="flex flex-wrap gap-2 pt-1">
                  {specialties.map((spec) => (
                    <button
                      key={spec}
                      onClick={() => setSelectedSpecialty(spec)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-semibold tracking-tight transition-all duration-200 ${
                        selectedSpecialty === spec
                          ? 'bg-emerald-600 text-white shadow-sm'
                          : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                      }`}
                      id={`chip-specialty-${spec.replace(/\s+/g, '-').toLowerCase()}`}
                    >
                      {spec}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Doctors Cards List */}
            <div className="space-y-6">
              <div className="flex justify-between items-center px-2">
                <span className="text-xs font-bold text-slate-500 font-mono">
                  Showing {filteredDoctors.length} Clinicians
                </span>
              </div>

              {filteredDoctors.length === 0 ? (
                <div className="bg-white rounded-3xl p-12 text-center border border-slate-100 shadow-sm space-y-4">
                  <AlertCircle className="w-12 h-12 text-slate-300 mx-auto" />
                  <h3 className="font-bold text-slate-700 text-lg">No doctors found matching criteria</h3>
                  <p className="text-slate-500 text-xs">Try clearing the search text-bar or selecting a different specialty filter chip above.</p>
                </div>
              ) : (
                <div className="space-y-6">
                  {filteredDoctors.map((doc) => (
                    <div 
                      key={doc.id}
                      id={`list-doctor-${doc.id}`}
                      className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-sm hover:shadow-md transition-all flex flex-col sm:flex-row gap-6 items-start justify-between"
                    >
                      <div className="flex flex-col sm:flex-row gap-6 items-start">
                        <img 
                          src={doc.image} 
                          alt={doc.name} 
                          referrerPolicy="no-referrer"
                          className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl object-cover object-top border border-slate-250 shrink-0"
                        />
                        <div className="space-y-2">
                          <div className="flex flex-wrap items-center gap-2">
                            <span className="px-2.5 py-0.5 bg-emerald-50 text-emerald-800 rounded font-semibold text-[11px] font-mono tracking-wider uppercase">
                              {doc.specialty}
                            </span>
                            <div className="flex items-center text-amber-500 gap-1 text-xs">
                              <Star className="w-3.5 h-3.5 fill-amber-500" />
                              <span className="font-bold font-mono">{doc.rating}</span>
                            </div>
                          </div>
                          
                          <h3 className="text-slate-950 font-extrabold text-base sm:text-lg leading-tight">
                            {doc.name}
                          </h3>
                          <p className="text-xs font-mono font-semibold text-slate-500">
                            {doc.education} — <span className="text-emerald-700 font-sans font-bold">{doc.experience} Years Exp.</span>
                          </p>
                          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed italic max-w-lg pt-1">
                            "{doc.bio}"
                          </p>
                          
                          {/* Available Hours Display snippet */}
                          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 pt-2 text-[11px] text-slate-500">
                            <div className="flex items-center gap-1">
                              <Clock className="w-3.5 h-3.5 text-emerald-600" />
                              <span>OPD Days: <strong className="text-slate-700">{doc.availability.days.join(', ')}</strong></span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="sm:self-stretch flex sm:flex-col justify-end w-full sm:w-auto pt-4 sm:pt-0 border-t sm:border-t-0 border-slate-150">
                        <button
                          onClick={() => handleConsultTrigger(doc)}
                          className="w-full sm:px-5 sm:py-3 py-2.5 bg-gradient-to-r from-emerald-600 to-teal-800 hover:from-emerald-500 hover:to-teal-700 text-white font-semibold rounded-xl text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-1.5"
                          id={`btn-schedule-${doc.id}`}
                        >
                          <CalendarRange className="w-4 h-4" />
                          <span>Reserve Visit</span>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}

            </div>
          </div>

          {/* RIGHT 5-cols: Appointment Booking form */}
          <div className="lg:col-span-5 space-y-8">
            <div 
              id="scheduler-card-anchor" 
              className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-lg relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-3 bg-emerald-50 rounded-bl-3xl">
                <Sparkles className="w-6 h-6 text-emerald-600" />
              </div>

              <div className="mb-6">
                <h2 className="text-slate-900 font-extrabold text-xl font-sans">
                  Digital OPD Scheduler
                </h2>
                <p className="text-slate-500 text-xs mt-1">
                  Fill in standard outpatient parameters to secure real-time calendar reservations instantly.
                </p>
              </div>

              {errorMsg && (
                <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-xl text-xs flex items-start gap-2.5 mb-5 animate-shake">
                  <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                  <span>{errorMsg}</span>
                </div>
              )}

              <form onSubmit={handleBookNow} className="space-y-4 text-xs sm:text-sm">
                
                {/* Specialty Select */}
                <div className="space-y-1.5">
                  <label className="block text-slate-700 font-bold font-sans">
                    1. Consultation Ward / Specialty
                  </label>
                  <select
                    value={bookingSpecialty}
                    onChange={(e) => setBookingSpecialty(e.target.value)}
                    className="w-full bg-slate-50 p-3 rounded-xl border border-slate-200 focus:outline-none focus:border-emerald-600 focus:bg-white font-medium"
                    id="booking-specialty"
                  >
                    <option value="Cardiology">Cardiology Centre</option>
                    <option value="Orthopedics">Orthopedics & Joint</option>
                    <option value="Pediatrics">Pediatrics Clinic</option>
                    <option value="Neurology">Neurology & Spine Unit</option>
                    <option value="Diagnostics & Labs">Advanced Diagnostics & Labs</option>
                    <option value="General Medicine">General Medicine & Family</option>
                  </select>
                </div>

                {/* Doctor Select */}
                <div className="space-y-1.5">
                  <label className="block text-slate-700 font-bold font-sans">
                    2. Designated Consult Doctor
                  </label>
                  <select
                    value={selectedDoctorId}
                    onChange={(e) => setSelectedDoctorId(e.target.value)}
                    className="w-full bg-slate-50 p-3 rounded-xl border border-slate-200 focus:outline-none focus:border-emerald-600 focus:bg-white font-medium"
                    id="booking-doctor"
                  >
                    <option value="" disabled>-- Select Specialty Doctor --</option>
                    {schedulableDoctors.map((doc) => (
                      <option key={doc.id} value={doc.id}>
                        {doc.name} (Exp: {doc.experience}y)
                      </option>
                    ))}
                  </select>
                </div>

                {/* Date Select */}
                <div className="space-y-1.5">
                  <label className="block text-slate-700 font-bold font-sans">
                    3. Calendar Visit Date (Sundays Closed)
                  </label>
                  <select
                    value={bookingDate}
                    onChange={(e) => setBookingDate(e.target.value)}
                    className="w-full bg-slate-50 p-3 rounded-xl border border-slate-200 focus:outline-none focus:border-emerald-600 focus:bg-white font-medium font-mono"
                    id="booking-date"
                  >
                    <option value="" disabled>-- Specify Availability Day --</option>
                    {bookingDates.map((day) => (
                      <option key={day.value} value={day.value}>
                        {day.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Time Slot Select */}
                <div className="space-y-2">
                  <label className="block text-slate-700 font-bold font-sans">
                    4. Available OPD Timeslot
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {TIME_SLOTS.map((slot) => {
                      const isSelected = selectedTimeSlot === slot;
                      return (
                        <button
                          key={slot}
                          type="button"
                          onClick={() => setSelectedTimeSlot(slot)}
                          className={`py-2 px-1 text-center font-mono text-[10px] sm:text-xs rounded-lg border tracking-tight transition-all ${
                            isSelected
                              ? 'bg-emerald-50 text-emerald-800 border-emerald-600 font-extrabold shadow-sm'
                              : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
                          }`}
                          id={`slot-btn-${slot.replace(/[^a-zA-Z0-9]/g, '-')}`}
                        >
                          {slot.split(' ')[0]} {slot.split(' ')[1]}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Patient Details */}
                <div className="pt-2 border-t border-slate-100 space-y-3">
                  <span className="block text-slate-400 font-mono text-[11px] uppercase tracking-wider font-bold">
                    Patient Profile Intake
                  </span>
                  
                  <div className="space-y-1.5">
                    <div className="relative">
                      <User className="absolute left-3 top-3 text-slate-400 w-4 h-4" />
                      <input
                        type="text"
                        placeholder="Patient Full Name"
                        value={patientName}
                        onChange={(e) => setPatientName(e.target.value)}
                        className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-xs"
                        id="patient-name"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="relative">
                      <Phone className="absolute left-3 top-3 text-slate-400 w-4 h-4" />
                      <input
                        type="tel"
                        placeholder="Phone Contact"
                        value={patientPhone}
                        onChange={(e) => setPatientPhone(e.target.value)}
                        className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-xs font-mono"
                        id="patient-phone"
                      />
                    </div>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 text-slate-400 w-4 h-4" />
                      <input
                        type="email"
                        placeholder="Email Address"
                        value={patientEmail}
                        onChange={(e) => setPatientEmail(e.target.value)}
                        className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-xs font-mono"
                        id="patient-email"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <textarea
                      placeholder="Brief description of symptoms, chronic metrics, or clinical concerns..."
                      value={symptoms}
                      onChange={(e) => setSymptoms(e.target.value)}
                      rows={2}
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg text-xs p-3 focus:outline-none focus:border-emerald-600 focus:bg-white"
                      id="patient-symptoms"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-emerald-600 to-teal-800 hover:from-emerald-500 hover:to-teal-700 text-white font-semibold py-3.5 rounded-xl shadow-lg transition-transform active:scale-95 duration-150 cursor-pointer text-center"
                  id="submit-booking-button"
                >
                  Verify & Book OPD Slot
                </button>

              </form>
            </div>
          </div>

        </div>

        {/* ACTIVE TICKET SLIP RECEIPT */}
        {activeTicket && (
          <div 
            id="ticket-receipt-anchor" 
            className="mt-16 max-w-2xl mx-auto bg-emerald-900 text-white rounded-3xl overflow-hidden shadow-2xl border border-emerald-800 animate-slide-up"
          >
            {/* Top header badge */}
            <div className="bg-emerald-950 px-6 py-4 flex justify-between items-center border-b border-white/10">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                <span className="text-xs font-mono font-bold tracking-widest text-emerald-400 uppercase">
                  Confirmed OPD Receipt Ticket
                </span>
              </div>
              <span className="text-xs font-mono font-extrabold tracking-mono bg-white/20 p-2.5 rounded-lg border border-white/10">
                Ref: {activeTicket.id}
              </span>
            </div>

            {/* Ticket body details split wrapper representing visual thermal paper receipt */}
            <div className="bg-white text-slate-800 p-8 space-y-6 relative">
              {/* Left and Right receipt paper punch decorations */}
              <div className="absolute top-1/2 -left-3 transform -translate-y-1/2 w-6 h-6 rounded-full bg-slate-50" />
              <div className="absolute top-1/2 -right-3 transform -translate-y-1/2 w-6 h-6 rounded-full bg-slate-50" />

              <div className="flex gap-4 items-center border-b border-slate-100 pb-5">
                <img 
                  src={activeTicket.doctorImage} 
                  alt={activeTicket.doctorName} 
                  referrerPolicy="no-referrer"
                  className="w-16 h-16 rounded-xl object-cover object-top border border-slate-200"
                />
                <div className="space-y-1">
                  <span className="block text-[11px] font-mono uppercase text-emerald-800 font-bold bg-emerald-50 px-2 py-0.5 rounded self-start">
                    {activeTicket.specialty} Sector
                  </span>
                  <span className="block font-black text-slate-900 text-lg">{activeTicket.doctorName}</span>
                </div>
              </div>

              {/* Patient details grid */}
              <div className="grid grid-cols-2 gap-y-4 gap-x-6 text-xs sm:text-sm border-b border-dashed border-slate-150 pb-5">
                <div>
                  <span className="block text-[11px] font-mono uppercase text-slate-400">Registered Patient</span>
                  <span className="block font-bold text-slate-900 mt-1">{activeTicket.patientName}</span>
                </div>
                <div>
                  <span className="block text-[11px] font-mono uppercase text-slate-400">Scheduled Visit Day</span>
                  <span className="block font-bold text-slate-900 mt-1 font-mono">{activeTicket.date}</span>
                </div>
                <div>
                  <span className="block text-[11px] font-mono uppercase text-slate-400">OPD Hour Slot</span>
                  <span className="block font-bold text-slate-950 mt-1 font-mono text-emerald-700">{activeTicket.timeSlot}</span>
                </div>
                <div>
                  <span className="block text-[11px] font-mono uppercase text-slate-400">Registration Status</span>
                  <span className="inline-block bg-teal-50 text-teal-800 font-extrabold px-2.5 py-0.5 rounded-lg border border-teal-100 mt-1 text-xs">
                    Confirmed Check-in
                  </span>
                </div>
              </div>

              {/* Floor guidelines directions map placeholder */}
              <div className="text-xs space-y-2">
                <span className="block font-bold text-slate-900 uppercase tracking-wide">Facility Navigation Directions</span>
                <div className="bg-slate-50 rounded-2xl p-4 border border-slate-150 text-slate-600 leading-relaxed font-mono">
                  <p>📍 Sector 12, Ratan Lal Main Campus Building, Block B, Floor 2, Desk 4.</p>
                  <p className="mt-1.5 text-[11px] text-slate-500">
                    * Please arrive 15 minutes prior to scheduled session time with physical government ID card and existing medical diagnostic paper records.
                  </p>
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-3 pt-4 border-t border-slate-100">
                <button
                  onClick={() => {
                    const printContents = document.getElementById('ticket-receipt-anchor')?.outerHTML;
                    if (printContents) {
                      window.print();
                    }
                  }}
                  className="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold rounded-lg text-xs flex items-center justify-center gap-1.5 w-full cursor-pointer"
                >
                  <Printer className="w-4 h-4 text-slate-600" />
                  <span>Print Ticket Slip</span>
                </button>
                <button
                  onClick={() => setCurrentTab('dashboard')}
                  className="px-4 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-lg text-xs flex items-center justify-center gap-1.5 w-full cursor-pointer"
                >
                  <FileText className="w-4 h-4 text-white" />
                  <span>View in Patient Portal</span>
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </div>
  );
}
