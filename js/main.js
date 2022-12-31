const wrapper = document.querySelector('.wrapper');
const card = document.querySelector('.card');
const title = document.querySelector('.card__title');
const didMoroz = document.querySelector('.card__did-moroz-img');
const christmasTree = document.querySelector('.card__christmass-tree-img');

console.log(didMoroz);
console.log(christmasTree);

wrapper.addEventListener('mousemove', rotate => {
  let x = (innerWidth / 2 - rotate.pageX) / 20;
  let y = (innerHeight / 2 - rotate.pageY) / 20;

  card.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
});

wrapper.addEventListener('mouseover', () => {
  title.style.transform = `translate3d(0, 0, 100px)`;
  didMoroz.style.transform = `translate3d(0, 0, 200px)`;
  christmasTree.style.transform = `translate3d(0, 0, 60px)`;
  card.style.transition = `all 0.1s ease`;
});

wrapper.addEventListener('mouseout', () => {
  card.style.transform = `rotateY(0deg) rotateX(0deg)`;
  card.style.transition = `all 0.5s ease`;
  title.style.transform = `translate3d(0, 0, 0)`;
  didMoroz.style.transform = `translate3d(0, 0, 0)`;
  christmasTree.style.transform = `translate3d(0, 0, 0)`;
});
