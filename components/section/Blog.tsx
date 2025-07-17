"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import BlogCard from "../BlogCard";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

export default function Blog() {
  const blog = [
    {
      image: "/images/grid-img-4.jpg",
      time: 2,
      title:
        "Legal Essentials: Understanding documentation in Real Estate Transactions",
    },
    {
      image: "/images/grid-img-5.jpg",
      time: 3,
      title:
        "The Importance Of Property Valuation: Getting the best price for your home",
    },
    {
      image: "/images/grid-img-6.jpg",
      time: 6,
      title: "Designing Tranquility: The Allure of Sunnyvale Retreat Living",
    },
  ];

  const blogRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const cards = blogRef.current?.querySelectorAll(".blog-card");

    if (!cards) return;

    gsap.fromTo(
      cards,
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: blogRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, { scope: blogRef });

  return (
    <section className="flex flex-col justify-center items-center p-4 pt-20 pb-24 sm:px-6 md:px-12 bg-black">
      <div className="flex flex-col justify-center items-center max-w-5xl w-full">
        <h2 className="font-semibold text-center text-2xl text-white lg:text-4xl mb-6">
          Latest <span className="text-primary">Blogs</span> and Articles.
        </h2>

        <div
          ref={blogRef}
          className="mt-4 flex overflow-x-auto scroll-hidden gap-6 snap-x snap-mandatory scroll-smooth w-full px-2"
        >
          {blog.map((p, i) => (
            <div key={i} className="snap-start blog-card flex-shrink-0">
              <BlogCard {...p} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
