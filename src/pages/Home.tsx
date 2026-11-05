import { Link } from "react-router-dom";
import { ArrowRight, Baby, MapPin, Stethoscope, Utensils, Video } from "lucide-react";
import photo from "../assets/dr-cicero.jpg";
import sobrePhoto from "../assets/dr-cicero-sobre.jpg";
import BookList from "../components/BookList";
import FamilyReviews from "../components/FamilyReviews";
import ScheduleLink, { WhatsAppIcon } from "../components/ScheduleLink";
import SocialLinks from "../components/SocialLinks";
import { topics } from "../data/dificuldades";
import { posts } from "../data/posts";
import { trajetoria } from "../data/profile";
import {
  ADDRESS_LINES,
  CRM,
  DOCTOR_ALT,
  DOCTOR_NAME,
  DOCTOR_ROLE,
  LATTES_URL,
  MAP_URL,
  WHATSAPP_URL,
  PHONE_DISPLAY,
  PHONE_TEL,
  formatDate,
  publicUrl,
} from "../data/site";

const quando = topics.find((topic) => topic.id === "quando-procurar")!;
const autismo = topics.find((topic) => topic.id === "autismo")!;
const recentPosts = posts.slice(0, 3);

const services = [
  {
    title: "Dificuldades alimentares e seletividade",
    text: "Avaliação de crianças com seletividade alimentar, recusa alimentar e dificuldades no ganho de peso.",
    to: "/dificuldades-alimentares",
    icon: Utensils,
  },
  {
    title: "Transtorno do Espectro Autista (TEA)",
    text: autismo.paragraphs[0],
    to: "/dificuldades-alimentares/autismo",
    icon: Stethoscope,
  },
  {
    title: "Puericultura e pediatria geral",
    text: "Consultas de puericultura e pediatria geral.",
    to: "/atendimentos",
    icon: Baby,
  },
  {
    title: "Teleconsulta",
    text: "Consultas presenciais em Curitiba e por teleconsulta. Atendimento para todas as regiões do Brasil.",
    to: "/atendimentos",
    icon: Video,
  },
];

export default function Home() {
  return (
    <main>
      <section id="inicio" className="container-max grid scroll-mt-28 items-center gap-10 py-14 md:py-20 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
        <div className="space-y-6">
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.18em] text-primary-deep">
            {DOCTOR_ROLE} · {CRM}
          </p>
          <h1 className="font-serif text-4xl font-semibold leading-[1.12] md:text-5xl">
            Pediatria baseada em evidências e atendimento de crianças com dificuldades alimentares
          </h1>
          <p className="text-lg leading-relaxed md:text-xl">
            Professor de Pediatria da UFPR e coordenador do Ambulatório de Dificuldades Alimentares do Hospital de Clínicas.
          </p>
          <p className="text-lg font-semibold leading-relaxed">
            Consultas presenciais em Curitiba e por teleconsulta.
          </p>
          <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:flex-wrap">
            <ScheduleLink className="btn-primary">Agendar consulta</ScheduleLink>
            <Link to="/dificuldades-alimentares" className="btn-outline">
              Saiba mais sobre Dificuldades Alimentares
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>
        </div>
        <img
          src={photo}
          alt={DOCTOR_ALT}
          className="mx-auto aspect-[3/4] w-full max-w-md rounded-[2.5rem] object-cover object-top shadow-soft lg:max-w-none"
        />
      </section>

      <section id="sobre" className="scroll-mt-28 bg-band">
        <div className="container-max grid items-center gap-10 py-16 md:py-20 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div className="mx-auto w-full max-w-sm rounded-[2rem] border border-mint/40 bg-white p-3 shadow-soft lg:max-w-none">
            <img
              src={sobrePhoto}
              alt={DOCTOR_ALT}
              className="aspect-[3/4] w-full rounded-[1.5rem] object-cover object-top"
            />
          </div>
          <div>
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.18em] text-primary-deep">Sobre</p>
            <h2 className="mt-3 font-serif text-3xl font-semibold md:text-4xl">{DOCTOR_NAME}</h2>
            <p className="mt-2 text-lg text-primary">
              {DOCTOR_ROLE} · {CRM}
            </p>
            <ul className="mt-6 space-y-3 text-lg leading-relaxed text-ink">
              {trajetoria.map((item) => (
                <li key={item} className="flex gap-3">
                  <span aria-hidden="true" className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-warm" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <a href={LATTES_URL} target="_blank" rel="noopener noreferrer" className="btn-outline">
                Consultar curriculum LATTES
              </a>
            </div>
          </div>
        </div>

        <div id="livros" className="container-max scroll-mt-28 pb-16 md:pb-20">
          <h3 className="font-serif text-3xl font-semibold">Livros e capítulo</h3>
          <BookList coverClass="h-72" showSummaries />
        </div>
      </section>

      <section id="dificuldades" className="container-max scroll-mt-28 py-16 md:py-20">
        <div className="grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
          <div>
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.18em] text-primary-deep">
              Dificuldades alimentares
            </p>
            <h2 className="mt-3 font-serif text-3xl font-semibold leading-tight md:text-4xl">
              Quando a alimentação se torna uma dificuldade
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-ink">
              As dificuldades alimentares podem ocorrer em qualquer criança, mas são mais frequentes em crianças com Transtorno do Espectro Autista (TEA).
            </p>
            <p className="mt-4 text-lg leading-relaxed text-ink">
              Uma avaliação cuidadosa permite identificar os fatores envolvidos e estabelecer um plano de acompanhamento individualizado, considerando as características da criança e de sua família.
            </p>
            <Link to="/dificuldades-alimentares" className="btn-outline mt-8">
              Saiba mais
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>
          <div className="rounded-[2rem] bg-panel p-7 text-white shadow-soft md:p-9">
            <h3 className="font-serif text-2xl font-semibold">{quando.title}</h3>
            <p className="mt-4 text-lg">{quando.intro}</p>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-lg leading-relaxed">
              {quando.bullets?.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="mt-5 text-lg leading-relaxed">{quando.closing}</p>
          </div>
        </div>
      </section>

      <section id="blog" className="scroll-mt-28 bg-band">
        <div className="container-max py-16 md:py-20">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="font-sans text-xs font-semibold uppercase tracking-[0.18em] text-primary-deep">Blog da Criança</p>
              <h2 className="mt-3 font-serif text-3xl font-semibold md:text-4xl">Textos recentes</h2>
            </div>
            <Link to="/blog" className="btn-outline bg-transparent">
              Saiba mais
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {recentPosts.map((post) => (
              <article key={post.slug} className="flex flex-col rounded-[1.75rem] bg-white p-6 shadow-soft">
                {post.image && (
                  <Link to={`/blog/${post.slug}`} className="mb-5 block overflow-hidden rounded-2xl">
                    <img src={publicUrl(post.image)} alt={post.imageAlt ?? ""} className="aspect-[4/3] w-full object-cover" />
                  </Link>
                )}
                <p className="font-sans text-xs uppercase tracking-wider text-primary-deep">
                  {post.tema} · {formatDate(post.date)}
                </p>
                <h3 className="mt-2 font-serif text-2xl leading-snug">
                  <Link to={`/blog/${post.slug}`} className="hover:underline">
                    {post.title}
                  </Link>
                </h3>
                <p className="mt-3 flex-1 leading-relaxed text-ink">{post.excerpt}</p>
                <Link to={`/blog/${post.slug}`} className="mt-5 font-sans text-sm font-semibold text-primary hover:underline">
                  Ler texto
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="avaliacoes-titulo" className="container-max scroll-mt-28 py-16 md:py-20">
        <p className="font-sans text-xs font-semibold uppercase tracking-[0.18em] text-primary-deep">Google</p>
        <h2 id="avaliacoes-titulo" className="mt-3 font-serif text-3xl font-semibold md:text-4xl">
          O que dizem as famílias
        </h2>
        <p className="mt-3 max-w-2xl text-lg text-ink">Avaliações reais de pacientes no Google</p>
        <div className="mt-8">
          <FamilyReviews />
        </div>
        <a href={MAP_URL} target="_blank" rel="noopener noreferrer" className="btn-outline mt-6">
          Ver todas as avaliações no Google
        </a>
      </section>

      <section id="atendimentos" className="scroll-mt-28 bg-band-mint">
        <div className="container-max py-16 md:py-20">
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.18em] text-primary-deep">Atendimento</p>
          <h2 className="mt-3 max-w-2xl font-serif text-3xl font-semibold md:text-4xl">
            Consultas presenciais em Curitiba e por teleconsulta
          </h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {services.map((service) => (
              <Link
                key={service.title}
                to={service.to}
                className="group rounded-[1.75rem] bg-white p-7 shadow-soft transition hover:-translate-y-0.5"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-mint text-primary-deep">
                  <service.icon size={22} aria-hidden="true" />
                </span>
                <h3 className="mt-5 font-serif text-2xl font-semibold">{service.title}</h3>
                <p className="mt-3 leading-relaxed text-ink">{service.text}</p>
                <span className="mt-5 inline-flex items-center gap-2 font-sans text-sm font-semibold text-primary">
                  Saiba mais
                  <ArrowRight size={16} className="transition group-hover:translate-x-0.5" aria-hidden="true" />
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-12 overflow-hidden rounded-[2rem] bg-white shadow-soft lg:grid lg:grid-cols-2">
            <div className="p-7 md:p-10">
              <h3 className="font-serif text-3xl font-semibold">Atendimentos e contato</h3>
              <h4 className="mt-6 font-serif text-2xl">Atendimento presencial</h4>
              <p className="mt-2 text-lg leading-relaxed text-ink">
                {ADDRESS_LINES.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </p>
              <a
                href={MAP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-2 text-primary underline"
              >
                <MapPin size={18} aria-hidden="true" />
                Ver no mapa
              </a>
              <h4 className="mt-6 font-serif text-2xl">Teleatendimento</h4>
              <p className="mt-2 text-lg text-ink">Atendimento para todas as regiões do Brasil</p>
              <p className="mt-6 flex flex-col gap-2 text-lg text-ink">
                <a href={PHONE_TEL} className="text-primary underline">
                  Ligar {PHONE_DISPLAY}
                </a>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="text-primary underline">
                  WhatsApp {PHONE_DISPLAY}
                </a>
              </p>
              <SocialLinks className="mt-5" />
              <div className="mt-6">
                <ScheduleLink className="btn-primary">
                  <WhatsAppIcon />
                  Agendar consulta
                </ScheduleLink>
              </div>
            </div>
            <a
              href={MAP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="panel-wash flex min-h-72 flex-col items-center justify-center gap-4 p-8 text-center text-white"
            >
              <MapPin size={42} aria-hidden="true" className="text-warm" />
              <span className="font-serif text-3xl">Água Verde, Curitiba</span>
              <span className="font-sans text-sm underline">Ver no mapa</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
