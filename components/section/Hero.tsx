"use client";

import { useRef } from "react";
import { PiArrowCircleDownThin } from "react-icons/pi";
import PrimaryButton from "../ui/Button";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

export default function HeroSection() {
  const homeRef = useRef(null);
  const isWhereTheRef = useRef(null);
  const heartRef = useRef(null);
  const isRef = useRef(null);
  const para1Ref = useRef(null);
  const para2Ref = useRef(null);
  const buttonRef = useRef(null);
  const circleRef = useRef(null);
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline();

      tl.from(homeRef.current, {
        opacity: 0,
        y: 40,
        duration: 1,
        ease: "power3.out",
      })
        .from(
          isWhereTheRef.current,
          {
            opacity: 0,
            x: 30,
            duration: 0.8,
            ease: "steps(7)",
          },
          "+=0.2"
        )
        .from(
          heartRef.current,
          {
            opacity: 0,
            y: 30,
            duration: 0.8,
            ease: "back.out(1.7)",
          },
          "-=0.3"
        )
        .from(
          isRef.current,
          {
            opacity: 0,
            x: 10,
            duration: 0.5,
            ease: "power1.out",
          },
          "-=0.4"
        )
        .from(
          para1Ref.current,
          {
            opacity: 0,
            y: -30,
            duration: 0.8,
            ease: "power2.out",
          },
          "+=0.3"
        )
        .from(
          para2Ref.current,
          {
            opacity: 0,
            y: 30,
            duration: 0.8,
            ease: "power2.out",
          },
          "-=0.4"
        )
        .from(
          buttonRef.current,
          {
            opacity: 0,
            y: -30,
            duration: 0.6,
            ease: "back.out(1.5)",
          },
          "-=0.2"
        )
        .from(
          circleRef.current,
          {
            opacity: 0,
            y: 30,
            duration: 0.6,
            ease: "back.out(1.5)",
          },
          "+=0.1"
        );
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="p-4 flex flex-col items-center space-y-6 mt-28 sm:px-6 md:px-12 lg:px-16 lg:mt-40"
    >
      {/* Headline */}
      <h1 className="font-semibold text-white text-3xl text-center sm:text-4xl md:text-5xl lg:text-6xl leading-tight lg:font-bold">
        <span ref={homeRef} className="inline-block mr-2">
          HOME
        </span>
        <span ref={isWhereTheRef} className="inline-block mr-2">
          IS WHERE THE
        </span>
        <span
          ref={heartRef}
          className="text-primary font-bold inline-block mr-2"
        >
          HEART
        </span>
        <span ref={isRef} className="inline-block">
          IS.
        </span>
      </h1>

      {/* Paragraphs */}
      <p
        ref={para1Ref}
        className="font-light text-center text-white/95 lg:w-[50rem]"
      >
        Expert guidance, personalized services, and endless possibilities to
        find your perfect home — tailored to your unique dreams and needs.
      </p>

      <p ref={para2Ref} className="font-light text-center text-white/95">
        Nature-inspired spaces for modern living and ultimate comfort.
      </p>

      {/* Button */}
      <div ref={buttonRef}>
        <PrimaryButton>Explore Properties</PrimaryButton>
      </div>

      <div ref={circleRef}>
        {/* Arrow */}
        <a href="#home">
          <PiArrowCircleDownThin className="text-5xl text-white animate-bounce cursor-pointer mt-8" />
        </a>
      </div>
    </section>
  );
}
