import React, { useState, useCallback, useRef } from 'react';
import Button from './Button';

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

interface SpawnedImage {
  id: number;
  x: number;
  y: number;
  rotation: number;
  imgSrc: string;
}

const PartnerSection: React.FC = () => {
  const [spawned, setSpawned] = useState<SpawnedImage[]>([]);
  const lastSpawnTime = useRef(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const nextId = useRef(0);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    const now = Date.now();
    if (now - lastSpawnTime.current < 80) return;
    lastSpawnTime.current = now;

    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const randomImg = marqueeImages[Math.floor(Math.random() * marqueeImages.length)];
    const rotation = Math.random() * 20 - 10;

    const id = nextId.current++;
    setSpawned(prev => [...prev, { id, x, y, rotation, imgSrc: randomImg }]);

    setTimeout(() => {
      setSpawned(prev => prev.filter(item => item.id !== id));
    }, 1000);
  }, []);

  return (
    <section className="w-full py-12 px-6">
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        className="relative max-w-7xl mx-auto py-48 rounded-[40px] shadow-[0_4px_16px_rgba(0,0,0,0.08)] bg-white overflow-hidden text-center"
      >
        <h2 className="text-[48px] md:text-[64px] lg:text-[80px] text-[#0D212C] font-serif-accent mb-12">
          Let’s build AI for health
        </h2>
        <Button variant="primary" className="inline-flex items-center gap-3">
          <img
            src="https://i.ibb.co/5gfcg0Fq/IMG-2193.png"
            alt="Moses"
            className="w-10 h-10 rounded-full object-cover"
          />
          Start chat with Moses
        </Button>

        {spawned.map(img => (
          <img
            key={img.id}
            src={img.imgSrc}
            style={{
              left: img.x,
              top: img.y,
              transform: `translate(-50%, -50%) rotate(${img.rotation}deg) scale(0.5)`,
              animation: 'fade-out 1s forwards',
              position: 'absolute',
              pointerEvents: 'none',
              width: 80,
              height: 80,
              borderRadius: 8,
              objectFit: 'cover',
              zIndex: 10,
            }}
          />
        ))}

        <style>{`
          @keyframes fade-out {
            0% { opacity: 1; transform: translate(-50%, -50%) rotate(0deg) scale(0.5); }
            100% { opacity: 0; transform: translate(-50%, -50%) rotate(10deg) scale(0.2); }
          }
        `}</style>
      </div>
    </section>
  );
};

export default PartnerSection;
