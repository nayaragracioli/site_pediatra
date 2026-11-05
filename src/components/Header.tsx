import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { CRM, DOCTOR_NAME, DOCTOR_ROLE } from "../data/site";
import { SECTIONS } from "../data/sections";
import ScheduleLink from "./ScheduleLink";
import SocialLinks from "./SocialLinks";
import { useGoToSection } from "./useGoToSection";

function MenuLabel({ children }: { children: string }) {
  return (
    <span className="relative inline-block">
      {children}
      <span
        aria-hidden="true"
        className="nav-underline"
      />
    </span>
  );
}

function Brand({ onClick, compact = false }: { onClick: () => void; compact?: boolean }) {
  return (
    <button type="button" onClick={onClick} className="min-w-0 text-left leading-tight text-primary">
      <span className={`block truncate font-serif font-semibold tracking-tight ${compact ? "text-[15px]" : "text-sm xl:text-base"}`}>
        {DOCTOR_NAME}
      </span>
      <span className={`block truncate font-serif ${compact ? "text-xs" : "text-[12px] xl:text-[13px]"}`}>{DOCTOR_ROLE}</span>
      <span className={`block truncate font-sans tracking-wide ${compact ? "text-[10px]" : "text-[10px] xl:text-[11px]"}`}>{CRM}</span>
    </button>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const goToSection = useGoToSection();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  function visit(id: string) {
    setOpen(false);
    goToSection(id);
  }

  return (
    <header className="sticky top-0 z-50 border-b-[3px] border-line bg-background/95 backdrop-blur-md">
      <div className="flex items-center justify-between gap-3 px-4 py-3.5 lg:hidden">
        <Brand onClick={() => visit("inicio")} compact />
        <div className="flex shrink-0 items-center gap-2">
          <ScheduleLink className="btn-primary whitespace-nowrap px-3 py-2 text-xs">Agendar consulta</ScheduleLink>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-primary/30 text-primary"
            aria-expanded={open}
            aria-controls="menu-mobile"
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">{open ? "Fechar menu" : "Abrir menu"}</span>
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      <div className="mx-auto hidden w-full max-w-[1500px] grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-center gap-x-3 px-4 py-4 lg:grid xl:gap-x-6 xl:px-8">
        <div className="justify-self-start">
          <Brand onClick={() => visit("inicio")} />
        </div>
        <nav className="flex items-center justify-center gap-x-2.5 whitespace-nowrap text-[13px] text-primary xl:gap-x-4 xl:text-[15px]" aria-label="Principal">
          {SECTIONS.map((item) => (
            <button key={item.id} type="button" onClick={() => visit(item.id)} className="group whitespace-nowrap text-primary">
              <MenuLabel>{item.label}</MenuLabel>
            </button>
          ))}
        </nav>
        <div className="justify-self-end">
          <ScheduleLink className="btn-primary whitespace-nowrap px-3 py-2 text-xs xl:px-4 xl:py-2.5 xl:text-sm">
            Agendar consulta
          </ScheduleLink>
        </div>
      </div>

      {open && (
        <nav id="menu-mobile" className="border-t border-primary/10 lg:hidden" aria-label="Principal">
          <div className="container-max flex flex-col gap-1 py-3 text-primary">
            {SECTIONS.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => visit(item.id)}
                className="group rounded-xl px-3 py-3 text-left text-primary"
              >
                <MenuLabel>{item.label}</MenuLabel>
              </button>
            ))}
            <SocialLinks className="px-3 pt-2" />
          </div>
        </nav>
      )}
    </header>
  );
}
