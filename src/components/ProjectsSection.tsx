import React from 'react';
import { useInViewAnimation } from '../hooks/useInViewAnimation';

const projects = [
  {
    name: 'PhysioForm',
    description: 'AI-powered remote rehabilitation monitoring platform – live on Streamlit',
    img: 'https://motionsites.ai/assets/hero-space-voyage-preview-eECLH3Yc.gif',
    link: 'https://group-echo-physioform-ez35tc4j6tcjuqsppglqfc.streamlit.app',
  },
  {
    name: 'PTDM',
    description: 'ML financial forecasting with SHAP explainability – 86% accuracy',
    img: 'https://motionsites.ai/assets/hero-transform-data-preview-Cx5OU29N.gif',
    link: 'https://github.com/ptdave01',
  },
  {
    name: 'Clinical Dashboards',
    description: 'Plotly analytics for patient adherence and exercise quality',
    img: 'https://motionsites.ai/assets/hero-portfolio-cosmic-preview-BpvWJ3Nc.gif',
    link: 'https://github.com/ptdave01',
  },
];

const ProjectItem: React.FC<{ project: typeof projects[0]; delay: string }> = ({ project, delay }) => {
  const { ref, inView } = useInViewAnimation();

  return (
    <div ref={ref} className={`flex flex-col gap-4 ${inView ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: delay }}>
      <div className="ml-20 md:ml-28">
        <h3 className="text-2xl md:text-3xl font-semibold font-serif-accent text-[#051A24] mb-2">{project.name}</h3>
        <p className="text-sm md:text-base text-[#051A24]/70">{project.description}</p>
        <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-sm text-[#051A24] underline mt-1 inline-block">View project →</a>
      </div>
      <img
        src={project.img}
        alt={project.name}
        className="w-full rounded-2xl shadow-lg object-cover"
        style={{ aspectRatio: '16/9' }}
      />
    </div>
  );
};

const ProjectsSection: React.FC = () => {
  return (
    <section className="max-w-[1200px] mx-auto px-6 py-12">
      <div className="flex flex-col gap-16 md:gap-20">
        {projects.map((project, idx) => (
          <ProjectItem key={idx} project={project} delay={`${0.1 + idx * 0.1}s`} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
