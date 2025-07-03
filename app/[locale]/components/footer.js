"use client"; // Enables client-side rendering in Next.js (App Router)

// Importing the `useTranslations` hook from next-intl for internationalization
import { useTranslations } from "next-intl";

// Footer functional component
export default function Footer() {
  const t = useTranslations("footer"); // Hook to access translations under the "footer" namespace

  return (
    // Footer wrapper with white background, black text, and padding
    <footer className="bg-white text-black px-4 md:px-16 py-8">
      
      {/* Main content container with responsive grid layout */}
      <div className="max-w-12xl mx-auto grid gap-12 md:grid-cols-5 sm:grid-cols-2 text-sm">
        
        {/* First column: Company title, description, and social icons */}
        <div className="-mt-1">
          <h2 className="text-2xl font-bold">{t("mani_travel_world")}  </h2> {/* Company title */}
          <p className="mt-2 text-gray-600">
            {t("footer_description")} {/* Description text */}
          </p>
          
          {/* Social media icon links */}
          <div className="flex gap-4 mt-4 text-2xl">
            <a href="#" aria-label="Facebook"><i className="fab fa-facebook"></i></a> {/* Facebook icon */}
            <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a> {/* Instagram icon */}
            <a href="#" aria-label="YouTube"><i className="fab fa-youtube"></i></a> {/* YouTube icon */}
          </div>
        </div>

        {/* Second column: Services list 1 */}
        <div>
          <h3 className="font-semibold mb-2">{t("services")}  </h3> {/* Services heading */}
          <ul className="space-y-1 text-gray-700">
            <li>{t("air_ticketing")} </li> {/* Air ticketing */}
            <li>{t("visa_consulting")} </li> {/* Online visa services */}
            <li>{t("online_visa_services")} </li> {/* Hotel booking */}
            <li>{t("online_appointments")} </li> {/* Visa consulting */}
          </ul>
        </div>

        {/* Third column: Services list 2 */}
        <div>
          <h3 className="font-semibold mb-2">{t("services")} </h3> {/* Services heading */}
          <ul className="space-y-1 text-gray-700">
            <li>{t("travel_insurance")}</li> {/* Online appointments */}
            <li>{t("hotel_booking")}</li> {/* Airport transportation */}
            <li>{t("airport_transportation")}</li> {/* Travel insurance */}
            <li>{t("translation")}</li> {/* Translation */}
          </ul>
        </div>

        {/* Fourth column: Contact information */}
        <div>
          <h3 className="font-semibold mb-2">{t("contact")}</h3> {/* Contact heading */}
          <ul className="text-gray-700 space-y-1">
            <li>{t("email")}</li> {/* Email */}
            <li>{t("mobile_number")}</li> {/* Mobile number */}
            <li>{t("phone_number")}</li> {/* Phone number */}
          </ul>
        </div>

        {/* Fifth column: Address */}
        <div>
          <h3 className="font-semibold mb-2">{t("address")}</h3> {/* Address heading */}
          <p className="text-gray-700">
            {t("address_full")} {/* Full address */}
          </p>
                     <img src="/Logo.png" alt="Site Logo" className="h-42 w-42" /> {/* Site logo */}

        </div>
      </div>

      {/* Horizontal separator line */}
      <hr className="my-6 border-gray-900" />

      {/* Copyright notice */}
      <div className="text-center text-sm text-gray-600">
        {t("copyright")}
      </div>
    </footer>
  );
}
