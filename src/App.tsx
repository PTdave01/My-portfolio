import React from 'react';
import { useInViewAnimation } from './hooks/useInViewAnimation';
import Button from './components/Button';
import FounderSection from './components/FounderSection';
import PricingSection from './components/PricingSection';
import TestimonialCarousel from './components/TestimonialCarousel';
import ProjectsSection from './components/ProjectsSection';
import PartnerSection from './components/PartnerSection';
import Footer from './components/Footer';
import CopyrightBar from './components/CopyrightBar';
import BottomNav from './components/BottomNav';

const marqueeImages = [
  'https://motionsites.ai/assets/hero-space-voyage-preview-eECLH3Yc.gif',
  'https://motionsites.ai/assets/hero-portfolio-cosmic-preview-BpvWJ3Nc.gif',
  'https://motionsites.ai/assets/hero-velorah-preview-CJNTtbpd.gif',
  'https://motionsites.ai/assets/hero-asme-preview-B_nGDnTP.gif',
  'https://motionsites.ai/assets/hero-transform-data-preview-Cx5OU29N.gif',
  'https://motionsites.ai/assets/hero-aethera-preview-DknSlcTa.gif',
  'https://motionsites.ai/assets/hero-orbit-web3-preview-BXt4OttD.gif',
  'https://motionsites.ai/assets/hero-nexora-preview-cx5HmUgo.gif',
];

const Hero: React.FC = () => {
  const { ref, inView } = useInViewAnimation();

  return (
    <section ref={ref} className="max-w-[440px] mx-auto px-6 pt-12 md:pt-16 text-center">
      {/* ========= LOGO ========= */}
      <img
        src="https://i.ibb.co/3mMLx7ny/IMG-2042.jpg"
        alt="NoT_tHaT_kInD_oF_pHySiO"
        className="h-10 mx-auto mb-6"
      />

      <p className={`font-mono text-xs md:text-sm text-[#051A24] mb-2 ${inView ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
        Clinical ML Engineer · Physiotherapist
      </p>
      <h2 className={`text-[32px] md:text-[40px] lg:text-[44px] leading-[1.1] text-[#0D212C] tracking-tight whitespace-nowrap mb-4 ${inView ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
        Build <span className="font-serif-accent">intelligent rehab</span>,<br />
        the <span className="font-serif-accent">clinical way</span>.
      </h2>

      <div className={`flex flex-col gap-6 mt-5 md:mt-6 text-sm md:text-base text-[#051A24] leading-relaxed ${inView ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>
        <p>I’m a licensed physiotherapist who became an ML engineer to bridge clinical practice and AI. I built PhysioForm, a live system that has monitored over 1000 exercise sessions, helping clinicians catch bad form before it causes injury.</p>
        <p>My work is deeply clinical — every model is validated against patient outcomes. I move fast but never skip safety or compliance.</p>
        <p>Available for remote collaborations worldwide.</p>
      </div>

      <div className={`flex flex-col sm:flex-row gap-3 md:gap-4 mt-5 md:mt-6 justify-center ${inView ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.5s' }}>
        <Button variant="primary" href="mailto:Daniyanmoses.k@gmail.com">Let's talk</Button>
        <Button variant="secondary" href="https://github.com/ptdave01">View projects</Button>
      </div>
    </section>
  );
};

const Marquee: React.FC = () => (
  <div className="w-full mt-16 md:mt-20 mb-16 overflow-hidden">
    <div className="flex animate-marquee">
      {[...marqueeImages, ...marqueeImages].map((src, i) => (
        <img
          key={i}
          src={src}
          alt=""
          className="h-[280px] md:h-[500px] object-cover mx-3 rounded-2xl shadow-lg flex-shrink-0"
        />
      ))}
    </div>
  </div>
);

const App: React.FC = () => {
  return (
    <div className="bg-white">
      <Hero />
      <Marquee />
      <FounderSection />
      <PricingSection />
      <TestimonialCarousel />
      <ProjectsSection />
      <PartnerSection />
      <Footer />
      <CopyrightBar />
      <BottomNav />
    </div>
  );
};

export default App;
