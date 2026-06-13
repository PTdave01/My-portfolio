import React from 'react';
import Button from './Button';
import { useInViewAnimation } from '../hooks/useInViewAnimation';

const PricingSection: React.FC = () => {
  const { ref, inView } = useInViewAnimation();

  return (
    <section ref={ref} className="w-full py-12 px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:justify-end md:max-w-4xl md:ml-auto">
        {/* Dark card */}
        <div
          className={`rounded-[40px] pl-10 pr-10 md:pr-24 pt-3 pb-10 bg-[#051A24] shadow-inner ${inView ? 'animate-fade-in-up' : 'opacity-0'}`}
          style={{ animationDelay: '0.1s' }}
        >
          <h3 className="text-[22px] font-medium text-[#F6FCFF] mb-2">AI Dev Retainer</h3>
          <p className="text-[#E0EBF0] text-sm mb-6">Ongoing ML / clinical AI support.<br />You work directly with Moses.</p>
          <p className="text-2xl text-[#F6FCFF] font-medium">Get in touch</p>
          <div className="flex flex-col sm:flex-row gap-3 mt-6">
            <Button variant="primary" href="mailto:Daniyanmoses.k@gmail.com">Let's talk</Button>
            <Button variant="secondary" href="https://github.com/ptdave01">GitHub</Button>
          </div>
        </div>

        {/* Light card */}
        <div
          className={`rounded-[40px] pl-10 pr-10 md:pr-24 pt-3 pb-10 bg-white shadow-[0_4px_16px_rgba(0,0,0,0.08)] ${inView ? 'animate-fade-in-up' : 'opacity-0'}`}
          style={{ animationDelay: '0.2s' }}
        >
          <h3 className="text-[22px] font-medium text-[#051A24] mb-2">Custom AI Project</h3>
          <p className="text-[#051A24]/70 text-sm mb-6">Fixed scope, fixed timeline.<br />Computer vision, forecasting, dashboards.</p>
          <p className="text-2xl text-[#0D212C] font-medium">From concept to deployment</p>
          <div className="mt-6">
            <Button variant="tertiary" href="mailto:Daniyanmoses.k@gmail.com">Start a project</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
