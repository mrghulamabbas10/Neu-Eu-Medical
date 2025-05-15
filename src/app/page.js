import Brands from "@/components/home/brands";
import Hero from "@/components/home/hero";
import Product from "@/components/home/product";
import Providers from "@/components/home/providers";
import Section2 from "@/components/home/section-2";
import Section3 from "@/components/home/section-3";
import StepsSlider from "@/components/home/steps";


export default function Home() {
  return (
    <div>
      <div className="md:px-8 px-3">
        <Hero />
        <Brands />
        <Section2 />
        <Section3 />
        <Product />
      </div>
      <StepsSlider />
      <Providers />
    </div>
  );
}
