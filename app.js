// Executa quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', () => {
  // Ativa ícones Lucide
  if (window.lucide && typeof window.lucide.createIcons === 'function') {
    window.lucide.createIcons();
  }

  // Gera QR Code (se o elemento existir)
  const qrEl = document.getElementById('qrcode');
  if (qrEl && window.QRCode) {
    new QRCode(qrEl, {
      text: "https://laerte07.github.io/Projects-Laerte/",
      width: 160,
      height: 160,
      colorDark : "#000000",
      colorLight : "#ffffff",
      correctLevel : QRCode.CorrectLevel.H
    });
  }
});
