import Brands from "@/components/home/brands";
import Hero from "@/components/home/hero";
import Product from "@/components/home/product";
import Section2 from "@/components/home/section-2";
import Section3 from "@/components/home/section-3";
import StepsSlider from "@/components/home/steps";
import Join from "@/components/home/join";
import FAQs from "@/components/home/FAQs";
import CallSection from "@/components/home/callSection";
import Eligibale from "@/components/home/eligibale";
import Navbar from "@/layout/navbar";
import Footer from "@/layout/footer";
import PricingPlans from "@/components/home/pricingPlans";
import FinePath from "@/components/home/finePath";
import ContactSupport from "@/components/home/contactSupport";

export default function Home() {
  return (
    <div>
      <div className="headerbg md:px-8 px-3">
        <Navbar />
        <Hero />
      </div>
      <div className="md:px-8 px-3">
        <Brands />
        <Section2 />
        <Section3 />
        <Product />
        <PricingPlans />
        <FinePath />
      </div>
      <CallSection />
      <StepsSlider />
      <ContactSupport />
      <Join />
      <FAQs />
      <div className="elgibilty pt-20 md:mx-8 mx-3 bg-[#FFF2EB] rounded-2xl">
        <Eligibale />
        <Footer />
      </div>
    </div>
  );
}
