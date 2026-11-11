import React from "react";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  className?: string;
  light?: boolean;
}

export default function SectionHeading({
  badge,
  title,
  subtitle,
  align = "center",
  className = "",
  light = false,
}: SectionHeadingProps) {
  const alignmentClass =
    align === "center"
      ? "text-center items-center mx-auto"
      : align === "right"
      ? "text-right items-end ml-auto"
      : "text-left items-start";

  return (
    <div className={`flex flex-col max-w-3xl mb-12 sm:mb-16 ${alignmentClass} ${className}`}>
      {badge && (
        <span
          className={`text-[11px] font-semibold uppercase tracking-[0.25em] mb-2.5 block ${
            light ? "text-neutral-400" : "text-neutral-500"
          }`}
        >
          {badge}
        </span>
      )}
      <h2
        className={`text-2xl sm:text-3xl md:text-4xl font-serif font-normal tracking-tight ${
          light ? "text-white" : "text-neutral-950"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-3.5 text-sm sm:text-base leading-relaxed ${
            light ? "text-neutral-300" : "text-neutral-600"
          }`}
        >
          {subtitle}
        </p>
      )}
      <div
        className={`w-12 h-[1px] mt-6 ${
          light ? "bg-neutral-700" : "bg-neutral-300"
        } ${align === "center" ? "mx-auto" : ""}`}
      />
    </div>
  );
}

