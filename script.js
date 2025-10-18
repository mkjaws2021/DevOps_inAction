// Tab switching
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      document.querySelectorAll('nav a').forEach(a => a.classList.remove('active'));
      link.classList.add('active');
  
      document.querySelectorAll('.tab-content').forEach(tab => tab.classList.remove('active'));
      const target = document.querySelector(link.getAttribute('href'));
      if (target) target.classList.add('active');
    });
  });
  
  // Theme toggle
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
  