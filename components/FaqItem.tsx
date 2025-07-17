"use client";
import { useState } from "react";
import { IoChevronDown } from "react-icons/io5";

interface FaqItemProps {
  question: string;
  answer: string;
}

export default function FaqItem({ question, answer }: FaqItemProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b py-4 w-full max-w-3xl mx-auto">
      <button
        onClick={() => setOpen(!open)}
        className="flex justify-between items-center w-full text-left"
      >
        <span className="font-semibold text-secondary">{question}</span>
        <IoChevronDown
          className={`text-xl transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      {open && (
        <p className="mt-2 text-sm text-gray-700 transition-all duration-300">
          {answer}
        </p>
      )}
    </div>
  );
}
