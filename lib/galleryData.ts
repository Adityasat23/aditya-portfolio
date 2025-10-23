export interface GalleryItem {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  link?: string;
}

export const galleryData = {
  'video-editing': [
    {
      id: 1,
      title: 'Google Indonesia Campaign',
      category: 'Video Editing',
      image: '/images/gallery/video-1.jpg',
      description: 'Promotional video for Google Gemini Student Promo featuring @graciacarolinee with 21.7M+ views',
      link: 'https://youtube.com/watch?v=YOUR_VIDEO_ID'
    },
    {
      id: 2,
      title: 'Influencer Content Series',
      category: 'Video Editing',
      image: '/images/gallery/video-2.jpg',
      description: 'Content creation for top Indonesian influencers via Angkasa Management',
      link: 'https://youtube.com/watch?v=YOUR_VIDEO_ID'
    },
    {
      id: 3,
      title: 'BEM Polines Campaign',
      category: 'Video Editing',
      image: '/images/gallery/video-3.jpg',
      description: 'Digital transformation campaign reaching 5M+ views',
      link: 'https://youtube.com/watch?v=YOUR_VIDEO_ID'
    },
    {
      id: 4,
      title: 'Brand Commercial',
      category: 'Video Editing',
      image: '/images/gallery/video-4.jpg',
      description: 'Commercial video for major Indonesian brand',
      link: 'https://youtube.com/watch?v=YOUR_VIDEO_ID'
    },
    {
      id: 5,
      title: 'Social Media Content',
      category: 'Video Editing',
      image: '/images/gallery/video-5.jpg',
      description: 'Short-form content for Instagram and TikTok',
      link: 'https://instagram.com/p/YOUR_POST_ID'
    },
  ],
  'vfx-3d': [
    {
      id: 6,
      title: 'Motion Graphics Intro',
      category: 'VFX & 3D',
      image: '/images/gallery/vfx-1.jpg',
      description: 'Dynamic motion graphics for brand intro sequence',
    },
    {
      id: 7,
      title: '3D Product Visualization',
      category: 'VFX & 3D',
      image: '/images/gallery/vfx-2.jpg',
      description: '3D product rendering and animation',
    },
    {
      id: 8,
      title: 'VFX Compositing',
      category: 'VFX & 3D',
      image: '/images/gallery/vfx-3.jpg',
      description: 'Visual effects compositing for commercial',
    },
    {
      id: 9,
      title: 'Logo Animation',
      category: 'VFX & 3D',
      image: '/images/gallery/vfx-4.jpg',
      description: '3D logo animation with particle effects',
    },
  ],
  'photography': [
    {
      id: 10,
      title: 'Event Documentation',
      category: 'Photography',
      image: '/images/gallery/photo-1.jpg',
      description: 'Professional event photography for ECC 2024',
    },
    {
      id: 11,
      title: 'Portrait Sessions',
      category: 'Photography',
      image: '/images/gallery/photo-2.jpg',
      description: 'Professional portrait photography for influencers',
    },
    {
      id: 12,
      title: 'Product Photography',
      category: 'Photography',
      image: '/images/gallery/photo-3.jpg',
      description: 'Commercial product photography for e-commerce',
    },
    {
      id: 13,
      title: 'Behind The Scenes',
      category: 'Photography',
      image: '/images/gallery/photo-4.jpg',
      description: 'BTS photography from video productions',
    },
  ],
  'it-projects': [
    {
      id: 14,
      title: 'Portfolio Website',
      category: 'IT Projects',
      image: '/images/gallery/it-1.jpg',
      description: 'Personal portfolio built with Next.js and Framer Motion',
      link: 'https://your-portfolio-url.com'
    },
    {
      id: 15,
      title: 'Content Management System',
      category: 'IT Projects',
      image: '/images/gallery/it-2.jpg',
      description: 'Custom CMS for client content management',
    },
    {
      id: 16,
      title: 'Social Media Dashboard',
      category: 'IT Projects',
      image: '/images/gallery/it-3.jpg',
      description: 'Analytics dashboard for social media metrics',
    },
  ],
  'graphic-design': [
    {
      id: 17,
      title: 'Brand Identity Design',
      category: 'Graphic Design',
      image: '/images/gallery/design-1.jpg',
      description: 'Complete brand identity for BEM Polines',
    },
    {
      id: 18,
      title: 'Social Media Graphics',
      category: 'Graphic Design',
      image: '/images/gallery/design-2.jpg',
      description: 'Instagram feed design and story templates',
    },
    {
      id: 19,
      title: 'Poster Design',
      category: 'Graphic Design',
      image: '/images/gallery/design-3.jpg',
      description: 'Event poster design for Electro Charity Concert',
    },
    {
      id: 20,
      title: 'Infographic Design',
      category: 'Graphic Design',
      image: '/images/gallery/design-4.jpg',
      description: 'Data visualization and infographic design',
    },
    {
      id: 21,
      title: 'Thumbnail Design',
      category: 'Graphic Design',
      image: '/images/gallery/design-5.jpg',
      description: 'YouTube thumbnail design for various content creators',
    },
  ],
};