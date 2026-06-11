import Hero from "@/components/home/Hero";
import SectorsTicker from "@/components/layout/SectorsTicker";
import ServicesGrid from "@/components/home/ServicesGrid";
import ValueProp from "@/components/home/ValueProp";
import WhyUs from "@/components/home/WhyUs";
import Testimonials from "@/components/home/Testimonials";
import FooterCTA from "@/components/home/FooterCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <SectorsTicker />
      <ServicesGrid />
      <ValueProp />
      <WhyUs />
      <Testimonials />
      <FooterCTA />
    </>
  );
}
