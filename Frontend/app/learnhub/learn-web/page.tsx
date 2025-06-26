import Header from "@/components/layout/header/Header";
import Footer from "@/components/layout/footer/Footer";
import RelatedWeb from "@/components/containers/learnhub/learn-web/RelatedWeb";
import BannerWeb from "@/components/containers/learnhub/learn-web/BannerWeb";
import LearnWebContent from "@/components/containers/learnhub/learn-web/LearnWebContent";
import InitCustomCursor from "@/components/layout/InitCustomCursor";
import ScrollProgressButton from "@/components/layout/ScrollProgressButton";
import Animations from "@/components/layout/Animations";
import Relatedsection from "@/components/containers/home-seven/Relatedsection";

const page = () => {
    return (
      <div className="my-app">
        <Header />
        <main>
        <BannerWeb />
        <LearnWebContent />
        <RelatedWeb /> 
        {/* <Relatedsection/> */}
        </main>
        <Footer />
        <InitCustomCursor />
        <ScrollProgressButton />
        <Animations />
      </div>
    );
  };
  
  export default page;
  
  