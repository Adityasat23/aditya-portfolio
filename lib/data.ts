// Type Definitions
export interface Project {
  id: number;
  title: string;
  client: string;
  category: string;
  year: string;
  description: string;
  challenge: string;
  solution: string;
  results: string[];
  image: string;
  videoEmbed?: string;
  videoPlatform?: 'youtube' | 'instagram' | 'tiktok';
  tags: string[];
  featured: boolean;
}

export const personalInfo = {
  name: "Aditya Satria Pratama",
  title: "Digital Content Specialist",
  tagline: "WHERE CREATIVITY MEETS CRITICAL THINKING",
  description: "Video Content Specialist with proven track record of creating high impact content for influencers and viral campaigns. Combines creative production expertise with performance analytics to deliver content that drives measurable business results.",
  email: "adityasatriapwork@gmail.com",
  phone: "082225500898",
  location: "Semarang, Indonesia",
  social: {
    instagram: "https://instagram.com/aditysat",
    behance: "https://behance.net/aditysat",
    linkedin: "https://linkedin.com/in/aditysat",
  },
  profileImage: "/images/profile.jpg",
  showreel: "dQw4w9WgXcQ", // GANTI dengan YouTube ID real
  resumeUrl: "/resume.pdf",
};

export const experiences = [
  {
    id: 1,
    title: "Creative Content Specialist",
    company: "CV. Nore Inovasi",
    type: "Part/Full Time",
    period: "2025 - Present",
    location: "Work From Anywhere",
    description: "Scaling stagnant Instagram accounts to drive measurable business growth and managing diverse content needs for 5+ clients.",
    achievements: [
      "Generated 393K+ views across managed accounts",
      "Achieved 348% increase in link clicks",
      "Drove 427% growth in profile visits within one year",
      "Successfully managing 5+ client accounts simultaneously",
      "Promoted from intern to specialist within 4 months"
    ],
    tags: ["Content Strategy", "Google Analytics", "Team Management"],
    color: "#0A84FF"
  },
  {
    id: 2,
    title: "Video Editor",
    company: "Angkasa Management",
    type: "Part Time",
    period: "2024 - Present",
    location: "Remote",
    description: "Working with Indonesia's leading KOL & Influencer management agency, partnering with 80+ major brands.",
    achievements: [
      "Delivered 21.7M+ views on Google Indonesia campaign",
      "Maintained 100% compliance with strict brand guidelines",
      "Collaborated with top Indonesian influencers"
    ],
    tags: ["Video Editing", "Brand Compliance", "KOL Management"],
    color: "#BF5AF2"
  },
  {
    id: 3,
    title: "Deputy of Communication & Media",
    company: "BEM Polines",
    type: "Organization Leadership",
    period: "July 2024 - July 2025",
    location: "Semarang State Polytechnic",
    description: "Led digital communication strategy for 4,500+ students.",
    achievements: [
      "Architected explosive growth: 5M+ total Instagram views",
      "Acquired 4,200+ new followers",
      "Launched 3 new media channels"
    ],
    tags: ["Social Media", "Brand Identity", "Leadership"],
    color: "#FF2D55"
  },
];

export const projects: Project[] = [
  {
    id: 1,
    title: "Google Indonesia - Gemini Student Promo",
    client: "Google Indonesia x Gracia Caroline",
    category: "Brand Campaign",
    year: "2024",
    description: "Promotional video maintaining 100% compliance with Google's strict brand guidelines while creating viral-focused content with engaging visuals.",
    challenge: "Balance brand compliance with viral content creation for maximum engagement",
    solution: "Intensive communication with management, executed dynamic edits with strong hooks and fast pacing within brand boundaries",
    results: [
      "21.7M+ views on single platform",
      "100% brand guideline compliance",
      "27.5K likes",
      "36K shares",
      "34.7K comments"
    ],
    image: "/images/google-gemini.jpg",
    videoEmbed: "dQw4w9WgXcQ", // GANTI dengan YouTube ID real
    videoPlatform: "youtube",
    tags: ["Video Editing", "Brand Compliance", "Viral Marketing", "Adobe Premiere"],
    featured: true
  },
  {
    id: 2,
    title: "Nore Inovasi - Multi-Client Content Strategy",
    client: "CV. Nore Inovasi",
    category: "Social Media Management",
    year: "2025",
    description: "End-to-end content production for diverse client portfolio, from short-form videos to motion graphics.",
    challenge: "Scaling stagnant Instagram accounts while managing diverse content needs",
    solution: "Data-driven content strategy, collaborated with paid media team, provided organically proven visuals",
    results: [
      "393K+ total views generated",
      "348% increase in link clicks",
      "427% growth in profile visits",
      "5+ accounts successfully managed"
    ],
    image: "/images/nore-inovasi.jpg",
    videoEmbed: "CzXxXxXxX", // GANTI dengan Instagram post ID
    videoPlatform: "instagram",
    tags: ["Content Strategy", "Motion Graphics", "Analytics", "Multi-platform"],
    featured: true
  },
  {
    id: 3,
    title: "BEM Polines - Digital Transformation",
    client: "Student Executive Board Polines",
    category: "Organization Branding",
    year: "2024-2025",
    description: "Complete digital transformation for organization serving 4,500+ students with unified brand identity.",
    challenge: "Fragmented digital presence with outdated communication channels",
    solution: "Established brand identity, launched 3 new channels, implemented FOMO-driven engagement",
    results: [
      "5M+ total Instagram views",
      "4,200+ new followers",
      "145K+ total likes",
      "3 new media channels launched"
    ],
    image: "/images/bem-polines.jpg",
    videoEmbed: "7123456789012345678", // GANTI dengan TikTok video ID
    videoPlatform: "tiktok",
    tags: ["Brand Identity", "Content Strategy", "Multi-platform", "Leadership"],
    featured: true
  },
  {
    id: 4,
    title: "Influencer Content Portfolio",
    client: "Various KOLs via Angkasa Management",
    category: "Influencer Content",
    year: "2024-Present",
    description: "Ongoing content creation for multiple high-profile Indonesian influencers.",
    challenge: "Balancing tight brand briefs with creator authenticity",
    solution: "Developed flexible editing workflows, maintained content management systems",
    results: [
      "Worked with 80+ major brands",
      "Reached 18M+ collective audience",
      "Maintained long-term client relationships"
    ],
    image: "/images/influencer-work.jpg",
    tags: ["Video Editing", "Content Management", "KOL Collaboration"],
    featured: false
  },
];

export const skills = {
  primary: [
    {
      category: "Video Production & Post-Production",
      items: ["Adobe Premiere Pro", "After Effects", "DaVinci Resolve", "CapCut", "Final Cut Pro"]
    },
    {
      category: "Creative Design",
      items: ["Figma", "Adobe Photoshop", "Adobe Illustrator", "Canva"]
    },
    {
      category: "Analytics & Performance Tracking",
      items: ["Google Analytics", "Instagram Insights", "Meta Business Suite"]
    },
    {
      category: "Content Strategy & Management",
      items: ["Content Calendar Planning", "Social Media Management", "Brand Identity Design"]
    },
  ],
  languages: [
    { name: "Bahasa Indonesia", level: "Native" },
    { name: "English", level: "Professional Working Proficiency" }
  ],
  certifications: [
    "Currently Learning: Advanced Motion Graphics",
    "Currently Learning: Data-Driven Content Strategy"
  ]
};

export const education = [
  {
    institution: "Semarang State Polytechnic",
    degree: "Associate Degree in Informatics Engineering",
    period: "2021 - Present",
    gpa: "3.71 / 4.00",
    highlights: [
      "Focus on Multimedia and Web Development",
      "Active in Student Organizations"
    ]
  },
  {
    institution: "SMKN 11 Semarang",
    degree: "Vocational High School - Multimedia",
    period: "2018 - 2021",
    highlights: [
      "Specialized in Multimedia Production"
    ]
  }
];