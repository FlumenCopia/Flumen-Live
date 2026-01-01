import Image from "next/image";
import Link from "next/link";
import unlockThumb from "@/public/images/why-choose-us.jpg";

const UnlockSection = () => {
  return (
    <section className="section unlock pb-0">
      <div className="container">
        <div className="row align-items-center gaper">
          <div className="col-12 col-lg-5 col-xxl-4">
            <div className="section__content">
              <span className="sub-title">Why Choose Us</span>
              <h2 className="title title-animation">
              Why FlumenX?
              </h2>
              <p>
              At FlumenX, we are passionate about helping your business thrive in the digital world. Although we are newer to the industry, our dedicated team brings fresh ideas and innovative solutions to every project. We combine creativity, technology, and strategic thinking to deliver results that make a difference. Our client-centric approach ensures that each project is personalized to meet your unique needs and goals.
              </p>
            </div>
          </div>
          <div className="col-12 col-lg-6 offset-lg-1 col-xxl-6 offset-xxl-2">
            <div className="unlock__thumb text-start text-lg-end">
              <div className="reveal-img parallax-img">
                <Image src={unlockThumb} alt="Image" priority />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UnlockSection;
