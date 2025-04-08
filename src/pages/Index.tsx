
import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import ServicesSection from "@/components/home/ServicesSection";
import PricingSection from "@/components/home/PricingSection";
import TrainersSection from "@/components/home/TrainersSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import ContactSection from "@/components/home/ContactSection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <ServicesSection />
      <PricingSection />
      <TrainersSection />
      <TestimonialsSection />
      <ContactSection />
    </Layout>
  );
};

export default Index;
