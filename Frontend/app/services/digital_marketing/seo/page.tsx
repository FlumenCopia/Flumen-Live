import Header from "@/components/layout/header/Header";
import Footer from "@/components/layout/footer/Footer";
import InitCustomCursor from "@/components/layout/InitCustomCursor";
import ScrollProgressButton from "@/components/layout/ScrollProgressButton";
import Animations from "@/components/layout/Animations";
import Seo_bannercontent from "@/components/containers/service/Marketing/Seo/Seo_bannercontent";
import Seo_data from "@/components/containers/service/Marketing/Seo/Seo_data";

const page = () => {
  return (
    <div className="my-app">
      <Header/>
      <main>
        <Seo_bannercontent/>
        <Seo_data/>
      </main>
      <Footer />
      <InitCustomCursor />
      <ScrollProgressButton />
      <Animations />
    </div>
  );
};

export default page;