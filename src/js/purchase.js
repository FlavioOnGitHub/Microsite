import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", () => {
  const spans = document.querySelectorAll(".purchase-section-heading span");
  const book = document.querySelector(".purchase-section-content-mockup");
  const logo = document.querySelector(".purchase-section-content-logo");
  const text1 = document.querySelector(
    ".purchase-section-content p:nth-of-type(1)"
  );
  const text2 = document.querySelector(
    ".purchase-section-content p:nth-of-type(2)"
  );
  const button = document.querySelector(".purchase-section-content a");
  const logoDargaud = document.querySelector(".footer a");
  const footerLinks = document.querySelector(".footer div");

  spans.forEach((span) => {
    // Randomize the starting y position and duration for each span
    const randomY = Math.random() * 400 + 100; // Start y between 100 and 500
    const randomDuration = Math.random() * 0.5 + 0.5; // Duration between 0.5s and 1s

    // Animate each span individually
    gsap.fromTo(
      span,
      {
        y: randomY, // Start position (random vertical offset)
        opacity: 0, // Start with opacity 0 (hidden)
      },
      {
        y: 0, // End position (back to its normal position)
        opacity: 1, // End with full opacity
        duration: randomDuration, // Each span has a unique duration
        ease: "power1.inOut", // Ease effect for smooth motion
        scrollTrigger: {
          trigger: ".purchase-section-heading", // ScrollTrigger on the parent container
          start: "top+=100 60%", // Start animation when the section reaches 60% of the viewport
          end: "top+=300 40%", // End animation after scrolling further down
          toggleActions: "play none none reverse",
          markers: true, // Show markers for debugging
        },
      }
    );

    gsap.fromTo(
      book,
      {
        x: -1000,
      },
      {
        x: 0, // End position (back to its normal position)
        opacity: 1, // End with full opacity
        duration: 1, // Each span has a unique duration
        ease: "power1.inOut", // Ease effect for smooth motion
        scrollTrigger: {
          trigger: book, // ScrollTrigger on the parent container
          start: "top+=100 60%", // Start animation when the section reaches 60% of the viewport
          end: "top+=100 40%", // End animation after scrolling further down
          toggleActions: "play none none reverse",
          markers: true, // Show markers for debugging
        },
      }
    );

    gsap.fromTo(
      logo,
      {
        y: -100,
        opacity: 0,
      },
      {
        opacity: 1,
        y: 0, // End position (back to its normal position)
        opacity: 1, // End with full opacity
        duration: 1, // Each span has a unique duration
        ease: "power1.inOut", // Ease effect for smooth motion
        scrollTrigger: {
          trigger: book, // ScrollTrigger on the parent container
          start: "top+=100 60%", // Start animation when the section reaches 60% of the viewport
          end: "top+=100 40%", // End animation after scrolling further down
          toggleActions: "play none none reverse",
          markers: true, // Show markers for debugging
        },
      }
    );

    gsap.fromTo(
      text1,
      {
        x: 300,
        opacity: 0,
      },
      {
        opacity: 1,
        x: 0, // End position (back to its normal position)
        opacity: 1, // End with full opacity
        duration: 1, // Each span has a unique duration
        ease: "power1.inOut", // Ease effect for smooth motion
        scrollTrigger: {
          trigger: book, // ScrollTrigger on the parent container
          start: "top+=200 60%", // Start animation when the section reaches 60% of the viewport
          end: "top+=300 40%", // End animation after scrolling further down
          toggleActions: "play none none reverse",
          markers: true, // Show markers for debugging
        },
      }
    );

    gsap.fromTo(
      text2,
      {
        x: -200,
        opacity: 0,
      },
      {
        opacity: 1,
        x: 0, // End position (back to its normal position)
        opacity: 1, // End with full opacity
        duration: 1, // Each span has a unique duration
        ease: "power1.inOut", // Ease effect for smooth motion
        scrollTrigger: {
          trigger: book, // ScrollTrigger on the parent container
          start: "top+=300 60%", // Start animation when the section reaches 60% of the viewport
          end: "top+=400 40%", // End animation after scrolling further down
          toggleActions: "play none none reverse",
          markers: true, // Show markers for debugging
        },
      }
    );

    gsap.fromTo(
      button,
      {
        y: 50,
        opacity: 0,
      },
      {
        opacity: 1,
        y: 0, // End position (back to its normal position)
        opacity: 1, // End with full opacity
        duration: 1, // Each span has a unique duration
        ease: "power1.inOut", // Ease effect for smooth motion
        scrollTrigger: {
          trigger: button, // ScrollTrigger on the parent container
          start: "top-=300 60%", // Start animation when the section reaches 60% of the viewport
          end: "top-=300 40%", // End animation after scrolling further down
          toggleActions: "play none none reverse",
          markers: true, // Show markers for debugging
        },
      }
    );
  });

  gsap.fromTo(
    logoDargaud,
    {
      opacity: 0, // Start with opacity 0 (hidden)
    },
    {
      opacity: 1, // End with full opacity
      duration: 1, // Each span has a unique duration
      ease: "power1.inOut", // Ease effect for smooth motion
      scrollTrigger: {
        trigger: footerLinks, // ScrollTrigger on the parent container
        start: "top-=50 95%", // Start animation when the section reaches 60% of the viewport
        end: "top 40%", // End animation after scrolling further down
        toggleActions: "play none none reverse",
        markers: true, // Show markers for debugging
      },
    }
  );

  gsap.fromTo(
    footerLinks,
    {
      opacity: 0, // Start with opacity 0 (hidden)
    },
    {
      opacity: 1, // End with full opacity
      duration: 1, // Each span has a unique duration
      ease: "power1.inOut", // Ease effect for smooth motion
      scrollTrigger: {
        trigger: footerLinks, // ScrollTrigger on the parent container
        start: "top 95%", // Start animation when the section reaches 60% of the viewport
        end: "top 40%", // End animation after scrolling further down
        toggleActions: "play none none reverse",
        markers: true, // Show markers for debugging
      },
    }
  );
});
