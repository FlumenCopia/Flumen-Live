import Header from "@/components/layout/header/Header";
import Footer from "@/components/layout/footer/Footer";
import RelatedDesign from "@/components/containers/learnhub/learn-design/RelatedDesign";
import BannerDesign from "@/components/containers/learnhub/learn-design/BannerDesign";
import LearnDesignContent from "@/components/containers/learnhub/learn-design/LearnDesignContent";
import InitCustomCursor from "@/components/layout/InitCustomCursor";
import ScrollProgressButton from "@/components/layout/ScrollProgressButton";
import Animations from "@/components/layout/Animations";

const page = () => {
    return (
      <div className="my-app">
        <Header />
        <main>
        <BannerDesign />
        <LearnDesignContent />
        <RelatedDesign /> 
        </main>
        <Footer />
        <InitCustomCursor />
        <ScrollProgressButton />
        <Animations /> 
      </div>
    );
  };
  
  export default page;