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

// Fade in elements as they scroll into view
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Magnetic round buttons
document.querySelectorAll('.circle-btn').forEach(btn => {
  btn.addEventListener('mousemove', e => {
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    btn.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
  });
  btn.addEventListener('mouseleave', () => {
    btn.style.transform = '';
  });
});