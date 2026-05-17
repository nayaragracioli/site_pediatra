import { 
  ArrowLeft, 
  CheckCircle2, 
  Share2, 
  Copy, 
  Heart,
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

export default function Article() {
  return (
    <main className="container-max py-12">
      <div className="mb-12">
        <Link to="/blog" className="inline-flex items-center gap-2 text-primary font-sans text-xs font-bold uppercase tracking-widest hover:opacity-70 transition-all">
          <ArrowLeft size={18} />
          Voltar ao Blog
        </Link>
      </div>

      <article className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        <div className="lg:col-span-8">
          <header className="mb-10">
            <div className="flex gap-3 mb-6">
              <span className="bg-surface-container-low text-tertiary px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border border-outline-variant/30 font-sans">Nutrição Infantil</span>
              <span className="bg-surface-container-low text-tertiary px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border border-outline-variant/30 font-sans">Desenvolvimento</span>
            </div>
            <h1 className="font-serif text-5xl text-on-surface mb-8 leading-tight">Como lidar com a seletividade alimentar?</h1>
            
            <div className="flex items-center gap-4 py-6 border-y border-outline-variant/20">
              <img 
                className="w-14 h-14 rounded-full object-cover grayscale-[20%]" 
                src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=200" 
                alt="Dr. Cícero Alaor Kluppel"
                referrerPolicy="no-referrer"
              />
              <div>
                <p className="font-serif text-lg text-on-surface leading-tight font-bold">Dr. Cícero Alaor Kluppel</p>
                <p className="font-sans text-[10px] text-on-surface-variant uppercase tracking-widest opacity-60">Pediatra • 12 de Maio, 2024</p>
              </div>
            </div>
          </header>

          <div className="mb-12 rounded-[24px] overflow-hidden shadow-soft">
            <img 
              className="w-full aspect-[16/9] object-cover" 
              src="https://images.unsplash.com/photo-1490818387583-1baba5e6382b?auto=format&fit=crop&q=80&w=1200" 
              alt="Alimentação Saudável"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="font-serif text-lg text-on-surface-variant leading-relaxed space-y-6">
            <p className="first-letter:text-5xl first-letter:font-serif first-letter:mr-3 first-letter:float-left first-letter:text-primary first-letter:font-bold">
              A seletividade alimentar é uma fase comum, mas muitas vezes estressante, no desenvolvimento infantil. Entre os 2 e 6 anos, é frequente que as crianças passem pela chamada "neofobia alimentar", uma resistência natural a experimentar novos sabores e texturas.
            </p>
            
            <h2 className="font-serif text-3xl text-on-surface mt-12 mb-6">Compreendendo o Comportamento</h2>
            <p>
              É fundamental entender que a criança não está apenas sendo "teimosa". Para ela, um novo alimento pode representar um desafio sensorial real. O cheiro, a cor ou a consistência podem ser interpretados pelo cérebro infantil como algo potencialmente perigoso.
            </p>

            <blockquote className="my-10 p-8 bg-surface-container-low rounded-[20px] border-l-4 border-primary italic font-serif text-primary text-xl">
              "A mesa deve ser um local de conexão e prazer, não um campo de batalha. O respeito ao tempo da criança é o primeiro passo para uma relação saudável com a comida."
            </blockquote>

            <h2 className="font-serif text-3xl text-on-surface mt-12 mb-6">Estratégias Práticas para os Pais</h2>
            <ul className="space-y-4 mb-8">
              {[
                { label: "Exposição Repetida", desc: "Um alimento pode precisar ser oferecido de 10 a 15 vezes em diferentes preparações antes de ser aceito." },
                { label: "Envolvimento no Preparo", desc: "Leve a criança à feira e deixe-a ajudar a lavar os vegetais. O contato prévio diminui a resistência." },
                { label: "Ambiente Tranquilo", desc: "Evite telas e distrações eletrônicas. Foque na conversa e no ato de comer em família." }
              ].map((item, idx) => (
                <li key={idx} className="flex gap-4 items-start">
                  <CheckCircle2 className="text-primary mt-1 flex-shrink-0" size={20} />
                  <span><strong className="text-on-surface">{item.label}:</strong> {item.desc}</span>
                </li>
              ))}
            </ul>
            
            <p>
              Se a seletividade vier acompanhada de perda de peso, cansaço excessivo ou recusa total de grupos alimentares inteiros, é essencial buscar a orientação de um pediatra ou nutricionista especializado.
            </p>
          </div>

          <div className="mt-16 pt-10 border-t border-outline-variant/20 flex flex-wrap items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <span className="font-sans text-[10px] text-on-surface-variant uppercase tracking-widest opacity-60">Compartilhar:</span>
              <div className="flex gap-2">
                <button className="w-10 h-10 rounded-full border border-outline-variant/30 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300">
                  <Share2 size={18} />
                </button>
                <button className="w-10 h-10 rounded-full border border-outline-variant/30 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300">
                  <Copy size={18} />
                </button>
              </div>
            </div>
            <div className="flex gap-4">
              <button className="flex items-center gap-2 text-primary font-sans text-xs font-bold uppercase tracking-widest hover:opacity-70">
                <Heart size={18} /> 124 Likes
              </button>
            </div>
          </div>
        </div>

        <aside className="lg:col-span-4 space-y-12">
          <div className="bg-surface-container-low p-8 rounded-[32px] border border-outline-variant/10">
            <h3 className="font-serif text-2xl text-on-surface mb-6">Artigos Relacionados</h3>
            <div className="space-y-8">
              {[
                { 
                  cat: "Sono Infantil", 
                  title: "A importância da rotina de sono no crescimento",
                  img: "https://images.unsplash.com/photo-1544126592-807daa215a75?auto=format&fit=crop&q=80&w=400"
                },
                { 
                  cat: "Hidratação", 
                  title: "Dicas para manter os pequenos hidratados no verão",
                  img: "https://images.unsplash.com/photo-1584362916962-d278060f785b?auto=format&fit=crop&q=80&w=400"
                }
              ].map((article, idx) => (
                <Link key={idx} to="/blog/artigo" className="group block">
                  <img 
                    className="w-full h-32 object-cover rounded-2xl mb-4 group-hover:scale-[1.02] transition-transform duration-300 shadow-sm" 
                    src={article.img} 
                    alt={article.title}
                    referrerPolicy="no-referrer"
                  />
                  <p className="font-sans text-[10px] text-primary mb-1 font-bold uppercase tracking-widest">{article.cat}</p>
                  <h4 className="font-serif text-lg text-on-surface group-hover:text-primary transition-colors leading-tight">{article.title}</h4>
                </Link>
              ))}
            </div>
          </div>

          <div className="bg-primary p-8 rounded-[32px] text-on-primary shadow-lg shadow-primary/20">
            <h3 className="font-serif text-2xl mb-4">Acompanhamento Especializado</h3>
            <p className="font-serif opacity-90 mb-8 italic">Agende uma consulta para uma avaliação nutricional completa do seu filho.</p>
            <button className="w-full bg-white text-primary py-4 rounded-xl font-sans text-xs font-bold uppercase tracking-widest hover:bg-surface-container-low transition-all active:scale-95 shadow-sm">
              Agendar Agora
            </button>
          </div>

          <div className="p-2">
            <h3 className="font-serif text-2xl text-on-surface mb-6">Tags Populares</h3>
            <div className="flex flex-wrap gap-2">
              {['Vacinação', 'Primeiros Passos', 'Amamentação', 'Psicologia'].map(tag => (
                <span key={tag} className="px-4 py-2 bg-white border border-outline-variant/30 rounded-full font-sans text-[10px] font-bold uppercase tracking-widest text-on-surface-variant hover:border-primary hover:text-primary cursor-pointer transition-all">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </aside>
      </article>
    </main>
  );
}
