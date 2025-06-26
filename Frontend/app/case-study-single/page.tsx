import Header from "@/components/layout/header/Header";
import CommonBanner from "@/components/layout/banner/CommonBanner";
import CaseStudyDetails from "@/components/containers/case-study/CaseStudyDetails";
// import RelatedCaseStudy from "@/components/containers/case-study/RelatedCaseStudy";

import Footer from "@/components/layout/footer/Footer";
import InitCustomCursor from "@/components/layout/InitCustomCursor";
import ScrollProgressButton from "@/components/layout/ScrollProgressButton";
import Animations from "@/components/layout/Animations";
import RelatedDm from "@/components/containers/learnhub/learn-dm/RelatedDm";

const page = () => {
  return (
    <div className="my-app">
      <Header />
      <main>
        <CommonBanner title="Ai Club X" />
        <CaseStudyDetails />
        <RelatedDm /> 
        {/* <RelatedCaseStudy /> */}
      </main>
      <Footer />
      <InitCustomCursor />
      <ScrollProgressButton />
      <Animations />
    </div>
  );
};

export default page;
