import Hero from "@/components/home/Hero";
import SectorsTicker from "@/components/layout/SectorsTicker";
import ValueProp from "@/components/home/ValueProp";
import ServicesGrid from "@/components/home/ServicesGrid";
import WhyUs from "@/components/home/WhyUs";
import Testimonials from "@/components/home/Testimonials";
import FooterCTA from "@/components/home/FooterCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <SectorsTicker />
      <ValueProp />
      <ServicesGrid />
      <WhyUs />
      <Testimonials />
      <FooterCTA />
    </>
  );
}
