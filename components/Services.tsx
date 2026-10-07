import React from 'react';
import { Mic2, Sliders, Headphones, Check, Calendar } from './Icons';

interface ServiceTierProps {
  title: string;
  price: string;
  description: string;
  features: string[];
  icon: React.ReactNode;
  recommended?: boolean;
  formUrl: string;
}

const ServiceTier: React.FC<ServiceTierProps> = ({ title, description, features, icon, recommended, formUrl }) => (
  <div className={`relative p-8 flex flex-col h-full transition-all duration-300 group hover:-translate-y-2 rounded-xl border border-neutral-800/90 bg-neutral-950/90 hover:border-red-500 hover:bg-gradient-to-b hover:from-[#E63900] hover:to-[#B81900] active:from-[#CC2200] active:to-[#990000] shadow-[0_0_20px_-3px_rgba(220,38,38,0.32)] hover:shadow-[0_0_50px_rgba(230,57,0,0.7),0_0_20px_rgba(184,25,0,0.55),inset_0_0_15px_rgba(255,255,255,0.2)] active:shadow-[0_0_60px_rgba(204,34,0,0.85)] cursor-pointer`}>
    {recommended && (
      <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-red-600 text-white text-[11px] font-black px-4 py-1 uppercase tracking-widest rounded shadow-md group-hover:bg-black group-hover:text-red-400 transition-colors">
        <span>Popular</span>
      </div>
    )}
    
    <div className="mb-8 border-b border-neutral-800/80 group-hover:border-black/30 pb-8 transition-colors">
      <div className="w-14 h-14 flex items-center justify-center mb-6 border border-neutral-800 bg-neutral-900 text-white rounded-lg group-hover:border-black group-hover:bg-black/20 group-hover:text-black transition-all">
        {icon}
      </div>
      <h3 className="text-2xl font-bold text-white mb-3 uppercase tracking-tight font-display group-hover:text-black group-active:text-black transition-colors">{title}</h3>
      <p className="text-neutral-400 group-hover:text-black font-medium text-sm leading-relaxed transition-colors">{description}</p>
    </div>

    <ul className="space-y-4 mb-10 flex-1">
      {features.map((feature, idx) => (
        <li key={idx} className="flex items-start gap-3 text-sm text-neutral-300 group-hover:text-black font-semibold transition-colors">
          <Check className="w-5 h-5 shrink-0 text-red-500 group-hover:text-black transition-colors" />
          <span>{feature}</span>
        </li>
      ))}
    </ul>

    <a 
      href={formUrl} 
      target="_blank" 
      rel="noopener noreferrer"
      className="w-full py-4 text-center font-bold uppercase tracking-widest transition-all skew-x-[-10deg] bg-white hover:bg-neutral-200 text-black group-hover:bg-black group-hover:text-white shadow-md"
    >
      <span className="skew-x-[10deg] inline-block">Solicitar Información</span>
    </a>
  </div>
);

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 px-4 bg-black border-t border-neutral-900 relative">
       {/* Background accent */}
       <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-600 to-transparent opacity-50"></div>

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-28 space-y-6">
          <div className="inline-block px-3 py-1 border border-neutral-800 text-neutral-500 text-xs font-bold tracking-[0.2em] uppercase mb-2">
            Ecosistema LC WORLD
          </div>
          <h2 className="text-5xl md:text-7xl font-bold text-white uppercase tracking-tighter font-display">
            ACCEDE A LA MÁQUINA
          </h2>
          
          {/* Caja Sesión Gratis - Calendly más compacta */}
          <div className="pt-2 flex justify-center">
            <a
              href="https://calendly.com/lcestudio412/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-between gap-4 px-5 py-3 bg-neutral-950/90 border border-red-600/70 hover:border-red-500 rounded-lg group transition-all duration-300 hover:scale-[1.02] shadow-[0_0_18px_-2px_rgba(139,0,0,0.35),0_0_10px_-2px_rgba(255,234,0,0.18)] hover:shadow-[0_0_30px_1px_rgba(139,0,0,0.5),0_0_18px_2px_rgba(255,234,0,0.3)] text-left max-w-md w-full"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded bg-red-600/10 border border-red-600/30 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <Calendar className="w-4 h-4 text-red-500" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-rubik font-bold text-xs sm:text-sm tracking-[0.15em] text-white group-hover:text-red-400 transition-colors uppercase">
                      SESIÓN GRATIS
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                  </div>
                  <p className="text-neutral-400 text-[11px] leading-tight mt-0.5">
                    Reserva ya tu llamada o sesión para concretar todo.
                  </p>
                </div>
              </div>
              <div className="px-3 py-1.5 rounded bg-red-600 hover:bg-red-500 text-white font-bold text-[10px] uppercase tracking-[0.15em] transition-colors shrink-0 shadow font-rubik">
                RESERVAR
              </div>
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <ServiceTier 
            title="Beat Personalizado"
            description="Diseña tu sonido desde cero con nuestro compositor, sin limitación creativa. Si no estás seguro, clica en el enlace y pídenos información, abriendo con la palabra BEAT al DM."
            icon={<Sliders className="w-7 h-7" />}
            formUrl="https://forms.gle/pw2Eh91zWm6f8iuq9"
            features={[
              "Composición exclusiva",
              "Arreglos estructurales",
              "Protocolo de identidad de sonido",
              "Stems y archivos WAV",
              "Derechos de uso profesional"
            ]}
          />
          
          <ServiceTier 
            title="Canción Completa"
            description="Ven a probarte al estudio por un precio absurdo; si te gusta, ya tienes tu estudio de confianza. Si no estás seguro, clica en el enlace y pídenos información, abriendo con la palabra CANCIÓN al DM."
            icon={<Mic2 className="w-7 h-7" />}
            recommended={true}
            formUrl="https://forms.gle/UHv4aLaj7bDGYGDQ6"
            features={[
              "Grabación y Coaching Vocal",
              "Composición + Beatmaking",
              "Mezcla y Mastering Pro",
              "Análisis de viabilidad comercial",
              "Revisiones estratégicas"
            ]}
          />
 
          <ServiceTier 
            title="Más que una Canción"
            description="Solo aptos para los validados en el filtro de la Magnífica Obsesión. Si no estás seguro, clica en el enlace y pídenos información, abriendo con la palabra OBSESIÓN al DM."
            icon={<Headphones className="w-7 h-7" />}
            formUrl="https://forms.gle/zD2UB2XFpQWBKcgC9"
            features={[
              "Plataforma completa de artista",
              "Estrategia de Lanzamiento",
              "Gestión de Redes y Tráfico",
              "Diseño de Identidad Visual",
              "Acceso al Ecosistema LC WORLD",
              "Distribución y Plan de Medios"
            ]}
          />
        </div>
      </div>
    </section>
  );
};