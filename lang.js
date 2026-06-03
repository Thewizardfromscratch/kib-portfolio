/* ================================================
  Kib Bryan — Portfolio
  lang.js — Traductions FR / EN + logique du toggle
  ================================================ */

  const LANG = {

  fr: {
    contact:        "Contact",
    back:           "Portfolio",
    heroLabel:      "Photography — Edmonton, Alberta",
    heroTagline:    "Photographe basé à Edmonton. Événements, portraits professionnels, lifestyle & BTS.",
    heroScroll:     "Voir le portfolio",
    portfolioTitle: "Portfolio",
    portfolioCount: "05 catégories",
    footerCta:      "Travaillons ensemble.",
    footerBtn:      "Me contacter",
    closeLb:        "Fermer ✕",
    emptyTitle:     "Photos à venir.",
    emptyHint:      "Ouvre config.js dans Cursor et ajoute tes liens.",
    photosCount:     n => n + " photo" + (n > 1 ? "s" : ""),
    photosDelivered: n => n + " photo" + (n > 1 ? "s" : "") + " livrées",

    categories: {
      events: {
        name:   "Tournois & Événements sportifs",
        desc:   "Couverture photo complète de tournois de basketball et événements sportifs à Edmonton. Du court à l'ambiance, chaque moment capturé avec intensité.",
        tags:   ["Events", "Sports", "Outdoor"],
        stat1:  "Événements couverts",
        stat2:  "Photos livrées",
        cta:    "Voir toutes les photos →"
      },
      portrait: {
        name:   "Portraits professionnels",
        desc:   "Sessions portrait pour communications, personal branding et médias sociaux. Fond blanc studio ou environnement naturel selon le besoin du client.",
        tags:   ["Portrait", "Studio", "Professional"],
        stat1:  "Sessions réalisées",
        stat2:  "Photos livrées",
        cta:    "Voir toutes les photos →"
      },
      bts: {
        name:   "Behind The Scenes : Boxing commercial",
        desc:   "Documentation des coulisses de la production commerciale boxing. Un regard authentique sur ce qui se passe derrière la caméra.",
        tags:   ["BTS", "Documentary", "Commercial"],
        stat1:  "Productions documentées",
        stat2:  "Photos livrées",
        cta:    "Voir toutes les photos →"
      },
      "bts-ero": {
        name:   "Behind The Scenes : Ero target chains",
        desc:   "Coulisses du tournage commercial Ero — target chains. Une immersion dans la production, entre préparation et action.",
        tags:   ["BTS", "Commercial", "Fashion"],
        stat1:  "Productions documentées",
        stat2:  "Photos livrées",
        cta:    "Voir toutes les photos →"
      },
      "ph-104": {
        name:   "104 through PH's lense",
        desc:   "Le 104 vu par PH. Une exploration photographique authentique de l'espace, entre éditorial et lifestyle.",
        tags:   ["Urban", "Lifestyle", "Editorial"],
        stat1:  "Sessions réalisées",
        stat2:  "Photos livrées",
        cta:    "Voir toutes les photos →"
      },
      celina: {
        name:   "Celina Escalona through PH's lense",
        desc:   "Celina Escalona vue par PH. Portraits naturels, regard singulier — la mise en valeur du sujet avant tout.",
        tags:   ["Portrait", "Lifestyle", "Editorial"],
        stat1:  "Sessions réalisées",
        stat2:  "Photos livrées",
        cta:    "Voir toutes les photos →"
      },
      outdoor: {
        name:   "Lifestyle & Éditorial",
        desc:   "Photographie lifestyle en extérieur. Portraits naturels qui capturent l'authenticité des sujets dans leur environnement.",
        tags:   ["Outdoor", "Lifestyle", "Editorial"],
        stat1:  "Projets réalisés",
        stat2:  "Photos livrées",
        cta:    "Voir toutes les photos →"
      }
    }
  },

  en: {
    contact:        "Contact",
    back:           "Portfolio",
    heroLabel:      "Photography — Edmonton, Alberta",
    heroTagline:    "Edmonton-based photographer. Events, professional portraits, lifestyle & BTS.",
    heroScroll:     "View portfolio",
    portfolioTitle: "Portfolio",
    portfolioCount: "05 categories",
    footerCta:      "Let's work together.",
    footerBtn:      "Get in touch",
    closeLb:        "Close ✕",
    emptyTitle:     "Photos coming soon.",
    emptyHint:      "Open config.js in Cursor and add your links.",
    photosCount:     n => n + " photo" + (n > 1 ? "s" : ""),
    photosDelivered: n => n + " photo" + (n > 1 ? "s" : "") + " delivered",

    categories: {
      events: {
        name:   "Tournaments & Sports Events",
        desc:   "Full photo coverage of basketball tournaments and sports events in Edmonton. From the court to the atmosphere, every moment captured with intensity.",
        tags:   ["Events", "Sports", "Outdoor"],
        stat1:  "Events covered",
        stat2:  "Photos delivered",
        cta:    "View all photos →"
      },
      portrait: {
        name:   "Professional Portraits",
        desc:   "Portrait sessions for communications, personal branding and social media. White/color studio background or natural environment based on client needs.",
        tags:   ["Portrait", "Studio", "Professional"],
        stat1:  "Sessions completed",
        stat2:  "Photos delivered",
        cta:    "View all photos →"
      },
      bts: {
        name:   "Behind The Scenes : Boxing commercial",
        desc:   "Documentation of the boxing commercial production backstage. An authentic look at what happens behind the camera.",
        tags:   ["BTS", "Documentary", "Commercial"],
        stat1:  "Productions documented",
        stat2:  "Photos delivered",
        cta:    "View all photos →"
      },
      "bts-ero": {
        name:   "Behind The Scenes : Ero target chains",
        desc:   "Behind the scenes of the Ero target chains commercial shoot. An immersive look into the production, from prep to action.",
        tags:   ["BTS", "Commercial", "Fashion"],
        stat1:  "Productions documented",
        stat2:  "Photos delivered",
        cta:    "View all photos →"
      },
      "ph-104": {
        name:   "104 through PH's lense",
        desc:   "104 through PH's lens. An authentic photographic exploration.",
        tags:   ["Music", "Lifestyle", "Portfolio"],
        stat1:  "Sessions completed",
        stat2:  "Photos delivered",
        cta:    "View all photos →"
      },
      celina: {
        name:   "Celina Escalona through PH's lense",
        desc:   "Celina Escalona through PH's lens. Natural portraits, singular perspective — the subject first.",
        tags:   ["Portrait", "Fashion", "Color Grading"],
        stat1:  "Sessions completed",
        stat2:  "Photos delivered",
        cta:    "View all photos →"
      },
      outdoor: {
        name:   "Lifestyle & Editorial",
        desc:   "Outdoor lifestyle photography. Natural portraits that capture the authenticity of subjects in their environment, without artifice.",
        tags:   ["Outdoor", "Lifestyle", "Editorial"],
        stat1:  "Projects completed",
        stat2:  "Photos delivered",
        cta:    "View all photos →"
      }
    }
  }

};

// ── State ─────────────────────────────────────────
let currentLang = localStorage.getItem("kibLang") || "fr";

// ── Toggle (appelé par le bouton dans le nav) ─────
function toggleLang() {
  currentLang = currentLang === "fr" ? "en" : "fr";
  localStorage.setItem("kibLang", currentLang);
  _updateToggleUI();
  if (typeof applyPageLang === "function") applyPageLang(currentLang);
}

// ── Init (appelé en bas de chaque page) ───────────
function initLang() {
  _updateToggleUI();
  if (typeof applyPageLang === "function") applyPageLang(currentLang);
}

// ── Toggle UI ─────────────────────────────────────
function _updateToggleUI() {
  const toggle = document.getElementById("langToggle");
  if (toggle) toggle.setAttribute("data-active", currentLang);
}