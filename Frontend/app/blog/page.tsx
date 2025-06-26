import Header from "@/components/layout/header/Header";
import CommonBanner from "@/components/layout/banner/CommonBanner";
import BlogPoster from "@/components/containers/blog/BlogPoster";
import BlogItems from "@/components/containers/blog/BlogItems";
import Footer from "@/components/layout/footer/Footer";
import InitCustomCursor from "@/components/layout/InitCustomCursor";
import ScrollProgressButton from "@/components/layout/ScrollProgressButton";
import Animations from "@/components/layout/Animations";
import BlogBanner from "@/components/containers/blog/BlogBanner";
import ImgStrip from "@/components/containers/home/ImgStrip";

const page = () => {
  return (
    <div className="my-app">
      <Header />
      <main>
        <BlogBanner/>
        <BlogPoster />
        {/* <ImgStrip/> */}
        <BlogItems />
      </main>
      <Footer />
      <InitCustomCursor />
      <ScrollProgressButton />
      <Animations />
    </div>
  );
};

export default page;
