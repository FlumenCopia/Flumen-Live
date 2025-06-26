import Image from "next/image";
import Link from "next/link";
import GenThumb from "@/public/images/brist.png";

const 
Graphicdesigning = () => {
  return ( 
    <section className="section-1 gen pb-0">
      <div className="container">
        <div className="row align-items-center gaper">
          <div className="col-12 col-lg-5 col-xxl-4">
            <div className="section__content">
              <span className="sub-title">IT Solutions</span>
              <h2 className="title title-animation">
              Expert Web Development for Powerful, Responsive Sites
              </h2>
              <p>
              Create a stunning online presence with our expert web development services. We build responsive, user-friendly
              websites tailored to your business needs.
              </p>
              <div className="section__content-cta">
                <a href="/services/web_development" className="btn btn--primary">
                  More
                </a>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-7 col-xxl-7 offset-xxl-1">
            <div className="gen__thumb">
              <div className=" parallax-img">
                <Image src={GenThumb} alt="Image" className="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Graphicdesigning;
