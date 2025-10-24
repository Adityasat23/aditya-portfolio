import Navigation from '@/components/Navigation';
import ScrollProgress from '@/components/ScrollProgress';
import BackToTop from '@/components/BackToTop';
import CursorFollower from '@/components/CursorFollower';
import SkipToContent from '@/components/SkipToContent';
import MusicPlayer from '@/components/MusicPlayer';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import MyWorkPreview from '@/components/sections/MyWorkPreview';
import Experience from '@/components/sections/Experience';
import Projects from '@/components/sections/Projects';
import Skills from '@/components/sections/Skills';
import Contact from '@/components/sections/Contact';

export default function Home() {
  return (
    <>
      <SkipToContent />
      <main id="main-content">
        <div className="hidden lg:block">
          <CursorFollower />
        </div>
        <ScrollProgress />
        <Navigation />
        <Hero />
        <About />
        <MyWorkPreview />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
        <BackToTop />
        <MusicPlayer />
      </main>
    </>
  );
}