export type Topic = {
  id: string;
  label: string;
  title: string;
  intro?: string;
  paragraphs: string[];
  bullets?: string[];
  closing?: string;
};

export const topics: Topic[] = [
  {
    id: "infancia",
    label: "Dificuldades alimentares na infância",
    title: "Quando a alimentação se torna uma dificuldade",
    paragraphs: [
      "Nem toda recusa alimentar representa um problema clínico. Entretanto, algumas crianças apresentam dificuldades persistentes para aceitar alimentos, experimentar novos sabores ou consumir uma variedade adequada de alimentos.",
      "Essas dificuldades podem envolver fatores médicos, nutricionais, sensoriais, comportamentais e psicossociais, com repercussões para a criança e sua família.",
      "Os problemas relacionados ao momento da refeição podem tornar o ambiente familiar estressante para todos.",
    ],
  },
  {
    id: "quando-procurar",
    label: "Quando procurar avaliação?",
    title: "Quando procurar avaliação?",
    intro: "Alguns sinais merecem atenção:",
    paragraphs: [],
    bullets: [
      "Aceitação de uma variedade muito restrita de alimentos.",
      "Recusa persistente de alimentos ou texturas.",
      "Refeições acompanhadas de sofrimento ou conflitos frequentes.",
      "Dificuldades no crescimento ou suspeita de deficiências nutricionais.",
      "Dificuldades para mastigar, engolir ou episódios de engasgo durante a alimentação.",
    ],
    closing:
      "É importante lembrar que uma criança pode apresentar dificuldades alimentares mesmo com peso e crescimento adequados.",
  },
  {
    id: "avaliacao",
    label: "Como é realizada a avaliação?",
    title: "Como é realizada a avaliação?",
    paragraphs: [
      "A avaliação considera a história alimentar, o crescimento, o desenvolvimento e as condições clínicas da criança, além de aspectos nutricionais, habilidades alimentares e fatores psicossociais.",
      "Também são observados os hábitos da família, a organização das refeições e as estratégias já utilizadas pelos cuidadores.",
      "Essas informações ajudam a compreender os fatores envolvidos e orientar as condutas.",
    ],
  },
  {
    id: "acompanhamento",
    label: "Como funciona o acompanhamento?",
    title: "Como funciona o acompanhamento?",
    paragraphs: [
      "O acompanhamento é individualizado, considerando as necessidades e características de cada criança.",
      "Nas crianças com seletividade alimentar importante, o trabalho pode começar com os alimentos que já são aceitos, avançando gradualmente para a ampliação do repertório alimentar.",
      "A família sempre participa do processo. Recebe orientações sobre a organização das refeições, o comportamento alimentar e a responsabilidade compartilhada na alimentação.",
    ],
  },
  {
    id: "autismo",
    label: "Dificuldades alimentares e autismo",
    title: "Dificuldades alimentares e autismo",
    paragraphs: [
      "A seletividade alimentar é mais frequente em crianças com transtorno do espectro autista (TEA).",
      "Nessas crianças, características sensoriais dos alimentos, necessidade de previsibilidade e padrões restritos de comportamento podem influenciar a alimentação de modo mais intenso.",
      "A avaliação considera essas particularidades, assim como as condições clínicas e nutricionais, para orientar o acompanhamento de cada criança.",
      "Lembrando sempre que a criança autista, antes de ser autista é uma criança.",
    ],
  },
];

export function getTopic(id?: string) {
  return topics.find((topic) => topic.id === id) ?? topics[0];
}
