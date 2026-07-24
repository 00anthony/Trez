import Nav from "../components/sections/Nav";
import Hero from "../components/sections/Hero";
import TrustBar from "../components/sections/TrustBar";
import Services from "../components/sections/Services";
import FeaturedProjects from "../components/sections/FeaturedProjects";
import Process from "../components/sections/Process";
import About from "../components/sections/About";
import WhyChooseUs from "../components/sections/WhyChooseUs";
import Testimonials from "../components/sections/Testimonials";
import FAQ from "../components/sections/FAQ";
import Contact from "../components/sections/Contact";
import Footer from "../components/sections/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <TrustBar />
        <Services />
        <FeaturedProjects />
        <Process />
        <About />
        <WhyChooseUs />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
