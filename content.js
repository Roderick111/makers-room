// content.js — All translatable text for Makers Room website
// Structure: { en, fr, ru } with identical keys

const CONTENT = {
  en: {
    brand: "Makers Room",
    city: "Lyon",
    year: "2026",
    cohort: "S01 · Saturdays",

    format: "in-person in lyon · 3 hours/week · free · international",
    tagline_hero: "ready to build your thing alongside 15 people who give a shit?",
    primaryCta: "join s01",
    secondaryCta: "how it works ↓",

    navJoin: "join",
    navLibrary: "library",

    sceneTitle: "the room",
    scene: "saturday morning. a long table in a cafe. everyone is building something different. someone shares their screen, walks through how they shipped a working prototype overnight or set up a marketing campaign from scratch. you watch, then try it on your own project with people around who will help when you get stuck",
    scene2: "the cafe noise fades. for three hours, nobody is alone with their project. you walk in with an idea and walk out with progress",
    sceneTime: "saturday · 09:30 — 12:30 · a cafe in lyon",

    diagTitle: "be honest. what are you doing right now?",
    diagnostic: [
      { q: "going to cafes and coworkings. still building alone", a: "proximity without relationship changes nothing" },
      { q: "set yourself a deadline last month. missed it. set another one", a: "promises to yourself don't stick" },
      { q: "signed up for an AI course. watched two videos. changed nothing", a: "courses teach knowledge. you need to apply it" },
      { q: "googled your problem for an hour. got generic answers", a: "context matters more than advice" },
      { q: "joined a discord. 500 people, nobody knows your project", a: "big communities are just small crowds" },
    ],

    notTitle: "this is not",
    notThis: [
      ["not a coworking space", "people know your project"],
      ["not an accelerator", "build what excites you"],
      ["not a course", "learn by building"],
      ["not a networking club", "we ship, not talk"],
      ["not a meetup", "same people, every saturday, for months"],
    ],
    notExtras: [
      "got a day job? most of us do. saturday mornings, 3 hours",
      "not technical? good. the room needs you",
      "haven't shipped yet? in-progress counts",
      "not in lyon? paris next year. online community now",
    ],

    howTitle: "how it works",
    weekly: [
      { t: "opening round", d: "what you shipped, where you're stuck, did you complete last week's challenge" },
      { t: "hot seats", d: "2-3 people who are most stuck get the room's full attention for 15 minutes each" },
      { t: "work block", d: "heads-down building toward this week's shared challenge. everyone on their own project, side by side" },
      { t: "closing", d: "how you did. next week's challenge announced. one commitment, said out loud" },
    ],
    howOnline: "can't make it in person one week? you can join online. we're flexible",

    whoTitle: "who is this for",
    personas: [
      {
        q: "you want to build your own thing but don't know where to start?",
        quote: "I have this idea I've been thinking about for a year. I'm not a developer. I signed up for an AI course, watched two videos, but I still don't know how to actually make something real",
        solve: "we show you the tools, the workflows, and build alongside you. by the end of the first month you'll have shipped something real"
      },
      {
        q: "you're building solo and it's getting hard to keep going?",
        quote: "I go to cafes and coworkings but I still ship things alone and nobody around me cares. some weeks I can't make myself sit down and work",
        solve: "same people every week who know your project. accountability, feedback, and company when you need it"
      },
      {
        q: "you want to create something while keeping your day job?",
        quote: "I work 35 hours a week. I set myself a deadline last month, missed it, set another one. I've been dreaming about my own business for years but never had the right people around to do it",
        solve: "saturday mornings, 3 hours a week. most of us have jobs too. you make one commitment per week, out loud, to people who'll ask about it next saturday"
      },
    ],
    alsoFor: [
      ["developers", "stop building alone, get real feedback weekly"],
      ["operators & marketers", "learn to ship products yourself with AI"],
      ["designers", "turn your mockups into working products"],
      ["career-changers", "your industry experience is your unfair advantage"],
    ],

    aiTitle: "no technical background needed",
    aiText1: "you've had an idea for months or years. you thought you needed a developer or money to get started. you don't anymore. AI changed what one person can build",
    aiText2: "we show you the tools and workflows to build products and find customers. then we explore what's possible together",
    aiLibraryIntro: "want to see some useful things? we have a prompt library for product building",
    aiLibraryCta: "browse the prompts library",
    aiTable: [
      { before: "landing page", beforeTime: "a week with a freelancer", now: "one afternoon, yourself" },
      { before: "market research", beforeTime: "two weeks", now: "customer segments with jtbd in one session" },
      { before: "prototype", beforeTime: "months finding a developer", now: "working prototype in one weekend" },
      { before: "product spec", beforeTime: "a week of writing", now: "prd from a conversation with ai in one hour" },
      { before: "financial model", beforeTime: "days with spreadsheets", now: "working model in one session" },
    ],
    aiTableHeaders: { artifact: "artifact", before: "before", now: "now" },

    marqueeLabel: "what people are building",

    joinTitle: "join",
    joinPitch: "write me what you're building. we'll meet over coffee, discuss plans and ideas. if it clicks, come saturday",
    joinFree: "free. no fees. no equity. no paywall. ever",
    joinWhy: "I built this because I needed such a room and couldn't find it. there's no business model, I simply know from experience how hard it is to build in isolation, without any structure",

    founderBio: `i'm <a href="https://linkedin.com/in/daniel-mathias-medina" style="color: var(--green); text-decoration: underline">Daniel</a>. product background: fintech COO where i <a href="https://daniel-medina.framer.website/xlend" style="color: var(--green); text-decoration: underline">worked on a European crowdfunding license</a>, biotech partnerships, three startups from scratch. i build with AI every day, love shipping sales process automations. before that i solo-built a <a href="https://auror-academy.beautiful-apps.com/" style="color: var(--green); text-decoration: underline">full-stack AI game</a> from zero to production. <a href="https://daniel-medina.framer.website/" style="color: var(--green); text-decoration: underline">full portfolio here</a>`,
    founderStory: "i moved to lyon two years ago and have been building solo since. i needed a room like this and couldn't find it. there's no business model here, i simply know from experience how hard it is to build in isolation, without any structure",
    founderTitle: "who started this",

    bottomLinks: { faq: "faq", join: "join s01", demos: "s01 demos", os: "os" },
    bottomPin: "introducing s02 + paris",
  },

  fr: {
    brand: "Makers Room",
    city: "Lyon",
    year: "2026",
    cohort: "S01 · Samedis",

    format: "en personne à lyon · 3h/semaine · gratuit · international",
    tagline_hero: "prêt à construire ton truc avec 15 personnes qui en ont quelque chose à foutre ?",
    primaryCta: "rejoindre s01",
    secondaryCta: "comment ça marche ↓",

    navJoin: "rejoindre",
    navLibrary: "bibliothèque",

    sceneTitle: "the room",
    scene: "samedi matin. une longue table dans un café. tout le monde construit quelque chose de différent. quelqu'un partage son écran, montre comment il a livré un prototype en une nuit ou monté une campagne marketing de zéro. tu regardes, puis tu essaies sur ton propre projet avec des gens autour qui t'aideront quand tu bloques",
    scene2: "le bruit du café s'estompe. pendant trois heures, personne n'est seul avec son projet. tu arrives avec une idée et tu repars avec du progrès",
    sceneTime: "samedi · 09h30 — 12h30 · un café à lyon",

    diagTitle: "sois honnête. qu'est-ce que tu fais en ce moment ?",
    diagnostic: [
      { q: "tu vas dans des cafés et des coworkings. toujours seul", a: "la proximité sans relation ne change rien" },
      { q: "tu t'es fixé une deadline le mois dernier. ratée. tu en as fixé une autre", a: "les promesses à soi-même ne tiennent pas" },
      { q: "tu t'es inscrit à une formation IA. tu as regardé deux vidéos. rien n'a changé", a: "les cours donnent des connaissances. il faut les appliquer" },
      { q: "tu as googlé ton problème pendant une heure. des réponses génériques de gens qui ne connaissent pas ton contexte", a: "le contexte compte plus que les conseils" },
      { q: "tu as rejoint un discord. 500 personnes, personne ne connaît ton projet", a: "les grandes communautés ne sont que des petites foules" },
    ],

    notTitle: "ce n'est pas",
    notThis: [
      ["pas un espace de coworking", "ici, on connaît ton projet"],
      ["pas un accélérateur", "construis ce qui t'excite"],
      ["pas un cours", "on apprend en faisant"],
      ["pas un club de networking", "on livre, on ne parle pas"],
      ["pas un meetup", "les mêmes personnes, chaque samedi, pendant des mois"],
    ],
    notExtras: [
      "tu as un job ? nous aussi. samedi matin, 3 heures",
      "pas technique ? tant mieux. la salle a besoin de toi",
      "rien de livré encore ? en cours ça compte",
      "pas à lyon ? paris l'année prochaine. communauté en ligne dès maintenant",
    ],

    howTitle: "comment ça marche",
    weekly: [
      { t: "tour de table", d: "ce que tu as livré, où tu bloques, est-ce que tu as terminé le challenge de la semaine dernière" },
      { t: "hot seats", d: "2-3 personnes qui bloquent le plus reçoivent toute l'attention du groupe pendant 15 minutes chacune" },
      { t: "bloc de travail", d: "tête baissée, on construit vers le challenge partagé de la semaine. chacun sur son projet, côte à côte" },
      { t: "clôture", d: "comment ça s'est passé. le challenge de la semaine prochaine est annoncé. un engagement, dit à voix haute" },
    ],
    howOnline: "tu ne peux pas venir en personne une semaine ? tu peux rejoindre en ligne. on est flexibles",

    whoTitle: "c'est pour qui",
    personas: [
      {
        q: "tu veux construire ton propre truc mais tu ne sais pas par où commencer ?",
        quote: "J'ai cette idée à laquelle je pense depuis un an. Je ne suis pas développeur. Je me suis inscrit à un cours IA, j'ai regardé deux vidéos, mais je ne sais toujours pas comment faire quelque chose de concret",
        solve: "on te montre les outils, les workflows, et on construit à tes côtés. à la fin du premier mois, tu auras livré quelque chose de réel"
      },
      {
        q: "tu construis seul et c'est de plus en plus dur de continuer ?",
        quote: "Je vais dans des cafés et coworkings mais je continue à livrer des trucs seul et personne autour de moi ne s'en soucie. certaines semaines je n'arrive pas à m'asseoir et travailler",
        solve: "les mêmes personnes chaque semaine qui connaissent ton projet. responsabilité, retours, et compagnie quand tu en as besoin"
      },
      {
        q: "tu veux créer quelque chose tout en gardant ton job ?",
        quote: "Je travaille 35 heures par semaine. je me suis fixé un deadline le mois dernier, je l'ai raté, j'en ai fixé un autre. je rêve de mon propre business depuis des années mais je n'ai jamais eu les bonnes personnes autour pour le faire",
        solve: "samedi matin, 3 heures par semaine. la plupart d'entre nous ont un job aussi. tu prends un engagement par semaine, à voix haute, devant des gens qui te demanderont où tu en es samedi prochain"
      },
    ],
    alsoFor: [
      ["développeurs", "arrête de construire seul, reçois de vrais retours chaque semaine"],
      ["opérateurs & marketeurs", "apprends à livrer des produits toi-même avec l'IA"],
      ["designers", "transforme tes maquettes en produits fonctionnels"],
      ["en reconversion", "ton expérience professionnelle est ton avantage"],
    ],

    aiTitle: "pas besoin de background technique",
    aiText1: "tu as une idée depuis des mois ou des années. tu pensais avoir besoin d'un développeur ou d'argent pour commencer. plus maintenant. l'IA a changé ce qu'une seule personne peut construire",
    aiText2: "on te montre les outils et les workflows pour créer des produits et trouver des clients. puis on explore ensemble ce qui est possible",
    aiLibraryIntro: "tu veux voir des choses utiles ? on a une bibliothèque de prompts pour la création de produits",
    aiLibraryCta: "voir la bibliothèque",
    aiTable: [
      { before: "landing page", beforeTime: "une semaine avec un freelance", now: "un après-midi, toi-même" },
      { before: "étude de marché", beforeTime: "deux semaines", now: "segments clients avec jtbd en une session" },
      { before: "prototype", beforeTime: "des mois à chercher un dev", now: "prototype fonctionnel en un weekend" },
      { before: "specs produit", beforeTime: "une semaine de rédaction", now: "specs complètes à partir d'une conversation avec l'IA en une heure" },
      { before: "modèle financier", beforeTime: "des jours avec des tableurs", now: "modèle fonctionnel en une session" },
    ],
    aiTableHeaders: { artifact: "livrable", before: "avant", now: "maintenant" },

    marqueeLabel: "ce que les gens construisent",

    joinTitle: "rejoindre",
    joinPitch: "écris-moi ce que tu construis. on se retrouve autour d'un café, on discute de plans et d'idées. si ça colle, viens samedi",
    joinFree: "gratuit. pas de frais. pas d'equity. pas de paywall. jamais",
    joinWhy: "j'ai créé ça parce que j'avais besoin d'un tel espace et je n'en trouvais pas. pas de business model, je sais simplement par expérience à quel point c'est dur de construire seul, sans structure",

    founderBio: `je suis <a href="https://linkedin.com/in/daniel-mathias-medina" style="color: var(--green); text-decoration: underline">Daniel</a>. parcours produit : COO fintech où j'ai <a href="https://daniel-medina.framer.website/xlend" style="color: var(--green); text-decoration: underline">travaillé sur une licence européenne de crowdfunding</a>, partenariats biotech, trois startups en partant de zéro. je construis avec l'IA tous les jours, j'adore automatiser les process de vente. avant ça j'ai construit seul un <a href="https://auror-academy.beautiful-apps.com/" style="color: var(--green); text-decoration: underline">jeu IA full-stack</a> de zéro à la production. <a href="https://daniel-medina.framer.website/" style="color: var(--green); text-decoration: underline">portfolio complet ici</a>`,
    founderStory: "j'ai déménagé à lyon il y a deux ans et je construis seul depuis. j'avais besoin d'un tel espace et je n'en trouvais pas. pas de business model ici, je sais simplement par expérience à quel point c'est dur de construire seul, sans structure",
    founderTitle: "qui a lancé ça",

    bottomLinks: { faq: "faq", join: "rejoindre s01", demos: "démos s01", os: "os" },
    bottomPin: "bientôt s02 + paris",
  },

  ru: {
    brand: "Makers Room",
    city: "Lyon",
    year: "2026",
    cohort: "S01 · Субботы",

    format: "очно в лионе · 3 часа/неделю · бесплатно · международный",
    tagline_hero: "готов делать свой проект в компании 15 человек, которым не всё равно?",
    primaryCta: "вступить в s01",
    secondaryCta: "как это работает ↓",

    navJoin: "вступить",
    navLibrary: "библиотека",

    sceneTitle: "комната",
    scene: "субботнее утро. длинный стол в кафе. каждый работает над своим проектом. кто-то делится экраном и показывает, как за ночь выкатил рабочий прототип или собрал маркетинговую кампанию с нуля. ты смотришь, потом пробуешь на своём, а рядом люди, которые помогут, когда застрянешь",
    scene2: "шум кафе стихает. три часа никто не один со своим проектом. приходишь с идеей, уходишь с результатом",
    sceneTime: "суббота · 09:30 — 12:30 · кафе в лионе",

    diagTitle: "честно. чем ты сейчас занимаешься?",
    diagnostic: [
      { q: "сидишь в кафе и коворкингах. по-прежнему один", a: "быть рядом с людьми — не значит быть вместе" },
      { q: "поставил себе дедлайн в прошлом месяце. сорвал. поставил новый", a: "обещания самому себе не работают" },
      { q: "записался на курс по ИИ. посмотрел два видео. ничего не поменялось", a: "знания без практики ничего не дают" },
      { q: "гуглил свою проблему час. получил общие ответы от людей, которые ничего не знают про твой контекст", a: "контекст важнее советов" },
      { q: "вступил в дискорд. 500 человек, никто не знает про твой проект", a: "большое сообщество — ещё не значит полезное" },
    ],

    notTitle: "это не",
    notThis: [
      ["не коворкинг", "здесь знают, что ты делаешь"],
      ["не акселератор", "делай то, что зажигает"],
      ["не курс", "учимся, делая"],
      ["не нетворкинг-клуб", "мы делаем, а не собираем контакты"],
      ["не митап", "одни и те же люди, каждую субботу, месяцами"],
    ],
    notExtras: [
      "есть основная работа? у большинства из нас тоже. субботнее утро, 3 часа",
      "не технарь? отлично. такие тут нужны",
      "ещё ничего не запустил? в процессе — тоже считается",
      "не в лионе? париж в следующем году. онлайн-сообщество уже сейчас",
    ],

    howTitle: "как это работает",
    weekly: [
      { t: "утренний круг", d: "что сделал за неделю, где застрял, справился ли с задачей прошлой недели" },
      { t: "разбор кейсов", d: "2-3 человека, которые застряли сильнее всех, получают всё внимание группы на 15 минут каждый" },
      { t: "рабочий блок", d: "каждый работает над своим проектом, бок о бок. общая задача недели задаёт направление" },
      { t: "закрытие", d: "что получилось. задача на следующую неделю объявлена. одно обязательство, сказанное вслух" },
    ],
    howOnline: "не получается прийти лично? можно подключиться онлайн",

    whoTitle: "для кого это",
    personas: [
      {
        q: "хочешь запустить свой проект, но не знаешь с чего начать?",
        quote: "У меня есть идея, о которой думаю уже год. Я не разработчик. Записался на курс по ИИ, посмотрел два видео, но так и не понял, как из этого сделать что-то работающее",
        solve: "покажем инструменты, покажем процесс и будем делать вместе. к концу первого месяца у тебя будет запущенный проект"
      },
      {
        q: "делаешь проект один и уже тяжело?",
        quote: "Хожу в кафе и коворкинги, но продолжаю делать всё один и никому вокруг нет дела. бывают недели, когда не могу заставить себя сесть за работу",
        solve: "одни и те же люди каждую неделю, которые в курсе твоего проекта. ответственность, обратная связь и компания"
      },
      {
        q: "хочешь создать что-то своё, не уходя с работы?",
        quote: "Работаю 35 часов в неделю. в прошлом месяце поставил себе дедлайн, сорвал, поставил новый. мечтаю о своём деле уже несколько лет, но рядом не было подходящих людей",
        solve: "субботнее утро, 3 часа в неделю. у большинства из нас тоже есть работа. одно обязательство в неделю, вслух, перед людьми, которые спросят о нём в следующую субботу"
      },
    ],
    alsoFor: [
      ["разработчики", "хватит пилить в одиночку, получай обратную связь каждую неделю"],
      ["маркетологи и операционщики", "научись сам запускать продукты с помощью ИИ"],
      ["дизайнеры", "превращай макеты в рабочие продукты"],
      ["меняющие карьеру", "опыт из другой сферы — твоё преимущество"],
    ],

    aiTitle: "техническое образование не нужно",
    aiText1: "у тебя есть идея — месяцы, может годы. думал, что нужен разработчик или деньги, чтобы начать. уже нет. ИИ изменил то, что может сделать один человек",
    aiText2: "мы покажем инструменты и процессы, чтобы создавать продукты и находить клиентов. а потом вместе разберёмся, что из этого можно собрать",
    aiLibraryIntro: "хочешь посмотреть, что уже есть? у нас собрана библиотека промптов для создания продуктов",
    aiLibraryCta: "открыть библиотеку",
    aiTable: [
      { before: "лендинг", beforeTime: "неделя с фрилансером", now: "один вечер, сам" },
      { before: "исследование рынка", beforeTime: "две недели", now: "сегменты клиентов с jtbd за одну сессию" },
      { before: "прототип", beforeTime: "месяцы поиска разработчика", now: "рабочий прототип за выходные" },
      { before: "ТЗ на продукт", beforeTime: "неделя написания", now: "готовое ТЗ из разговора с ИИ за час" },
      { before: "финмодель", beforeTime: "дни в таблицах", now: "рабочая модель за одну сессию" },
    ],
    aiTableHeaders: { artifact: "что делаем", before: "раньше", now: "сейчас" },

    marqueeLabel: "что тут делают",

    joinTitle: "вступить",
    joinPitch: "напиши мне, над чем работаешь. встретимся за кофе, обсудим планы. если совпадём — приходи в субботу",
    joinFree: "бесплатно. без взносов. без equity. без paywall. навсегда",
    joinWhy: "я создал это, потому что сам нуждался в таком месте и не мог найти. никакой бизнес-модели, я просто знаю по опыту, как тяжело строить в изоляции, без структуры",

    founderBio: `я <a href="https://linkedin.com/in/daniel-mathias-medina" style="color: var(--green); text-decoration: underline">Даниэль</a>. продуктовый бэкграунд: COO финтеха, где я <a href="https://daniel-medina.framer.website/xlend" style="color: var(--green); text-decoration: underline">работал над европейской лицензией на краудфандинг</a>, партнёрства в биотехе, три стартапа с нуля. строю с ИИ каждый день, люблю автоматизировать продажи. до этого в одиночку создал <a href="https://auror-academy.beautiful-apps.com/" style="color: var(--green); text-decoration: underline">полноценную ИИ-игру</a> от нуля до продакшена. <a href="https://daniel-medina.framer.website/" style="color: var(--green); text-decoration: underline">полное портфолио здесь</a>`,
    founderStory: "я переехал в лион два года назад и с тех пор работаю один. мне нужно было такое место, и я не мог его найти. никакой бизнес-модели, я просто знаю по опыту, как тяжело строить в изоляции, без структуры",
    founderTitle: "кто это начал",

    bottomLinks: { faq: "faq", join: "вступить в s01", demos: "демо s01", os: "os" },
    bottomPin: "скоро s02 + париж",
  },
};

// Shared across all languages (not translated)
const SHARED = {
  projectExamples: [
    "ai tutor for kids",
    "second-hand bike marketplace",
    "youtube channel about cooking",
    "freelance contract generator",
    "saas for dentists",
    "podcast for sober founders",
    "community for solo parents",
    "service business for local restaurants",
    "one-pan recipe app",
    "inventory tool for bakeries",
    "interview prep for designers",
    "tax assistant for nomads",
    "sustainable packaging for e-commerce",
    "personal finance newsletter",
    "local bike repair service",
    "vintage furniture restoration",
    "wine club subscription",
  ],
};
