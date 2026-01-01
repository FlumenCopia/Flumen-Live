import Image from "next/image";
import Link from "next/link";
import CraftThumb from "@/public/images/craft-thumb.png";
import Shape from "@/public/images/footer/star-3.png";

const Craft = () => {
  return (
    <section className="section craft" id="scrollPosition">
      <div className="container">
        <div className="row align-items-center gaper">
          <div className="col-12 col-lg-6 col-xxl-5">
            <div className="section__content">
              <span className="sub-title">About Us</span>
              <h2 className="title title-animation">
               Empowering Your Digital Future with Innovative Solutions
              </h2>
              <p>
              FlumenX is a digital marketing and web development agency based in Trivandrum, dedicated to transforming your business into a digital powerhouse. With a passion for innovation and a commitment to excellence, we craft tailored strategies that drive growth, enhance brand visibility, and deliver measurable results. Join us on a journey to digital success!
              </p>
              <div className="section__content-cta">
                <a href="shop" className="btn btn--primary">
                  Get started
                </a>
              </div>
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
  );
};

export default Craft;
