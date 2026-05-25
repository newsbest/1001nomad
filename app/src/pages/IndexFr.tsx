import Navigation from "@/components/fr/Navigation";
import Hero from "@/components/fr/Hero";
import Solution from "@/components/fr/Solution";
import HowItWorks from "@/components/fr/HowItWorks";
import WhyChooseUs from "@/components/fr/WhyChooseUs";
import Testimonials from "@/components/fr/Testimonials";
import FinalCTA from "@/components/fr/FinalCTA";
import Footer from "@/components/fr/Footer";

const IndexFr = () => {
  return (
    <div lang="fr" dir="ltr">
      <Navigation />
      <div id="home">
        <Hero />
      </div>

      <div id="testimonials">
        <Testimonials />
      </div>
      <div id="about">
        <Solution />
        <WhyChooseUs />
      </div>
      <div id="how-it-works">
        <HowItWorks />
      </div>
      <div id="cta">
        <FinalCTA />
      </div>
      <div id="contact">
        <Footer />
      </div>
    </div>
  );
};

export default IndexFr;
