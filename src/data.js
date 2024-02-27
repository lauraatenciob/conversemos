import { ReactComponent as ProfundasIcon } from "./assets/nesting-dolls.svg";
import { ReactComponent as CasualesIcon } from "./assets/ghost.svg";
import { ReactComponent as PicantesIcon } from "./assets/eggplant.svg";
import { ReactComponent as QueprefieresIcon } from "./assets/first-quarter-moon.svg";
import { ReactComponent as AnectodasIcon } from "./assets/film-frames.svg";

export const categories = [
  {
    name: "Profundas",
    description: "Cosas que nunca habías pensado",
    background:
      "linear-gradient(138deg, rgba(221, 94, 137, 1) 0%, rgba(247, 187, 151, 1) 100%)",
    color: "rgba(221, 94, 137, 1)",
    icon: ProfundasIcon,
    id: "profundas",
    questions: [],
  },
  {
    name: "Casuales",
    description: "Algunos temas graciosos",
    background:
      "linear-gradient(138deg, rgba(101, 78, 163, 1) 0%, rgba(234, 175, 200, 1) 100%)",
    color: "rgba(101, 78, 163, 1)",
    icon: CasualesIcon,
    id: "casuales",
    questions: [],
  },
  {
    name: "Picantes",
    description: "Momentos incomodos",
    background:
      "linear-gradient(138deg, rgba(76, 184, 196, 1) 0%, rgba(60, 211, 173, 1) 100%)",
    color: "rgba(76, 184, 196, 1)",
    icon: PicantesIcon,
    id: "picantes",
    questions: [],
  },
  {
    name: "Qué prefieres",
    description: "Situaciones extrañas",
    background:
      "linear-gradient(138deg, rgba(242, 153, 74, 1) 0%, rgba(242, 201, 76, 1) 100%)",
    color: "rgba(242, 153, 74, 1)",
    icon: QueprefieresIcon,
    id: "que-prefieres",

    questions: [],
  },
  {
    name: "Anecdota de...",
    description: "Desempolva recuerdos",
    background:
      "linear-gradient(138deg, rgba(131,164,212,1) 0%, rgba(166,156,219,1) 100%)",
    color: "rgba(131,164,212,1)",
    icon: AnectodasIcon,
    id: "anecdotas",
    questions: [{ text: "sadasd", categoryId: "anecdotas" }],
  },
];

function randomIndFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export function generateQuestionBank(selectedCategories) {
  const filteredCategories =
    selectedCategories.length === 0
      ? categories
      : categories.filter((category) =>
          selectedCategories.includes(category.id)
        );

  return filteredCategories.flatMap((category) => category.questions);
}

export function generateRandomQuestion(questions) {
  return questions[randomIndFromInterval(0, questions.length - 1)];
}
