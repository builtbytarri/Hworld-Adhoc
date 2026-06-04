export interface Sector {
  slug: string;
  title: string;
  description: string;
  icon: string;
}

export const sectors: Sector[] = [
  {
    slug: "commercial-residential",
    title: "Commercial & Residential",
    description:
      "From mixed-use urban developments to large-scale residential schemes — planning, controls, and commercial management for complex building projects.",
    icon: "Building2",
  },
  {
    slug: "infrastructure",
    title: "Infrastructure",
    description:
      "Major roads, bridges, civils, and public works. We support clients on National Highways, Highways England, and local authority frameworks.",
    icon: "Globe",
  },
  {
    slug: "energy",
    title: "Energy",
    description:
      "Power generation, renewables, substations, and grid infrastructure. Expert planning and controls for technically complex energy projects.",
    icon: "Zap",
  },
  {
    slug: "rail",
    title: "Rail",
    description:
      "Rail infrastructure, stations, depots, and signalling projects. Programme controls and forensic support across Network Rail and HS2 supply chains.",
    icon: "Train",
  },
  {
    slug: "mechanical-electrical",
    title: "Mechanical & Electrical",
    description:
      "Specialist planning and controls for M&E packages within complex building and infrastructure schemes.",
    icon: "Settings",
  },
  {
    slug: "oil-gas",
    title: "Oil & Gas",
    description:
      "Offshore and onshore oil and gas projects — from FEED through to commissioning. Planning, controls, and commercial management for HSSE-critical environments.",
    icon: "Droplets",
  },
  {
    slug: "marine",
    title: "Marine",
    description:
      "Port developments, marine civils, offshore structures. Planning and controls expertise for complex marine project environments.",
    icon: "Anchor",
  },
  {
    slug: "public-sector",
    title: "Public Sector",
    description:
      "Hospitals, schools, justice, and defence. Supporting public sector clients through complex procurement frameworks and programme governance requirements.",
    icon: "Landmark",
  },
];
