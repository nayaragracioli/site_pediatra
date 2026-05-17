import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <nav className="bg-surface/90 backdrop-blur-md border-b border-outline-variant/20 sticky top-0 z-50 shadow-soft">
      <div className="container-max h-20 flex items-center justify-between">
        <Link to="/" className="font-serif text-xl font-bold text-primary">
          Dr. Cícero Alaor Kluppel
        </Link>
        <div className="hidden md:flex gap-8 items-center font-serif text-lg text-on-surface-variant">
          <Link to="/" className="text-primary hover:opacity-80 transition-all">Home</Link>
          <a href="/#sobre" className="hover:text-primary transition-colors">Sobre</a>
          <a href="/#especialidades" className="hover:text-primary transition-colors">Especialidades</a>
          <Link to="/blog" className="hover:text-primary transition-colors">Blog</Link>
          <a href="/#contato" className="hover:text-primary transition-colors">Contato</a>
        </div>
        <button className="bg-primary-container text-on-primary px-6 py-3 rounded-xl font-medium hover:opacity-90 transition-all shadow-lg active:scale-95 font-sans text-sm tracking-wide">
          Agendar Consulta
        </button>
      </div>
    </nav>
  );
}
