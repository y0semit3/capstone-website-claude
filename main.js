/* ============================================================
   THESIS PORTFOLIO — MAIN JAVASCRIPT
   Timeline, scroll spy, navigation, reveal animations
   ============================================================ */

(function () {
  'use strict';

  /* -------------------------------------------------------
     TIMELINE DATA
     Edit this array to change timeline events.
     Each object needs: date, title, detail
     ------------------------------------------------------- */
  const TIMELINE_EVENTS = [
    {
      date: 'Jan 20–23',
      title: 'Chapter II: Place',
      detail: 'Narrating Place assignment. Recorded: The Palazzo San Giorgio in Genoa and the state within a state.'
    },
    {
      date: 'Jan 27–30',
      title: 'Chapter I: Person',
      detail: 'Narrating Lives assignment. Recorded: Luca Pacioli and the invention of double-entry bookkeeping.'
    },
    {
      date: 'Feb 1–6',
      title: 'Chapter IV: Artifact',
      detail: 'Artifact assignment. Recorded: My desk and the modern abstraction of financial surplus.'
    },
    {
      date: 'Feb 8–13',
      title: 'Chapter III: Debate',
      detail: 'Debate assignment. Recorded: The usury debate between Thomas Aquinas and John Calvin.'
    },
    {
      date: 'Feb 15–20',
      title: 'Event Narrative',
      detail: 'Event assignment. TBD: A transformative moment in the history of surplus.'
    },
    {
      date: 'Mar 16–19',
      title: 'Material Culture',
      detail: 'Material Culture assignment. TBD: An object or artifact that embodies the concept of surplus.'
    },
    {
      date: 'Apr 6–10',
      title: 'Visual Arts Integration',
      detail: 'Painting/Visual Arts assignment. TBD: Integration of visual sources or artistic representations.'
    },
    {
      date: 'Apr 28–May 11',
      title: 'Final Presentations',
      detail: 'Present website and complete capstone project before final exam period.'
    }
  ];


  /* -------------------------------------------------------
     BUILD TIMELINE
     ------------------------------------------------------- */
  function buildTimeline() {
    const track = document.querySelector('.timeline-track');
    if (!track) return;

    TIMELINE_EVENTS.forEach(function (event, index) {
      const node = document.createElement('div');
      node.className = 'tl-node';
      node.setAttribute('data-index', index);

      node.innerHTML =
        '<div class="tl-dot"></div>' +
        '<div class="tl-date">' + event.date + '</div>' +
        '<div class="tl-title">' + event.title + '</div>' +
        '<div class="tl-detail">' + event.detail + '</div>';

      node.addEventListener('click', function (e) {
        e.stopPropagation();
        toggleNode(node);
      });

      track.appendChild(node);
    });

    // Close expanded node when clicking elsewhere
    document.addEventListener('click', function () {
      var active = document.querySelector('.tl-node.active');
      if (active) active.classList.remove('active');
    });
  }

  function toggleNode(node) {
    var wasActive = node.classList.contains('active');

    // Close any currently active node
    var current = document.querySelector('.tl-node.active');
    if (current && current !== node) {
      current.classList.remove('active');
    }

    // Toggle clicked node
    if (!wasActive) {
      node.classList.add('active');
    } else {
      node.classList.remove('active');
    }
  }


  /* -------------------------------------------------------
     SCROLL SPY — highlights active nav link
     ------------------------------------------------------- */
  function initScrollSpy() {
    var sections = document.querySelectorAll('section[id]');
    var navLinks = document.querySelectorAll('.nav-links a');

    if (!sections.length || !navLinks.length) return;

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var id = entry.target.getAttribute('id');
          navLinks.forEach(function (link) {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + id) {
              link.classList.add('active');
            }
          });
        }
      });
    }, {
      rootMargin: '-40% 0px -55% 0px',
      threshold: 0
    });

    sections.forEach(function (section) {
      observer.observe(section);
    });
  }


  /* -------------------------------------------------------
     MOBILE NAV TOGGLE
     ------------------------------------------------------- */
  function initMobileNav() {
    var toggle = document.querySelector('.nav-toggle');
    var links = document.querySelector('.nav-links');

    if (!toggle || !links) return;

    toggle.addEventListener('click', function () {
      links.classList.toggle('open');
      toggle.classList.toggle('open');
    });

    // Close mobile nav when a link is clicked
    links.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        links.classList.remove('open');
        toggle.classList.remove('open');
      });
    });
  }


  /* -------------------------------------------------------
     SCROLL REVEAL — fade in elements on scroll
     ------------------------------------------------------- */
  function initReveal() {
    // Tag elements for reveal animation
    var revealSelectors = [
      '.chapter-text',
      '.chapter-image',
      '.video-container',
      '.reference-list li'
    ];

    revealSelectors.forEach(function (selector) {
      document.querySelectorAll(selector).forEach(function (el) {
        el.classList.add('reveal');
      });
    });

    var reveals = document.querySelectorAll('.reveal');
    if (!reveals.length) return;

    var revealObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    reveals.forEach(function (el) {
      revealObserver.observe(el);
    });
  }


  /* -------------------------------------------------------
     SMOOTH SCROLL for nav links (fallback for older browsers)
     ------------------------------------------------------- */
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(function (link) {
      link.addEventListener('click', function (e) {
        var targetId = this.getAttribute('href');
        var target = document.querySelector(targetId);
        if (target) {
          e.preventDefault();
          var offset = target.getBoundingClientRect().top + window.pageYOffset
                       - parseInt(getComputedStyle(document.documentElement)
                         .getPropertyValue('--nav-height'));
          window.scrollTo({ top: offset, behavior: 'smooth' });

          // Update URL without jumping
          history.pushState(null, '', targetId);
        }
      });
    });
  }


  /* -------------------------------------------------------
     NAV BACKGROUND on scroll
     ------------------------------------------------------- */
  function initNavScroll() {
    var nav = document.getElementById('main-nav');
    if (!nav) return;

    window.addEventListener('scroll', function () {
      if (window.scrollY > 80) {
        nav.style.borderBottomColor = 'rgba(139, 115, 85, 0.15)';
      } else {
        nav.style.borderBottomColor = '';
      }
    }, { passive: true });
  }


  /* -------------------------------------------------------
     INIT
     ------------------------------------------------------- */
  document.addEventListener('DOMContentLoaded', function () {
    buildTimeline();
    initScrollSpy();
    initMobileNav();
    initReveal();
    initSmoothScroll();
    initNavScroll();
  });

})();
