export interface CaseStudy {
  id: string;
  title: string;
  company: string;
  topic: string;
  skills: string[];
  angle: string;
  category: 'Critique' | 'Framework' | 'RCA' | 'UX' | 'AI';
  research: string[];
  structure: {
    section: string;
    content: string;
  }[];
  learning: string;
  fullStory: {
    title: string;
    sections: {
      title: string;
      content: string;
      subPoints?: string[];
    }[];
  };
}

export const caseStudies: CaseStudy[] = [
  {
    id: 'notion-pricing',
    title: "Why Notion's Pricing is Genius—And Where It Fails",
    company: "Notion",
    topic: "Pricing Strategy + Product-Market Fit",
    skills: ["Product Strategy", "Monetization", "UX Trade-offs"],
    category: 'Critique',
    angle: "What Notion got right about freemium. What they're leaving on the table.",
    research: [
      "Notion's pricing tiers (free, plus, business, enterprise)",
      "Read 1-2 articles on Notion's pricing evolution",
      "Compare to competitors (Coda, Obsidian, Monday.com)",
      "Look at Notion's growth trajectory (free vs. paid adoption)"
    ],
    structure: [
      {
        section: "Situation",
        content: "Notion dominated with free tier. Built massive network of users. But monetization lagged behind comparable products."
      },
      {
        section: "The Genius",
        content: "Free tier created inescapable switching costs (everyone uses it collaboratively). Network effects compound. Freemium is optimal for this use case."
      },
      {
        section: "The Problem",
        content: "Pricing tiers don't map to value creation. 'Plus' tier at $10/user/month feels arbitrary. Unclear when you 'need' it. Conversion rates likely lower than they could be."
      },
      {
        section: "Your Analysis",
        content: "What's working: Free tier + free credits strategy is brilliant for acquisition. What's not: Tier design assumes feature-based value, but real value is storage/seats. What you'd do: Value-based pricing (charge for workspace seats, storage). Trade-off: Would sacrifice some freemium adoption for higher LTV."
      }
    ],
    learning: "Freemium isn't one thing. You need to decide: Are you using free as acquisition or as retention? Notion optimized for acquisition but could optimize pricing for monetization.",
    fullStory: {
      title: "The Structural Truth of Notion's Monetization Engine",
      sections: [
        {
          title: "The Freemium Trap",
          content: "Notion's growth story is legendary, but its monetization story is a cautionary tale of 'value-capture lag.' By giving away too much power in the free tier, they've created a user base that is highly engaged but resistant to conversion.",
          subPoints: [
            "The 'Personal Pro' legacy: Why users still expect everything for free.",
            "The friction of team migration: Why moving from solo to team feels like a penalty.",
            "The 'Plus' tier identity crisis: Is it for power users or small teams?"
          ]
        },
        {
          title: "Architecting the Pivot",
          content: "To unlock the next level of LTV, Notion must stop selling 'features' and start selling 'organizational clarity.' The pricing should reflect the scale of the knowledge base, not just the number of heads in the room.",
          subPoints: [
            "Implementing storage-based triggers that feel natural, not forced.",
            "Creating 'Collaboration Moats' that make the Plus tier essential for any team of 2+.",
            "The role of AI as a monetization catalyst."
          ]
        }
      ]
    }
  },
  {
    id: 'chatgpt-pricing',
    title: "ChatGPT's Pricing Problem: Why Free Tier Strategy Will Eventually Backfire",
    company: "OpenAI / ChatGPT",
    topic: "AI Product Go-to-Market + Monetization Strategy",
    skills: ["Product Strategy", "AI/ML Product Thinking", "GTM Timing", "Monetization"],
    category: 'Critique',
    angle: "What ChatGPT did brilliantly. Why their monetization strategy is fragile.",
    research: [
      "ChatGPT free vs. Plus ($20/month) adoption rates",
      "API pricing vs. consumer pricing (why the disconnect?)",
      "Competitive pressure (Claude, Gemini, Copilot)",
      "Search for any OpenAI blog posts on pricing philosophy"
    ],
    structure: [
      {
        section: "Situation",
        content: "ChatGPT launched free-first to build adoption. Brilliant. 100M users in 2 months. Now they're trying to monetize with Plus tier ($20/month) + API + Enterprise."
      },
      {
        section: "The Genius",
        content: "Free-first captured mind-share. Became default AI tool. Built consumer loyalty before enterprise moved."
      },
      {
        section: "The Problem",
        content: "$20/month Plus tier has <5% adoption. API pricing is high ($0.002 per 1K tokens). Enterprise deals are slow. They're capturing value poorly despite dominant position."
      },
      {
        section: "Your Analysis",
        content: "Why free-first worked: For network-effect products, free creates defensibility. Why monetization is hard: Free tier trained users to expect free. $20/month feels expensive for marginal improvements. What they should do: Separate use cases (free for exploration, enterprise for work). Simplify pricing tiers."
      }
    ],
    learning: "Pricing strategy for AI products is different. You're not selling a feature. You're selling access to a capability. Think about who's building on you vs. who's using you.",
    fullStory: {
      title: "The AI Monetization Paradox",
      sections: [
        {
          title: "The Adoption vs. Revenue Gap",
          content: "OpenAI has achieved the fastest adoption in history, but they are facing the 'Utility vs. Cost' wall. When a tool is so useful that it becomes a utility, users expect utility pricing—not luxury subscription pricing.",
          subPoints: [
            "The $20 psychological barrier.",
            "Why API consumers are the real profit engine.",
            "The threat of 'Good Enough' open-source models."
          ]
        }
      ]
    }
  },
  {
    id: 'figma-adobe',
    title: "Figma's Market Disruption: How They Ate Adobe's Lunch",
    company: "Figma vs. Adobe (XD)",
    topic: "Product Strategy, Market Disruption, UX Philosophy",
    skills: ["Product Strategy", "Positioning", "UX/DX", "Market Analysis"],
    category: 'Critique',
    angle: "Why Figma won. Why Adobe lost. The strategic decisions that mattered.",
    research: [
      "Figma's positioning (collaborative, web-first, design-to-code)",
      "Adobe XD's approach (feature-parity with Illustrator/Photoshop)",
      "Read 1-2 articles on Figma's market strategy",
      "Look at design community sentiment (why designers switched)"
    ],
    structure: [
      {
        section: "Situation",
        content: "Adobe owned design tools for 20 years. XD was their bet to compete in digital design. Figma launched as collaborative, web-first alternative. Now Figma dominates. Adobe acquired Figma for $20B. What happened?"
      },
      {
        section: "The Genius (Figma's)",
        content: "Bet on collaboration when design was solo. Web-first when industry thought native was better. Developer-friendly (not just designers). Frictionless onboarding (cloud, no install)."
      },
      {
        section: "The Problem (Adobe's)",
        content: "Built XD as 'Illustrator for digital' (feature parity approach). Assumed designers wanted Adobe's ecosystem. Didn't understand that collaboration was the unmet need, not more features. Treated design tools as professional software, not platforms for teams."
      },
      {
        section: "Your Analysis",
        content: "Why Figma won: Nailed the use case (collaborative design, remote work). UX was 10x simpler. Network effects (shared files, team collaboration). Why Adobe lost: Market intelligence failure. Didn't see collaboration as existential. The inflection point: When design moved from individual craft to team collaboration, Figma's model became obviously superior."
      }
    ],
    learning: "Product strategy wins aren't about feature counts. They're about understanding the inflection point in how work is done. Adobe was building for 2010. Figma was building for 2020.",
    fullStory: {
      title: "The Browser-First Revolution",
      sections: [
        {
          title: "The Death of the Native App",
          content: "Adobe's biggest mistake was believing that 'professional' meant 'native.' Figma proved that 'professional' meant 'accessible.' By moving the canvas to the browser, Figma didn't just change where designers worked; they changed who designers worked with.",
          subPoints: [
            "The multiplayer effect: Why design is a team sport.",
            "Developer handoff: The hidden friction that Figma solved.",
            "The power of the URL: Design as a living document."
          ]
        }
      ]
    }
  },
  {
    id: 'metrics-framework',
    title: "Building a Metrics Framework for a New SaaS Product",
    company: "Framework",
    topic: "Product Metrics & Analytics",
    skills: ["Metrics Rigor", "Analytics", "Success Definition", "Hypothesis Testing"],
    category: 'Framework',
    angle: "Most products measure the wrong things. Here's how I'd build metrics from first principles.",
    research: [
      "Read 1-2 articles on OKR frameworks",
      "Look at how successful SaaS companies (Slack, Figma, Stripe) talk about key metrics",
      "Think about your own experience at Fareportal (what metrics mattered?)"
    ],
    structure: [
      {
        section: "The Problem",
        content: "New product launches measure everything. Leads, signups, engagement, retention, revenue. They're buried in dashboards. They don't know what actually matters."
      },
      {
        section: "Your Framework (The Core)",
        content: "Layer 1: North Star Metric (one metric that reflects product-market fit). Layer 2: Driver Metrics (3-5 metrics that influence North Star). Layer 3: Health Metrics (metrics you need to not break). Layer 4: Leading Indicators (what to watch for future problems)."
      },
      {
        section: "How to Build This (Methodology)",
        content: "Start with your business model. Identify what drives retention. Define North Star from there. Build everything else backward from North Star. Challenge: Can you move the business with a 10% improvement in this metric?"
      }
    ],
    learning: "Metrics rigor isn't about having a perfect dashboard. It's about understanding what you're actually optimizing for. If you can't explain why a metric matters in one sentence, it doesn't belong in your framework.",
    fullStory: {
      title: "The Metrics Hierarchy",
      sections: [
        {
          title: "The North Star Myth",
          content: "A North Star metric is useless if it's not actionable. Most companies pick 'Revenue' as their North Star, but revenue is a lagging indicator. A true North Star measures the value delivered to the customer.",
          subPoints: [
            "Why 'Daily Active Users' is often a vanity metric.",
            "The difference between leading and lagging indicators.",
            "How to align team incentives with metrics."
          ]
        }
      ]
    }
  },
  {
    id: 'vanity-metrics',
    title: "Why Your Engagement Metrics Are Lying: How to Spot Vanity Metrics",
    company: "Framework",
    topic: "Product Metrics & Analytics",
    skills: ["Analytics Rigor", "Critical Thinking", "Data Literacy"],
    category: 'Framework',
    angle: "Most dashboards are full of vanity metrics. Here's what to measure instead.",
    research: [
      "Skim Goodhart's Law ('When a measure becomes a target, it ceases to be a good measure')",
      "Think of examples you've seen (metrics that went up but business got worse)",
      "Look at Airbnb/Uber early days (they measured activity, not profit initially)"
    ],
    structure: [
      {
        section: "The Problem",
        content: "Your daily active users is up 40%. You're excited. Your business is dying. Sound familiar?"
      },
      {
        section: "What Are Vanity Metrics?",
        content: "Metrics that look impressive but don't tie to business outcomes. Examples: Page views, signups, daily active users (if no monetization tied to it). Why they're dangerous: They're not actionable, they deceive stakeholders, they optimize for the wrong thing."
      },
      {
        section: "Your Analysis",
        content: "The Core Issue: Vanity metrics measure activity, not value. The Solution: Actionable metrics that tie to revenue or retention. The Test: If this metric goes up, does it mean the business is healthier? If not, it's a vanity metric."
      }
    ],
    learning: "Metrics are mirrors. They show you what you're optimizing for. If your metrics don't align with what you care about, you're optimizing for the wrong thing—even if the numbers look good.",
    fullStory: {
      title: "The Vanity Metric Audit",
      sections: [
        {
          title: "The Deception of Growth",
          content: "Growth for the sake of growth is the ideology of the cancer cell. In product management, growth without retention is a leaky bucket. Vanity metrics hide the leaks.",
          subPoints: [
            "The 'Signup' trap: Why acquisition isn't product-market fit.",
            "The 'DAU' delusion: When activity doesn't equal value.",
            "Building an 'Actionable' dashboard."
          ]
        }
      ]
    }
  },
  {
    id: 'google-glass',
    title: "Why Google Glass Failed: The Strategic Mistakes (Not the Technology)",
    company: "Google Glass",
    topic: "Product Strategy, Market Fit, User Research",
    skills: ["Product Strategy", "Market Analysis", "RCA", "UX/DX"],
    category: 'RCA',
    angle: "Everyone blames technology. The real mistakes were strategic.",
    research: [
      "Google Glass history (launched 2013, discontinued 2015 for consumers)",
      "Why it failed: Read 2-3 articles on post-mortems",
      "Who succeeded: HoloLens, Snapchat Spectacles (why?)",
      "Consumer sentiment vs. enterprise potential"
    ],
    structure: [
      {
        section: "The Context",
        content: "Google Glass was hailed as the future of computing. $1.5K price tag. Massive buzz. Shipped in 2013. Discontinued for consumers in 2015. Enterprise version limped on. Why?"
      },
      {
        section: "Mistake 1: Solved a Problem Nobody Had",
        content: "Use use case: 'Hands-free computing.' Ambient information access. Reality: People already had phones. Phones work great for this. The question they didn't ask: 'Why would someone want a display 2 inches from their eye instead of in their pocket?'"
      },
      {
        section: "Mistake 2: Wrong Go-to-Market",
        content: "Strategy: Sell to early adopters (tech enthusiasts). Problem: Enthusiasts are not the same as customers. They wanted Glass as a status symbol. Not because it solved a problem. Result: Terrible PR. People thought Glass was dystopian."
      },
      {
        section: "Your Analysis",
        content: "Strategic Failure: Google Glass was a solution in search of a problem. They optimized for 'wow factor' instead of 'utility factor.' The lesson: Technology is a tool, not a product. If the tool doesn't solve a problem 10x better than the status quo, it will fail."
      }
    ],
    learning: "Product success isn't about technology. It's about finding a market where your solution is 10x better than alternatives. Glass was marginally better than phones. Phones won.",
    fullStory: {
      title: "The Glass Post-Mortem",
      sections: [
        {
          title: "The Privacy Moat",
          content: "Google ignored the social cost of their product. By putting a camera on everyone's face, they created a social friction that no amount of technology could overcome.",
          subPoints: [
            "The 'Glasshole' phenomenon: A branding disaster.",
            "Why enterprise was the real opportunity.",
            "The ergonomics of attention."
          ]
        }
      ]
    }
  },
  {
    id: 'quibi-failure',
    title: "Why Quibi Failed: The Inflection Point Most Missed",
    company: "Quibi (Quick Bites video)",
    topic: "Product Strategy, Market Fit, Strategic Timing",
    skills: ["Product Strategy", "Market Analysis", "RCA", "Business Model Thinking"],
    category: 'RCA',
    angle: "Everyone says 'timing.' Here's the actual strategic mistake.",
    research: [
      "Quibi launched 2020, shut down 2021 (18 months, $1.75B raised, burned almost all of it)",
      "Why it failed: Read 1-2 post-mortems",
      "Compare to success: TikTok, YouTube Shorts (why did they win?)"
    ],
    structure: [
      {
        section: "The Idea",
        content: "Short-form video content. Premium. Original. 7-10 min episodes. Vertical or landscape. $5-8/month. Launched April 2020 (height of COVID lockdowns)."
      },
      {
        section: "The Real Strategic Failure",
        content: "1. Solved a Problem That Didn't Exist: Target was busy professionals on-the-go. Reality (2020): People were at home. Had time. Watched Netflix. 2. Business Model Backwards: They charged $5-8/month for 'premium' short content. Competitors (TikTok, Reels) were free."
      },
      {
        section: "Your Analysis",
        content: "The Inflection Point: Quibi failed to understand that 'short form' is a format for discovery, not for premium subscription. They tried to apply a 20th-century Hollywood model to a 21st-century digital world. The mistake: Over-investing in content before validating the business model."
      }
    ],
    learning: "Sometimes your assumptions are just wrong. Quibi assumed people wanted 'premium short-form content.' They didn't. At month 2, the data showed this. They ignored it. By month 6, it was too late to pivot.",
    fullStory: {
      title: "The $1.75B Quick Bite",
      sections: [
        {
          title: "The Content Fallacy",
          content: "Quibi believed that 'Premium Content' was the product. In the digital age, 'Distribution' and 'Community' are the product. They built a walled garden in a world of open fields.",
          subPoints: [
            "The mobile-only constraint: A fatal UX decision.",
            "Why you can't compete with 'Free' using 'Premium' in short-form.",
            "The lack of social sharing features."
          ]
        }
      ]
    }
  },
  {
    id: 'onboarding-redesign',
    title: "Redesigning a Broken Onboarding Flow: From 12 Steps to 4",
    company: "Framework",
    topic: "UX Optimization, Conversion, Metrics",
    skills: ["UX/DX Thinking", "Conversion Optimization", "Metrics", "A/B Testing"],
    category: 'UX',
    angle: "Most onboarding flows are built for the business. Not for the user. Here's how I'd rebuild.",
    research: [
      "Think about onboarding flows you've experienced (what's terrible? what's great?)",
      "Light research on onboarding best practices",
      "Your own experience: Did Fareportal have onboarding? What worked/didn't?"
    ],
    structure: [
      {
        section: "The Problem",
        content: "A typical SaaS onboarding has 12 steps. Sign up → email verification → password creation → profile setup → preferences → feature tour → credit card → billing info → terms → welcome email → in-app tutorial → first task. By step 7, 60% have dropped."
      },
      {
        section: "Your Analysis",
        content: "The Solution: Progressive Disclosure. Don't ask for everything upfront. Get the user to the 'Aha!' moment as fast as possible. The Result: By deferring non-critical steps (like profile setup) until after the first successful action, activation rates can increase by 300%."
      }
    ],
    learning: "Onboarding optimization isn't about speed. It's about getting users to their aha moment. Everything else is noise.",
    fullStory: {
      title: "The Activation Engine",
      sections: [
        {
          title: "The Friction Audit",
          content: "Every field in your signup form is a reason for a user to leave. Onboarding is a race against the user's dwindling attention span. You must win that race by delivering value before you ask for it.",
          subPoints: [
            "The 'Aha!' moment: Finding the core value trigger.",
            "Progressive profiling: Collecting data over time.",
            "The role of 'Empty States' in onboarding."
          ]
        }
      ]
    }
  },
  {
    id: 'ai-framework',
    title: "When to Add AI to Your Product (And When NOT To): A Framework",
    company: "Framework",
    topic: "AI/ML Product Strategy, Feature Evaluation",
    skills: ["AI/ML Product Thinking", "Feature Prioritization", "Business Model Thinking"],
    category: 'AI',
    angle: "Every company is adding AI. Most shouldn't. Here's how to decide.",
    research: [
      "Think about products with AI (ChatGPT, Notion AI, Figma AI features, etc.)",
      "Which AI features feel essential? Which feel gimmicky?",
      "Light research on AI-first product strategy"
    ],
    structure: [
      {
        section: "The Problem",
        content: "Post-ChatGPT, everyone wants AI features. But most AI features are gimmicks. Slow. Inaccurate. Confusing to users. This is not your unfair advantage."
      },
      {
        section: "Your Analysis",
        content: "The Strategic Question: Is AI a feature or the product? If it's a feature, it must solve a core user friction. If it's the product, it must create a new category. The Framework: Only add AI if it makes the core task 10x faster or enables a task that was previously impossible."
      }
    ],
    learning: "AI isn't a feature. It's a tool. Use it when it genuinely solves a problem 10x better. Otherwise, it's just technical debt masquerading as innovation.",
    fullStory: {
      title: "The AI Strategy Guide",
      sections: [
        {
          title: "The Hype Cycle vs. Value Cycle",
          content: "We are in the 'Trough of Disillusionment' for generic AI wrappers. The next wave of AI products will be those that integrate AI into existing workflows so seamlessly that the user doesn't even know it's there.",
          subPoints: [
            "The 'Wrapper' problem: Why thin layers on LLMs will fail.",
            "Vertical AI: The power of domain-specific data.",
            "The cost of hallucination."
          ]
        }
      ]
    }
  },
  {
    id: 'prioritization-framework',
    title: "Building a Roadmap When Everything Matters: My Prioritization Framework",
    company: "Framework",
    topic: "Product Strategy, Roadmap Prioritization",
    skills: ["Product Strategy", "Prioritization", "Stakeholder Management", "Business Acumen"],
    category: 'Framework',
    angle: "How I'd prioritize 50 ideas into 5 quarters. With no regrets.",
    research: [
      "Think about prioritization frameworks you know (RICE, ICE, MoSCoW, etc.)",
      "What's wrong with standard frameworks? When do they fail?",
      "Think about your experience (at Fareportal, how did you prioritize?)"
    ],
    structure: [
      {
        section: "The Problem",
        content: "You have 50 ideas. Revenue goals. Customer requests. Tech debt. Leadership preferences. How do you prioritize without pissing everyone off?"
      },
      {
        section: "Your Analysis",
        content: "The Core Principle: Prioritization is about saying 'No' to good ideas so you can say 'Yes' to great ones. The Framework: Use a weighted scoring model (Impact, Confidence, Effort) but overlay it with Strategic Alignment. If it doesn't move the North Star, it doesn't get built."
      }
    ],
    learning: "Prioritization isn't about having the perfect framework. It's about being transparent about your thinking. Why do we do this? Why not that? When stakeholders understand the logic, they accept deferred ideas.",
    fullStory: {
      title: "The Art of the Roadmap",
      sections: [
        {
          title: "The Stakeholder Moat",
          content: "Roadmaps are communication tools, not execution plans. The goal of prioritization is to build consensus around what NOT to do. If everyone is happy with the roadmap, you're probably not prioritizing hard enough.",
          subPoints: [
            "The 'Loudest Voice' bias.",
            "Why 'Tech Debt' is a strategic investment.",
            "The 'Now, Next, Later' vs. 'Quarterly' debate."
          ]
        }
      ]
    }
  }
];
