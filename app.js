// ==== Laerte Invest - App base ====
// Tudo inicializa quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', () => {
  // 1) Ícones Lucide
  try {
    if (window.lucide && typeof window.lucide.createIcons === 'function') {
      window.lucide.createIcons();
    }
  } catch (e) {
    console.warn('Lucide não inicializado:', e);
  }

  // 2) QR Code
  const qrEl = document.getElementById('qrcode');
  if (qrEl && window.QRCode) {
    const url = 'https://laerte07.github.io/Projects-Laerte/';
    /* eslint-disable no-undef */
    const qr = new QRCode(qrEl, {
      text: url,
      width: 160,
      height: 160,
      colorDark: '#000000',
      colorLight: '#ffffff',
      correctLevel: QRCode.CorrectLevel.H
    });

    // Acessibilidade: rotula o elemento gerado (img/canvas)
    setTimeout(() => {
      const el = qrEl.querySelector('img, canvas');
      if (el) {
        el.setAttribute('role', 'img');
        el.setAttribute('aria-label', 'Código QR para o site oficial da Laerte Invest');
        el.setAttribute('title', 'QR Code — Laerte Invest');
      }
    }, 0);

    // Clique copia o link
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

  // 3) Tema (light → dark → dark-luxury)
  const KEY = 'li-theme';
  const html = document.documentElement;
  const toggle = document.getElementById('themeToggle');

  function systemPref() {
    return matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
  function labelFor(mode) {
    if (mode === 'light') return 'Tema claro (clique para escuro)';
    if (mode === 'dark') return 'Tema escuro (clique para luxury)';
    return 'Tema dark-luxury (clique para claro)';
  }
  function setTheme(mode) {
    html.setAttribute('data-theme', mode);
    localStorage.setItem(KEY, mode);
    if (toggle) {
      const label = labelFor(mode);
      toggle.setAttribute('aria-label', label);
      toggle.setAttribute('title', label);
    }
  }
  function next(mode) {
    if (mode === 'light') return 'dark';
    if (mode === 'dark') return 'dark-luxury';
    return 'light';
  }

  // Inicialização
  const saved = localStorage.getItem(KEY);
  setTheme(saved || systemPref());

  // Toggle
  if (toggle) {
    toggle.addEventListener('click', () => {
      const current = html.getAttribute('data-theme') || 'light';
      setTheme(next(current));
    });
  }
});
