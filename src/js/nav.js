const nav = document.querySelector(".nav");

//créé une variable avec la dernière position de scroll
let lastScrollPosition = 0;

// lorsqu'on scroll, la var currentScrollPosition est égal à notre valeur de scroll Y dans la fenetre
window.addEventListener("scroll", () => {
  let currentScrollPosition = window.scrollY;

  // Si currentScrollPosition est plus grand que lastScrollPosition, on  met la classe "scrolling-down" a header qui le cache dans le overflow. Sinon, on lui enleve la classe et il réapparait
  if (
    currentScrollPosition > lastScrollPosition &&
    currentScrollPosition > 100
  ) {
    nav.classList.add("nav-scrolling-down");
  } else {
    nav.classList.remove("nav-scrolling-down");
  }
  // On assigne la valeur de currentScrollPosition a lastScrollPosition
  lastScrollPosition = currentScrollPosition;
});
