import React from 'react';
import { ChevronDown, Play } from './Icons';
import { ASSETS } from '../constants';

export const Hero: React.FC = () => {
  return (
    <div className="relative bg-black">
      {/* Banner Visual Display */}
      <div className="relative h-[48vh] md:h-[58vh] min-h-[380px] w-full flex items-center justify-center overflow-hidden bg-black border-b border-neutral-900">
        <div 
          className="w-full h-full absolute inset-0"
          style={{ 
            backgroundColor: '#000000',
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35)), url(${ASSETS.BANNER})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center 25%',
            backgroundRepeat: 'no-repeat',
            // @ts-ignore
            msInterpolationMode: 'nearest-neighbor',
            WebkitImageRendering: 'optimize-contrast',
            imageRendering: 'crisp-edges',
            filter: 'brightness(0.85)'
          } as React.CSSProperties}
        />
        {/* Grain/Texture effect overlay (Noise) */}
        <div 
          className="absolute inset-0 opacity-[0.12] pointer-events-none" 
          style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")',
            mixBlendMode: 'overlay'
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
      </div>

      {/* Frase justo debajo del banner */}
      <div className="w-full py-8 md:py-10 bg-black border-b border-neutral-900 text-center px-4 flex flex-col items-center justify-center">
        <p className="font-staatliches text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal text-white max-w-4xl mx-auto tracking-[0.2em] uppercase opacity-95 drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)] leading-snug">
          "Nosotros somos la máquina, tú el director."
        </p>
        <div className="mt-5 animate-bounce">
          <ChevronDown className="w-6 h-6 text-neutral-500" />
        </div>
      </div>
    </div>
  );
};