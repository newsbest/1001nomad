import Navigation from "@/components/en/Navigation";
import Hero from "@/components/en/Hero";
import Solution from "@/components/en/Solution";
import HowItWorks from "@/components/en/HowItWorks";
import WhyChooseUs from "@/components/en/WhyChooseUs";
import FinalCTA from "@/components/en/FinalCTA";
import Footer from "@/components/en/Footer";

const IndexEn = () => {
  return (
    <div lang="en" dir="ltr">
      <Navigation />
      <div id="home">
        <Hero />
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

export default IndexEn;
