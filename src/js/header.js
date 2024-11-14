import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const container = document.querySelector(".header");

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: container,
    markers: false,
    start: "top top",
    end: "bottom 20%",
    scrub: 1,
  },
});

tl.to(".header img:nth-of-type(1)", {
  y: 50,
});
tl.to(
  ".header img:nth-of-type(2)",
  {
    y: 50,
  },
  "<"
);
tl.to(
  ".header img:nth-of-type(3)",
  {
    x: -50,
    y: 200,
    scale: 1.2,
  },
  "<"
);
tl.to(
  ".header img:nth-of-type(4)",
  {
    y: 100,
    x: 100,
  },
  "<"
);
tl.to(
  ".header img:nth-of-type(5)",
  {
    y: -20,
  },
  "<"
);
tl.to(
  ".header img:nth-of-type(6)",
  {
    y: 150,
    x: 20,
  },
  "<"
);
tl.to(
  ".header img:nth-of-type(7)",
  {
    y: 100,
    x: -50,
  },
  "<"
);
