import React from 'react';
import { Play, Youtube, Music } from './Icons';

interface BeatListProps {
  beats?: any[];
  currentBeat?: any;
  isPlaying?: boolean;
  onPlay?: () => void;
  onPause?: () => void;
  onAddToCart?: () => void;
  onOpenLyricAssistant?: () => void;
}

export const BeatList: React.FC<BeatListProps> = () => {
  const playlists = [
    {
      title: 'LC BEATS',
      subtitle: 'YOUTUBE PLAYLIST',
      url: 'https://www.youtube.com/playlist?list=PLE49JvTc2yX4',
      cover: 'https://i.postimg.cc/ZqNWzFs2/Chat-GPT-Image-19-sept-2026-18-24-23-removebg-preview.png',
      badge: 'YOUTUBE',
      icon: Youtube,
    },
    {
      title: 'SPOTIFY PLAYLIST',
      subtitle: 'SPOTIFY OFICIAL',
      url: 'https://open.spotify.com/playlist/0eRHmWfgLngYHOXD1h3dND?si=54f801135b8e45da',
      cover: 'https://i.postimg.cc/y8MNj36F/Chat-GPT-Image-31-may-2026-10-44-50.png',
      badge: 'SPOTIFY',
      icon: Music,
    },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8 mb-8">
      {/* Header */}
      <div className="relative flex items-center justify-center mb-12">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full h-px bg-gradient-to-r from-transparent via-neutral-800 to-transparent"></div>
        </div>
        <div className="relative bg-black px-8">
          <h3 className="font-rubik font-bold tracking-[0.6em] text-red-500/70 text-xs md:text-sm uppercase">
            PLAYLISTS OFICIALES
          </h3>
        </div>
      </div>

      {/* Playlists Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {playlists.map((playlist, index) => {
          const IconComponent = playlist.icon;
          return (
            <a
              key={index}
              href={playlist.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex flex-col justify-between overflow-hidden rounded-xl border border-neutral-900/90 bg-neutral-950/90 hover:border-red-600/60 transition-all duration-500 p-6 min-h-[380px] shadow-[0_0_22px_-3px_rgba(139,0,0,0.38),0_0_14px_-2px_rgba(255,234,0,0.2)] hover:shadow-[0_0_38px_1px_rgba(139,0,0,0.58),0_0_24px_3px_rgba(255,234,0,0.38)] hover:-translate-y-1"
            >
              {/* Background ambient cover */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-all duration-700 opacity-25 group-hover:opacity-40 group-hover:scale-105"
                style={{ backgroundImage: `url(${playlist.cover})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/50" />

              {/* Top tag */}
              <div className="relative z-10 flex items-center justify-between">
                <span className="font-rubik text-[11px] tracking-[0.25em] text-red-500 uppercase px-3 py-1 rounded bg-red-600/10 border border-red-600/30 flex items-center gap-2">
                  <IconComponent className="w-3.5 h-3.5" />
                  {playlist.badge}
                </span>
                <span className="text-neutral-500 text-[10px] tracking-widest uppercase">
                  {playlist.subtitle}
                </span>
              </div>

              {/* Cover Image in Center */}
              <div className="relative z-10 my-4 flex items-center justify-center">
                <div className="w-40 h-40 md:w-48 md:h-48 rounded-lg overflow-hidden border border-neutral-800 group-hover:border-red-600/40 shadow-2xl group-hover:scale-105 transition-transform duration-500 bg-black/60 flex items-center justify-center">
                  <img
                    src={playlist.cover}
                    alt={playlist.title}
                    className="w-full h-full object-contain p-2"
                  />
                </div>
              </div>

              {/* Bottom Label and CTA */}
              <div className="relative z-10 flex items-center justify-between pt-4 border-t border-neutral-900">
                <div>
                  <h4 className="font-rubik font-bold text-lg md:text-xl text-white tracking-[0.2em] group-hover:text-red-500 transition-colors uppercase">
                    {playlist.title}
                  </h4>
                  <p className="text-[10px] text-neutral-400 tracking-widest uppercase mt-0.5">
                    ABRIR PLAYLIST
                  </p>
                </div>
                <div className="w-12 h-12 rounded-full bg-red-600 text-white flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-red-500 transition-all">
                  <Play className="w-5 h-5 fill-white ml-0.5" />
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
};
