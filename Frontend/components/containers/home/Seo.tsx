import Image from "next/image";
import Link from "next/link";
import ToolsThumb from "@/public/images/seo.png";

const Seo = () => {
  return (
    <section className="section-1 tools pb-0"> 
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
              <span className="sub-title">SEO</span>
              <h2 className="title title-animation">
               Boost Your Visibility with Expert SEO Services
              </h2>
              <p>
              Enhance your search rankings and drive more traffic with our tailored SEO strategies. We optimize your site to increase visibility and attract quality leads.
              </p>
              <div className="section__content-cta">
                <a href="/services/digital_marketing/seo" className="btn btn--primary">
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

export default Seo;