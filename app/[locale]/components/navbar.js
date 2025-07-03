"use client"; // Enables client-side rendering for this component

import { useState, useEffect } from "react"; // React hooks for state and lifecycle
import { usePathname, useRouter } from "next/navigation"; // Next.js navigation hooks
import { useLocale, useTranslations } from "next-intl"; // Internationalization hooks from next-intl

// Navbar component definition
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to toggle mobile menu
  const [langOpen, setLangOpen] = useState(false); // State to toggle language dropdown

  const router = useRouter(); // Router instance for navigation
  const pathname = usePathname(); // Current pathname (used for changing locale in URL)
  const currentLocale = useLocale(); // Gets the current locale
  const t = useTranslations("navbar"); // Gets translations from the "navbar" namespace

  // Language options with display label and locale code
  const languageOptions = [
    { label: "ENG", code: "en" },
    { label: "தமிழ்", code: "ta" },
  ];

  // Function to get display label based on locale code
  const getLangLabel = (localeCode) => {
    const lang = languageOptions.find((lang) => lang.code === localeCode); // Finds matching language
    return lang?.label || localeCode.toUpperCase(); // Fallback to uppercase code if not found
  };

  const [selectedLang, setSelectedLang] = useState(getLangLabel(currentLocale)); // Selected language label

  // Menu items with translated names and anchor links
  const menuItems = [
    { name: t("home"), link: "#home" },
    { name: t("about"), link: "#subscribe" },
    { name: t("services"), link: "#service" },
  ];

  // Handles language change action
  const handleLangChange = (code, label) => {
    const segments = pathname.split("/"); // Split the current path
    segments[1] = code; // Replace the locale part of the path
    const newPath = segments.join("/") || "/"; // Reconstruct the path
    router.push(newPath); // Navigate to the new locale path
    setSelectedLang(label); // Update selected language label
    setLangOpen(false); // Close language dropdown
  };

  // JSX for the language dropdown menu
  const languageDropdown = (
    <div className="relative language-dropdown ">
      {" "}
      {/* Wrapper for dropdown */}
      <button
        onClick={() => setLangOpen(!langOpen)} // Toggle dropdown visibility
        className="flex items-center text-sm cursor-pointer "
      >
        {selectedLang} {/* Show selected language label */}
        <span
          className={`ml-1 transition-transform duration-200 ${
            langOpen ? "rotate-180" : "rotate-0" // Arrow direction
          }`}
        >
          ▼ {/* Arrow icon */}
        </span>
      </button>
      {langOpen && ( // Dropdown list when open
        <div className="absolute left-0 mt-2 w-20 bg-white  shadow-lg border rounded cursor-pointer z-50">
          {languageOptions.map(
            (
              { label, code } // Render each language
            ) => (
              <button
                key={code} // Unique key
                onClick={() => handleLangChange(code, label)} // Handle change
                className="block w-full text-left px-4 py-2 hover:bg-[#014782] hover:text-white"
              >
                {label} {/* Language label */}
              </button>
            )
          )}
        </div>
      )}
    </div>
  );

  // Effect to close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".language-dropdown")) {
        // If clicked outside the dropdown
        setLangOpen(false); // Close dropdown
      }
    };
    document.addEventListener("mousedown", handleClickOutside); // Listen for outside clicks
    return () => document.removeEventListener("mousedown", handleClickOutside); // Cleanup
  }, []);

  return (
    <nav className="bg-white w-full z-[5190] flex items-center justify-between px-6 py-4">
      {/* Logo and Desktop Menu Section */}
      <div className="relative flex items-center space-x-15 md:space-x-3 bg-white md:shadow-sm px-11 py-1 rounded-2xl">
        {/* Site logo */}
        <img src="/Logo.png" alt="Site Logo"   className="h-12 w-auto object-contain" 
 />
        <div className="relative hidden  md:block text-xl  font-bold mr-9">MANI TRAVEL WORLD</div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 font-bold">
          {menuItems.map(
            (
              item // Render each menu item
            ) => (
              <a
                key={item.name}
                href={item.link}
                className="hover:text-[#014782]" // Change the hover color here
              >
                {item.name} {/* Menu text */}
              </a>
            )
          )}
        </div>
      </div>

      {/* Desktop Right Side */}
      <div className="hidden md:flex items-center space-x-12 relative">
        <span className="bg-white shadow-sm px-5 py-[14px] rounded-2xl">
          {languageDropdown} {/* Language switcher */}
        </span>
        <a href="#contact">
          {" "}
          {/* Contact button */}
          <button className="bg-white shadow-sm text-black hover:bg-[#014782] hover:text-white px-9 py-[13px] rounded-2xl">
            {t("contact")}
          </button>
        </a>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden bg-white py-2 px-3 ml-[9] rounded-sm"
        onClick={() => {
          setIsOpen(!isOpen); // Toggle mobile menu
          setLangOpen(false); // Close language dropdown
        }}
      >
        {isOpen ? "✖" : "☰"} {/* Hamburger or close icon */}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md md:hidden flex flex-col items-center py-4 space-y-4 z-50">
          {menuItems.map(
            (
              item // Mobile menu links
            ) => (
              <a
                key={item.name}
                href={item.link}
                className="hover:bg-black hover:text-white"
              >
                {item.name}
              </a>
            )
          )}
          <div className="relative">{languageDropdown}</div>{" "}
          {/* Mobile language switcher */}
          <a
            href="#contact"
            className="bg-black text-white px-4 py-2 rounded-2xl inline-block text-center"
          >
            {t("contact")} {/* Contact button in mobile view */}
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar; // Export component
