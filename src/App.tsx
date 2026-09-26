import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeView from './components/HomeView';
import ServicesView from './components/ServicesView';
import DoctorsView from './components/DoctorsView';
import DashboardView from './components/DashboardView';

export default function App() {
  const [currentTab, setCurrentTab] = useState('home');
  const [selectedDepartment, setSelectedDepartment] = useState('cardiology');

  // Triggered when an appointment is booked so we can show updates in the logs
  const handleAppointmentCreated = () => {
    // Optionally redirect to patient portal immediately after booking
    // of course, they can also view their generated receipt
  };

  const renderActiveView = () => {
    switch (currentTab) {
      case 'home':
        return (
          <HomeView 
            setCurrentTab={setCurrentTab} 
            setSelectedDepartment={setSelectedDepartment} 
          />
        );
      case 'services':
        return (
          <ServicesView 
            currentTab={currentTab}
            setCurrentTab={setCurrentTab}
            selectedDepartment={selectedDepartment}
            setSelectedDepartment={setSelectedDepartment}
          />
        );
      case 'doctors':
        return (
          <DoctorsView 
            currentTab={currentTab}
            setCurrentTab={setCurrentTab}
            onAppointmentCreated={handleAppointmentCreated}
          />
        );
      case 'dashboard':
        return <DashboardView />;
      default:
        return (
          <HomeView 
            setCurrentTab={setCurrentTab} 
            setSelectedDepartment={setSelectedDepartment} 
          />
        );
    }
  };

  return (
    <div id="ratan-lal-hospital-portal" className="min-h-screen bg-slate-50 flex flex-col justify-between font-sans selection:bg-emerald-200 selection:text-emerald-900 scroll-smooth">
      <Header currentTab={currentTab} setCurrentTab={setCurrentTab} />
      
      <main className="flex-grow">
        {renderActiveView()}
      </main>

      <Footer setCurrentTab={setCurrentTab} />
    </div>
  );
}
