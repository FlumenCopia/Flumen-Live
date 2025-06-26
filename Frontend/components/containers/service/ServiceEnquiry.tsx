import Image from "next/image";
import Link from "next/link";
import Thumb from "@/public/images/services/service-craft-img.jpg";

const ServiceEnquiry = () => {
  return (
    <section className="section craft craft-alt">
      <div className="container">
        <div className="row align-items-center gaper">
          <div className="col-12 col-lg-6 col-xxl-5">
            <div className="section__content">
              <span className="sub-title">Contact</span>
              <h2 className="title title-animation" >
              Discover how we can assist you!
              </h2>
              <p>
              We are delighted to hear from you and are excited to learn more about your project or business. Our team of experts is always eager to provide top-notch digital marketing and web development services tailored to your unique needs. <br/><br/> Do not hesitate to ask us any questions you may have, and let us know how we can assist you in achieving your business goals.
              </p>
              <div className="section__content-cta">
                <a href="/contact-us" className="btn btn--primary">
                  Enquire Now
                </a>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6 col-xxl-7">
            <div className="craft__thumb text-start text-lg-end">
              <div className="reveal-img parallax-img">
                <Image src={Thumb} alt="Image" priority />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceEnquiry;
