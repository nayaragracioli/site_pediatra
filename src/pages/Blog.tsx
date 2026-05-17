import { 
  Search, 
  ArrowRight, 
  ChevronLeft, 
  ChevronRight,
  MoveRight
} from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export default function Blog() {
  return (
    <main className="container-max py-12 md:py-20">
      {/* Hero & Search Section */}
      <section className="mb-20 space-y-8 text-center">
        <div className="max-w-3xl mx-auto space-y-4">
          <h1 className="font-serif text-5xl font-bold text-primary">Blog da Criança</h1>
          <p className="text-lg text-secondary font-serif italic">Orientações pediátricas com base em evidência, empatia e o cuidado que seu filho merece.</p>
        </div>
        
        {/* Search Bar */}
        <div className="max-w-2xl mx-auto relative group">
          <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-outline">
            <Search size={20} className="text-on-surface-variant opacity-50" />
          </div>
          <input 
            type="text" 
            className="w-full pl-12 pr-4 py-4 bg-surface-container-low border border-outline-variant/30 rounded-xl focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all font-serif text-on-surface" 
            placeholder="Pesquisar por temas, sintomas ou cuidados..." 
          />
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 pt-4">
          {['Todos', 'Nutrição', 'Sono', 'Desenvolvimento', 'Vacinação'].map((cat, i) => (
            <button 
              key={cat} 
              className={`px-6 py-2 rounded-full font-sans text-xs font-bold uppercase tracking-widest transition-all ${i === 0 ? 'bg-primary text-on-primary shadow-md' : 'bg-surface-container border border-outline-variant/30 text-on-surface-variant hover:bg-surface-variant'}`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        {/* Featured Post */}
        <article className="md:col-span-8 group cursor-pointer">
          <div className="bg-surface-container-low rounded-[32px] overflow-hidden flex flex-col md:flex-row h-full shadow-soft">
            <div className="md:w-1/2 overflow-hidden">
              <img 
                className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700" 
                src="https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&q=80&w=800" 
                alt="Desenvolvimento cognitivo"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="md:w-1/2 p-8 flex flex-col justify-center space-y-4">
              <span className="inline-block px-3 py-1 rounded-full bg-secondary-container text-on-secondary-container font-sans text-[10px] font-bold uppercase tracking-widest w-fit">Destaque</span>
              <p className="font-sans text-[10px] text-on-surface-variant uppercase tracking-[0.2em] opacity-60">12 de Outubro, 2023</p>
              <h2 className="font-serif text-3xl text-on-surface group-hover:text-primary transition-colors leading-tight">A importância do brincar no desenvolvimento cognitivo precoce</h2>
              <p className="font-serif text-on-surface-variant line-clamp-3 opacity-90">Entenda como atividades simples e lúdicas podem fortalecer as conexões neurais e promover autonomia emocional desde os primeiros meses de vida.</p>
              <Link to="/blog/artigo" className="flex items-center gap-2 text-primary font-sans text-xs font-bold uppercase tracking-widest hover:gap-3 transition-all pt-4">
                Ler artigo <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </article>

        {/* Sidebar Card 1 */}
        <article className="md:col-span-4 group cursor-pointer">
          <div className="bg-surface-container p-8 rounded-[32px] h-full flex flex-col shadow-sm border border-outline-variant/20">
            <span className="inline-block px-3 py-1 rounded-full bg-secondary-container text-on-secondary-container font-sans text-[10px] font-bold uppercase tracking-widest w-fit mb-4">Sono</span>
            <p className="font-sans text-[10px] text-on-surface-variant uppercase tracking-[0.2em] opacity-60 mb-2">08 de Outubro, 2023</p>
            <h3 className="font-serif text-2xl text-on-surface group-hover:text-primary transition-colors mb-4">Higiene do sono: Criando a rotina ideal</h3>
            <p className="font-serif text-on-surface-variant flex-grow mb-6 opacity-90">Dicas práticas para acalmar o ambiente e garantir noites mais tranquilas para o bebê e para os pais.</p>
            <Link to="/blog/artigo" className="flex items-center gap-2 text-primary font-sans text-xs font-bold uppercase tracking-widest group-hover:translate-x-1 transition-transform">
              Ler artigo <MoveRight size={16} />
            </Link>
          </div>
        </article>

        {/* Regular Grid Items */}
        {[
          {
            cat: 'Nutrição',
            date: '05 Out, 2023',
            title: 'Introdução Alimentar: Mitos e Verdades',
            desc: 'Quando começar? Devo usar o método BLW? Tire suas dúvidas sobre as primeiras papinhas.',
            img: 'https://images.unsplash.com/photo-1490818387583-1baba5e6382b?auto=format&fit=crop&q=80&w=800'
          },
          {
            cat: 'Saúde Geral',
            date: '01 Out, 2023',
            title: 'Calendário de Vacinação 2024',
            desc: 'Mantenha a saúde do seu filho em dia com as atualizações mais recentes do calendário vacinal.',
            img: 'https://images.unsplash.com/photo-1584362916962-d278060f785b?auto=format&fit=crop&q=80&w=800'
          },
          {
            cat: 'Desenvolvimento',
            date: '28 Set, 2023',
            title: 'A Natureza como Sala de Aula',
            desc: 'Os benefícios do contato com o meio ambiente para a imunidade e criatividade infantil.',
            img: 'https://images.unsplash.com/photo-1544126592-807daa215a75?auto=format&fit=crop&q=80&w=800'
          }
        ].map((item, i) => (
          <article key={i} className="md:col-span-4 group cursor-pointer">
            <div className="bg-surface-container-low rounded-[32px] overflow-hidden shadow-sm border border-outline-variant/10 h-full flex flex-col">
              <div className="h-48 overflow-hidden">
                <img 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  src={item.img} 
                  alt={item.title}
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow space-y-3">
                <span className="font-sans text-[10px] font-bold text-primary uppercase tracking-widest">{item.cat}</span>
                <h3 className="font-serif text-xl text-on-surface group-hover:text-primary transition-colors leading-tight">{item.title}</h3>
                <p className="font-serif text-sm text-on-surface-variant line-clamp-2 opacity-90">{item.desc}</p>
                <div className="mt-auto flex justify-between items-center pt-4 border-t border-outline-variant/10">
                  <span className="font-sans text-[10px] text-on-surface-variant uppercase tracking-widest opacity-60">{item.date}</span>
                  <Link className="text-primary font-sans text-[10px] font-bold uppercase tracking-widest" to="/blog/artigo">Ler artigo</Link>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Pagination */}
      <div className="mt-20 flex justify-center items-center gap-4">
        <button className="w-12 h-12 rounded-full border border-outline-variant/30 flex items-center justify-center hover:bg-surface-container transition-all">
          <ChevronLeft size={20} />
        </button>
        <span className="font-serif text-sm text-on-surface opacity-60">Página 1 de 12</span>
        <button className="w-12 h-12 rounded-full border border-outline-variant/30 flex items-center justify-center hover:bg-surface-container transition-all">
          <ChevronRight size={20} />
        </button>
      </div>
    </main>
  );
}
