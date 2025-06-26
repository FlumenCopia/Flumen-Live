"use client";
import { useState } from "react";
import Image from "next/image";
import one from "@/public/images/overview/overview-img-1.png";
import two from "@/public/images/overview/overview-img-2.png";
import three from "@/public/images/overview/overview-img-3.png";
import four from "@/public/images/overview/overview-img-4.png";

const AboutTool = () => {
  const [isHover, setIsHover] = useState(0);
  return (
    <section className=" overview lilu-view" style={{marginBottom:'10%'}}>
      <div className="container">
        <div className="row gaper align-items-center">
          <div className="col-12 col-lg-5 col-xxl-5">
            <div className="section__content">
              <span className="sub-title">Our Specialities</span>
              <h2 className="title title-animation">
              What Makes Us Unique
              </h2>
              <p style={{color:'black'}}>
              At FLUMENCOPIA, we believe that exceptional results come from a unique approach. Here is what sets us apart in the world of digital marketing and web development:
              </p>
            </div>
          </div>
          <div className="col-12 col-lg-7 col-xxl-6 offset-xxl-1 fade-wrapper">
            <div className="row gaper">
              <div className="col-12 col-md-6 fade-top">
                <div
                  className={
                    "overview__single" +
                    (isHover === 0 ? " overview__single-active" : " ")
                  }
                  onMouseEnter={() => setIsHover(0)}
                >
                  <div className="overview__thumb">
                    <Image src={one} alt="Image" priority />
                  </div>
                  <div className="overview__content">
                    <h4>Tailored Solutions</h4>
                    <p className="tertiary-text">
                    We craft customized strategies and solutions designed to meet the unique needs and goals of each client,
                    ensuring maximum impact and effectiveness.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 fade-top">
                <div
                  className={
                    "overview__single" +
                    (isHover === 1 ? " overview__single-active" : " ")
                  }
                  onMouseEnter={() => setIsHover(1)}
                >
                  <div className="overview__thumb">
                    <Image src={two} alt="Image" priority />
                  </div>
                  <div className="overview__content">
                    <h4>Cutting-Edge Technology</h4>
                    <p className="tertiary-text">
                    We use the latest tools and technologies to deliver innovative solutions that keep your business competitive.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 fade-top">
                <div
                  className={
                    "overview__single" +
                    (isHover === 2 ? " overview__single-active" : " ")
                  }
                  onMouseEnter={() => setIsHover(2)}
                >
                  <div className="overview__thumb">
                    <Image src={three} alt="Image" priority />
                  </div>
                  <div className="overview__content">
                    <h4>Creative Excellence</h4>
                    <p className="tertiary-text">
                    Our creative team delivers stunning designs and compelling content that resonate with your audience.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 fade-top">
                <div
                  className={
                    "overview__single" +
                    (isHover === 3 ? " overview__single-active" : " ")
                  }
                  onMouseEnter={() => setIsHover(3)}
                >
                  <div className="overview__thumb">
                    <Image src={four} alt="Image" priority />
                  </div>
                  <div className="overview__content">
                    <h4>Rapid Response Time</h4>
                    <p className="tertiary-text">
                    We ensure quick, efficient, and timely project completion without compromising on quality.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutTool;
