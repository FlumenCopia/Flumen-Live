import Header from "@/components/layout/header/Header";
import Footer from "@/components/layout/footer/Footer";
import InitCustomCursor from "@/components/layout/InitCustomCursor";
import ScrollProgressButton from "@/components/layout/ScrollProgressButton";
import Animations from "@/components/layout/Animations";
import Marketing_details from "@/components/containers/service/Marketing/Marketing_details"; 
import Marketing_banner from "@/components/containers/service/Marketing/Marketing_banner"; 
import ExpandServices from "@/components/containers/home/ExpandServices";


const page = () => {
  return (
    <div className="my-app">
      <Header />
      <main>
        <Marketing_banner />
        <ExpandServices/>
        <Marketing_details/>
      </main>
      <Footer />
      <InitCustomCursor />
      <ScrollProgressButton />
      <Animations />
    </div>
  );
};

export default page;