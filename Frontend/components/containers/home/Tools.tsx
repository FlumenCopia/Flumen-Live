import Image from "next/image";
import Link from "next/link";
import ToolsThumb from "@/public/images/digital_marketing.png";

const Tools = () => { 
  return (
    <section className="mt-5 tools pb-0">
      <div className="container">
        <div className="row gaper align-items-center">
          <div className="col-12 col-lg-7">
            <div className="tools__thumb dir-rtl">
              <div className=" parallax-img">
                <Image src={ToolsThumb} alt="Image" className="" />
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-5 col-xxl-4 offset-xxl-1 order-first order-lg-last">
            <div className="section__content">
              <span className="sub-title">Digital Marketing</span>
              <h2 className="title title-animation">
              Maximize Your Online Presence with Strategic Digital Marketing
              </h2>
              <p>
              Unlock the full potential of your brand with our comprehensive digital marketing services. From SEO to social media, we craft tailored strategies that drive traffic, boost engagement, and deliver measurable results.
              </p>
              <div className="section__content-cta">
                <a href="/services/digital_marketing" className="btn btn--primary">
                  More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tools;
