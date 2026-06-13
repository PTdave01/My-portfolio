import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import Button from './Button';

const Footer: React.FC = () => {
  return (
    <footer className="w-full py-12 px-6 max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-start">
      <div className="mb-8 md:mb-0">
        <Button variant="primary" href="mailto:Daniyanmoses.k@gmail.com">Let's talk</Button>
      </div>
      <div className="flex items-start gap-12">
        <ArrowUpRight className="w-6 h-6 text-[#051A24] hidden md:block" />
        <div>
          <ul className="space-y-3">
            <li><a href="#projects" className="text-base text-[#051A24] hover:opacity-70 transition">Projects</a></li>
            <li><a href="#founder" className="text-base text-[#051A24] hover:opacity-70 transition">Founder</a></li>
            <li><a href="#contact" className="text-base text-[#051A24] hover:opacity-70 transition">Contact</a></li>
          </ul>
        </div>
        <div>
          <ul className="space-y-3">
            <li><a href="https://github.com/ptdave01" target="_blank" rel="noopener noreferrer" className="text-base text-[#051A24] hover:opacity-70 transition">GitHub</a></li>
            <li><a href="mailto:Daniyanmoses.k@gmail.com" className="text-base text-[#051A24] hover:opacity-70 transition">Email</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
