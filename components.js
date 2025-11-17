// FANTOWNS Shared Components
// Unified header, footer, and breadcrumbs for consistent site-wide experience

// ========== UNIFIED HEADER ==========
function renderHeader(activePage = '') {
  const header = document.createElement('header');
  header.className = 'fantowns-header';
  header.innerHTML = `
    <div class="header-container">
      <a href="index.html" class="header-logo">
        <img src="images/icons/logo.jpg" alt="FANTOWNS Logo" style="height: 35px; width: auto; vertical-align: middle; border-radius: 6px; margin-right: 8px;">
        FANTOWNS
      </a>

      <!-- Desktop Navigation -->
      <nav class="header-nav desktop-nav" aria-label="Main navigation">
        <a href="index.html" class="nav-link ${activePage === 'home' ? 'active' : ''}">Home</a>
        <a href="blog.html" class="nav-link ${activePage === 'blog' ? 'active' : ''}">📖 Blog</a>
        <a href="videos.html" class="nav-link ${activePage === 'videos' ? 'active' : ''}">🎥 Videos</a>
        <a href="index.html#cities" class="nav-link">Cities</a>
        <button onclick="openBucketList()" class="bucket-list-btn" aria-label="Open bucket list">
          Bucket List (<span id="bucket-count-nav">0</span>)
        </button>
      </nav>

      <!-- Mobile Menu Toggle -->
      <button class="mobile-menu-toggle" onclick="toggleMobileMenu()" aria-label="Toggle menu" aria-expanded="false">
        <span class="hamburger-icon"></span>
      </button>
    </div>

    <!-- Mobile Navigation -->
    <nav class="header-nav mobile-nav" id="mobileNav" aria-label="Mobile navigation">
      <a href="index.html" class="nav-link ${activePage === 'home' ? 'active' : ''}">Home</a>
      <a href="blog.html" class="nav-link ${activePage === 'blog' ? 'active' : ''}">📖 Blog</a>
      <a href="videos.html" class="nav-link ${activePage === 'videos' ? 'active' : ''}">🎥 Videos</a>
      <a href="index.html#cities" class="nav-link">Cities</a>
      <button onclick="openBucketList(); toggleMobileMenu();" class="bucket-list-btn-mobile">
        Bucket List (<span id="bucket-count-mobile">0</span>)
      </button>
    </nav>
  `;

  return header;
}

// ========== BREADCRUMBS ==========
function renderBreadcrumbs(crumbs) {
  const breadcrumbNav = document.createElement('nav');
  breadcrumbNav.className = 'breadcrumbs';
  breadcrumbNav.setAttribute('aria-label', 'Breadcrumb');

  const breadcrumbList = crumbs.map((crumb, index) => {
    const isLast = index === crumbs.length - 1;
    if (isLast) {
      return `<span class="breadcrumb-item active" aria-current="page">${crumb.name}</span>`;
    }
    return `<a href="${crumb.url}" class="breadcrumb-item">${crumb.name}</a>`;
  }).join('<span class="breadcrumb-separator">›</span>');

  breadcrumbNav.innerHTML = `<div class="breadcrumb-container">${breadcrumbList}</div>`;

  // Generate breadcrumb schema
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": crumbs.map((crumb, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": crumb.name,
      "item": crumb.url ? `https://www.fantowns.com/${crumb.url}` : undefined
    }))
  };

  const schemaScript = document.createElement('script');
  schemaScript.type = 'application/ld+json';
  schemaScript.textContent = JSON.stringify(schema);
  document.head.appendChild(schemaScript);

  return breadcrumbNav;
}

// ========== FOOTER ==========
function renderFooter() {
  const footer = document.createElement('footer');
  footer.className = 'fantowns-footer';
  footer.innerHTML = `
    <div class="footer-container">
      <div class="footer-grid">
        <!-- About Column -->
        <div class="footer-column">
          <h3 class="footer-heading">About FANTOWNS</h3>
          <p class="footer-description">
            Discover the world's most passionate fan cities - from Liverpool's Anfield to Tokyo's Comiket.
            Your ultimate guide to experiencing legendary fan culture like a local.
          </p>
          <div class="footer-social">
            <a href="#" class="social-link" aria-label="Twitter" title="Follow us on Twitter">𝕏</a>
            <a href="#" class="social-link" aria-label="Instagram" title="Follow us on Instagram">📷</a>
            <a href="#" class="social-link" aria-label="YouTube" title="Subscribe on YouTube">📺</a>
          </div>
        </div>

        <!-- Quick Links -->
        <div class="footer-column">
          <h3 class="footer-heading">Quick Links</h3>
          <ul class="footer-links">
            <li><a href="index.html">Home</a></li>
            <li><a href="index.html#cities">All Cities</a></li>
            <li><a href="blog.html">Fan Stories</a></li>
            <li><a href="videos.html">Video Library</a></li>
          </ul>
        </div>

        <!-- Popular Cities -->
        <div class="footer-column">
          <h3 class="footer-heading">Popular Cities</h3>
          <ul class="footer-links">
            <li><a href="city.html?city=liverpool">Liverpool</a></li>
            <li><a href="city.html?city=tokyo">Tokyo</a></li>
            <li><a href="city.html?city=buenosaires">Buenos Aires</a></li>
            <li><a href="city.html?city=greenbay">Green Bay</a></li>
            <li><a href="city.html?city=nashville">Nashville</a></li>
          </ul>
        </div>

        <!-- Legal & Info -->
        <div class="footer-column">
          <h3 class="footer-heading">Information</h3>
          <ul class="footer-links">
            <li><a href="#about">About Us</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#privacy">Privacy Policy</a></li>
            <li><a href="#terms">Terms of Use</a></li>
            <li><a href="mailto:reviews@fantowns.com">Submit Review</a></li>
          </ul>
        </div>
      </div>

      <!-- Copyright -->
      <div class="footer-bottom">
        <p>&copy; ${new Date().getFullYear()} FANTOWNS. All rights reserved. Made with passion for fans worldwide.</p>
        <p class="footer-tagline">🏙️ Where Passion Lives</p>
      </div>
    </div>
  `;

  return footer;
}

// ========== MOBILE MENU TOGGLE ==========
function toggleMobileMenu() {
  const mobileNav = document.getElementById('mobileNav');
  const toggle = document.querySelector('.mobile-menu-toggle');
  const isOpen = mobileNav.classList.contains('open');

  if (isOpen) {
    mobileNav.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = 'auto';
  } else {
    mobileNav.classList.add('open');
    toggle.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }
}

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
  const mobileNav = document.getElementById('mobileNav');
  const toggle = document.querySelector('.mobile-menu-toggle');

  if (mobileNav && toggle) {
    if (!mobileNav.contains(e.target) && !toggle.contains(e.target)) {
      if (mobileNav.classList.contains('open')) {
        toggleMobileMenu();
      }
    }
  }
});

// Close mobile menu on window resize to desktop
window.addEventListener('resize', () => {
  if (window.innerWidth > 768) {
    const mobileNav = document.getElementById('mobileNav');
    if (mobileNav && mobileNav.classList.contains('open')) {
      toggleMobileMenu();
    }
  }
});

// ========== DYNAMIC META TAGS ==========
function setMetaTags(meta) {
  if (meta.title) {
    document.title = meta.title;
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', meta.title);
    document.querySelector('meta[name="twitter:title"]')?.setAttribute('content', meta.title);
  }

  if (meta.description) {
    const descMeta = document.querySelector('meta[name="description"]');
    if (descMeta) descMeta.setAttribute('content', meta.description);
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', meta.description);
    document.querySelector('meta[name="twitter:description"]')?.setAttribute('content', meta.description);
  }

  if (meta.keywords) {
    const keywordsMeta = document.querySelector('meta[name="keywords"]');
    if (keywordsMeta) keywordsMeta.setAttribute('content', meta.keywords);
  }

  if (meta.url) {
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) canonical.setAttribute('href', meta.url);
    document.querySelector('meta[property="og:url"]')?.setAttribute('content', meta.url);
  }

  if (meta.image) {
    document.querySelector('meta[property="og:image"]')?.setAttribute('content', meta.image);
    document.querySelector('meta[name="twitter:image"]')?.setAttribute('content', meta.image);
  }
}

// ========== BACK TO TOP BUTTON ==========
function renderBackToTop() {
  const button = document.createElement('button');
  button.className = 'back-to-top';
  button.innerHTML = '↑';
  button.setAttribute('aria-label', 'Back to top');
  button.onclick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Show/hide based on scroll position
  window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
      button.classList.add('visible');
    } else {
      button.classList.remove('visible');
    }
  });

  return button;
}

// ========== BUCKET LIST STUB (for compatibility) ==========
function openBucketList() {
  // This function should be defined in the page-specific JS
  // Placeholder for header compatibility
  if (window.openBucketListModal) {
    window.openBucketListModal();
  } else {
    alert('Bucket list feature coming soon!');
  }
}
