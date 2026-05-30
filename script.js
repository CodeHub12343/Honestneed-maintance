/* ─────────────────────────────────────────────────────────────────────────────
   Vanilla JavaScript
───────────────────────────────────────────────────────────────────────────── */

(function() {
  'use strict';

  // Dots animation for "Updates soon" button
  let dotCount = 0;
  const dotsElement = document.querySelector('.hn-dots');

  function updateDots() {
    if (dotsElement) {
      dotCount = (dotCount + 1) % 4;
      // Update the dots display
      const dots = '.'.repeat(dotCount);
      dotsElement.textContent = 'Updates soon' + dots;
    }
  }

  // Update dots every 600ms
  setInterval(updateDots, 600);

  // Initialize
  console.log('HonestNeed maintenance page loaded');
})();
