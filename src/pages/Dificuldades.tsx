import { NavLink, useParams } from "react-router-dom";
import { getTopic, topics } from "../data/dificuldades";

export default function Dificuldades() {
  const { topico } = useParams();
  const selected = getTopic(topico);

  return (
    <main>
      <section className="container-max grid items-center gap-10 py-12 md:py-16 lg:grid-cols-[1.15fr_0.7fr]">
        <div className="space-y-5 text-primary">
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
        </div>
        <div
          aria-hidden="true"
          className="mx-auto hidden aspect-square w-full max-w-sm rounded-[2.5rem] bg-gradient-to-br from-[#e7a3bc] via-[#d77696] to-[#c45d82] lg:block"
        />
      </section>

      <section className="container-max grid items-start gap-6 pb-8 lg:grid-cols-[minmax(16rem,22rem)_1fr] lg:pb-16">
        <div role="tablist" aria-label="Tópicos sobre dificuldades alimentares" className="flex flex-col gap-3">
          {topics.map((topic) => {
            const active = selected.id === topic.id;
            return (
              <NavLink
                key={topic.id}
                to={`/dificuldades-alimentares/${topic.id}`}
                role="tab"
                aria-selected={active}
                className={`rounded-full px-5 py-4 text-center font-serif text-lg leading-snug text-white transition ${
                  active ? "bg-[#b84b74] shadow-soft" : "bg-pink hover:bg-[#c45d82]"
                }`}
              >
                {topic.label}
              </NavLink>
            );
          })}
        </div>

        <article
          role="tabpanel"
          aria-label={selected.title}
          className="rounded-[2rem] bg-panel p-7 text-white shadow-soft md:p-10"
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
