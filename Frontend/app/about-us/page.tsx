import Header from "@/components/layout/header/Header";
import AboutPoster from "@/components/containers/about/AboutPoster";
import AboutCraft from "@/components/containers/about/AboutCraft";
import AboutOverview from "@/components/containers/about/AboutOverview";
import AboutTool from "@/components/containers/about/AboutTool";
import Review from "@/components/containers/home-two/Review";
import Footer from "@/components/layout/footer/Footer";
import InitCustomCursor from "@/components/layout/InitCustomCursor";
import ScrollProgressButton from "@/components/layout/ScrollProgressButton";
import Animations from "@/components/layout/Animations";
import HomeFiveBanner from "@/components/layout/banner/HomeFiveBanner";
import NextLevel from "@/components/containers/home-five/NextLevel";
import NextSlider from "@/components/containers/home-five/NextSlider";
import CaseSlideFive from "@/components/containers/home-five/CaseSlideFive";
import CounterTwo from "@/components/containers/home-five/CounterTwo";
import EmpowerThree from "@/components/containers/home-seven/EmpowerThree";
import Relatedsection from "@/components/containers/home-seven/Relatedsection";

const page = () => {
  return (
    <div className="my-app">
      <Header />
      <main>
        <HomeFiveBanner/>
        <NextLevel/>
        <NextSlider/>
        <CaseSlideFive/>
        <AboutPoster/>
        <CounterTwo/>
        <AboutCraft />
        <AboutOverview />
        <AboutTool />
        <Review />
        <EmpowerThree />
      </main>
      <Footer />
      <InitCustomCursor />
      <ScrollProgressButton />
      <Animations />
    </div>
  );
};

export default page;
