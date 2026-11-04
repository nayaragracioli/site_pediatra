export const DOCTOR_NAME = "Dr. Cícero Alaor Kluppel";
export const DOCTOR_ROLE = "Médico Pediatra";
export const CRM = "CRM-PR 11479 RQE 3479";
export const DOCTOR_ALT = "Dr. Cícero Alaor Kluppel, médico pediatra";

export const WHATSAPP_URL = "https://wa.me/5541984426161";
export const PHONE_DISPLAY = "(41) 98442-6161";
export const PHONE_TEL = "tel:+5541984426161";

export const MAP_URL = "https://maps.app.goo.gl/9HHo5hGsgQ28VfFj7";
export const LATTES_URL = "http://lattes.cnpq.br/7750396197367024";

export const ADDRESS_LINES = [
  "Av. Iguaçu, 2820 sala 803",
  "Água Verde, Curitiba-PR",
  "CEP 80240-031",
];

export function publicUrl(path: string) {
  const base = import.meta.env.BASE_URL || "/";
  return `${base}${path.replace(/^\//, "")}`;
}

export function formatDate(iso: string) {
  const [year, month, day] = iso.split("-").map(Number);
  return new Date(year, month - 1, day).toLocaleDateString("pt-BR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
