import Header from "@/components/layout/header/Header";
import HomeThreeBanner from "@/components/layout/banner/HomeThreeBanner";
import TextBrief from "@/components/containers/home-three/TextBrief";
import TextSliderGenerator from "@/components/containers/home-three/TextSliderGenerator";
import Footer from "@/components/layout/footer/Footer";
import InitCustomCursor from "@/components/layout/InitCustomCursor";
import ScrollProgressButton from "@/components/layout/ScrollProgressButton";
import Animations from "@/components/layout/Animations";
import CategoryFilter from "@/components/containers/home-four/category-filter/CategoryFilter";
import Learnhub_Text from "@/components/containers/learnhub/Learnhub_Text";

const page = () => {
  return (
    <div className="my-app">
      <Header />
      <main>
        <HomeThreeBanner />
        <TextBrief />
        <Learnhub_Text />
        <CategoryFilter />
        <TextSliderGenerator />
      </main>
      <Footer />
      <InitCustomCursor />
      <ScrollProgressButton />
      <Animations />
    </div>
  );
};

export default page;

