import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

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

const tlAppear = gsap.timeline();
const tlDiseappear = gsap.timeline();

function lockScroll() {
  window.scrollTo({
    top: 1350,
    behavior: "smooth",
  });
  document.documentElement.style.overflowY = "hidden";
  nav.classList.add("nav-scroll-locked");
}

function unlockScroll() {
  document.documentElement.style.overflowY = "auto";
}

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
    .to(".character-section-pop-up-claude .character-section-pop-up-image-2", {
      x: 0,
      duration: 0.5,
      opacity: 1,
    })
    .to(".character-section-pop-up-claude .character-section-pop-up-image-3", {
      x: 0,
      duration: 0.5,
      opacity: 1,
    })
    .to(".character-section-pop-up-claude .character-section-pop-up-image-4", {
      x: 0,
      duration: 0.5,
      opacity: 1,
    })
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
              window.scrollTo({
                top: 1900,
                behavior: "smooth",
              });
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
        .to(".character-section-pop-up-ysa p", { x: 1500, duration: 0.5 }, "<")
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
              window.scrollTo({
                top: 1900,
                behavior: "smooth",
              });
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
              window.scrollTo({
                top: 1900,
                behavior: "smooth",
              });
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
        .to(".character-section-pop-up-roi p", { x: 1500, duration: 0.5 }, "<")
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
              window.scrollTo({
                top: 1900,
                behavior: "smooth",
              });
              nav.classList.remove("nav-scroll-locked");
            },
          },
          "<"
        );
      hiddenRoi.classList.add("character-section-image-reveal");
      roiStatus = 0;
    }
    setTimeout(() => {
      unlockScroll();
    }, 4000);
  });
});

gsap.fromTo(
  claudeCard,
  {
    y: 100,
    opacity: 0,
  },
  {
    y: 0,
    opacity: 1,
    duration: 0.5,
    scrollTrigger: {
      trigger: ".character-section",
      start: "top+=300 80%",
      end: "center 30%",
      markers: true,
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
    y: 0,
    opacity: 1,
    duration: 0.5,
    scrollTrigger: {
      trigger: ".character-section",
      start: "top+=300 80%",
      end: "center 30%",
      markers: true,
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
    y: 0,
    opacity: 1,
    duration: 0.5,
    scrollTrigger: {
      trigger: ".character-section",
      start: "top+=300 80%",
      end: "center 30%",
      markers: true,
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
    y: 0,
    opacity: 1,
    duration: 0.5,
    scrollTrigger: {
      trigger: ".character-section",
      start: "top+=300 80%",
      end: "center 30%",
      markers: true,
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
    y: 0,
    opacity: 1,
    duration: 0.5,
    scrollTrigger: {
      trigger: ".character-section",
      start: "top 80%",
      end: "center 30%",
      markers: true,
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
