// Content for Makers Room — hi-fi single page.
// Pulled from the latest Column variation; small edits the user made are
// captured here.

const MR = {
  brand: "Makers Room",
  city: "Lyon",
  year: "2026",
  format: "in-person in lyon · 3 hours/week · free",
  tagline: "ready to build your thing alongside 15 people who give a shit?",
  primaryCta: "join makers room",

  scene: `saturday morning. fifteen people around a long table in a cafe. everyone is building something different. someone just shipped their first landing page and can't stop smiling. someone else is stuck on a decision they've been circling for weeks, and two people are leaning in, helping them think it through. someone is watching over a shoulder as a prototype gets built in real time. the cafe noise fades. for three hours, nobody is alone with their project.`,

  scene2: `this is what it feels like. you walk in with an idea and walk out with progress.`,

  diagnostic: [
    { q: "going to cafes and coworkings. still building alone.", a: "proximity without relationship changes nothing." },
    { q: "set yourself a deadline last month. missed it. set another one.", a: "promises to yourself don't stick." },
    { q: "signed up for an AI course. watched two videos. changed nothing.", a: "courses teach knowledge. you need to apply it." },
    { q: "googled your problem for an hour. got generic answers from strangers.", a: "context matters more than advice." },
    { q: "joined a discord. 500 people, nobody knows your project.", a: "big communities are just small crowds." },
  ],

  notThis: [
    { k: "a coworking space", v: "you have a desk." },
    { k: "an accelerator", v: "nobody takes equity." },
    { k: "a course", v: "google exists." },
    { k: "a networking club", v: "we build, not collect." },
    { k: "a meetup", v: "same people, every saturday, for months." },
  ],

  filters: [
    { k: "got a day job?", v: "most of us do. saturday mornings, 3 hours." },
    { k: "not technical?", v: "good. the room needs you." },
    { k: "haven't shipped yet?", v: "in-progress counts. the bar is work, not a portfolio." },
    { k: "not in lyon?", v: "paris next year. online community now." },
  ],

  weekly: [
    { t: "opening round.", d: "what you shipped, where you're stuck, what you need, did you complete last week's challenge." },
    { t: "hot seats.", d: "2–3 people who are most stuck get the room's full attention for 15 minutes each. real experience from people who've been there, not generic advice." },
    { t: "work block.", d: "heads-down building toward this week's shared challenge. everyone on their own project, side by side." },
    { t: "closing.", d: "how you did on the challenge. next week's challenge announced. one commitment, said out loud." },
  ],

  challenge: `same challenge for everyone, applied to your project. "ship a landing page." "get one real user." "do customer research." "talk to five potential customers." the shared constraint creates energy. next saturday you say whether you did it, in front of fifteen people who got the same challenge.`,

  monthly: `demo night. show what you shipped. what worked, what broke. guests welcome.`,
  between: `"anyone want to work from a cafe this afternoon?" or "pair sprint? bring your hardest problem, we take turns." in the chat. two or three show up.`,

  who1: `people who are curious and have fun building. people who show up when it's hard and share what's broken. people making something they can't fully explain.`,
  who2: `developers, operators, marketers, designers. first-time builders and people on their third thing. the mix is the point.`,
  filter: `the filter is: are you building something now, and do you take it seriously?`,

  membership: [
    { k: "the chat", v: "mid-week questions, project updates, resource sharing. the community lives here between sessions." },
    { k: "informal meetups", v: "someone posts a cafe and a time. no agenda. just building alongside someone you know." },
    { k: "the library", v: "prompts, tools, workflows. tested on real projects. growing every week. open to everyone." },
    { k: "the network", v: "people who know your project, understand your context, and pick up when you call." },
    { k: "what's coming", v: "retreats, hackathons, build sprints, more cohorts. the club grows." },
  ],
  roomEnergy: `the energy in the room matters. when everyone around you is working hard on something they care about, you work harder too.`,

  aiTable: [
    { before: "landing page", beforeTime: "a week with a freelancer", now: "one afternoon, yourself" },
    { before: "market research", beforeTime: "two weeks", now: "customer segments with jtbd in one session" },
    { before: "prototype", beforeTime: "months finding a developer", now: "working prototype in one weekend" },
    { before: "product spec", beforeTime: "a week of writing", now: "prd from a conversation with ai in one hour" },
  ],
  aiClose: `most people with business ideas don't know this is possible yet. some of us ship this way already, and the transfer happens by sitting next to someone doing it.`,
  aiCta: "browse the prompts library",

  joinPitch: `write me what you're building. we'll meet over coffee, discuss plans and ideas. if it clicks, come saturday.`,
  joinFree: `free. the community is never behind a paywall.`,

  // Marquee: what's being built in the room right now
  marquee: [
    "an ai tutor for kids",
    "a tool that turns receipts into accounting entries",
    "a recipe app for one-pan dinners",
    "a freelance contract generator",
    "a podcast for sober founders",
    "a marketplace for second-hand bikes",
    "a tax assistant for digital nomads",
    "an interview prep app for designers",
    "a saas for dentists",
    "a community for solo parents",
    "a generative crossword puzzle",
    "an inventory tool for small bakeries",
  ],

  footer: "makers room",
};

window.MR = MR;
