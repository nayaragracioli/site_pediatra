import { Link, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import photo from "../assets/dr-cicero.jpg";
import ScheduleLink from "../components/ScheduleLink";
import { getPost, posts } from "../data/posts";
import { DOCTOR_ALT, DOCTOR_NAME, formatDate, publicUrl } from "../data/site";

export default function Article() {
  const { slug } = useParams();
  const post = slug ? getPost(slug) : undefined;

  if (!post) {
    return (
      <main className="container-max py-16">
        <h1 className="font-serif text-3xl text-primary">Texto não encontrado</h1>
        <Link to="/blog" className="mt-6 inline-block text-primary underline">
          Voltar ao Blog da Criança
        </Link>
      </main>
    );
  }

  const related = posts.filter((item) => item.slug !== post.slug && item.tema === post.tema).slice(0, 3);

  return (
    <main className="container-max py-12">
      <Link to="/blog" className="inline-flex items-center gap-2 font-sans text-sm font-semibold text-primary hover:underline">
        <ArrowLeft size={16} aria-hidden="true" />
        Voltar ao Blog da Criança
      </Link>

      <article className="mx-auto mt-8 max-w-3xl">
        <p className="font-sans text-xs uppercase tracking-wider text-primary/70">
          {post.tema} · {formatDate(post.date)}
        </p>
        <h1 className="mt-3 font-serif text-4xl font-semibold leading-tight text-primary md:text-5xl">{post.title}</h1>
        <div className="mt-6 flex items-center gap-3 text-primary">
          <img src={photo} alt={DOCTOR_ALT} className="h-12 w-12 rounded-full object-cover" />
          <p className="font-serif">{DOCTOR_NAME}</p>
        </div>

        {post.image && (
          <img
            src={publicUrl(post.image)}
            alt=""
            className="mt-8 w-full rounded-[1.75rem] object-cover"
          />
        )}

        <div className="post-body mt-8 text-lg leading-relaxed text-ink" dangerouslySetInnerHTML={{ __html: post.html }} />

        <p className="mt-10 text-sm text-primary/80">
          Publicado originalmente em{" "}
          <a href={post.originalUrl} target="_blank" rel="noopener noreferrer" className="underline">
            cicerokluppel.com
          </a>
          .
        </p>
      </article>

      <aside className="mx-auto mt-12 grid max-w-3xl gap-6 md:grid-cols-[1.4fr_0.8fr]">
        {related.length > 0 && (
          <div>
            <h2 className="font-serif text-2xl text-primary">Outros textos</h2>
            <ul className="mt-4 space-y-3">
              {related.map((item) => (
                <li key={item.slug}>
                  <Link to={`/blog/${item.slug}`} className="text-primary hover:underline">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
        <div className="rounded-[1.75rem] bg-primary p-6 text-white">
          <h2 className="font-serif text-2xl">Agendar consulta</h2>
          <p className="mt-2 leading-relaxed">Consultas presenciais em Curitiba e por teleconsulta.</p>
          <ScheduleLink className="btn-outline mt-5 border-white text-white hover:bg-white/10">
            Agendar consulta
          </ScheduleLink>
        </div>
      </aside>
    </main>
  );
}
