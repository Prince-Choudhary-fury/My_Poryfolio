/**
 * theme-toggle.js
 * Handles dark / light mode toggle with localStorage persistence.
 * Dark mode is the PRIMARY (default) theme.
 */
(function () {
  'use strict';

  const STORAGE_KEY = 'portfolio-theme';
  const DEFAULT_THEME = 'dark';

  // ── Apply theme ────────────────────────────────────────────────
  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(STORAGE_KEY, theme);
    updateToggleUI(theme);
  }

  // ── Update toggle button visuals ───────────────────────────────
  function updateToggleUI(theme) {
    const btn   = document.getElementById('theme-toggle');
    const label = btn && btn.querySelector('.toggle-label');
    const icon  = btn && btn.querySelector('.toggle-icon');
    if (!btn) return;

    if (theme === 'dark') {
      if (label) label.textContent = 'Dark Mode';
      if (icon)  icon.textContent  = '☀️';
      btn.setAttribute('aria-label', 'Switch to light mode');
      btn.setAttribute('title',      'Switch to light mode');
    } else {
      if (label) label.textContent = 'Light Mode';
      if (icon)  icon.textContent  = '🌙';
      btn.setAttribute('aria-label', 'Switch to dark mode');
      btn.setAttribute('title',      'Switch to dark mode');
    }
  }

  // ── Toggle handler ─────────────────────────────────────────────
  function onToggleClick() {
    const current = document.documentElement.getAttribute('data-theme') || DEFAULT_THEME;
    applyTheme(current === 'dark' ? 'light' : 'dark');
  }

  // ── Init ───────────────────────────────────────────────────────
  function init() {
    // Resolve saved preference or system preference, fallback to dark
    const saved  = localStorage.getItem(STORAGE_KEY);
    const system = window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
    const theme  = saved || system || DEFAULT_THEME;

    applyTheme(theme);

    const btn = document.getElementById('theme-toggle');
    if (btn) {
      btn.addEventListener('click', onToggleClick);
    }

    // Respect OS-level changes (only if user hasn't manually picked)
    window.matchMedia('(prefers-color-scheme: light)').addEventListener('change', (e) => {
      if (!localStorage.getItem(STORAGE_KEY)) {
        applyTheme(e.matches ? 'light' : 'dark');
      }
    });
  }

  // Run after DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
