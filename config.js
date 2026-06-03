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
    coverPhoto:  "",     
    statCount:   "",      
    statLabel1:  "Événements couverts",
    statPhotos:  "",      
    statLabel2:  "Photos livrées",
  },

  portrait: {
    title:       "Portraits professionnels",
    description: "Sessions portrait pour communications, personal branding et médias sociaux. Fond blanc studio ou environnement naturel selon le besoin du client.",
    tags:        ["Portrait", "Studio", "Professional"],
    coverPhoto:  "images/portrait/Shoot_jdsp_FO1.JPG",
    statCount:   "",
    statLabel1:  "Sessions réalisées",
    statPhotos:  "",
    statLabel2:  "Photos livrées",
  },

  bts: {
    title:       "Behind The Scenes : Boxing commercial",
    description: "Documentation des coulisses de la production commerciale boxing. Un regard authentique sur ce qui se passe derrière la caméra.",
    tags:        ["BTS", "Documentary", "Commercial"],
    coverPhoto:  "BTS_W17.JPG",
    statCount:   "",
    statLabel1:  "Productions documentées",
    statPhotos:  "",
    statLabel2:  "Photos livrées",
  },

  "bts-ero": {
    title:       "Behind The Scenes : Ero target chains",
    description: "Coulisses du tournage commercial Ero — target chains. Une immersion dans la production, entre préparation et action.",
    tags:        ["BTS", "Commercial", "Fashion"],
    coverPhoto:  "",      
    statCount:   "",
    statLabel1:  "Productions documentées",
    statPhotos:  "",
    statLabel2:  "Photos livrées",
  },

  "ph-104": {
    title:       "104 through PH's lense",
    description: "Le 104 vu par PH. Une exploration photographique authentique de l'espace, entre éditorial et lifestyle.",
    tags:        ["Urban", "Lifestyle", "Editorial"],
    coverPhoto:  "104_shoot_17.JPG",
    statCount:   "",
    statLabel1:  "Sessions réalisées",
    statPhotos:  "",
    statLabel2:  "Photos livrées",
  },

  celina: {
    title:       "Celina Escalona through PH's lense",
    description: "Celina Escalona vue par PH. Portraits naturels, regard singulier — la mise en valeur du sujet avant tout.",
    tags:        ["Portrait", "Lifestyle", "Editorial"],
    coverPhoto:  "celina_shoot_01.JPG",
    statCount:   "",
    statLabel1:  "Sessions réalisées",
    statPhotos:  "",
    statLabel2:  "Photos livrées",
  }

};