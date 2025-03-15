document.querySelectorAll('.carousel').forEach((carousel) => {
    carousel.addEventListener('slid.bs.carousel', (event) => {
      window.scrollTo({ top: window.scrollY, behavior: 'instant' });
    });
  });
  