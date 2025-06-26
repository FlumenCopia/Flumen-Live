import Header from "@/components/layout/header/Header";
import CommonBanner from "@/components/layout/banner/CommonBanner";
import Footer from "@/components/layout/footer/Footer";
import InitCustomCursor from "@/components/layout/InitCustomCursor";
import ScrollProgressButton from "@/components/layout/ScrollProgressButton";
import Animations from "@/components/layout/Animations";
import Branding_details from "@/components/containers/service/Branding/Branding_details";
import Branding_banner from "@/components/containers/service/Branding/Branding_banner";

const page = () => {
  return (
    <div className="my-app">
      <Header />
      <main>
        <Branding_banner />
        <Branding_details/>
      </main>
      <Footer />
      <InitCustomCursor />
      <ScrollProgressButton />
      <Animations />
    </div>
  );
};

export default page;