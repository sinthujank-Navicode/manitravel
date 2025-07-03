"use client"; // Ensures this component is rendered on the client side

// Importing required libraries and components
import { motion } from "framer-motion"; // Importing motion for animations
import { useTranslations, useLocale } from "next-intl"; // Importing translation and locale hooks from next-intl
import { Bebas_Neue, Montserrat } from 'next/font/google'; // Importing custom fonts (Bebas Neue and Montserrat) from Google Fonts

// Fonts
const bebasNeue = Bebas_Neue({
  weight: ['400'], // Specifies the font weight(s) to be used
  subsets: ['latin'], // Specifies the font subset(s) to load
  display: 'swap', // Ensures text is visible immediately, even while loading
  variable: '--font-bebas-neue', // Custom CSS variable to be used for this font
});

const montserrat = Montserrat({
  weight: ['400', '500', '700'], // Specifies the font weights to be used
  subsets: ['latin'], // Specifies the font subset(s) to load
  display: 'swap', // Ensures text is visible immediately, even while loading
  variable: '--font-montserrat', // Custom CSS variable to be used for this font
});

export default function Section1() {
  const t = useTranslations("hero"); // Get translations for the "hero" namespace
  const locale = useLocale(); // Get the current locale of the user

  const isTamil = locale === "ta"; // Checks if the current locale is Tamil (ta)

  return (
    <section className={`${bebasNeue.variable} ${montserrat.variable} min-h-[calc(100vh-50px)] md:mx-6 mx-3 flex flex-col md:flex-row items-center justify-between p-4 md:p-8 lg:p-12 relative overflow-hidden rounded-2xl`}>
      {/* Section with dynamic styling based on the imported fonts and classes */}
      
      {/* Background Zoom Animation */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full z-[-1] bg-cover bg-center rounded-2xl"
        style={{ backgroundImage: "url('/background01.jpg')" }} // Sets the background image of the section
        animate={{ scale: [1, 1.2, 1] }} // Adds a scaling animation for zoom effect
        transition={{
          duration: 20, // Specifies the duration of the animation (20 seconds)
          repeat: Infinity, // Makes the animation loop indefinitely
          repeatType: "loop", // Ensures the animation loops
          ease: "easeInOut", // Defines the easing function for smooth transition
        }}
      />
      
      {/* Text Section */}
      <div className="flex flex-col justify-center items-start text-start z-[40] bg-white bg-opacity-20 p-6 md:p-12 w-full md:w-[50%] md:min-h-[600px] min-h-[560px] 2xl:min-h-[750px] relative md:rounded-l-3xl">
        {/* Container for the text section with padding, background, and dynamic width for responsiveness */}

        {/* Subtitle */}
        <p className="text-md text-gray-800 font-sans whitespace-pre-line min-h-[120px]">
          {t("subtitle")} {/* Subtitle text from translations */}
        </p>

        <br /> {/* Line break */}

        {/* Heading */}
        <h1
          className={`${isTamil ? "text-4xl md:text-7xl font-black" : "text-5xl md:text-9xl"} font-normal mt-10 tracking-wider whitespace-pre-line`}
          style={{ fontFamily: 'var(--font-bebas-neue)' }} // Applies the Bebas Neue font to the heading
        >
          {t("heading")} {/* Heading text from translations */}
        </h1>
      </div>

      {/* Overlay Image */}
      <div className="absolute top-1/2 left-2/3 transform -translate-x-1/2 -translate-y-1/2 z-[45] hidden md:block">
        {/* Image for overlay with transform for positioning */}

        <motion.img
          src="/flight.jpg" // Image source
          alt="Destination" // Alt text for the image
          className="max-w-[1100px] h-[390px] object-cover"
          animate={{ y: [0, -60, 60, 0] }} // Vertical animation (bouncing up and down)
          transition={{
            duration: 20, // Specifies the duration of the animation (20 seconds)
            repeat: Infinity, // Makes the animation loop indefinitely
            repeatType: "loop", // Ensures the animation loops
            ease: "easeInOut", // Defines the easing function for smooth transition
          }}
        />
      </div>

      {/* Second Box */}
      <div className="hidden md:flex relative p-12 w-1/2 min-h-[400px] md:min-h-[600px] 2xl:min-h-[750px] justify-center border-16 border-white rounded-r-3xl"></div>
      {/* Empty box with border for layout purposes, shown only on medium and larger screens */}
    </section>
  );
}
