import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import BackButton from "../components/BackButton";
import ScheduleLink, { WhatsAppIcon } from "../components/ScheduleLink";
import { getTopic, topics } from "../data/dificuldades";

export default function Dificuldades() {
  const { topico } = useParams();
  const [currentId, setCurrentId] = useState(() => getTopic(topico).id);

  useEffect(() => {
    setCurrentId(getTopic(topico).id);
  }, [topico]);

  const selected = getTopic(currentId);
  const panelRef = useRef<HTMLElement>(null);

  function chooseTopic(id: string) {
    setCurrentId(id);
    requestAnimationFrame(() => {
      panelRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
    });
  }

  return (
    <main>
      <section className="container-max py-12 md:py-16">
        <BackButton />
        <div className="mt-6 max-w-3xl space-y-5">
          <h1 className="font-serif text-4xl font-semibold leading-tight md:text-5xl">
            Dificuldades alimentares na infância
          </h1>
          <p className="text-lg leading-relaxed">
            As dificuldades alimentares podem ocorrer em qualquer criança, mas são mais frequentes em crianças com Transtorno do Espectro Autista (TEA).
          </p>
          <p className="text-lg leading-relaxed">
            Por vezes, são minimizadas ou interpretadas como simples caprichos da criança. Entretanto, podem envolver fatores médicos, nutricionais, sensoriais e psicossociais que precisam ser avaliados.
          </p>
          <p className="text-lg leading-relaxed">
            Uma avaliação cuidadosa permite identificar os fatores envolvidos e estabelecer um plano de acompanhamento individualizado, considerando as características da criança e de sua família.
          </p>
          <p className="font-serif text-2xl font-semibold">As Dificuldades Alimentares têm tratamento</p>
          <ScheduleLink className="btn-primary">
            <WhatsAppIcon />
            Agendar consulta
          </ScheduleLink>
        </div>
      </section>

      <section className="container-max grid items-start gap-6 pb-8 lg:grid-cols-[minmax(16rem,22rem)_1fr] lg:pb-16">
        <div role="tablist" aria-label="Tópicos sobre dificuldades alimentares" className="flex flex-col gap-3">
          {topics.map((topic) => {
            const active = selected.id === topic.id;
            return (
              <button
                key={topic.id}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => chooseTopic(topic.id)}
                className={`rounded-full px-5 py-4 text-center font-serif text-lg leading-snug transition ${
                  active ? "bg-primary-deep text-white shadow-soft" : "bg-mint text-ink hover:bg-mint/80"
                }`}
              >
                {topic.label}
              </button>
            );
          })}
        </div>

        <article
          ref={panelRef}
          id="topico"
          role="tabpanel"
          aria-label={selected.title}
          className="scroll-mt-28 rounded-[2rem] bg-panel p-7 text-white shadow-soft md:p-10"
        >
          <h2 className="font-serif text-2xl font-semibold leading-snug md:text-3xl">{selected.title}</h2>
          {selected.intro && <p className="mt-5 text-lg leading-relaxed">{selected.intro}</p>}
          {selected.bullets && (
            <ul className="mt-4 list-disc space-y-2 pl-5 text-lg leading-relaxed">
              {selected.bullets.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          )}
          <div className="mt-5 space-y-4 text-lg leading-relaxed">
            {selected.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          {selected.closing && <p className="mt-5 text-lg leading-relaxed">{selected.closing}</p>}
        </article>
      </section>
    </main>
  );
}
