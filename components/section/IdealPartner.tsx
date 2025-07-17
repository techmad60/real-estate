"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

// Register plugins
gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function IdealPartner() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

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
    gsap.from(contentRef.current, {
      y: 60,
      opacity: 0,
      duration: 1,
      ease: "back.out(1.2)",
      scrollTrigger: {
        trigger: contentRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });

    // Text elements stagger animation
    const textElements = gsap.utils.toArray(contentRef.current?.querySelectorAll("h3, p") || []);
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

    // Button animation
    gsap.from(buttonRef.current, {
      scale: 0.8,
      opacity: 0,
      duration: 0.6,
      delay: 0.4,
      ease: "elastic.out(1, 0.5)",
      scrollTrigger: {
        trigger: contentRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });

    // Continuous subtle pulse for the button
    gsap.to(buttonRef.current, {
      y: -3,
      repeat: -1,
      yoyo: true,
      duration: 2,
      ease: "sine.inOut",
    });

  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="flex flex-col justify-center items-center">
      <div className="relative min-h-screen bg-[url('/images/bg-ideal.png')] bg-cover bg-no-repeat bg-center flex flex-col justify-center items-center w-full md:min-h-auto lg:min-h-screen">
        <div className="gradient-overlay absolute inset-0 bg-gradient-to-b from-[rgba(17,17,17,0.2)] to-[rgba(32,32,32,0.7)] z-0" />
        <div 
          ref={contentRef}
          className="bg-[rgba(255,255,255,0.8)] font-montsy flex flex-col justify-center items-center text-center rounded-4xl p-4 py-8 m-4 my-12 sm:mx-6 md:mx-12 max-w-xl z-40"
        >
          <h3 className="font-semibold text-2xl md:text-3xl">
            What makes us your ideal real estate partner
          </h3>
          <p className="py-4">
            Our knowledgeable team provides trusted expertise for informed real
            estate decisions, offering tailored support to meet your unique needs
            and demonstrating proven success through our track record.
          </p>
          <button
            ref={buttonRef}
            className={`px-6 py-3 rounded-full border transition shrink-0 cursor-pointer mt-3 bg-secondary text-white hover:bg-secondary-dark hover:scale-105`}
          >
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
}
// const testimonials = [
//     {
//       name: "Achraf Dominic",
//       location: "Washington DC, USA",
//       text: "Working with this Brand was a game changer, their expertise and personalized approach made buying my first home a breeze. They took time to understand my needs and guide me through every step, making the process feel seamless. I felt confident and well informed and I couldn't have asked for a better experience.",
//       image: "/images/testimonial-1.jpg",
//     },
//     {
//       name: "Walker Dalton",
//       location: "Toronto, Canada",
//       text: "Truly exceptional service. I felt valued, understood, and cared for throughout my entire journey. I'm now living in my dream home — thanks to them!",
//       image: "/images/testimonial-2.png",
//     },
//     {
//       name: "Kwame Mensah",
//       location: "Accra, Ghana",
//       text: "Finding a home where our family could grow together was everything. Parkview gave us more than a house — they gave us a space where memories are made every day. From the beautiful parks to the safe environment, our daughter loves it here as much as we do.",
//       image: "/images/testimonial-3.jpg",
//     },
//   ];
