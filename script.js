document.addEventListener('DOMContentLoaded', () => {
  console.log('🌌 Solar System Explorer Loaded');
  const logo = document.querySelector('.logo');
  if (logo) {
    logo.addEventListener('click', () => {
      logo.style.color = '#f39041';
      setTimeout(() => (logo.style.color = 'white'), 800);
    });
  }
});
