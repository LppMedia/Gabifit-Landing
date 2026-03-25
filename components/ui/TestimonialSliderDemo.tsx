import * as React from "react";
import { TestimonialSlider } from "@/components/ui/testimonial-slider-1";

// 1. Define the review data with GabiFit Cloudinary images
const reviews = [
  {
    id: 1,
    name: "Reto 3 Meses",
    affiliation: "Transformación Real",
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
    affiliation: "Comunidad VIP",
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
    affiliation: "Madre Primeriza",
    quote:
      "Lo que más me gustó fue el apoyo de la tribu. Saber que otras madres pasan por lo mismo te motiva a no rendirte.",
    imageSrc:
      "https://res.cloudinary.com/dmkx2uowd/image/upload/v1774481478/Screenshot_2026-03-25_183046_otbc8e.png",
    thumbnailSrc:
      "https://res.cloudinary.com/dmkx2uowd/image/upload/v1774481478/Screenshot_2026-03-25_183046_otbc8e.png",
  },
];

// 2. Render the component with the data
export default function TestimonialSliderDemo() {
  return (
    <div className="w-full bg-black py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-5xl md:text-7xl font-heading mb-12 text-brand-neon">RESULTADOS REALES</h2>
        <div className="brutalist-border brutalist-shadow-neon bg-black">
          <TestimonialSlider reviews={reviews} className="bg-transparent" />
        </div>
      </div>
    </div>
  );
}
