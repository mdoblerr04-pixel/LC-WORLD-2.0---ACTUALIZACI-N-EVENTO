
import React, { useState, useEffect } from 'react';
import { Hero } from './components/Hero';
import { SocialSection } from './components/SocialSection';
import { BeatList } from './components/BeatList';
import { AudioPlayer } from './components/AudioPlayer';
import { CartDrawer } from './components/CartDrawer';
import { LyricAssistant } from './components/LyricAssistant';
import { Services } from './components/Services';
import { AdminUpload } from './components/AdminUpload';
import { ShoppingCart, Music, Globe, Loader, Lock, ChevronDown, ChevronUp, Instagram } from './components/Icons';
import { Beat, CartItem, LicenseType, LICENSE_PRICES } from './types';
import { supabase } from './services/supabaseClient';
import { ASSETS } from './constants';

function CollapsibleSection({ 
  title, 
  children, 
  isOpen, 
  onToggle, 
  id 
}: { 
  title: React.ReactNode; 
  children: React.ReactNode; 
  isOpen: boolean; 
  onToggle: () => void;
  id?: string;
}) {
  return (
    <div id={id} className={`border-b border-neutral-900 transition-all duration-500 relative bg-black transition-colors`}>
      <button 
        onClick={onToggle}
        className="w-full py-8 px-4 flex items-center justify-between group hover:bg-neutral-900/10 transition-colors"
      >
                <div className="max-w-7xl mx-auto w-full relative flex items-center justify-center">
          <div className="text-center">
            {title}
          </div>
          <div className={`absolute right-0 p-2 rounded-full border border-neutral-900 group-hover:border-red-600/50 transition-all duration-300 ${isOpen ? 'rotate-180 bg-red-600/10' : ''}`}>
            <ChevronDown className={`w-5 h-5 transition-colors ${isOpen ? 'text-red-600' : 'text-neutral-700 group-hover:text-white'}`} />
          </div>
        </div>
      </button>
      
      <div className={`overflow-hidden transition-all duration-700 ease-in-out ${isOpen ? 'max-h-[3000px] opacity-100 py-16' : 'max-h-0 opacity-0'}`}>
        <div className="max-w-7xl mx-auto px-4">
          {children}
        </div>
      </div>
    </div>
  );
}

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [openSections, setOpenSections] = useState<{ [key: string]: boolean }>({
    catalog: false
  });

  const toggleSection = (section: string) => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const GRADIENT_TEXT = "text-transparent bg-clip-text bg-gradient-to-r from-[#8B0000] via-[#FF4D00] to-[#FFEA00]";

  if (isLoading) {
      return (
          <div className="min-h-screen bg-black flex flex-col items-center justify-center text-white">
              <Loader className="w-10 h-10 text-red-600 animate-spin mb-4" />
              <p className="font-display tracking-widest uppercase">Cargando Estudio...</p>
          </div>
      )
  }

  return (
    <div className="min-h-screen bg-black text-neutral-200 font-sans">
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-40 bg-black/90 backdrop-blur-md border-b border-neutral-900">
        <div className="w-full px-6 md:px-12 h-20 flex items-center justify-between">
          <button 
              onClick={() => {
                setOpenSections(prev => ({ ...prev, catalog: true }));
                setTimeout(() => document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth' }), 100);
              }}
              className="text-xs md:text-sm font-bold uppercase tracking-[0.3em] font-rubik text-neutral-300 hover:text-white transition-colors"
          >
              CATÁLOGO
          </button>

          <button 
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-xs md:text-sm font-bold uppercase tracking-[0.3em] font-rubik text-neutral-300 hover:text-white transition-colors"
          >
              CREA CON NOSOTROS
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-20">
        <Hero />
        
        {/* Canales y Redes Sociales */}
        <SocialSection />

        {/* Desplegable: Catálogo */}
        <CollapsibleSection
          id="catalog"
          title={
            <div className="inline-flex items-center justify-center gap-3 md:gap-5">
              <span className="hidden sm:block w-8 md:w-16 h-px bg-gradient-to-r from-transparent to-neutral-900" />
              <h2 className="text-2xl md:text-4xl font-bold uppercase tracking-[0.25em] font-rubik text-center px-6 py-2.5 rounded-lg border border-neutral-900 bg-black/80 shadow-[0_4px_25px_rgba(0,0,0,0.95)]">
                <span className={`${GRADIENT_TEXT} drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]`}>
                  CATÁLOGO
                </span>
              </h2>
              <span className="hidden sm:block w-8 md:w-16 h-px bg-gradient-to-l from-transparent to-neutral-900" />
            </div>
          }
          isOpen={openSections.catalog}
          onToggle={() => toggleSection('catalog')}
        >
          <div className="transform scale-90 origin-top">
            <BeatList 
              beats={[]}
              currentBeat={null}
              isPlaying={false}
              onPlay={() => {}}
              onPause={() => {}}
              onAddToCart={() => {}}
              onOpenLyricAssistant={() => {}}
            />
          </div>
        </CollapsibleSection>

        <Services />
      </main>

      {/* Footer con banner de fondo claramente visible */}
      <footer className="relative py-32 px-4 border-t border-neutral-900 overflow-hidden text-center bg-black">
        {/* Banner de fondo claramente visible */}
        <div 
          className="w-full h-full absolute inset-0 pointer-events-none"
          style={{ 
            backgroundColor: '#000000',
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.58), rgba(0, 0, 0, 0.58)), url(${ASSETS.BANNER})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center 30%',
            backgroundRepeat: 'no-repeat',
            // @ts-ignore
            msInterpolationMode: 'nearest-neighbor',
            WebkitImageRendering: 'optimize-contrast',
            imageRendering: 'crisp-edges',
            filter: 'brightness(0.78)'
          } as React.CSSProperties}
        />
        {/* Grain/Texture effect overlay */}
        <div 
          className="absolute inset-0 opacity-[0.12] pointer-events-none" 
          style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")',
            mixBlendMode: 'overlay'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/80 pointer-events-none" />

        {/* Logo LC WORLD de fondo muy transparente */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.08]">
          <img 
            src={ASSETS.LOGO} 
            alt="LC WORLD Watermark" 
            className="w-96 h-96 object-contain mix-blend-lighten"
          />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center justify-center space-y-8">
          {/* Enlace de Instagram encima de la frase */}
          <a
            href="https://www.instagram.com/lcworldmusic/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full border border-neutral-700/80 bg-black/80 hover:bg-black hover:border-red-600/70 transition-all duration-300 group shadow-2xl hover:scale-105"
          >
            <Instagram className="w-4 h-4 text-red-500 group-hover:scale-110 transition-transform" />
            <span className="font-rubik text-xs md:text-sm tracking-[0.25em] text-neutral-200 group-hover:text-white uppercase">
              INSTAGRAM • @lcworldmusic
            </span>
          </a>

          {/* Frase central abajo */}
          <p className="font-clarity text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-[0.12em] uppercase opacity-95 drop-shadow-[0_2px_14px_rgba(0,0,0,0.95)] max-w-4xl leading-snug text-center">
            "SOLO DECIDE CUÁNTO CORAZÓN PONER."
          </p>

          <div className="pt-6 text-neutral-400 text-[10px] uppercase tracking-[0.3em] drop-shadow-md">
            © {new Date().getFullYear()} LC WORLD MUSIC • ALL RIGHTS RESERVED
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
