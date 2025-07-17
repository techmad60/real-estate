"use client";

import Image from "next/image";
import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import PrimaryButton from "../ui/Button";

gsap.registerPlugin(ScrollTrigger);

export default function YourHome() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const textRef = useRef<HTMLDivElement | null>(null);
  const imageRef = useRef<HTMLDivElement | null>(null);
  const headingRef = useRef<HTMLHeadingElement | null>(null);
  const desktopButtonRef = useRef<HTMLDivElement | null>(null);
  const mobileButtonRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    if (
      !sectionRef.current ||
      !textRef.current ||
      !imageRef.current ||
      !headingRef.current ||
      !mobileButtonRef.current ||
      !desktopButtonRef.current
    )
      return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });

    // Animate each span line in the heading (comma-separated lines)
    const headingLines = headingRef.current.querySelectorAll("span");

    tl.from(headingLines, {
      opacity: 0,
      y: 20,
      duration: 0.5,
      ease: "power2.out",
      stagger: 0.3,
    })
      .from(
        textRef.current.querySelector("p"),
        {
          opacity: 0,
          y: 20,
          duration: 0.8,
          ease: "power2.out",
        },
        "-=0.6"
      )
      .from(
        imageRef.current,
        {
          opacity: 0,
          scale: 0.85,
          duration: 1,
          ease: "power2.out",
        },
        "-=0.4"
      )
      .from(
        mobileButtonRef.current,
        {
          opacity: 0,
          scale: 0.85,
          duration: 1,
          ease: "power2.out",
        },
        "-=0.6"
      )
      .from(
        desktopButtonRef.current,
        {
          opacity: 0,
          scale: 0.85,
          duration: 1,
          ease: "power2.out",
        },
        "-=0.6"
      );
  }, []);

  return (
    <section
      className="flex flex-col justify-center items-center p-4 my-6 sm:px-6 md:px-12"
      id="home"
    >
      <div
        className="flex flex-col justify-center items-center max-w-5xl md:grid grid-cols-2 gap-10 place-items-center lg:justify-start lg:min-h-screen"
        ref={sectionRef}
      >
        <div ref={textRef} className="text-center text-white md:text-start">
          <h2
            className="font-semibold text-2xl lg:text-4xl text-white"
            ref={headingRef}
          >
            <span>
              Your <span className="text-primary">Home,</span>
            </span>{" "}
            <span>Your Legacy,</span> <span>Designed Forever.</span>
          </h2>

          <p className="py-4 text-white/80 leading-relaxed">
            More than just a residence, Haven is a reflection of your
            individuality — thoughtfully designed just for you, and crafted to
            inspire generations to come.
          </p>
          <div ref={mobileButtonRef}>
            <PrimaryButton className="hidden md:flex">
              Discover More
            </PrimaryButton>
          </div>
        </div>

        <div className="relative" ref={imageRef}>
          <Image
            src="/images/bg-main-1.svg"
            alt="Modern house"
            width={700}
            height={500}
            className="w-full max-w-md md:max-w-lg lg:max-w-xl"
          />
          <Image
            src="/images/main-1.png"
            alt="Modern house"
            width={600}
            height={400}
            className="w-full max-w-md md:max-w-lg lg:max-w-xl absolute inset-0 -top-16"
          />
        </div>
        <div ref={desktopButtonRef}>
          <PrimaryButton className="md:hidden">Discover More</PrimaryButton>
        </div>
      </div>
    </section>
  );
}
