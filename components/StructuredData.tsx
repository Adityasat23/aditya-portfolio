import { personalInfo } from '@/lib/data';

export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": personalInfo.name,
    "jobTitle": personalInfo.title,
    "description": personalInfo.description,
    "url": "https://aditya-portfolio-orcin.vercel.app", // GANTI dengan URL Anda
    "image": "https://aditya-portfolio-orcin.vercel.app/images/profile.jpg", // GANTI
    "email": personalInfo.email,
    "telephone": personalInfo.phone,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Semarang",
      "addressRegion": "Central Java",
      "addressCountry": "Indonesia"
    },
    "sameAs": [
      personalInfo.social.instagram,
      personalInfo.social.linkedin,
      personalInfo.social.behance
    ],
    "knowsAbout": [
      "Video Production",
      "Video Editing",
      "Content Strategy",
      "Social Media Management",
      "Digital Marketing",
      "Adobe Premiere Pro",
      "After Effects",
      "Content Creation"
    ],
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "Semarang State Polytechnic",
      "sameAs": "https://www.polines.ac.id/"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}