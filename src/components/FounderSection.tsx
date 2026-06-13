import React, { useEffect, useRef, useState } from 'react';
import { Quote } from 'lucide-react';
import { useInViewAnimation } from '../hooks/useInViewAnimation';

const FounderSection: React.FC = () => {
  const { ref, inView } = useInViewAnimation();
  const [parallaxY, setParallaxY] = useState(0);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!imageRef.current) return;
      const rect = imageRef.current.getBoundingClientRect();
      const viewHeight = window.innerHeight;
      const visibleRatio = Math.max(0, Math.min(1, (viewHeight - rect.top) / (viewHeight + rect.height)));
      const offset = visibleRatio * 200;
      setParallaxY(offset);
    };

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();
      } else {
        window.removeEventListener('scroll', handleScroll);
      }
    });

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <section ref={ref} className="py-12 px-6 max-w-2xl mx-auto text-center">
      <Quote className={`w-6 h-6 text-slate-900 mx-auto mb-6 ${inView ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.1s' }} />

      <blockquote className={`text-[32px] md:text-[40px] lg:text-[44px] leading-[1.1] text-[#0D212C] tracking-tight mb-4 ${inView ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
        I left clinical practice to build the <span className="font-serif-accent">AI tools</span> I always needed.
      </blockquote>

      <p className={`italic text-sm text-[#273C46] mb-12 ${inView ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
        Moses Daniyan
      </p>

      <div className={`flex justify-center mb-12 ${inView ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>
        <img
          ref={imageRef}
          src="https://i.ibb.co/5gfcg0Fq/IMG-2193.png"
          alt="Moses Daniyan"
          className="w-full max-w-xs rounded-2xl shadow-lg transition-transform duration-75"
          style={{ transform: `translateY(-${parallaxY}px)` }}
        />
      </div>
    </section>
  );
};

export default FounderSection;
