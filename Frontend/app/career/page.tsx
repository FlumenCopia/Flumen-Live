import Header from "@/components/layout/header/Header";
import HomeFourBanner from "@/components/layout/banner/HomeFourBanner";
import ProductFilter from "@/components/containers/home-four/product-filter/ProductFilter";
import TextSliderPrompt from "@/components/containers/home-four/TextSliderPrompt";
import ParticleBackground from "@/components/containers/home-four/ParticaleBackground";
import CareerGrid from "@/components/containers/career/CareerGrid";
import CareerImages from "@/components/containers/career/CareerImages";
import Footer from "@/components/layout/footer/Footer";
import InitCustomCursor from "@/components/layout/InitCustomCursor";
import ScrollProgressButton from "@/components/layout/ScrollProgressButton";
import Animations from "@/components/layout/Animations";
import CareerForm from "@/components/containers/career/CareerForm";

const page = () => {
  return (
    <div className="my-app">
      <Header />
      <main>
        <HomeFourBanner />
        <CareerGrid/>
        {/* <ProductFilter /> */}
        <CareerImages />
        <CareerForm />
        
        <TextSliderPrompt />
        <ParticleBackground />
        
      </main>
      <Footer />
      <InitCustomCursor />
      <ScrollProgressButton />
      <Animations />
    </div>
  );
};

export default page;
