/* RPG Demo Library: always-available "Full adventure PDF" button.
   Include after store.js:  <script src="../../buy.js" data-product="product-id" defer></script>
   Shows a fixed corner button on every demo page. Clicking it opens a small panel
   with the product and a Buy button (or "coming soon" while the checkout link is empty),
   plus a "Paperback on Amazon" button when the product has a paperback link. */
(function () {
  var me = document.currentScript;
  var id = me && me.getAttribute('data-product');
  function boot() {
    var store = window.RDL_STORE && window.RDL_STORE.products;
    var p = store && store[id];
    if (!p) return;
    var live = !!p.checkout;
    var esc = function (s) { return String(s).replace(/[&<>"]/g, function (c) { return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]; }); };

    var css = document.createElement('style');
    css.textContent = [
      '.rdl-buy-btn{position:fixed;z-index:60;bottom:calc(16px + env(safe-area-inset-bottom,0px));right:max(16px, env(safe-area-inset-right,0px));',
      'display:flex;align-items:center;gap:8px;border:0;cursor:pointer;font:600 14px/1 system-ui,-apple-system,"Segoe UI",Roboto,Arial,sans-serif;',
      'background:#14171C;color:#fff;padding:9px 14px 9px 11px;border-radius:999px;box-shadow:0 0 0 2px rgba(255,255,255,.85),0 6px 18px rgba(0,0,0,.35);transition:transform .15s}',
      '.rdl-buy-btn:hover{transform:translateY(-1px)}',
      '.rdl-buy-btn:focus-visible{outline:3px solid #F2B33D;outline-offset:3px}',
      '.rdl-buy-btn svg{width:18px;height:18px;flex:none}',
      '.rdl-buy-btn .rdl-price{background:#F2B33D;color:#14171C;border-radius:999px;padding:3px 8px;font-weight:800}',
      '.rdl-buy-btn .rdl-short{display:none}',
      '@media (max-width:880px){.rdl-buy-btn{bottom:auto;top:calc(10px + env(safe-area-inset-top,0px));right:max(12px, env(safe-area-inset-right,0px));padding:7px 9px 7px 9px;font-size:13px}.rdl-buy-btn .rdl-long{display:none}.rdl-buy-btn .rdl-short{display:inline}',
      'details > summary{padding-right:118px !important}}',
      '.rdl-scrim{position:fixed;inset:0;z-index:70;background:rgba(10,12,16,.55);display:flex;align-items:flex-end;justify-content:flex-end;',
      'padding:12px max(16px, env(safe-area-inset-right,0px)) calc(70px + env(safe-area-inset-bottom,0px)) max(16px, env(safe-area-inset-left,0px))}',
      '@media (max-width:880px){.rdl-scrim{align-items:flex-start;padding:calc(60px + env(safe-area-inset-top,0px)) max(12px, env(safe-area-inset-right,0px)) 12px max(12px, env(safe-area-inset-left,0px))}}',
      '.rdl-panel{width:min(380px,100%);background:#fff;color:#14171C;border-radius:14px;padding:18px 18px 16px;box-shadow:0 18px 50px rgba(0,0,0,.4);',
      'font:15px/1.5 system-ui,-apple-system,"Segoe UI",Roboto,Arial,sans-serif;max-height:calc(100% - 8px);overflow:auto}',
      '.rdl-panel .rdl-k{font-size:11.5px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:#5A6474;margin:0}',
      '.rdl-panel h2{font:800 22px/1.15 Georgia,"Times New Roman",serif;margin:4px 0 2px;color:#14171C}',
      '.rdl-panel .rdl-g{margin:0 0 10px;color:#5A6474;font-size:14px}',
      '.rdl-panel ul{margin:0 0 14px;padding-left:18px}',
      '.rdl-panel li{margin:3px 0}',
      '.rdl-row{display:flex;gap:10px;align-items:center;flex-wrap:wrap}',
      '.rdl-go{display:inline-block;text-decoration:none;background:#14171C;color:#fff;font-weight:800;padding:11px 16px;border-radius:10px}',
      '.rdl-go[aria-disabled="true"]{background:#C9CED6;color:#3A414C;cursor:not-allowed}',
      '.rdl-note{font-size:12.5px;color:#5A6474}',
      '.rdl-x{position:absolute;top:10px;right:10px;border:0;background:#EEF0F3;color:#14171C;width:32px;height:32px;border-radius:50%;font-size:18px;cursor:pointer;line-height:1}',
      '.rdl-x:focus-visible,.rdl-go:focus-visible{outline:3px solid #F2B33D;outline-offset:2px}',
      '.rdl-panel{position:relative}',
      '.rdl-pb{margin-top:10px}',
      '.rdl-go.rdl-alt{background:#fff;color:#14171C;box-shadow:inset 0 0 0 2px #14171C}'
    ].join('');
    document.head.appendChild(css);

    var book = '<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2z"/><path d="M4 19V5"/><path d="M9 7h6"/></svg>';
    var btn = document.createElement('button');
    btn.className = 'rdl-buy-btn';
    btn.type = 'button';
    btn.setAttribute('aria-haspopup', 'dialog');
    btn.innerHTML = book + '<span class="rdl-long">Full adventure PDF</span><span class="rdl-short">PDF</span>' + (p.price ? '<span class="rdl-price">' + esc(p.price) + '</span>' : '');
    document.body.appendChild(btn);

    var scrim = null;
    function close() { if (scrim) { scrim.remove(); scrim = null; btn.focus(); } }
    function open() {
      if (scrim) return;
      scrim = document.createElement('div');
      scrim.className = 'rdl-scrim';
      scrim.innerHTML =
        '<div class="rdl-panel" role="dialog" aria-modal="true" aria-labelledby="rdl-title">' +
          '<button class="rdl-x" type="button" aria-label="Close">×</button>' +
          '<p class="rdl-k">The complete adventure</p>' +
          '<h2 id="rdl-title">' + esc(p.name) + '</h2>' +
          '<p class="rdl-g">' + (p.paperback ? 'For ' : 'A PDF for ') + esc(p.game) + (p.pages ? ' · ' + p.pages + ' pages' : '') + (p.paperback ? ' · PDF or paperback' : '') + '</p>' +
          '<ul>' +
            '<li>The free demo is Act One. The PDF has all three acts and every ending.</li>' +
            '<li>Ready-to-play characters, new foes, and custom random tables</li>' +
            '<li>A rules reference and printable sheets, so you can keep playing at the table</li>' +
          '</ul>' +
          '<div class="rdl-row">' +
            (live
              ? '<a class="rdl-go" href="' + esc(p.checkout) + '" target="_blank" rel="noopener">Buy the PDF' + (p.price ? ' · ' + esc(p.price) : '') + '</a><span class="rdl-note">Instant download. Secure checkout by Lemon Squeezy.</span>'
              : '<span class="rdl-go" aria-disabled="true">PDF coming soon' + (p.price ? ' · ' + esc(p.price) : '') + '</span><span class="rdl-note">The store opens soon.</span>') +
          '</div>' +
          (p.paperback
            ? '<div class="rdl-row rdl-pb"><a class="rdl-go rdl-alt" href="' + esc(p.paperback) + '" target="_blank" rel="noopener">Paperback on Amazon</a><span class="rdl-note">Printed and shipped by Amazon.</span></div>'
            : '') +
          '<p class="rdl-note" style="margin:12px 0 0">Your demo stays right where you left it.</p>' +
        '</div>';
      document.body.appendChild(scrim);
      scrim.addEventListener('click', function (e) { if (e.target === scrim) close(); });
      scrim.querySelector('.rdl-x').addEventListener('click', close);
      var first = scrim.querySelector('a.rdl-go') || scrim.querySelector('.rdl-x');
      first.focus();
    }
    btn.addEventListener('click', open);
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') close(); });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot); else boot();
})();
