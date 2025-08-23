// Theme toggle with persistence
const root = document.documentElement;
const themeBtn = document.getElementById('themeBtn');
const stored = localStorage.getItem('theme');
if (stored) root.setAttribute('data-theme', stored);

themeBtn?.addEventListener('click', () => {
  const cur = root.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
  root.setAttribute('data-theme', cur);
  localStorage.setItem('theme', cur);
});

// Mobile menu toggle
const menuBtn = document.getElementById('menuBtn');
menuBtn?.addEventListener('click', () => {
  const links = document.querySelector('.nav-links');
  if (!links) return;
  const isOpen = links.style.display === 'flex';
  links.style.display = isOpen ? 'none' : 'flex';
  links.style.flexDirection = 'column';
  links.style.background = getComputedStyle(document.body).getPropertyValue('--panel');
  links.style.position = 'absolute';
  links.style.top = '60px';
  links.style.right = '16px';
  links.style.padding = '0.5rem';
  links.style.border = '1px solid ' + getComputedStyle(document.body).getPropertyValue('--border');
  links.style.borderRadius = '0.75rem';
});

// Footer helpers
document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('lastUpdated').textContent = new Date().toLocaleDateString();
