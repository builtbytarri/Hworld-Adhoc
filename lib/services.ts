export interface Service {
  slug: string;
  title: string;
  shortDesc: string;
  longDesc: string;
  tools?: string[];
  techniques: string[];
  category: "management" | "forensics";
  icon: string;
  hidden?: boolean;
}

export const managementServices: Service[] = [
  {
    slug: "program-management",
    title: "Programme Management",
    shortDesc:
      "A programme manager on your project within days, ready to steady a stretched delivery team or lead it outright at any stage.",
    longDesc:
      "When a programme is drifting or a delivery lead walks, you can't wait months to hire. We put a battle-tested programme manager into your structure within days, as embedded resource, programme lead, or interim director. They set up governance, manage stakeholders and interfaces, drive reporting, escalate risk, and own delivery oversight across NEC, JCT and bespoke contracts, then hand back cleanly once the job is done.",
    techniques: [
      "Programme governance setup",
      "Stakeholder & interface management",
      "Risk & issue escalation",
      "Mobilisation planning",
      "End-to-end delivery oversight",
    ],
    tools: ["Microsoft Project", "Power BI", "Asite", "SharePoint"],
    category: "management",
    icon: "LayoutGrid",
  },
  {
    slug: "planning-and-controls",
    title: "Planning & Controls",
    shortDesc:
      "Planning resource on demand, covering baseline schedules, critical-path analysis, lookaheads and recovery programmes for as long as your programme needs it.",
    longDesc:
      "A planner off sick, a baseline overdue, a programme sliding toward a milestone: the moments you need scheduling firepower are rarely planned. We embed a planning specialist into your project within days to build the schedule, run critical-path and lookahead planning, and develop recovery programmes when things slip, keeping your programme credible, auditable and defensible at every stage of delivery.",
    tools: ["Primavera P6", "Asta Powerproject", "Microsoft Project", "Aphex"],
    techniques: [
      "Baseline schedule development",
      "Critical path analysis",
      "3-week lookahead planning",
      "Recovery schedule development",
      "Progress monitoring & reporting",
    ],
    category: "management",
    icon: "Calendar",
  },
  {
    slug: "financial-services",
    title: "Financial Services",
    shortDesc:
      "Project financial control, deployed fast, covering budget tracking, cash-flow forecasting and cost reporting alongside your team or as the function itself.",
    longDesc:
      "When cost visibility slips or your commercial team is stretched, you need financial control fast. We deploy a specialist to run budget tracking, cash-flow forecasting, cost reporting and financial risk management, fully integrated with your delivery programme so spend, exposure and trajectory stay clear. Work alongside your QS, or hand us the function outright, for a busy period or a full programme.",
    techniques: [
      "Budget tracking & control",
      "Cash flow forecasting",
      "Cost reporting & dashboards",
      "Financial risk management",
      "Earned value management",
    ],
    category: "management",
    hidden: true,
    icon: "TrendingUp",
  },
  {
    slug: "document-management",
    title: "Document Management",
    shortDesc:
      "Document control on demand, kept version-controlled, auditable and contractually compliant, stood up or strengthened exactly when your project needs it.",
    longDesc:
      "Projects generate enormous documentation, and without disciplined control the version conflicts, compliance gaps and contractual exposure follow fast. We deploy a document-control specialist to establish or strengthen your framework, keeping every record accurate, version-controlled, auditable and compliant from mobilisation to handover. Bring us in to set the system up, cover a gap, or run it through a busy phase.",
    techniques: [
      "Version control & register management",
      "Transmittal tracking",
      "Contractual compliance auditing",
      "Information management setup",
      "Handover documentation",
    ],
    category: "management",
    hidden: true,
    icon: "FileText",
  },
  {
    slug: "risk-management",
    title: "Risk Management",
    shortDesc:
      "Systematic risk analysis, brought in on cue, covering registers, Monte Carlo and schedule risk analysis the moment exposure needs quantifying.",
    longDesc:
      "Risk left unmanaged becomes cost, usually at the worst possible moment. We deploy a risk specialist to identify, quantify and mitigate exposure across your programme, building and running risk registers, Monte Carlo simulation, schedule risk analysis (SRA) and cost risk analysis (CRA), and feeding the outputs straight into planning decisions. Engaged for a single quantification exercise or ongoing through delivery, you leave certain of your numbers.",
    techniques: [
      "Risk register development",
      "Monte Carlo simulation",
      "Schedule risk analysis (SRA)",
      "Cost risk analysis (CRA)",
      "Risk response & mitigation planning",
    ],
    category: "management",
    hidden: true,
    icon: "Shield",
  },
  {
    slug: "4d-planning",
    title: "4D Planning",
    shortDesc:
      "4D specialists who link your programme to the 3D model, producing time-based build simulations the moment you need them.",
    longDesc:
      "Need to prove a build sequence, de-risk logistics, or brief a board before a key decision? We deploy a 4D specialist to link your construction programme to the 3D model, producing time-sequenced simulations that expose clashes, validate logistics and communicate progress with total clarity. We work in Synchro with Revit and AutoCAD, for a one-off visualisation or ongoing support, including forensic 4D for claims.",
    tools: ["Synchro", "Primavera P6", "Asta Powerproject", "Revit", "AutoCAD"],
    techniques: [
      "4D build sequencing",
      "Clash detection & resolution",
      "Logistics simulation",
      "Programme validation",
      "Forensic 4D for claims support",
    ],
    category: "management",
    icon: "Box",
  },
  {
    slug: "commercial-management",
    title: "Commercial Management",
    shortDesc:
      "End-to-end commercial and contract management on flexible terms, from procurement through final account, deployed when your commercial function needs reinforcing.",
    longDesc:
      "Commercial management is where projects win or lose money, and where a gap costs most. We deploy commercial resource within days to handle procurement strategy and sub-contract drafting, change management, payment-application reviews and final-account resolution, with QS-grade rigour across NEC, JCT and FIDIC. Take one commercial manager or a small team, for a single stage or the full contract.",
    techniques: [
      "Procurement strategy & management",
      "Contract administration",
      "Change management & control",
      "Payment application review",
      "Final account resolution",
    ],
    category: "management",
    hidden: true,
    icon: "Briefcase",
  },
  {
    slug: "project-estimations",
    title: "Project Estimations",
    shortDesc:
      "Detailed estimates and cost plans ready on deadline, covering bills of quantities, tender pricing and value engineering when a submission can't slip.",
    longDesc:
      "A tender to price, a budget to set, a value-engineering exercise under deadline: accurate estimating underpins the decision, and you need it now. We deploy an estimator to prepare detailed estimates, elemental cost plans and bills of quantities from first principles, applying current market rates, local labour intelligence and risk-adjusted allowances. These are estimates you can defend, delivered on time.",
    techniques: [
      "Elemental cost planning",
      "Bills of quantities preparation",
      "Tender pricing support",
      "Value engineering",
      "Market benchmarking",
    ],
    category: "management",
    hidden: true,
    icon: "Calculator",
  },
  {
    slug: "functional-lead",
    title: "Functional Lead Service",
    shortDesc:
      "An embedded senior expert who owns your planning or controls function, giving you the weight of a permanent lead on flexible terms.",
    longDesc:
      "On a major programme the planning or controls function needs senior ownership, but a permanent appointment can take months you don't have. We place an experienced expert directly into your organisation as the client-side lead, owning the function, directing internal and supply-chain planners, and reporting at programme level. It is full functional leadership from day one, on an interim basis, for as long as the programme demands.",
    techniques: [
      "Planning function leadership",
      "Supply chain planner management",
      "Programme-level reporting",
      "Client-side governance",
      "Interim planning director role",
    ],
    tools: ["Primavera P6", "Microsoft Project", "Power BI", "Asite"],
    category: "management",
    icon: "Users",
  },
  {
    slug: "project-controls",
    title: "Project Controls",
    shortDesc:
      "Integrated controls covering schedule, cost, risk and change, stood up fast whether from scratch or to reinforce an existing team.",
    longDesc:
      "Your board needs numbers it can trust and the controls function isn't there, or isn't coping. We deploy controls resource within days to stand one up from nothing or reinforce what you have, covering schedule, cost, risk and change, with the dashboards and KPIs that keep leadership informed. Take one controls specialist or a small team, for a busy period or a full programme, and you own every output when we leave.",
    tools: ["Primavera P6", "Asta Powerproject", "Microsoft Project", "Power BI"],
    techniques: [
      "Earned value management (EVM)",
      "Schedule performance index (SPI)",
      "Cost performance index (CPI)",
      "Change control management",
      "Programme reporting & dashboards",
    ],
    category: "management",
    icon: "BarChart2",
  },
];

export const forensicsServices: Service[] = [
  {
    slug: "claims-analysis",
    title: "Claims Analysis",
    shortDesc:
      "Expert claims analysis covering EOT, prolongation and disruption, quantified and evidenced the moment a claim lands on your desk.",
    longDesc:
      "A claim has landed, or you're about to make one, and the outcome rides on your programme analysis. We deploy a forensic analyst to build it, covering extension-of-time entitlement, prolongation cost, and disruption analysis, for contractor or employer alike. Every output is prepared to a standard that holds up in negotiation, adjudication or litigation, whether you engage us for a single claim or a full-blown dispute.",
    techniques: [
      "Time Impact Analysis (TIA)",
      "Windows Analysis",
      "As-Built vs As-Planned",
      "As-Built But For Analysis",
      "Collapsed As-Built",
      "Impacted As-Planned",
      "Earned Value Analysis",
      "Critical Path Analysis",
    ],
    tools: ["Primavera P6", "Asta Powerproject", "Deltek Acumen", "Synchro"],
    category: "forensics",
    icon: "Search",
  },
  {
    slug: "dispute-resolution",
    title: "Dispute Resolution",
    shortDesc:
      "Independent expert support across the full dispute spectrum, from early evaluation to adjudication and arbitration, brought in exactly when it counts.",
    longDesc:
      "When a dispute is brewing, the earliest expert analysis often decides the outcome. We provide independent programme and commercial analysis to support or defend claims at any stage, from early neutral evaluation and negotiation through to adjudication, arbitration and litigation. Our approach is evidence-led and outcome-focused, building the strongest possible technical case while working to settle at the earliest opportunity, for as long as the matter runs.",
    techniques: [
      "Dispute avoidance strategy",
      "Programme health checks",
      "Independent programme audits",
      "Expert report preparation",
      "Adjudication support",
      "Arbitration & litigation support",
      "Mediation preparation",
    ],
    tools: ["Primavera P6", "Asta Powerproject", "Deltek Acumen", "Microsoft Project"],
    category: "forensics",
    icon: "Scale",
  },
  {
    slug: "expert-witness",
    title: "Expert Witness",
    shortDesc:
      "Independent, court-ready expert witnesses on delay, disruption and lost productivity, appointed for the case and seen through to its close.",
    longDesc:
      "When a dispute reaches formal proceedings, the expert-witness role demands independence, rigour and absolute clarity under pressure. We appoint an expert to prepare and present objective, court-ready programme analysis and opinion on delay, disruption and loss of productivity, to CPR Part 35 and equivalent international standards. From the first report through joint meetings to cross-examination, we see the case through.",
    techniques: [
      "Expert report preparation (CPR Part 35)",
      "Delay & disruption analysis",
      "Loss of productivity quantification",
      "Joint expert meetings",
      "Cross-examination support",
    ],
    tools: ["Primavera P6", "Asta Powerproject", "Deltek Acumen"],
    category: "forensics",
    icon: "Gavel",
  },
];

/*
 * Common toolset used across the whole practice, appended to every service's
 * own tools on the detail pages so each "Tools We Use" section is consistent
 * (and fills the page). Deduplicated against any service-specific tools.
 */
export const commonTools = [
  "Primavera P6",
  "Asta Powerproject",
  "Microsoft Project",
  "Aphex",
  "Nodes & Link",
  "Acumen Fuse",
];

export const visibleManagementServices = managementServices.filter((s) => !s.hidden);

export const allServices = [...managementServices, ...forensicsServices];

export function getServiceBySlug(slug: string): Service | undefined {
  return allServices.find((s) => s.slug === slug);
}
