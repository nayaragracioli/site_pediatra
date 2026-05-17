import { 
  Heart, 
  FlaskConical, 
  Leaf, 
  Baby, 
  Stethoscope, 
  Utensils, 
  Syringe, 
  Brain, 
  CheckCircle, 
  GraduationCap, 
  Star, 
  ArrowRight, 
  MapPin, 
  Clock, 
  PhoneCall, 
  Send
} from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

const StarFilled = () => (
  <Star className="w-5 h-5 fill-secondary text-secondary" />
);

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="section-padding container-max flex flex-col md:flex-row items-center gap-12 lg:gap-20">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex-1 space-y-8"
        >
          <span className="inline-block px-4 py-2 bg-secondary-container/50 text-secondary font-bold text-[10px] uppercase tracking-widest rounded-full font-sans">
            Referência em Curitiba
          </span>
          <h1 className="font-serif text-5xl md:text-6xl font-semibold text-primary leading-tight">
            Pediatria com Afeto, Tempo e Ciência
          </h1>
          <p className="text-lg text-on-surface-variant max-w-xl leading-relaxed italic font-serif opacity-90">
            Um olhar integrativo para a saúde do seu filho, unindo a medicina acadêmica à sensibilidade da homeopatia em consultas sem pressa.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <button className="bg-primary text-on-primary px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all active:scale-95">
              Agendar Consulta
            </button>
            <a href="#sobre" className="border-2 border-primary text-primary px-8 py-4 rounded-xl font-bold text-lg hover:bg-primary/5 transition-all active:scale-95 text-center">
              Conheça o Doutor
            </a>
          </div>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex-1 relative"
        >
          <div className="absolute inset-x-4 -inset-y-4 bg-primary-container/10 rounded-[40px] blur-3xl -z-10" />
          <img 
            src="https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=800" 
            alt="Pediatria Humanizada" 
            className="rounded-[32px] w-full h-[500px] object-cover shadow-2xl"
            referrerPolicy="no-referrer"
          />
        </motion.div>
      </section>

      {/* Philosophy Section */}
      <section className="bg-surface-container-low py-24">
        <div className="container-max text-center space-y-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto space-y-6"
          >
            <h2 className="font-serif text-4xl font-medium text-primary">Uma Abordagem que Respeita o Ritmo da Vida</h2>
            <div className="w-16 h-1 bg-secondary mx-auto rounded-full opacity-30" />
            <p className="text-xl text-on-surface-variant italic font-serif leading-relaxed px-4">
              "Acredito que cada criança é um universo único. Minha prática combina a precisão da pediatria moderna com o cuidado individualizado da homeopatia, buscando não apenas tratar sintomas, mas fortalecer a saúde integral desde a primeira infância."
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Cuidado Afetivo", icon: Heart, desc: "Consultas longas, com espaço para escuta profunda e acolhimento das angústias dos pais." },
              { title: "Rigor Científico", icon: FlaskConical, desc: "Decisões baseadas em evidências atualizadas, garantindo segurança e eficácia em cada diagnóstico." },
              { title: "Homeopatia", icon: Leaf, desc: "Um suporte terapêutico suave que atua na prevenção e no reequilíbrio natural do organismo." }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-10 rounded-[32px] shadow-soft border border-secondary-container/30 text-left space-y-4 group"
              >
                <div className="w-16 h-16 bg-surface-container flex items-center justify-center rounded-2xl text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors duration-300">
                  <item.icon size={32} strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-2xl font-medium text-primary">{item.title}</h3>
                <p className="text-on-surface-variant leading-relaxed font-serif opacity-80">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialties Section */}
      <section id="especialidades" className="section-padding container-max">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="space-y-4">
            <span className="font-bold text-[10px] uppercase tracking-[0.2em] text-secondary font-sans">Especialidades</span>
            <h2 className="font-serif text-4xl font-medium text-primary">Cuidado Completo para seu Filho</h2>
          </div>
          <a href="#" className="flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all font-sans text-sm tracking-wide">
            Ver todos os serviços <ArrowRight size={18} />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: "Puericultura", icon: Baby, tags: ["Prevenção", "Rotina"], desc: "Acompanhamento preventivo mensal para garantir o crescimento e desenvolvimento saudável." },
            { title: "Homeopatia", icon: Leaf, tags: ["Integrativa"], desc: "Tratamento integrativo focado no equilíbrio individual e fortalecimento da imunidade." },
            { title: "Dificuldades Alimentares", icon: Utensils, tags: ["Nutrição"], desc: "Suporte especializado para crianças com seletividade ou problemas de crescimento." },
            { title: "Vacinação", icon: Syringe, tags: ["Imunidade"], desc: "Orientação completa sobre o calendário vacinal e imunização preventiva." },
            { title: "Desenvolvimento", icon: Brain, tags: ["Neuro"], desc: "Avaliação de marcos motores e cognitivos para detectar precocemente atrasos." },
            { title: "Pediatria Geral", icon: Stethoscope, tags: ["Clínica"], desc: "Atendimento clínico para doenças comuns da infância com carinho e precisão." }
          ].map((service, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group bg-surface-container p-8 rounded-[32px] border border-outline-variant/10 hover:border-primary/20 transition-all hover:-translate-y-1"
            >
              <div className="w-14 h-14 bg-secondary-container flex items-center justify-center rounded-2xl mb-6 group-hover:bg-primary group-hover:text-on-primary transition-colors duration-300">
                <service.icon size={28} strokeWidth={1.5} />
              </div>
              <h3 className="font-serif text-2xl font-medium text-primary mb-4 transition-colors">{service.title}</h3>
              <p className="text-on-surface-variant mb-6 text-sm leading-relaxed font-serif opacity-90">{service.desc}</p>
              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag, i) => (
                  <span key={i} className="bg-secondary-container text-on-secondary-container font-bold text-[10px] px-3 py-1 rounded-full uppercase tracking-wider font-sans">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="bg-surface-container-low py-24 overflow-hidden">
        <div className="container-max flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2 relative"
          >
            <div className="absolute top-4 left-4 w-full h-full border-2 border-primary/20 rounded-[32px] -z-10" />
            <img 
              src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=800" 
              alt="Dr. Cícero Alaor Kluppel" 
              className="rounded-[32px] w-full h-[600px] object-cover shadow-xl"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2 space-y-8"
          >
            <span className="font-bold text-[10px] uppercase tracking-[0.2em] text-secondary font-sans">Trajetória e Dedicação</span>
            <h2 className="font-serif text-4xl font-medium text-primary">Dr. Cícero Alaor Kluppel</h2>
            <p className="text-lg text-on-surface-variant leading-relaxed font-serif opacity-90">
              Com mais de 30 anos dedicados à pediatria, o Dr. Cícero é uma referência em Curitiba por sua visão humanista. Formado pela Universidade Federal do Paraná, especializou-se em Homeopatia para oferecer um cuidado que vai além da cura de doenças, focando na saúde plena.
            </p>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <CheckCircle size={24} className="text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="font-bold text-primary font-serif">CRM 12345 / RQE 6789</p>
                  <p className="text-on-surface-variant font-serif opacity-80">Especialista em Pediatria e Homeopatia</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <GraduationCap size={24} className="text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="font-bold text-primary font-serif">Preceptor em Educação Médica</p>
                  <p className="text-on-surface-variant font-serif opacity-80">Contribuindo para a formação de novos pediatras humanos.</p>
                </div>
              </div>
            </div>
            <button className="bg-primary text-on-primary px-10 py-5 rounded-2xl font-bold hover:opacity-90 transition-all shadow-lg mt-4 active:scale-95">
              Ver Currículo Completo
            </button>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-surface">
        <div className="container-max text-center mb-16 space-y-4">
          <h2 className="font-serif text-4xl font-medium text-primary">O que dizem as famílias</h2>
          <p className="text-lg text-on-surface-variant font-serif opacity-90">A confiança de pais e mães é o nosso maior reconhecimento.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 container-max">
          {[
            { 
              text: "O Dr. Cícero é o pediatra que toda mãe sonha. Ele ouve, acalma e tem uma sabedoria que nos dá muita segurança.",
              author: "Mariana Silva",
              sub: "Mãe do Theo, 2 anos"
            },
            { 
              text: "Adoro a abordagem integrativa. Meu filho melhorou muito da imunidade com o tratamento homeopático dele.",
              author: "Ricardo Almeida",
              sub: "Pai da Alice, 4 anos"
            },
            { 
              text: "Encontramos no Dr. Cícero não apenas um médico, mas um parceiro na criação dos nossos filhos. Atendimento impecável.",
              author: "Juliana Costa",
              sub: "Mãe da Luísa e Pedro"
            }
          ].map((t, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-surface-container-low p-8 rounded-[32px] border border-secondary-container/20 flex flex-col hover:border-primary/20 transition-all shadow-sm hover:shadow-md"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => <StarFilled key={i} />)}
              </div>
              <p className="text-lg text-on-surface-variant italic mb-8 leading-relaxed font-serif">"{t.text}"</p>
              <div className="mt-auto flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary-container/50 overflow-hidden">
                  <img src={`https://i.pravatar.cc/150?u=${t.author}`} alt={t.author} className="w-full h-full object-cover grayscale opacity-80" />
                </div>
                <div>
                  <p className="font-bold text-primary font-serif">{t.author}</p>
                  <p className="text-xs text-on-surface-variant font-serif">{t.sub}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Books and Publications Section */}
      <section className="py-24 bg-surface-container-low">
        <div className="container-max">
          <div className="mb-16 space-y-4 text-center md:text-left">
            <span className="font-bold text-[10px] uppercase tracking-[0.2em] text-secondary font-sans">Publicações</span>
            <h2 className="font-serif text-4xl font-medium text-primary">Livros e Publicações</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
            {/* Book Item 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row gap-8 items-start"
            >
              <div className="flex-shrink-0 w-full md:w-48 lg:w-56">
                <div className="book-shadow rounded-sm overflow-hidden transform hover:-rotate-2 transition-transform duration-300">
                  <img 
                    alt="Capa do livro A Arte de Cuidar" 
                    className="w-full aspect-[2/3] object-cover" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAK8oAH1eK0mWLX08GHRLMnsRjBQ3oMi3L9atyXKghpPsim5-8GY6ElFj85hVn9ibTK6fkaU7JabadEmQO9HWpxp5eSh4ojfypa6vvHmJwSEk9iG4sUN4EmSkK30JqMKUQH6lHVpNCwnpjBZ3bCXWJcVvA-BLWu-BWesAHq4SulvlAAW8rSrToL4m2YV4wdkUlUwvL57flK8s_xcYYQmyxVJM-i6x11VEe8Js7KSoAV53P6Tf79KOM0j4SERx6GjNhro3XP7NBSi_c"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="font-serif text-2xl font-medium text-primary">A Arte de Cuidar</h3>
                <p className="text-on-surface-variant font-serif leading-relaxed opacity-90">Uma reflexão profunda sobre o papel da escuta e da empatia na prática pediátrica, oferecendo um guia para pais buscarem uma conexão mais autêntica com seus filhos.</p>
                <button className="text-primary font-bold inline-flex items-center gap-2 group font-sans text-xs uppercase tracking-widest">
                  Saiba Mais <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </motion.div>
            {/* Book Item 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="flex flex-col md:flex-row gap-8 items-start"
            >
              <div className="flex-shrink-0 w-full md:w-48 lg:w-56">
                <div className="book-shadow rounded-sm overflow-hidden transform hover:rotate-2 transition-transform duration-300">
                  <img 
                    alt="Capa do livro Pediatria Integrativa" 
                    className="w-full aspect-[2/3] object-cover" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBi8fGx0zTL17sQNJC0hB_71eB8AS-6cNtEyrU8Gj1pfd6UnrfP-dxE08zuWJHOoK-q2bBt5MjV0C7eJUSPRCLbCmnTCqnJEd7oFZbO-9bMVBS-0JZHSai38l8AJkDhjoU8pQDwx6pkLa9P-6ne4Qtu3gnA8Vly0ofWY4iNnE6NKj8uqITNVvwPVI55s_32szjiHBhRKQ2Xjw7kTqOd9T71R8vK-KsqK9GfKmxawSZaj1Kua4Ab_reKWsFrkG5FWoffj67AjDxaqv4"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="font-serif text-2xl font-medium text-primary">Pediatria Integrativa</h3>
                <p className="text-on-surface-variant font-serif leading-relaxed opacity-90">Como unir o melhor da medicina convencional com terapias complementares como a homeopatia, focando no desenvolvimento biopsicossocial da criança.</p>
                <button className="text-primary font-bold inline-flex items-center gap-2 group font-sans text-xs uppercase tracking-widest">
                  Saiba Mais <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-24 bg-surface-container-low">
        <div className="container-max">
          <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-6 text-center md:text-left">
            <div className="space-y-4">
              <span className="font-bold text-[10px] uppercase tracking-[0.2em] text-secondary font-sans">Conhecimento</span>
              <h2 className="font-serif text-4xl font-medium text-primary">Blog da Criança</h2>
            </div>
            <Link to="/blog" className="border-2 border-primary text-primary px-8 py-3 rounded-xl font-bold hover:bg-primary hover:text-white transition-all active:scale-95 font-serif text-lg">
              Ver todos os artigos
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                category: "Nutrição", 
                title: "Como lidar com a seletividade alimentar?", 
                image: "https://images.unsplash.com/photo-1490818387583-1baba5e6382b?auto=format&fit=crop&q=80&w=800",
                desc: "Dicas práticas para tornar o momento das refeições mais leve e nutritivo para os pequenos."
              },
              { 
                category: "Sono", 
                title: "Higiene do Sono: O segredo para noites tranquilas", 
                image: "https://images.unsplash.com/photo-1544126592-807daa215a75?auto=format&fit=crop&q=80&w=800",
                desc: "Aprenda a criar uma rotina que favorece o descanso profundo e o desenvolvimento do bebê."
              },
              { 
                category: "Tratamentos", 
                title: "Por que escolher a homeopatia na infância?", 
                image: "https://images.unsplash.com/photo-1584362916962-d278060f785b?auto=format&fit=crop&q=80&w=800",
                desc: "Entenda como essa terapêutica pode ser uma aliada poderosa na prevenção de doenças."
              }
            ].map((post, i) => (
              <article key={i} className="group bg-surface rounded-[24px] overflow-hidden shadow-soft flex flex-col border border-outline-variant/10">
                <div className="h-64 overflow-hidden relative">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-md text-secondary font-bold text-[10px] px-3 py-1 rounded-full uppercase tracking-widest font-sans">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-8 space-y-4">
                  <h3 className="font-serif text-2xl text-primary leading-tight hover:text-primary/70 transition-colors cursor-pointer">{post.title}</h3>
                  <p className="text-on-surface-variant text-sm line-clamp-2 leading-relaxed font-serif opacity-90">{post.desc}</p>
                  <Link to="/blog/artigo" className="inline-flex items-center text-primary font-bold gap-2 hover:gap-3 transition-all pt-2 font-sans text-xs uppercase tracking-wide">
                    Ler artigo <ArrowRight size={14} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Location & Contact */}
      <section id="contato" className="section-padding container-max">
        <div className="bg-white rounded-[40px] shadow-soft overflow-hidden flex flex-col lg:flex-row border border-outline-variant/10">
          <div className="lg:w-1/2 p-12 md:p-20 space-y-10">
            <div className="space-y-4">
              <span className="font-bold text-[10px] uppercase tracking-[0.2em] text-secondary font-sans">Contato</span>
              <h2 className="font-serif text-4xl font-medium text-primary">Onde nos Encontrar</h2>
            </div>
            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-surface-container flex items-center justify-center rounded-xl text-primary flex-shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="font-bold text-primary mb-1 font-serif">Endereço</p>
                  <p className="text-on-surface-variant font-serif opacity-80">Rua Dr. Pedrosa, 123 - Sala 405<br/>Batel, Curitiba - PR, 80420-120</p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-surface-container flex items-center justify-center rounded-xl text-primary flex-shrink-0">
                  <Clock size={24} />
                </div>
                <div>
                  <p className="font-bold text-primary mb-1 font-serif">Horário de Atendimento</p>
                  <p className="text-on-surface-variant font-serif opacity-80">Segunda a Sexta: 08:00 - 18:00<br/>Sábados (Quinzenal): 09:00 - 12:00</p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-surface-container flex items-center justify-center rounded-xl text-primary flex-shrink-0">
                  <PhoneCall size={24} />
                </div>
                <div>
                  <p className="font-bold text-primary mb-1 font-serif">Canais Oficiais</p>
                  <p className="text-on-surface-variant font-serif opacity-80">(41) 99999-0000<br/>contato@drciceroalaor.com.br</p>
                </div>
              </div>
            </div>
            <button className="w-full bg-primary text-on-primary font-bold py-5 rounded-2xl flex items-center justify-center gap-3 shadow-lg hover:opacity-90 transition-all active:scale-95 shadow-primary/20">
              <Send size={20} />
              Agendar via WhatsApp
            </button>
          </div>
          <div className="lg:w-1/2 h-[400px] lg:h-auto relative bg-surface-container-high grayscale-50 opacity-80">
            <div className="absolute inset-0 flex items-center justify-center opacity-10">
              <MapPin size={120} className="text-primary" />
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="w-12 h-12 bg-primary text-on-primary rounded-full flex items-center justify-center shadow-2xl relative z-10"
              >
                <MapPin size={24} />
                <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-25" />
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
