import { useLocation, useNavigate } from "react-router-dom";
import { scrollToSection } from "../data/sections";

export function useGoToSection() {
  const navigate = useNavigate();
  const location = useLocation();

  return (id: string) => {
    if (location.pathname === "/") {
      scrollToSection(id);
      return;
    }
    navigate("/", { state: { scrollTo: id } });
  };
}
