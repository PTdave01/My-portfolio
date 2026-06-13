import React from 'react';
import Button from './Button';

const BottomNav: React.FC = () => {
  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-white rounded-full px-8 py-2 shadow-[0_1px_2px_0_rgba(5,26,36,0.1),0_4px_4px_0_rgba(5,26,36,0.09),0_9px_6px_0_rgba(5,26,36,0.05),0_17px_7px_0_rgba(5,26,36,0.01),0_26px_7px_0_rgba(5,26,36,0),inset_0_2px_8px_0_rgba(255,255,255,0.5)] flex items-center gap-4">
      <span className="text-2xl font-semibold text-[#051A24] font-serif-accent">N</span>
      <Button variant="primary" href="mailto:Daniyanmoses.k@gmail.com">Start a chat</Button>
    </div>
  );
};

export default BottomNav;
