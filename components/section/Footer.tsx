"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { PiArrowCircleUpThin } from "react-icons/pi";

// Register plugins
gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function Footer() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const arrowRef = useRef<HTMLAnchorElement>(null);

  useGSAP(() => {
    // Background gradient animation
    gsap.from(".gradient-overlay", {
      opacity: 0,
      duration: 1.5,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top bottom",
        toggleActions: "play none none none",
      },
    });

    // Content box animation
    if (contentRef.current) {
      gsap.from(contentRef.current, {
        y: 80,
        opacity: 0,
        duration: 1.2,
        ease: "back.out(1.2)",
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      // Text elements stagger animation with proper null check
      const textElements = contentRef.current.querySelectorAll("h3, p");
      if (textElements.length > 0) {
        gsap.from(textElements, {
          y: 30,
          opacity: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: contentRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        });
      }
    }

    // Arrow animation with null check
    if (arrowRef.current) {
      gsap.from(arrowRef.current, {
        scale: 0.5,
        opacity: 0,
        duration: 0.8,
        delay: 0.5,
        ease: "elastic.out(1, 0.5)",
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      // Continuous floating animation for arrow
      gsap.to(arrowRef.current, {
        y: -10,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // Pulse effect on hover
      arrowRef.current.addEventListener("mouseenter", () => {
        gsap.to(arrowRef.current, {
          scale: 1.2,
          duration: 0.3,
          ease: "power2.out",
        });
      });

      arrowRef.current.addEventListener("mouseleave", () => {
        gsap.to(arrowRef.current, {
          scale: 1,
          duration: 0.3,
          ease: "power2.out",
        });
      });
    }

  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="flex flex-col justify-center items-center text-white">
      <div className="relative min-h-screen bg-[url('/images/bg-footer.jpg')] bg-cover bg-no-repeat bg-center flex flex-col justify-center items-center w-full md:min-h-auto lg:min-h-screen">
        <div className="gradient-overlay absolute inset-0 bg-gradient-to-b from-[rgba(17,17,17,0.2)] to-[rgba(32,32,32,0.7)] z-0" />
        
        <div 
          ref={contentRef}
          className="font-montsy flex flex-col justify-center items-center text-center rounded-4xl p-6 py-8 m-4 my-12 sm:mx-6 md:mx-12 max-w-xl z-40"
        >
          <h3 className="font-semibold text-2xl md:text-3xl text-white">
            Your Perfect Home In Your Hand.
          </h3>
          
          <p className="py-4 text-white">
            Contact us today let get you that perfect home in instance. The
            luxury that comes with your very own space is top to none.
          </p>

          <a 
            ref={arrowRef}
            href="#top" 
            className="mt-8 inline-block"
            aria-label="Scroll to top"
          >
            <PiArrowCircleUpThin className="text-5xl hover:text-primary transition-colors text-white" />
          </a>
        </div>
      </div>
    </section>
  );
}