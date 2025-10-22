export const translations = {
  en: {
    nav: {
      about: "About",
      experience: "Experience",
      projects: "Projects",
      blog: "Blog",
      skills: "Skills",
      contact: "Contact",
      cta: "Let's Collaborate"
    },
    hero: {
      title: "Digital Content Specialist",
      tagline: "WHERE CREATIVITY MEETS CRITICAL THINKING",
      description: "Video Content Specialist with proven track record of creating high impact content for influencers and viral campaigns.",
      viewWork: "View My Work",
      watchShowreel: "Watch Showreel"
    },
    about: {
      title: "About Me",
      subtitle: "Bringing Quality with Quantity at the same time"
    },
    footer: {
      copyright: "© 2025 Aditya Satria Pratama. Built with Next.js & Framer Motion.",
      tagline: "Designed & Developed with passion for digital content"
    }
  },
  id: {
    nav: {
      about: "Tentang",
      experience: "Pengalaman",
      projects: "Proyek",
      blog: "Blog",
      skills: "Keahlian",
      contact: "Kontak",
      cta: "Mari Berkolaborasi"
    },
    hero: {
      title: "Spesialis Konten Digital",
      tagline: "DIMANA KREATIVITAS BERTEMU PEMIKIRAN KRITIS",
      description: "Spesialis Konten Video dengan rekam jejak terbukti menciptakan konten berdampak tinggi untuk influencer dan kampanye viral.",
      viewWork: "Lihat Karya Saya",
      watchShowreel: "Tonton Showreel"
    },
    about: {
      title: "Tentang Saya",
      subtitle: "Menghadirkan Kualitas dan Kuantitas Secara Bersamaan"
    },
    footer: {
      copyright: "© 2025 Aditya Satria Pratama. Dibuat dengan Next.js & Framer Motion.",
      tagline: "Dirancang & Dikembangkan dengan passion untuk konten digital"
    }
  }
};

export type Language = 'en' | 'id';
export type TranslationKey = keyof typeof translations.en;