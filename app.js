// Executa quando o DOM estiver pronto
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

    // Acessibilidade: marca o elemento gerado (img/canvas) com rótulo
    setTimeout(() => {
      const el = qrEl.querySelector('img, canvas');
      if (el) {
        el.setAttribute('role', 'img');
        el.setAttribute('aria-label', 'Código QR para o site oficial da Laerte Invest');
        el.setAttribute('title', 'QR Code — Laerte Invest');
      }
    }, 0);

    // (Opcional) Clique copia o link
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
});
