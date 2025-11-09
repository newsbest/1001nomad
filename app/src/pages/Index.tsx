import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ProblemStatement from "@/components/ProblemStatement";
import Solution from "@/components/Solution";
import HowItWorks from "@/components/HowItWorks";
import CourseAreas from "@/components/CourseAreas";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import WhyChooseUs from "@/components/WhyChooseUs";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="rtl" dir="rtl">
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
      {/* <div id="courses">
        <Stats />
      </div> */}
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

export default Index;