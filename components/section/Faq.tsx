"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import FaqItem from "../FaqItem";

// Register plugins
gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function Faq() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const faqItemsRef = useRef<(HTMLDivElement | null)[]>([]);

 const faqs = [
    {
      question: "What types of properties are available at Parkview?",
      answer:
        "We offer a wide range of property types including luxury apartments, family homes, duplexes, and spacious residences, each designed to match different lifestyles and budgets.",
    },
    {
      question: "Can I schedule a property tour?",
      answer:
        "Absolutely! You can schedule an in-person or virtual tour by contacting our support team or using the 'Book a Tour' feature on our website.",
    },
    {
      question: "Is financing available for home purchases?",
      answer:
        "Yes, we partner with trusted financial institutions to offer flexible financing and mortgage options to qualified buyers. We’ll help guide you through the process.",
    },
    {
      question: "Are the properties family-friendly?",
      answer:
        "Yes! Our communities are designed with families in mind, featuring parks, recreational areas, and safe environments.",
    },
    {
      question: "How long does it take to complete a purchase?",
      answer:
        "Typically 2–4 weeks, depending on financing and documentation. We’ll walk with you through every step.",
    },
  ];

  // Add FAQ item to ref array
  const addToFaqItemsRef = (el: HTMLDivElement | null, index: number) => {
    if (el) {
      faqItemsRef.current[index] = el;
    }
  };

  useGSAP(() => {
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

    // FAQ items animation
    faqItemsRef.current.forEach((item, index) => {
      if (!item) return;

      gsap.from(item, {
        x: index % 2 === 0 ? -10 : 10,
        opacity: 0,
        duration: 0.6,
        delay: index * 0.1,
        ease: "back.out(1.2)",
        scrollTrigger: {
          trigger: item,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });

      // Add hover effect to closed items
      const question = item.querySelector(".faq-question");
      if (question) {
        question.addEventListener("mouseenter", () => {
          if (!item.classList.contains("active")) {
            gsap.to(question, {
              x: index % 2 === 0 ? 5 : -5,
              duration: 0.3,
              ease: "power2.out",
            });
          }
        });

        question.addEventListener("mouseleave", () => {
          if (!item.classList.contains("active")) {
            gsap.to(question, {
              x: 0,
              duration: 0.3,
              ease: "power2.out",
            });
          }
        });
      }
    });

  }, { scope: sectionRef });

  return (
    <section 
      ref={sectionRef}
      className="flex flex-col justify-center items-center p-4 pt-20 pb-24 sm:px-6 md:px-12 bg-white"
    >
      <div className="flex flex-col justify-center items-center max-w-5xl w-full">
        <h2 
          ref={headingRef}
          className="font-semibold text-center text-2xl text-secondary lg:text-4xl mb-6"
        >
          Frequently <span className="text-primary">Asked</span> Questions
        </h2>
        <div className="flex flex-col w-full items-center gap-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              ref={(el) => addToFaqItemsRef(el, index)}
              className="w-full"
            >
              <FaqItem {...faq} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}