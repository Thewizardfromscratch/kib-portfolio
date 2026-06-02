/* ================================================
   Kib Bryan — Portfolio
   config.js — Photos de couverture et statistiques

   Les photos de galerie sont gérées dans manifest.json
   à la racine du repo.

   Pour ajouter des photos :
     1. Glisse tes fichiers dans images/[categorie]/
     2. Ajoute le chemin dans manifest.json
        ex: "images/events/mon-shoot.jpg"
     3. Push sur GitHub

   Pour la photo de couverture (index.html) :
     coverPhoto: "images/events/ma-cover.jpg"
   ================================================ */

const CONFIG = {

  events: {
    title:       "Tournois & Événements sportifs",
    description: "Couverture photo complète de tournois de basketball et événements sportifs à Edmonton. Du court à l'ambiance, chaque moment capturé avec intensité.",
    tags:        ["Events", "Sports", "Outdoor"],
    coverPhoto:  "",      // Lien de la photo de couverture sur index.html
    statCount:   "",      // Ex: "6"
    statLabel1:  "Événements couverts",
    statPhotos:  "",      // Ex: "400+"
    statLabel2:  "Photos livrées",
  },

  portrait: {
    title:       "Portraits professionnels",
    description: "Sessions portrait pour communications, personal branding et médias sociaux. Fond blanc studio ou environnement naturel selon le besoin du client.",
    tags:        ["Portrait", "Studio", "Professional"],
    coverPhoto:  "images/portrait/Shoot_jdsp_FO1.jpg",
    statCount:   "",
    statLabel1:  "Sessions réalisées",
    statPhotos:  "",
    statLabel2:  "Photos livrées",
  },

  bts: {
    title:       "Behind The Scenes",
    description: "Documentation des coulisses d'événements et de productions. Un regard authentique sur ce qui se passe derrière la caméra.",
    tags:        ["BTS", "Documentary", "Lifestyle"],
    coverPhoto:  "",
    statCount:   "",
    statLabel1:  "Productions documentées",
    statPhotos:  "",
    statLabel2:  "Photos livrées",
  },

  outdoor: {
    title:       "Lifestyle & Éditorial",
    description: "Photographie lifestyle en extérieur. Portraits naturels qui capturent l'authenticité des sujets dans leur environnement.",
    tags:        ["Outdoor", "Lifestyle", "Editorial"],
    coverPhoto:  "",
    statCount:   "",
    statLabel1:  "Projets réalisés",
    statPhotos:  "",
    statLabel2:  "Photos livrées",
  }

};
