export const googleSummary = {
  rating: 4.8,
  count: 5,
};

export type Review = {
  author: string;
  rating: number;
  /** First day of the review month is enough; the site shows month and year. */
  date: string;
  text: string;
};

export const reviews: Review[] = [
  {
    author: "Vanessa Kirchner",
    rating: 5,
    date: "2026-10-22",
    text: "Excelente médico!! Muito atencioso e especialista no que faz!!",
  },
  {
    author: "Isabella Machado",
    rating: 5,
    date: "2026-10-01",
    text: "Dr. Cícero sempre muito atencioso e tirando todas as nossas dúvidas. Ele é ótimo!",
  },
  {
    author: "Amanda Navarro",
    rating: 5,
    date: "2022-12-15",
    text: "Excelente pediatra , atencioso e muito profissional, super indico!!!",
  },
];

export function formatReviewMonth(iso: string) {
  const [year, month] = iso.split("-").map(Number);
  return new Date(year, month - 1, 1).toLocaleDateString("pt-BR", {
    month: "long",
    year: "numeric",
  });
}
