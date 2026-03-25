import React from "react";
import { TestimonialSlider } from "@/components/ui/testimonial-slider-1";

// Review data with the provided transformation images
const reviews = [
  {
    id: 1,
    name: "Reto 3 Meses",
    affiliation: "TRANSFORMACIÓN REAL",
    quote:
      "Recuperar mi seguridad después del embarazo fue el mejor regalo. No solo cambió mi cuerpo, cambió mi energía diaria para estar con mis hijos.",
    imageSrc:
      "https://res.cloudinary.com/dmkx2uowd/image/upload/v1774481478/Screenshot_2026-03-25_183057_fbabox.png",
    thumbnailSrc:
      "https://res.cloudinary.com/dmkx2uowd/image/upload/v1774481478/Screenshot_2026-03-25_183057_fbabox.png",
  },
  {
    id: 2,
    name: "Resultados GabiFit",
    affiliation: "COMUNIDAD VIP",
    quote:
      "El hackeo metabólico realmente funciona. Dejé de sentirme cansada todo el día y empecé a ver resultados en las primeras 4 semanas.",
    imageSrc:
      "https://res.cloudinary.com/dmkx2uowd/image/upload/v1774481478/Screenshot_2026-03-25_183035_aoqru8.png",
    thumbnailSrc:
      "https://res.cloudinary.com/dmkx2uowd/image/upload/v1774481478/Screenshot_2026-03-25_183035_aoqru8.png",
  },
  {
    id: 3,
    name: "Reto 30 Días",
    affiliation: "MADRE PRIMERIZA",
    quote:
      "Lo que más me gustó fue el apoyo de la tribu. Saber que otras madres pasan por lo mismo te motiva a no rendirte.",
    imageSrc:
      "https://res.cloudinary.com/dmkx2uowd/image/upload/v1774481478/Screenshot_2026-03-25_183046_otbc8e.png",
    thumbnailSrc:
      "https://res.cloudinary.com/dmkx2uowd/image/upload/v1774481478/Screenshot_2026-03-25_183046_otbc8e.png",
  },
];

export default function App() {
  return (
    <div className="bg-brand-black text-brand-white font-sans uppercase selection:bg-brand-neon selection:text-brand-black min-h-screen">
      {/* Marquee Header */}
      <div className="bg-brand-neon text-brand-black py-4 border-b-4 border-brand-white font-bold text-lg md:text-2xl overflow-hidden">
        <div className="animate-marquee flex gap-10 whitespace-nowrap">
          {Array(8).fill("OFERTA DE LANZAMIENTO: ACCEDE POR SOLO $97 USD • ").map((text, i) => (
            <span key={i}>{text}</span>
          ))}
        </div>
      </div>

      <header className="bg-brand-black">
        <nav className="p-6 flex justify-center">
          <img
            alt="Gabifit Logo"
            className="h-12 md:h-16 drop-shadow-[0_0_15px_rgba(207,241,84,0.3)] hover:scale-105 transition-transform cursor-pointer"
            src="./asset/GABIFIT LOGO VARIANTES_GABIFIT copy.png"
          />
        </nav>
        <div className="max-w-6xl mx-auto px-4 pb-24">
          <div className="brutalist-border brutalist-shadow-neon mb-12 bg-black overflow-hidden relative">
            <div className="vsl-container aspect-video w-full">
              <iframe
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=0&rel=0&showinfo=0"
              ></iframe>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-4xl md:text-7xl mb-12 leading-none font-heading tracking-tighter uppercase">
              RECUPERA TU FIGURA POST-PARTO. <br />
              <span className="text-brand-neon">HACKEO METABÓLICO PARA MADRES REALES.</span>
            </h1>
            <div className="flex flex-col items-center gap-6">
              <a
                href="#pricing"
                className="inline-block bg-brand-neon text-brand-black px-12 py-8 text-3xl md:text-5xl font-heading brutalist-shadow-white hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all w-full max-w-2xl text-center"
              >
                UNIRME A LA COMUNIDAD
              </a>
              <p className="font-mono text-sm md:text-xl opacity-70">
                CIENCIA APLICADA PARA VOLVER A TU MEJOR VERSIÓN DESPUÉS DEL EMBARAZO
              </p>
            </div>
          </div>
        </div>
      </header>

      <div className="divider-line h-[12px] bg-[repeating-linear-gradient(45deg,#cff154,#cff154_10px,#000_10px,#000_20px)]"></div>

      <section className="px-4 md:px-12 py-24 bg-brand-white text-brand-black grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div className="order-2 lg:order-1 grayscale brutalist-border p-2">
          <img alt="Madre Real" className="w-full h-auto" src="./asset/madre_cansada.png" />
        </div>
        <div className="flex flex-col justify-center">
          <h2 className="text-5xl md:text-8xl mb-12 font-heading tracking-tighter uppercase"> EL DESAFÍO POST-EMBARAZO</h2>
          <div className="space-y-12">
            {[
              { title: "METABOLISMO LENTO", desc: "TU CUERPO HA CAMBIADO Y LAS DIETAS DE ANTES YA NO FUNCIONAN. NECESITAS UN REINICIO CELULAR." },
              { title: "CRISIS DE IDENTIDAD", desc: "SENTIR QUE TU CUERPO YA NO TE PERTENECE. RECUPERAR TU SEGURIDAD ES PRIORIDAD NACIONAL." },
              { title: "TIEMPO PARA EL BEBÉ", desc: "HARTA DE RUTINAS LARGAS. BUSCAS RESULTADOS REALES SIN QUITARLE SEGUNDOS A TU HIJO." }
            ].map((item, i) => (
              <div key={i} className="border-b-4 border-brand-black pb-4">
                <h3 className="text-3xl mb-2 font-heading">{item.title}</h3>
                <p className="normal-case text-lg font-mono">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEW Testimonial Slider Section */}
      <section className="py-32 px-4 md:px-12 bg-black">
        <div className="mb-16 border-l-8 border-brand-neon pl-8">
          <h2 className="text-6xl md:text-9xl mb-4 font-heading tracking-tighter italic uppercase text-white">HISTORIAS DE</h2>
          <h2 className="text-6xl md:text-9xl text-brand-neon italic font-heading tracking-tighter uppercase">MADRES REALES</h2>
        </div>
        
        <div className="max-w-7xl mx-auto">
          <div className="brutalist-border brutalist-shadow-neon bg-black">
             <TestimonialSlider reviews={reviews} className="bg-transparent" />
          </div>
        </div>
      </section>

      <footer className="bg-brand-black p-12 md:p-24 border-t-8 border-brand-white">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
          <div>
            <img
              alt="Logo"
              className="h-16 drop-shadow-[0_0_10px_rgba(207,241,84,0.2)] mb-8"
              src="./asset/GABIFIT LOGO VARIANTES_GABIFIT copy 2.png"
            />
            <p className="text-xs opacity-50 max-w-md normal-case leading-relaxed font-mono">
              © 2024 GABIFIT RD. SISTEMA DE APOYO PARA MADRES POST-PARTO. LOS RESULTADOS VARÍAN SEGÚN CADA FISIOLOGÍA. CONSULTA SIEMPRE CON TU OBSTETRA.
            </p>
          </div>
          <div className="flex gap-8 text-xl font-heading">
            <a className="hover:text-brand-neon" href="#">PRIVACIDAD</a>
            <a className="hover:text-brand-purple" href="#">TÉRMINOS</a>
            <a className="hover:text-brand-neon" href="#">CONTACTO</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
