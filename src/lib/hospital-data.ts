import {
  Activity,
  Baby,
  Bone,
  Dna,
  Ear,
  HeartPulse,
  Microscope,
  Pill,
  Scissors,
  ShieldPlus,
  Smile,
  Sparkles,
  Stethoscope,
  TestTube,
  Ambulance,
  Building2,
  Syringe,
  Cpu,
  Crosshair,
} from "lucide-react";

export const departments = [
  {
    name: "Orthopaedics",
    icon: Bone,
    desc: "Joint, spine and bone conditions, including replacement surgery.",
    slug: "orthopedics",
  },
  {
    name: "Trauma Care",
    icon: Activity,
    desc: "24×7 emergency response for accidents and injuries.",
    slug: "orthopedics",
  },
  {
    name: "Joint Replacement",
    icon: Sparkles,
    desc: "Knee, hip and shoulder replacement surgery.",
    slug: "orthopedics",
  },
  {
    name: "Physiotherapy",
    icon: Stethoscope,
    desc: "Rehabilitation and pain management after surgery and injury.",
    slug: "orthopedics",
  },
  {
    name: "Obstetrics & Gynaecology",
    icon: Baby,
    desc: "Maternity, gynaecology and women's health.",
    slug: "gynecology-obstetrics",
  },
  {
    name: "Infertility",
    icon: Dna,
    desc: "Fertility evaluation, treatment and counselling.",
    slug: "gynecology-obstetrics",
  },
  {
    name: "General Surgery",
    icon: Scissors,
    desc: "General and laparoscopic surgery for common conditions.",
    slug: "general-surgery",
  },
  {
    name: "Laparoscopic Surgery",
    icon: Syringe,
    desc: "Keyhole surgery with faster recovery.",
    slug: "general-surgery",
  },
  {
    name: "Paediatrics",
    icon: Smile,
    desc: "Medical and surgical care for children.",
    slug: "general-surgery",
  },
  {
    name: "Dentistry",
    icon: Smile,
    desc: "Preventive, restorative and surgical dental care.",
    slug: "services",
  },
  {
    name: "ENT",
    icon: Ear,
    desc: "Ear, nose and throat care for children and adults.",
    slug: "ent",
  },
] as const;

export const services = [
  {
    name: "Ambulance Service",
    icon: Ambulance,
    desc: "Rapid-response ambulance and patient transport, available round the clock.",
    points: ["24×7 availability", "Trained paramedics", "Emergency stabilization on board"],
  },
  {
    name: "24×7 Emergency Care",
    icon: Activity,
    desc: "Round-the-clock emergency department for trauma, medical and surgical emergencies.",
    points: ["Rapid triage", "Modular OTs on standby", "In-house ICU support"],
  },
  {
    name: "Modular Operation Theatre",
    icon: Sparkles,
    desc: "HEPA-filtered, laminar-flow operation theatres designed for zero-infection surgery.",
    points: ["Laminar airflow", "C-Arm imaging", "Advanced anaesthesia"],
  },
  {
    name: "In-house Pharmacy",
    icon: Pill,
    desc: "Fully stocked pharmacy within the campus, open during hospital hours.",
    points: ["Imported & standard medicines", "Discharge medications", "Medical consumables"],
  },
  {
    name: "Diagnostics & Pathology",
    icon: Microscope,
    desc: "Digital X-Ray, ultrasound and a precise in-house pathology laboratory.",
    points: ["Digital imaging", "Same-day reports", "Pre-operative workup"],
  },
  {
    name: "Arthroscopy & Ligament Surgery",
    icon: Crosshair,
    desc: "Minimally invasive (keyhole) arthroscopy and ligament surgery for precise, faster-recovery joint care.",
    points: [
      "ACL & ligament reconstruction",
      "Meniscal repair",
      "Small incisions",
      "Rapid recovery",
    ],
  },
  {
    name: "Appointment Booking",
    icon: Stethoscope,
    desc: "Book a physical or video consultation with a senior specialist in minutes.",
    points: ["Online booking", "Video consults", "WhatsApp support"],
  },
  {
    name: "Blood Bank Support",
    icon: ShieldPlus,
    desc: "Tie-up with licensed blood banks for timely blood and component support.",
    points: ["Emergency supply", "Component availability", "Pre-surgical arrangement"],
  },
] as const;

export const infrastructure = [
  {
    title: "Modular Operation Theatres",
    icon: Sparkles,
    desc: "HEPA-filtered, laminar-flow modular OTs with C-Arm imaging and advanced anaesthesia workstations.",
  },
  {
    title: "Physiotherapy Centre",
    icon: HeartPulse,
    desc: "A dedicated rehabilitation floor with structured protocols for joint, spine and ligament recovery.",
  },
  {
    title: "Labour Room & Maternity Suite",
    icon: Baby,
    desc: "Modern labour room, well-equipped nursery and comfortable private maternity rooms.",
  },
  {
    title: "Infertility Unit",
    icon: Dna,
    desc: "Hormonal profiling, ultrasound-guided procedures and personalised fertility care.",
  },
  {
    title: "Digital X-Ray and Ultrasound",
    icon: Building2,
    desc: "Advanced imaging for acurate diagnosis, helping doctors detect conditions quickly and plan right treatment.",
  },
  {
    title: "24×7 Emergency & ICU",
    icon: Activity,
    desc: "A round-the-clock emergency department, intensive care unit and central monitoring.",
  },
  {
    title: "In-house Diagnostics",
    icon: Microscope,
    desc: "Digital X-Ray, ultrasound, pathology laboratory and pre-operative workup under one roof.",
  },
  {
    title: "In-house Pharmacy",
    icon: Pill,
    desc: "A fully stocked pharmacy ensuring medicines and consumables are always at hand.",
  },
] as const;

export const facilities = [
  "Orthopaedics & Joint Replacement Centre",
  "Robotic Knee Surgery",
  "Arthroscopy & Ligament Surgery",
  "Male and Female Infertility",
  "Advanced Physiotherapy",
  "Modular Operation Theatre",
  "24×7 Emergency",
  "Joint Replacement Centre",
  "Cashless Insurance & TPA",
  "Labour Room",
  "Infertility Unit",
  "Central Oxygen Supply",
  "Digital X-Ray & Pathology",
  "Generator Backup",
  "In-house Pharmacy",
  "Ambulance Service",
  "Blood Bank Support",
] as const;

export const equipment = [
  { name: "Robotic Knee Resurfacing System", icon: Cpu },
  { name: "Modular Operation Theatre", icon: Sparkles },
  { name: "Arthroscopy System", icon: Crosshair },
  { name: "C-Arm Imaging", icon: Activity },
  { name: "Digital X-Ray", icon: Microscope },
  { name: "Laparoscopy System", icon: Scissors },
  { name: "Pneumatic Drill", icon: Bone },
  { name: "Fetal Monitor", icon: Baby },
  { name: "Phototherapy Unit", icon: Sparkles },
  { name: "Ultrasound Guided Procedures", icon: TestTube },
] as const;

export const orthoTreatments = [
  "Knee Pain",
  "Arthritis",
  "Spondylitis",
  "Back Ache",
  "Sprain",
  "High Tibial Osteotomy",
  "Shoulder Surgery",
  "Partial Knee Replacement",
  "Total Knee Replacement",
  "Hip Replacement",
  "Ligament Injuries",
  "Broken Bones",
  "Club Foot",
  "Physiotherapy",
  "Shoulder Treatments",
  "Knee Treatments",
] as const;

export type OrthoTopic = {
  slug: string;
  name: string;
  tagline: string;
  summary: string;
  points: readonly string[];
};

export const orthoTopicGroups: { label: string; topics: OrthoTopic[] }[] = [
  {
    label: "Knee & Lower Limb",
    topics: [
      {
        slug: "knee-pain",
        name: "Knee Pain",
        tagline: "Evaluation and treatment of common causes of knee pain.",
        summary:
          "Knee pain can arise from arthritis, ligament injuries, meniscal tears or patello-femoral problems. We begin with a precise diagnosis — clinical examination, digital X-Ray and ultrasound-guided assessment — before recommending any treatment.",
        points: [
          "Detailed clinical assessment",
          "Imaging & diagnosis",
          "Non-surgical first-line care",
          "Surgical options when needed",
        ],
      },
      {
        slug: "arthritis-types",
        name: "Arthritis Types",
        tagline: "Management of osteoarthritis, inflammatory and post-trauma arthritis.",
        summary:
          "Arthritis of the knee and hip is managed in stages — from activity modification, physiotherapy and injections to joint-preserving and replacement surgery — based on the type and grade of arthritis.",
        points: [
          "Osteoarthritis grading",
          "Inflammatory arthritis care",
          "Injection therapy",
          "Joint replacement planning",
        ],
      },
      {
        slug: "high-tibial-osteotomy",
        name: "High Tibial Osteotomy",
        tagline: "Knee realignment surgery to delay replacement.",
        summary:
          "HTO realigns the knee to shift weight to the healthy side of the joint — delaying or avoiding knee replacement in younger, active patients with early arthritis.",
        points: [
          "Ideal for early arthritis",
          "Preserves natural joint",
          "Structured rehab protocol",
          "Offers years of active life",
        ],
      },
      {
        slug: "partial-knee",
        name: "Partial Knee Replacement",
        tagline: "Knee replacement limited to the damaged part.",
        summary:
          "When arthritis is confined to one compartment of the knee, a partial (unicompartmental) knee replacement preserves healthy bone and ligament — with a faster, more natural-feeling recovery.",
        points: [
          "Single-compartment disease",
          "Minimal bone removal",
          "Quicker recovery",
          "Less post-operative pain",
        ],
      },
      {
        slug: "knee-replacement",
        name: "Knee Replacement",
        tagline: "Total knee replacement with early mobilisation.",
        summary:
          "Total knee replacement is a proven solution for advanced arthritis. Our programme combines computer-assisted planning, modern implants and a fast-track physiotherapy protocol to get patients walking early.",
        points: [
          "Advanced arthritis",
          "Modern implants",
          "Computer-assisted planning",
          "Rapid-recovery physiotherapy",
        ],
      },
      {
        slug: "physiotherapy",
        name: "Physiotherapy",
        tagline: "Rehabilitation after surgery and for chronic pain.",
        summary:
          "Our physiotherapy centre runs structured protocols for post-surgical recovery, chronic pain, sports injuries and movement disorders — supervised by trained therapists.",
        points: [
          "Post-surgical rehab",
          "Sports injury recovery",
          "Chronic pain management",
          "Home exercise programmes",
        ],
      },
    ],
  },
  {
    label: "Shoulder & Upper Limb",
    topics: [
      {
        slug: "shoulder-surgery",
        name: "Shoulder Surgery",
        tagline: "Arthroscopic and open surgery for shoulder conditions.",
        summary:
          "From rotator cuff repairs and shoulder stabilization to replacement surgery, our shoulder programme pairs precise arthroscopic techniques with specialist physiotherapy for reliable outcomes.",
        points: ["Arthroscopy", "Rotator cuff repair", "Stabilization", "Replacement surgery"],
      },
      {
        slug: "club-foot",
        name: "Club Foot",
        tagline: "Early casting and bracing for club foot.",
        summary:
          "Club foot is treated with the Ponseti method — gentle serial casting and bracing — started as early as possible after birth to achieve a fully functional, plantigrade foot without surgery in most cases.",
        points: [
          "Ponseti method",
          "Early start = best results",
          "Mostly non-surgical",
          "Long-term follow-up",
        ],
      },
      {
        slug: "hip-replacement",
        name: "Hip Replacement",
        tagline: "Hip replacement for arthritis and fractures.",
        summary:
          "Hip replacement restores pain-free mobility in patients with advanced hip arthritis or displaced neck-of-femur fractures, using modern implant designs suited to each patient's age and activity.",
        points: [
          "Arthritis & fracture care",
          "Modern implant designs",
          "Rapid mobilisation",
          "Durable outcomes",
        ],
      },
    ],
  },
  {
    label: "360 Degree Knee Care",
    topics: [
      {
        slug: "knee-anatomy",
        name: "Knee Anatomy & Function",
        tagline: "How the knee works, explained simply.",
        summary:
          "A clear understanding of knee anatomy — bones, cartilage, ligaments and menisci — helps patients understand their diagnosis and the logic behind each treatment recommendation.",
        points: [
          "Bones & cartilage",
          "Ligaments & menisci",
          "Biomechanics explained",
          "Pre-treatment education",
        ],
      },
      {
        slug: "pain-management-injections",
        name: "Pain Management & Injections",
        tagline: "Injections for knee pain.",
        summary:
          "Ultrasound-guided injections — viscosupplementation, steroids and platelet-rich plasma — deliver relief precisely to the affected tissue, bridging the gap between tablets and surgery.",
        points: [
          "Ultrasound-guided accuracy",
          "Viscosupplementation",
          "PRP therapy",
          "Steroid injections",
        ],
      },
      {
        slug: "arthroscopy",
        name: "Arthroscopy Surgery",
        tagline: "Keyhole (arthroscopic) surgery of the knee.",
        summary:
          "Arthroscopy uses a small camera and instruments through tiny incisions to diagnose and treat meniscal tears, ligament injuries and cartilage problems with faster recovery.",
        points: [
          "Keyhole technique",
          "Meniscal & ligament work",
          "Small incisions",
          "Rapid recovery",
        ],
      },
      {
        slug: "ligament-reconstructions",
        name: "Ligament Reconstructions",
        tagline: "Reconstruction of torn knee ligaments.",
        summary:
          "ACL, PCL and multi-ligament reconstructions restore knee stability after sports and trauma injuries, using graft techniques matched to the patient's activity level.",
        points: [
          "ACL & PCL reconstruction",
          "Multi-ligament injuries",
          "Graft choice by activity",
          "Sport-specific rehab",
        ],
      },
      {
        slug: "joint-preserving",
        name: "Joint Preserving Surgery",
        tagline: "Surgery that preserves the natural knee.",
        summary:
          "Not every arthritic knee needs replacement. Joint-preserving procedures — osteotomy, cartilage repair and meniscal surgery — aim to keep the natural joint working for longer.",
        points: ["Osteotomy", "Cartilage repair", "Meniscal surgery", "Delays replacement"],
      },
      {
        slug: "replacement-surgery",
        name: "Replacement Surgery",
        tagline: "Partial and total knee replacement.",
        summary:
          "For end-stage arthritis, partial or total knee replacement offers durable pain relief and restored mobility with a structured rapid-recovery programme.",
        points: [
          "Partial & total replacement",
          "Modern implants",
          "Computer-assisted planning",
          "Rapid-recovery protocol",
        ],
      },
      {
        slug: "complex-fractures",
        name: "Complex Fractures",
        tagline: "Management of complex fractures around the knee.",
        summary:
          "Complex peri-articular and multi-fragmentary fractures around the knee are treated with modern fixation principles and dedicated post-operative rehabilitation.",
        points: [
          "Peri-articular fractures",
          "Modern fixation",
          "Minimally invasive options",
          "Structured rehab",
        ],
      },
      {
        slug: "patellofemoral",
        name: "Instability & Patellofemoral",
        tagline: "Care for kneecap pain and instability.",
        summary:
          "Patello-femoral pain and recurrent kneecap dislocations are managed with physiotherapy-first care and, where needed, targeted realignment surgery.",
        points: [
          "Physiotherapy-first",
          "Realignment surgery",
          "Recurrent dislocation care",
          "Activity-specific return",
        ],
      },
    ],
  },
  {
    label: "Shoulder Treatments",
    topics: [
      {
        slug: "shoulder-anatomy",
        name: "Shoulder Anatomy & Function",
        tagline: "How the shoulder works, explained simply.",
        summary:
          "The shoulder's wide range of motion comes from a complex balance of bones, the rotator cuff, capsule and tendons. Understanding this balance is the first step to lasting treatment.",
        points: [
          "Ball & socket design",
          "Rotator cuff role",
          "Capsule & tendons",
          "Pre-treatment education",
        ],
      },
      {
        slug: "shoulder-physiotherapy",
        name: "Specialist Physiotherapy",
        tagline: "Physiotherapy for shoulder conditions.",
        summary:
          "Specialist physiotherapy is central to almost every shoulder condition — from frozen shoulder to post-surgical recovery — with progressive, supervised protocols.",
        points: [
          "Supervised protocols",
          "Frozen shoulder rehab",
          "Post-surgical recovery",
          "Progressive loading",
        ],
      },
      {
        slug: "shoulder-pain-injections",
        name: "Pain Management & Injections",
        tagline: "Injections for shoulder pain.",
        summary:
          "Ultrasound-guided injections of the subacromial space, joint and tendons provide targeted relief in rotator cuff disease, impingement and arthritis.",
        points: [
          "Ultrasound-guided",
          "Subacromial injection",
          "Joint injection",
          "Cuff-related pain",
        ],
      },
      {
        slug: "shoulder-arthroscopy",
        name: "Arthroscopy",
        tagline: "Keyhole (arthroscopic) surgery of the shoulder.",
        summary:
          "Shoulder arthroscopy enables rotator cuff repair, labral surgery and stabilisation through small incisions, minimising soft-tissue damage.",
        points: [
          "Keyhole technique",
          "Cuff & labral surgery",
          "Small incisions",
          "Faster recovery",
        ],
      },
      {
        slug: "rotator-cuff",
        name: "Rotator Cuff Tear & Impingement",
        tagline: "Treatment of rotator cuff tears and impingement.",
        summary:
          "Rotator cuff tears and impingement are managed in stages — from physiotherapy and injections to arthroscopic repair — matched to tear size, age and activity.",
        points: [
          "Staged management",
          "Arthroscopic repair",
          "Partial & full tears",
          "Cuff-specific rehab",
        ],
      },
      {
        slug: "frozen-shoulder",
        name: "Frozen Shoulder",
        tagline: "Treatment of frozen shoulder.",
        summary:
          "Frozen shoulder is managed with guided physiotherapy, injections and, when needed, manipulation or arthroscopic release to regain pain-free movement.",
        points: [
          "Physiotherapy-led",
          "Injection therapy",
          "Arthroscopic release",
          "Patience-first approach",
        ],
      },
      {
        slug: "dislocations-instability",
        name: "Dislocations & Instability",
        tagline: "Treatment of recurrent shoulder dislocation.",
        summary:
          "Recurrent shoulder dislocations are treated with targeted strengthening first, and arthroscopic stabilisation for structural damage of the labrum and capsule.",
        points: [
          "Recurrent dislocation",
          "Labral (Bankart) repair",
          "Capsular repair",
          "Sport-specific return",
        ],
      },
      {
        slug: "shoulder-fractures",
        name: "Shoulder Fractures",
        tagline: "Treatment of fractures around the shoulder.",
        summary:
          "Clavicle, proximal humerus and scapula fractures are treated with modern fixation principles, preserving function and enabling early rehabilitation.",
        points: [
          "Clavicle & humerus",
          "Modern fixation",
          "Minimally invasive options",
          "Early mobilisation",
        ],
      },
      {
        slug: "shoulder-replacement",
        name: "Replacement Surgery",
        tagline: "Shoulder replacement for arthritis.",
        summary:
          "Anatomical and reverse shoulder replacements provide durable relief for advanced arthritis and complex cuff tear arthropathy.",
        points: [
          "Anatomical replacement",
          "Reverse replacement",
          "Arthritis care",
          "Structured rehab",
        ],
      },
    ],
  },
];

export const infertilityServices: {
  slug: string;
  name: string;
  tagline: string;
  summary: string;
  points: readonly string[];
}[] = [
  {
    slug: "iui",
    name: "Intrauterine Insemination (IUI)",
    tagline: "OPD-based, minimally invasive fertility treatment.",
    summary:
      "IUI places carefully washed sperm directly into the uterus at the time of ovulation. It is a simple, OPD-based procedure with high success in carefully selected couples — often the first treatment tried before advanced ART.",
    points: ["OPD-based, minimally invasive", "High success in selected cases"],
  },
  {
    slug: "iui-lab",
    name: "IUI Lab – World Class",
    tagline: "State-of-the-art IUI laboratory.",
    summary:
      "Our IUI laboratory is equipped with leading international equipment for precise sperm preparation and insemination — reducing handling time and improving outcomes for every cycle.",
    points: ["Leading international equipment", "Precision for better results"],
  },
  {
    slug: "andrology-lab",
    name: "Andrology Lab – In-house",
    tagline: "Complete male fertility evaluation in-house.",
    summary:
      "An in-house andrology laboratory performs complete semen analysis and male fertility assessment, so couples get timely, accurate results and a single, coordinated treatment plan.",
    points: ["Complete male infertility evaluation", "Timely, accurate results"],
  },
  {
    slug: "semen-wash",
    name: "Semen Wash – Available In-house",
    tagline: "Advanced in-house semen processing.",
    summary:
      "Semen washing uses advanced processing techniques to concentrate healthy, motile sperm while removing debris — improving the chances of conception in both IUI and IVF cycles.",
    points: ["Advanced processing techniques", "Better chances of conception"],
  },
  {
    slug: "comprehensive-womens-care",
    name: "Comprehensive Women's Care",
    tagline: "Complete women's health from adolescence to menopause.",
    summary:
      "Beyond fertility, Dr. Manisha Agrawal provides personalized, compassionate gynaecological care across every life stage — from adolescent concerns to menopause and beyond.",
    points: ["From adolescence to menopause", "Personalized & compassionate care"],
  },
];

export const specialtyContent = {
  gynecology: {
    eyebrow: "Obstetrics & Gynaecology",
    title: "Maternity and women's health care",
    intro:
      "Our gynaecology unit covers antenatal and post-natal care, high-risk pregnancy, laparoscopic gynaecology, menopause care and fertility evaluation.",
    sections: [
      {
        title: "Obstetrics & Maternity",
        points: [
          "Antenatal & post-natal care",
          "High-risk pregnancy management",
          "Normal & operative delivery",
          "Caesarean section",
          "Labour room with fetal monitoring",
        ],
      },
      {
        title: "Gynaecology",
        points: [
          "Laparoscopic gynaecology",
          "Menstrual disorder management",
          "Fibroid & ovarian cyst surgery",
          "Menopause care",
          "Well-woman screening",
        ],
      },
      {
        title: "Infertility",
        points: [
          "Fertility evaluation & hormonal profiling",
          "IVF counselling",
          "Ultrasound-guided procedures",
          "Personalised treatment plans",
          "PCOS management",
        ],
      },
    ],
  },
  infertility: {
    eyebrow: "Infertility & Fertility Care",
    title: "Comprehensive infertility care by our lady consultant",
    intro:
      "Dr. Manisha Agrawal leads a dedicated infertility unit focused on complete fertility evaluation, counselling and personalised treatment plans for couples trying to conceive.",
    sections: [
      {
        title: "Intrauterine Insemination (IUI)",
        points: ["OPD-based, minimally invasive", "High success in selected cases"],
      },
      {
        title: "IUI Lab – World Class",
        points: ["Leading international equipment", "Precision for better results"],
      },
      {
        title: "Andrology Lab – In-house",
        points: ["Complete male infertility evaluation", "Timely, accurate results"],
      },
      {
        title: "Semen Wash – Available In-house",
        points: ["Advanced processing techniques", "Better chances of conception"],
      },
      {
        title: "Comprehensive Women's Care",
        points: ["From adolescence to menopause", "Personalized & compassionate care"],
      },
    ],
  },
  generalSurgery: {
    eyebrow: "General & Laparoscopic Surgery",
    title: "General and laparoscopic surgery",
    intro:
      "Our surgical team treats common general surgical conditions — most through laparoscopic (keyhole) techniques, which mean smaller incisions and faster recovery.",
    sections: [
      {
        title: "Laparoscopic Procedures",
        points: [
          "Laparoscopic cholecystectomy (gall bladder)",
          "Laparoscopic appendicectomy",
          "Hernia repair (open & laparoscopic)",
          "Piles, fistula & fissure surgery",
          "Laparoscopic diagnostic surgery",
        ],
      },
      {
        title: "General Surgery",
        points: [
          "Thyroid surgery",
          "Breast lump & cyst management",
          "Peptic ulcer & GI surgery",
          "Minor & major wound care",
          "Dermatology & skin procedures",
        ],
      },
      {
        title: "Paediatric Surgery Support",
        points: [
          "Hernia in children",
          "Undescended testis",
          "Circumcision",
          "Minor paediatric procedures",
          "Newborn surgical assessment",
        ],
      },
    ],
  },
  ent: {
    eyebrow: "Ear, Nose & Throat (ENT)",
    title: "ENT care for children and adults",
    intro:
      "Medical and surgical treatment of the ear, nose, throat and related structures of the head and neck.",
    sections: [
      {
        title: "Ear",
        points: [
          "Ear infections & discharge",
          "Hearing loss evaluation",
          "Ear micro-surgery",
          "Wax & foreign body removal",
          "Tinnitus management",
        ],
      },
      {
        title: "Nose & Sinus",
        points: [
          "Allergic rhinitis",
          "Sinusitis (medical & surgical)",
          "Deviated nasal septum surgery",
          "Nasal polyps",
          "Epistaxis (nosebleed) care",
        ],
      },
      {
        title: "Throat",
        points: [
          "Tonsillitis & adenoids",
          "Snoring & sleep apnoea",
          "Voice & hoarseness clinic",
          "Thyroid & neck swellings",
          "Endoscopic throat procedures",
        ],
      },
    ],
  },
} as const;

export type Doctor = {
  slug: string;
  name: string;
  qualifications: string;
  specialty: string;
  experience?: string;
  focus?: readonly string[];
  achievements?: readonly string[];
};

export const doctors: Doctor[] = [
  {
    slug: "dr-ak-agarwal",
    name: "Dr. A.K. Agrawal",
    qualifications: "MBBS (Gold Medalist), MS, M.Ch (Orth)",
    specialty: "Orthopedic & Sports / Ligament Injury Specialist",
    experience: "35+ years",
    focus: [
      "Joint Replacement Surgery",
      "Robotic Knee Resurfacing",
      "Sports & Ligament Injury",
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
    name: "Dr. Manisha Agrawal",
    qualifications: "MBBS (Gold Medalist), MS, DNB, FICMCH · Senior Secretary KOGS",
    specialty: "Gynaecologist & Infertility Specialist",
    experience: "25+ years",
    focus: [
      "High-risk Obstetrics",
      "Infertility Evaluation & IVF Counselling",
      "IUI (Husband & Donor)",
      "Laparoscopic Gynaecology",
      "Aesthetic & Cosmetic Surgery",
      "Menopause Care",
    ],
    achievements: [
      "Extensive experience in complex maternity cases",
      "Personalised, evidence-based fertility care",
      "Trusted by families across UP",
    ],
  },
  // {
  //   slug: "dr-gaurav",
  //   name: "Dr. Gaurav",
  //   qualifications: "MBBS, MS",
  //   specialty: "Junior Orthopedic Consultant",
  //   focus: [
  //     "Orthopedic Trauma & Fracture Care",
  //     "Joint Replacement & Arthroscopy Support",
  //     "Outpatient Orthopedic Consultation",
  //     "Post-surgical Recovery & Rehabilitation",
  //   ],
  // },
  // {
  //   slug: "dr-himani-vaswani",
  //   name: "Dr. Himani Vaswani",
  //   qualifications: "BDS, MDS (Oral & Maxillofacial Surgery)",
  //   specialty: "Oral & Maxillofacial Surgeon",
  //   focus: [
  //     "Facial Trauma Surgery",
  //     "Dental Implants",
  //     "Impacted Wisdom Tooth Removal",
  //     "Corrective Jaw Surgery",
  //     "Oral Cysts & Tumors",
  //     "TMJ Disorder Management",
  //   ],
  // },
  // {
  //   slug: "dr-vivek-sachan",
  //   name: "Dr. Vivek Sachan",
  //   qualifications: "MBBS",
  //   specialty: "Physician",
  //   focus: [
  //     "General Medicine & OPD Care",
  //     "Fever & Infections Management",
  //     "Diabetes & Hypertension Care",
  //     "Preventive Health Check-ups",
  //   ],
  // },
];

export const testimonials = [
  {
    name: "Ravi Kumar",
    role: "Knee Replacement Patient",
    quote:
      "Dr. Agrawal and the team gave me my life back. From consultation to recovery, the care was outstanding.",
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
  "Star Health",
  "HDFC Ergo",
  "Bajaj Allianz",
  "ICICI Lombard",
  "New India",
  "Care Health",
  "TATA AIG",
  "Niva Bupa",
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
    a: "A dedicated modular OT, imported implants, computer-assisted planning and a rapid-recovery physiotherapy protocol led by Dr. A.K. Agrawal.",
  },
  {
    q: "Do you offer infertility treatment and counselling?",
    a: "Yes. Our infertility unit provides complete evaluation, hormonal profiling, ultrasound-guided procedures and personalised treatment plans.",
  },
];

export const contactInfo = {
  phone: "+91 9450332121",
  phoneHref: "tel:+919450332121",
  altPhone: "Reception 98389 68996",
  email: "contact@satyahospital.com",
  emailHref: "mailto:contact@satyahospital.com",
  address: "HIG- 1/3, Satya Chowk, Barra 6, Kanpur, Uttar Pradesh 208027",
  whatsapp: "https://wa.me/919838951052",
  maps: "https://www.google.com/maps/place/Satya+Trauma+%26+Maternity+Centre/@26.4394742,80.2905691,17z/data=!3m1!4b1!4m5!3m4!1s0x399c47c3cd081a87:0x624a166e9d7bbb0a!8m2!3d26.4394694!4d80.2927578",
};

export const stats = [
  ["35+", "Years Legacy"],
  ["50L+", "Patients Treated"],
  ["3", "Modular OTs"],
  ["100%", "Cashless"],
] as const;

export const hospitalValues = [
  {
    title: "Senior-led Care",
    desc: "Departments led by senior consultants who review every case.",
  },
  {
    title: "Patient Safety",
    desc: "Modular theatres, infection-control protocols and continuous monitoring.",
  },
  {
    title: "Family-friendly",
    desc: "Private rooms and staff who keep families informed.",
  },
  {
    title: "Transparency",
    desc: "Treatment plans explained in advance and itemised billing.",
  },
] as const;
