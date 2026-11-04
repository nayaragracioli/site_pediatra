import { MapPin } from "lucide-react";
import BackButton from "../components/BackButton";
import ScheduleLink, { WhatsAppIcon } from "../components/ScheduleLink";
import SocialLinks from "../components/SocialLinks";
import { ADDRESS_LINES, MAP_URL, PHONE_DISPLAY, PHONE_TEL } from "../data/site";

export default function Atendimentos() {
  return (
    <main className="container-max py-12 md:py-16">
      <BackButton />
      <h1 className="mt-6 font-serif text-4xl font-semibold text-primary md:text-5xl">Atendimentos e contato</h1>

      <div className="mt-10 grid items-start gap-10 lg:grid-cols-2">
        <div className="space-y-8 text-lg leading-relaxed">
          <section>
            <h2 className="font-serif text-2xl font-semibold">Atendimento presencial</h2>
            <p className="mt-3">
              {ADDRESS_LINES.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </p>
            <a href={MAP_URL} target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex items-center gap-2 underline">
              <MapPin size={18} aria-hidden="true" />
              Ver no mapa
            </a>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold">Teleatendimento</h2>
            <p className="mt-3">Atendimento para todas as regiões do Brasil</p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold">Agendamento</h2>
            <p className="mt-3">
              Telefone e WhatsApp{" "}
              <a href={PHONE_TEL} className="underline">
                {PHONE_DISPLAY}
              </a>
            </p>
            <ScheduleLink className="btn-primary mt-4">
              <WhatsAppIcon />
              Agendar pelo WhatsApp
            </ScheduleLink>
            <SocialLinks className="mt-6" />
          </section>
        </div>

        <a
          href={MAP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="panel-wash flex min-h-72 flex-col items-center justify-center gap-4 rounded-[2rem] p-8 text-center text-white shadow-soft"
        >
          <MapPin size={42} aria-hidden="true" className="text-warm" />
          <span className="font-serif text-2xl">Água Verde, Curitiba</span>
          <span className="max-w-sm break-all font-sans text-sm underline">{MAP_URL}</span>
        </a>
      </div>
    </main>
  );
}
