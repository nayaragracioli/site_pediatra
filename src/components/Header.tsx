import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { CRM, DOCTOR_NAME, DOCTOR_ROLE } from "../data/site";
import { SECTIONS } from "../data/sections";
import ScheduleLink from "./ScheduleLink";
import SocialLinks from "./SocialLinks";
import { useGoToSection } from "./useGoToSection";

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
      <div className="mx-auto flex w-full max-w-[1500px] flex-wrap items-center gap-x-4 gap-y-3 px-4 py-3 md:px-6 xl:flex-nowrap xl:gap-x-8 xl:px-8">
        <button type="button" onClick={() => visit("inicio")} className="w-full shrink-0 text-left leading-tight text-primary xl:w-auto">
          <span className="block whitespace-nowrap font-serif text-lg font-semibold tracking-tight xl:text-base 2xl:text-lg">
            {DOCTOR_NAME}
          </span>
          <span className="block whitespace-nowrap font-serif text-sm xl:text-[13px]">{DOCTOR_ROLE}</span>
          <span className="block whitespace-nowrap font-sans text-[11px] tracking-wide">{CRM}</span>
        </button>

        <nav className="ml-auto hidden items-center gap-x-6 whitespace-nowrap text-[15px] text-primary xl:flex 2xl:gap-x-8" aria-label="Principal">
          {SECTIONS.map((item) => (
            <button key={item.id} type="button" onClick={() => visit(item.id)} className="whitespace-nowrap hover:opacity-70">
              {item.label}
            </button>
          ))}
        </nav>

        <div className="ml-auto flex shrink-0 items-center gap-3 xl:ml-0">
          <SocialLinks className="hidden 2xl:flex" />
          <ScheduleLink className="btn-primary whitespace-nowrap px-4 py-2.5 text-sm">
            Agendar consulta
          </ScheduleLink>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-primary/30 text-primary xl:hidden"
            aria-expanded={open}
            aria-controls="menu-mobile"
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">{open ? "Fechar menu" : "Abrir menu"}</span>
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <nav id="menu-mobile" className="border-t border-primary/10 xl:hidden" aria-label="Principal">
          <div className="container-max flex flex-col gap-1 py-3 text-primary">
            {SECTIONS.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => visit(item.id)}
                className="rounded-xl px-3 py-3 text-left hover:bg-primary/5"
              >
                {item.label}
              </button>
            ))}
            <SocialLinks className="px-3 pt-2" />
          </div>
        </nav>
      )}
    </header>
  );
}
