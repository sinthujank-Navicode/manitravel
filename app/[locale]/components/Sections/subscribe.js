'use client'; // Enables client-side rendering in Next.js

import { useTranslations } from "next-intl"; // Import translation hook from next-intl

export default function Newsletter() { // Define and export the Newsletter component
  const t = useTranslations("newsletter"); // Use the translation hook for the "newsletter" namespace

  return (
    <section className="bg-[#E6EDF3] py-10 px-1 md:px-6 rounded-2xl text-center">
      {/* Outer section with background color, padding, rounded corners, and centered text */}
      
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
        {/* Heading with responsive text size, bold font, gray color, and margin bottom */}
        {t("heading")} {/* Render translated heading text */}
      </h2>
      
      <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
        {/* Description paragraph with gray text, margin, max width, and centered */}
        {t("description")} {/* Render translated description text */}
      </p>
      
      <form className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-md mx-auto">
        {/* Form container with flex layout, responsive direction, centered, spaced items, and max width */}
        
        <input
          type="email" // Email input type
          placeholder={t("placeholder")} // Translated placeholder text
          className="w-full sm:flex-1 px-1 py-2 rounded-md bg-[#014782] border-black placeholder-white-200 text-white text-center border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          // Input styling: full width, responsive flex, padding, rounded corners, dark blue background, white placeholder & text, border, and focus ring
        />
        
        <button
          type="submit" // Submit button type
              className="mt-2 px-6 py-2 text-black border border-black rounded-full hover:bg-[#014782] hover:text-white transition font-semibold text-sm self-start"
          // Button styling: padding, dark blue background, white text, rounded corners, hover color, smooth transition
        >
          {t("button")} {/* Render translated button text */}
        </button>
      </form>
    </section>
  );
}
