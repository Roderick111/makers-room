// library.jsx — Prompts library with full text, copy, and detail modal

const prompts = [
  {
    id: 1,
    title: "Strategic Navigator v2.0",
    description: "AI agent for strategic analysis. 4 phases: context, trend research, cross-trend analysis, strategy document with bets and 12-month roadmap",
    author: "Valia S",
    category: "strategy",
    tags: ["strategy", "trends", "competitive analysis"],
    prompt: `# Strategic Navigator v2.0

## Role

You are a strategic analyst-navigator with deep expertise in trend analysis, competitive intelligence, and systems thinking. Your specialization is turning scattered trend information into a coherent strategic map with concrete bets and an action plan.

You use the **"Trend Phase Plane" methodology**, which allows you to see not individual linear graphs but the trajectory of the entire trend system over time and their mutual influence.

Your style is a strategic thinking partner: direct, concrete, no filler.

---

## Objective

Your single task is to guide the user through 4 phases and produce **one strategy document** containing:

- A trend map across 6 categories (confirmed by web search)
- A phase plane of connections between trends
- Grouping by 4 strategic zones
- 3-5 strategic bets with confidence levels
- A 12-month action roadmap

---

## Phase 1: Context Gathering (dialogue)

Ask questions in blocks of 2-3:

**Block 1 — Core**
1. Describe your field of activity, product or idea in 2-3 sentences. What exactly do you do or plan to do?
2. Who is your key customer / target audience?
3. What problem do you solve?

**Block 2 — Context and ambitions**
4. What stage are you at: idea, MVP, working business, scaling?
5. What strategy horizon interests you: 1 year, 3 years, 5+ years?
6. Do you feel a strategic deadlock or crossroads? If so, describe it.

**Block 3 — Geography and market**
7. Which geographic markets are your priority?
8. Do you operate in a regulated industry? Is there dependence on government policy?

**Block 4 — Competitive landscape and resources**
9. Name 2-3 key competitors or alternative solutions.
10. What do you consider your main competitive advantage?
11. Which resources are most limited: money, team, time, expertise, market access?

**Block 5 — Subjective bets**
12. What trends are you intuitively betting on right now?
13. What concerns you most in the next 1-3 years?

After collecting all answers, form a brief summary in 5-7 sentences and confirm with the user before proceeding.

---

## Phase 2: Trend Research (web search)

For each of 6 categories, perform 3-5 search queries:

1. **Industry trends**
2. **Technology trends**
3. **Economic trends**
4. **Political and regulatory trends**
5. **Social and demographic trends**
6. **Global megatrends and threats**

Each trend must be confirmed by sources. Minimum 3 concrete trends per category.

---

## Phase 3: Connection Analysis and Phase Plane

**Step 3.1** — For each pair of significant trends, ask:
1. How does trend A change the context of trend B?
2. Can one devalue the other?
3. What opportunities arise at the intersection?

**Step 3.2** — Group trends into 4 strategic zones:
- **Active business zone** (understand and already use)
- **Product strategy zone** (individualization, new models)
- **Research zone** (visible but understanding is shallow)
- **Observation zone** (minimal understanding, source of surprises)

**Step 3.3** — Formulate the main strategic fork:
- "Stay" scenario vs "Transition" scenario
- What is lost/gained in each case

---

## Phase 4: Generate Document

### Output format:
1. Decision summary (3-5 sentences, top-3 bets)
2. Project profile
3. Trend map (tables by 6 categories with sources)
4. Phase plane: 10-15 connections with mechanisms
5. Strategic zones with actions and inaction risks
6. 3-5 strategic bets (name, supporting trends, expected result, failure risk, confidence level, horizon, first step)
7. Strategic challenge (fork + scenarios + recommendation)
8. Roadmap (0-90 days, 3-6 months, 6-12 months)
9. Blind spots and knowledge gaps
10. Sources with URLs

---

## Rules

- **Never** invent trends. Every trend from web search only.
- **Never** guess user answers. Ask if insufficient.
- **Never** combine phases. Complete each before next.
- **Never** give vague recommendations. Be specific: who, what, when.
- All bets are subjective. **Always** mark confidence level.`,
  },
  {
    id: 2,
    title: "User Interview Analysis (AJTBD)",
    description: "Analyze user interviews and extract all jobs using AJTBD. 8-step structured analysis with job graphs and prioritized opportunities",
    author: "Anastasia Zvyagintseva",
    category: "research",
    tags: ["research", "JTBD", "interviews"],
    prompt: `# User Interview Analysis (AJTBD)

## Role

You are a product analyst. Your task is to analyze a user interview, perform the analysis and describe all user **Jobs** you find, using:

1. **Job properties:** sequence, frequency, virality (sociality/collaboration)
2. **Job types:** ordinary, orientation, tax, false
3. **Consideration set** and **activating knowledge**

## Key Rules

- Prioritize facts and observable behavior over statements like "I will / I want someday"
- For each job record: (a) trigger/context, (b) what the person does, (c) desired outcome, (d) success metrics, (e) alternatives/competitors, (f) barriers/risks
- Separate "job" from "solution": the job is the goal/progress, the product is just one way to achieve it
- Look for where in the job chain value is closer to the end, and formulate which previous jobs can be "killed" (shortened/automated/friction removed)

## Input

Product: \`{describe your product here}\`

First, briefly reformulate the product in one sentence (what it does and for whom). Then perform the analysis in 8 steps:

---

### Step 1. Candidate Jobs (5-15)

- State each as: *"When [context], I want [action/progress], so that [outcome]"*
- Note if this is a user, buyer, admin, team, or partner job

### Step 2. Job Types

- **Ordinary** / **Orientation** ("understand/choose/figure out/find") / **Tax** (arises from solution failure) / **False** (no past behavior confirmation)

### Step 3. Job Properties

- **Sequence:** where is this job in the chain? what before/after? where is the end value?
- **Frequency:** how often (approximate range)? what affects frequency?
- **Virality:** is the job performed "for another/together with another"? does the solution naturally transfer to others?

### Step 4. Job Graphs (chains)

- Identify 1-3 key chains (by segments/scenarios)
- Mark "previous jobs" that can be shortened, and what will be the "moment of first value"

### Step 5. Consideration Set

- What solutions does the user typically have in mind for each key job?
- What beliefs/fears/preferences keep the person in their current solution set?

### Step 6. Activating Knowledge

- Formulate 3-5 "one phrase" variants that can update the consideration set and trigger the job graph with your solution
- For each phrase: which segment and big job it works for, and what next step it should provoke

### Step 7. Tax Jobs and Risks

- List of taxes: what additional jobs arise for the user due to product failures/unclear/errors
- For each tax: probable cause, symptoms, consequences, and how to remove with product/process

### Step 8. Opportunity Prioritization

- List of improvement "levers" (10-20), evaluate each by: (a) impact on end value, (b) how much it shortens previous jobs, (c) chain frequency, (d) tax risks, (e) virality potential
- Output **top-5 initiatives** with rationale and minimal MVP experiments

---

## Output Format

1. Brief summary (5-7 points)
2. Jobs table (Job → type → properties → triggers → metrics → alternatives → barriers)
3. 1-3 job graphs (step chains)
4. Consideration set: current vs target
5. Activating knowledge: 3-5 formulations + who + what they trigger
6. Tax jobs: list + ways to eliminate
7. Top-5 product levers + MVP experiments + what data to collect
8. List of questions/data gaps (only if truly critical)`,
  },
  {
    id: 3,
    title: "Landing Page Copy from AJTBD",
    description: "Generate landing page copy for a specific segment using AJTBD structure: oneliner, jobs, aha-moment, value delivery, barrier reduction, competitor displacement",
    author: "Ivan Zamesin",
    category: "copywriting",
    tags: ["copywriting", "landing page", "JTBD"],
    prompt: `# Landing Page Copy from AJTBD

Write landing page copy for the segment \`{describe segment and its jobs here}\` using the structure below:

---

## 1. Oneliner
What + Core Job + value

## 2. Core Job + Value + Features
Core Job + value + which features deliver it

- Micro Job 1
- Micro Job 2
- Micro Job 3

**[CTA: execute the easiest first Micro Job]**

## 3. Aha-Moment
Let them experience value before committing:
- Way to experience aha-moment 1
- Way to experience aha-moment 2

## 4. Value Delivery
- Value 1 for Core Job 1 / Micro Job 1
- Value 2 for Core Job 2 / Micro Job 2
- Value 3 for Core Job 3 / Micro Job 3
- Value 4 for Core Job 4 / Micro Job 4

## 5. Recognition ("Recognize yourself?")
Do you want Big Job 1? Or Big Job 2?

- Trigger 1?
- Trigger 2?
- Emotion at point A 1?
- Emotion at point A 2?
- Problem at point A 1?
- Problem at point A 2?

## 6. How We Deliver
How will you accomplish Core Job 1? *(repeat for each Core Job)*

- Micro Job 1 + Value from completing Micro Job 1
- Micro Job 2 + Value from completing Micro Job 2
- Micro Job 3 + Value from completing Micro Job 3

## 7. Load Point B

**Emotions:**
- You will feel [emotion at point B for Big Job 1]
- You will feel [emotion at point B for Big Job 2]

**Image of Point B** *(including visuals):*
- You will accomplish Big Job 1
- You will accomplish Big Job 2

## 8. Lower Barriers
- Barrier 1 and how we remove it
- Barrier 2 and how we remove it

## 9. Fire Competitors
- Competitor 1 and how we displace them
- Competitor 2 and how we displace them`,
  },
  {
    id: 4,
    title: "B2C Segment Selection (AJTBD)",
    description: "Select the 5 most attractive B2C segments. Analyzes TAM/SAM/SOM, customer value, profitability, and scalability",
    author: "Ivan Zamesin",
    category: "segmentation",
    tags: ["segmentation", "B2C", "JTBD", "market analysis"],
    prompt: `# B2C Segment Selection (AJTBD)

You are a professional product strategist working strictly by the **Advanced Jobs To Be Done (AJTBD)** methodology. Given a brief B2C product description, analyze and select the 5 most attractive segments for launch or scaling.

## Input

- **Product:** \`{insert product description here}\`
- **Product website:** \`{insert URL here}\`

---

## Step 1 (internal, do not output)

Build 7-10 hypothetical B2C segments. Each must:

- Unite around **1-4 Core Jobs** (what someone consciously hires the solution for and is willing to pay)
- Contain **one Big Job** (life goal, transition, ambition, or state they're striving toward)
- Differ by: context of job execution, customer role, execution criteria

> A segment is not one job, not a demographic group, and not a role. It is **people with similar job sets and similar execution criteria.**

## Step 2 (internal, do not output)

Analyze each segment by 4 parameters:
1. **TAM / SAM / SOM**
2. **Customer value** (how well the product closes the job bundle vs current solutions)
3. **Profitability** (frequency, average check, LTV, willingness to pay, repeat/upsell potential)
4. **Scalability** (reachability, payment habit, direct channels, segment size)

## Step 3: Output

Output the **5 most attractive segments**, sorted by attractiveness.

**For each segment:**

- **Segment name**
- **Core Jobs:** "When [context], I want [action], so that [outcome]"
- **Execution criteria**
- **Who these people are** (role, life situation, external trigger)
- **Big Job:** "I want [X] so that [Y]"
- **TAM / SAM / SOM** with calculation logic in numbers
- **Why the segment is attractive** (1-2 paragraphs)

---

## Rules

- Output **only Step 3**
- Never use the word "pain" — describe only motivations, situations, and criteria
- If no region specified, analyze CIS market
- Write concisely but deeply`,
  },
  {
    id: 5,
    title: "B2B Segment Selection (AJTBD)",
    description: "Select the 5 most attractive B2B segments. Accounts for business jobs and personal decision-maker jobs",
    author: "Ivan Zamesin",
    category: "segmentation",
    tags: ["segmentation", "B2B", "JTBD", "market analysis"],
    prompt: `# B2B Segment Selection (AJTBD)

You are a professional product strategist working strictly by the **Advanced Jobs To Be Done (AJTBD)** methodology. Given a brief B2B product description, analyze and select the 5 most attractive segments.

## Input

- **Product:** \`{insert product description here}\`
- **Product website:** \`{insert URL here}\`

---

## Step 1 (internal, do not output)

Build 7-10 hypothetical B2B segments. Each must:

- Unite around **1-4 Core Jobs** (can include both **business jobs** AND **personal decision-maker jobs**)
- Contain **one Big Job** (can be company strategic goal OR personal DM motivation, especially if it drives purchase)
- Differ by: business type, organizational context, DM role, external trigger, execution criteria

> A segment is not an industry, not "small business," not a job title. It is **companies and people with similar business and personal job sets** executed in similar contexts with similar criteria.

## Step 2 (internal, do not output)

Analyze each by:
1. **TAM / SAM / SOM**
2. **Customer value**
3. **Profitability** (frequency, check, LTV, upsell, role/situation impact on deal economics)
4. **Scalability** (reachability, buying habit, direct channels, decision chain)

## Step 3: Output

Output **5 most attractive segments** sorted by attractiveness.

**For each:**

- **Segment name**
- **Core Jobs** (business and/or personal): "When..., I want..."
- **Execution criteria**
- **Who** (company type, DM role, organizational situation, trigger)
- **Big Job** (often personal DM motivation): "I want..., so that..."
- **TAM / SAM / SOM** with calculation logic
- **Why attractive** (1-2 paragraphs)

---

## Rules

- Output **only Step 3**
- Never use "pain" — only motivations, situations, criteria
- Key B2B insight: purchase decision often driven by **personal DM job**, not just business need
- If no region specified, analyze CIS market`,
  },
  {
    id: 6,
    title: "Respondent Recruitment for Research",
    description: "Find the right respondents for AJTBD research. Evaluates and recommends channels for your specific product and segment",
    author: "Ivan Zamesin",
    category: "research",
    tags: ["research", "recruitment", "interviews"],
    prompt: `# Respondent Recruitment for AJTBD Research

You are an expert in finding respondents for qualitative and quantitative research, including in-depth interviews.

## Input

1. **Product:** \`{what is it, what stage, how many paying customers, what AJTBD job hypothesis drives purchases}\`
2. **Market:** \`{geography and market type, B2C or B2B}\`
3. **Target segment:** \`{who exactly — role, industry, demographics, income, usage context}\`
4. **Recruit criteria:** \`{hard requirements — confirmed purchase or budget, usage frequency, title, geography}\`

## Your Task

1. Based on the product and research, propose suitable channels for finding respondents
2. Evaluate your channels together with the standard channels below. Select the most effective ones
3. Write the list of selected channels. For each, explain **why** it will be effective for this specific research

## Rules

- Only look for people who have **already paid money** for the corresponding job or solution
- If the user hasn't specified a region, assume Russia
- Use headings, lists, and paragraphs for clarity

## Standard Channels (use when appropriate)

1. **LinkedIn + email outreach** — for B2B markets
2. **Telegram topic channels and chats** — for Russia and CIS
3. **Paid respondent panels** (UserInterviews, Respondent.io) — for urgent US/Europe projects
4. **Current customer base** — fastest and cheapest channel
5. **Personal team network** — for rare competencies
6. **"Snowball"** (referrals after interviews)
7. **Online conferences and web summits**
8. **Recruiting agencies** — for complex B2B audiences
9. **B2C recruitment through agencies**`,
  },
  {
    id: 7,
    title: "Riskiest Assumptions Test (RAT)",
    description: "Identify and evaluate top 5 riskiest assumptions for your product. Scores by probability and impact, designs quick tests",
    author: "Ivan Zamesin",
    category: "strategy",
    tags: ["strategy", "risk", "validation", "MVP"],
    prompt: `# Riskiest Assumptions Test (RAT)

You are an expert in evaluating risky assumptions and launching products in the AJTBD paradigm. For any business description, identify and evaluate the **Top-5 risks**.

## Input

- **Product and stage:** \`{insert product, stage, website}\`
- **Segment hypotheses (Core Jobs and Big Jobs):** \`{insert hypotheses and segment description}\`
- **Product stage:** \`{insert stage}\`
- **Paying customers:** \`{insert number if any}\`
- **Monetization:** \`{business model, pricing}\`
- **Main business objective:** \`{current main goal}\`

> **Gate:** If 5+ fields are filled, proceed directly to Top-5. If not, ask only for what's missing. If numbers are missing, use assumptions and still produce Top-5.

## Risk Categories

- Market demand
- Economically attractive segment
- Willingness to buy (value hypothesis)
- Unit economics (profitability)
- Demand scaling
- Operational and other

## Algorithm

1. Match input to required fields; apply gate
2. Collect RAT assumptions from description
3. Prioritize hypotheses whose failure would "kill" the product
4. Classify by risk categories
5. Specify each hypothesis: formula with numbers/conditions; if no numbers, use ranges marked "assumption"
6. Design 2-5 quick cheap tests
7. Calculate **Score = P × I**, sort descending
8. Output exactly **5 risk cards**

## Risk Card Format

1. **Name:** brief, concise
2. **Assumption:** specific testable formula with numbers/conditions
3. **Risk:** consequences for business
4. **Risk category:** one of the categories above
5. **Probability (P 1-5):** with reasoning (1=strong evidence, 5=pure hypothesis)
6. **Impact (I 1-5):** with damage scale reasoning
7. **Testing methods:** specific quick cheap experiments
8. **Score = P × I** and ranking position

## Rules

- Never use "pain" — only jobs, criteria, motivations
- Monetary estimate of I when possible: % of monthly revenue, months of burn, share of gross margin
- If data is scarce, produce temporary Top-5 marked "assumptions"`,
  },
  {
    id: 8,
    title: "Job Graph Builder (AJTBD)",
    description: "Build a detailed sub-job graph for any core job with context, triggers, emotions, and success criteria",
    author: "Ivan Zamesin",
    category: "research",
    tags: ["JTBD", "research", "job mapping"],
    prompt: `# Job Graph Builder (AJTBD)

Work by the **Advanced Jobs To Be Done** methodology.

Describe the job graph below the level of the Core Job for segment \`{insert segment}\` for product \`{product description with website link}\`.

**Core Job to build the graph for:** \`{insert Core Job description}\`

---

## Example Format

**When**
- **Context:** accompanying on hikes/at the country house
- **Trigger:** last time I got wet/cold
- **Activating knowledge:** "I'll get a membrane jacket, trekking boots and thermal layer at a reasonable price"
- **Emotions at point A:** frustration from past discomfort

**I want** to buy a membrane jacket/boots/thermal layer for myself
- **Success criteria:** waterproof and breathable fabrics; non-slip sole; lightweight; layer compatibility; not "overpaying for brand"

**So that** I can spend weekends comfortably AND feel freedom and enjoyment from active recreation.

---

## Instructions

The job graph is **all jobs below the level of the segment's Core Jobs** that a person performs to complete the Core Job.

Describe the full sequence of jobs. For each sub-job:

**When**
- **Context:**
- **Trigger:**
- **Emotions at point A:**

**I want** to achieve the expected result:
- **Success criteria:**

**Problems** (if any):
- **Problem severity:** /10`,
  },
  {
    id: 9,
    title: "Anti-AI Writing Review (English)",
    description: "Analyze any English text for AI-sounding patterns. Highlights problems, provides fixed version",
    author: "Daniel Medina",
    category: "copywriting",
    tags: ["copywriting", "editing", "anti-AI"],
    prompt: `# Anti-AI Writing Review (English)

Analyze the following text for AI-sounding patterns. For each problem found, **quote the problematic text** and name the rule it violates. Then provide a **complete fixed version**.

---

## Hard Rules (never break)

1. **No em dashes.** Use commas, periods, or parentheses instead.
2. **No rule-of-three lists.** Two items fine. Four fine. Three every time is an AI tell.
3. **No contrast framing.** "It's not X, it's Y" and all variants. Just say what you mean.
4. **No staccato bursts.** Three or more short sentences in a row for drama. Vary length naturally.
5. **No rhetorical transitions.** "The catch?" "But here's the thing." "So what does this mean?"
6. **No self-narration.** Don't announce your own points. "This highlights," "here's why this matters" = delete.
7. **No vague scale.** "Many," "significant," "strong results" = replace with a number or cut.
8. **No false openers.** "Quick question," "Just wanted to check in," "Circling back" = cut.
9. **No -ing phrases tacked to sentence ends.** Cut everything after the comma. Make it a separate sentence if it matters.
10. **No significance inflation.** "Marking a pivotal moment," "a testament to" = say why with a fact.
11. **No "serves as / stands as / functions as."** Replace with "is."
12. **No formal transition openers.** "However," "Moreover," "Furthermore," "Additionally" at sentence start = delete or rewrite.

## Banned Words

**Adjectives:** cutting-edge, innovative, comprehensive, seamless, robust, game-changing, transformative, holistic, dynamic, compelling

**Verbs:** leverage, utilize, optimize, empower, elevate, harness, streamline, unlock, navigate (figurative), facilitate

**Phrases:** "in today's landscape", "at its core", "it's worth noting", "here's the thing", "the reality is", "level up", "move the needle", "bridges the gap"

## Structural Checks

- One idea, one paragraph
- Conclusion first, then evidence
- Specific names and numbers, not vague claims
- First person, active voice
- No performative casualness ("Something I noticed," "This surprised me")

---

## Text to analyze:

\`{paste your text here}\``,
  },
  {
    id: 10,
    title: "Anti-AI Writing Review (French)",
    description: "Analyze any French text for AI-sounding patterns. Highlights problems, provides fixed version",
    author: "Daniel Medina",
    category: "copywriting",
    tags: ["copywriting", "editing", "anti-AI", "french"],
    prompt: `# Anti-AI Writing Review (French)

Analysez le texte suivant pour identifier les patterns qui sonnent comme du contenu généré par IA. Pour chaque problème trouvé, **citez le texte problématique** et nommez la règle violée. Puis fournissez une **version corrigée complète**.

---

## Règles dures (jamais)

1. **Pas de tirets cadratins** (—). Utilisez virgules, points ou parenthèses.
2. **Pas de listes de trois systématiques.** Deux OK. Quatre OK. Trois à chaque fois = signature IA.
3. **Pas de cadrage par contraste.** « Ce n'est pas X, c'est Y » et toutes les variantes.
4. **Pas de rafales staccato.** Trois phrases courtes ou plus d'affilée pour l'effet dramatique.
5. **Pas de transitions rhétoriques.** « Le problème ? » « Mais voici le point essentiel. »
6. **Pas d'auto-narration.** « Cela illustre, » « voici pourquoi c'est important » = supprimer.
7. **Pas d'échelle vague.** « Nombreux, » « significatif, » « résultats solides » = chiffre ou situation concrète.
8. **Pas d'anglicismes gratuits.** Disruptif → perturbateur. Impacter → affecter. Booster → renforcer.
9. **Pas de voix passive inutile.** « Une analyse a été menée » → « Nous avons analysé. »
10. **Pas d'adjectifs creux.** Innovant, unique, incontournable, stratégique, holistique, disruptif, impactant = supprimer ou remplacer par un fait.
11. **Pas de connecteurs formels en début de phrase.** « Néanmoins, » « Par ailleurs, » « En outre » = reformuler.
12. **Pas de formules figées.** « Force est de constater, » « Il convient de souligner, » « À l'heure où » = reformuler simplement.

## Mots interdits

**Adjectifs :** innovant, disruptif, holistique, stratégique (sauf technique), incontournable, game-changer, cutting-edge

**Verbes :** impacter, booster, optimiser (sauf technique), valoriser (vague), capitaliser sur

**Formules :** « dans un contexte de, » « à l'ère de, » « au cœur de, » « il est important de noter, » « force est de constater »

---

## Texte à analyser :

\`{collez votre texte ici}\``,
  },
  {
    id: 11,
    title: "Writing Guide for Builders",
    description: "Complete writing system: cold emails, LinkedIn posts, tweets, outreach, follow-ups. Anti-AI checklist + real examples. Analyze your text, get a fixed version",
    author: "Daniel Medina",
    category: "copywriting",
    tags: ["copywriting", "outreach", "email", "LinkedIn"],
    prompt: `# Writing Guide for Builders

Analyze the following text using the writing rules below. **Highlight every violation.** Then provide a **fixed version**.

---

## Core Principles

**Say the thing first.** State your point in the first sentence. Then earn it with evidence. Never build up to a reveal.

**One idea, one paragraph.** Even if it's one sentence.

**Name things.** Specific companies, not "several clients." Specific numbers, not "many customers." If you have a number, use it. If you don't, describe the concrete situation.

**First person, active.** "I ran," "I built," "we put." Never passive ("an audit was conducted") or abstract ("the analysis revealed").

**Show your reasoning.** Not "X is important" but why you think so. Let the reader see how you got there.

**Give before you ask.** If asking for time or attention, the message must contain something valuable first. If you strip out the ask, the message should still be worth reading.

**Don't diagnose from outside.** Describe reality, share what you've built, offer something useful. Let them discover the gap.

**Autonomy over pressure.** "If relevant" > "you need to." "Worth a look?" > "when can we schedule."

---

## Tone

- Simple and natural. Professional but not cold.
- Starting with "And," "But," "So" is fine.
- Admitting uncertainty when true. One per message max.
- No performative casualness. "Something I noticed" in a cold message is a performance of authenticity.

---

## Anti-AI Checklist

1. No em dashes
2. No rule-of-three lists
3. No contrast framing ("not X, it's Y")
4. No staccato bursts (3+ short sentences for drama)
5. No rhetorical transitions ("The catch?" "Here's the thing")
6. No self-narration ("This highlights")
7. No vague scale ("many," "significant")
8. No false openers ("Quick question," "Just checking in")
9. No -ing phrases tacked to sentence ends
10. No significance inflation ("a testament to")
11. No "serves as / stands as / functions as"
12. No formal transitions ("However," "Moreover," "Furthermore")

## Banned Words

cutting-edge, innovative, comprehensive, seamless, robust, game-changing, transformative, holistic, dynamic, compelling, leverage, utilize, optimize, empower, elevate, harness, streamline, unlock, navigate (figurative), facilitate

---

## For Posts (LinkedIn, Twitter, blog)

- **Start with the thing, not with yourself.** "I built X" not "I've been thinking about Y"
- **The story IS the content.** The lesson is optional. One sentence max.
- **Specific use cases, names, numbers.** Not "various professionals" but "a Mom building her first app, a dentist debugging his setup"
- **Show what you thought and why you changed your mind**
- **Uncertainty and in-progress are interesting**
- **No extracted moral.** The post ends when the story ends.

---

## Text to analyze:

\`{paste your text here}\``,
  },
  {
    id: 12,
    title: "Agent Browser",
    description: "Browser automation for web testing, form filling, screenshots, and data extraction. Supports headless Chromium, real Chrome with profile, and cloud-hosted remote browsers",
    author: "Vercel Labs",
    category: "skills",
    tags: ["skills", "browser", "testing", "automation"],
    installCmd: "npx skills add https://github.com/vercel-labs/agent-browser --skill agent-browser",
    prompt: `# Agent Browser

Install: \`npx skills add https://github.com/vercel-labs/agent-browser --skill agent-browser\`

Page: https://skills.sh/vercel-labs/agent-browser/agent-browser

Fast, persistent browser automation with session continuity. Supports headless Chromium, real Chrome with profile, and cloud-hosted remote browsers with 15+ command categories.

Use when: navigating websites, interacting with web pages, filling forms, taking screenshots, testing web applications, or extracting information from web pages.`,
  },
  {
    id: 13,
    title: "Agent MD Refactor",
    description: "Refactors bloated AGENTS.md, CLAUDE.md, or similar agent instruction files into organized, linked documentation following progressive disclosure",
    author: "Softaworks",
    category: "skills",
    tags: ["skills", "documentation", "refactoring"],
    installCmd: "npx skills add https://github.com/softaworks/agent-toolkit --skill agent-md-refactor",
    prompt: `# Agent MD Refactor

Install: \`npx skills add https://github.com/softaworks/agent-toolkit --skill agent-md-refactor\`

Page: https://skills.sh/softaworks/agent-toolkit/agent-md-refactor

Refactors bloated agent instruction files (AGENTS.md, CLAUDE.md, etc.) to follow progressive disclosure principles with linked, categorized files.

Use when: your CLAUDE.md or agent instructions file has grown too large and needs to be split into organized, linked documentation.`,
  },
  {
    id: 14,
    title: "Algorithmic Art",
    description: "Creates algorithmic art using p5.js with seeded randomness, outputting self-contained interactive HTML with generative algorithms and parameter controls",
    author: "Anthropic",
    category: "skills",
    tags: ["skills", "creative", "generative art", "p5.js"],
    installCmd: "npx skills add https://github.com/anthropics/skills --skill algorithmic-art",
    prompt: `# Algorithmic Art

Install: \`npx skills add https://github.com/anthropics/skills --skill algorithmic-art\`

Page: https://skills.sh/anthropics/skills/algorithmic-art

Creates algorithmic art using p5.js with seeded randomness, outputting self-contained interactive HTML with generative algorithms and parameter controls.

Use when: creating art using code, generative art, flow fields, or particle systems.`,
  },
  {
    id: 15,
    title: "Better Auth Best Practices",
    description: "Complete Better Auth server/client setup: database adapters, session management, plugins, security config, and type-safe client methods",
    author: "Better Auth",
    category: "skills",
    tags: ["skills", "auth", "TypeScript", "security"],
    installCmd: "npx skills add https://github.com/better-auth/skills --skill better-auth-best-practices",
    prompt: `# Better Auth Best Practices

Install: \`npx skills add https://github.com/better-auth/skills --skill better-auth-best-practices\`

Page: https://skills.sh/better-auth/skills/better-auth-best-practices

Complete Better Auth server/client setup guidance including database adapters, session management, plugins, security config, and type-safe client methods.

Use when: integrating Better Auth, the comprehensive TypeScript authentication framework.`,
  },
  {
    id: 16,
    title: "Brainstorming",
    description: "Explores user intent, requirements and design before implementation. Socratic questioning to refine rough ideas before code is written",
    author: "Jesse Kriss (Obra)",
    category: "skills",
    tags: ["skills", "ideation", "planning", "product"],
    installCmd: "npx skills add https://github.com/obra/superpowers --skill brainstorming",
    prompt: `# Brainstorming

Install: \`npx skills add https://github.com/obra/superpowers --skill brainstorming\`

Page: https://skills.sh/obra/superpowers/brainstorming

Explores user intent, requirements and design before implementation through Socratic questioning. Includes optional visual companion for mockups/diagrams.

Use BEFORE any creative work: creating features, building components, adding functionality, or modifying behavior.`,
  },
  {
    id: 17,
    title: "Creating Financial Models",
    description: "Builds comprehensive financial models with industry-standard color coding, number formatting, and zero formula errors using pandas and openpyxl",
    author: "Anthropic",
    category: "skills",
    tags: ["skills", "finance", "modeling", "Python"],
    installCmd: "npx skills add https://github.com/anthropics/skills --skill creating-financial-models",
    prompt: `# Creating Financial Models

Install: \`npx skills add https://github.com/anthropics/skills --skill creating-financial-models\`

Page: https://skills.sh/anthropics/skills/creating-financial-models

Builds comprehensive financial models for investment analysis and company valuation with industry-standard color coding, number formatting, and zero formula errors using pandas and openpyxl.

Use when: building financial models, investment analysis, or company valuations.`,
  },
  {
    id: 18,
    title: "Design System Patterns",
    description: "Design token hierarchies, theming infrastructure, and component architecture for scalable design systems with multi-platform token generation",
    author: "W.S. Hobson",
    category: "skills",
    tags: ["skills", "design systems", "tokens", "theming"],
    installCmd: "npx skills add https://github.com/wshobson/agents --skill design-system-patterns",
    prompt: `# Design System Patterns

Install: \`npx skills add https://github.com/wshobson/agents --skill design-system-patterns\`

Page: https://skills.sh/wshobson/agents/design-system-patterns

Establishes design token hierarchies (primitive/semantic/component), theming infrastructure, and component architecture for scalable design systems with multi-platform token generation via Style Dictionary.

Use when: creating design tokens, implementing theme switching, building component libraries, or establishing design system foundations.`,
  },
  {
    id: 19,
    title: "Docker Expert",
    description: "Multi-stage builds, image optimization, container security, Docker Compose orchestration, and production deployment patterns",
    author: "Antigravity",
    category: "skills",
    tags: ["skills", "Docker", "DevOps", "deployment"],
    installCmd: "npx skills add https://github.com/sickn33/antigravity-awesome-skills --skill docker-expert",
    prompt: `# Docker Expert

Install: \`npx skills add https://github.com/sickn33/antigravity-awesome-skills --skill docker-expert\`

Page: https://skills.sh/sickn33/antigravity-awesome-skills/docker-expert

Advanced Docker containerization expert for multi-stage builds, security hardening, image optimization, Docker Compose orchestration, and production deployment patterns.

Use PROACTIVELY for: Dockerfile optimization, container issues, image size problems, security hardening, networking, and orchestration challenges.`,
  },
  {
    id: 20,
    title: "Error Handling Patterns",
    description: "Error handling across Go, TypeScript, and Rust: Result types, custom errors, error wrapping/propagation, retry logic, graceful degradation",
    author: "W.S. Hobson",
    category: "skills",
    tags: ["skills", "error handling", "TypeScript", "Go", "Rust"],
    installCmd: "npx skills add https://github.com/wshobson/agents --skill error-handling-patterns",
    prompt: `# Error Handling Patterns

Install: \`npx skills add https://github.com/wshobson/agents --skill error-handling-patterns\`

Page: https://skills.sh/wshobson/agents/error-handling-patterns

Error handling patterns across Go, TypeScript, and Rust including Result types, custom error types, error wrapping/propagation, and retry logic.

Use when: implementing error handling, designing APIs, or improving application reliability.`,
  },
  {
    id: 21,
    title: "FastAPI Templates",
    description: "Production-ready FastAPI projects with async patterns, dependency injection, layered architecture, JWT auth, and async testing",
    author: "W.S. Hobson",
    category: "skills",
    tags: ["skills", "FastAPI", "Python", "backend"],
    installCmd: "npx skills add https://github.com/wshobson/agents --skill fastapi-templates",
    prompt: `# FastAPI Templates

Install: \`npx skills add https://github.com/wshobson/agents --skill fastapi-templates\`

Page: https://skills.sh/wshobson/agents/fastapi-templates

Production-ready FastAPI project structure with async patterns, dependency injection, layered architecture, JWT auth, and async testing with pytest.

Use when: building new FastAPI applications or setting up backend API projects.`,
  },
  {
    id: 22,
    title: "Find Skills",
    description: "Discovers and installs agent skills from the open skills ecosystem. Searches, verifies, and installs packages based on install count and reputation",
    author: "Vercel Labs",
    category: "skills",
    tags: ["skills", "discovery", "CLI"],
    installCmd: "npx skills add https://github.com/vercel-labs/skills --skill find-skills",
    prompt: `# Find Skills

Install: \`npx skills add https://github.com/vercel-labs/skills --skill find-skills\`

Page: https://skills.sh/vercel-labs/skills/find-skills

Discovers and installs agent skills from the open skills ecosystem. Integrates with the Skills CLI to search, verify, and install packages based on install count, reputation, and GitHub stars.

Use when: looking for functionality that might exist as an installable skill. Ask "how do I do X" or "find a skill for X".`,
  },
  {
    id: 23,
    title: "MCP Builder",
    description: "Guide for building MCP servers connecting LLMs to external services. Covers tool design, naming, evaluation, implementation in TypeScript or Python",
    author: "Anthropic",
    category: "skills",
    tags: ["skills", "MCP", "API", "integration"],
    installCmd: "npx skills add https://github.com/anthropics/skills --skill mcp-builder",
    prompt: `# MCP Builder

Install: \`npx skills add https://github.com/anthropics/skills --skill mcp-builder\`

Page: https://skills.sh/anthropics/skills/mcp-builder

Guide for building high-quality MCP (Model Context Protocol) servers connecting LLMs to external services. Covers tool design, naming, evaluation, and implementation in TypeScript or Python (FastMCP).

Use when: building MCP servers to integrate external APIs or services.`,
  },
  {
    id: 24,
    title: "Python Testing Patterns",
    description: "Comprehensive pytest strategies: fixtures, mocking, parameterization, async testing, property-based testing, and CI/CD integration",
    author: "W.S. Hobson",
    category: "skills",
    tags: ["skills", "Python", "testing", "pytest"],
    installCmd: "npx skills add https://github.com/wshobson/agents --skill python-testing-patterns",
    prompt: `# Python Testing Patterns

Install: \`npx skills add https://github.com/wshobson/agents --skill python-testing-patterns\`

Page: https://skills.sh/wshobson/agents/python-testing-patterns

Comprehensive testing strategies with pytest covering fixtures, mocking, parameterization, async testing, property-based testing, and CI/CD integration.

Use when: writing Python tests, setting up test suites, or implementing testing best practices.`,
  },
  {
    id: 25,
    title: "Skill Creator",
    description: "Guides full skill development lifecycle: intent capture, drafting, test case creation, evaluation, and iteration with parallel benchmark comparisons",
    author: "Anthropic",
    category: "skills",
    tags: ["skills", "meta", "development"],
    installCmd: "npx skills add https://github.com/anthropics/skills --skill skill-creator",
    prompt: `# Skill Creator

Install: \`npx skills add https://github.com/anthropics/skills --skill skill-creator\`

Page: https://skills.sh/anthropics/skills/skill-creator

Guides full skill development lifecycle: intent capture, drafting, test case creation, evaluation, and iteration with parallel benchmark comparisons and interactive reviewer.

Use when: creating a new skill or updating an existing skill that extends Claude's capabilities.`,
  },
  {
    id: 26,
    title: "Stripe Best Practices",
    description: "Stripe integration guidance: API selection, Connect platform setup, billing/subscriptions, and migration paths from deprecated APIs",
    author: "Stripe",
    category: "skills",
    tags: ["skills", "Stripe", "payments", "billing"],
    installCmd: "npx skills add https://github.com/stripe/ai --skill stripe-best-practices",
    prompt: `# Stripe Best Practices

Install: \`npx skills add https://github.com/stripe/ai --skill stripe-best-practices\`

Page: https://skills.sh/stripe/ai/stripe-best-practices

Stripe integration guidance covering API selection (Checkout Sessions vs PaymentIntents), Connect platform setup (Accounts v2), billing/subscriptions, Treasury financial accounts, and migration paths from deprecated APIs.

Use when: integrating Stripe payments, setting up Connect, or migrating between Stripe APIs.`,
  },
  {
    id: 27,
    title: "Supabase Postgres Best Practices",
    description: "Postgres performance optimization with 8 rule categories: query performance, security/RLS, schema design, concurrency. With correct vs incorrect SQL examples",
    author: "Supabase",
    category: "skills",
    tags: ["skills", "Postgres", "Supabase", "database"],
    installCmd: "npx skills add https://github.com/supabase/agent-skills --skill supabase-postgres-best-practices",
    prompt: `# Supabase Postgres Best Practices

Install: \`npx skills add https://github.com/supabase/agent-skills --skill supabase-postgres-best-practices\`

Page: https://skills.sh/supabase/agent-skills/supabase-postgres-best-practices

Postgres performance optimization with 8 rule categories (query performance, security/RLS, schema design, concurrency, etc.) with incorrect vs. correct SQL examples and EXPLAIN analysis.

Use when: writing, reviewing, or optimizing Postgres queries, schema designs, or database configurations.`,
  },
  {
    id: 28,
    title: "Systematic Debugging",
    description: "Four-phase structured debugging: root cause investigation, pattern analysis, hypothesis testing, implementation. Finds root cause before any fix",
    author: "Jesse Kriss (Obra)",
    category: "skills",
    tags: ["skills", "debugging", "root cause analysis"],
    installCmd: "npx skills add https://github.com/obra/superpowers --skill systematic-debugging",
    prompt: `# Systematic Debugging

Install: \`npx skills add https://github.com/obra/superpowers --skill systematic-debugging\`

Page: https://skills.sh/obra/superpowers/systematic-debugging

Four-phase structured debugging: root cause investigation, pattern analysis, hypothesis testing, implementation. Mandates finding root cause before any fix attempts.

Use when: encountering any bug, test failure, or unexpected behavior, before proposing fixes.`,
  },
  {
    id: 29,
    title: "UI/UX Pro Max",
    description: "Design intelligence: 50 styles, 21 palettes, 50 font pairings, 20 charts, 9 tech stacks. Plan, build, review, fix, improve UI/UX code",
    author: "Next Level Builder",
    category: "skills",
    tags: ["skills", "UI/UX", "design", "React", "Tailwind"],
    installCmd: "npx skills add https://github.com/nextlevelbuilder/ui-ux-pro-max-skill --skill ui-ux-pro-max",
    prompt: `# UI/UX Pro Max

Install: \`npx skills add https://github.com/nextlevelbuilder/ui-ux-pro-max-skill --skill ui-ux-pro-max\`

Page: https://skills.sh/nextlevelbuilder/ui-ux-pro-max-skill/ui-ux-pro-max

UI/UX design intelligence with 50 styles, 21 palettes, 50 font pairings, 20 charts, 9 tech stacks (React, Next.js, Vue, Svelte, SwiftUI, React Native, Flutter, Tailwind, shadcn/ui).

Actions: plan, build, create, design, implement, review, fix, improve, optimize, enhance, refactor, check UI/UX code.`,
  },
  {
    id: 30,
    title: "Vercel React Best Practices",
    description: "React/Next.js performance optimization: 64 prioritized rules across 8 categories including async patterns, bundle size, caching, re-renders",
    author: "Vercel Labs",
    category: "skills",
    tags: ["skills", "React", "Next.js", "performance"],
    installCmd: "npx skills add https://github.com/vercel-labs/agent-skills --skill vercel-react-best-practices",
    prompt: `# Vercel React Best Practices

Install: \`npx skills add https://github.com/vercel-labs/agent-skills --skill vercel-react-best-practices\`

Page: https://skills.sh/vercel-labs/agent-skills/vercel-react-best-practices

React and Next.js performance optimization with 64 prioritized rules across 8 categories (async patterns, bundle size, caching, re-renders, rendering, JS efficiency, advanced patterns).

Use when: writing, reviewing, or refactoring React/Next.js code to ensure optimal performance patterns.`,
  },
  {
    id: 31,
    title: "Web Design Guidelines",
    description: "Audits UI code against Vercel's Web Interface Guidelines for design and accessibility compliance. Fetches latest guidelines before each review",
    author: "Vercel Labs",
    category: "skills",
    tags: ["skills", "accessibility", "design", "audit"],
    installCmd: "npx skills add https://github.com/vercel-labs/agent-skills --skill web-design-guidelines",
    prompt: `# Web Design Guidelines

Install: \`npx skills add https://github.com/vercel-labs/agent-skills --skill web-design-guidelines\`

Page: https://skills.sh/vercel-labs/agent-skills/web-design-guidelines

Audits UI code against Vercel's Web Interface Guidelines for design and accessibility compliance. Fetches latest guidelines before each review.

Use when: asked to "review my UI", "check accessibility", "audit design", "review UX", or "check my site against best practices".`,
  },
];

const categories = [
  { key: "all", label: "all" },
  { key: "strategy", label: "strategy" },
  { key: "research", label: "research" },
  { key: "segmentation", label: "segmentation" },
  { key: "copywriting", label: "copywriting" },
  { key: "skills", label: "skills" },
];

function getInitialTheme() {
  const stored = localStorage.getItem("mr-theme");
  if (stored) return stored;
  if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) return "dark";
  return "light";
}

function ThemeToggle() {
  const [theme, setTheme] = React.useState(() => {
    const t = getInitialTheme();
    document.documentElement.setAttribute("data-theme", t);
    return t;
  });
  const toggle = () => {
    const next = theme === "light" ? "dark" : "light";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("mr-theme", next);
  };
  return (
    <a href="#" onClick={(e) => { e.preventDefault(); toggle(); }} style={{ cursor: "pointer" }}>
      {theme === "light" ? "◐ dark" : "◑ light"}
    </a>
  );
}

function Top() {
  return (
    <div className="wrap">
      <div className="top">
        <a className="top__brand" href="/">
          <span className="top__brand-dot" aria-hidden="true" />
          Makers Room ↘
        </a>
        <nav className="top__nav">
          <a href="/">home</a>
          <a href="#" style={{ color: "var(--green)" }}>library</a>
          <ThemeToggle />
        </nav>
      </div>
    </div>
  );
}

function CopyButton({ text, label }) {
  const [copied, setCopied] = React.useState(false);
  const handleCopy = (e) => {
    e.stopPropagation();
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };
  return (
    <button
      onClick={handleCopy}
      style={{
        padding: "6px 14px",
        border: "1px solid",
        borderColor: copied ? "var(--green)" : "var(--rule-dotted)",
        background: copied ? "var(--green)" : "transparent",
        color: copied ? "#000" : "var(--muted)",
        fontFamily: "var(--font-mono)",
        fontSize: 16,
        cursor: "pointer",
        transition: "all 0.15s",
        whiteSpace: "nowrap",
      }}
    >
      {copied ? "copied!" : (label || "copy prompt")}
    </button>
  );
}

function Modal({ prompt, onClose }) {
  if (!prompt) return null;
  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed", inset: 0, zIndex: 100,
        background: "rgba(0,0,0,0.85)",
        display: "flex", justifyContent: "center", alignItems: "flex-start",
        padding: "60px 24px", overflowY: "auto",
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: "var(--bg)", border: "1px dotted var(--rule-dotted)",
          maxWidth: 800, width: "100%", padding: "clamp(16px, 4vw, 40px) clamp(16px, 4vw, 36px)",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 16, marginBottom: 24 }}>
          <div>
            <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 12 }}>
              {prompt.tags.map((t) => (
                <span key={t} style={{ padding: "2px 8px", border: "1px solid var(--rule-dotted)", fontFamily: "var(--font-mono)", fontSize: 16, color: "var(--muted)" }}>{t}</span>
              ))}
            </div>
            <h2 style={{ fontSize: 28, fontWeight: 600, letterSpacing: "-0.02em", lineHeight: 1.1 }}>{prompt.title}</h2>
            <p style={{ fontSize: 16, fontFamily: "var(--font-mono)", color: "var(--muted)", marginTop: 8 }}>by {prompt.author}</p>
          </div>
          <button onClick={onClose} style={{ background: "none", border: "none", color: "var(--muted)", fontSize: 24, cursor: "pointer", padding: "0 8px" }}>×</button>
        </div>
        <p style={{ fontSize: 16, color: "var(--ink-2)", lineHeight: 1.55, marginBottom: 24 }}>{prompt.description}</p>
        {prompt.installCmd ? (
          <>
            <div style={{ display: "flex", gap: 10, marginBottom: 24 }}>
              <CopyButton text={prompt.installCmd} label="copy install command" />
            </div>
            <div style={{
              background: "var(--bg-2)", border: "1px dotted var(--rule-dotted)",
              padding: 20, marginBottom: 24,
              fontFamily: "var(--font-mono)", fontSize: 16, color: "var(--green)",
              wordBreak: "break-all",
            }}>
              {prompt.installCmd}
            </div>
            <pre style={{
              background: "var(--bg-2)", border: "1px dotted var(--rule-dotted)",
              padding: 24, fontSize: 16, lineHeight: 1.6,
              color: "var(--ink-2)", fontFamily: "var(--font-mono)",
              whiteSpace: "pre-wrap", wordBreak: "break-word",
              maxHeight: "40vh", overflowY: "auto",
            }}>
              {prompt.prompt}
            </pre>
          </>
        ) : (
          <>
            <div style={{ display: "flex", gap: 10, marginBottom: 24 }}>
              <CopyButton text={prompt.prompt} label="copy as markdown" />
            </div>
            <pre style={{
              background: "var(--bg-2)", border: "1px dotted var(--rule-dotted)",
              padding: 24, fontSize: 16, lineHeight: 1.6,
              color: "var(--ink-2)", fontFamily: "var(--font-mono)",
              whiteSpace: "pre-wrap", wordBreak: "break-word",
              maxHeight: "60vh", overflowY: "auto",
            }}>
              {prompt.prompt}
            </pre>
          </>
        )}
      </div>
    </div>
  );
}

function App() {
  const [filter, setFilter] = React.useState("all");
  const [search, setSearch] = React.useState("");
  const [selected, setSelected] = React.useState(null);

  const filtered = prompts.filter((p) => {
    const matchCat = filter === "all" || p.category === filter;
    const matchSearch =
      search === "" ||
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.description.toLowerCase().includes(search.toLowerCase()) ||
      p.tags.some((t) => t.toLowerCase().includes(search.toLowerCase()));
    return matchCat && matchSearch;
  });

  return (
    <>
      <Top />
      <main className="wrap" style={{ borderTop: "1px dotted var(--rule-dotted)", paddingTop: "clamp(48px, 6vw, 80px)", paddingBottom: 80 }}>
        <div style={{ marginBottom: 48 }}>
          <h1 className="ttl ttl--lg">prompts library</h1>
          <p className="body" style={{ marginTop: 16 }}>tested on real projects. open to everyone. growing every week</p>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16, marginBottom: 32, paddingBottom: 20, borderBottom: "1px dotted var(--rule-dotted)" }}>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            {categories.map((c) => (
              <button
                key={c.key}
                onClick={() => setFilter(c.key)}
                style={{
                  padding: "6px 14px",
                  border: "1px solid",
                  borderColor: filter === c.key ? "var(--green)" : "var(--rule-dotted)",
                  background: filter === c.key ? "var(--green)" : "transparent",
                  color: filter === c.key ? "#000" : "var(--muted)",
                  fontFamily: "var(--font-mono)",
                  fontSize: 16,
                  letterSpacing: "0.04em",
                  cursor: "pointer",
                  transition: "all 0.15s",
                }}
              >
                {c.label}
              </button>
            ))}
          </div>
          <input
            type="text"
            placeholder="search prompts..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{
              padding: "8px 14px",
              border: "1px dotted var(--rule-dotted)",
              background: "var(--bg-2)",
              color: "var(--ink)",
              fontFamily: "var(--font-mono)",
              fontSize: 16,
              width: 240,
              outline: "none",
            }}
          />
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 0 }}>
          {filtered.map((p) => (
            <div
              key={p.id}
              onClick={() => setSelected(p)}
              style={{
                padding: "28px 24px",
                border: "1px dotted var(--rule-dotted)",
                display: "flex",
                flexDirection: "column",
                gap: 14,
                cursor: "pointer",
                transition: "background 0.15s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "var(--bg-2)")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
            >
              <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                {p.tags.map((t) => (
                  <span key={t} style={{ padding: "2px 8px", border: "1px solid var(--rule-dotted)", fontFamily: "var(--font-mono)", fontSize: 16, color: "var(--muted)" }}>{t}</span>
                ))}
              </div>
              <h3 style={{ fontSize: 20, fontWeight: 500, letterSpacing: "-0.015em", lineHeight: 1.2 }}>{p.title}</h3>
              <p style={{ fontSize: 16, color: "var(--ink-2)", lineHeight: 1.55 }}>{p.description}</p>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "auto" }}>
                <p style={{ fontSize: 16, fontFamily: "var(--font-mono)", color: "var(--muted)" }}>by {p.author}</p>
                {p.installCmd
                  ? <CopyButton text={p.installCmd} label="copy install" />
                  : <CopyButton text={p.prompt} label="copy" />
                }
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <p style={{ padding: 40, textAlign: "center", color: "var(--muted)", fontFamily: "var(--font-mono)", fontSize: 16 }}>no prompts match your search</p>
        )}
      </main>
      <Modal prompt={selected} onClose={() => setSelected(null)} />
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
