import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { posts } from "../data/posts";
import { formatDate, publicUrl } from "../data/site";

const temas = ["Todos", ...Array.from(new Set(posts.map((post) => post.tema)))];

export default function Blog() {
  const [query, setQuery] = useState("");
  const [tema, setTema] = useState("Todos");

  const filtered = useMemo(() => {
    const needle = query.trim().toLocaleLowerCase("pt-BR");
    return posts.filter((post) => {
      const matchesTema = tema === "Todos" || post.tema === tema;
      if (!matchesTema) return false;
      if (!needle) return true;
      const haystack = `${post.title} ${post.excerpt} ${post.tema}`.toLocaleLowerCase("pt-BR");
      return haystack.includes(needle);
    });
  }, [query, tema]);

  return (
    <main className="container-max py-12 md:py-16">
      <header className="max-w-3xl">
        <h1 className="font-serif text-4xl font-semibold text-primary md:text-5xl">Blog da Criança</h1>
        <p className="mt-4 text-lg leading-relaxed text-ink">
          Textos do Dr. Cícero Alaor Kluppel, publicados originalmente em cicerokluppel.com.
        </p>
      </header>

      <div className="mt-8 max-w-2xl">
        <label htmlFor="busca" className="sr-only">
          Buscar nos textos
        </label>
        <input
          id="busca"
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Buscar por título ou trecho"
          className="w-full rounded-full border border-primary/25 bg-white px-5 py-3 text-ink outline-none focus:border-line"
        />
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        {temas.map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => setTema(item)}
            className={`rounded-full px-4 py-2 font-sans text-sm ${
              tema === item ? "bg-primary text-white" : "bg-white text-primary ring-1 ring-primary/20"
            }`}
            aria-pressed={tema === item}
          >
            {item}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="mt-12 text-lg text-primary">Nenhum texto encontrado.</p>
      ) : (
        <div className="mt-10 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {filtered.map((post) => (
            <article key={post.slug} className="flex flex-col overflow-hidden rounded-[1.75rem] bg-white shadow-soft">
              {post.image && (
                <Link to={`/blog/${post.slug}`} className="block aspect-square overflow-hidden bg-band">
                  <img
                    src={publicUrl(post.image)}
                    alt=""
                    className="h-full w-full object-cover"
                  />
                </Link>
              )}
              <div className="flex flex-1 flex-col p-6">
                <p className="font-sans text-xs uppercase tracking-wider text-primary/70">
                  {post.tema} · {formatDate(post.date)}
                </p>
                <h2 className="mt-2 font-serif text-2xl leading-snug text-primary">
                  <Link to={`/blog/${post.slug}`} className="hover:underline">
                    {post.title}
                  </Link>
                </h2>
                <p className="mt-3 flex-1 leading-relaxed text-ink">{post.excerpt}</p>
                <Link to={`/blog/${post.slug}`} className="mt-4 font-sans text-sm font-semibold text-primary hover:underline">
                  Ler texto
                </Link>
              </div>
            </article>
          ))}
        </div>
      )}
    </main>
  );
}
