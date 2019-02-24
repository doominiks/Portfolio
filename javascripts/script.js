const hamburger = document.querySelector('.nav__hamburger');
const menu = document.querySelector('.nav__menu');
const list = document.querySelector('.nav__list');
const exit = document.querySelector('.nav__exit');

hamburger.addEventListener('click', () => {
  menu.style.transform = 'translateX(0)';
  menu.style.outline = '9999px solid rgba(0,0,0,0.5)';
  list.style.transform = 'translateY(0)';
  list.style.opacity = '1';
})

const exitFunc = (item1, item2) => {
  item1.style.transform = 'translateX(100%)';
  item1.style.outline = 'none';
  item2.style.transform = 'translateY(100%)';
  item2.style.opacity = '0';
}

exit.addEventListener('click', exitFunc(menu, list));

window.addEventListener('click', (e) => {
  if (e.target != menu && e.target != hamburger) {
    menu.style.transform = 'translateX(100%)';
    menu.style.outline = 'none';
    list.style.transform = 'translateY(100%)';
    list.style.opacity = '0';
  }
})

//Nav menu links
const navItems = document.querySelector('.nav__list');
const navLink = document.querySelectorAll('.nav__link');


navLink.forEach((el) => {
  el.addEventListener('click', () => {
    navLink.forEach((els) => {
      els.classList.remove('nav__link--active');
    })
    el.classList.add('nav__link--active');
  })
})

//scrolling
let scroll = () => {

  const section = document.querySelectorAll(".sections");
  let sections = {};
  let i = 0;

  Array.prototype.forEach.call(section, (e) => {
    sections[e.id] = e.offsetTop;
  });

  window.addEventListener('scroll', () => {
    let scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
    for (i in sections) {
      if (sections[i] <= scrollPosition) {
        document.querySelector('.nav__link--active').setAttribute('class', 'nav__link ');
        document.querySelector('a[href*=' + i + ']').setAttribute('class', 'nav__link nav__link--active');
      }
    }
  });
};
scroll();



//Smooth scroll
smoothScroll.init();

//Typed.js
document.addEventListener('DOMContentLoaded', () => {
  Typed.new('.intro__paragraph', {
    strings: ["Mam na imię Dominik", "Jestem początkującym front-end developerem"],
    typeSpeed: 100,
    backDelay: 900,
    // loop
    loop: true
  });
});