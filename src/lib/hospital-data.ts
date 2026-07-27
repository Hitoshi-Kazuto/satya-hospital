import {
  Activity, Baby, Bone, Brain, Ear, HeartPulse, Microscope, Scissors,
  Smile, Sparkles, Stethoscope, TestTube,
} from "lucide-react";

export const departments = [
  { name: "Orthopaedics", icon: Bone, desc: "Joint, spine and bone care with modern surgical precision." },
  { name: "Trauma Care", icon: Activity, desc: "24×7 emergency trauma response and stabilization." },
  { name: "Joint Replacement", icon: Sparkles, desc: "Advanced knee, hip and shoulder replacement." },
  { name: "Obstetrics & Gynaecology", icon: Baby, desc: "Compassionate maternity and women's health." },
  { name: "Infertility", icon: HeartPulse, desc: "Personalised fertility evaluation and treatment." },
  { name: "Neurosurgery", icon: Brain, desc: "Precision brain and spine surgical care." },
  { name: "Laparoscopic Surgery", icon: Scissors, desc: "Minimally invasive surgical procedures." },
  { name: "Paediatrics", icon: Smile, desc: "Complete care for infants, children and teens." },
  { name: "ENT", icon: Ear, desc: "Ear, nose and throat expertise for all ages." },
  { name: "Dentistry", icon: Smile, desc: "Preventive, cosmetic and surgical dentistry." },
  { name: "Diagnostics", icon: Microscope, desc: "Digital imaging and precise pathology labs." },
  { name: "Physiotherapy", icon: Stethoscope, desc: "Recovery-focused rehab and pain management." },
] as const;

export const facilities = [
  "24×7 Emergency",
  "Modular Operation Theatre",
  "Joint Replacement Centre",
  "Advanced Physiotherapy",
  "Cashless Insurance & TPA",
  "Labour Room",
  "Infertility Unit",
  "Cardiac Monitoring",
  "Central Oxygen Supply",
  "Digital X-Ray & Pathology",
  "Generator Backup",
  "In-house Pharmacy",
];

export const equipment = [
  { name: "Modular Operation Theatre", icon: Sparkles },
  { name: "C-Arm Imaging", icon: Activity },
  { name: "Digital X-Ray", icon: Microscope },
  { name: "Laparoscopy System", icon: Scissors },
  { name: "Pneumatic Drill", icon: Bone },
  { name: "Fetal Monitor", icon: Baby },
  { name: "Phototherapy Unit", icon: Sparkles },
  { name: "Ultrasound Guided Procedures", icon: TestTube },
];

export const orthoTreatments = [
  "Knee Pain", "Arthritis", "High Tibial Osteotomy", "Shoulder Surgery",
  "Partial Knee Replacement", "Total Knee Replacement", "Hip Replacement",
  "Sports Injury", "Broken Bones", "Club Foot", "Head Injuries", "Burns & Scalds",
  "Physiotherapy", "Shoulder Treatments", "Knee Treatments",
];

export const doctors = [
  {
    slug: "dr-ak-agarwal",
    name: "Dr. A.K. Agarwal",
    qualifications: "MBBS (Gold Medalist), MS, M.Ch (Orth)",
    specialty: "Orthopedic & Sports Injury Specialist",
    experience: "35+ years",
    focus: [
      "Joint Replacement Surgery",
      "Sports Injury Rehabilitation",
      "Trauma & Fracture Care",
      "Arthroscopic Surgery",
    ],
    achievements: [
      "Pioneering joint replacement surgeon in Uttar Pradesh",
      "Trained in advanced arthroscopy techniques",
      "Thousands of successful surgeries",
    ],
  },
  {
    slug: "dr-manisha-agarwal",
    name: "Dr. Manisha Agarwal",
    qualifications: "MBBS (Gold Medalist), MS, DNB, FICMCH · Senior Secretary KOGS",
    specialty: "Gynaecologist & Infertility Specialist",
    experience: "25+ years",
    focus: [
      "High-risk Obstetrics",
      "Infertility Evaluation & IVF Counselling",
      "Laparoscopic Gynaecology",
      "Menopause Care",
    ],
    achievements: [
      "Extensive experience in complex maternity cases",
      "Personalised, evidence-based fertility care",
      "Trusted by families across UP",
    ],
  },
] as const;

export const testimonials = [
  {
    name: "Ravi Kumar",
    role: "Knee Replacement Patient",
    quote:
      "Dr. Agarwal and the team gave me my life back. From consultation to recovery, the care was outstanding.",
  },
  {
    name: "Priya Sharma",
    role: "Maternity Patient",
    quote:
      "The maternity unit felt like a five-star experience. Dr. Manisha's calm guidance meant everything to us.",
  },
  {
    name: "Anil Verma",
    role: "Trauma Patient",
    quote:
      "After a road accident, Satya's 24×7 trauma team acted within minutes. They truly saved my father's life.",
  },
];

export const insuranceLogos = [
  "Star Health", "HDFC Ergo", "Bajaj Allianz", "ICICI Lombard",
  "New India", "Care Health", "TATA AIG", "Niva Bupa",
];

export const faqs = [
  {
    q: "How can I book an appointment at Satya Hospital?",
    a: "You can book online through our Book Appointment page, call our 24×7 helpline, or WhatsApp us to schedule with the doctor of your choice.",
  },
  {
    q: "Do you accept cashless insurance and TPA?",
    a: "Yes. We are empanelled with all major insurance providers and offer cashless facility along with in-house TPA support.",
  },
  {
    q: "Is emergency care available round the clock?",
    a: "Absolutely. Our trauma and emergency team, ICU, operation theatres and diagnostics run 24×7 with full generator backup.",
  },
  {
    q: "What makes your joint replacement centre different?",
    a: "A dedicated modular OT, imported implants, computer-assisted planning and a rapid-recovery physiotherapy protocol led by Dr. A.K. Agarwal.",
  },
  {
    q: "Do you offer infertility treatment and counselling?",
    a: "Yes. Our infertility unit provides complete evaluation, hormonal profiling, ultrasound-guided procedures and personalised treatment plans.",
  },
];