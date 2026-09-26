import { Doctor, ServiceDetail, Testimonial } from './types';

export const HERO_BACKGROUND = 'https://lh3.googleusercontent.com/aida-public/AB6AXuDyG9388wosQYy9FjbdbMTLv6jfmA3u3K16MiOgK9dAx8R_vdJuFSzJnU-HtimN2JZr2Oryd-w3WJa54z5xtXyCdAsaIqeNa92zBacUqnCdQEE8Coq8dPdtYPFCAn0gqSifEm7D9daF_6O9xaN96jvXDzGHQUs1PsljkJdM1IBe9A9jq5nxx7TIRuCKUG9m-5yvT7x9B-vk2yfA5yoa1SibvvKUyXofSzajvK7ObDOepy3yIqgX9UqCnUi5PKSc3IGMiNBnTyv8vInf';

export const SERVICES: ServiceDetail[] = [
  {
    id: 'cardiology',
    name: 'Cardiology Center of Excellence',
    shortDescription: 'World-class cardiovascular care using high-tech robotic diagnostic devices and cutting-edge non-invasive procedures.',
    fullDescription: 'At Ratan Lal Hospital, our Cardiology department offers patients access to premier cardiac interventions and therapy. Combining our top heart surgeons with the latest imaging and telemetry, we maintain standard-setting clinical outcomes for coronary bypass, stent replacement, standard screening, and dynamic heart disease management.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDLQosBW2yjBle4UN4rOTEhAE7SOoLN5AaJvqxgs0bf6Q5YbLlVhGqLMEqDPu07JPnmjgkxLEKF-ggDVf87caiYsRRMXheFy9J8aiRk2x7a9euSYitkfa_swqGEt70nfkQGcKrxhwxeY0TMlSkbb1Rvo0Ew898NdBcMYrjNt2ds1mJSzEX1QeKB7nPPs0SDaICl8Vaxm0JMHwNcfOesvyd0ERAl9ZCpUO_FVYDX7_e4LMZEt8zNyGc4lUIPF1FDexHfjcTZauts4QEl',
    icon: 'Activity',
    treatments: [
      'Advanced Electrophysiology & Arrythmia Management',
      'Coronary Angiography and Angioplasty (Surgical & Radial)',
      'Minimally Invasive Valve Reconstruction and TAVR',
      'Preventive Cardiac Rehabilitation and Dietary Therapy',
      'Pediatric Heart Defect Care and Corrective Surgery'
    ],
    faqs: [
      { question: 'What should I bring for my cardiac stress test?', answer: 'Please wear loose clothing, comfortable running shoes, and avoid caffeine for 12 hours prior.' },
      { question: 'How long does a standard angioplasty recovery take?', answer: 'Most patients remain overnight for tracking and return to standard routines in 3 to 5 days.' }
    ],
    emergencyContact: '+91 (11) 4555-0911'
  },
  {
    id: 'orthopedics',
    name: 'Orthopedics & Joint Replacement Clinic',
    shortDescription: 'Comprehensive joint rehabilitation, spine repair, and reconstructive bone and sports trauma medicine.',
    fullDescription: 'Our Orthopedics division works to restore your comfort, strength, and range of movement. We offer advanced keyhole arthroscopies, computer-navigated total knee and hip replacements, micro-discectomies, and high-frequency physiotherapy for orthopedic rehabilitation.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBmxewPzaaRP-yoospewBiDnGb9uYThqjx5Ol5JIDPMkl-a97GxBT6gufuISwy5QMmdHxSE2maQpYJtFJ2TxgPCZnVC-vsNlu2YimWafkPtEPQ9cwI-qaJnpKJaZaN1vqlugLfX9N0aoeG7hpTp2FQ34EA97ODkyt59FhIyKylBfwFpiPc3sVh1hRgPBPNlOEvQ8OKz7yY7eZBOMfdK14yNLH3jxntxEYW0FdFMpA-DeHBzjAvf9lijpIVp_kzqL37lIWbgiTheasyO',
    icon: 'Bone',
    treatments: [
      'Total Knee & Hip Replacements (Robotic-Assisted)',
      'ACL & Meniscus Tear Arthroscopic Repairs',
      'Scoliosis & Advanced Micro-Decompression Spine Procedures',
      'Comprehensive Sports Injury Rehabilitation Plans',
      'Complex Orthopedic Trauma and Fracture Reconstruction'
    ],
    faqs: [
      { question: 'What is the standard lifetime of a robotic joint implant?', answer: 'Modern composite titanium joint replacements are designed to last between 20 to 25 years.' },
      { question: 'Is physical therapy available directly at the outpatient facility?', answer: 'Yes! Our state-of-the-art physiotherapy center is open daily with dedicated therapists.' }
    ],
    emergencyContact: '+91 (11) 4555-0922'
  },
  {
    id: 'diagnostics',
    name: 'Advanced Diagnostics & Imaging Lab',
    shortDescription: 'High-precision MRI, multi-slice CT, digital radiography, and automated pathology diagnostics under one roof.',
    fullDescription: 'We operate state-of-the-art laboratory analysis platforms and diagnostic machinery. Our dual-source CT imaging, 3T silent MRI systems, specialized diagnostic ultrasound suites, and high-volume pathology lines ensure prompt and incredibly accurate clinical assessments.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDscLaumCxNMz0Mqy18WJNJSzpQSz2VJCtfTOFaZNZpGWdHCXNzu-OALQTJ8xCUTI7UisM2FZW6TzLEV7Ye5hhE61P4nQtHUVYBDs723hQoyMRwRj0OeodplhGprZXdPFdUWvm5OidgkJlv5rcvegic8knnOQwlKH-JEm5AV3dnuux89IklbBqvzsC0OXRhdq2fPRUNR48OlKKVXB1sYZNRQbzrOpCTkIxwK4pS01mcIqfO3X4XRsDv8In4rJuSxg6fgLkINaawA_gH',
    icon: 'Scan',
    treatments: [
      'High-Resolution Ultra-Silent 3Tesla MRI Scanning',
      'Ultra-Fast 128-slice CT Scans and Cardiac Coro-CT Studies',
      'Fully Digitalized Smart Mammographics and Bone Densitometry (DEXA)',
      'Comprehensive Molecular Pathology & Blood Diagnostics Profiling',
      'Diagnostic Ultrasound and 4D Fetal Anomaly Screenings'
    ],
    faqs: [
      { question: 'How quickly are patient records and scan reports sent?', answer: 'Standard diagnostic reports are populated to your Patient Dashboard within 12 to 24 hours.' },
      { question: 'Are diagnostic scans walk-in or by scheduled booking only?', answer: 'Most X-ray exams allow walk-ins, while MRI, CT, and specialized ultrasound scans require scheduled bookings.' }
    ],
    emergencyContact: '+91 (11) 4555-0933'
  },
  {
    id: 'pediatrics',
    name: 'Compassionate Pediatric Care',
    shortDescription: 'Dedicated pediatric clinic providing preventive checkups, neonatology, immunization, and growth tracking.',
    fullDescription: 'Our pediatrician specialists deliver a warm, friendly, and non-intimidating medical environment for children of all ages. From standard developmental benchmarks to intensive pediatric critical care, we support parents in ensuring a healthy childhood.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBp39ZiZoWtwQODo5B0_jcusSLAQs5Ah-y1YW5oSEU-MgSggDhZFDZrfUg1r_LEbycUG7skX3TnWE6lSJhcTY9yIKctJy__BlCa5ZA9Jdsihdl1FQsvjVd5cjwgrDIT6fGTkIeiHaZIKEae9vsA9ryERWtknK_XnWkWttyZ-eli83KMWE_rbfTaTXn5h8wSy_XBcd1oDH_dAH_oJLzUil2IQln1COFcVufWEUQv9EeQFP19olOgPKDJAuYI1AU9-U9iQWlx12p0bAZx',
    icon: 'Baby',
    treatments: [
      'Newborn Health Screening & Intensive Neonatal Support (NICU)',
      'Pediatric Vaccination Programs and Seasonal Preventive Medicine',
      'Asthma, Allergies, and Chronic Pediatric Disease Care',
      'Childhood Obesity and Specialized Nutritional Therapy Counseling',
      'Pediatric Neurological and Cognitive Milestone Evaluation'
    ],
    faqs: [
      { question: 'What is the recommended immunization schedule?', answer: 'We follow the official clinical schedule published by the Indian Academy of Pediatrics (IAP).' },
      { question: 'Are emergency pediatricians available during off-hours?', answer: 'Yes, our designated children emergency unit operates with dual registrars 24 hours a day.' }
    ],
    emergencyContact: '+91 (11) 4555-0944'
  },
  {
    id: 'neurology',
    name: 'Comprehensive Neurology & Neuro-Diagnostic Spine Unit',
    shortDescription: 'State-of-the-art neurological disorder therapy, sleep medicine, and stroke rehabilitation.',
    fullDescription: 'Our Neurology department treats disorders affecting the central, peripheral, and autonomic nervous systems. Backed by dedicated physical rehabilitation suites and diagnostic systems, we specialize in high-efficiency epilepsy management, acute stroke care, neuropathic alleviation, and movement rehabilitation.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDBL1FsYEeLUoiITi22kXSpWtm6OqQO13PNkzEaFZ57Z9w4HenQRXo_Pqr6_NMmgGkZT-eaDsQMmhjuMsoOVfuwNfV7f9tUM3gzCu0W7jvfvj_PRnfGWLuEmpPQxhyXtq8Mb68bMW2T8OjyT7S4yFTYISh-cA41iO_FBbKZL7oVjqwW3SZt75dUEJSrKTyR5vevyqK8upFg63pBxzhnihUCfYuHnt2v3C7xSC9tvNFH2eBMeyORGwvu3Wu7HSE7I7YpKXCX7XZCYFcy',
    icon: 'Brain',
    treatments: [
      'Acute Stroke Interstitial Thrombolytic Interventions',
      'Neuro-Diagnostic EEG, EMG, and Sleep Disordered Breathing Profiles',
      'Advanced Parkinson\'s & Tremor Drug Regime Optimiziation',
      'Alzheimer\'s & Dementia Family Care and Cognitive Counseling',
      'Chronic Neuropathic Pain Blocks and Spinal Therapeutics'
    ],
    faqs: [
      { question: 'What is deep brain stimulation (DBS) therapy?', answer: 'It is a state-of-the-art surgical technology that uses electrical signals to manage Parkinsonian tremors.' },
      { question: 'How is a stroke emergency managed in your clinic?', answer: 'We operate a designated codered protocol prioritizing immediate CT diagnostics and clot dissolution.' }
    ],
    emergencyContact: '+91 (11) 4555-0955'
  }
];

export const SPECIAL_SERVICES_GRID = [
  {
    title: 'Cardiology',
    desc: 'Cutting edge cardiac surgical care & diagnostic heart studies.',
    tag: 'Advanced Interventions',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB0-NzzYsFV8SkVHx26D7x_cUN60Hsfka6np5wA-f72p6BBP8O2Vr5rhY-i_G8GC709cXZ4l1r03rj7y1ibU9TvbnjHmITMdC0p3mdmFCOWjb25oJOGnV2y4b8IffN3FM8v0eDuZ32JHo8WB_5JGr9euae-3DrEQkN43zw3Sah2W8lBUDnjllxfPfax38V2Ur61UCDvf7O0ox50k_ESYQch3df10HRWN7T8qwLyvxNWVvu8GeShStQfhPO8Tcd3zGhe1Cq8rpYZtYPp',
    target: 'cardiology'
  },
  {
    title: 'Orthopedics',
    desc: 'Comprehensive spine therapy, keyhole arthroscopy & joint repairs.',
    tag: 'Active Mobility',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBcry7BEI9nKt7kToML-8OrigI26pR_tAF49kQureyJlZ1vCMORA0H5WZqjc8Ct2fJ41_yqHEvvN5iwIWVFZaL_otvhz7LYHJ7ajaDEGI5NUW5ybYGzfhT-NWLbOTmQsVRww9O4kG9I5_xE9-mfAwRFIAg6Fu6nx7B8fD_VCJnsygX2-JP_SHh56Jx_ffkPACN4XKfHCsm0x3yQhN5K8CTho8N_V_kMOCaH31FwxEc525LYyoSlbzxGLA6OHmsPsPgFoIS62fh0DFrV',
    target: 'orthopedics'
  },
  {
    title: 'Pediatrics',
    desc: 'Dedicated family support, primary child care & immunizations.',
    tag: 'Bright Futures',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBp39ZiZoWtwQODo5B0_jcusSLAQs5Ah-y1YW5oSEU-MgSggDhZFDZrfUg1r_LEbycUG7skX3TnWE6lSJhcTY9yIKctJy__BlCa5ZA9Jdsihdl1FQsvjVd5cjwgrDIT6fGTkIeiHaZIKEae9vsA9ryERWtknK_XnWkWttyZ-eli83KMWE_rbfTaTXn5h8wSy_XBcd1oDH_dAH_oJLzUil2IQln1COFcVufWEUQv9EeQFP19olOgPKDJAuYI1AU9-U9iQWlx12p0bAZx',
    target: 'pediatrics'
  },
  {
    title: 'Neurology',
    desc: 'High-precision brain mapping, sleep medicine & neuropathic care.',
    tag: 'Neurological Elite',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDBL1FsYEeLUoiITi22kXSpWtm6OqQO13PNkzEaFZ57Z9w4HenQRXo_Pqr6_NMmgGkZT-eaDsQMmhjuMsoOVfuwNfV7f9tUM3gzCu0W7jvfvj_PRnfGWLuEmpPQxhyXtq8Mb68bMW2T8OjyT7S4yFTYISh-cA41iO_FBbKZL7oVjqwW3SZt75dUEJSrKTyR5vevyqK8upFg63pBxzhnihUCfYuHnt2v3C7xSC9tvNFH2eBMeyORGwvu3Wu7HSE7I7YpKXCX7XZCYFcy',
    target: 'neurology'
  }
];

export const DOCTORS: Doctor[] = [
  {
    id: 'dr-alok-sharma',
    name: 'Dr. Alok Sharma',
    specialty: 'Cardiology',
    experience: 22,
    rating: 4.9,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAAd89svE8pn1J7sK5WsJRYC6Jx_uBB1z7PTuRTDsDFUR7kS_tq9Nvx2bcabL9dzWrcHz4WYQzf9Sw1uC3KPjVfkgMarPlvnIOSpQFEFRkVFlHiRPYCJRxfnR2a9bNTAdiWqa30KszLUlApuRRBjALPIhOC61t8KJF_6WpKcsF7nm4haI3plCJ_r2jz9OU-krxNhyooX3GILB24cOci9bB7eLzKTZQ4ohIKhbRbv5pk_WJCIG-T3EE2yQiaamoWanEdywbzUHujve8P',
    education: 'MD, DM (Cardiology) - AIIMS New Delhi',
    bio: 'Renowned senior interventional cardiologist with over two decades of clinical mastery in radial angiographies, heart blocks, coronary bypass evaluation, and structural heart procedures.',
    availability: {
      days: ['Monday', 'Wednesday', 'Friday'],
      hours: ['09:00 AM - 12:30 PM', '02:00 PM - 05:00 PM']
    },
    contactEmail: 'a.sharma@ratanlalhospital.org'
  },
  {
    id: 'dr-priya-verma',
    name: 'Dr. Priya Verma',
    specialty: 'Pediatrics',
    experience: 15,
    rating: 4.8,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCc6eHupk0zry6ch65h_MOBGTXOkqelZ8H2UICSrEwh6kmntvCY4VhQGoYv5RO2pTH1sqVjhuKyIKLeJBCYoQ1KfcHHorFccDaO-8QyG1ITwmSqSLQQY1f_49p7Y3R2mBlnEtyvCg-EPYdtat0OR03YTgX4MvN2n9L2ST2W511eCfkQ47cjX40vLbdkvvQ-MJeSWlgrcDDlCWZgknTuf3Z3szvIUUKEmwvDcqGaE6Qoaop-bpm37EwQ7UIuy1gKzLncWumwBFCt4Nyp',
    education: 'MD (Pediatrics) - KGMU, PG Diploma (Neonatology) - UK',
    bio: 'Passionate pediatric practitioner dedicated to comprehensive kid development, neonatology intensive care systems, youth asthma counseling, and standard preventative immunizations.',
    availability: {
      days: ['Tuesday', 'Thursday', 'Saturday'],
      hours: ['10:00 AM - 01:00 PM', '03:00 PM - 06:00 PM']
    },
    contactEmail: 'p.verma@ratanlalhospital.org'
  },
  {
    id: 'dr-rohan-mehta',
    name: 'Dr. Rohan Mehta',
    specialty: 'Orthopedics',
    experience: 18,
    rating: 4.9,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBpEgxGzEpwTKJMGZabCwLFm6vnGrUbYAhn5WtIjPdhv2ZHMCttQqo7JlTjnN7WWajIU0cjK0d-4_WRov5yJfmD2t3uo9TFS3TMqRaJAsbDczYeFe-0bfwExzC41Hungb3C993kL9L1cDVtYovAfHsoPY5TK9zHTPd4oghiMFr0wwSCe69TMUUl1izeJTLjxHh68k5OhSuYTl9_PBT9luOlRPIqAg10gl15mJ0HeYDjJf7SWqxY0HasaIxVpgtZrmQapzxA4YbAF6xH',
    education: 'MS (Orthopedics) - JIPMER, Fellowship in Robotic Joint Surgery - Germany',
    bio: 'Distinguished orthopedic clinical specialist, expert in computer-guided knee and hip replacements, sports injury joint arthroscopy, and advanced bone trauma management.',
    availability: {
      days: ['Monday', 'Tuesday', 'Thursday'],
      hours: ['09:30 AM - 01:00 PM', '02:30 PM - 05:30 PM']
    },
    contactEmail: 'r.mehta@ratanlalhospital.org'
  },
  {
    id: 'dr-anjali-gupta',
    name: 'Dr. Anjali Gupta',
    specialty: 'Neurology',
    experience: 14,
    rating: 4.7,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBX2SBN0fcIq5L0L8Y-7OObGxmGa8O-kAZKS-r3Jb8eeXKMm_Tq-ccau5VEnR9xIzA1Rzo8C9xsSztACuAV3QbgTFBmPdyHOumtmXVmvnBg15l122c5XgFbSRS7cgLAqfyvIEJqJS3zJZSAn_qKjqx_9zAT6-H5MgaatSBRTjRQGYgA0RjdbydJolrj7jSH6ZG_YIJock1MEeXjeClBMQCzMWnYLoJB7R-Miw46Q8wbn4nbvD3S8Zc4vTaXOqsoUUhQGGurhTeotucA',
    education: 'DM (Neurology) - NIMHANS Bangalore',
    bio: 'Exceptional brain specialist expertise in stroke clinical response protocol, neuromuscular blocks, neuropathy relief management, and comprehensive clinical sleep studies.',
    availability: {
      days: ['Wednesday', 'Friday', 'Saturday'],
      hours: ['11:00 AM - 02:00 PM', '04:00 PM - 07:00 PM']
    },
    contactEmail: 'a.gupta@ratanlalhospital.org'
  },
  {
    id: 'dr-vikram-singh',
    name: 'Dr. Vikram Singh',
    specialty: 'Orthopedics',
    experience: 16,
    rating: 4.8,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBVpShnjZLKWTs-UBwFIMC5274KCPxndpmFTGakUEhdAHfTNy4jNcNZrsEfq0m-FewlfMkxadVo7Jqs8Imex5L7GoVObMRVbuEeqg-WA4KUJYjTTgPuS-VYAgczUS2vZ3G3ix4kr69LL4L32E3fz3QZeL_ay3sI-sFKbJEasX4FQMEEBno5mJ_4wuxT_FrgQgpiXjM4DVECCOSc4l99Wzg5nsYd3y3b87_AY-OCfBqyigv0rERX5rB3no4K3MNTvBLTWlH3k8BiEFxG',
    education: 'MS (Orthopedics), MCh (Spine Care) - Mumbai University',
    bio: 'Dedicated spine clinician focused on therapeutic back adjustments, spinal disc decompression, minimal-incision spinal stabilization, and complex neurological nerve spine tracking.',
    availability: {
      days: ['Tuesday', 'Wednesday', 'Friday'],
      hours: ['10:00 AM - 01:30 PM', '03:00 PM - 06:00 PM']
    },
    contactEmail: 'v.singh@ratanlalhospital.org'
  },
  {
    id: 'dr-neha-kapoor',
    name: 'Dr. Neha Kapoor',
    specialty: 'Cardiology',
    experience: 12,
    rating: 4.8,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAT99hqwHysDENRK0oib1m5lsJ-wOKlbJNYANMdGrkFyw3nn-IXK_Z4JFGX9dieqjDZ3UrrQoTaIAIFBIU_-4_R2eUunfUsEMV30RjIcZJaIXKE_l4Di1z73SHyBt326B8a3LNVIWSqHiVQHygmMOwGbzgqQ2VtV6zpseccpBKj00ON4PgDiGeTeut8GhVZ7A3tXLHIoJ4SEA4t0cs2LHTqaWtY-BuIzECNqvEKSnd1aVdhvZqMPGMgnijQBkzls6HVe1NvozHnqiYq',
    education: 'MD (Medicine), DM (Cardiology) - PGIMER Chandigarh',
    bio: 'Brilliant non-invasive clinical cardiologist specializing in preventative stress screening, cardiac ultrasound (Echo), transesophageal studies, and women\'s cardiovascular healthcare.',
    availability: {
      days: ['Monday', 'Thursday', 'Saturday'],
      hours: ['09:00 AM - 12:00 PM', '01:30 PM - 04:30 PM']
    },
    contactEmail: 'n.kapoor@ratanlalhospital.org'
  },
  // Extra scheduling headshots mapped to realistic support specialists
  {
    id: 'dr-alok-verma',
    name: 'Dr. Alok Verma',
    specialty: 'General Medicine & Family Health',
    experience: 20,
    rating: 4.9,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBbMUUAMo56ohOrmgnH2LQ4HEYeOLCTFFpTPxpP5F_HUTZVWQwAhl7hRzw2xrpyd4aqFj_52_0NNDu5KoJSa4J_PAFNTsPrLi2fUZ6tc3WgMyp9wzUd7lsb0ufHu_iKBASpgj4UrkY5ZhH527imMYKwUoQax1QyJjpMOeI1mG659n8N0OUC5Wf934OADvWFPU1sZ668v9aK55WO7oNMXcdWbPClpBBM1hGQvwWtAnxmaKv6Q3Uf54gNVTPDmzIXIAeK7iAP8b7z6p-4',
    education: 'MD (Internal Medicine) - Maulana Azad Medical College',
    bio: 'Leading family care practitioner helping coordinate patient treatments, diagnostic lab panels, lifestyle modifications, and inpatient/outpatient screening profiles.',
    availability: {
      days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      hours: ['08:00 AM - 11:30 AM', '01:00 PM - 04:00 PM']
    },
    contactEmail: 'a.verma@ratanlalhospital.org'
  },
  {
    id: 'dr-sarah-johnson',
    name: 'Dr. Sarah Johnson',
    specialty: 'Diagnostics & Radiology',
    experience: 15,
    rating: 4.9,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBfHxng98gQSqzrQIxqUyjYu4eZKtn_HoEIqFmH8tey1tjvrXBfEdly0sa209pujYz1wYnmXrK-OWaEdF_gGjbghTwu5PkfPUhmneUwqG5ZatcgiX86EmYdXaTqtm1XCget8KvBEyqEDBz-mQ08Yttuws3TuJvscZ8XKRniTkYc5y_SvBVbFFcEhRSNSNKqDnpFaXd-GJk7tvg9GKGNzVesbm1uLbHtZNVFLp12xwdwRU1x4unTvO5h8m9ClqMAuPXbHx-9UnNucOHS',
    education: 'MD, Fellowship in Advanced Radiology - Harvard Medical School',
    bio: 'Premier international diagnostics practitioner specializing in High-Tesla silent MRI mapping, musculoskeletal orthopedic imaging, scanning oncology tracking, and radiology diagnostic workflows.',
    availability: {
      days: ['Monday', 'Wednesday', 'Friday'],
      hours: ['09:00 AM - 12:30 PM', '02:00 PM - 05:00 PM']
    },
    contactEmail: 's.johnson@ratanlalhospital.org'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Mr. Rajesh Khanna',
    role: 'Coronary Bypass Recoveree',
    text: 'The cardiac intervention unit here saved my life. Dr. Alok Sharma and his outstanding surgery assistants kept our family calm, mapped out our patient care timeline clearly, and the postoperative tracking and telemetry rooms felt exactly like five-star wellness resorts. Unparalleled hygiene and expertise!',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDe9Tg483bZVMUfvsCxFvxCsMmsmpRvwZ1bRQKecbYuuKipWhyQjjWs_QZ3fhMFnqjEwJy_TfKTCFQcvUz5g_49iQNR8RRhefYbZx2ZLnyKjoSy02LFH2CC5F7lSUxD9UDdxN6unRa5vuTh5lbj5xmRArPxujtsIf87YJQbkTtevxAtlrFWNqgbIux6x3aii29WqpCD3CjKDwn2gy-j77-uZODz2kyspMRlhrwUSS4qrMV0dvIGb2d4LtCOi4R5uTo3ST1y7WdCP0RG',
    rating: 5,
    treatmentRec: 'Cardiology (CABG)'
  },
  {
    id: 'test-2',
    name: 'Mrs. Priya Sharma',
    role: 'Mother of 6-year-old',
    text: 'Our daughter was terrified of vaccines, but the Pediatrics clinic at Ratan Lal Hospital is so colorfully designed and playful. Dr. Priya Verma spent twenty minutes simply playing and reading with her before administering the immunization painlessly. They genuinely treat every child like family.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCU5dtLXfbv49so0z5E5zW5mG4oD7A6CwoqQ2cxUxnn0_C78S3-JOx57ZXwHtIkdLFjwuvAhgUCiILDkAeYa9U_qSATpigQHHa3pWKUGtp_zzRIrIQhLAM7KjouLGJYLCkWdlG6CzJIgj7jAeVDljYguaUOJzj4NWLoBndFiryTpNb_Z7whZ-zbK0MhpAxC5t0_MrGmn3mMwZtxmsRqMOwC5-DwGYJ9hLRzvPfGBWUsA9klCqUNXpogiyAx25XYVWIHkF6XhorM4tcu',
    rating: 5,
    treatmentRec: 'Pediatric Preventive Care'
  }
];

export const HOSPITAL_METRICS = [
  { value: '45+', label: 'Clinical Specialties' },
  { value: '180+', label: 'World-Class Doctors' },
  { value: '99.2%', label: 'Cardiac Success Rate' },
  { value: '1M+', label: 'Recovered Patients' },
  { value: '24/7', label: 'Emergency Trauma Support' }
];

export const GENERAL_FAQS = [
  {
    question: 'How do I book an emergency clinical appointment?',
    answer: 'You can use our live online Find Doctors calendar, or call our 24/7 designated emergency desk lines directly. Patients without appointments are also triaged immediately upon direct entry to our Emergency Trauma ward.',
  },
  {
    question: 'What insurance providers does Ratan Lal Hospital accept?',
    answer: 'We accept cashless coverage from all major public, private, and international medical insurance companies, including Star Health, HDFC Ergo, Max Bupa, ICICI Lombard, and governmental health insurance schemes.',
  },
  {
    question: 'Are digital medical reports downloadable online?',
    answer: 'Yes! All diagnostic imaging scans, molecular pathology results, discharge guidelines, and prescription slips are securely saved in your online Patient Dashboard for rapid PDF downloads.',
  }
];
