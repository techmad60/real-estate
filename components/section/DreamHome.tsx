"use client";

import Image from "next/image";
import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import PrimaryButton from "../ui/Button";

export default function DreamHome() {
  const sectionRef = useRef(null);
  const statRefs = useRef<HTMLParagraphElement[]>([]);
  const headingRef = useRef<HTMLHeadingElement | null>(null);
  const imageRef = useRef<HTMLImageElement | null>(null);
  const imageDesktopRef = useRef<HTMLImageElement | null>(null);
  const gridRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
      },
    });

    // Count animations (already working)
    const numbers = [
      { end: 100, suffix: "%" },
      { end: 800, suffix: "k" },
      { end: 3 },
      { end: 5, suffix: "+" },
      { end: 80, suffix: "+" },
      { end: 100, suffix: "%" },
    ];

    statRefs.current.forEach((el, i) => {
      const countObj = { val: 0 };

      tl.to(
        countObj,
        {
          val: numbers[i].end,
          duration: 1,
          ease: "power1.out",
          onUpdate: () => {
            if (el) {
              el.textContent =
                Math.floor(countObj.val).toLocaleString() +
                (numbers[i].suffix || "");
            }
          },
        },
        i * 0.3
      );
    });

    // Animate heading
    if (headingRef.current) {
      gsap.from(headingRef.current, {
        opacity: 0,
        y: 40,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 90%",
        },
      });
    }

    // Animate image
    if (imageRef.current) {
      gsap.from(imageRef.current, {
        opacity: 0,
        x: -50,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 90%",
        },
      });
    }
    // Animate imageDesktop
    if (imageDesktopRef.current) {
      gsap.from(imageDesktopRef.current, {
        opacity: 0,
        x: -50,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: imageDesktopRef.current,
          start: "top 90%",
        },
      });
    }

    // Animate grid
    if (gridRef.current) {
      gsap.from(gridRef.current, {
        opacity: 0,
        scale: 0.95,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: gridRef.current,
          start: "top 90%",
        },
      });
    }

    // Animate button
    if (buttonRef.current) {
      gsap.from(buttonRef.current, {
        opacity: 0,
        y: 30,
        duration: 1,
        delay: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: buttonRef.current,
          start: "top 95%",
        },
      });
    }
  }, []);

  return (
    <section
      ref={sectionRef}
      className="flex flex-col justify-center items-center p-4 pt-10 pb-0 sm:px-6 md:px-12 bg-white w-full"
    >
      <div className="flex flex-col justify-center items-center max-w-5xl md:grid grid-cols-2 gap-10 place-items-center lg:justify-start lg:min-h-screen">
        <div className="flex flex-col justify-center items-center text-secondary md:justify-start md:items-start">
          <h2
            ref={headingRef}
            className="font-semibold text-center text-2xl md:text-start lg:text-4xl"
          >
            Let&apos;s Bring you closer to your Dream{" "}
            <span className="text-primary">Home</span>.
          </h2>
          <Image
            src="/images/main-2.jpg"
            alt="Modern house"
            width={600}
            height={400}
            className="w-full rounded-4xl my-8 md:-order-1 md:hidden max-w-md md:max-w-lg lg:max-w-xl"
             ref={imageRef}
          />

          <div className="grid grid-cols-3 grid-rows-2 mt-6 text-center border-2 rounded-4xl" ref={gridRef}>
            {[
              "Unmatched commitment to excellence in every aspect of Parkview living.",
              "Square meters of lush landscaped spaces for residents to enjoy.",
              "Distinctive architectural styles tailored to your unique taste.",
              "Amusement parks for family fun and lifelong memories.",
              "Luxurious building options available at Parkview.",
              "Dedication to creating a lifestyle that reflects your aspirations.",
            ].map((desc, i) => (
              <div
                key={i}
                className={`p-2 ${i < 3 ? "border-b-2" : ""} ${
                  i % 3 !== 2 ? "border-r-2" : ""
                } border-secondary`}
              >
                <p
                  className="font-semibold text-4xl font-montsy"
                  ref={(el) => {
                    if (el) statRefs.current[i] = el;
                  }}
                >
                  0
                </p>

                <p className="text-[0.623625rem]">{desc}</p>
              </div>
            ))}
          </div>
          <div ref={buttonRef}>
            <PrimaryButton className="mt-8">Schedule a visit</PrimaryButton>
          </div>
        </div>

        <Image
          src="/images/main-2.jpg"
          alt="Modern house"
          width={600}
          height={400}
          className="w-full rounded-4xl hidden md:flex md:-order-1 max-w-md md:max-w-lg lg:max-w-xl"
          ref={imageDesktopRef}
        />
      </div>
    </section>
  );
}
