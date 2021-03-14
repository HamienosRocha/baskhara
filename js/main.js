const terms = document.querySelectorAll('.terms');

terms.forEach(el =>
  el.addEventListener('click', () => {
    quadraticEquation();
  })
);

terms.forEach(el =>
  el.addEventListener('keydown', () => {
    quadraticEquation();
  })
);
