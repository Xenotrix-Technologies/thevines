import React from "react";

interface WhatsAppIconProps {
  className?: string;
  size?: number | string;
  color?: string;
  /**
   * "official": Green (#25D366) speech bubble with white phone handset
   * "monochrome": Single-color fill with transparent handset cutout
   */
  variant?: "official" | "monochrome";
}

/**
 * Official Authentic WhatsApp Logo SVG
 * Matches the official Meta / WhatsApp Brand Assets.
 */
export default function WhatsAppIcon({
  className = "w-5 h-5",
  size,
  color,
  variant,
}: WhatsAppIconProps) {
  // If a specific monochrome color is passed and variant is not explicitly official, use monochrome
  const isMonochrome = variant === "monochrome" || (color && color !== "#25D366" && variant !== "official");

  if (isMonochrome) {
    return (
      <svg
        viewBox="0 0 24 24"
        width={size}
        height={size}
        fill={color || "currentColor"}
        xmlns="http://www.w3.org/2000/svg"
        className={`inline-block shrink-0 ${className}`}
        aria-hidden="true"
      >
        {/* WhatsApp speech bubble with phone handset cutout using evenodd fill rule */}
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm-3.51 5.33c.15.01.36-.06.56.43.21.51.7 1.75.77 1.87.06.13.11.28.02.45-.09.17-.13.28-.26.43-.13.15-.28.33-.39.44-.13.13-.26.27-.11.53.15.26.66 1.11 1.43 1.79.98.88 1.81 1.15 2.07 1.28.26.12.4.1.55-.07.15-.17.62-.71.79-.97.17-.25.33-.21.56-.12.23.08 1.43.68 1.69.8.25.12.42.19.48.29.06.11.06.6-.15 1.18-.21.58-1.2 1.11-1.67 1.18-.43.06-.97.09-1.56-.1-.36-.12-.82-.27-1.41-.53-2.48-1.07-4.11-3.57-4.23-3.74-.12-.16-1.01-1.34-1.01-2.56 0-1.22.65-1.82.87-2.07.23-.25.5-.31.66-.31h.48z"
        />
      </svg>
    );
  }

  // Official WhatsApp Brand Colors: #25D366 speech bubble with crisp white phone handset
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      className={`inline-block shrink-0 ${className}`}
      aria-hidden="true"
    >
      {/* Official WhatsApp Green Speech Bubble */}
      <path
        fill="#25D366"
        d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2z"
      />
      {/* Crisp White Phone Handset */}
      <path
        fill="#FFFFFF"
        d="M8.53 7.33c-.16 0-.43.06-.66.31-.22.25-.87.85-.87 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.53.59.19 1.13.16 1.56.1.47-.07 1.46-.6 1.67-1.18.21-.58.21-1.07.15-1.18-.06-.1-.23-.17-.48-.29-.26-.12-1.46-.72-1.69-.8-.23-.09-.39-.13-.56.12-.17.26-.64.8-.79.97-.15.17-.29.19-.55.07-.26-.13-1.09-.4-2.07-1.28-.77-.68-1.28-1.53-1.43-1.79-.15-.26-.02-.4.11-.53.11-.11.26-.29.39-.44.13-.15.17-.26.26-.43.09-.17.04-.32-.02-.45-.07-.12-.56-1.36-.77-1.87-.2-.49-.41-.42-.56-.43h-.48z"
      />
    </svg>
  );
}
