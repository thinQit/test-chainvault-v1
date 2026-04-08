"use client";
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function TextRevealCard({
  text,
  revealText,
  children,
  className,
}: {
  text: string;
  revealText: string;
  children?: React.ReactNode;
  className?: string;
}) {
  const [widthPercentage, setWidthPercentage] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null);
  const [left, setLeft] = useState(0);
  const [isMouseOver, setIsMouseOver] = useState(false);

  function handleMouse(e: React.MouseEvent<HTMLDivElement>) {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const pct = (x / rect.width) * 100;
    setWidthPercentage(pct);
    setLeft(x);
  }

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouse}
      onMouseEnter={function () {
        setIsMouseOver(true);
      }}
      onMouseLeave={function () {
        setIsMouseOver(false);
        setWidthPercentage(0);
      }}
      className={cn(
        "relative w-full max-w-[40rem] overflow-hidden rounded-lg border border-white/[0.08] bg-[#1d1c20] p-6 sm:p-8",
        className
      )}
    >
      {children}
      <div className="relative flex h-40 items-center overflow-hidden">
        <motion.div
          style={{ width: isMouseOver ? left + "px" : "0px" }}
          animate={isMouseOver ? { opacity: 1 } : { opacity: 0 }}
          className="absolute z-20 h-full will-change-transform overflow-hidden bg-[#1d1c20]"
        >
          <p
            className="py-10 text-base font-bold text-white text-transparent bg-gradient-to-b from-white to-neutral-300 bg-clip-text sm:text-[3rem]"
            style={{ whiteSpace: "nowrap" }}
          >
            {revealText}
          </p>
        </motion.div>
        <p
          className="py-10 text-base font-bold text-white/30 sm:text-[3rem]"
          style={{ whiteSpace: "nowrap" }}
        >
          {text}
        </p>
      </div>
    </div>
  );
}
