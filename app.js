/**
 * Mebelxona Main Application Controller
 * Handles Lamp Draggable Interaction, Demo Auth, Multilingual (EN/RU/UZ),
 * Real-time SVG Recoloring, Interactive Filters, Modals, and Carousel
 */

(function() {
  'use strict';

  // --- 1. STATE MANAGEMENT ---
  const state = {
    user: localStorage.getItem('mebelxona_user') || sessionStorage.getItem('mebelxona_user') || null,
    lang: getInitialLanguage(),
    theme: getInitialTheme(),
    lampOn: false,
    favorites: JSON.parse(localStorage.getItem('mebelxona_favs') || '[]'),
    selectedCategory: 'all',
    searchQuery: '',
    sortOrder: 'default',
    selectedMaterial: 'all',
    maxPrice: 3500,
    showFavoritesOnly: false,
    visibleCount: 12,
    activeReviewIndex: 0,
    activeModalProduct: null,
    activeProductColor: null
  };

  function getInitialLanguage() {
    const saved = localStorage.getItem('mebelxona_lang');
    if (saved && (saved === 'en' || saved === 'ru' || saved === 'uz')) return saved;
    const browserLang = (navigator.language || '').slice(0, 2).toLowerCase();
    if (browserLang === 'ru') return 'ru';
    if (browserLang === 'uz') return 'uz';
    return 'en';
  }

  function getInitialTheme() {
    const saved = localStorage.getItem('mebelxona_theme');
    if (saved === 'light' || saved === 'dark') return saved;
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  }

  // --- 2. DOM ELEMENTS ---
  const root = document.documentElement;
  const body = document.body;

  // Views
  const loginView = document.getElementById('login-view');
  const catalogView = document.getElementById('catalog-view');

  // Lamp & Login Elements
  const cordBead = document.querySelector('.cord-bead');
  const cordLine = document.querySelector('.cord-line');
  const hitArea = document.querySelector('.cord-hit');
  const loginFormBox = document.getElementById('login-form-box');
  const loginForm = document.getElementById('login-form');
  const usernameInput = document.getElementById('login-username');
  const passwordInput = document.getElementById('login-password');
  const loginErrorMsg = document.getElementById('login-error-msg');
  const lampHint = document.getElementById('lamp-hint');

  // Nav Elements
  const navUserName = document.getElementById('nav-user-name');
  const navGreetingText = document.getElementById('nav-greeting-text');
  const logoutBtn = document.getElementById('logout-btn');
  const favCounterBadge = document.getElementById('fav-counter-badge');
  const navFavToggleBtn = document.getElementById('nav-fav-toggle-btn');

  // Filters & Catalog Elements
  const categoryTabsContainer = document.getElementById('category-tabs');
  const searchInput = document.getElementById('catalog-search-input');
  const searchClearBtn = document.getElementById('search-clear-btn');
  const sortSelect = document.getElementById('sort-select');
  const materialSelect = document.getElementById('material-select');
  const priceSlider = document.getElementById('price-range-slider');
  const priceDisplay = document.getElementById('price-range-display');
  const filterFavBtn = document.getElementById('filter-fav-btn');
  const resetFiltersBtn = document.getElementById('reset-filters-btn');
  const productGrid = document.getElementById('product-grid');
  const countIndicator = document.getElementById('catalog-count-indicator');
  const noResultsBox = document.getElementById('no-results-box');
  const showMoreBtn = document.getElementById('show-more-btn');
  const loadMoreBox = document.getElementById('catalog-load-more-box');

  // Modals
  const productModal = document.getElementById('product-modal');
  const quoteModal = document.getElementById('quote-modal');
  const setModal = document.getElementById('set-modal');

  // Product Modal Fields
  const modalSvgStage = document.getElementById('modal-svg-stage');
  const modalSwatchesRow = document.getElementById('modal-swatches-row');
  const modalSwatchName = document.getElementById('modal-swatch-name');
  const modalProductCategory = document.getElementById('modal-product-category');
  const modalProductTitle = document.getElementById('modal-product-title');
  const modalProductPrice = document.getElementById('modal-product-price');
  const modalProductDesc = document.getElementById('modal-product-desc');
  const modalSpecMaterial = document.getElementById('modal-spec-material');
  const modalSpecDimensions = document.getElementById('modal-spec-dimensions');
  const modalSpecProduction = document.getElementById('modal-spec-production');
  const modalSpecWarranty = document.getElementById('modal-spec-warranty');
  const modalRelatedGrid = document.getElementById('modal-related-grid');
  const modalOpenQuoteBtn = document.getElementById('modal-open-quote-btn');

  // Quote Form
  const quoteForm = document.getElementById('quote-form');
  const quoteSuccessState = document.getElementById('quote-success-state');
  const quoteFormContainer = document.getElementById('quote-form-container');

  // Reviews & FAQ
  const reviewCardContent = document.getElementById('review-card-content');
  const reviewAuthorName = document.getElementById('review-author-name');
  const reviewAuthorCity = document.getElementById('review-author-city');
  const reviewAuthorAvatar = document.getElementById('review-author-avatar');
  const reviewPrevBtn = document.getElementById('review-prev-btn');
  const reviewNextBtn = document.getElementById('review-next-btn');
  const reviewSliderDots = document.getElementById('review-slider-dots');
  const faqList = document.getElementById('faq-list');
  const setsGrid = document.getElementById('sets-grid');
  const heroShowcaseSvg = document.getElementById('hero-showcase-svg');

  // Sound click safely
  function playClickSound() {
    try {
      const audio = new Audio('https://assets.codepen.io/605876/click.mp3');
      audio.volume = 0.5;
      const p = audio.play();
      if (p !== undefined) p.catch(() => {});
    } catch (_) {}
  }

  // --- 3. THEME & LANGUAGE INITIALIZATION ---
  function applyTheme(theme) {
    state.theme = theme;
    root.setAttribute('data-theme', theme);
    localStorage.setItem('mebelxona_theme', theme);

    const icons = document.querySelectorAll('.theme-icon');
    icons.forEach(icon => {
      icon.textContent = theme === 'dark' ? '☀️' : '🌙';
    });
  }

  function applyLanguage(lang) {
    state.lang = lang;
    localStorage.setItem('mebelxona_lang', lang);

    // Update active class on all language switchers
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });

    const dict = window.I18N[lang] || window.I18N.en;

    // Update all static data-i18n attributes
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[key]) {
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
          el.placeholder = dict[key];
        } else {
          el.textContent = dict[key];
        }
      }
    });

    // Update greeting
    updateGreeting();

    // Re-render dynamic elements in new language
    renderCategoryTabs();
    renderCatalog();
    renderSets();
    renderReview(state.activeReviewIndex);
    renderFaq();
    if (state.activeModalProduct) {
      updateModalTexts(state.activeModalProduct);
    }
  }

  function updateGreeting() {
    const dict = window.I18N[state.lang] || window.I18N.en;
    if (navGreetingText) navGreetingText.textContent = dict.greeting || 'Hello,';
    if (navUserName) navUserName.textContent = state.user || 'Guest';
  }

  // --- 4. LAMP DRAGGABLE & AUTHENTICATION ---
  function initLampInteraction() {
    if (typeof gsap === 'undefined' || typeof Draggable === 'undefined') return;

    gsap.registerPlugin(Draggable);

    Draggable.create(hitArea, {
      type: 'y',
      bounds: { minY: 0, maxY: 60 },
      onDrag() {
        gsap.set(cordBead, { y: this.y });
        gsap.set(cordLine, { attr: { y2: 180 + this.y } });
      },
      onRelease() {
        if (this.y > 28) {
          toggleLamp();
        }
        gsap.to([cordBead, hitArea], { y: 0, duration: 0.5, ease: 'back.out(2.5)' });
        gsap.to(cordLine, { attr: { y2: 180 }, duration: 0.5, ease: 'back.out(2.5)' });
      }
    });

    // Allow clicking bead directly too
    if (hitArea) {
      hitArea.addEventListener('click', () => toggleLamp());
    }
  }

  function toggleLamp(forceState) {
    state.lampOn = forceState !== undefined ? forceState : !state.lampOn;
    playClickSound();

    body.setAttribute('data-on', state.lampOn);
    root.style.setProperty('--on', state.lampOn ? 1 : 0);

    if (state.lampOn) {
      if (loginFormBox) loginFormBox.classList.add('active');
      if (lampHint) lampHint.style.display = 'none';
      if (typeof gsap !== 'undefined') {
        gsap.to(body, {
          backgroundColor: state.theme === 'dark' ? '#1c1f24' : '#faf8f4',
          duration: 0.5
        });
      }
      setTimeout(() => usernameInput && usernameInput.focus(), 250);
    } else {
      if (loginFormBox) loginFormBox.classList.remove('active');
      if (lampHint) lampHint.style.display = 'flex';
      if (typeof gsap !== 'undefined') {
        gsap.to(body, {
          backgroundColor: state.theme === 'dark' ? '#121417' : '#f7f5f0',
          duration: 0.5
        });
      }
    }
  }

  function handleLogin(e) {
    if (e) e.preventDefault();
    const username = (usernameInput?.value || '').trim();
    const password = (passwordInput?.value || '').trim();
    const dict = window.I18N[state.lang] || window.I18N.en;

    // Validation: Require both to be non-empty
    if (!username || !password) {
      if (loginErrorMsg) {
        loginErrorMsg.textContent = dict.loginErrorEmpty || 'Please enter both username and password.';
        loginErrorMsg.classList.add('visible');
      }
      // Subtle shake animation
      if (typeof gsap !== 'undefined' && loginFormBox) {
        gsap.fromTo(loginFormBox, { x: -8 }, { x: 8, repeat: 4, yoyo: true, duration: 0.05, ease: 'power1.inOut' });
      }
      return;
    }

    // Success! Save session
    state.user = username;
    sessionStorage.setItem('mebelxona_user', username);
    localStorage.setItem('mebelxona_user', username);

    if (loginErrorMsg) loginErrorMsg.classList.remove('visible');

    // short transition: expand lamp glow and reveal catalog view
    if (typeof gsap !== 'undefined') {
      gsap.to('.inner-glow', { scale: 3, opacity: 1, duration: 0.45, ease: 'power2.in' });
      gsap.to(loginView, {
        opacity: 0,
        y: -30,
        duration: 0.4,
        onComplete: showCatalogView
      });
    } else {
      showCatalogView();
    }
  }

  function showCatalogView() {
    loginView.classList.add('hidden');
    catalogView.classList.remove('hidden');
    body.classList.remove('login-active');
    updateGreeting();
    updateFavBadge();

    // GSAP entrance animation for catalog
    if (typeof gsap !== 'undefined') {
      gsap.from('.top-nav', { y: -40, opacity: 0, duration: 0.5, ease: 'power2.out' });
      gsap.from('.hero-content > *', { y: 20, opacity: 0, stagger: 0.08, duration: 0.6, ease: 'power2.out' });
      gsap.from('.stats-strip', { y: 30, opacity: 0, duration: 0.6, delay: 0.2, ease: 'power2.out' });
      animateCounters();
    }

    renderHeroShowcase();
    renderCatalog();
  }

  function handleLogout() {
    sessionStorage.removeItem('mebelxona_user');
    localStorage.removeItem('mebelxona_user');
    state.user = null;

    catalogView.classList.add('hidden');
    loginView.classList.remove('hidden');
    body.classList.add('login-active');

    if (typeof gsap !== 'undefined') {
      gsap.set(loginView, { opacity: 1, y: 0 });
      gsap.set('.inner-glow', { scale: 1, opacity: 0 });
    }

    toggleLamp(true);
    if (usernameInput) usernameInput.value = '';
    if (passwordInput) passwordInput.value = '';
    if (loginErrorMsg) loginErrorMsg.classList.remove('visible');
  }

  function animateCounters() {
    const counters = [
      { id: 'stat-projects', target: 1200, suffix: '+' },
      { id: 'stat-years', target: 15, suffix: ' Years' },
      { id: 'stat-masters', target: 42, suffix: '+' },
      { id: 'stat-warranty', target: 5, suffix: ' Years' }
    ];

    counters.forEach(c => {
      const el = document.getElementById(c.id);
      if (!el) return;
      const obj = { val: 0 };
      if (typeof gsap !== 'undefined') {
        gsap.to(obj, {
          val: c.target,
          duration: 1.8,
          ease: 'power2.out',
          onUpdate: () => {
            el.textContent = Math.floor(obj.val).toLocaleString() + (c.target > 100 ? '+' : '');
          }
        });
      } else {
        el.textContent = c.target + '+';
      }
    });
  }

  function renderHeroShowcase() {
    if (!heroShowcaseSvg || !window.renderFurnitureSVG) return;
    heroShowcaseSvg.innerHTML = window.renderFurnitureSVG('table', '#d4a373', '#7c5e42', 'oak');
  }

  // --- 5. CATEGORIES & CATALOG FILTERING ---
  function renderCategoryTabs() {
    if (!categoryTabsContainer) return;
    const dict = window.I18N[state.lang] || window.I18N.en;

    categoryTabsContainer.innerHTML = window.CATEGORIES.map(cat => {
      const count = cat.id === 'all'
        ? window.PRODUCTS.length
        : window.PRODUCTS.filter(p => p.category === cat.id).length;
      const title = dict[cat.key] || cat.id;
      const isActive = state.selectedCategory === cat.id ? 'active' : '';

      return `
        <button class="cat-tab-btn ${isActive}" data-cat="${cat.id}" role="tab" aria-selected="${isActive ? 'true' : 'false'}">
          <span>${title}</span>
          <span class="cat-count tabular-nums">${count}</span>
        </button>
      `;
    }).join('');

    // Attach click events
    categoryTabsContainer.querySelectorAll('.cat-tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        state.selectedCategory = btn.getAttribute('data-cat');
        state.visibleCount = 12;
        renderCategoryTabs();
        renderCatalog();
      });
    });
  }

  function getFilteredProducts() {
    let list = [...window.PRODUCTS];

    // Category
    if (state.selectedCategory !== 'all') {
      list = list.filter(p => p.category === state.selectedCategory);
    }

    // Material
    if (state.selectedMaterial !== 'all') {
      list = list.filter(p => p.material === state.selectedMaterial);
    }

    // Max Price
    list = list.filter(p => p.price <= state.maxPrice);

    // Favorites
    if (state.showFavoritesOnly) {
      list = list.filter(p => state.favorites.includes(p.id));
    }

    // Search Query (matches translated name or description or category)
    if (state.searchQuery) {
      const q = state.searchQuery.toLowerCase();
      list = list.filter(p => {
        const name = (p.names[state.lang] || p.names.en).toLowerCase();
        const desc = (p.descriptions[state.lang] || p.descriptions.en).toLowerCase();
        return name.includes(q) || desc.includes(q) || p.material.includes(q) || p.category.includes(q);
      });
    }

    // Sort
    if (state.sortOrder === 'price-asc') {
      list.sort((a, b) => a.price - b.price);
    } else if (state.sortOrder === 'price-desc') {
      list.sort((a, b) => b.price - a.price);
    } else if (state.sortOrder === 'bestseller') {
      list.sort((a, b) => (b.badge === 'bestseller' ? 1 : 0) - (a.badge === 'bestseller' ? 1 : 0));
    } else if (state.sortOrder === 'newest') {
      list.sort((a, b) => (b.badge === 'new' ? 1 : 0) - (a.badge === 'new' ? 1 : 0));
    }

    return list;
  }

  function renderCatalog() {
    if (!productGrid) return;
    const filtered = getFilteredProducts();
    const visibleProducts = filtered.slice(0, state.visibleCount);
    const dict = window.I18N[state.lang] || window.I18N.en;

    // Status indicator
    if (countIndicator) {
      countIndicator.textContent = state.lang === 'ru'
        ? `Показано ${visibleProducts.length} из ${filtered.length} изделий`
        : state.lang === 'uz'
        ? `${filtered.length} ta mebeldan ${visibleProducts.length} tasi ko'rsatilmoqda`
        : `Showing ${visibleProducts.length} of ${filtered.length} items`;
    }

    // Reset filters visibility
    const isFiltered = state.selectedCategory !== 'all' ||
      state.searchQuery ||
      state.selectedMaterial !== 'all' ||
      state.maxPrice < 3500 ||
      state.showFavoritesOnly;

    if (resetFiltersBtn) {
      resetFiltersBtn.classList.toggle('visible', !!isFiltered);
    }

    // Empty state
    if (filtered.length === 0) {
      productGrid.innerHTML = '';
      if (noResultsBox) noResultsBox.style.display = 'flex';
      if (loadMoreBox) loadMoreBox.style.display = 'none';
      return;
    } else {
      if (noResultsBox) noResultsBox.style.display = 'none';
    }

    // Render Cards
    productGrid.innerHTML = visibleProducts.map(item => {
      const isFav = state.favorites.includes(item.id);
      const name = item.names[state.lang] || item.names.en;
      const catKey = 'cat' + item.category.charAt(0).toUpperCase() + item.category.slice(1);
      const catName = dict[catKey] || item.category;

      let badgeHtml = '';
      if (item.badge === 'new') badgeHtml = `<span class="card-badge badge-new">${dict.badgeNew || 'New'}</span>`;
      else if (item.badge === 'bestseller') badgeHtml = `<span class="card-badge badge-bestseller">${dict.badgeBestseller || 'Bestseller'}</span>`;
      else if (item.badge === '-20%') badgeHtml = `<span class="card-badge badge-discount">${dict.badgeDiscount || '-20%'}</span>`;

      const primaryColor = item.colors[0]?.hex || '#d4a373';
      const svgIllustration = window.renderFurnitureSVG(item.svgType, primaryColor, '#7c5e42', item.material);

      return `
        <article class="product-card" data-id="${item.id}" tabindex="0" role="button" aria-label="${name}">
          <div class="card-media">
            ${badgeHtml}
            <button class="card-fav-btn ${isFav ? 'is-fav' : ''}" data-fav-id="${item.id}" aria-label="Add to favorites">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="${isFav ? '#ef4444' : 'none'}" stroke="currentColor" stroke-width="2">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
            </button>
            <div class="card-svg-wrapper">
              ${svgIllustration}
            </div>
          </div>
          <div class="card-content">
            <div class="card-meta-row">
              <span>${catName}</span>
              <span>·</span>
              <span>${item.material}</span>
            </div>
            <h3 class="card-title">${name}</h3>
            <div class="card-specs-row tabular-nums">
              <span>📏 ${item.dimensions}</span>
            </div>
            <div class="card-footer">
              <span class="card-price tabular-nums">$${item.price.toLocaleString()}</span>
              <button class="card-details-btn" data-detail-id="${item.id}">
                ${dict.detailsBtn || 'Details'}
              </button>
            </div>
          </div>
        </article>
      `;
    }).join('');

    // Load More Visibility
    if (loadMoreBox) {
      loadMoreBox.style.display = filtered.length > state.visibleCount ? 'flex' : 'none';
    }

    // Attach card interactions
    productGrid.querySelectorAll('.product-card').forEach(card => {
      const id = card.getAttribute('data-id');

      // Click card opens modal (unless clicking favorite button)
      card.addEventListener('click', (e) => {
        if (e.target.closest('.card-fav-btn')) return;
        openProductModal(id);
      });

      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          if (e.target.closest('.card-fav-btn')) return;
          e.preventDefault();
          openProductModal(id);
        }
      });
    });

    // Favorite heart buttons
    productGrid.querySelectorAll('.card-fav-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const id = btn.getAttribute('data-fav-id');
        toggleFavorite(id);
      });
    });

    // Stagger animation on cards
    if (typeof gsap !== 'undefined') {
      gsap.fromTo('.product-card',
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, stagger: 0.04, duration: 0.35, ease: 'power2.out' }
      );
    }
  }

  function toggleFavorite(id) {
    playClickSound();
    const idx = state.favorites.indexOf(id);
    if (idx >= 0) {
      state.favorites.splice(idx, 1);
    } else {
      state.favorites.push(id);
    }
    localStorage.setItem('mebelxona_favs', JSON.stringify(state.favorites));
    updateFavBadge();
    renderCatalog();
  }

  function updateFavBadge() {
    if (!favCounterBadge) return;
    const count = state.favorites.length;
    favCounterBadge.textContent = count;
    favCounterBadge.style.display = count > 0 ? 'flex' : 'none';
  }

  // --- 6. PRODUCT DETAIL MODAL WITH LIVE SVG RECOLORING ---
  function openProductModal(id) {
    const item = window.PRODUCTS.find(p => p.id === id);
    if (!item) return;

    state.activeModalProduct = item;
    state.activeProductColor = item.colors[0]?.hex || '#d4a373';

    updateModalTexts(item);
    renderModalSwatches(item);
    renderModalSVG(item, state.activeProductColor);
    renderRelatedItems(item);

    productModal.classList.add('active');
    document.body.style.overflow = 'hidden';

    if (typeof gsap !== 'undefined') {
      gsap.fromTo('#product-modal .modal-dialog',
        { scale: 0.94, opacity: 0, y: 20 },
        { scale: 1, opacity: 1, y: 0, duration: 0.3, ease: 'back.out(1.8)' }
      );
    }
  }

  function updateModalTexts(item) {
    const dict = window.I18N[state.lang] || window.I18N.en;
    const catKey = 'cat' + item.category.charAt(0).toUpperCase() + item.category.slice(1);

    if (modalProductCategory) modalProductCategory.textContent = dict[catKey] || item.category;
    if (modalProductTitle) modalProductTitle.textContent = item.names[state.lang] || item.names.en;
    if (modalProductPrice) modalProductPrice.textContent = `$${item.price.toLocaleString()}`;
    if (modalProductDesc) modalProductDesc.textContent = item.descriptions[state.lang] || item.descriptions.en;
    if (modalSpecMaterial) modalSpecMaterial.textContent = item.material;
    if (modalSpecDimensions) modalSpecDimensions.textContent = item.dimensions;
    if (modalSpecProduction) modalSpecProduction.textContent = `${item.productionTime} ${dict.daysSuffix || 'days'}`;
    if (modalSpecWarranty) modalSpecWarranty.textContent = `${item.warranty} ${dict.yearsSuffix || 'Years'}`;
  }

  function renderModalSVG(item, colorHex) {
    if (!modalSvgStage || !window.renderFurnitureSVG) return;
    modalSvgStage.innerHTML = window.renderFurnitureSVG(item.svgType, colorHex, '#7c5e42', item.material);
  }

  function renderModalSwatches(item) {
    if (!modalSwatchesRow) return;
    modalSwatchesRow.innerHTML = item.colors.map((c, i) => {
      const active = c.hex === state.activeProductColor ? 'active' : '';
      const colorName = c.name[state.lang] || c.name.en;
      return `
        <button class="color-swatch-btn ${active}" data-hex="${c.hex}" data-name="${colorName}" style="background-color: ${c.hex};" title="${colorName}" aria-label="${colorName}"></button>
      `;
    }).join('');

    const firstColor = item.colors.find(c => c.hex === state.activeProductColor) || item.colors[0];
    if (modalSwatchName && firstColor) {
      modalSwatchName.textContent = firstColor.name[state.lang] || firstColor.name.en;
    }

    // Attach swatch click events to dynamically recolor SVG
    modalSwatchesRow.querySelectorAll('.color-swatch-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        playClickSound();
        const hex = btn.getAttribute('data-hex');
        const name = btn.getAttribute('data-name');
        state.activeProductColor = hex;

        modalSwatchesRow.querySelectorAll('.color-swatch-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        if (modalSwatchName) modalSwatchName.textContent = name;

        // Animate SVG color update smoothly
        renderModalSVG(item, hex);
        if (typeof gsap !== 'undefined') {
          gsap.fromTo('#modal-svg-stage svg', { scale: 0.96 }, { scale: 1, duration: 0.25, ease: 'power2.out' });
        }
      });
    });
  }

  function renderRelatedItems(currentItem) {
    if (!modalRelatedGrid) return;
    // Pick 4 related items in same category or adjacent
    let related = window.PRODUCTS.filter(p => p.id !== currentItem.id && p.category === currentItem.category);
    if (related.length < 4) {
      const others = window.PRODUCTS.filter(p => p.id !== currentItem.id && p.category !== currentItem.category);
      related = [...related, ...others].slice(0, 4);
    } else {
      related = related.slice(0, 4);
    }

    modalRelatedGrid.innerHTML = related.map(rel => {
      const name = rel.names[state.lang] || rel.names.en;
      const svgThumb = window.renderFurnitureSVG(rel.svgType, rel.colors[0]?.hex || '#d4a373', '#7c5e42', rel.material);
      return `
        <div class="related-item-card" data-rel-id="${rel.id}" role="button" tabindex="0">
          <div class="related-svg-box">${svgThumb}</div>
          <div class="related-title">${name}</div>
          <div class="related-price tabular-nums">$${rel.price}</div>
        </div>
      `;
    }).join('');

    modalRelatedGrid.querySelectorAll('.related-item-card').forEach(card => {
      card.addEventListener('click', () => {
        const relId = card.getAttribute('data-rel-id');
        openProductModal(relId);
      });
    });
  }

  function closeModals() {
    [productModal, quoteModal, setModal].forEach(m => {
      if (m) m.classList.remove('active');
    });
    document.body.style.overflow = '';
    state.activeModalProduct = null;
  }

  // --- 7. QUOTE MODAL ---
  function openQuoteModal(prefillTitle) {
    if (!quoteModal) return;
    if (quoteFormContainer) quoteFormContainer.style.display = 'block';
    if (quoteSuccessState) quoteSuccessState.classList.remove('active');

    const commentInput = document.getElementById('quote-comment');
    if (commentInput && prefillTitle) {
      commentInput.value = `Inquiring about: ${prefillTitle}`;
    }

    quoteModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function handleQuoteSubmit(e) {
    if (e) e.preventDefault();
    playClickSound();

    if (quoteFormContainer) quoteFormContainer.style.display = 'none';
    if (quoteSuccessState) quoteSuccessState.classList.add('active');

    if (quoteForm) quoteForm.reset();
  }

  // --- 8. READY ROOM SETS ---
  function renderSets() {
    if (!setsGrid) return;
    const dict = window.I18N[state.lang] || window.I18N.en;

    setsGrid.innerHTML = window.ROOM_SETS.map(set => {
      const name = set.names[state.lang] || set.names.en;
      const desc = set.descriptions[state.lang] || set.descriptions.en;
      const svgThumb = window.renderFurnitureSVG(set.svgType, '#d4a373', '#7c5e42', 'oak');

      return `
        <article class="set-card">
          <div class="set-media">
            <span class="set-discount-pill">${set.discount}</span>
            <div style="width:100%; height:140px; display:flex; align-items:center; justify-content:center;">
              ${svgThumb}
            </div>
          </div>
          <div class="set-content">
            <h3 style="font-size:1.25rem;">${name}</h3>
            <p style="font-size:0.875rem; color:var(--text-secondary);">${desc}</p>
            <ul class="set-items-list" style="padding-left:1.2rem; margin-top:0.5rem;">
              ${set.items.map(it => `<li>${it}</li>`).join('')}
            </ul>
            <div class="set-pricing-row">
              <div class="set-price-box">
                <span class="set-old-price tabular-nums">$${set.oldPrice.toLocaleString()}</span>
                <span class="set-bundle-price tabular-nums">$${set.bundlePrice.toLocaleString()}</span>
              </div>
              <button class="set-order-btn" data-set-id="${set.id}">
                ${dict.orderQuoteBtn || 'Order Set'}
              </button>
            </div>
          </div>
        </article>
      `;
    }).join('');

    setsGrid.querySelectorAll('.set-order-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-set-id');
        const set = window.ROOM_SETS.find(s => s.id === id);
        if (set) {
          openQuoteModal(set.names[state.lang] || set.names.en);
        }
      });
    });
  }

  // --- 9. REVIEWS CAROUSEL ---
  function renderReview(index) {
    if (!reviewCardContent || !window.CUSTOMER_REVIEWS) return;
    const rev = window.CUSTOMER_REVIEWS[index];
    if (!rev) return;

    state.activeReviewIndex = index;
    const quote = rev.quote[state.lang] || rev.quote.en;
    const city = rev.city[state.lang] || rev.city.en;
    const item = rev.item[state.lang] || rev.item.en;

    reviewCardContent.innerHTML = `
      <div class="review-stars">★★★★★</div>
      <p class="review-quote">“${quote}”</p>
    `;

    if (reviewAuthorName) reviewAuthorName.textContent = rev.name;
    if (reviewAuthorCity) reviewAuthorCity.textContent = `${city} · ${item}`;
    if (reviewAuthorAvatar) reviewAuthorAvatar.textContent = rev.avatar;

    // Dots
    if (reviewSliderDots) {
      reviewSliderDots.innerHTML = window.CUSTOMER_REVIEWS.map((_, i) => `
        <span class="slider-dot ${i === index ? 'active' : ''}" data-idx="${i}" role="button" aria-label="Review ${i+1}"></span>
      `).join('');

      reviewSliderDots.querySelectorAll('.slider-dot').forEach(dot => {
        dot.addEventListener('click', () => {
          renderReview(parseInt(dot.getAttribute('data-idx'), 10));
        });
      });
    }

    if (typeof gsap !== 'undefined') {
      gsap.fromTo(reviewCardContent, { opacity: 0, y: 8 }, { opacity: 1, y: 0, duration: 0.3 });
    }
  }

  // --- 10. FAQ ACCORDION ---
  function renderFaq() {
    if (!faqList || !window.FAQS) return;
    faqList.innerHTML = window.FAQS.map((faq, i) => {
      const q = faq.q[state.lang] || faq.q.en;
      const a = faq.a[state.lang] || faq.a.en;
      return `
        <div class="faq-item" data-faq="${i}">
          <button class="faq-trigger" aria-expanded="false">
            <span>${q}</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </button>
          <div class="faq-content">
            <p class="faq-answer-text">${a}</p>
          </div>
        </div>
      `;
    }).join('');

    faqList.querySelectorAll('.faq-trigger').forEach(btn => {
      btn.addEventListener('click', () => {
        playClickSound();
        const item = btn.closest('.faq-item');
        const isActive = item.classList.contains('active');

        // Close other items
        faqList.querySelectorAll('.faq-item').forEach(other => {
          if (other !== item) {
            other.classList.remove('active');
            const otherBtn = other.querySelector('.faq-trigger');
            if (otherBtn) otherBtn.setAttribute('aria-expanded', 'false');
            const otherContent = other.querySelector('.faq-content');
            if (otherContent) otherContent.style.maxHeight = null;
          }
        });

        // Toggle current item
        if (isActive) {
          item.classList.remove('active');
          btn.setAttribute('aria-expanded', 'false');
          item.querySelector('.faq-content').style.maxHeight = null;
        } else {
          item.classList.add('active');
          btn.setAttribute('aria-expanded', 'true');
          const content = item.querySelector('.faq-content');
          content.style.maxHeight = content.scrollHeight + 'px';
        }
      });
    });
  }

  // --- 11. EVENT LISTENERS SETUP ---
  function attachEvents() {
    // Theme Toggles
    const themeBtns = [document.getElementById('login-theme-toggle'), document.getElementById('nav-theme-toggle')];
    themeBtns.forEach(btn => {
      if (btn) {
        btn.addEventListener('click', () => {
          playClickSound();
          applyTheme(state.theme === 'dark' ? 'light' : 'dark');
        });
      }
    });

    // Language Toggles
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        playClickSound();
        const lang = btn.getAttribute('data-lang');
        applyLanguage(lang);
      });
    });

    // Login Form Submit
    if (loginForm) {
      loginForm.addEventListener('submit', handleLogin);
    }
    const loginBtn = document.getElementById('login-submit-btn');
    if (loginBtn) {
      loginBtn.addEventListener('click', handleLogin);
    }

    // Logout
    if (logoutBtn) {
      logoutBtn.addEventListener('click', handleLogout);
    }

    // Brand link returns to top of catalog
    const brandLink = document.getElementById('brand-link');
    if (brandLink) {
      brandLink.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }

    // Search input
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        state.searchQuery = e.target.value.trim();
        state.visibleCount = 12;
        if (searchClearBtn) {
          searchClearBtn.classList.toggle('visible', !!state.searchQuery);
        }
        renderCatalog();
      });
    }

    if (searchClearBtn) {
      searchClearBtn.addEventListener('click', () => {
        if (searchInput) searchInput.value = '';
        state.searchQuery = '';
        searchClearBtn.classList.remove('visible');
        state.visibleCount = 12;
        renderCatalog();
      });
    }

    // Sort select
    if (sortSelect) {
      sortSelect.addEventListener('change', (e) => {
        state.sortOrder = e.target.value;
        renderCatalog();
      });
    }

    // Material select
    if (materialSelect) {
      materialSelect.addEventListener('change', (e) => {
        state.selectedMaterial = e.target.value;
        state.visibleCount = 12;
        renderCatalog();
      });
    }

    // Price Slider
    if (priceSlider) {
      priceSlider.addEventListener('input', (e) => {
        state.maxPrice = parseInt(e.target.value, 10);
        if (priceDisplay) priceDisplay.textContent = `$${state.maxPrice.toLocaleString()}`;
        state.visibleCount = 12;
        renderCatalog();
      });
    }

    // Favorites Filter toggle
    if (filterFavBtn) {
      filterFavBtn.addEventListener('click', () => {
        playClickSound();
        state.showFavoritesOnly = !state.showFavoritesOnly;
        filterFavBtn.classList.toggle('active', state.showFavoritesOnly);
        state.visibleCount = 12;
        renderCatalog();
      });
    }

    if (navFavToggleBtn) {
      navFavToggleBtn.addEventListener('click', () => {
        playClickSound();
        state.showFavoritesOnly = !state.showFavoritesOnly;
        if (filterFavBtn) filterFavBtn.classList.toggle('active', state.showFavoritesOnly);
        state.visibleCount = 12;
        renderCatalog();
        document.getElementById('catalog-section')?.scrollIntoView({ behavior: 'smooth' });
      });
    }

    // Reset filters
    function resetAllFilters() {
      state.selectedCategory = 'all';
      state.searchQuery = '';
      state.selectedMaterial = 'all';
      state.sortOrder = 'default';
      state.maxPrice = 3500;
      state.showFavoritesOnly = false;
      state.visibleCount = 12;

      if (searchInput) searchInput.value = '';
      if (searchClearBtn) searchClearBtn.classList.remove('visible');
      if (materialSelect) materialSelect.value = 'all';
      if (sortSelect) sortSelect.value = 'default';
      if (priceSlider) priceSlider.value = 3500;
      if (priceDisplay) priceDisplay.textContent = '$3,500';
      if (filterFavBtn) filterFavBtn.classList.remove('active');

      renderCategoryTabs();
      renderCatalog();
    }

    if (resetFiltersBtn) resetFiltersBtn.addEventListener('click', resetAllFilters);
    const noResultsResetBtn = document.getElementById('no-results-reset-btn');
    if (noResultsResetBtn) noResultsResetBtn.addEventListener('click', resetAllFilters);

    // Show more button
    if (showMoreBtn) {
      showMoreBtn.addEventListener('click', () => {
        playClickSound();
        state.visibleCount += 12;
        renderCatalog();
      });
    }

    // Modal Close Buttons & Backdrop click
    document.querySelectorAll('.modal-close-btn').forEach(btn => {
      btn.addEventListener('click', closeModals);
    });

    [productModal, quoteModal, setModal].forEach(m => {
      if (m) {
        m.addEventListener('click', (e) => {
          if (e.target === m) closeModals();
        });
      }
    });

    // Keyboard ESC closes modals
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeModals();
    });

    // Open quote from product modal
    if (modalOpenQuoteBtn) {
      modalOpenQuoteBtn.addEventListener('click', () => {
        const prod = state.activeModalProduct;
        closeModals();
        openQuoteModal(prod ? (prod.names[state.lang] || prod.names.en) : '');
      });
    }

    // Hero secondary button opens quote
    const heroQuoteBtn = document.getElementById('hero-custom-quote-btn');
    if (heroQuoteBtn) {
      heroQuoteBtn.addEventListener('click', () => openQuoteModal('3D Custom Furniture Consultation'));
    }

    // Quote form submit
    if (quoteForm) {
      quoteForm.addEventListener('submit', handleQuoteSubmit);
    }
    const quoteSubmitBtn = document.getElementById('quote-submit-btn');
    if (quoteSubmitBtn) {
      quoteSubmitBtn.addEventListener('click', handleQuoteSubmit);
    }
    const quoteCloseBtn = document.getElementById('quote-success-close-btn');
    if (quoteCloseBtn) {
      quoteCloseBtn.addEventListener('click', closeModals);
    }

    // Reviews Navigation
    if (reviewPrevBtn) {
      reviewPrevBtn.addEventListener('click', () => {
        playClickSound();
        const total = window.CUSTOMER_REVIEWS.length;
        renderReview((state.activeReviewIndex - 1 + total) % total);
      });
    }
    if (reviewNextBtn) {
      reviewNextBtn.addEventListener('click', () => {
        playClickSound();
        const total = window.CUSTOMER_REVIEWS.length;
        renderReview((state.activeReviewIndex + 1) % total);
      });
    }

    // Footer Category Links
    document.querySelectorAll('.footer-cat-link').forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const cat = link.getAttribute('data-cat');
        state.selectedCategory = cat;
        state.visibleCount = 12;
        renderCategoryTabs();
        renderCatalog();
        document.getElementById('catalog-section')?.scrollIntoView({ behavior: 'smooth' });
      });
    });
  }

  // --- 12. INITIALIZATION ON DOM READY ---
  function init() {
    applyTheme(state.theme);
    applyLanguage(state.lang);
    attachEvents();
    initLampInteraction();

    // Check if user is already logged in from previous session
    if (state.user) {
      showCatalogView();
    } else {
      // Show login view with lamp
      loginView.classList.remove('hidden');
      catalogView.classList.add('hidden');
      body.classList.add('login-active');
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
