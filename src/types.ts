export interface Doctor {
  id: string;
  name: string;
  specialty: string;
  experience: number;
  rating: number;
  image: string;
  education: string;
  bio: string;
  availability: {
    days: string[];
    hours: string[];
  };
  contactEmail: string;
}

export interface ServiceDetail {
  id: string;
  name: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  icon: string;
  treatments: string[];
  faqs: { question: string; answer: string }[];
  emergencyContact: string;
}

export interface Appointment {
  id: string;
  doctorName: string;
  doctorImage: string;
  specialty: string;
  date: string;
  timeSlot: string;
  patientName: string;
  patientPhone: string;
  patientEmail: string;
  symptoms: string;
  status: 'Confirmed' | 'Pending' | 'Completed' | 'Cancelled';
  createdAt: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  text: string;
  image: string;
  rating: number;
  treatmentRec: string;
}
