const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 0) {
    navbar.style.backgroundColor = '#222';
  } else {
    navbar.style.backgroundColor = '#333';
  }
});