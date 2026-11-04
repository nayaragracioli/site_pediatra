import { Star } from "lucide-react";
import { formatReviewMonth, googleSummary, reviews } from "../data/reviews";

function Stars({ value, size = 16 }: { value: number; size?: number }) {
  return (
    <span className="inline-flex gap-0.5" aria-hidden="true">
      {[0, 1, 2, 3, 4].map((index) => {
        const fraction = Math.max(0, Math.min(1, value - index));
        return (
          <span key={index} className="relative inline-block" style={{ width: size, height: size }}>
            <Star className="text-primary/20" size={size} />
            <span className="absolute inset-y-0 left-0 overflow-hidden" style={{ width: `${fraction * 100}%` }}>
              <Star className="fill-warm text-warm" size={size} />
            </span>
          </span>
        );
      })}
    </span>
  );
}

function initials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");
}

export default function FamilyReviews() {
  const ratingLabel = googleSummary.rating.toLocaleString("pt-BR", {
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  });

  return (
    <div>
      <p className="flex flex-wrap items-center gap-x-3 gap-y-2 text-lg text-ink">
        <Stars value={googleSummary.rating} size={18} />
        <span>
          <span className="font-semibold text-primary">{ratingLabel} de 5</span> no Google · {googleSummary.count} avaliações
        </span>
      </p>
      <ul className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {reviews.map((review) => (
          <li key={review.author} className="flex h-full flex-col rounded-[1.5rem] bg-white p-6 shadow-soft">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-mint font-sans text-sm font-semibold text-primary-deep">
                {initials(review.author)}
              </span>
              <div className="min-w-0">
                <p className="font-semibold text-primary">{review.author}</p>
                <p className="text-sm text-ink/80">{formatReviewMonth(review.date)}</p>
              </div>
            </div>
            <div className="mt-4">
              <Stars value={review.rating} />
              <span className="sr-only">{review.rating} de 5</span>
            </div>
            <blockquote className="mt-3 flex-1 text-lg leading-relaxed text-ink">“{review.text}”</blockquote>
            <p className="mt-4 font-sans text-xs font-semibold uppercase tracking-wider text-primary">Google</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
