import photo from "../assets/dr-cicero.jpg";
import { DOCTOR_ALT, LATTES_URL, publicUrl } from "../data/site";

const trajetoria = [
  "Pediatra pelo HUEM – 1991",
  "Mestre em Saúde da Criança e do Adolescente",
  "Pós-graduado em Preceptoria em Saúde - UFRN",
  "Professor de Pediatria Social – Departamento de Pediatria UFPR",
  "Coordenador do Ambulatório de Dificuldades Alimentares no HC-UFPR- UFPR",
  "Preceptor de Pediatria da residência em Pediatria-HC-UFPR",
  "Supervisor da Residência de Pediatria HNSG",
];

const livros = [
  {
    title: "Vamos para a mesa: orientações e reflexões sobre crianças que comem mal",
    image: publicUrl("images/livros/vamos-para-a-mesa.jpg"),
    alt: "Capa do livro Vamos para a mesa, de Cícero Alaor Kluppel",
  },
  {
    title: "O ratinho Godofredo Onofre e o cocô que queria visitar os amigos",
    image: publicUrl("images/livros/ratinho-godofredo.jpg"),
    alt: "Capa do livro O ratinho Godofredo Onofre e o cocô que queria visitar os amigos",
  },
];

export default function Sobre() {
  return (
    <main>
      <section className="container-max grid items-center gap-10 py-12 md:py-16 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <h1 className="font-serif text-4xl font-semibold text-primary md:text-5xl">
            Sobre:
            <span className="mt-2 block">Cícero Alaor Kluppel</span>
          </h1>
          <ul className="mt-8 space-y-3 text-lg leading-relaxed text-primary">
            {trajetoria.map((item) => (
              <li key={item} className="flex gap-3">
                <span aria-hidden="true" className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <a href={LATTES_URL} target="_blank" rel="noopener noreferrer" className="btn-primary mt-8">
            Consultar curriculum LATTES
          </a>
        </div>
        <img
          src={photo}
          alt={DOCTOR_ALT}
          className="mx-auto w-full max-w-md rounded-[2.5rem] object-cover shadow-soft lg:max-w-none"
        />
      </section>

      <section id="livros" className="container-max scroll-mt-28 pb-8">
        <h2 className="font-serif text-4xl font-semibold text-primary">Livros e capítulo</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {livros.map((livro) => (
            <article key={livro.title} className="flex flex-col">
              <img
                src={livro.image}
                alt={livro.alt}
                className="book-shadow mx-auto h-80 w-auto max-w-full rounded-sm bg-white object-contain"
              />
              <h3 className="mt-4 text-center font-serif text-xl leading-snug text-primary">{livro.title}</h3>
            </article>
          ))}
          <article className="flex min-h-80 items-center justify-center rounded-[2rem] bg-gradient-to-br from-[#e7a3bc] via-[#d77696] to-[#c45d82] p-8 text-center text-white shadow-soft">
            <h3 className="font-serif text-2xl leading-snug">
              Capítulo:
              <span className="mt-3 block">Dificuldades alimentares na Síndrome de Down</span>
            </h3>
          </article>
        </div>
      </section>
    </main>
  );
}
