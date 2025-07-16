// components/PrimaryButton.tsx
"use client";

interface PrimaryButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
}

export default function PrimaryButton({
  children,
  onClick,
  className = "",
  type = "button",
}: PrimaryButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-6 py-3 rounded-[1.9375rem] bg-primary text-white hover:bg-primary/80 transition duration-300 font-medium cursor-pointer ${className}`}
    >
      {children}
    </button>
  );
}
