import Image from "next/image";
import Link from "next/link";
import Counter from "../Counter"
import one from "@/public/images/flumen-icon.png";
import two from "@/public/images/about-us.jpg";
import framer from "@/public/images/enquire-frame1.png";

const OurJourney = () => {
  return (
    <section className="s-journey my-5 pb-5 hg-i" id="scrollPosition">
      <div className="container">
        <div className="row gaper align-items-center section__header--secondary">
          <div className="col-12 col-md-9 col-lg-7 col-xxl-6">
            <div className="section__content">
            <span className="sub-title">About us</span>
              <h2 className="title mt-12 title-animation">
               Empowering Your Digital Future with Innovation
              </h2>
              <p>
              FlumenX is a digital marketing and web development agency based in Trivandrum, dedicated to transforming
              your business into a digital powerhouse. With a passion for innovation and a commitment to excellence, we craft
              tailored strategies that drive growth, enhance brand visibility, and deliver measurable results. Join us on a
              journey to digital success!
              </p>
            </div>
            <div className="pricing__cta section__cta">
                <a href="/about-us" className="btn btn--secondary">
                  Learn More
                </a>
            </div> 
          </div>
          <div className="col-12 col-md-3 col-lg-4 offset-lg-1 col-xxl-3 offset-xxl-3">
            <div className="s-h-thumb parallax-img img-mobi">
              <Image src={one} alt="Image" priority />
            </div>
          </div>
        </div>
        <div className="row gaper align-items-end">
          <div className="col-12 col-lg-8 col-xxl-9">
            <div className="w-r">
              <div className="s-journey__thumb  parallax-img">
                <Image src={two} alt="Image" className="reveal-img" priority />
              </div>
              {/* <a className="scroll-position-btn" href="/about-us">
                <Image src={framer} alt="Image" priority />
                <i className="bi bi-arrow-down"></i>
              </a> */}
            </div>
          </div>
          <div className="col-12 col-lg-4 col-xxl-3">
            <div className="s-journey__content">
              <div className="counter__single">
                <h2 className="light-title">
                  <span className="odometer">
                    <Counter value={50} />
                  </span>
                  <span className="prefix">+</span>
                </h2>
                <p className="primary-text">Happy Clients</p>
              </div>
              <div className="counter__single">
                <h2 className="light-title">
                  <span className="odometer">
                    <Counter value={3} />
                  </span>
                  <span className="prefix">+</span>
                </h2>
                <p className="primary-text">Years of Business</p>
              </div>
              <div className="counter__single">
                <h2 className="light-title">
                  <span className="odometer">
                    <Counter value={100} />
                  </span>
                  <span className="prefix">%</span>
                </h2>
                <p className="primary-text">Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurJourney;
