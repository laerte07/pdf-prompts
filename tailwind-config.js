// A configuração do Tailwind precisa estar disponível ANTES do CDN.
window.tailwind = window.tailwind || {};
window.tailwind.config = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter','ui-sans-serif','system-ui','Segoe UI','Roboto','Helvetica Neue','Arial'],
        display: ['Poppins','Inter','ui-sans-serif','system-ui']
      },
      colors: {
        laerte: {
          blue1: '#00AEEF',
          blue2: '#0275D8',
          dark1: '#0A0E12',
          dark2: '#1C1F26',
          emerald: '#2ECC71',
          orange: '#F5B041',
          purple1: '#3A0CA3',
          purple2: '#7209B7',
          neon:   '#4361EE'
        }
      },
      boxShadow: {
        soft: '0 10px 30px rgba(2, 117, 216, 0.2)'
      }
    }
  }
};
