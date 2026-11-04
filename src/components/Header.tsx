import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { CRM, DOCTOR_NAME, DOCTOR_ROLE, NAV } from "../data/site";
import ScheduleLink from "./ScheduleLink";

const linkClass = ({ isActive }: { isActive: boolean }) =>
  `whitespace-nowrap transition-colors hover:opacity-70 ${isActive ? "font-semibold underline decoration-2 underline-offset-4" : ""}`;

export default function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <header className="sticky top-0 z-50 border-b-[3px] border-line bg-background/95 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-[1440px] flex-wrap items-center gap-x-3 gap-y-3 px-4 py-3 md:px-5 lg:flex-nowrap xl:gap-x-5 xl:px-8">
        <NavLink to="/" className="w-full shrink-0 leading-tight text-primary lg:w-auto" end>
          <span className="block whitespace-nowrap font-serif text-lg font-semibold tracking-tight lg:text-base xl:text-lg">
            {DOCTOR_NAME}
          </span>
          <span className="block whitespace-nowrap font-serif text-sm lg:text-[13px] xl:text-sm">{DOCTOR_ROLE}</span>
          <span className="block whitespace-nowrap font-sans text-[11px] tracking-wide lg:text-[10px] xl:text-[11px]">{CRM}</span>
        </NavLink>

        <nav
          className="ml-auto hidden items-center gap-x-2.5 whitespace-nowrap text-[13px] text-primary lg:flex xl:gap-x-4 xl:text-[14.5px]"
          aria-label="Principal"
        >
          {NAV.map((item) => (
            <NavLink key={item.to} to={item.to} end={item.end} className={linkClass}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="ml-auto flex shrink-0 items-center gap-2 lg:ml-0">
          <ScheduleLink className="btn-primary whitespace-nowrap px-3.5 py-2 text-[13px] xl:px-4 xl:py-2.5 xl:text-sm">
            Agendar consulta
          </ScheduleLink>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-primary/30 text-primary lg:hidden"
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
        <nav id="menu-mobile" className="border-t border-primary/10 lg:hidden" aria-label="Principal">
          <div className="container-max flex flex-col gap-1 py-3 text-primary">
            {NAV.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                className="rounded-xl px-3 py-3 hover:bg-primary/5"
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
