/*
 * Central asset registry — optimized stock (public/stock/opt/).
 * Every image catalogued with intended use + alt text written in brand voice
 * (impeccable: "alt text is part of the voice").
 */

const BASE = "/stock/opt";

export const img = {
  // ── On-site photography (orange hi-vis = brand match) ──
  inspectors: {
    src: `${BASE}/inspectors-site.jpg`,
    alt: "Three H-World inspectors in hi-vis reviewing a programme drawing on a live high-rise construction site.",
  },
  handsBlueprints: {
    src: `${BASE}/hands-blueprints-overhead.jpg`,
    alt: "Overhead view of a planning team working across architectural drawings with scale rule, calculator and hard hat.",
  },
  workersTablet: {
    src: `${BASE}/workers-tablet-topview.jpg`,
    alt: "Top-down view of two site engineers recording progress on a tablet against a bare concrete slab.",
  },
  buildersGlass: {
    src: `${BASE}/builders-glass-building.jpg`,
    alt: "Two site managers reviewing the facade of a newly completed commercial glass building.",
  },
  siteWarehouse: {
    src: `${BASE}/site-warehouse-aerial.jpg`,
    alt: "Aerial view of an early-stage warehouse build with structural steel and foundation grid set out.",
  },
  aerialInfra: {
    src: `${BASE}/aerial-infrastructure.jpg`,
    alt: "Aerial view of road infrastructure threading between existing development.",
  },

  // ── Professional / trust photography ──
  architectsBlueprint: {
    src: `${BASE}/architects-blueprint.jpg`,
    alt: "A diverse team of three project professionals in hard hats studying a structural drawing.",
  },
  teamScaleModel: {
    src: `${BASE}/team-scale-model.jpg`,
    alt: "Developers and planners analysing a physical scheme model in a city-view office.",
  },
  teamPortrait: {
    src: `${BASE}/team-portrait.jpg`,
    alt: "High-angle portrait of three H-World consultants on a concrete concourse.",
  },
  architectsOffice: {
    src: `${BASE}/architects-office.jpg`,
    alt: "Two planners discussing a floor-plan drawing over a studio table.",
  },

  // ── Concept / metaphor ──
  staffBriefing: {
    src: `${BASE}/staff-briefing.jpg`,
    alt: "A site manager in a hard hat reviewing documents with a consultant on a live project.",
  },

  networkPins: {
    src: `${BASE}/network-pins.jpg`,
    alt: "A physical network diagram — silver pins connected by blue thread, representing a critical path programme network.",
  },

  // ── Abstract / texture (brand-matched) ──
  amberLatticeDark: {
    src: `${BASE}/amber-lattice-dark.jpg`,
    alt: "",
  },
  trussLattice: {
    src: `${BASE}/truss-lattice.jpg`,
    alt: "",
  },
  waveTexture: {
    src: `${BASE}/wave-texture.jpg`,
    alt: "",
  },
  trianglesLight: {
    src: `${BASE}/triangles-light.jpg`,
    alt: "",
  },

  // ── Service-specific illustration / concept ──
  ganttChart: {
    src: `${BASE}/gantt-chart.jpg`,
    alt: "Gantt programme schedule showing sequenced project activities across a four-week window.",
  },
  docFolder: {
    src: `${BASE}/doc-folder-3d.jpg`,
    alt: "Illustration of a document controller filing project records into an organised folder system.",
  },
  riskBlocks: {
    src: `${BASE}/risk-blocks.jpg`,
    alt: "Wooden blocks spelling RISK beside ascending steps, representing managed project risk.",
  },
  isoConstruction: {
    src: `${BASE}/iso-construction.jpg`,
    alt: "Isometric illustration of an active construction site with tower cranes and structural frame.",
  },
} as const;

export type ImageKey = keyof typeof img;
