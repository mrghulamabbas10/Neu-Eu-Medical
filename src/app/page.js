import Brands from "@/components/home/brands";
import Hero from "@/components/home/hero";
import Product from "@/components/home/product";
import Providers from "@/components/home/providers";
import Section2 from "@/components/home/section-2";
import Section3 from "@/components/home/section-3";
import StepsSlider from "@/components/home/steps";
import Pricing from "../components/home/pricing";
import Join from "@/components/home/join";
import FAQs from "@/components/home/FAQs";
import CallSection from "@/components/home/callSection";
import Eligibale from "@/components/home/eligibale";
import Navbar from "@/layout/navbar";
import Footer from "@/layout/footer";


export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="md:px-8 px-3">
        <Hero />
        <Brands />
        <Section2 />
        <Section3 />
        <Product />
      </div>
      <StepsSlider />
      <Providers />
      <CallSection />
      <Pricing />
      <Join />
      <FAQs />
      <Eligibale />
      <Footer />
    </div>
  );
}
