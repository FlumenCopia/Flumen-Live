import Header from "@/components/layout/header/Header";
import Footer from "@/components/layout/footer/Footer";
import RelatedDm from "@/components/containers/learnhub/learn-dm/RelatedDm";
import BannerDm from "@/components/containers/learnhub/learn-dm/BannerDm";
import InitCustomCursor from "@/components/layout/InitCustomCursor";
import ScrollProgressButton from "@/components/layout/ScrollProgressButton";
import Animations from "@/components/layout/Animations";
import LearnWebContent from "@/components/containers/learnhub/learn-dm/LearnDmContent";
import LearnDmContent from "@/components/containers/learnhub/learn-dm/LearnDmContent";


const page = () => {
    return (
      <div className="my-app">
        <Header />
        <main>
        <BannerDm />
        <LearnDmContent/>
        <RelatedDm /> 
        </main>
        <Footer />
        <InitCustomCursor />
        <ScrollProgressButton />
        <Animations />
      </div>
    );
  };
  
  export default page;