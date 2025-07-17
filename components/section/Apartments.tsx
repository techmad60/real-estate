"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import PropertyCard from "../PropertyCard";

// Register plugins
gsap.registerPlugin(ScrollTrigger, useGSAP);

type Property = {
  image: string;
  address: string;
  title: string;
  beds: number;
  baths: number;
  sqft: number;
  price: string;
};

export default function Apartments() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const viewMoreRef = useRef<HTMLButtonElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const buttonsRef = useRef<(HTMLButtonElement | null)[]>([]);

  const properties: Property[] = [
    {
      image: "/images/grid-img-1.jpg",
      address: "2, Sunnyvale Rd",
      title: "Sunnyvale Retreat",
      beds: 4,
      baths: 3,
      sqft: 2500,
      price: "$399,000",
    },
    {
      image: "/images/grid-img-2.jpg",
      address: "29, Surulere Rd",
      title: "Sky Dive Villa",
      beds: 4,
      baths: 6,
      sqft: 2000,
      price: "$439,000",
    },
    {
      image: "/images/grid-img-3.jpg",
      address: "15, Strata Ave",
      title: "Sunnyvale Retreat",
      beds: 2,
      baths: 2,
      sqft: 1500,
      price: "$298,000",
    },
  ];

  const propertiesTwo: Property[] = [
    {
      image: "/images/grid-img-4.jpg",
      address: "2, Sunnyvale Rd",
      title: "Sunnyvale Retreat",
      beds: 4,
      baths: 3,
      sqft: 2500,
      price: "$399,000",
    },
    {
      image: "/images/grid-img-5.jpg",
      address: "29, Surulere Rd",
      title: "Sky Dive Villa",
      beds: 4,
      baths: 6,
      sqft: 2000,
      price: "$439,000",
    },
    {
      image: "/images/grid-img-6.jpg",
      address: "15, Strata Ave",
      title: "Sunnyvale Retreat",
      beds: 2,
      baths: 2,
      sqft: 1500,
      price: "$298,000",
    },
  ];

  // Add card to ref array with proper typing
  const addToCardsRef = (el: HTMLDivElement | null, index: number) => {
    if (el) {
      cardsRef.current[index] = el;
    }
  };

  // Add button to ref array with proper typing
  const addToButtonsRef = (el: HTMLButtonElement | null, index: number) => {
    if (el) {
      buttonsRef.current[index] = el;
    }
  };

  useGSAP(
    () => {
      // Section title animation
      if (titleRef.current) {
        gsap.from(titleRef.current.querySelectorAll("span"), {
          y: 50,
          opacity: 0,
          duration: 1,
          stagger: 0.1,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        });
      }

      // Category buttons animation
      buttonsRef.current.forEach((button, i) => {
        if (!button) return;

        gsap.from(button, {
          x: i % 2 === 0 ? -20 : 20,
          opacity: 0,
          duration: 0.5,
          delay: i * 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        });

        // Hover effects
        button.addEventListener("mouseenter", () => {
          gsap.to(button, {
            scale: 1.05,
            duration: 0.3,
            ease: "power2.out",
          });
        });

        button.addEventListener("mouseleave", () => {
          gsap.to(button, {
            scale: 1,
            duration: 0.3,
            ease: "power2.out",
          });
        });
      });

      // Property cards animation
      gsap.from(cardsRef.current.filter(Boolean), {
        opacity: 0,
        y: 50,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: cardsRef.current[0],
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      // View more button animation
      if (viewMoreRef.current) {
        gsap.from(viewMoreRef.current, {
          opacity: 0,
          y: 20,
          duration: 0.5,
          delay: 0.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: viewMoreRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        });

        // Continuous pulse animation for view more button
        gsap.to(viewMoreRef.current, {
          scale: 1.05,
          repeat: -1,
          yoyo: true,
          duration: 1.5,
          ease: "power1.inOut",
        });
      }
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="flex flex-col justify-center items-center p-4 pt-20 pb-24 sm:px-6 md:px-12 bg-white overflow-hidden"
    >
      <div className="flex flex-col justify-center items-center max-w-5xl lg:min-h-screen w-full">
        <h2
          ref={titleRef}
          className="font-semibold text-center text-2xl lg:text-4xl mb-8"
        >
          Explore Our Highly Rated{" "}
          <span className="text-primary">Apartments</span> &{" "}
          <span className="text-primary">Buildings</span>.
        </h2>

        <div className="flex overflow-x-scroll scroll-hidden mt-2 w-full gap-4 py-4 px-2 sm:px-4 md:justify-center">
          {["Featured", "Residential", "Apartments", "College", "Duplex"].map(
            (label, i) => (
              <button
                key={label}
                ref={(el) => addToButtonsRef(el, i)}
                className={`category-button px-4 py-2 rounded-full border transition shrink-0 cursor-pointer ${
                  label === "Featured"
                    ? "bg-secondary text-white border-secondary"
                    : "border-secondary text-secondary hover:bg-secondary hover:text-white"
                }`}
              >
                {label}
              </button>
            )
          )}
        </div>

        <div className="mt-4 flex overflow-x-auto scroll-hidden gap-6 snap-x snap-mandatory scroll-smooth w-full px-2 property-row">
          {properties.map((p, i) => (
            <div
              key={`${p.address}-${i}`}
              ref={(el) => addToCardsRef(el, i)}
              className="snap-start"
            >
              <PropertyCard {...p} />
            </div>
          ))}
        </div>

        <div className="mt-12 flex overflow-x-auto scroll-hidden gap-6 snap-x snap-mandatory scroll-smooth w-full px-2 property-row">
          {propertiesTwo.map((p, i) => (
            <div
              key={`${p.address}-${i}-second`}
              ref={(el) => addToCardsRef(el, i + properties.length)}
              className="snap-start"
            >
              <PropertyCard {...p} />
            </div>
          ))}
        </div>

        <button
          ref={viewMoreRef}
          className={`view-more-button px-6 py-3 rounded-full border-2 border-secondary text-secondary font-medium transition shrink-0 cursor-pointer mt-12 hover:bg-secondary hover:text-white`}
        >
          View More Properties
        </button>
      </div>
    </section>
  );
}
