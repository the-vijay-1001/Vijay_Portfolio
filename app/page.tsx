import Hero from "@/components/Hero";
import "./globals.css";
import AboutMe from "@/components/AboutMe";
import ContactUs from "@/components/ContactUs";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import GetOurUpdate from "@/components/GetOurUpdate";
export default function Home() {
  return (
    <>
      <Hero />
      <AboutMe />
      <Pricing />
      <Testimonials />
      <GetOurUpdate/>
      <ContactUs />
    </>
  );
}
