import { Metadata } from "next";
import Header from "@/components/layout/header/Header";
import HomeBanner from "@/components/layout/banner/HomeBanner";
import TextSlider from "@/components/containers/home/TextSlider";
import TextSliderLarge from "@/components/containers/home/TextSliderLarge";
import Tools from "@/components/containers/home/Tools";
import Generation from "@/components/containers/home/Generation";
import Seo from "@/components/containers/home/Seo";
import Graphicdesigning from "@/components/containers/home/GraphicDesign";
import Partner from "@/components/containers/home/Partner";
import ServiceSlider from "@/components/containers/home/ServiceSlider";
import UnlockSection from "@/components/containers/home/UnlockSection";
import Overview from "@/components/containers/home/Overview";
import VideoSection from "@/components/containers/home/VideoSection";
import GenerationTwo from "@/components/containers/home/GenerationTwo";
import PricingPlan from "@/components/containers/home/PricingPlan";
import BlogOne from "@/components/containers/home/BlogOne";
import Footer from "@/components/layout/footer/Footer";
import InitCustomCursor from "@/components/layout/InitCustomCursor";
import ScrollProgressButton from "@/components/layout/ScrollProgressButton";
import Animations from "@/components/layout/Animations";
import OurJourney from "@/components/containers/home-seven/OurJourney";
import Review from "@/components/containers/home-two/Review";
import Why_choose_us from "@/components/containers/home/Why_choose_us";
import ImgStrip from "@/components/containers/home/ImgStrip";


export const metadata: Metadata = {
  title: "Digital Marketing Agency In Trivandrum,Kerala | Flumencopia",
  description: "Elevate your business with Flumencopia,a leading digital marketing company in Trivandrum, Kerala. Expert strategies to grow your online presence.",
  keywords: [    "digital marketing",
    "digital marketing agency",
    "online marketing",
    "SEO",
    "social media marketing",
    "Trivandrum",
    "Kerala",
    "marketing company",
    "SEO agency",
    "online presence",
    "business growth",
    "Flumencopia",
    "content marketing",
    "PPC",
    "branding",
    "marketing strategies"],
};

const page = () => {
  return (
        <div className="my-app">
          <Header/>
          <main>
            <HomeBanner />
            <TextSlider />
            <OurJourney />
            <TextSliderLarge />
            <Tools />
            <Generation />
            <Seo />
            <Graphicdesigning />
            {/* <ServiceSlider /> */}
            <Partner />
            <Why_choose_us />
            <VideoSection />
            <GenerationTwo />
            <PricingPlan />
            <Review />
            <BlogOne />
          </main>
          <Footer />
          <InitCustomCursor />
          <ScrollProgressButton/>
          <Animations />
        </div>
  );
};

export default page;
