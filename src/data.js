import { ReactComponent as ProfundasIcon } from "./assets/nesting-dolls.svg";
import { ReactComponent as CasualesIcon } from "./assets/ghost.svg";
import { ReactComponent as PicantesIcon } from "./assets/eggplant.svg";
import { ReactComponent as QueprefieresIcon } from "./assets/first-quarter-moon.svg";
import { ReactComponent as AnectodasIcon} from "./assets/film-frames.svg";


export const categories = [
  {
    name: "Profundas",
    description: "Cosas que nunca habías pensado",
    background:
      "linear-gradient(138deg, rgba(221, 94, 137, 1) 0%, rgba(247, 187, 151, 1) 100%)",
    icon: ProfundasIcon,
    id: "profundas"
  },
  {
    name: "Casuales",
    description: "Algunos temas graciosos",
    background:
      "linear-gradient(138deg, rgba(101, 78, 163, 1) 0%, rgba(234, 175, 200, 1) 100%)",
    icon: CasualesIcon,
    id: "casuales"
  },
  {
    name: "Picantes",
    description: "Momentos incomodos",
    background:
      "linear-gradient(138deg, rgba(76, 184, 196, 1) 0%, rgba(60, 211, 173, 1) 100%)",
    icon: PicantesIcon,
    id: "picantes"
  },
  {
    name: "Qué prefieres",
    description: "Situaciones extrañas",
    background:
      "linear-gradient(138deg, rgba(242, 153, 74, 1) 0%, rgba(242, 201, 76, 1) 100%)",
    icon: QueprefieresIcon,
    id: "que-prefieres"
  },
  {
    name: "Anecdota de...",
    description: "Desempolva recuerdos",
    background:
      "linear-gradient(138deg, rgba(131,164,212,1) 0%, rgba(166,156,219,1) 100%)",
    icon: AnectodasIcon,
    id: "anecdotas"
  },
];


