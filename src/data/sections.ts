export const SECTIONS = [
  { id: "inicio", label: "Início" },
  { id: "sobre", label: "Sobre" },
  { id: "dificuldades", label: "Dificuldades Alimentares" },
  { id: "atendimentos", label: "Atendimentos e Contatos" },
  { id: "blog", label: "Blog da criança" },
] as const;

export type SectionId = (typeof SECTIONS)[number]["id"];

export function scrollToSection(id: string) {
  if (id === "inicio") {
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}
