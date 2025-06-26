import Header from "@/components/layout/header/Header";
import Footer from "@/components/layout/footer/Footer";
import RelatedVid from "@/components/containers/learnhub/learn-vid/RelatedVid";
import BannerVid from "@/components/containers/learnhub/learn-vid/BannerVid";
import InitCustomCursor from "@/components/layout/InitCustomCursor";
import ScrollProgressButton from "@/components/layout/ScrollProgressButton";
import Animations from "@/components/layout/Animations";
import LearnVidContent from "@/components/containers/learnhub/learn-vid/LearnVidContent";


const page = () => {
    return (
      <div className="my-app">
        <Header />
        <main>
        <BannerVid />
        <LearnVidContent />
        <RelatedVid /> 
        </main>
        <Footer />
        <InitCustomCursor />
        <ScrollProgressButton />
        <Animations /> 
      </div>
    );
  };
  
  export default page;