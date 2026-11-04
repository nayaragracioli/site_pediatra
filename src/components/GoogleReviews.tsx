import { useEffect, useRef } from "react";

const SCRIPT_SRC = "https://cdn.trustindex.io/loader.js?7f9620a85bbb0928ae26d2d6ef8";

export default function GoogleReviews() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const script = document.createElement("script");
    script.src = SCRIPT_SRC;
    script.async = true;
    script.defer = true;
    container.appendChild(script);

    return () => {
      script.remove();
      container.replaceChildren();
      document.querySelectorAll("script[src*='cdn.trustindex.io']").forEach((node) => node.remove());
      document.querySelectorAll(".ti-widget, [class*='trustindex'], iframe[src*='trustindex']").forEach((node) => node.remove());
    };
  }, []);

  return <div ref={containerRef} className="min-h-24 w-full overflow-x-auto" />;
}
