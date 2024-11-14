const claudeCard = document.querySelector(
  ".character-section-card:nth-of-type(1)"
);
const baronCard = document.querySelector(
  ".character-section-card:nth-of-type(3)"
);
const roiCard = document.querySelector(
  ".character-section-card:nth-of-type(4)"
);
const ysaCard = document.querySelector(
  ".character-section-card:nth-of-type(2)"
);
const allCards = document.querySelector(".character-section-card-container");
const allPopups = document.querySelectorAll(".character-section-pop-up");
const claudePopup = document.querySelector(".character-section-pop-up-claude");
const baronPopup = document.querySelector(".character-section-pop-up-baron");
const roiPopup = document.querySelector(".character-section-pop-up-roi");
const ysaPopup = document.querySelector(".character-section-pop-up-ysa");
const characterHeading = document.querySelector(".character-section-heading");
const characterButton = document.querySelectorAll(".button-character");

const nav = document.querySelector(".nav");

const hiddenClaude = document.querySelector(
  ".character-section-image img:nth-of-type(2)"
);
const hiddenYsa = document.querySelector(
  ".character-section-image img:nth-of-type(3)"
);
const hiddenBaron = document.querySelector(
  ".character-section-image img:nth-of-type(4)"
);
const hiddenRoi = document.querySelector(
  ".character-section-image img:nth-of-type(5)"
);

let claudeStatus = 0;
let ysaStatus = 0;
let baronStatus = 0;
let roiStatus = 0;

function lockScroll() {
  document.body.classList.add("lock-scroll");
  window.scrollTo({
    top: 1350,
    behavior: "smooth",
  });
  nav.classList.add("nav-scroll-locked");
}

function unlockScroll() {
  document.body.classList.remove("lock-scroll");
}

claudeCard.addEventListener("click", function () {
  lockScroll();
  allCards.classList.add("character-section-blur");
  characterHeading.classList.add("character-section-blur");
  claudePopup.classList.add("character-section-pop-up-visible");
  claudeStatus = 1;
});

baronCard.addEventListener("click", function () {
  lockScroll();
  allCards.classList.add("character-section-blur");
  characterHeading.classList.add("character-section-blur");
  baronPopup.classList.add("character-section-pop-up-visible");
  baronStatus = 1;
});

roiCard.addEventListener("click", function () {
  lockScroll();
  allCards.classList.add("character-section-blur");
  characterHeading.classList.add("character-section-blur");
  roiPopup.classList.add("character-section-pop-up-visible");
  roiStatus = 1;
});

ysaCard.addEventListener("click", function () {
  lockScroll();
  allCards.classList.add("character-section-blur");
  characterHeading.classList.add("character-section-blur");
  ysaPopup.classList.add("character-section-pop-up-visible");
  ysaStatus = 1;
});

characterButton.forEach(function (button) {
  button.addEventListener("click", function (event) {
    event.preventDefault();
    allPopups.forEach(function (popup) {
      popup.classList.remove("character-section-pop-up-visible");
    });
    allCards.classList.remove("character-section-blur");
    characterHeading.classList.remove("character-section-blur");
    window.scrollTo({
      top: 1900,
      behavior: "smooth",
    });

    if (claudeStatus === 1) {
      hiddenClaude.classList.add("character-section-image-reveal");
    }

    if (ysaStatus === 1) {
      hiddenYsa.classList.add("character-section-image-reveal");
    }

    if (baronStatus === 1) {
      hiddenBaron.classList.add("character-section-image-reveal");
    }

    if (roiStatus === 1) {
      hiddenRoi.classList.add("character-section-image-reveal");
    }
    unlockScroll();
    nav.classList.remove("nav-scroll-locked");
  });
});
