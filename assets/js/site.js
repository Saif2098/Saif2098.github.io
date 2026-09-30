// =============================================================
// site.js — Dark mode, publication filter, toggles, scroll effects,
//           copy bibtex, back-to-top, year badges
// =============================================================

(function () {
  'use strict';

  // ----- Dark Mode Toggle -----

  var toggle = document.getElementById('darkModeToggle');
  var icon = document.getElementById('themeIcon');

  function updateIcon() {
    if (!icon) return;
    var theme = document.documentElement.getAttribute('data-bs-theme');
    if (theme === 'dark') {
      icon.className = 'fa-solid fa-moon';
    } else {
      icon.className = 'fa-solid fa-sun';
    }
  }

  if (toggle) {
    updateIcon();

    toggle.addEventListener('click', function () {
      var current = document.documentElement.getAttribute('data-bs-theme');
      var next = current === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-bs-theme', next);
      localStorage.setItem('theme', next);
      updateIcon();
    });
  }

  // ----- Publication Expand/Collapse -----

  document.addEventListener('click', function (e) {
    var button = e.target.closest('[data-toggle-target]');
    if (!button) return;

    var targetId = button.getAttribute('data-toggle-target');
    var target = document.getElementById(targetId);
    if (!target) return;

    target.classList.toggle('show');
  });

  // ----- Publication Search/Filter -----

  var searchInput = document.getElementById('pubSearch');
  if (searchInput) {
    searchInput.addEventListener('input', function () {
      var query = this.value.toLowerCase().trim();
      var entries = document.querySelectorAll('[data-pub-searchable]');

      entries.forEach(function (entry) {
        if (!query) {
          entry.style.display = '';
          return;
        }
        var text = entry.textContent.toLowerCase();
        entry.style.display = text.includes(query) ? '' : 'none';
      });
    });
  }

  // ----- BibTeX / Abstract Dialog -----

  var bibOverlay = document.getElementById('bibOverlay');
  if (bibOverlay) {
    var bibBox = bibOverlay.querySelector('.bib-box');
    var bibContent = document.getElementById('bibContent');
    var bibHeading = document.getElementById('bibDialogTitle');
    var bibCopy = document.getElementById('bibCopy');
    var bibClose = document.getElementById('bibClose');
    var lastTrigger = null;
    var copyResetTimer = null;

    // Fields the site adds for presentation only — they are not part of the
    // citation and must not end up in anyone's .bib file.
    var PRESENTATION_FIELDS = /^\s*(venue|status|topics|image|award|code|pdf|slides)\s*=/i;

    function cleanBibtex(text) {
      return text
        .split('\n')
        .filter(function (line) { return !PRESENTATION_FIELDS.test(line); })
        .join('\n')
        .trim();
    }

    function openBib(sourceId, title, trigger) {
      var src = document.getElementById(sourceId);
      if (!src) return;
      var raw = (src.content ? src.content.textContent : src.textContent).trim();
      bibContent.textContent = title === 'BibTeX' ? cleanBibtex(raw) : raw;
      bibHeading.textContent = title || 'BibTeX';
      bibCopy.textContent = 'Copy to clipboard';
      bibCopy.classList.remove('copied');
      lastTrigger = trigger || null;

      bibOverlay.hidden = false;
      // Force a reflow so the browser registers the closed state before the
      // class flips — more reliable than waiting on a frame callback.
      void bibOverlay.offsetWidth;
      bibOverlay.classList.add('open');
      document.body.style.overflow = 'hidden';
      bibBox.focus();
    }

    function closeBib() {
      if (bibOverlay.hidden) return;
      bibOverlay.classList.remove('open');
      document.body.style.overflow = '';
      var done = function () {
        bibOverlay.hidden = true;
        bibOverlay.removeEventListener('transitionend', done);
      };
      bibOverlay.addEventListener('transitionend', done);
      // Fallback when transitions are disabled (reduced motion)
      setTimeout(function () { if (!bibOverlay.classList.contains('open')) done(); }, 400);
      if (lastTrigger) { lastTrigger.focus(); lastTrigger = null; }
    }

    document.addEventListener('click', function (e) {
      var opener = e.target.closest('[data-bib-open]');
      if (opener) {
        e.preventDefault();
        openBib(opener.getAttribute('data-bib-open'),
                opener.getAttribute('data-bib-title'), opener);
        return;
      }
      if (e.target.closest('#bibClose')) { closeBib(); return; }
      // Backdrop click, but not clicks inside the panel
      if (!bibOverlay.hidden && e.target === bibOverlay) closeBib();
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && !bibOverlay.hidden) closeBib();
      // Keep focus inside the dialog while it is open
      if (e.key === 'Tab' && !bibOverlay.hidden) {
        var focusable = bibBox.querySelectorAll('button');
        if (!focusable.length) return;
        var first = focusable[0], last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    });

    bibCopy.addEventListener('click', function () {
      var text = bibContent.textContent;
      var mark = function () {
        bibCopy.textContent = 'Copied';
        bibCopy.classList.add('copied');
        clearTimeout(copyResetTimer);
        copyResetTimer = setTimeout(function () {
          bibCopy.textContent = 'Copy to clipboard';
          bibCopy.classList.remove('copied');
        }, 1800);
      };
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(mark);
      } else {
        var ta = document.createElement('textarea');
        ta.value = text;
        document.body.appendChild(ta);
        ta.select();
        try { document.execCommand('copy'); mark(); } catch (err) {}
        document.body.removeChild(ta);
      }
    });
  }

  // ----- Back to Top Button -----

  var topBtn = document.createElement('button');
  topBtn.className = 'back-to-top';
  topBtn.innerHTML = '<i class="fa-solid fa-arrow-up"></i>';
  topBtn.setAttribute('aria-label', 'Back to top');
  document.body.appendChild(topBtn);

  topBtn.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  window.addEventListener('scroll', function () {
    if (window.scrollY > 400) {
      topBtn.classList.add('visible');
    } else {
      topBtn.classList.remove('visible');
    }
  }, { passive: true });

  // ----- Navbar Scroll Shadow -----

  var navbar = document.querySelector('.navbar');
  if (navbar) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 10) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }, { passive: true });
  }

  // ----- Fade-in on Scroll -----

  var fadeElements = document.querySelectorAll('.fade-in-section');
  if (fadeElements.length > 0 && 'IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -40px 0px'
    });

    fadeElements.forEach(function (el) {
      observer.observe(el);
    });
  } else {
    fadeElements.forEach(function (el) {
      el.classList.add('visible');
    });
  }

  // ----- Site Search -----

  var searchToggleBtn = document.getElementById('searchToggle');
  var searchOverlay = document.getElementById('searchOverlay');
  var searchInputEl = document.getElementById('searchInput');
  var searchResultsEl = document.getElementById('searchResults');
  var searchData = null;

  function openSearch() {
    if (!searchOverlay) return;
    searchOverlay.classList.add('open');
    setTimeout(function () { searchInputEl.focus(); }, 100);
  }

  function closeSearch() {
    if (!searchOverlay) return;
    searchOverlay.classList.remove('open');
    searchInputEl.value = '';
    searchResultsEl.innerHTML = '';
  }

  if (searchToggleBtn) {
    searchToggleBtn.addEventListener('click', openSearch);
  }

  if (searchOverlay) {
    searchOverlay.addEventListener('click', function (e) {
      if (e.target === searchOverlay) closeSearch();
    });
  }

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && searchOverlay && searchOverlay.classList.contains('open')) {
      closeSearch();
    }
    // Cmd/Ctrl + K to open search
    if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
      e.preventDefault();
      if (searchOverlay && searchOverlay.classList.contains('open')) {
        closeSearch();
      } else {
        openSearch();
      }
    }
  });

  function loadSearchData(callback) {
    if (searchData) { callback(searchData); return; }
    fetch('/assets/search.json')
      .then(function (r) { return r.json(); })
      .then(function (data) {
        searchData = data;
        callback(data);
      })
      .catch(function () {
        searchResultsEl.innerHTML = '<div class="search-no-results">Could not load search index.</div>';
      });
  }

  function renderResults(query, data) {
    if (!query) {
      searchResultsEl.innerHTML = '';
      return;
    }
    var q = query.toLowerCase();
    var matches = data.filter(function (item) {
      return item.title.toLowerCase().includes(q) ||
             item.content.toLowerCase().includes(q);
    });

    if (matches.length === 0) {
      searchResultsEl.innerHTML = '<div class="search-no-results">No results for "' + query + '"</div>';
      return;
    }

    searchResultsEl.innerHTML = matches.map(function (item) {
      var snippet = item.content.substring(0, 150).trim() + '...';
      return '<a href="' + item.url + '" class="search-result-item">' +
        '<div class="search-result-title">' + item.title + '</div>' +
        '<div class="search-result-snippet">' + snippet + '</div>' +
        '</a>';
    }).join('');
  }

  if (searchInputEl) {
    var debounceTimer;
    searchInputEl.addEventListener('input', function () {
      var query = this.value.trim();
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(function () {
        loadSearchData(function (data) {
          renderResults(query, data);
        });
      }, 150);
    });
  }

})();
