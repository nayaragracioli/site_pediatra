import { capitulo, livros } from "../data/profile";

export default function BookList({
  coverClass = "h-80",
  showSummaries = false,
}: {
  coverClass?: string;
  showSummaries?: boolean;
}) {
  return (
    <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {livros.map((livro) => (
        <article key={livro.title} className="flex flex-col items-center text-center">
          <a href={livro.url} target="_blank" rel="noopener noreferrer" className="group">
            <img
              src={livro.image}
              alt={livro.alt}
              className={`book-shadow mx-auto w-auto max-w-full rounded-sm bg-white object-contain transition group-hover:-translate-y-1 ${coverClass}`}
            />
          </a>
          <h3 className="mt-4 font-serif text-xl leading-snug text-primary">
            <a href={livro.url} target="_blank" rel="noopener noreferrer" className="hover:underline">
              {livro.title}
            </a>
          </h3>
          {showSummaries && (
            <p className="mt-3 text-sm leading-relaxed text-ink">{livro.summary}</p>
          )}
          <a href={livro.url} target="_blank" rel="noopener noreferrer" className="btn-outline mt-4 px-4 py-2 text-xs">
            Comprar na Amazon
          </a>
        </article>
      ))}
      <article className="panel-wash flex min-h-80 items-center justify-center rounded-[2rem] p-8 text-center text-white shadow-soft">
        <h3 className="font-serif text-2xl leading-snug text-white">
          Capítulo:
          <span className="mt-3 block">{capitulo}</span>
        </h3>
      </article>
    </div>
  );
}
