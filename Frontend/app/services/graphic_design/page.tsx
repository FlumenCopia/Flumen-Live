import Header from "@/components/layout/header/Header";
import Footer from "@/components/layout/footer/Footer";
import InitCustomCursor from "@/components/layout/InitCustomCursor";
import ScrollProgressButton from "@/components/layout/ScrollProgressButton";
import Animations from "@/components/layout/Animations";
import Design_details from "@/components/containers/service/graphic_design/Design_details";
import Design_banner from "@/components/containers/service/graphic_design/Design_Banner";

const page = () => {
  return (
    <div className="my-app">
      <Header />
      <main>
        <Design_banner />
       <Design_details/>
      </main>
      <Footer />
      <InitCustomCursor />
      <ScrollProgressButton />
      <Animations />
    </div>
  );
};

export default page;