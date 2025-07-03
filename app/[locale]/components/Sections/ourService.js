"use client"; // Enables client-side rendering for this component

import { useTranslations } from "next-intl"; // Imports hook to handle translations from next-intl

export default function Services() {
  const t = useTranslations("services"); // Initializes translations for the "services" namespace

  // Array of service objects with localized titles and descriptions
  const services = [
    {
      title: t("service1_title"), // Translated title for service 1
      description: t("service1_description"), // Translated description for service 1
    },
    {
      title: t("service2_title"), // Translated title for service 2
      description: t("service2_description"), // Translated description for service 2
    },
    {
      title: t("service3_title"), // Translated title for service 3
      description: t("service3_description"), // Translated description for service 3
    },
    {
      title: t("service4_title"), // Translated title for service 4
      description: t("service4_description"), // Translated description for service 4
    },
    {
      title: t("service5_title"), // Translated title for service 5
      description: t("service5_description"), // Translated description for service 5
    },
    {
      title: t("service6_title"), // Translated title for service 6
      description: t("service6_description"), // Translated description for service 6
    },
    {
      title: t("service7_title"), // Translated title for service 7
      description: t("service7_description"), // Translated description for service 7
    },
    {
      title: t("service8_title"), // Translated title for service 8
      description: t("service8_description"), // Translated description for service 8
    },
  ];

  const heading = t("heading"); // Gets the translated heading text
  const buttonText = t("button"); // Gets the translated button text

  return (
    // Section container with padding and background color
    <section className="bg-white md:px-5 px-1 md:py-12 py-4 relative" id="service">
      {/* Section heading */}
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
        {heading} {/* Displays translated heading */}
      </h2>

      {/* Main container with relative positioning */}
      <div className="relative">
        {/* Left Fade Effect */}
        <div className="absolute left-0 top-0 h-full w-2 bg-gradient-to-r from-white to-transparent z-20 pointer-events-none" />

        {/* Right Fade Effect */}
        <div className="absolute right-0 top-0 h-full w-2 bg-gradient-to-l from-white to-transparent z-20 pointer-events-none" />

        {/* Scrollable horizontal container */}
        <div className="overflow-x-auto no-scrollbar relative z-10">
          <div className="inline-flex gap-4 px-1">
            {/* Loop through each service */}
            {services.map((service, index) => (
              // Card container for each service
              <div
              key={index}
              className="bg-[#E6EDF3] w-[250px] rounded-3xl flex-shrink-0 flex flex-col justify-between transition-transform duration-200"
            >
              <div className="bg-[#6E95BE] p-6 text-white flex flex-col items-center justify-center min-h-[160px] rounded-t-3xl">
                <div className="text-4xl mb-4">🌐</div>
                <h3 className="font-semibold text-center">{service.title}</h3>
              </div>
            
              <div className="p-4 text-sm text-gray-700 min-h-[120px] flex-grow">
                {service.description}
              </div>
            
              <div className="p-4 flex justify-center items-center">
                <button className="w-full border border-black rounded-full py-1 hover:bg-[#014782] hover:text-white transition-all duration-200">
                  {buttonText}
                </button>
              </div>
            </div>
            
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
