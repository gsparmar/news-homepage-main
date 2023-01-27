const nav = document.getElementById('nav');
const hamburger = document.getElementById('hamburger');

hamburger.addEventListener('click', () => {
  console.log(`clicked`);
  nav.classList.toggle('opened');
});
