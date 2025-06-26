import Image from "next/image";
import Link from "next/link";
import CraftThumb from "@/public/images/craft-thumb.png";
import CraftThumbs from "@/public/images/craft-thumb1.png";
import Shape from "@/public/images/footer/star-3.png";

const AboutCraft = () => {
  return (
    <div>
    <section className="section pb-0 craft">
      <div className="container">
        <div className="row align-items-center gaper">
          <div className="col-12 col-lg-6 col-xxl-5">
            <div className="section__content">
              <span className="sub-title">Our Mission</span>
              <h2 className="title title-animation">
              Our Mission: Driving Innovation and Success
              </h2>
              <p>
              Our mission at Flumen Copia is to provide innovative, high-quality, value-added solutions 
              across digital marketing services, web design, web development, social media management, 
              and other diverse services. We aim to foster a seamless and transparent work experience 
              through expert ideation, comprehensive project execution, and easy team collaboration, 
              ensuring that everyone involved benefits from our dedicated approach.
              </p>
            </div>
          </div>
          <div className="col-12 col-lg-6 col-xxl-7">
            <div className="craft__thumb text-start text-lg-end">
              <div className="reveal-img parallax-img">
                <Image src={CraftThumb} alt="Image" priority />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="anime-one">
        <Image src={Shape} alt="Image" priority />
      </div>


    </section>
    <section className="section pb-0 craft">
    <div className="container">
      <div className="row align-items-center gaper">
        
        <div className="col-12 col-lg-6 col-xxl-7">
          <div className="craft__thumb text-start">
            <div className="reveal-img parallax-img">
              <Image src={CraftThumbs} alt="Image" priority />
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-6 col-xxl-5">
          <div className="section__content">
            <span className="sub-title">Our Vision</span>
            <h2 className="title title-animation">
            Our Vision: Driving Innovation and Success
            </h2>
            <p>
            FlumenCopia, one of the leading digital marketing companies in Kerala, was launched with the vision of helping clients achieve the highest levels of success through uniquely creative ideas and strategies. We have assembled a highly motivated team of outstanding marketers, designers, advertising professionals, and storytellers, all with one distinct objective in mind: to expand customer interaction and traffic, thereby increasing the popularity, revenue, and growth of your business.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="anime-one">
      <Image src={Shape} alt="Image" priority />
    </div>
  </section>
  </div>
  );
};

export default AboutCraft;
