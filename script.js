const menuBtn = document.querySelector('.menu-btn');
const menuPanel = document.querySelector('.menu-panel');
const hero = document.querySelector('.hero');

// Show the button once you've scrolled past most of the hero
window.addEventListener('scroll', () => {
  const pastHero = window.scrollY > hero.offsetHeight * 0.8;
  menuBtn.classList.toggle('visible', pastHero || menuBtn.classList.contains('open'));
});

// Open and close the menu
menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('open');
  menuPanel.classList.toggle('open');
});

// Close the menu after tapping a link
menuPanel.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    menuBtn.classList.remove('open');
    menuPanel.classList.remove('open');
  });
});