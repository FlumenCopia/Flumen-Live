import Header from "@/components/layout/header/Header";
import CommonBanner from "@/components/layout/banner/CommonBanner";
import Footer from "@/components/layout/footer/Footer";
import InitCustomCursor from "@/components/layout/InitCustomCursor";
import ScrollProgressButton from "@/components/layout/ScrollProgressButton";
import Animations from "@/components/layout/Animations";
import Web_details from "@/components/containers/service/Web_dev.tsx/Web_details";
import Web_banner from "@/components/containers/service/Web_dev.tsx/Web_banner";
import Web_servicedata from "@/components/containers/service/Web_dev.tsx/Web_servicedata";

const page = () => {
  return (
    <div className="my-app">
      <Header />
      <main>
        <Web_banner />
       <Web_details/>
       <Web_servicedata/>
      </main>
      <Footer />
      <InitCustomCursor />
      <ScrollProgressButton />
      <Animations />
    </div>
  );
};

export default page;