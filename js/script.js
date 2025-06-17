document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById('themeToggle');
  const root = document.documentElement;
  // Set default theme if not set
  if (!root.hasAttribute('data-theme')) {
    root.setAttribute('data-theme', 'light');
  }
  // Toggle dark/light mode
  toggleBtn.addEventListener('click', () => {
    const currentTheme = root.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    root.setAttribute('data-theme', newTheme);
    toggleBtn.textContent = newTheme === 'dark' ? '☀️ Light Mode' : '🌙 Dark Mode';
  });
});
