import React, { useEffect, useState, useRef } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    name: 'Client feedback',
    role: 'Healthcare startup',
    quote: 'Moses brought deep clinical insight to the ML pipeline – a rare combination.',
    avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=80&h=80',
  },
  {
    name: 'Dr. Ahmed',
    role: 'Physiotherapy Lead',
    quote: 'PhysioForm completely changed how we monitor patients remotely. Highly recommended.',
    avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=80&h=80',
  },
];

const infiniteTestimonials = [...testimonials, ...testimonials, ...testimonials];

const TestimonialCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(testimonials.length);
  const [isPaused, setIsPaused] = useState(false);
  const [transitionEnabled, setTransitionEnabled] = useState(true);
  const intervalRef = useRef<ReturnType<typeof setInterval>>();

  const totalItems = infiniteTestimonials.length;
  const cardWidth = 427.5;

  const goToIndex = (index: number) => {
    setCurrentIndex(index);
  };

  const handlePrev = () => {
    setTransitionEnabled(true);
    goToIndex(currentIndex - 1);
  };

  const handleNext = () => {
    setTransitionEnabled(true);
    goToIndex(currentIndex + 1);
  };

  useEffect(() => {
    if (isPaused) return;
    intervalRef.current = setInterval(() => {
      setTransitionEnabled(true);
      setCurrentIndex(prev => prev + 1);
    }, 3000);
    return () => clearInterval(intervalRef.current);
  }, [isPaused]);

  useEffect(() => {
    if (currentIndex === totalItems - testimonials.length) {
      setTimeout(() => {
        setTransitionEnabled(false);
        goToIndex(testimonials.length);
      }, 800);
    } else if (currentIndex === 0) {
      setTimeout(() => {
        setTransitionEnabled(false);
        goToIndex(totalItems - testimonials.length * 2);
      }, 800);
    }
  }, [currentIndex, totalItems]);

  const translateX = -(currentIndex * cardWidth) - (currentIndex * 24);

  return (
    <section className="w-full py-20">
      <div className="md:max-w-4xl md:ml-auto flex flex-col md:flex-row md:items-center justify-between px-6 mb-8">
        <h2 className="text-[32px] md:text-[40px] lg:text-[44px] leading-[1.1] text-[#0D212C] tracking-tight mb-4 md:mb-0">
          What <span className="font-serif-accent">clients</span> say
        </h2>
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-5 h-5 fill-black text-black" />
          ))}
          <span className="ml-2 text-sm font-medium text-[#051A24]">5/5</span>
        </div>
      </div>

      <div className="relative max-w-[1200px] mx-auto px-6">
        <div
          className="overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div
            className="flex gap-6 transition-transform ease-[cubic-bezier(0.4,0,0.2,1)]"
            style={{
              transform: `translateX(${translateX}px)`,
              transition: transitionEnabled ? 'transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)' : 'none',
            }}
          >
            {infiniteTestimonials.map((testimonial, idx) => (
              <div
                key={idx}
                className="bg-white rounded-[32px] md:rounded-[40px] shadow-[0_4px_16px_rgba(0,0,0,0.08)] px-6 md:pl-10 md:pr-24 py-8 flex-shrink-0"
                style={{ width: 'calc(100% - 48px)', maxWidth: '427.5px' }}
              >
                <svg className="mb-4" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.75 13.5H5.25L9.75 4.5V9H14.25L9.75 18V13.5Z" fill="#0D212C"/>
                </svg>
                <p className="text-base text-[#0D212C] leading-relaxed mb-4">{testimonial.quote}</p>
                <div className="flex items-center gap-3">
                  <img src={testimonial.avatar} alt={testimonial.name} className="w-12 h-12 rounded-full object-cover" />
                  <div>
                    <p className="font-semibold text-sm text-[#051A24]">{testimonial.name}</p>
                    <p className="text-xs text-[#273C46] flex items-center gap-1">
                      <span className="inline-block w-1 h-1 bg-[#0D212C] rotate-45"></span> {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={handlePrev}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 w-12 h-12 rounded-full border border-[#0D212C]/20 bg-white flex items-center justify-center hover:bg-gray-50 transition"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={handleNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 w-12 h-12 rounded-full border border-[#0D212C]/20 bg-white flex items-center justify-center hover:bg-gray-50 transition"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
};

export default TestimonialCarousel;
