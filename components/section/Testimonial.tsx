"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import TestimonialCard from "../TestimonialCard";

// Register plugins
gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function Testimonial() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  const testimonials = [
    {
      name: "Achraf Dominic",
      location: "Washington DC, USA",
      text: "Working with this Brand was a game changer, their expertise and personalized approach made buying my first home a breeze. They took time to understand my needs and guide me through every step, making the process feel seamless. I felt confident and well informed and I couldn't have asked for a better experience.",
      image: "/images/testimonial-1.jpg",
    },
    {
      name: "Walker Dalton",
      location: "Toronto, Canada",
      text: "Truly exceptional service. I felt valued, understood, and cared for throughout my entire journey. I'm now living in my dream home — thanks to them!",
      image: "/images/testimonial-2.png",
    },
    {
      name: "Kwame Mensah",
      location: "Accra, Ghana",
      text: "Finding a home where our family could grow together was everything. Parkview gave us more than a house — they gave us a space where memories are made every day. From the beautiful parks to the safe environment, our daughter loves it here as much as we do.",
      image: "/images/testimonial-3.jpg",
    },
  ];

  // Add card to ref array
  const addToCardsRef = (el: HTMLDivElement | null, index: number) => {
    if (el) {
      cardsRef.current[index] = el;
    }
  };

  useGSAP(
    () => {
      // Section title animation
      gsap.from(headingRef.current, {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      // Title span highlight animation
      const titleSpan = headingRef.current?.querySelector("span");
      if (titleSpan) {
        gsap.from(titleSpan, {
          scale: 0.8,
          opacity: 0,
          duration: 0.6,
          delay: 0.3,
          ease: "elastic.out(1, 0.5)",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        });
      }

      // Testimonial cards animation
      cardsRef.current.forEach((card, index) => {
        if (!card) return;

        // gsap.to(card, {
        //   scale: 1.02,
        //   repeat: -1,
        //   yoyo: true,
        //   duration: 3 + index, // Vary duration slightly
        //   ease: "sine.inOut",
        // });

        gsap.from(card, {
          y: 60,
          opacity: 0,
          duration: 0.8,
          delay: index * 0.15,
          ease: "back.out(1.2)",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none none",
          },
          
        });

        // Hover effect
        card.addEventListener("mouseenter", () => {
          gsap.to(card, {
            y: -10,
            duration: 0.3,
            ease: "power2.out",
          });
        });

        card.addEventListener("mouseleave", () => {
          gsap.to(card, {
            y: 0,
            duration: 0.3,
            ease: "power2.out",
          });
        });
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="flex flex-col justify-center items-center p-4 pt-20 pb-24 sm:px-6 md:px-12 bg-secondary"
    >
      <div className="flex flex-col justify-center items-center max-w-5xl w-full">
        <h2
          ref={headingRef}
          className="font-semibold text-center text-2xl text-white lg:text-4xl mb-6"
        >
          What Our <span className="text-primary">Clients</span> Are Saying.
        </h2>

        <div className="grid gap-6 w-full max-w-5xl md:grid-cols-2 md:gap-3 lg:grid-cols-3">
          {testimonials.map((testimonial, i) => (
            <div
              key={i}
              ref={(el) => addToCardsRef(el, i)}
              className="testimonial-card h-full"
            >
              <TestimonialCard {...testimonial} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
