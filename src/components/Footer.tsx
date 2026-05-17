import { 
  Instagram, 
  Linkedin, 
  Facebook,
  Send
} from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-surface-container-highest/50 py-20 mt-20 rounded-t-[64px] border-t border-outline-variant/20">
      <div className="container-max grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        <div className="space-y-6">
          <h3 className="font-serif text-xl font-bold text-primary">Dr. Cícero Alaor Kluppel</h3>
          <p className="text-sm text-on-surface-variant leading-relaxed font-serif opacity-80">
            Referência em pediatria integrativa e homeopatia, oferecendo um cuidado humano e individualizado em Curitiba desde 1990.
          </p>
          <div className="flex gap-4">
            {[Instagram, Linkedin, Facebook].map((Icon, i) => (
              <a key={i} href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-primary shadow-sm hover:bg-primary hover:text-white transition-all">
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-bold text-primary mb-6 font-serif">Navegação</h4>
          <ul className="space-y-4 text-sm text-on-surface-variant font-serif opacity-80">
            <li><a href="/" className="hover:text-primary transition-colors">Home</a></li>
            <li><a href="/#sobre" className="hover:text-primary transition-colors">Sobre o Doutor</a></li>
            <li><a href="/#especialidades" className="hover:text-primary transition-colors">Especialidades</a></li>
            <li><a href="/blog" className="hover:text-primary transition-colors">Blog</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-primary mb-6 font-serif">Informações</h4>
          <ul className="space-y-4 text-sm text-on-surface-variant font-serif opacity-80">
            {['Política de Privacidade', 'Termos de Uso', 'Portal do Paciente', 'Carreiras'].map((item) => (
              <li key={item}><a href="#" className="hover:text-primary transition-colors">{item}</a></li>
            ))}
          </ul>
        </div>
        <div className="space-y-6">
          <h4 className="font-bold text-primary mb-2 font-serif">Newsletter</h4>
          <p className="text-sm text-on-surface-variant font-serif opacity-80">Receba dicas de saúde e bem-estar infantil diretamente no seu e-mail.</p>
          <div className="flex gap-2">
            <input 
              type="email" 
              placeholder="Seu e-mail" 
              className="bg-white border border-outline-variant/30 rounded-xl px-4 py-3 text-sm w-full focus:ring-2 focus:ring-primary/20 outline-none transition-all font-sans"
            />
            <button className="bg-primary text-on-primary p-3 rounded-xl hover:opacity-90 transition-all">
              <Send size={18} />
            </button>
          </div>
        </div>
      </div>
      <div className="container-max border-t border-outline-variant/20 pt-8 text-center text-sm text-on-surface-variant font-serif opacity-60">
        <p>© 2024 Dr. Cícero Alaor Kluppel. CRM 12345 / RQE 6789. All rights reserved.</p>
        <p className="mt-2">Curitiba - PR</p>
      </div>
    </footer>
  );
}
