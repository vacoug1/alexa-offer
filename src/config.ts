export const config = {
  candidate: {
    firstName: "Alexa",
    fullName: "Alexa Katz",
  },

  role: {
    title: "Head of Product",
    company: "Thrive",
    companyUrl: "https://thrivebetter.com",
  },

  hero: {
    headline: "Alexa, this role was designed for someone who thinks in systems and ships with taste.",
    subheadline: "Bionic Health became Thrive. The mission grew up. Now we need a Head of Product who makes ambition feel inevitable.",
  },

  transformation: {
    chapters: [
      {
        phase: "The early chapter",
        title: "Scrappy and learning fast",
        description: "A physician-founder who watched his brother-in-law die from a heart attack nobody saw coming. An ER doctor who got tired of treating symptoms and started asking: what if we caught this stuff years earlier? That frustration became Bionic Health — a telehealth company built on a big thesis about preventive medicine.",
      },
      {
        phase: "The shift",
        title: "Clarity hit",
        description: "We partnered with OrangeTheory, F45, and Anytime Fitness. We built an AI health assistant. We assembled an advisory board from Harvard, Duke, Yale, and Microsoft. The product expanded from weight loss into hormone therapy, biomarker tracking, and a full healthspan program. The ambition outgrew the name.",
      },
      {
        phase: "Now",
        title: "Thrive is ready to compound",
        description: "Four product lines. A health scoring system that measures what actually matters across Heart, Metabolic, Brain, and Cancer Prevention. A care team model — physician + health coach + AI — that no single-product competitor can replicate. And 1 in 4 members are uncovering serious health risks they didn't know they had. This is real. It needs a product leader who can make it cohere.",
      },
    ],
  },

  pillars: [
    {
      title: "Vision",
      summary: "What we believe about health and why now",
      points: [
        "Preventive medicine is shifting from luxury to infrastructure. The gym is the front door.",
        "Members who see their health improving in real metrics stay forever. Retention is a product problem.",
        "AI + biomarkers + physician oversight is the care model that scales — none of the three alone is enough.",
      ],
      hardTruth: "We're not building another dashboard. We're building a system that changes behavior.",
    },
    {
      title: "Strategy",
      summary: "Where we win, where we don't play",
      points: [
        "We win with fitness-adjacent members who are motivated but under-served by traditional healthcare.",
        "We win with a care team model no single-product competitor can replicate.",
        "We don't compete on price with commodity telehealth — we compete on outcomes.",
      ],
      hardTruth: "If we can't measure the outcome, we don't ship the feature.",
    },
    {
      title: "Execution",
      summary: "Shipping cadence, instrumentation, iteration",
      points: [
        "Weekly deploys. Bi-weekly sprint reviews with clinical + engineering + product.",
        "Every feature ships with success criteria defined before the first line of code.",
        "Product decisions driven by data, not opinions.",
      ],
      hardTruth: "No roadmap survives contact with customer truth. We adapt fast.",
    },
    {
      title: "Craft",
      summary: "Taste, narrative, ruthless prioritization",
      points: [
        "The member experience should feel designed by someone who cares about people, not just conversion.",
        "Copy, interaction, and clinical flow are all product decisions. No orphan experiences.",
        "We say no to 90% of ideas so the 10% ship excellently.",
      ],
      hardTruth: "No dashboards without decisions. No features without follow-through.",
    },
  ],

  bets: [
    {
      id: "onboarding",
      title: "Fix onboarding conversion and time-to-value",
      description: "Cart abandonment is ~80%. The single biggest lever is getting a doctor visit scheduled at checkout. Make that first experience seamless.",
    },
    {
      id: "score",
      title: "Make the ThriveBetter Score the product's backbone",
      description: "We built a 4-domain health scoring system (Heart, Metabolic, Brain, Cancer Prevention). It needs to go from internal spreadsheet to shipped product that members obsess over.",
    },
    {
      id: "journey",
      title: "Unify the member journey across all programs",
      description: "Weight loss, hormones, healthspan — three products, one member. It should feel like one experience, not three apps stitched together.",
    },
    {
      id: "experimentation",
      title: "Build a real experimentation and analytics muscle",
      description: "Move from 'we think this works' to 'we know this works.' Instrumentation, A/B testing, learning loops.",
    },
    {
      id: "ai",
      title: "Scale the AI health assistant into a core differentiator",
      description: "It's live in the app. The question is how it goes from helpful to indispensable.",
    },
  ],
  betResponse: "Yes. That's exactly the kind of thinking we want you leading.",

  charter: [
    {
      phase: "First 30 days",
      title: "Listen, map, diagnose",
      outcomes: [
        "Complete onboarding as a Thrive member yourself. Experience every touchpoint.",
        "Shadow 10+ member calls and 5+ physician visits.",
        "Deliver a written product assessment: what's working, what's broken, what's missing.",
      ],
      meetings: "Weekly 1:1 with Jared (founder/CMO), intro sessions with every team lead.",
      metric: "Completion of product assessment with prioritized opportunity map.",
    },
    {
      phase: "60 days",
      title: "Align, prioritize, ship one thing",
      outcomes: [
        "Publish a 90-day roadmap with clear bets, sequencing, and success criteria.",
        "Ship one high-impact improvement (likely the onboarding/scheduling flow).",
        "Establish sprint rituals and cross-functional review cadence.",
      ],
      meetings: "Bi-weekly product review, monthly business review with leadership.",
      metric: "Measurable improvement in onboarding conversion from ~20% baseline.",
    },
    {
      phase: "90 days",
      title: "Own the system, accelerate",
      outcomes: [
        "ThriveBetter Score V1 shipped in-app with member-facing visualization.",
        "Analytics instrumentation live across core flows.",
        "Product team operating rhythm running without daily founder input.",
      ],
      meetings: "Quarterly planning session, first board-level product update (you present).",
      metric: "Member engagement with health score + NPS movement.",
    },
  ],

  operatingSystem: [
    {
      label: "Customer truth",
      description: "Every product decision starts with member evidence — calls, data, feedback. Not stakeholder opinions.",
      example: "We review member recordings in every sprint planning.",
    },
    {
      label: "Roadmap discipline",
      description: "The roadmap is a living document with explicit bets, not a wish list. Every item has a success metric and a kill criteria.",
      example: "If it doesn't move its target in 4 weeks, we cut or iterate.",
    },
    {
      label: "Shipping cadence",
      description: "Weekly deploys. Bi-weekly demos. Monthly business reviews.",
      example: "We went from idea to shipped GLP-1 onboarding flow in 11 days.",
    },
    {
      label: "Learning loops",
      description: "We don't celebrate launches. We celebrate learning.",
      example: "Every shipped feature gets a 2-week retro with real data.",
    },
  ],
  operatingSystemTagline: "We don't ship output. We ship outcomes.",

  quotes: [
    {
      text: "This is the first health company I've seen where the product team actually talks to patients every week. It changes everything.",
      author: "Team member",
      role: "Engineering",
    },
    {
      text: "I came for the weight loss program and stayed because someone actually explained my bloodwork in a way that made me want to improve.",
      author: "Jennifer",
      role: "Thrive member",
    },
    {
      text: "Most health tech is built by people who've never been in a clinic. This team has a physician-founder who still sees patients. That shows in the product.",
      author: "Advisor",
      role: "Medical Advisory Board",
    },
  ],

  offer: {
    role: {
      title: "Head of Product",
      description: "You own the entire product surface, from vision to shipped feature. This isn't a PM role that reports to a committee.",
    },
    compensation: {
      base: "$XXX,XXX",
      details: "Performance bonus and equity participation — details in formal offer.",
    },
    benefits: [
      "Comprehensive health, dental, and vision",
      "401(k) with company match",
      "Flexible PTO",
      "Remote-first with Durham co-working",
      "Learning & development budget",
      "Home office stipend",
    ],
    mission: "1 in 4 Thrive members uncover a serious health risk they didn't know about. That's what your product decisions protect.",
  },

  cta: {
    closingLine: "If you want the kind of product role where your taste, your strategy, and your decisions compound into real health outcomes for real people — this is it.",
    primaryButton: {
      label: "Yes. Let's do this.",
      href: "mailto:jared@thrivebetter.com?subject=Let's%20do%20this%20%E2%80%94%20Head%20of%20Product&body=Jared%2C%0A%0AI%20loved%20the%20offer%20page.%20Let's%20talk.%0A%0AAlexa",
    },
    secondaryButton: {
      label: "Let's talk it through",
      href: "https://calendly.com/jared-thrive/30min",
    },
    signature: {
      name: "Jared Pelo, MD",
      title: "Founder & CMO, Thrive",
    },
    ps: "We built this page instead of sending a PDF. That should tell you something about how we think about product.",
  },

  footer: {
    legalNote: "This is a friendly offer summary, not a legal contract. Final details in formal paperwork.",
    easterEgg: "Outcome > Output",
  },
}
