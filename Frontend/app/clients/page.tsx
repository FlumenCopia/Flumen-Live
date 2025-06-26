import Header from "@/components/layout/header/Header";
import CommonBanner from "@/components/layout/banner/CommonBanner";
import Footer from "@/components/layout/footer/Footer";
import InitCustomCursor from "@/components/layout/InitCustomCursor";
import ScrollProgressButton from "@/components/layout/ScrollProgressButton";
import Animations from "@/components/layout/Animations";
import TextSliderSeven from "@/components/containers/home-seven/TextSliderSeven";
import Brands from "@/components/containers/brand-logo/Brands";
import ClientsBanner from "@/components/containers/ClientsBanner";

const page = () => {
  return (
    <div className="my-app">
      <Header />
      <main>
        <ClientsBanner />
        <TextSliderSeven />
        <Brands />
      </main>
      <Footer />
      <InitCustomCursor />
      <ScrollProgressButton />
      <Animations />
    </div>
  );
};

export default page;