/* ================================================
  Kib Bryan — Portfolio
  gallery.js — Logique de la page galerie
  Ne pas modifier.
  ================================================ */

  (async function () {

  const params  = new URLSearchParams(window.location.search);
  const cat     = params.get('cat') || 'events';
  const manifest = await fetch('manifest.json').then(r => r.json()).catch(() => ({}));
  const photos = (manifest[cat] || []);
  const countEl = document.getElementById('galleryCount');
  
  function applyPageLang(lang) {
    const l  = LANG[lang];
    const lc = l.categories[cat];

    document.title = 'Kib Bryan — ' + lc.name;
    document.getElementById('galleryTitle').textContent = lc.name;
    document.querySelector('.nav-back') && (document.querySelector('.nav-back').lastChild.textContent = ' ' + l.back);

    const tagsEl = document.getElementById('galleryTags');
    tagsEl.innerHTML = '';
    lc.tags.forEach(t => {
      const s = document.createElement('span');
      s.className = 'tag accent';
      s.textContent = t;
      tagsEl.appendChild(s);
    });

    const countEl = document.getElementById('galleryCount');
    if (countEl) countEl.textContent = l.photosCount(photos.length);

    const lbClose = document.querySelector('.lb-close');
    if (lbClose) lbClose.textContent = l.closeLb;
  }

  const gallery = (LANG[currentLang] || LANG.fr).categories[cat];
  const tagsEl  = document.getElementById('galleryTags');
  gallery.tags.forEach(t => {
    const s = document.createElement('span');
    s.className = 'tag accent';
    s.textContent = t;
    tagsEl.appendChild(s);
  });

  // Build grid or empty state
  const grid = document.getElementById('photoGrid');

  if (photos.length === 0) {
    const l = LANG[currentLang] || LANG.fr;
    countEl.textContent = l.photosCount(0);
    grid.innerHTML =
      '<div class="empty-state">' +
        '<p class="empty-title">' + l.emptyTitle + '</p>' +
      '</div>';
    return;
  }

  countEl.textContent = photos.length + ' photo' + (photos.length > 1 ? 's' : '');

  photos.forEach((src, i) => {
    const div = document.createElement('div');
    div.className = 'photo-item';
    const img = document.createElement('img');
    img.src = src;
    img.alt = gallery.name + ' ' + (i + 1);
    img.loading = 'lazy';
    div.appendChild(img);
    div.addEventListener('click', () => openLb(i));
    grid.appendChild(div);
  });

  // ── Lightbox ──────────────────────────────────
  let cur = 0;
  const lb        = document.getElementById('lightbox');
  const lbImg     = document.getElementById('lbImg');
  const lbCounter = document.getElementById('lbCounter');

  function openLb(i) {
    cur = i;
    lbImg.src = photos[i];
    lb.classList.add('open');
    document.body.style.overflow = 'hidden';
    updateCounter();
  }

  function closeLb() {
    lb.classList.remove('open');
    document.body.style.overflow = '';
  }

  function navLb(dir) {
    cur = (cur + dir + photos.length) % photos.length;
    lbImg.src = photos[cur];
    updateCounter();
  }

  function updateCounter() {
    lbCounter.textContent = (cur + 1) + ' / ' + photos.length;
  }

  // Expose to HTML onclick attributes
  window.closeLb = closeLb;
  window.navLb   = navLb;

  lb.addEventListener('click', function (e) {
    if (e.target === this) closeLb();
  });

  document.addEventListener('keydown', e => {
    if (!lb.classList.contains('open')) return;
    if (e.key === 'Escape')      closeLb();
    if (e.key === 'ArrowRight')  navLb(1);
    if (e.key === 'ArrowLeft')   navLb(-1);
  });

  window.applyPageLang = applyPageLang;

})();