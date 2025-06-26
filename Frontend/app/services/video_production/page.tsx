import Header from "@/components/layout/header/Header";
import Footer from "@/components/layout/footer/Footer";
import InitCustomCursor from "@/components/layout/InitCustomCursor";
import ScrollProgressButton from "@/components/layout/ScrollProgressButton";
import Animations from "@/components/layout/Animations";
import Video_banner from "@/components/containers/service/video_production/Video_banner";
import Video_details from "@/components/containers/service/video_production/Video_details";

const page = () => {
  return (
    <div className="my-app">
      <Header />
      <main>
      <Video_banner />
      <Video_details/>
      </main>
      <Footer />
      <InitCustomCursor />
      <ScrollProgressButton />
      <Animations />
    </div>
  );
};

export default page;