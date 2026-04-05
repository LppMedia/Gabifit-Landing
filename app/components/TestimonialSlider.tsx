"use client";

import { useState } from "react";

const testimonials = [
  {
    name: "Carla M.",
    location: "Santo Domingo",
    tag: "Mamá de 2 niños",
    quote:
      "En 3 meses me convertí en la versión más fuerte de mi vida. Y soy mamá de 2 niños. Si yo pude, tú también puedes.",
    image:
      "https://res.cloudinary.com/dmkx2uowd/image/upload/v1774481478/Screenshot_2026-03-25_183057_fbabox.png",
  },
  {
    name: "María J.",
    location: "Santiago",
    tag: "8 semanas con Gabi",
    quote:
      "Llevaba 2 años intentando bajar los kilos del parto. En 8 semanas con Gabi logré lo que no había logrado en todo ese tiempo. El programa funciona porque Gabi realmente te entiende.",
    image:
      "https://res.cloudinary.com/dmkx2uowd/image/upload/v1774481478/Screenshot_2026-03-25_183035_aoqru8.png",
  },
  {
    name: "Daniela R.",
    location: "Santo Domingo",
    tag: "Energía recuperada",
    quote:
      "Pensé que nunca iba a recuperar mi energía. Ahora duermo mejor, me siento más ágil y vuelvo a mirarme al espejo con orgullo. Lo que Gabi hace es diferente a todo lo que había probado.",
    image:
      "https://res.cloudinary.com/dmkx2uowd/image/upload/v1774481478/Screenshot_2026-03-25_183046_otbc8e.png",
  },
  {
    name: "Verónica S.",
    location: "New York",
    tag: "Autoestima recuperada",
    quote:
      "Lo mejor no fue bajar de peso — fue recuperar mi autoestima. Gabi no solo te entrena el cuerpo, te entrena la mente. Esta comunidad me cambió la vida.",
    image:
      "https://res.cloudinary.com/dmkx2uowd/image/upload/v1774481478/Screenshot_2026-03-25_183057_fbabox.png",
  },
];

function pad(n: number) {
  return String(n).padStart(2, "0");
}

export default function TestimonialSlider() {
  const [current, setCurrent] = useState(0);
  const total = testimonials.length;
  const go = (i: number) => setCurrent(((i % total) + total) % total);
  const t = testimonials[current];

  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
      {/* Counter + thumbnails */}
      <div className="md:col-span-3 flex flex-col justify-between order-3 md:order-1">
        <span className="text-sm opacity-60 font-mono">
          {pad(current + 1)} / {pad(total)}
        </span>
        <div className="flex flex-row md:flex-col gap-2 mt-4 md:mt-0">
          {testimonials.map((test, i) => {
            if (i === current) return null;
            return (
              <button
                key={i}
                onClick={() => go(i)}
                aria-label={`Ver reseña de ${test.name}`}
                className="overflow-hidden rounded cursor-pointer p-0 border-0 bg-transparent"
                style={{ width: 64, height: 80, opacity: 0.65, flexShrink: 0 }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={test.image}
                  alt={test.name}
                  className="w-full h-full object-cover object-top"
                />
              </button>
            );
          })}
        </div>
      </div>

      {/* Main image */}
      <div className="md:col-span-4 order-1 md:order-2">
        <div className="w-full h-[300px] md:h-[560px] overflow-hidden rounded-xl bg-white/5">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            key={current}
            src={t.image}
            alt={t.name}
            className="w-full h-full object-contain rounded-xl"
          />
        </div>
      </div>

      {/* Text + navigation */}
      <div className="md:col-span-5 flex flex-col justify-between md:pl-8 order-4 md:order-3">
        <div className="pt-2 md:pt-16">
          <p className="text-sm font-mono opacity-60 uppercase">{t.tag}</p>
          <h3 className="text-xl font-heading mt-1 text-brand-neon">
            {t.name} — {t.location}
          </h3>
          <blockquote className="mt-4 text-xl md:text-2xl font-mono normal-case leading-snug italic opacity-90">
            &ldquo;{t.quote}&rdquo;
          </blockquote>
        </div>
        <div className="flex items-center gap-3 mt-8">
          <button
            onClick={() => go(current - 1)}
            aria-label="Anterior"
            className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center hover:bg-white hover:text-black transition-colors cursor-pointer"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>
          <button
            onClick={() => go(current + 1)}
            aria-label="Siguiente"
            className="w-12 h-12 rounded-full bg-brand-neon text-black flex items-center justify-center hover:opacity-90 transition-opacity cursor-pointer"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
