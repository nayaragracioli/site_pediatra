import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import photo from "../assets/dr-cicero.jpg";
import ScheduleLink from "../components/ScheduleLink";
import { DOCTOR_ALT } from "../data/site";

export default function Home() {
  return (
    <main>
      <section className="container-max grid items-center gap-10 py-12 md:py-16 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 lg:py-20">
        <div className="space-y-6 text-primary">
          <h1 className="font-serif text-4xl font-semibold leading-tight md:text-5xl">
            Pediatria baseada em evidências e atendimento de crianças com dificuldades alimentares
          </h1>
          <p className="text-lg leading-relaxed md:text-xl">
            Professor de Pediatria da UFPR e coordenador do Ambulatório de Dificuldades Alimentares do Hospital de Clínicas.
          </p>
          <p className="text-lg leading-relaxed">
            Avaliação de crianças com seletividade alimentar, recusa alimentar e dificuldades no ganho de peso inclusive de crianças com Transtorno do Espectro Autista (TEA).
          </p>
          <p className="text-lg leading-relaxed">Consultas de puericultura e pediatria geral.</p>
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
          className="mx-auto w-full max-w-md rounded-[2.5rem] object-cover shadow-soft lg:max-w-none"
        />
      </section>
    </main>
  );
}
