"use client"; // Enables client-side rendering for this component in Next.js

// Importing the translation hook from next-intl for internationalization
import { useTranslations } from "next-intl";

// Importing required icons from react-icons
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { BsFillTelephoneFill } from 'react-icons/bs';

// Export the ContactSection component as default
export default function ContactSection() {
  // Load the "contact" namespace translations
  const t = useTranslations("contact");

  return (
    // Outer section with padding on Y (top & bottom), padding on X (left & right), white background, and hidden overflow
    <section className="py-5 px-1 md:px-6 bg-white overflow-hidden" id="contact">

      {/* Section title with large bold text and centered alignment */}
      <h2 className="text-3xl font-bold text-center mb-10">{t("title")}</h2>

      {/* Main content wrapper with blue background, rounded corners, padding, and responsive grid layout */}
      <div className="bg-[#E6EDF3] rounded-2xl p-4 md:p-10 lg:p-20 w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 lg:gap-16">

        {/* Left side content starts here */}
        <div className="flex flex-col gap-6">
          
          {/* Grid layout for contact information cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-8 gap-x-10">
            
            {/* Address info with map icon */}
            <div className="flex items-start gap-4">
              <FaMapMarkerAlt className="text-3xl text-black shrink-0" />
              <div>
                <p className="text-[15px] font-medium leading-tight">{t("address")}</p>
                <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="text-[#3a5fb4] text-[14px] font-semibold hover:underline">
                  {t("openMap")}
                </a>
              </div>
            </div>

            {/* Mobile phone info with phone icon */}
            <div className="flex items-start gap-4">
              <FaPhoneAlt className="text-3xl text-black shrink-0" />
              <div>
                <p className="text-[15px] font-medium leading-tight">+94 774 725 978</p>
                <a href="tel:+94774725978" className="text-[#3a5fb4] text-[14px] font-semibold hover:underline">
                  {t("mobile")}
                </a>
              </div>
            </div>

            {/* Email info with envelope icon */}
            <div className="flex items-start gap-4">
              <FaEnvelope className="text-3xl text-black shrink-0" />
              <div>
                <p className="text-[15px] font-medium leading-tight">commani187@gmail.com</p>
                <a href="mailto:commani187@gmail.com" className="text-[#3a5fb4] text-[14px] font-semibold hover:underline">
                  {t("sendMail")}
                </a>
              </div>
            </div>

            {/* Landline phone info with telephone icon */}
            <div className="flex items-start gap-4">
              <BsFillTelephoneFill className="text-3xl text-black shrink-0" />
              <div>
                <p className="text-[15px] font-medium leading-tight">011 239 144 6</p>
                <a href="tel:0112391446" className="text-[#3a5fb4] text-[14px] font-semibold hover:underline">
                  {t("mobile")}
                </a>
              </div>
            </div>

          </div>
          
          {/* Embedded Google Map with rounded corners and top margin */}
          <div className="overflow-hidden rounded-lg mt-6">
            <iframe
              src="https://maps.google.com/maps?q=Colombo%2011&t=&z=13&ie=UTF8&iwloc=&output=embed" // Google Maps location
              width="120%" // Slightly wider map display
              height="450" // Fixed height
              style={{ border: 0 }} // No border styling
              allowFullScreen="" // Enable full screen mode
              loading="lazy" // Lazy load for better performance
              referrerPolicy="no-referrer-when-downgrade" // Security policy for iframe referrer
            ></iframe>
          </div>
        </div>
        {/* Left side content ends here */}

        {/* Right side content starts here */}
        <div>
          {/* Small heading for the form */}
          <h3 className="text-2xl font-bold mb-2">{t("sendMessage")}</h3>

          {/* Description under the heading */}
          <p className="text-gray-700 mb-6 text-md">
            {t("description")}
          </p>

          {/* Contact form starts here */}
          <form className="flex flex-col gap-4">
            
            {/* Input field for name with placeholder and styling */}
            <input
              type="text"
              placeholder={t("namePlaceholder")}
              className="px-4 py-3 rounded-full border border-black focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            {/* Input field for email with placeholder and styling */}
            <input
              type="email"
              placeholder={t("emailPlaceholder")}
              className="px-4 py-3 rounded-full border border-black focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            {/* Textarea field for message with placeholder, fixed rows, and styling */}
            <textarea
              placeholder={t("messagePlaceholder")}
              rows="8"
              className="px-4 py-3 rounded-3xl border border-black focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
            ></textarea>

            {/* Submit button with hover effect and rounded appearance */}
            <button
              type="submit"
              className="mt-2 px-8 py-2 text-black border border-black rounded-full hover:bg-[#014782] hover:text-white transition font-semibold text-sm self-start"
            >
              {t("submit")}
            </button>
          </form>
        </div>
        {/* Right side content ends here */}

      </div>
      {/* Main container ends here */}
    </section>
    // Section element ends here
  );
}
