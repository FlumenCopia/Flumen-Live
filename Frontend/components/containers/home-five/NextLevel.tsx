import Image from "next/image";
import Link from "next/link";
import Thumb from "@/public/images/next-level-thumb.png";
import Wheel from "@/public/images/wheels.png";

const NextLevel = () => {
  return (
    <section className="section n-level" id="scrollPosition">
      <div className="container">
        <div className="row gaper align-items-center">
          <div className="col-12 col-lg-5">
            <div className="n-level__thumb reveal-img parallax-img dir-rtl ">
              <Image src={Thumb} alt="Image" className="unset display-none2" />
            </div>
          </div>
          <div className="col-12 col-lg-6 offset-lg-1">
            <div className="n-level__content section__content">
            <span className="sub-title" >Who We Are</span>
              {/* <div className="s-thumb">
                <Image src={Wheel} alt="Image" priority />
              </div> */}
              <h2 className="title title-animation">
               Discover Our Story
              </h2>
              <p>
              FlumenX is a forward-thinking digital marketing and web development agency located in Kerala. We are dedicated to
              empowering businesses by harnessing the power of innovative technology and creative strategy. Our approach integrates
              cutting-edge design with data-driven insights to craft customized solutions that not only drive growth but also elevate
              your online presence. </p> 
              <p> From building responsive websites that captivate and engage users to executing comprehensive digital
              marketing campaigns that boost visibility and performance, FlumenX is committed to delivering results that make a
              tangible difference.</p>
              <p> Our team of experts collaborates closely with clients to understand their unique goals and challenges,
              ensuring that every solution we provide is tailored to achieve success in the ever-evolving digital landscape.
              </p>
              <div className="section__content-cta">
                {/* <a href="" className="btn btn--primary">
                  Get Started
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NextLevel;
