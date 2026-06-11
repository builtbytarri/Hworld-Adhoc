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
      "On-demand deployment of experienced programme managers to supplement or lead delivery teams at any stage.",
    longDesc:
      "H-World deploys battle-tested programme managers who integrate seamlessly into your delivery structure — whether as embedded resource, programme lead, or interim director. We cover mobilisation and governance setup, stakeholder and interface management, progress reporting, risk and issue escalation, and end-to-end delivery oversight. Our managers operate across NEC, JCT, and bespoke contract frameworks, bringing rigour without disruption to your existing team.",
    techniques: [
      "Programme governance setup",
      "Stakeholder & interface management",
      "Risk & issue escalation",
      "Mobilisation planning",
      "End-to-end delivery oversight",
    ],
    category: "management",
    icon: "LayoutGrid",
  },
  {
    slug: "planning-and-controls",
    title: "Planning & Controls",
    shortDesc:
      "Specialist planning support — baseline scheduling, critical path analysis, lookahead planning, and recovery programmes.",
    longDesc:
      "Our planning specialists embed directly into your project, providing the scheduling backbone your delivery team needs. From initial programme development and baseline establishment through to live progress monitoring, critical path analysis, lookahead planning, and recovery schedule development — we bring the technical depth to keep your programme credible, auditable, and actionable at every stage of delivery.",
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
      "Project financial control and cost management — budget tracking, cash flow forecasting, and cost reporting.",
    longDesc:
      "Sound financial control is foundational to project success. H-World's financial services team provides budget tracking, cash flow forecasting, cost reporting, and financial risk management — all integrated with your delivery programme to give you a complete picture of spend, exposure, and trajectory. We work alongside your QS and commercial team, or act as the function in its entirety when needed.",
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
      "Structured document control and information management — version-controlled, compliant, and accessible throughout.",
    longDesc:
      "Projects generate enormous volumes of documentation. Without disciplined control, version conflicts, compliance gaps, and contractual exposure follow. H-World's document management specialists establish or strengthen your document control framework — ensuring all project documentation is accurate, version-controlled, auditable, and compliant with contractual requirements from mobilisation through to handover.",
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
      "Systematic risk identification, quantification, and mitigation — including Monte Carlo simulation and schedule risk analysis.",
    longDesc:
      "Risk left unmanaged becomes cost. H-World's risk management service provides systematic identification, quantification, and mitigation of project risks throughout the project lifecycle. We develop and maintain risk registers, run Monte Carlo simulation and schedule risk analysis (SRA), conduct cost risk analysis (CRA), and integrate risk outputs into planning decisions — giving you greater confidence in your predicted outcomes.",
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
      "Linking construction schedules to 3D models to create time-based visual simulations of the build sequence.",
    longDesc:
      "4D planning connects your construction programme to the 3D model — producing time-sequenced visual simulations of the build process that identify clashes, validate logistics, and communicate progress with unmatched clarity. H-World's 4D specialists work with Synchro, integrating with Revit and AutoCAD models, to support logistics planning, programme validation, stakeholder briefings, and — where required — forensic analysis of delay.",
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
      "End-to-end commercial and contract management — procurement, change management, payment applications, and final account.",
    longDesc:
      "Commercial management is where projects win or lose money. H-World provides end-to-end commercial and contract management — from procurement strategy and sub-contract drafting through to ongoing change management, payment application reviews, and final account resolution. Our commercial team brings QS-grade rigour and contract literacy across NEC, JCT, and FIDIC frameworks.",
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
      "Detailed project estimates, cost plans, and bills of quantities — supporting tender preparation and value engineering.",
    longDesc:
      "Accurate estimating underpins every sound investment decision. H-World prepares detailed project estimates, elemental cost plans, and bills of quantities to support tender submissions, budget setting, and value engineering exercises. Our estimators work from first principles — applying current market rates, local labour intelligence, and risk-adjusted allowances to deliver estimates you can defend.",
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
      "Embedded senior expert acting as your client-side functional lead — owning the planning function on major programmes.",
    longDesc:
      "On major programmes, the planning or controls function demands senior, dedicated leadership. H-World's Functional Lead Service places an experienced expert directly into your organisation as the client-side planning or controls lead — owning the function, directing internal and supply chain planners, and reporting at programme level. This is the solution for clients who need the expertise of a permanent appointment without the permanence.",
    techniques: [
      "Planning function leadership",
      "Supply chain planner management",
      "Programme-level reporting",
      "Client-side governance",
      "Interim planning director role",
    ],
    category: "management",
    icon: "Users",
  },
  {
    slug: "project-controls",
    title: "Project Controls",
    shortDesc:
      "Integrated project controls covering schedule, cost, risk, and change — the data infrastructure for informed decision-making.",
    longDesc:
      "Project controls is the nerve centre of delivery. H-World establishes and operates integrated controls environments covering schedule, cost, risk, and change management — delivering the reporting infrastructure, dashboards, and KPIs that keep leadership informed and projects on track. Whether you need to stand up a controls function from scratch or strengthen an existing one, we deploy the right resource at the right time.",
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
      "Expert analysis and quantification of contractor and employer claims — EOT assessments, prolongation costs, and disruption claims.",
    longDesc:
      "When claims arise, the quality of your programme analysis determines the outcome. H-World produces rigorous, impartial claims analysis for both contractors and employers — covering extension of time (EOT) entitlement assessments, prolongation cost claims, and disruption analysis. All analysis is prepared to a standard suitable for negotiation, adjudication, or litigation, with clear, well-evidenced reporting that withstands expert scrutiny.",
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
    category: "forensics",
    icon: "Search",
  },
  {
    slug: "dispute-resolution",
    title: "Dispute Resolution",
    shortDesc:
      "Independent expert support through the full spectrum of dispute resolution — from early neutral evaluation through to adjudication and arbitration.",
    longDesc:
      "Construction disputes are costly and disruptive. H-World provides independent, expert programme and commercial analysis to support or defend claims through every stage of dispute resolution — from early neutral evaluation and negotiation through to formal adjudication, arbitration, and litigation. Our approach is evidence-led and outcome-focused: building the strongest possible technical case while working to resolve matters at the earliest opportunity.",
    techniques: [
      "Dispute avoidance strategy",
      "Programme health checks",
      "Independent programme audits",
      "Expert report preparation",
      "Adjudication support",
      "Arbitration & litigation support",
      "Mediation preparation",
    ],
    category: "forensics",
    icon: "Scale",
  },
  {
    slug: "expert-witness",
    title: "Expert Witness",
    shortDesc:
      "Independent expert witness services — court-ready programme analysis and opinions on delay, disruption, and loss of productivity.",
    longDesc:
      "When disputes proceed to formal proceedings, the expert witness role demands independence, rigour, and the ability to present complex technical analysis with absolute clarity. H-World's expert witnesses prepare and present objective, court-ready programme analysis and opinions covering delay, disruption, and loss of productivity matters. Our experts produce reports that meet CPR Part 35 and equivalent international standards.",
    techniques: [
      "Expert report preparation (CPR Part 35)",
      "Delay & disruption analysis",
      "Loss of productivity quantification",
      "Joint expert meetings",
      "Cross-examination support",
    ],
    category: "forensics",
    icon: "Gavel",
  },
];

export const visibleManagementServices = managementServices.filter((s) => !s.hidden);

export const allServices = [...managementServices, ...forensicsServices];

export function getServiceBySlug(slug: string): Service | undefined {
  return allServices.find((s) => s.slug === slug);
}
