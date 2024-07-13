import AboutSection from "../components/Home/AboutSection";
import BlogSection from "../components/Home/BlogSection";
import ContactSection from "../components/Home/ContactSection";
import Hero from "../components/Home/Hero";
import Service from "./Service";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <Service />
      <BlogSection />
      <ContactSection />
    </>
  )
}
