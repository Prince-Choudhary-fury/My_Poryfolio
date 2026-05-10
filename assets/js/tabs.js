/**
 * tabs.js
 * Handles the tab navigation system.
 * Tab order: About | Projects (default) | Asset Store | Work Sample
 */
(function () {
  'use strict';

  const TAB_STORAGE_KEY = 'portfolio-active-tab';
  const DEFAULT_TAB     = 'projects'; // Projects opens first

  // ── Activate a tab by its id ──────────────────────────────────
  function activateTab(tabId, saveToStorage) {
    // Hide all panes
    document.querySelectorAll('.tab-pane').forEach(function (pane) {
      pane.classList.remove('active');
    });

    // Deactivate all nav links
    document.querySelectorAll('.tab-link').forEach(function (link) {
      link.classList.remove('active');
    });

    // Show target pane
    var pane = document.getElementById('tab-' + tabId);
    if (pane) {
      pane.classList.add('active');

      // Always scroll window to top when switching tabs
      window.scrollTo(0, 0);

      // AOS: in a tab layout there is no scroll trigger, so elements with
      // data-aos stay at opacity:0 / transformed until manually marked.
      // Immediately animate all AOS elements inside the newly active pane.
      requestAnimationFrame(function () {
        pane.querySelectorAll('[data-aos]').forEach(function (el) {
          el.classList.add('aos-animate');
        });
      });

      // Re-initialise typed.js if switching to About
      if (tabId === 'about' && window._typedInstance) {
        try { window._typedInstance.reset(); } catch(e) {}
      }

      // Work Sample: Isotope was laid out while hidden — force re-layout
      if (tabId === 'work-sample' && window._portfolioIsotope) {
        window._portfolioIsotope.layout();
      }

      // Pause all project videos; play only those in the active pane
      document.querySelectorAll('.project-video').forEach(function (v) { v.pause(); });
      if (tabId === 'projects') {
        pane.querySelectorAll('.project-video').forEach(function (v) { v.play(); });
      }
    }

    // Activate matching nav link
    var link = document.querySelector('.tab-link[data-tab="' + tabId + '"]');
    if (link) { link.classList.add('active'); }

    if (saveToStorage) {
      try { sessionStorage.setItem(TAB_STORAGE_KEY, tabId); } catch(e) {}
    }
  }

  // ── Init ─────────────────────────────────────────────────────
  function init() {
    // Move resume section into the About tab (it starts hidden outside any pane)
    var resume  = document.getElementById('resume');
    var tabAbout = document.getElementById('tab-about');
    if (resume && tabAbout) {
      tabAbout.appendChild(resume);
      resume.classList.remove('tab-resume-pending'); // reveal it
    }

    // Attach click handlers to all tab links
    document.querySelectorAll('.tab-link').forEach(function (link) {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        var tabId = this.getAttribute('data-tab');
        if (!tabId) return;

        activateTab(tabId, true);

        // Close mobile sidebar if open
        var body = document.body;
        if (body.classList.contains('mobile-nav-active')) {
          body.classList.remove('mobile-nav-active');
          var toggle = document.querySelector('.mobile-nav-toggle');
          if (toggle) {
            toggle.classList.add('bi-list');
            toggle.classList.remove('bi-x');
          }
        }
      });
    });

    // Restore last visited tab from session, else use default
    var saved = null;
    try { saved = sessionStorage.getItem(TAB_STORAGE_KEY); } catch(e) {}
    activateTab(saved || DEFAULT_TAB, false);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
