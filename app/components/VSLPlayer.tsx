"use client";

import { useRef, useState } from "react";

export default function VSLPlayer({ src }: { src: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);

  function unmute() {
    if (!videoRef.current) return;
    videoRef.current.muted = false;
    videoRef.current.play();
    setMuted(false);
  }

  return (
    <div className="relative w-full bg-black">
      <video
        ref={videoRef}
        autoPlay
        muted
        playsInline
        controls
        preload="auto"
        className="w-full h-auto block"
      >
        <source src={src} type="video/mp4" />
      </video>

      {muted && (
        <button
          onClick={unmute}
          className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 cursor-pointer group"
          aria-label="Activar audio"
        >
          <div className="bg-brand-neon text-black font-black text-xl md:text-2xl px-8 py-4 border-4 border-black shadow-[6px_6px_0px_#000] group-hover:translate-y-[-2px] transition-transform">
            🔊 CLICK PARA ACTIVAR AUDIO
          </div>
        </button>
      )}
    </div>
  );
}
