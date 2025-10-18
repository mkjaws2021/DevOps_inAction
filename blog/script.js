const toggleBtn = document.getElementById('theme-toggle');
toggleBtn.addEventListener('click', () => {
  const currentTheme = document.body.getAttribute('data-theme');
  if (currentTheme === 'dark') {
    document.body.removeAttribute('data-theme');
    toggleBtn.textContent = '🌙';
  } else {
    document.body.setAttribute('data-theme', 'dark');
    toggleBtn.textContent = '☀️';
  }
});
