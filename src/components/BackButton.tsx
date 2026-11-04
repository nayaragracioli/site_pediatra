import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function BackButton({ fallback = "/" }: { fallback?: string }) {
  const navigate = useNavigate();

  return (
    <button
      type="button"
      onClick={() => {
        const index = (window.history.state as { idx?: number } | null)?.idx ?? 0;
        if (index > 0) navigate(-1);
        else navigate(fallback);
      }}
      className="inline-flex items-center gap-2 font-sans text-sm font-semibold text-primary hover:underline"
    >
      <ArrowLeft size={16} aria-hidden="true" />
      Voltar
    </button>
  );
}
