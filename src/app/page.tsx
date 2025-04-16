import Footer from "@/components/footer/Footer";
import MemberShipCard from "@/components/footer/MemberShipCard";
import Navbar from "@/components/header/navbar/Navbar";
import HeroSection from "@/components/heroSection/HeroSection";
import PreviousResults from "@/components/heroSection/PreviousResults";
import SportCoverage from "@/components/heroSection/SportCoverage";
import WhyChooseUs from "@/components/heroSection/WhyChooseUs";
import Testimonial from "@/components/testimonials/Testimonial";

export default function Home() {
  return (
    <>
      {/* main hero section */}
      <Navbar />
      <HeroSection />
      <WhyChooseUs />
      <SportCoverage />
      <PreviousResults />
      <Testimonial />
      <MemberShipCard />
      <Footer />
    </>
  );
}
