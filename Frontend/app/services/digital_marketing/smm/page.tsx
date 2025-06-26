import Header from "@/components/layout/header/Header";
import Footer from "@/components/layout/footer/Footer";
import InitCustomCursor from "@/components/layout/InitCustomCursor";
import ScrollProgressButton from "@/components/layout/ScrollProgressButton";
import Animations from "@/components/layout/Animations";
import Smm_data from "@/components/containers/service/Marketing/Smm/Smm_data";
import Smm_bannercontent from "@/components/containers/service/Marketing/Smm/Smm_bannercontent";

const page = () => {
  return (
    <div className="my-app">
      <Header />
      <Smm_bannercontent/>
      <main>
      <Smm_data/>
      </main>
      <Footer />
      <InitCustomCursor />
      <ScrollProgressButton />
      <Animations />
    </div>
  );
};

export default page;