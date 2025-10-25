// =====================
// Inicialização geral
// =====================
document.addEventListener('DOMContentLoaded', () => {
  // Lucide icons
  try {
    if (window.lucide && typeof window.lucide.createIcons === 'function') {
      window.lucide.createIcons();
    }
  } catch (e) {
    console.warn('Lucide não inicializado:', e);
  }

  // QR Code
  const qrEl = document.getElementById('qrcode');
  if (qrEl && window.QRCode) {
    const url = "https://laerte07.github.io/Projects-Laerte/";
    /* eslint-disable no-undef */
    const qr = new QRCode(qrEl, {
      text: url,
      width: 160,
      height: 160,
      colorDark : "#000000",
      colorLight : "#ffffff",
      correctLevel : QRCode.CorrectLevel.H
    });
    setTimeout(() => {
      const el = qrEl.querySelector('img, canvas');
      if (el) {
        el.setAttribute('role', 'img');
        el.setAttribute('aria-label', 'Código QR para o site oficial da Laerte Invest');
        el.setAttribute('title', 'QR Code — Laerte Invest');
      }
    }, 0);
    qrEl.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(url);
        qrEl.title = 'Link copiado!';
        setTimeout(() => (qrEl.title = 'Clique para copiar o link'), 1200);
      } catch {}
    });
    qrEl.setAttribute('title', 'Clique para copiar o link');
    qrEl.style.cursor = 'pointer';
  }

  // ====== THEME CYCLER (light -> dark -> dark-luxury) ======
(function () {
  const KEY = 'li-theme';
  const html = document.documentElement;

  function systemPref() {
    return matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
  function setTheme(mode) {
    html.setAttribute('data-theme', mode);
    localStorage.setItem(KEY, mode);
    const btn = document.getElementById('themeToggle');
    if (btn) {
      const label =
        mode === 'light' ? 'Tema claro (clique para escuro)' :
        mode === 'dark' ? 'Tema escuro (clique para luxury)' :
        'Tema dark-luxury (clique para claro)';
      btn.setAttribute('aria-label', label);
      btn.setAttribute('title', label);
    }
  }
  function next(mode) {
    if (mode === 'light') return 'dark';
    if (mode === 'dark') return 'dark-luxury';
    return 'light';
  }

  // inicializa
  const saved = localStorage.getItem(KEY);
  setTheme(saved || systemPref());

  // evento de clique
  const toggle = document.getElementById('themeToggle');
  if (toggle) {
    toggle.addEventListener('click', () => {
      const current = html.getAttribute('data-theme') || 'light';
      setTheme(next(current));
    });
  }
})();
