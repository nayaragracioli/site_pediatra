import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { CRM, DOCTOR_NAME, DOCTOR_ROLE, NAV } from "../data/site";
import ScheduleLink from "./ScheduleLink";

const linkClass = ({ isActive }: { isActive: boolean }) =>
  `transition-colors hover:opacity-70 ${isActive ? "font-semibold underline decoration-2 underline-offset-4" : ""}`;

export default function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  const primary = NAV.slice(0, 4);
  const blog = NAV[4];

  return (
    <header className="sticky top-0 z-50 border-b-[3px] border-line bg-background/95 backdrop-blur-md">
      <div className="container-max flex flex-wrap items-center gap-x-4 gap-y-3 py-3 lg:flex-nowrap lg:gap-8">
        <NavLink to="/" className="w-full leading-tight text-primary lg:w-auto" end>
          <span className="block font-serif text-lg font-semibold tracking-tight md:text-xl">
            {DOCTOR_NAME}
          </span>
          <span className="block font-serif text-sm">{DOCTOR_ROLE}</span>
          <span className="block whitespace-nowrap font-sans text-[11px] tracking-wide md:text-xs">{CRM}</span>
        </NavLink>

        <nav className="ml-auto hidden text-[15px] text-primary lg:block" aria-label="Principal">
          <div className="flex flex-wrap items-center justify-end gap-x-5 gap-y-1">
            {primary.map((item) => (
              <NavLink key={item.to} to={item.to} end={item.end} className={linkClass}>
                {item.label}
              </NavLink>
            ))}
          </div>
          <div className="mt-1 flex justify-end">
            <NavLink to={blog.to} className={linkClass}>
              {blog.label}
            </NavLink>
          </div>
        </nav>

        <div className="ml-auto flex shrink-0 items-center gap-2 lg:ml-0">
          <ScheduleLink className="btn-primary px-4 py-2.5 text-sm sm:px-5">
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
