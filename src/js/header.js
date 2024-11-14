import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const container = document.querySelector(".header");

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: container,
    markers: true,
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
    y: 300,
  },
  "<"
);
tl.to(
  ".header img:nth-of-type(4)",
  {
    y: 300,
  },
  "<"
);
tl.to(
  ".header img:nth-of-type(5)",
  {
    y: 100,
  },
  "<"
);
tl.to(
  ".header img:nth-of-type(6)",
  {
    y: 300,
  },
  "<"
);
tl.to(
  ".header img:nth-of-type(7)",
  {
    y: 300,
  },
  "<"
);
