import { ReactComponent as ProfundasIcon } from "./assets/nesting-dolls.svg";
import { ReactComponent as CasualesIcon } from "./assets/ghost.svg";
import { ReactComponent as PicantesIcon } from "./assets/eggplant.svg";
import { ReactComponent as QueprefieresIcon } from "./assets/first-quarter-moon.svg";
import { ReactComponent as AnectodasIcon } from "./assets/film-frames.svg";

export const categories = [
  {
    name: "Casuales",
    description: "Algunos temas graciosos",
    background:
      "linear-gradient(138deg, rgba(101, 78, 163, 1) 0%, rgba(234, 175, 200, 1) 100%)",
    color: "rgba(101, 78, 163, 1)",
    icon: CasualesIcon,
    id: "casuales",
    questions: [
      {
        text: "¿Cuál es tu película favorita de todos los tiempos y por qué?",
        idCategory: "casuales",
      },
      {
        text: "Si pudieras viajar a cualquier lugar del mundo ahora mismo, ¿a dónde irías y qué harías allí?",
        idCategory: "casuales",
      },
      {
        text: "¿Cuál es tu comida favorita y tienes alguna historia divertida relacionada con ella?",
        idCategory: "casuales",
      },
      {
        text: "¿Cuál es el mejor consejo que te han dado y cómo te ha impactado?",
        idCategory: "casuales",
      },
      {
        text: "Si pudieras tener cualquier habilidad sobrenatural, ¿cuál elegirías y qué harías con ella?",
        idCategory: "casuales",
      },
      {
        text: "¿Cuál es tu libro favorito y qué te atrajo de él?",
        idCategory: "casuales",
      },
      {
        text: "¿Prefieres vivir en la ciudad, en el campo o en la playa? ¿Por qué?",
        idCategory: "casuales",
      },
      {
        text: "¿Cuál es tu recuerdo más embarazoso pero gracioso?",
        idCategory: "casuales",
      },
      {
        text: "¿Qué actividad te relaja más cuando estás estresado/a?",
        idCategory: "casuales",
      },
      {
        text: "Si pudieras tener una cena con cualquier persona, viva o muerta, ¿quién sería y qué le preguntarías?",
        idCategory: "casuales",
      },
      {
        text: "¿Qué superpoder te gustaría tener y cómo lo usarías en tu vida diaria?",
        idCategory: "casuales",
      },
      {
        text: "Si tuvieras que quedarte con solo un objeto personal, ¿cuál sería y por qué?",
        idCategory: "casuales",
      },
      {
        text: "¿Cuál es tu mayor logro hasta ahora y cómo lo conseguiste?",
        idCategory: "casuales",
      },
      {
        text: "¿Qué te hace reír sin importar cuántas veces lo escuches o veas?",
        idCategory: "casuales",
      },
      {
        text: "¿Cuál es tu deporte o actividad física favorita y por qué te gusta practicarlo?",
        idCategory: "casuales",
      },
      {
        text: "¿Cuál es tu canción favorita y tiene algún significado especial para ti?",
        idCategory: "casuales",
      },
      {
        text: "Si pudieras cambiar una decisión que tomaste en el pasado, ¿cuál sería y por qué?",
        idCategory: "casuales",
      },
      {
        text: "¿Cuál es tu mejor recuerdo de la infancia y por qué es tan especial para ti?",
        idCategory: "casuales",
      },
      {
        text: "¿Prefieres ser capaz de volar o ser invisible? ¿Por qué?",
        idCategory: "casuales",
      },
      {
        text: "Si pudieras vivir en cualquier época de la historia, ¿cuál elegirías y por qué?",
        idCategory: "casuales",
      },
    ],
  },
  {
    name: "Profundas",
    description: "Cosas que nunca habías pensado",
    background:
      "linear-gradient(138deg, rgba(221, 94, 137, 1) 0%, rgba(247, 187, 151, 1) 100%)",
    color: "rgba(221, 94, 137, 1)",
    icon: ProfundasIcon,
    id: "profundas",
    questions: [
      {
        text: "¿Cuál es tu mayor desafío en la vida y cómo lo superaste?",
        idCategory: "profundas",
      },
      {
        text: "¿Cuál es tu mayor miedo y cómo afecta tu vida?",
        idCategory: "profundas",
      },
      {
        text: "¿Cuál es tu filosofía de vida o tu lema personal?",
        idCategory: "profundas",
      },
      {
        text: "¿Qué crees que es más importante en la vida: la felicidad o el éxito?",
        idCategory: "profundas",
      },
      {
        text: "¿Cómo te gustaría ser recordado/a por las personas que te conocen?",
        idCategory: "profundas",
      },
      {
        text: "¿Cuál es tu opinión sobre el propósito de la vida?",
        idCategory: "profundas",
      },
      {
        text: "¿Qué valor o principio moral es el más importante para ti y por qué?",
        idCategory: "profundas",
      },
      {
        text: "¿Cuál es tu mayor arrepentimiento en la vida y qué has aprendido de él?",
        idCategory: "profundas",
      },
      {
        text: "¿Qué te hace sentir realmente vivo/a y cómo cultivas esa sensación?",
        idCategory: "profundas",
      },
      {
        text: "¿Cómo defines el amor y qué papel juega en tu vida?",
        idCategory: "profundas",
      },
      {
        text: "¿Cuál es tu idea de una vida significativa y cómo trabajas para alcanzarla?",
        idCategory: "profundas",
      },
      {
        text: "¿Qué crees que es más importante: la verdad brutal o la comodidad reconfortante?",
        idCategory: "profundas",
      },
      {
        text: "¿Cuál es tu opinión sobre el perdón y cómo practicas el perdón en tu vida?",
        idCategory: "profundas",
      },
      {
        text: "¿Cuál es tu relación con la espiritualidad y cómo influye en tus decisiones?",
        idCategory: "profundas",
      },
      {
        text: "¿Qué te hace sentir agradecido/a en la vida y cómo practicas la gratitud?",
        idCategory: "profundas",
      },
      {
        text: "¿Cuál es tu mayor lección aprendida de un fracaso o una dificultad?",
        idCategory: "profundas",
      },
      {
        text: "¿Cuál es tu opinión sobre la muerte y cómo influye en cómo vives tu vida?",
        idCategory: "profundas",
      },
      {
        text: "¿Qué te impide alcanzar tu máximo potencial y cómo trabajas para superarlo?",
        idCategory: "profundas",
      },
      {
        text: "¿Cómo encuentras el equilibrio entre el trabajo, el ocio y el descanso en tu vida?",
        idCategory: "profundas",
      },
      {
        text: "¿Cuál es tu mayor motivación en la vida y cómo la alimentas día a día?",
        idCategory: "profundas",
      },
    ],
  },
  {
    name: "Picantes",
    description: "Momentos incomodos",
    background:
      "linear-gradient(138deg, rgba(76, 184, 196, 1) 0%, rgba(60, 211, 173, 1) 100%)",
    color: "rgba(76, 184, 196, 1)",
    icon: PicantesIcon,
    id: "picantes",
    questions: [
      {
        text: "¿Cuál es tu fantasía sexual más salvaje?",
        idCategory: "picantes",
      },
      {
        text: "¿Alguna vez has tenido una experiencia sexual en un lugar público? Describe.",
        idCategory: "picantes",
      },
      {
        text: "¿Prefieres tener sexo por la mañana o por la noche y por qué?",
        idCategory: "picantes",
      },
      {
        text: "¿Qué es lo más atrevido que has hecho en el dormitorio?",
        idCategory: "picantes",
      },
      {
        text: "¿Cuál es tu posición sexual favorita y por qué te gusta?",
        idCategory: "picantes",
      },
      {
        text: "¿Has probado alguna vez juguetes sexuales en pareja? ¿Cuál fue tu experiencia?",
        idCategory: "picantes",
      },
      {
        text: "¿Qué opinas sobre el sexo casual y lo has practicado alguna vez?",
        idCategory: "picantes",
      },
      {
        text: "¿Qué es lo más erótico que has experimentado en una relación?",
        idCategory: "picantes",
      },
      {
        text: "¿Tienes alguna fantasía que aún no hayas cumplido y te gustaría compartir?",
        idCategory: "picantes",
      },
      {
        text: "¿Cómo te gusta que te seduzcan o seducir a tu pareja?",
        idCategory: "picantes",
      },
      {
        text: "¿Cuál es tu opinión sobre el sexting y lo has practicado antes?",
        idCategory: "picantes",
      },
      {
        text: "¿Qué es lo más romántico que has hecho por tu pareja en la cama?",
        idCategory: "picantes",
      },
      {
        text: "¿Qué opinas sobre el sexo en la primera cita?",
        idCategory: "picantes",
      },
      {
        text: "¿Alguna vez has tenido un encuentro íntimo con alguien mucho mayor o más joven que tú?",
        idCategory: "picantes",
      },
      {
        text: "¿Qué es lo más loco que has hecho por deseo sexual?",
        idCategory: "picantes",
      },
      {
        text: "¿Cuál es tu opinión sobre los juegos de roles en la intimidad?",
        idCategory: "picantes",
      },
      {
        text: "¿Te consideras más dominante, sumiso/a o equilibrado/a en la cama?",
        idCategory: "picantes",
      },
      {
        text: "¿Qué es lo más sorprendente que has descubierto sobre tus preferencias sexuales?",
        idCategory: "picantes",
      },
      {
        text: "¿Alguna vez has experimentado un orgasmo simultáneo con tu pareja?",
        idCategory: "picantes",
      },
      {
        text: "¿Qué es lo que más te excita en la intimidad y cómo lo expresas?",
        idCategory: "picantes",
      },
    ],
  },
  {
    name: "Qué prefieres",
    description: "Situaciones extrañas",
    background:
      "linear-gradient(138deg, rgba(242, 153, 74, 1) 0%, rgba(242, 201, 76, 1) 100%)",
    color: "rgba(242, 153, 74, 1)",
    icon: QueprefieresIcon,
    id: "que-prefieres",
    questions: [
      {
        text: "¿Prefieres tener el poder de volar pero solo a 5 km/h o tener invisibilidad pero solo por 10 minutos al día?",
        idCategory: "que-prefieres",
      },
      {
        text: "¿Preferirías nunca volver a tener que dormir o nunca volver a tener que comer?",
        idCategory: "que-prefieres",
      },
      {
        text: "¿Elegirías tener la capacidad de leer mentes pero no poder controlar cuándo lo haces o tener la capacidad de viajar en el tiempo pero solo hacia el pasado?",
        idCategory: "que-prefieres",
      },
      {
        text: "¿Prefieres poder comunicarte con los animales pero no poder hablar con humanos o poder teletransportarte pero solo a lugares que has visitado antes?",
        idCategory: "que-prefieres",
      },
      {
        text: "¿Elegirías tener la habilidad de detener el tiempo pero envejecer el doble de rápido o tener la habilidad de curar cualquier enfermedad pero perder una semana de tu vida cada vez que lo haces?",
        idCategory: "que-prefieres",
      },
      {
        text: "¿Preferirías tener el control absoluto sobre el clima pero solo en tu ciudad o tener la capacidad de hablar con los muertos pero solo una vez al año?",
        idCategory: "que-prefieres",
      },
      {
        text: "¿Elegirías tener la habilidad de ser invisible pero solo cuando nadie te está mirando o tener la capacidad de leer libros a una velocidad increíble pero olvidar todo lo que leíste?",
        idCategory: "que-prefieres",
      },
      {
        text: "¿Preferirías tener la capacidad de teletransportarte pero siempre con la posibilidad de llegar a un lugar incorrecto o tener la habilidad de hablar todos los idiomas pero perder la capacidad de hablar tu idioma nativo?",
        idCategory: "que-prefieres",
      },
      {
        text: "¿Preferirías tener la capacidad de controlar tus sueños pero no recordarlos al despertar o tener la habilidad de cambiar de género físicamente pero solo una vez al mes?",
        idCategory: "que-prefieres",
      },
      {
        text: "¿Elegirías tener la capacidad de saber la verdad sobre cualquier pregunta pero no poder hablar sobre ella o tener la habilidad de predecir el futuro pero sin poder cambiarlo?",
        idCategory: "que-prefieres",
      },
      {
        text: "¿Preferirías tener la capacidad de volver al pasado y corregir un error personal importante o tener la habilidad de ver el futuro pero sin poder intervenir en él?",
        idCategory: "que-prefieres",
      },
      {
        text: "¿Elegirías tener la capacidad de detener el envejecimiento de tu cuerpo pero con la condición de que nadie más lo pueda hacer o tener la habilidad de comunicarte telepáticamente con una persona pero solo con una conexión emocional fuerte?",
        idCategory: "que-prefieres",
      },
      {
        text: "¿Elegirías tener la capacidad de eliminar un recuerdo doloroso pero perder todos los recuerdos relacionados con él o tener la habilidad de cambiar de forma física pero con la limitación de que solo puedes hacerlo una vez?",
        idCategory: "que-prefieres",
      },
      {
        text: "¿Preferirías tener la capacidad de viajar en el tiempo pero solo hacia adelante o tener la habilidad de ser invisible pero solo cuando estás llorando?",
        idCategory: "que-prefieres",
      },
      {
        text: "¿Elegirías tener la capacidad de saber cuándo alguien está mintiendo pero no poder hacer nada al respecto o tener la habilidad de prever desastres naturales pero no poder evitarlos?",
        idCategory: "que-prefieres",
      },
      {
        text: "¿Prefieres tener la capacidad de ser inmune a cualquier enfermedad pero con la condición de que tus seres queridos no lo sean o tener la habilidad de teletransportarte pero solo a lugares peligrosos?",
        idCategory: "que-prefieres",
      },
      {
        text: "¿Elegirías tener la capacidad de comunicarte con los muertos pero solo a través de tus sueños o tener la habilidad de ser irresistible para todas las personas pero con la desventaja de que nadie te tome en serio?",
        idCategory: "que-prefieres",
      },
      {
        text: "¿Preferirías tener la capacidad de leer la mente pero solo cuando alguien está pensando en ti o tener la habilidad de cambiar de apariencia pero solo con la condición de que no puedas volver a tu forma original?",
        idCategory: "que-prefieres",
      },
      {
        text: "¿Elegirías tener la capacidad de ver a través de las mentiras pero no poder decir la verdad o tener la habilidad de viajar a cualquier parte del mundo instantáneamente pero solo una vez al año?",
        idCategory: "que-prefieres",
      },
      {
        text: "¿Prefieres tener la capacidad de revivir un día de tu vida pero con la posibilidad de que algo salga mal o tener la habilidad de controlar tus sueños pero solo mientras duermes menos de cinco horas al día?",
        idCategory: "que-prefieres",
      },
    ],
  },
  {
    name: "Anecdota de...",
    description: "Desempolva recuerdos",
    background:
      "linear-gradient(138deg, rgba(131,164,212,1) 0%, rgba(166,156,219,1) 100%)",
    color: "rgba(131,164,212,1)",
    icon: AnectodasIcon,
    id: "anecdotas",
    questions: [
      {
        text: "Cuéntanos sobre un momento en el que te hayas sentido realmente orgulloso de ti mismo/a.",
        idCategory: "anecdotas",
      },
      {
        text: "¿Tienes alguna anécdota divertida de un viaje que hayas hecho?",
        idCategory: "anecdotas",
      },
      {
        text: "¿Recuerdas algún momento vergonzoso en una cita?",
        idCategory: "anecdotas",
      },
      {
        text: "¿Alguna vez te has encontrado en una situación realmente peligrosa? Cuéntanos qué pasó.",
        idCategory: "anecdotas",
      },
      {
        text: "¿Tienes alguna anécdota graciosa relacionada con un error tecnológico?",
        idCategory: "anecdotas",
      },
      {
        text: "¿Qué es lo más extraño que te ha pasado en el transporte público?",
        idCategory: "anecdotas",
      },
      {
        text: "¿Has tenido alguna experiencia paranormal? Si es así, descríbela.",
        idCategory: "anecdotas",
      },
      {
        text: "¿Alguna vez te has encontrado con una celebridad o figura famosa de manera inesperada?",
        idCategory: "anecdotas",
      },
      {
        text: "¿Cuál es la aventura más emocionante que has tenido al aire libre?",
        idCategory: "anecdotas",
      },
      {
        text: "¿Recuerdas alguna vez en la que hayas pasado vergüenza frente a un grupo de personas?",
        idCategory: "anecdotas",
      },
      {
        text: "¿Has tenido alguna experiencia divertida relacionada con un animal?",
        idCategory: "anecdotas",
      },
      {
        text: "¿Cuál es la broma más graciosa en la que hayas participado o sido testigo?",
        idCategory: "anecdotas",
      },
      {
        text: "¿Alguna vez te has perdido en un lugar desconocido? ¿Cómo lo resolviste?",
        idCategory: "anecdotas",
      },
      {
        text: "¿Tienes alguna anécdota de una fiesta o evento social que recuerdes con cariño?",
        idCategory: "anecdotas",
      },
      {
        text: "¿Has tenido alguna experiencia graciosa en un restaurante o establecimiento público?",
        idCategory: "anecdotas",
      },
      {
        text: "¿Recuerdas alguna vez en la que hayas tenido que improvisar para salir de una situación complicada?",
        idCategory: "anecdotas",
      },
      {
        text: "¿Tienes alguna anécdota de alguna actividad deportiva que hayas practicado?",
        idCategory: "anecdotas",
      },
      {
        text: "¿Alguna vez has protagonizado o sido testigo de una escena digna de una comedia romántica?",
        idCategory: "anecdotas",
      },
      {
        text: "¿Cuál es la broma más elaborada en la que hayas participado o sido víctima?",
        idCategory: "anecdotas",
      },
      {
        text: "¿Tienes alguna anécdota divertida relacionada con un malentendido cultural o de idioma?",
        idCategory: "anecdotas",
      },
    ],
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
  const index = randomIndFromInterval(0, questions.length - 1);

  const newQuestions = [
    ...questions.slice(0, index),
    ...questions.slice(index + 1),
  ];

  return [
    questions[index],
    newQuestions,
  ];
}
