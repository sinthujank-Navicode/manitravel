import Hero from "./components/hero";
import Subscribe from "./components/Sections/subscribe";
import OurService from "./components/Sections/ourService";
import ContactUs from "./components/Sections/ContactUs";

export default function Home() {
  return (
    <div className="relative">
      <div id="home" className="relative overflow-hidden md:mb-0 mb-7">
        <Hero />
      </div>
      <div id="service " className="m-2 md:m-0 md:mt-1 ">
        <OurService />
      </div>
      <div id="AboutUs" className="m-2 md:m-0 rounded-lg bg-white relative -mb-8">
        <ContactUs />
      </div>
      <div id="subscribe" className="m-3 md:m-5 md:mt-[-1] mt-[29] rounded-lg bg-white relative">
        <Subscribe />
      </div>
    </div>
  );
}
