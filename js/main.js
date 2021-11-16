// Ease-in scroll
// 1. Get all js-scroll elements on page
// 2. fade out elements
// 3. detect when element is within the viewport
// 4. assign scrolled class name to the element if it is in view

const scrollOffset = 0;
let throttleTimer = false;

const scrollElement = document.querySelector('.js-scroll');

const elementInView = (el, offset = 0) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop <=
    (window.innerHeight || document.documentElement.clientHeight) - offset
  );
};

const displayScrollElement = () => {
  scrollElement.classList.add('scrolled');
};

const hideScrollElement = () => {
  scrollElement.classList.remove('scrolled');
};

const handleScrollAnimation = () => {
  if (elementInView(scrollElement, scrollOffset)) {
    displayScrollElement();
  } else {
    hideScrollElement();
  }
};

const throttle = (callback, time) => {
  if (throttleTimer) return;
  throttleTimer = true;

  setTimeout(() => {
    callback();
    throttleTimer = false;
  }, time);
};

window.addEventListener('scroll', () => {
  throttle(handleScrollAnimation, 250);
});
