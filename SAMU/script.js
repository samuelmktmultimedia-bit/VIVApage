/* =====================================================================
   CONTENIDO DEL SITIO
   - Todo el texto vive aquí, en español (es) e inglés (en).
   - Los módulos marcados con todo:true tienen texto de ejemplo:
     reemplázalo por la información real (con su fuente) antes de
     entregar el proyecto.
   - El módulo 4 (Ciberseguridad) ya trae información básica real.
   ===================================================================== */

const UI = {
  es: { check: "Comprobar", correct: "¡Correcto!", incorrect: "Incorrecto, inténtalo de nuevo.",
        start: "Iniciar", pause: "Pausar", reset: "Reiniciar", minutes: "min",
        completed: "completadas", chooseOne: "Elige una opción para ver el resultado.",
        filterPlaceholder: "Filtrar referencias...", home: "Volver a Inicio",
        footer: "Aplicación Multimedia Academica Samuel Restrepo Díaz-Curso Aplicaciones Multimedia UNAD",
        replaceMe: "Observar cuánto tiempo utilizamos las pantallas permite entender mejor nuestros hábitos digitales. No todo el tiempo frente a un dispositivo tiene el mismo propósito: algunas actividades son académicas, otras son necesarias y otras corresponden al entretenimiento o las redes sociales." },
  en: { check: "Check", correct: "Correct!", incorrect: "Try again.",
        start: "Start", pause: "Pause", reset: "Reset", minutes: "min",
        completed: "completed", chooseOne: "Choose an option to see the result.",
        filterPlaceholder: "Filter references...", home: "Back to Home",
        footer: "Academic Multimedia Application — Samuel Restrepo Díaz — Multimedia Applications Course, UNAD",
        replaceMe: "Content pending — replace this text with real information and cite the source." }
};

const DATA = {
  /* La pantalla "inicio" ya NO tiene botón en la barra de navegación:
     la replaces el grupo logo + título del <header> (botón #homeBtn). */
  nav: [
    { id: "m1",       es: "Bienestar Digital",             en: "Digital Wellbeing" },
    { id: "m2",       es: "Hábitos Saludables",            en: "Healthy Habits" },
    { id: "m3",       es: "Concentración y Tiempo",         en: "Focus & Time" },
    { id: "m4",       es: "Ciberseguridad",                 en: "Cybersecurity" },
    { id: "m5",       es: "Mi Plan Personal",               en: "My Personal Plan" },
    { id: "creditos", es: "Créditos",                       en: "Credits" }
  ],

  screens: {
    inicio: {
      /* Título corto de la marca + eslogan + descripción breve + subtítulo.
         El eslogan (slogan) va entre el título y el párrafo: es la frase
         corta de marca que resume el mensaje antes de la explicación. */
      es: {
        kicker: "VIVA &mdash; Virtual Intelligence &amp; Vitality for All",
        slogan: "Vive conectado. Vive equilibrado. Vive VIVA",
        text: "VIVA es un recurso interactivo para estudiantes universitarios que busca promover hábitos digitales saludables, seguros y equilibrados. Aquí podrás aprender sobre bienestar digital, uso consciente de pantallas, concentración, gestión del tiempo y ciberseguridad.",
        subtitle: "Propósito",
        body: "La aplicación te ayudará a reconocer tus hábitos tecnológicos, identificar pequeñas oportunidades de mejora y elegir una meta personal que puedas aplicar en tu vida académica y cotidiana."
      },
      en: {
        kicker: "VIVA &mdash; Virtual Intelligence &amp; Vitality for All",
        slogan: "Live connected. Live balanced. Live VIVA",
        text: "VIVA is an interactive resource for university students that aims to promote healthy, safe and balanced digital habits. Here you will learn about digital wellbeing, conscious screen use, focus, time management and cybersecurity.",
        subtitle: "Purpose",
        body: "The app will help you recognize your technology habits, identify small opportunities for improvement and choose a personal goal you can apply in your academic and everyday life."
      }
    },

    m1: { subs: [
      { id: "1-1", todo: true,
        image: "imagenes/subseccion 1.1.avif",
        imageAlt: { es: "Imagen sobre bienestar digital", en: "Image about digital wellbeing" },
        es: { title: "¿Qué es el bienestar digital?",
              paragraphs: [
                "La tecnología forma parte del estudio, la comunicación y el entretenimiento. El bienestar digital invita a utilizarla de una forma que apoye nuestra vida diaria, sin perder el equilibrio con el descanso, las relaciones y las actividades personales."
              ] },
        en: { title: "What is digital wellbeing?",
              paragraphs: [
                "Technology is part of study, communication and entertainment. Digital wellbeing invites us to use it in a way that supports our daily life, without losing balance with rest, relationships and personal activities."
              ] },
        interactive: { type: "flip", cards: [
          { front: { es: "Definición", en: "Definition" },
            back: { es: "El bienestar digital es la capacidad de mantener una relación saludable, consciente y equilibrada con la tecnología. Implica aprovechar los beneficios de las herramientas digitales y al mismo tiempo, reconocer y gestionar posibles efectos negativos como las distracciones, la sobrecarga de información o el uso excesivo de pantallas.",
                    en: "Digital wellbeing is the ability to maintain a healthy, conscious and balanced relationship with technology. It involves making the most of the benefits of digital tools while also recognizing and managing possible negative effects such as distraction, information overload or excessive screen use." } },
          { front: { es: "¿Por qué importa?", en: "Why it matters" },
            back: { es: "Para los estudiantes universitarios, la tecnología es una herramienta esencial: permite asistir a clases, investigar, entregar actividades y comunicarse. Sin embargo, las redes sociales y las largas sesiones frente a una pantalla pueden afectar la concentración y la organización. Desarrollar bienestar digital ayuda a usar la tecnología con mayor intención y a crear hábitos compatibles con el estudio y el descanso.",
                    en: "For university students, technology is an essential tool: it allows them to attend classes, research, submit assignments and communicate. However, social media and long sessions in front of a screen can affect concentration and organization. Developing digital wellbeing helps to use technology more intentionally and to build habits compatible with study and rest." } },
          { front: { es: "Dato clave", en: "Key fact" },
            back: { es: "<ul><li>El bienestar digital no significa dejar de usar dispositivos; significa usarlos con un propósito.</li><li>Los hábitos digitales incluyen el tiempo en pantalla, las notificaciones, la seguridad de las cuentas y las rutinas de descanso.</li><li>Pequeñas acciones, como silenciar notificaciones durante el estudio o tomar pausas, pueden apoyar una relación más equilibrada con la tecnología.</li><li>Cada persona puede identificar qué usos digitales le ayudan a cumplir sus objetivos y cuáles le generan distracción.</li></ul>",
                    en: "<ul><li>Digital wellbeing does not mean stopping the use of devices; it means using them with a purpose.</li><li>Digital habits include screen time, notifications, account security and rest routines.</li><li>Small actions, such as muting notifications while studying or taking breaks, can support a more balanced relationship with technology.</li><li>Each person can identify which digital uses help them achieve their goals and which ones cause distraction.</li></ul>" } }
        ]}
      },
      { id: "1-2", todo: true,
        image: "imagenes/subseccion 1.2.avif",
        imageAlt: { es: "Imagen sobre los beneficios del equilibrio digital", en: "Image about the benefits of digital balance" },
        es: { title: "Beneficios del equilibrio digital",
              paragraphs: [
                "El equilibrio digital consiste en usar la tecnología de una manera que apoye las actividades importantes de la vida diaria. Implica aprovechar sus beneficios para estudiar, comunicarse y organizarse, sin permitir que el uso de dispositivos afecte el descanso, la concentración, las relaciones o la tranquilidad personal."
              ] },
        en: { title: "Benefits of digital balance",
              paragraphs: [
                "Digital balance consists of using technology in a way that supports the important activities of daily life. It involves making the most of its benefits in order to study, communicate and organize oneself, without allowing the use of devices to affect rest, concentration, relationships or personal peace of mind."
              ] },
        interactive: { type: "choice", question: { es: "¿Qué beneficio te interesa saber más?", en: "Which benefit do you want to know more about?" },
          options: [
            { es: "Mejor sueño", en: "Better sleep",
              result: { es: "Reducir el uso no necesario de pantallas antes de dormir puede facilitar una rutina de descanso más tranquila. Evitar notificaciones, redes sociales o videos durante los minutos previos al sueño ayuda a separar el tiempo de conexión del momento de descanso.",
                        en: "Reducing unnecessary screen use before going to sleep can make a rest routine calmer. Avoiding notifications, social media or videos during the minutes before sleep helps to separate screen time from rest time." } },
            { es: "Más concentración", en: "More focus",
              result: { es: "Usar la tecnología con un propósito definido ayuda a reducir interrupciones durante el estudio. Silenciar notificaciones no esenciales, cerrar pestañas irrelevantes y trabajar por bloques cortos puede facilitar la atención en una tarea.",
                        en: "Using technology with a clear purpose helps reduce interruptions during study. Muting non-essential notifications, closing irrelevant tabs and working in short blocks can make it easier to focus on a task." } },
            { es: "Mejores relaciones", en: "Better relationships",
              result: { es: "Mantener momentos sin pantallas puede favorecer una comunicación más presente con familiares, amistades y compañeros. Establecer límites sencillos, como no revisar el celular durante una conversación o una comida, permite prestar mayor atención a las personas cercanas.",
                        en: "Keeping screen-free moments can encourage more present communication with family, friends and classmates. Setting simple boundaries, such as not checking your phone during a conversation or a meal, allows you to give the people around you more attention." } },
            { es: "Menos estrés", en: "Less stress",
              result: { es: "Organizar las notificaciones, limitar las interrupciones y definir horarios de conexión puede reducir la sensación de estar disponible todo el tiempo. Tener espacios breves sin mensajes ni redes sociales ayuda a recuperar atención y tranquilidad antes de continuar con otras actividades.",
                        en: "Organizing notifications, limiting interruptions and setting connection hours can reduce the feeling of always being available. Short periods without messages or social media help to recover attention and peace of mind before continuing with other activities." } }
          ],
          result: { es: "Buena elección — añade aquí un dato real sobre ese beneficio.", en: "Good choice — add a real fact about that benefit here." }
        }
      }
    ]},

    m2: { subs: [
      { id: "2-1", todo: true,
        es: { title: "Conciencia sobre el tiempo en pantalla" }, en: { title: "Screen-time awareness" },
        image: "imagenes/subseccion 2.1.jpg",
        imageAlt: { es: "Imagen sobre la conciencia del tiempo en pantalla", en: "Image about screen-time awareness" },
        imageLeft: true,
        interactive: { type: "slider", label: { es: "¿Cuántas horas usas pantallas en un día típico?", en: "How many hours do you use screens on a typical day?" },
          min: 0, max: 14, unitEs: "horas", unitEn: "hours",
          feedback: [
            { max: 2, es: "Tu uso no académico parece limitado. Continúa observando tus hábitos.", en: "Your non-academic use seems limited. Keep observing your habits." },
            { max: 5, es: "Puedes identificar qué aplicaciones utilizan más tiempo y planear pausas.", en: "You can identify which apps take the most time and plan breaks." },
            { max: 8, es: "Considera reducir gradualmente actividades que no aporten a tus propiedades.", en: "Consider gradually reducing activities that don't contribute to your goals." },
            { max: 999, es: "Elige una aplicación o momento del día en el que puedas realizar un cambio pequeño.", en: "Choose an app or moment of the day where you can make a small change." }
          ]}
      },
      { id: "2-2", todo: false,
        image: "imagenes/subseccion 2.2.webp",
        imageAlt: { es: "Imagen sobre pausas, postura y sueño", en: "Image about breaks, posture and sleep" },
        imageLeft: true,
        es: { title: "Pausas, postura y sueño",
              paragraphs: [
                "Durante sesiones largas de estudio, es útil hacer pausas breves, cambiar de posición y descansar la vista. También es importante crear una rutina que permita separar gradualmente el tiempo de pantalla del momento de descanso."
              ] },
        en: { title: "Breaks, posture and sleep",
              paragraphs: [
                "During long study sessions, it is helpful to take short breaks, change position and rest your eyes. It is also important to create a routine that gradually separates screen time from rest time."
              ] },
        interactive: { type: "checklist", items: [
          { es: "Tomo una pausa cada 30-40 minutos", en: "I take a break every 30-40 minutes" },
          { es: "Mantengo la pantalla a la altura de los ojos", en: "I keep the screen at eye level" },
          { es: "Evito pantallas 1 hora antes de dormir", en: "I avoid screens 1 hour before sleeping" },
          { es: "Hago estiramientos durante el día", en: "I stretch during the day" }
        ]}
      }
    ]},

    m3: { subs: [
      { id: "3-1", todo: true,
        image: "imagenes/subseccion 3.1.avif",
        imageAlt: { es: "Imagen sobre planificación del tiempo de estudio", en: "Image about study time planning" },
        es: { title: "Planifica tu tiempo de estudio",
              paragraphs: [
                "Planificar no significa llenar cada minuto del día. Se trata de identificar lo que debes hacer, reconocer qué tareas son más importantes y comenzar por una acción concreta. Una lista corta y realista puede facilitar el inicio de una sesión de estudio."
              ] },
        en: { title: "Plan your study time",
              paragraphs: [
                "Planning does not mean filling every minute of the day. It is about identifying what you need to do, recognizing which tasks are most important, and starting with a concrete action. A short, realistic list can make it easier to begin a study session."
              ] },
        interactive: { type: "timer", minutes: 25,
          label: { es: "Prueba una sesión de estudio enfocado en lo que haces", en: "Try a focused study session" } }
      },
      { id: "3-2", todo: true,
        image: "imagenes/subseccion 3.2.png",
        imageAlt: { es: "Imagen sobre reducir las distracciones digitales", en: "Image about reducing digital distractions" },
        es: { title: "Reduce las distracciones digitales",
              paragraphs: [
                "Las notificaciones, las redes sociales y las pestañas abiertas pueden interrumpir una actividad académica. Preparar el espacio de estudio y decidir qué aplicaciones son necesarias permite disminuir interrupciones y mantener la atención durante un periodo corto."
              ] }, en: { title: "Reduce digital distractions" },
        interactive: { type: "flip", decisionCards: true, cards: [
          { front: { es: "Notificaciones", en: "Notifications" }, back: { es: UI.es.replaceMe, en: UI.en.replaceMe } },
          { front: { es: "Redes sociales", en: "Social media" }, back: { es: UI.es.replaceMe, en: UI.en.replaceMe } },
          { front: { es: "Multitarea", en: "Multitasking" }, back: { es: UI.es.replaceMe, en: UI.en.replaceMe } }
        ]}
      }
    ]},

    m4: { subs: [
      { id: "4-1", todo: false,
        image: "imagenes/subseccion 4.1.jpg",
        imageAlt: { es: "Imagen sobre contraseñas y autenticación multifactor (MFA)", en: "Image about passwords and multi-factor authentication (MFA)" },
        imageBelow: true,
        es: { title: "Contraseñas y autenticación multifactor (MFA)",
              paragraphs: [
                "Una contraseña fuerte y única ayuda a proteger las cuentas importantes. La autenticación multifactor añade una verificación adicional, como un código enviado al teléfono o una confirmación desde una aplicación, antes de permitir el acceso."
              ]},
        en: { title: "Passwords and multi-factor authentication (MFA)",
              paragraphs: [
                "Use long passwords (at least 12 characters) combining upper and lower case, numbers and symbols.",
                "Don't reuse the same password across sites; if one leaks, every account using it is exposed.",
                "A password manager can generate and remember unique passwords for you.",
                "Turn on multi-factor authentication (MFA) whenever it's offered: besides your password, it asks for a second step (an authenticator app, a code, or a physical key). That way, even if someone steals your password, they still can't get in without that second factor."
              ]},
        interactive: { type: "quiz",
          question: { es: "¿Cuál de estas es la forma más segura?", en: "Which of these is the safest practice?" },
          options: [
            { es: "Usar la misma contraseña en todos tus sitios", en: "Using the same password on every site", correct: false },
            { es: "Activar la autenticación multifactor (MFA)", en: "Turning on multi-factor authentication (MFA)", correct: true },
            { es: "Compartir tu contraseña con un amigo de confianza", en: "Sharing your password with a trusted friend", correct: false },
            { es: "Usar tu fecha de nacimiento como contraseña", en: "Using your birth date as your password", correct: false }
          ],
          correctFeedback: { es: "Correcto. Usar contraseñas únicas y activar MFA reduce el riesgo de acceso no autorizado", en: "Correct. Using unique passwords and enabling MFA reduces the risk of unauthorized access" }}
      },
      { id: "4-2", todo: false,
        image: "imagenes/subseccion 4.2.png",
        imageAlt: { es: "Imagen sobre phishing y navegación segura", en: "Image about phishing and safe browsing" },
        es: { title: "Phishing y navegación segura",
              paragraphs: [
                "El phishing es un intento de engañar a una persona para que comparta contraseñas, datos personales o información financiera. Estos mensajes pueden llegar por correo electrónico, redes sociales, mensajes de texto o sitios web falsos."
              ]},
        en: { title: "Phishing and safe browsing",
              paragraphs: [
                "Phishing is a scam where someone impersonates a trusted entity (a bank, university, social network) to steal your information.",
                "Warning signs: urgent or threatening language, a sender with an odd domain, links that don't match the official site, and spelling mistakes.",
                "Before clicking, hover over a link to check the real URL without opening it.",
                "Check that the site uses HTTPS (the padlock in the address bar) before entering sensitive data.",
                "Never share your password or verification codes by email or message, even if it looks official."
              ]},
        interactive: { type: "quiz",
          activityTitle: { es: "¿Seguro o Sospechoso?", en: "Safe or Suspicious?" },
          scenario: { es: "Tu cuenta universitaria será bloqueada hoy. Haz click aquí e ingresa tu contraseña para evitarlo.",
                      en: "Your university account will be blocked today. Click here and enter your password to prevent it." },
          question: { es: "¿Es seguro o sospechoso?", en: "Is it safe or suspicious?" },
          options: [
            { es: "Seguro", en: "Safe", correct: false },
            { es: "Sospechoso", en: "Suspicious", correct: true }
          ],
          correctFeedback: { es: "Correcto. Este mensaje usa urgencia y solicita una contraseña mediante un enlace. Verifica siempre la información por los canales oficiales.",
                            en: "Correct. This message uses urgency and requests a password through a link. Always verify information through official channels." }}
      }
    ]},

    m5: { subs: [
      { id: "5-1", todo: true,
        image: "imagenes/subseccion 5.1.jpg",
        imageAlt: { es: "Imagen sobre autoevaluación de hábitos digitales", en: "Image about digital habits self-assessment" },
        imageLeft: true,
        es: { title: "Autoevaluación",
              paragraphs: [
                "Esta actividad no ofrece un diagnóstico médico ni psicológico. Su propósito es ayudarte a observar algunos hábitos relacionados con el uso de pantalla, las distracciones, la organización y la seguridad de tus cuentas. Responde con honestidad pensando en tu comportamiento habitual."
              ],
              footerText: "Gracias por reflexionar sobre tus hábitos, identifica una acción pequeña que quieres fortalecer." },
        en: { title: "Self-assessment" },
        interactive: { type: "rating",
          subtitle: { es: "Responde según tu experiencia actual", en: "Answer based on your current experience" },
          statements: [
            { es: "Me distraigo con notificaciones mientras estudio", en: "I get distracted with notifications while studying" },
            { es: "Realizo pausas durante sesiones largas frente a una pantalla", en: "I take breaks during long sessions in front of a screen" },
            { es: "Organizo mis tareas antes de comenzar una sesión de estudio", en: "I organize my tasks before starting a study session" },
            { es: "Utilizo contraseñas diferentes para cuentas importantes", en: "I use different passwords for important accounts" },
            { es: "Reviso o controlo mi tiempo de pantalla", en: "I review or control my screen time" }
          ],
          options: [
            { es: "Nunca", en: "Never" },
            { es: "A veces", en: "Sometimes" },
            { es: "Siempre", en: "Always" }
          ]}
      },
      { id: "5-2", todo: true,
        image: "imagenes/subseccion 5.2.jpg",
        imageAlt: { es: "Imagen sobre cómo elegir una meta personal", en: "Image about choosing a personal goal" },
        es: { title: "Elige tu meta",
             paragraphs: ["Elegir una meta pequeña y clara facilita que el aprendizaje se convierta en una acción. Enfócate en una meta que puedas realizar en los próximos días."] },
        en: { title: "Choose your goal" },
        interactive: { type: "choice", question: { es: "¿Qué meta quieres trabajar esta semana?", en: "Which goal do you want to work on this week?" },
          options: [
            { es: "Estudiar durante 25 minutos con las notificaciones no esenciales silenciadas", en: "Study for 25 minutes with non-essential notifications silenced" },
            { es: "Realizar una pausa activa durante cada bloque de estudio", en: "Take an active break during each study block" },
            { es: "Activar la autenticación multifactor en una cuenta importante", en: "Turn on multi-factor authentication on an important account" },
            { es: "Evitar revisar redes sociales durante una sesión de estudio", en: "Avoid checking social media during a study session" },
            { es: "Evitar el uso no académico del celular durante 30 minutos antes de dormir", en: "Avoid non-academic phone use for 30 minutes before bed" }
          ],
          result: { es: "Meta guardada para esta sesión. ¡Éxitos esta semana!", en: "Goal saved for this session. Good luck this week!" }
        }
      }
    ]},

    creditos: {
      es: { title: "Créditos y referencias",
            text: "La información presentada en esta aplicación fue elaborada a partir de fuentes periodísticas, institucionales y relacionadas con la memoria histórica, las cuales se encuentran referenciadas bajo las normas APA. Las imágenes utilizadas actualmente son de carácter provisional y deberán ser sustituidas por fotografías propias antes de la entrega definitiva. En caso de utilizar imágenes pertenecientes a terceros, se debe indicar y citar correctamente su respectiva fuente.",
            note: "Aclaración: las fuentes consultadas fueron utilizadas como referentes conceptuales para la elaboración, organización y redacción de los contenidos de la aplicación.",
            references: [
              "Cybersecurity and Infrastructure Security Agency. (s. f.). Why a strong password isn't enough: Your guide to multifactor authentication. https://www.cisa.gov/resources-tools/training/why-strong-password-isnt-enough-your-guide-multifactor-authentication",
              "Organisation for Economic Co-operation and Development. (2024). The impact of digital technologies on well-being. https://www.oecd.org/content/dam/oecd/en/publications/reports/2024/11/the-impact-of-digital-technologies-on-well-being_848e9736/cb173652-en.pdf",
              "Ministerio de Salud y Protección Social. (2025). Orientaciones para el aprovechamiento de la virtualidad como oportunidad para la promoción de la salud mental y el fortalecimiento de factores protectores. https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/VS/PP/ENT/orientaciones-aprovechamiento-virtualidad-salud-mental.pdf",
              "Ministerio de Tecnologías de la Información y las Comunicaciones. (2023). Estrategia Nacional Digital de Colombia 2023–2026. https://www.mintic.gov.co/portal/715/articles-334120_recurso_1.pdf",
              "World Health Organization. (2020). WHO guidelines on physical activity and sedentary behaviour. https://www.who.int/publications/i/item/9789240015128",
              "University of North Carolina at Chapel Hill, Learning Center. (s. f.). Digital distractions. https://learningcenter.unc.edu/tips-and-tools/decreasing-digital-distractions/",
              "Ministerio de Tecnologías de la Información y las Comunicaciones. (s. f.). Política de seguridad digital. https://www.mintic.gov.co/portal/inicio/Atencion-y-Servicio-a-la-Ciudadania/Preguntas-frecuentes/15430:Politica-de-Seguridad-Digital",
              "Ministerio de Tecnologías de la Información y las Comunicaciones. (s. f.). Seguridad digital: el gran desafío de estar en el ciberespacio. https://gobiernodigital.mintic.gov.co/portal/Noticias/117950:Seguridad-digital-el-gran-desafio-de-estar-en-el-ciberespacio"
            ] },
      en: { title: "Credits and references",
            text: "The information presented in this application was prepared from the following sources, referenced under APA standards:",
            note: "Note: the sources consulted were used as conceptual references for the development, organization and writing of the application's contents.",
            references: [
              "Cybersecurity and Infrastructure Security Agency. (s. f.). Why a strong password isn't enough: Your guide to multifactor authentication. https://www.cisa.gov/resources-tools/training/why-strong-password-isnt-enough-your-guide-multifactor-authentication",
              "Organisation for Economic Co-operation and Development. (2024). The impact of digital technologies on well-being. https://www.oecd.org/content/dam/oecd/en/publications/reports/2024/11/the-impact-of-digital-technologies-on-well-being_848e9736/cb173652-en.pdf",
              "Ministerio de Salud y Protección Social. (2025). Orientaciones para el aprovechamiento de la virtualidad como oportunidad para la promoción de la salud mental y el fortalecimiento de factores protectores. https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/VS/PP/ENT/orientaciones-aprovechamiento-virtualidad-salud-mental.pdf",
              "Ministerio de Tecnologías de la Información y las Comunicaciones. (2023). Estrategia Nacional Digital de Colombia 2023–2026. https://www.mintic.gov.co/portal/715/articles-334120_recurso_1.pdf",
              "World Health Organization. (2020). WHO guidelines on physical activity and sedentary behaviour. https://www.who.int/publications/i/item/9789240015128",
              "University of North Carolina at Chapel Hill, Learning Center. (s. f.). Digital distractions. https://learningcenter.unc.edu/tips-and-tools/decreasing-digital-distractions/",
              "Ministerio de Tecnologías de la Información y las Comunicaciones. (s. f.). Política de seguridad digital. https://www.mintic.gov.co/portal/inicio/Atencion-y-Servicio-a-la-Ciudadania/Preguntas-frecuentes/15430:Politica-de-Seguridad-Digital",
              "Ministerio de Tecnologías de la Información y las Comunicaciones. (s. f.). Seguridad digital: el gran desafío de estar en el ciberespacio. https://gobiernodigital.mintic.gov.co/portal/Noticias/117950:Seguridad-digital-el-gran-desafio-de-estar-en-el-ciberespacio"
            ] }
    }
  }
};

/* =====================================================================
   ESTADO Y RENDERIZADO
   ===================================================================== */

let lang = "es";
let currentScreen = "inicio";
let currentSub = null;   // id de la subsección activa dentro de un módulo
let timerState = {};     // guarda intervalos de temporizador por id

function pick(obj) { return obj[lang]; }

function setScreen(id) {
  currentScreen = id;
  const screen = DATA.screens[id];
  currentSub = screen.subs ? screen.subs[0].id : null;
  render();
}
function setSub(id) { currentSub = id; render(); }

function toggleLang() {
  lang = lang === "es" ? "en" : "es";
  document.documentElement.lang = lang;
  document.getElementById("langToggle").textContent = lang === "es" ? "EN" : "ES";
  render();
}

function renderNav() {
  const nav = document.getElementById("mainNav");
  nav.innerHTML = "";
  DATA.nav.forEach(item => {
    const btn = document.createElement("button");
    btn.className = "nav-btn" + (item.id === currentScreen ? " active" : "");
    btn.textContent = item[lang];
    btn.onclick = () => setScreen(item.id);
    nav.appendChild(btn);
  });
}

/* El botón de Inicio vive en el <header> (logo + título). No lleva ningún
   cambio de aspecto al estar activo —el header se ve siempre igual—, pero se
   le pone .active y aria-current para que un lector de pantalla anuncie en qué
   pantalla estamos. La clase .active queda como punto de enganche por si más
   adelante quieres darle algún estilo. */
function renderHome() {
  const home = document.getElementById("homeBtn");
  home.classList.toggle("active", currentScreen === "inicio");
  home.setAttribute("aria-label", UI[lang].home);
  home.setAttribute("aria-current", currentScreen === "inicio" ? "page" : "false");
}

function renderSubNav() {
  const subnav = document.getElementById("subNav");
  const screen = DATA.screens[currentScreen];
  if (!screen.subs) { subnav.hidden = true; subnav.innerHTML = ""; return; }
  subnav.hidden = false;
  subnav.innerHTML = "";
  screen.subs.forEach((sub, i) => {
    const btn = document.createElement("button");
    btn.className = "subnav-btn" + (sub.id === currentSub ? " active" : "");
    btn.textContent = (i + 1) + ". " + pick(sub).title;
    btn.onclick = () => setSub(sub.id);
    subnav.appendChild(btn);
  });
}

function renderContent() {
  const content = document.getElementById("content");
  content.innerHTML = "";
  const screen = DATA.screens[currentScreen];

  if (currentScreen === "inicio") {
    /* el logo (.lead-logo) Envuelve al título (.brand-kicker), al eslogan
       (.brand-slogan) y al primer párrafo (.screen-intro): así queda a la
       izquierda de los tres. Título, eslogan y párrafo van juntos en
       .intro-text, apilados: el eslogan queda bajo el título y sobre el
       párrafo. */
    content.innerHTML = `<div class="intro-lead">`
      + `<img class="lead-logo" src="imagenes/VIVA LOGO 3.png" alt="${lang === "es" ? "Logotipo de VIVA" : "VIVA logo"}">`
      + `<div class="intro-text">`
      + `<div class="intro-box">`
      + `<p class="brand-kicker">${pick(screen).kicker}</p>`
      + `<p class="brand-slogan">${pick(screen).slogan}</p>`
      + `<p class="screen-intro">${pick(screen).text}</p>`
      + `</div>`
      + `</div>`
      + `</div>`
      + `<div class="intro-box">`
      + `<h2 class="screen-subtitle">${pick(screen).subtitle}</h2>`
      + `<p class="screen-body">${pick(screen).body}</p>`
      + `</div>`;
    return;
  }
  if (currentScreen === "creditos") {
    renderCreditos(content, screen);
    return;
  }

  // pantalla de módulo: muestra la subsección activa
  const sub = screen.subs.find(s => s.id === currentSub) || screen.subs[0];
  const s = pick(sub);
  const block = document.createElement("div");
  block.className = "section-block" + (sub.id === "1-1" ? " bienestar-intro" : "") + (sub.id === "1-2" ? " beneficios-intro" : "") + (sub.id === "2-1" ? " conciencia-tiempo" : "") + (sub.id === "2-2" ? " pausas-postura" : "") + (sub.id === "3-1" ? " planifica-estudio" : "") + (sub.id === "3-2" ? " distracciones-digitales" : "") + (sub.id === "4-1" ? " mfa-section" : "") + (sub.id === "4-2" ? " phishing-seguridad" : "") + (sub.id === "5-1" ? " autoevaluacion" : "") + (sub.id === "5-2" ? " elige-tu-meta" : "");
  let html = "";
  if (sub.image) {
    // Layout con imagen: posición según sub.imageLeft (default: derecha)
    const imgTag = `<img class="section-img" src="${sub.image}" alt="${sub.imageAlt ? sub.imageAlt[lang] : ""}">`;
    if (sub.imageBelow) {
      // Imagen debajo del título
      html += `<h3>${s.title}</h3>`
        + imgTag;
      if (s.paragraphs) s.paragraphs.forEach(p => { html += `<p>${p}</p>`; });
      if (sub.todo && !s.paragraphs) html += `<p>${UI[lang].replaceMe}</p>`;
    } else {
      html += `<div class="section-flex${sub.imageLeft ? " img-left" : ""}">`
        + `<div class="section-text">`
        + `<h3>${s.title}</h3>`;
      if (s.paragraphs) s.paragraphs.forEach(p => { html += `<p>${p}</p>`; });
      if (sub.todo && !s.paragraphs) html += `<p>${UI[lang].replaceMe}</p>`;
      html += `</div>`
        + imgTag
        + `</div>`;
    }
  } else {
    html += `<h3>${s.title}</h3>`;
    html += `<div class="media-placeholder">${lang === "es" ? "Espacio para imagen / ilustración / clip corto" : "Space for an image / illustration / short clip"}</div>`;
    if (s.paragraphs) s.paragraphs.forEach(p => { html += `<p>${p}</p>`; });
    if (sub.todo && !s.paragraphs) html += `<p>${UI[lang].replaceMe}</p>`;
  }
  
  block.innerHTML = html;
  content.appendChild(block);

  const widgetHost = document.createElement("div");
  block.appendChild(widgetHost);
  renderInteractive(widgetHost, sub.interactive, sub.id);
  if (s.footerText) {
    const footer = document.createElement("p");
    footer.className = "section-footer";
    footer.textContent = s.footerText;
    block.appendChild(footer);
  }
}

function renderCreditos(content, screen) {
  const s = pick(screen);
  content.innerHTML = `<h1 class="screen-title">${s.title}</h1><p class="screen-intro">${s.text}</p>`;

  if (s.note) {
    const note = document.createElement("p");
    note.className = "credits-note";
    note.textContent = s.note;
    content.appendChild(note);
  }

  const list = document.createElement("ul");
  list.className = "credits-list";
  s.references.forEach(ref => {
    const li = document.createElement("li");
    li.textContent = ref;
    list.appendChild(li);
  });
  content.appendChild(list);
}

/* ---------- despachador de widgets interactivos ---------- */
function renderInteractive(host, cfg, subId) {
  if (!cfg) return;
  if (cfg.type === "flip") return renderFlip(host, cfg, subId);
  if (cfg.type === "quiz") return renderQuiz(host, cfg);
  if (cfg.type === "slider") return renderSlider(host, cfg);
  if (cfg.type === "checklist") return renderChecklist(host, cfg);
  if (cfg.type === "choice") return renderChoice(host, cfg, subId);
  if (cfg.type === "timer") return renderTimer(host, cfg, subId);
  if (cfg.type === "rating") return renderRating(host, cfg);
}

function renderFlip(host, cfg, subId) {
  const wrap = document.createElement("div");
  const instr = lang === "es" ? cfg.instructionEs : cfg.instructionEn;
  wrap.innerHTML = subId === "3-2" ? "" : (instr ? `<p><em>${instr}</em></p>` : `<p><em>${lang === "es" ? "Toca una tarjeta para ver más." : "Tap a card to reveal more."}</em></p>`);
  const grid = document.createElement("div");
  grid.className = "flip-grid";
  /* las tarjetas de la subsección 1 (1-1) llevan una clase propia para poder
     darles un color de título distinto sin tocar las demás flip-card */
  if (subId === "1-1") grid.classList.add("amber-cards");
  /* las tarjetas de la subsección 3-2 (Reduce las distracciones digitales)
     llevan su propia clase para colorear solo sus títulos (Notificaciones,
     Redes sociales, Multitarea) sin tocar las demás flip-card */
  if (subId === "3-2") grid.classList.add("distraction-cards");
  cfg.cards.forEach(card => {
    const el = document.createElement("div");
    el.className = "flip-card";
    el.innerHTML = `<div class="front">${card.front[lang]}</div>`
      + (cfg.decisionCards ? "" : `<div class="back">${card.back[lang]}</div>`);
    if (!cfg.decisionCards) {
      el.onclick = () => el.classList.toggle("open");
    }
    if (cfg.decisionCards) {
      const choices = document.createElement("div");
      choices.className = "card-choices";
      const btnKeep = document.createElement("button");
      btnKeep.type = "button";
      btnKeep.className = "choice-btn keep";
      btnKeep.textContent = lang === "es" ? "Mantener" : "Keep";
      const btnSilence = document.createElement("button");
      btnSilence.type = "button";
      btnSilence.className = "choice-btn silence";
      btnSilence.textContent = lang === "es" ? "Silenciar" : "Silence";
      btnKeep.onclick = (e) => {
        e.stopPropagation();
        choices.querySelectorAll(".choice-btn").forEach(b => b.classList.remove("selected"));
        btnKeep.classList.add("selected");
      };
      btnSilence.onclick = (e) => {
        e.stopPropagation();
        choices.querySelectorAll(".choice-btn").forEach(b => b.classList.remove("selected"));
        btnSilence.classList.add("selected");
      };
      choices.appendChild(btnKeep);
      choices.appendChild(btnSilence);
      el.appendChild(choices);
    }
    grid.appendChild(el);
  });
  wrap.appendChild(grid);
  host.appendChild(wrap);
}

function renderQuiz(host, cfg) {
  const wrap = document.createElement("div");
  wrap.className = "quiz-box";
  let introHtml = "";
  if (cfg.activityTitle) introHtml += `<p class="quiz-activity-title"><strong>${cfg.activityTitle[lang]}</strong></p>`;
  if (cfg.scenario) introHtml += `<p class="quiz-scenario">${cfg.scenario[lang]}</p>`;
  introHtml += `<p><strong>${cfg.question[lang]}</strong></p>`;
  wrap.innerHTML = introHtml;
  const feedback = document.createElement("div");
  feedback.className = "quiz-feedback";
  const retryBtn = document.createElement("button");
  retryBtn.type = "button";
  retryBtn.className = "quiz-retry-btn";
  retryBtn.textContent = lang === "es" ? "Reintentar" : "Try again";
  retryBtn.style.display = "none";
  retryBtn.onclick = () => {
    wrap.querySelectorAll(".quiz-option").forEach(b => {
      b.disabled = false;
      b.classList.remove("correct", "incorrect");
    });
    feedback.textContent = "";
    feedback.className = "quiz-feedback";
    retryBtn.style.display = "none";
  };
  cfg.options.forEach(opt => {
    const btn = document.createElement("button");
    btn.className = "quiz-option";
    btn.textContent = opt[lang];
    btn.onclick = () => {
      wrap.querySelectorAll(".quiz-option").forEach(b => b.disabled = true);
      if (opt.correct) {
        btn.classList.add("correct");
        feedback.textContent = cfg.correctFeedback ? cfg.correctFeedback[lang] : UI[lang].correct;
        feedback.className = "quiz-feedback correct";
        retryBtn.style.display = "none";
      } else {
        btn.classList.add("incorrect");
        feedback.textContent = UI[lang].incorrect;
        feedback.className = "quiz-feedback incorrect";
        retryBtn.style.display = "inline-block";
      }
    };
    wrap.appendChild(btn);
  });
  wrap.appendChild(feedback);
  wrap.appendChild(retryBtn);
  host.appendChild(wrap);
}

function renderSlider(host, cfg, subId) {
  const wrap = document.createElement("div");
  wrap.className = "slider-box" + (subId === "2-1" ? " slider-purple" : "");
  const unit = lang === "es" ? cfg.unitEs : cfg.unitEn;
  wrap.innerHTML = `<p>${cfg.label[lang]}</p>
    <input type="range" min="${cfg.min}" max="${cfg.max}" value="${Math.round((cfg.min + cfg.max) / 2)}">
    <p><span class="slider-value"></span> ${unit}</p>
    <p class="slider-feedback"></p>`;
  const input = wrap.querySelector("input");
  const valueEl = wrap.querySelector(".slider-value");
  const feedbackEl = wrap.querySelector(".slider-feedback");
  const update = () => {
    valueEl.textContent = input.value;
    const v = Number(input.value);
    const tier = cfg.feedback.find(f => v <= f.max);
    feedbackEl.textContent = tier ? tier[lang] : "";
  };
  input.oninput = update;
  update();
  host.appendChild(wrap);
}

function renderChecklist(host, cfg) {
  const wrap = document.createElement("div");
  const list = document.createElement("ul");
  list.className = "checklist";
  const counter = document.createElement("p");
  counter.className = "checklist-counter";
  const updateCounter = () => {
    const total = list.querySelectorAll("input").length;
    const done = list.querySelectorAll("input:checked").length;
    counter.textContent = `${done}/${total} ${UI[lang].completed}`;
  };
  cfg.items.forEach((item, i) => {
    const li = document.createElement("li");
    const cb = document.createElement("input");
    cb.type = "checkbox";
    cb.id = "chk-" + i;
    cb.onchange = updateCounter;
    const label = document.createElement("label");
    label.htmlFor = cb.id;
    label.textContent = item[lang];
    li.appendChild(cb);
    li.appendChild(label);
    list.appendChild(li);
  });
  wrap.appendChild(list);
  wrap.appendChild(counter);
  host.appendChild(wrap);
  updateCounter();
}

function renderChoice(host, cfg, subId) {
  const wrap = document.createElement("div");
  wrap.innerHTML = `<p><strong style="color: #F59E0B;">${cfg.question[lang]}</strong></p>`;
  const grid = document.createElement("div");
  grid.className = "choice-grid";
  let selectedGoal = null;   // texto de la meta elegida en esta sesión
  /* En la subsección "Elige tu meta" (5-2) no se muestra el mensaje de
     resultado ("Meta guardada para esta sesión..."): la confirmación es el
     botón "Crear mi plan" de más abajo. El resto de secciones con este
     widget (p. ej. "Beneficios del equilibrio digital") sí lo conservan. */
  const result = subId === "5-2" ? null : document.createElement("p");
  if (result) {
    result.className = "choice-result";
    result.textContent = UI[lang].chooseOne;
  }
  cfg.options.forEach(opt => {
    const btn = document.createElement("button");
    btn.className = "choice-btn";
    btn.textContent = opt[lang];
    btn.onclick = () => {
      grid.querySelectorAll(".choice-btn").forEach(b => b.classList.remove("selected"));
      btn.classList.add("selected");
      if (result) result.textContent = (opt.result ? opt.result[lang] : cfg.result[lang]);
      selectedGoal = opt[lang];
    };
    grid.appendChild(btn);
  });
  wrap.appendChild(grid);
  if (result) wrap.appendChild(result);

  /* Solo en la subsección "Elige tu meta" (5-2): botón "Crear mi plan"
     que genera el mensaje de la meta VIVA con la opción seleccionada. */
  if (subId === "5-2") {
    const planWrap = document.createElement("div");
    planWrap.className = "plan-creator";
    const planBtn = document.createElement("button");
    planBtn.type = "button";
    planBtn.className = "plan-btn";
    planBtn.textContent = lang === "es" ? "Crear mi plan" : "Create my plan";
    const planMsg = document.createElement("p");
    planMsg.className = "plan-message";
    planBtn.onclick = () => {
      if (!selectedGoal) {
        planMsg.textContent = lang === "es"
          ? "Primero selecciona una meta de la lista."
          : "First, pick a goal from the list.";
        planMsg.classList.add("show");
        return;
      }
      planMsg.textContent = lang === "es"
        ? `Mi meta VIVA: Esta semana voy a ${selectedGoal}. Revisaré mi avance al finalizar la semana.`
        : `My VIVA goal: This week I will ${selectedGoal}. I will review my progress at the end of the week.`;
      planMsg.classList.add("show");
    };
    planWrap.appendChild(planBtn);
    planWrap.appendChild(planMsg);
    wrap.appendChild(planWrap);
  }

  host.appendChild(wrap);
}

function renderRating(host, cfg) {
  const wrap = document.createElement("div");
  wrap.className = "rating-box";
  if (cfg.subtitle) {
    const sub = document.createElement("p");
    sub.className = "rating-subtitle";
    sub.textContent = cfg.subtitle[lang];
    wrap.appendChild(sub);
  }
  cfg.statements.forEach((stmt, idx) => {
    const row = document.createElement("div");
    row.className = "rating-row";
    const text = document.createElement("p");
    text.className = "rating-text";
    text.textContent = stmt[lang];
    row.appendChild(text);
    const btns = document.createElement("div");
    btns.className = "rating-btns";
    cfg.options.forEach(opt => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "rating-btn";
      btn.textContent = opt[lang];
      btn.onclick = () => {
        btns.querySelectorAll(".rating-btn").forEach(b => b.classList.remove("selected"));
        btn.classList.add("selected");
      };
      btns.appendChild(btn);
    });
    row.appendChild(btns);
    wrap.appendChild(row);
  });
  host.appendChild(wrap);
}

function renderTimer(host, cfg, subId) {
  const wrap = document.createElement("div");
  wrap.className = "timer-box";
  let seconds = cfg.minutes * 60;
  wrap.innerHTML = `<p>${cfg.label[lang]}</p>
    <div class="timer-display"></div>
    <div class="timer-controls">
      <button class="btn-start"></button>
      <button class="btn-reset"></button>
    </div>`;
  const display = wrap.querySelector(".timer-display");
  const startBtn = wrap.querySelector(".btn-start");
  const resetBtn = wrap.querySelector(".btn-reset");
  const format = () => {
    const m = String(Math.floor(seconds / 60)).padStart(2, "0");
    const s = String(seconds % 60).padStart(2, "0");
    display.textContent = `${m}:${s}`;
  };
  const clearTimerFor = () => { if (timerState[subId]) { clearInterval(timerState[subId]); timerState[subId] = null; } };
  startBtn.textContent = UI[lang].start;
  resetBtn.textContent = UI[lang].reset;
  startBtn.onclick = () => {
    if (timerState[subId]) { clearTimerFor(); startBtn.textContent = UI[lang].start; return; }
    startBtn.textContent = UI[lang].pause;
    timerState[subId] = setInterval(() => {
      if (seconds > 0) { seconds--; format(); }
      else { clearTimerFor(); startBtn.textContent = UI[lang].start; }
    }, 1000);
  };
  resetBtn.onclick = () => { clearTimerFor(); seconds = cfg.minutes * 60; startBtn.textContent = UI[lang].start; format(); };
  format();
  host.appendChild(wrap);
}

function renderFooter() {
  document.getElementById("footerText").textContent = UI[lang].footer;
}

function render() {
  renderHome();
  renderNav();
  renderSubNav();
  renderContent();
  renderFooter();
}

document.getElementById("langToggle").onclick = toggleLang;
document.getElementById("homeBtn").onclick = () => setScreen("inicio");
render();
