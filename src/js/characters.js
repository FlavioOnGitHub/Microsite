import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", () => {
  // je déclare tout d'abord les variables contenant les cartes des plusieurs personnages
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
  // je déclare une variable contenant le container des cartes de personnages
  const allCards = document.querySelector(".character-section-card-container");
  // je déclare plusieurs éléments de la section "character", button, heading et la section
  const characterHeading = document.querySelector(".character-section-heading");
  const characterButton = document.querySelectorAll(".button-character");
  const characterSection = document.querySelector(".character-section");

  const nav = document.querySelector(".nav");

  // je déclare les ombres cachant les plusieurs personnages afin de les enlever
  // lorsque l'utilisateur à découvert les personnages
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

  // je déclare les variables indiquant le status de claude, ysa etc..., afin que l'animation de pop-up ne puisse être jouée seulement si claude-status = 1
  let claudeStatus = 0;
  let ysaStatus = 0;
  let baronStatus = 0;
  let roiStatus = 0;

  // je déclare les variables indiquant si les personnages ont étés découverts, comme ça le scroll vers le bas et la révélation du personnage ne se joue seulement 1 fois
  let claudeDiscovered = 0;
  let ysaDiscovered = 0;
  let baronDiscovered = 0;
  let roiDiscovered = 0;

  const tlAppear = gsap.timeline();
  const tlDiseappear = gsap.timeline();

  // on obtient la position du "top" de la section "character" pour pouvoir y aller par la suite, et la position top de la section ou sont les personnages sur l'image à table
  const targetPositionStart =
    characterSection.getBoundingClientRect().top + window.scrollY;
  const targetPositionEnd =
    hiddenClaude.getBoundingClientRect().top + window.scrollY;

  // fonction permettant de scroll jusqu'en haut de la section "character" lorsque l'on clique sur une carte
  function lockScroll() {
    document.documentElement.style.overflowY = "hidden";
    window.scrollTo({
      top: targetPositionStart,
      behavior: "smooth",
    });
    nav.classList.add("nav-scroll-locked");
  }

  function unlockScroll() {
    document.documentElement.style.overflowY = "auto";
  }

  // pour chaque carte, on a une fonction contenant une timeline faisant apparaitre les elements du pop-up
  claudeCard.addEventListener("click", function () {
    lockScroll();
    tlAppear
      .to(allCards, {
        opacity: 0.3,
        filter: "blur(20px)",
        duration: 0.2,
        pointerEvents: "none",
      })
      .to(
        characterHeading,
        {
          opacity: 0.3,
          filter: "blur(20px)",
          duration: 0.2,
          pointerEvents: "none",
        },
        "<"
      )
      .to(
        ".character-section-pop-up-claude .character-section-pop-up-heading span:nth-child(1)",
        { x: 0, duration: 1 }
      )
      .to(".character-section-pop-up-claude p", { x: 0, duration: 1 }, "<")
      .to(
        ".character-section-pop-up-claude .character-section-pop-up-image-1",
        {
          x: 0,
          duration: 1,
          opacity: 1,
          delay: 0.5,
        },
        "<"
      )
      .to(
        ".character-section-pop-up-claude .character-section-pop-up-image-2",
        {
          x: 0,
          duration: 0.5,
          opacity: 1,
        }
      )
      .to(
        ".character-section-pop-up-claude .character-section-pop-up-image-3",
        {
          x: 0,
          duration: 0.5,
          opacity: 1,
        }
      )
      .to(
        ".character-section-pop-up-claude .character-section-pop-up-image-4",
        {
          x: 0,
          duration: 0.5,
          opacity: 1,
        }
      )
      .to(".character-section-pop-up-claude a", {
        x: 0,
        opacity: 1,
        duration: 1,
      });
    claudeStatus = 1;
  });

  baronCard.addEventListener("click", function () {
    lockScroll();
    tlAppear
      .to(allCards, {
        opacity: 0.3,
        filter: "blur(20px)",
        duration: 0.2,
        pointerEvents: "none",
      })
      .to(
        characterHeading,
        {
          opacity: 0.3,
          filter: "blur(20px)",
          duration: 0.2,
          pointerEvents: "none",
        },
        "<"
      )
      .to(
        ".character-section-pop-up-baron .character-section-pop-up-heading span:nth-child(1)",
        { x: 0, duration: 1 }
      )
      .to(".character-section-pop-up-baron p", { x: 0, duration: 1 }, "<")
      .to(
        ".character-section-pop-up-baron .character-section-pop-up-image-1",
        {
          x: 0,
          duration: 1,
          opacity: 1,
          delay: 0.5,
        },
        "<"
      )
      .to(".character-section-pop-up-baron .character-section-pop-up-image-2", {
        x: 0,
        duration: 0.5,
        opacity: 1,
      })
      .to(".character-section-pop-up-baron .character-section-pop-up-image-3", {
        x: 0,
        duration: 0.5,
        opacity: 1,
      })
      .to(".character-section-pop-up-baron .character-section-pop-up-image-4", {
        x: 0,
        duration: 0.5,
        opacity: 1,
      })
      .to(".character-section-pop-up-baron a", {
        x: 0,
        opacity: 1,
        duration: 1,
      });
    baronStatus = 1;
  });

  roiCard.addEventListener("click", function () {
    lockScroll();
    tlAppear
      .to(allCards, {
        opacity: 0.3,
        filter: "blur(20px)",
        duration: 0.2,
        pointerEvents: "none",
      })
      .to(
        characterHeading,
        {
          opacity: 0.3,
          filter: "blur(20px)",
          duration: 0.2,
          pointerEvents: "none",
        },
        "<"
      )
      .to(
        ".character-section-pop-up-roi .character-section-pop-up-heading span:nth-child(1)",
        { x: 0, duration: 1 }
      )
      .to(".character-section-pop-up-roi p", { x: 0, duration: 1 }, "<")
      .to(
        ".character-section-pop-up-roi .character-section-pop-up-image-1",
        {
          x: 0,
          duration: 1,
          opacity: 1,
          delay: 0.5,
        },
        "<"
      )
      .to(".character-section-pop-up-roi .character-section-pop-up-image-2", {
        x: 0,
        duration: 0.5,
        opacity: 1,
      })
      .to(".character-section-pop-up-roi .character-section-pop-up-image-3", {
        x: 0,
        duration: 0.5,
        opacity: 1,
      })
      .to(".character-section-pop-up-roi .character-section-pop-up-image-4", {
        x: 0,
        duration: 0.5,
        opacity: 1,
      })
      .to(".character-section-pop-up-roi a", {
        x: 0,
        opacity: 1,
        duration: 1,
      });
    roiStatus = 1;
  });

  ysaCard.addEventListener("click", function () {
    lockScroll();
    tlAppear
      .to(allCards, {
        opacity: 0.3,
        filter: "blur(20px)",
        duration: 0.2,
        pointerEvents: "none",
      })
      .to(
        characterHeading,
        {
          opacity: 0.3,
          filter: "blur(20px)",
          duration: 0.2,
          pointerEvents: "none",
        },
        "<"
      )
      .to(
        ".character-section-pop-up-ysa .character-section-pop-up-heading span:nth-child(1)",
        { x: 0, duration: 1 }
      )
      .to(".character-section-pop-up-ysa p", { x: 0, duration: 1 }, "<")
      .to(
        ".character-section-pop-up-ysa .character-section-pop-up-image-1",
        {
          x: 0,
          duration: 1,
          opacity: 1,
          delay: 0.5,
        },
        "<"
      )
      .to(".character-section-pop-up-ysa .character-section-pop-up-image-2", {
        x: 0,
        duration: 0.5,
        opacity: 1,
      })
      .to(".character-section-pop-up-ysa .character-section-pop-up-image-3", {
        x: 0,
        duration: 0.5,
        opacity: 1,
      })
      .to(".character-section-pop-up-ysa .character-section-pop-up-image-4", {
        x: 0,
        duration: 0.5,
        opacity: 1,
      })
      .to(".character-section-pop-up-ysa a", {
        x: 0,
        opacity: 1,
        duration: 1,
      });
    ysaStatus = 1;
  });

  // fonction pour lorsque l'on ferme le pop-up pour chaque personnage, anime les différents éléments du pop-up le faisant disparaitre
  // cela reset la timeline puis nous amène a la position désirée pour révéler le personnage que l'on vient de découvrir
  characterButton.forEach(function (button) {
    button.addEventListener("click", function (event) {
      event.preventDefault();
      if (claudeStatus === 1) {
        tlDiseappear
          .to(
            ".character-section-pop-up-claude .character-section-pop-up-heading span:nth-child(1)",
            { x: -1500, duration: 0.5 }
          )
          .to(
            ".character-section-pop-up-claude .character-section-pop-up-image-1",
            { x: -1500, duration: 0.3, opacity: 1 },
            "<"
          )
          .to(
            ".character-section-pop-up-claude p",
            { x: 1500, duration: 0.5 },
            "<"
          )
          .to(
            ".character-section-pop-up-claude .character-section-pop-up-image-2",
            { x: -1500, duration: 0.3, opacity: 1 },
            "<"
          )
          .to(
            ".character-section-pop-up-claude .character-section-pop-up-image-3",
            { x: -1500, duration: 0.3, opacity: 1 },
            "<"
          )
          .to(
            ".character-section-pop-up-claude .character-section-pop-up-image-4",
            { x: -1500, duration: 0.3, opacity: 1 },
            "<"
          )

          .to(
            ".character-section-pop-up-claude a",
            {
              x: 1000,
              opacity: 0,
              duration: 0.5,
            },
            "<"
          )

          .to(
            allCards,
            {
              opacity: 1,
              filter: "blur(0)",
              duration: 0.2,
              pointerEvents: "all",
            },
            "+=0"
          )
          .to(
            characterHeading,
            {
              opacity: 1,
              filter: "blur(0)",
              duration: 0.2,
              pointerEvents: "none",
              onComplete: function () {
                tlAppear.clear();
                if (claudeDiscovered === 0) {
                  window.scrollTo({
                    top: targetPositionEnd,
                    behavior: "smooth",
                  });
                  setTimeout(() => {
                    unlockScroll();
                  }, 4000);
                  claudeDiscovered = 1;
                } else {
                  unlockScroll();
                }
                nav.classList.remove("nav-scroll-locked");
              },
            },
            "<"
          );
        hiddenClaude.classList.add("character-section-image-reveal");
        claudeStatus = 0;
      }

      if (ysaStatus === 1) {
        tlDiseappear
          .to(
            ".character-section-pop-up-ysa .character-section-pop-up-heading span:nth-child(1)",
            { x: -1500, duration: 0.5 }
          )
          .to(
            ".character-section-pop-up-ysa .character-section-pop-up-image-1",
            { x: -1500, duration: 0.3, opacity: 1 },
            "<"
          )
          .to(
            ".character-section-pop-up-ysa p",
            { x: 1500, duration: 0.5 },
            "<"
          )
          .to(
            ".character-section-pop-up-ysa .character-section-pop-up-image-2",
            { x: -1500, duration: 0.3, opacity: 1 },
            "<"
          )
          .to(
            ".character-section-pop-up-ysa .character-section-pop-up-image-3",
            { x: -1500, duration: 0.3, opacity: 1 },
            "<"
          )
          .to(
            ".character-section-pop-up-ysa .character-section-pop-up-image-4",
            { x: -1500, duration: 0.3, opacity: 1 },
            "<"
          )

          .to(
            ".character-section-pop-up-ysa a",
            {
              x: 1000,
              opacity: 0,
              duration: 0.5,
            },
            "<"
          )

          .to(
            allCards,
            {
              opacity: 1,
              filter: "blur(0)",
              duration: 0.2,
              pointerEvents: "all",
            },
            "+=0"
          )
          .to(
            characterHeading,
            {
              opacity: 1,
              filter: "blur(0)",
              duration: 0.2,
              pointerEvents: "none",
              onComplete: function () {
                tlAppear.clear();
                if (ysaDiscovered === 0) {
                  window.scrollTo({
                    top: targetPositionEnd,
                    behavior: "smooth",
                  });
                  setTimeout(() => {
                    unlockScroll();
                  }, 4000);
                  ysaDiscovered = 1;
                } else {
                  unlockScroll();
                }
                nav.classList.remove("nav-scroll-locked");
              },
            },
            "<"
          );
        hiddenYsa.classList.add("character-section-image-reveal");
        ysaStatus = 0;
      }

      if (baronStatus === 1) {
        tlDiseappear
          .to(
            ".character-section-pop-up-baron .character-section-pop-up-heading span:nth-child(1)",
            { x: -1500, duration: 0.5 }
          )
          .to(
            ".character-section-pop-up-baron .character-section-pop-up-image-1",
            { x: -1500, duration: 0.3, opacity: 1 },
            "<"
          )
          .to(
            ".character-section-pop-up-baron p",
            { x: 1500, duration: 0.5 },
            "<"
          )
          .to(
            ".character-section-pop-up-baron .character-section-pop-up-image-2",
            { x: -1500, duration: 0.3, opacity: 1 },
            "<"
          )
          .to(
            ".character-section-pop-up-baron .character-section-pop-up-image-3",
            { x: -1500, duration: 0.3, opacity: 1 },
            "<"
          )
          .to(
            ".character-section-pop-up-baron .character-section-pop-up-image-4",
            { x: -1500, duration: 0.3, opacity: 1 },
            "<"
          )

          .to(
            ".character-section-pop-up-baron a",
            {
              x: 1000,
              opacity: 0,
              duration: 0.5,
            },
            "<"
          )

          .to(
            allCards,
            {
              opacity: 1,
              filter: "blur(0)",
              duration: 0.2,
              pointerEvents: "all",
            },
            "+=0"
          )
          .to(
            characterHeading,
            {
              opacity: 1,
              filter: "blur(0)",
              duration: 0.2,
              pointerEvents: "none",
              onComplete: function () {
                tlAppear.clear();
                if (baronDiscovered === 0) {
                  window.scrollTo({
                    top: targetPositionEnd,
                    behavior: "smooth",
                  });
                  setTimeout(() => {
                    unlockScroll();
                  }, 4000);
                  baronDiscovered = 1;
                } else {
                  unlockScroll();
                }
                nav.classList.remove("nav-scroll-locked");
              },
            },
            "<"
          );
        hiddenBaron.classList.add("character-section-image-reveal");
        baronStatus = 0;
      }

      if (roiStatus === 1) {
        tlDiseappear
          .to(
            ".character-section-pop-up-roi .character-section-pop-up-heading span:nth-child(1)",
            { x: -1500, duration: 0.5 }
          )
          .to(
            ".character-section-pop-up-roi .character-section-pop-up-image-1",
            { x: -1500, duration: 0.3, opacity: 1 },
            "<"
          )
          .to(
            ".character-section-pop-up-roi p",
            { x: 1500, duration: 0.5 },
            "<"
          )
          .to(
            ".character-section-pop-up-roi .character-section-pop-up-image-2",
            { x: -1500, duration: 0.3, opacity: 1 },
            "<"
          )
          .to(
            ".character-section-pop-up-roi .character-section-pop-up-image-3",
            { x: -1500, duration: 0.3, opacity: 1 },
            "<"
          )
          .to(
            ".character-section-pop-up-roi .character-section-pop-up-image-4",
            { x: -1500, duration: 0.3, opacity: 1 },
            "<"
          )

          .to(
            ".character-section-pop-up-roi a",
            {
              x: 1000,
              opacity: 0,
              duration: 0.5,
            },
            "<"
          )

          .to(
            allCards,
            {
              opacity: 1,
              filter: "blur(0)",
              duration: 0.2,
              pointerEvents: "all",
            },
            "+=0"
          )
          .to(
            characterHeading,
            {
              opacity: 1,
              filter: "blur(0)",
              duration: 0.2,
              pointerEvents: "none",
              onComplete: function () {
                tlAppear.clear();
                if (roiDiscovered === 0) {
                  window.scrollTo({
                    top: targetPositionEnd,
                    behavior: "smooth",
                  });
                  setTimeout(() => {
                    unlockScroll();
                  }, 4000);
                  roiDiscovered = 1;
                } else {
                  unlockScroll();
                }
                nav.classList.remove("nav-scroll-locked");
              },
            },
            "<"
          );
        hiddenRoi.classList.add("character-section-image-reveal");
        roiStatus = 0;
      }
    });
  });

  // animation des cartes au scroll
  gsap.fromTo(
    claudeCard,
    {
      y: 100,
      opacity: 0,
    },
    {
      duration: 0.5,
      scrollTrigger: {
        trigger: ".character-section",
        start: "top+=300 80%",
        end: "center 30%",
        markers: false,
        onEnter: () => {
          gsap.to(claudeCard, { delay: 0, y: 0, opacity: 1, duration: 0.3 });
        },
        onEnterBack: () => {
          gsap.to(claudeCard, { delay: 0, y: 0, opacity: 1, duration: 0.3 });
        },
        onLeaveBack: () => {
          gsap.to(claudeCard, { delay: 0, y: 100, opacity: 0, duration: 0.3 });
        },
      },
    }
  );

  gsap.fromTo(
    ysaCard,
    {
      y: 100,
      opacity: 0,
    },
    {
      duration: 0.5,
      scrollTrigger: {
        trigger: ".character-section",
        start: "top+=300 80%",
        end: "center 30%",
        markers: false,
        onEnter: () => {
          gsap.to(ysaCard, { delay: 0.2, y: 0, opacity: 1, duration: 0.3 });
        },
        onEnterBack: () => {
          gsap.to(ysaCard, { delay: 0.2, y: 0, opacity: 1, duration: 0.3 });
        },
        onLeaveBack: () => {
          gsap.to(ysaCard, { delay: 0.2, y: 100, opacity: 0, duration: 0.3 });
        },
      },
    }
  );

  gsap.fromTo(
    baronCard,
    {
      y: 100,
      opacity: 0,
    },
    {
      duration: 0.5,
      scrollTrigger: {
        trigger: ".character-section",
        start: "top+=300 80%",
        end: "center 30%",
        markers: false,
        onEnter: () => {
          gsap.to(baronCard, { delay: 0.4, y: 0, opacity: 1, duration: 0.3 });
        },
        onEnterBack: () => {
          gsap.to(baronCard, { delay: 0.4, y: 0, opacity: 1, duration: 0.3 });
        },
        onLeaveBack: () => {
          gsap.to(baronCard, { delay: 0.4, y: 100, opacity: 0, duration: 0.3 });
        },
      },
    }
  );

  gsap.fromTo(
    roiCard,
    {
      y: 100,
      opacity: 0,
    },
    {
      duration: 0.5,
      scrollTrigger: {
        trigger: ".character-section",
        start: "top+=300 80%",
        end: "center 30%",
        markers: false,
        onEnter: () => {
          gsap.to(roiCard, { delay: 0.6, y: 0, opacity: 1, duration: 0.3 });
        },
        onEnterBack: () => {
          gsap.to(roiCard, { delay: 0.6, y: 0, opacity: 1, duration: 0.3 });
        },
        onLeaveBack: () => {
          gsap.to(roiCard, { delay: 0.6, y: 100, opacity: 0, duration: 0.3 });
        },
      },
    }
  );

  gsap.fromTo(
    characterHeading,
    {
      y: 20,
      opacity: 0,
    },
    {
      duration: 0.5,
      scrollTrigger: {
        trigger: ".character-section",
        start: "top 80%",
        end: "center 30%",
        markers: false,
        onEnter: () => {
          gsap.to(characterHeading, {
            delay: 0,
            y: 0,
            opacity: 1,
            duration: 0.3,
          });
        },
        onEnterBack: () => {
          gsap.to(characterHeading, {
            delay: 0,
            y: 0,
            opacity: 1,
            duration: 0.3,
          });
        },
        onLeaveBack: () => {
          gsap.to(characterHeading, {
            delay: 0,
            y: 20,
            opacity: 0,
            duration: 0.3,
          });
        },
      },
    }
  );
});
