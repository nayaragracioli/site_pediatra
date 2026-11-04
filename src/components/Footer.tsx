import {
  ADDRESS_LINES,
  CRM,
  DOCTOR_NAME,
  DOCTOR_ROLE,
  MAP_URL,
  PHONE_DISPLAY,
  PHONE_TEL,
} from "../data/site";
import { SECTIONS } from "../data/sections";
import ScheduleLink, { WhatsAppIcon } from "./ScheduleLink";
import SocialLinks from "./SocialLinks";
import { useGoToSection } from "./useGoToSection";

export default function Footer() {
  const goToSection = useGoToSection();

  return (
    <footer className="mt-16 border-t border-primary/15 bg-band">
      <div className="container-max grid gap-10 py-12 md:grid-cols-3">
        <div className="space-y-3">
          <p className="font-serif text-xl font-semibold text-primary">{DOCTOR_NAME}</p>
          <p className="text-ink">{DOCTOR_ROLE}</p>
          <p className="font-sans text-sm text-ink">{CRM}</p>
          <SocialLinks />
        </div>
        <div>
          <p className="mb-3 font-serif text-lg font-semibold text-primary">Navegação</p>
          <ul className="space-y-2 text-ink">
            {SECTIONS.map((item) => (
              <li key={item.id}>
                <button type="button" onClick={() => goToSection(item.id)} className="hover:underline">
                  {item.label}
                </button>
              </li>
            ))}
            <li>
              <button type="button" onClick={() => goToSection("livros")} className="hover:underline">
                Livros
              </button>
            </li>
          </ul>
        </div>
        <div className="space-y-3 text-ink">
          <p className="font-serif text-lg font-semibold text-primary">Atendimento</p>
          <p>
            {ADDRESS_LINES.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </p>
          <a href={MAP_URL} target="_blank" rel="noopener noreferrer" className="inline-block underline">
            Ver no mapa
          </a>
          <p>
            <a href={PHONE_TEL} className="hover:underline">
              {PHONE_DISPLAY}
            </a>
          </p>
          <ScheduleLink className="btn-primary">
            <WhatsAppIcon />
            Agendar consulta
          </ScheduleLink>
        </div>
      </div>
      <div className="border-t border-primary/10 py-6 text-center font-sans text-sm text-ink/80">
        © {new Date().getFullYear()} {DOCTOR_NAME}. {CRM}. Curitiba — PR.
      </div>
    </footer>
  );
}
