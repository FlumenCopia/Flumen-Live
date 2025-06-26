import Header from "@/components/layout/header/Header";
import ContactSection from "@/components/containers/contact-us/ContactSection";
import Footer from "@/components/layout/footer/Footer";
import InitCustomCursor from "@/components/layout/InitCustomCursor";
import ScrollProgressButton from "@/components/layout/ScrollProgressButton";
import Animations from "@/components/layout/Animations";
import ContactBanner from "@/components/containers/contact-us/ContactBanner";

const page = () => {
  return (
    <div className="my-app">
      <Header />
      <main>
        <ContactBanner/>
        <ContactSection />
      </main>
      <Footer />
      <InitCustomCursor />
      <ScrollProgressButton />
      <Animations />
    </div>
  );
};

export default page;
