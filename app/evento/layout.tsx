import type { Metadata } from "next";
import "./styles.css";

export const metadata: Metadata = {
  title: "Mommy Garden Brunch — GabiFit",
  description:
    "Un espacio íntimo diseñado para que mamá vuelva a sí misma. Bienestar, conexión y comunidad. Cupos muy limitados.",
};

export default function MommyGardenBrunchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
