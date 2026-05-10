/**
 * navigation.js
 * Handles the sidebar mobile hamburger toggle and back-to-top button.
 * Scroll-based active-link detection is removed — tabs.js handles it.
 */
(function () {
  "use strict";

  const select = (el, all = false) => {
    el = el.trim();
    return all
      ? [...document.querySelectorAll(el)]
      : document.querySelector(el);
  };

  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all);
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener));
      } else {
        selectEl.addEventListener(type, listener);
      }
    }
  };

  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener);
  };

  // ── Back-to-top button ──────────────────────────────────────
  let backtotop = select('.back-to-top');
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active');
      } else {
        backtotop.classList.remove('active');
      }
    };
    window.addEventListener('load', toggleBacktotop);
    onscroll(document, toggleBacktotop);
  }

  // ── Mobile nav toggle ────────────────────────────────────────
  on('click', '.mobile-nav-toggle', function () {
    select('body').classList.toggle('mobile-nav-active');
    this.classList.toggle('bi-list');
    this.classList.toggle('bi-x');
  });

})();
