import React, { useState } from 'react';
import { ASSETS } from '../constants';
import { Instagram, Youtube, ChevronDown } from './Icons';

export const SocialSection: React.FC = () => {
  const [openSello, setOpenSello] = useState(true);
  const [openEvento, setOpenEvento] = useState(true);

  const EVENT_IMAGE = 'https://i.postimg.cc/NG6j4jZR/Chat-GPT-Image-25-ago-2026-23-42-37.png';

  return (
    <section className="w-full bg-black border-b border-neutral-900 py-12 px-4">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* MINI DESPLEGABLE: CANALES SELLO */}
        <div className="max-w-4xl mx-auto border border-neutral-900/90 rounded-xl overflow-hidden bg-neutral-950/40">
          <button
            onClick={() => setOpenSello(prev => !prev)}
            className="w-full flex items-center justify-between px-5 py-4 bg-neutral-950 hover:bg-neutral-900/40 transition-colors text-left group"
          >
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-red-600 group-hover:scale-125 transition-transform" />
              <span className="font-rubik text-xs md:text-sm tracking-[0.25em] uppercase text-neutral-300 font-semibold group-hover:text-white transition-colors">
                CANALES SELLO
              </span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-[10px] tracking-widest uppercase text-neutral-600 group-hover:text-neutral-400 hidden sm:inline">
                {openSello ? 'PLEGAR' : 'DESPLEGAR'}
              </span>
              <div className={`p-1.5 rounded-full border border-neutral-800 transition-transform duration-300 group-hover:border-red-600/50 ${openSello ? 'rotate-180 bg-red-600/10' : ''}`}>
                <ChevronDown className="w-4 h-4 text-neutral-500 group-hover:text-red-500" />
              </div>
            </div>
          </button>

          <div
            className={`transition-all duration-500 ease-in-out overflow-hidden ${
              openSello ? 'max-h-[800px] opacity-100 p-5 pt-2 border-t border-neutral-900' : 'max-h-0 opacity-0 p-0 border-t-0'
            }`}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-3">
              {/* INSTAGRAM - SELLO */}
              <a
                href="https://www.instagram.com/lcworldmusic/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-neutral-950 border border-neutral-900 hover:border-red-600/50 rounded-xl group transition-all duration-300 hover:bg-neutral-900/40"
              >
                <div className="w-12 h-12 flex items-center justify-center p-2 rounded-lg bg-neutral-900/70 border border-neutral-800 group-hover:border-red-600/50 transition-all flex-shrink-0">
                  <img
                    src={ASSETS.LOGO}
                    alt="LC Logo"
                    className="w-8 h-8 object-contain mix-blend-lighten group-hover:scale-110 transition-transform"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="font-rubik font-bold tracking-[0.2em] text-sm md:text-base text-white group-hover:text-red-500 transition-colors uppercase">
                    INSTAGRAM - SELLO
                  </span>
                  <span className="text-[10px] text-neutral-500 font-medium tracking-widest uppercase mt-0.5">
                    FOLLOW THE WAVE • @lcworldmusic
                  </span>
                </div>
              </a>

              {/* YT SELLO */}
              <a
                href="https://youtube.com/@ytlcworldmusic?si=YXTmffUlKrZ25Rot"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-neutral-950 border border-neutral-900 hover:border-red-600/50 rounded-xl group transition-all duration-300 hover:bg-neutral-900/40"
              >
                <div className="w-12 h-12 flex items-center justify-center p-2 rounded-lg bg-neutral-900/70 border border-neutral-800 group-hover:border-red-600/50 transition-all flex-shrink-0">
                  <img
                    src={ASSETS.LOGO}
                    alt="LC Logo"
                    className="w-8 h-8 object-contain mix-blend-lighten group-hover:scale-110 transition-transform"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="font-rubik font-bold tracking-[0.2em] text-sm md:text-base text-white group-hover:text-red-500 transition-colors uppercase">
                    YT SELLO
                  </span>
                  <span className="text-[10px] text-neutral-500 font-medium tracking-widest uppercase mt-0.5">
                    CANAL OFICIAL • @ytlcworldmusic
                  </span>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* MINI DESPLEGABLE: CANALES EVENTO */}
        <div className="max-w-4xl mx-auto border border-neutral-900/90 rounded-xl overflow-hidden bg-neutral-950/40">
          <button
            onClick={() => setOpenEvento(prev => !prev)}
            className="w-full flex items-center justify-between px-5 py-4 bg-neutral-950 hover:bg-neutral-900/40 transition-colors text-left group"
          >
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-orange-500 group-hover:scale-125 transition-transform" />
              <span className="font-rubik text-xs md:text-sm tracking-[0.25em] uppercase text-neutral-300 font-semibold group-hover:text-white transition-colors">
                CANALES EVENTO
              </span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-[10px] tracking-widest uppercase text-neutral-600 group-hover:text-neutral-400 hidden sm:inline">
                {openEvento ? 'PLEGAR' : 'DESPLEGAR'}
              </span>
              <div className={`p-1.5 rounded-full border border-neutral-800 transition-transform duration-300 group-hover:border-red-600/50 ${openEvento ? 'rotate-180 bg-red-600/10' : ''}`}>
                <ChevronDown className="w-4 h-4 text-neutral-500 group-hover:text-red-500" />
              </div>
            </div>
          </button>

          <div
            className={`transition-all duration-500 ease-in-out overflow-hidden ${
              openEvento ? 'max-h-[1000px] opacity-100 p-5 pt-2 border-t border-neutral-900' : 'max-h-0 opacity-0 p-0 border-t-0'
            }`}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-3">
              {/* INSTAGRAM - EVENTO */}
              <div className="flex flex-col bg-neutral-950 border border-neutral-900 hover:border-red-600/50 rounded-xl p-5 group transition-all duration-300">
                <div className="flex items-center gap-3 mb-4 pb-3 border-b border-neutral-900">
                  <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-neutral-900/70 border border-neutral-800 group-hover:border-red-600/50 transition-colors">
                    <Instagram className="w-4 h-4 text-red-500" />
                  </div>
                  <div>
                    <h3 className="font-rubik font-bold text-xs md:text-sm tracking-[0.2em] text-white uppercase group-hover:text-red-500 transition-colors">
                      INSTAGRAM - EVENTO
                    </h3>
                    <span className="text-[10px] text-neutral-500 tracking-widest uppercase">
                      FLYER / CARTEL
                    </span>
                  </div>
                </div>

                <a
                  href={EVENT_IMAGE}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative overflow-hidden rounded-lg border border-neutral-900 group-hover:border-neutral-800 bg-black flex items-center justify-center aspect-square md:aspect-auto md:h-64"
                >
                  <img
                    src={EVENT_IMAGE}
                    alt="INSTAGRAM - EVENTO"
                    className="w-full h-full object-contain p-1 group-hover:scale-105 transition-transform duration-500"
                  />
                </a>
              </div>

              {/* YT EVENTO */}
              <div className="flex flex-col justify-between bg-neutral-950 border border-neutral-900 hover:border-red-600/50 rounded-xl p-5 group transition-all duration-300 min-h-[260px]">
                <div className="flex items-center gap-3 mb-4 pb-3 border-b border-neutral-900">
                  <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-neutral-900/70 border border-neutral-800 group-hover:border-red-600/50 transition-colors">
                    <Youtube className="w-4 h-4 text-red-500" />
                  </div>
                  <div>
                    <h3 className="font-rubik font-bold text-xs md:text-sm tracking-[0.2em] text-white uppercase group-hover:text-red-500 transition-colors">
                      YT EVENTO
                    </h3>
                    <span className="text-[10px] text-neutral-500 tracking-widest uppercase">
                      STREAMING EVENTOS
                    </span>
                  </div>
                </div>

                <div className="flex-1 flex flex-col items-center justify-center text-center p-6 border border-dashed border-neutral-900 rounded-lg bg-black/50 my-auto">
                  <span className="font-rubik text-lg md:text-xl font-bold tracking-[0.25em] text-white uppercase mb-2">
                    YT EVENTO
                  </span>
                  <span className="font-rubik text-sm md:text-base font-bold tracking-[0.3em] uppercase text-transparent bg-clip-text bg-gradient-to-r from-[#8B0000] via-[#FF4D00] to-[#FFEA00]">
                    PRÓXIMAMENTE
                  </span>
                  <span className="text-[10px] text-neutral-600 uppercase tracking-widest mt-3">
                    SEÑAL DE RETRANSMISIÓN EN DESARROLLO
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
