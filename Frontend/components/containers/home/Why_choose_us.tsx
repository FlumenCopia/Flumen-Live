"use client";
import { useState } from "react";
import Image from "next/image";
import one from "@/public/images/overview/overview-img-1.png";
import two from "@/public/images/overview/overview-img-2.png";
import three from "@/public/images/overview/overview-img-3.png";
import four from "@/public/images/overview/overview-img-4.png";
import five from "@/public/images/overview/overview-img-5.png";
import six from "@/public/images/overview/overview-img-6.png";



const Demo = () => {
    const [isHover, setIsHover] = useState(0);

  return (
    <>
      <section className="m-3 overview case-details">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="case-details__inner">
                <div className="case-details__content sticky-parent">
                  <div className="row gaper ">
                    <div className="col-12 col-lg-6">

                      <div className="section__content sticky-item section-padding">

                      <h3 className="title title-animation" >
              Why choose FlumenCopia as your <span style={{color:'#116265'}}>Digital Marketing</span> agency?
              </h3>
              <p style={{color:'black'}}>
              At Flumencopia, we are passionate about helping your business thrive in the digital world. Although we are newer
              to the industry, our dedicated team brings fresh ideas and innovative solutions to every project. We combine
              creativity, technology, and strategic thinking to deliver results that make a difference. Our client-centric approach ensures 
              hat each project is personalized to meet your unique needs and goals.
              </p>
                    
                      </div>
                    </div>
                    <div className="col-12 col-lg-6">
                      <div className="case-d-content-right sticky-item">
                        
                       {/* row starts */}
            <div className="row gaper">
              
              {/* col-1 start */}
              <div className="col-12 col-md-6 fade-top">
                
                <div
                  className={
                    "mb-5 overview__single" +
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
                    We craft customized strategies and solutions designed to meet the unique needs and goals of each client, ensuring maximum impact and effectiveness.
                    </p>
                  </div>
                </div>
          
                <div
                  className={
                    "mb-5 overview__single" +
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

                <div
                  className={
                    " overview__single" +
                    (isHover === 2 ? " overview__single-active" : " ")
                  }
                  onMouseEnter={() => setIsHover(2)}
                >
                  <div className="overview__thumb">
                    <Image src={five} alt="Image" priority />
                  </div>
                  <div className="overview__content">
                    <h4>Customer-Centric Approach</h4>
                    <p className="tertiary-text">
                    We use the latest tools and technologies to deliver innovative solutions that keep your business competitive.
                    </p>
                  </div>
                </div>
              </div>
              {/* col-1 ends */}



              {/* col-2 start */}
              <div className="col-12 col-md-6 fade-top top-margin">

                <div
                  className={
                    "mb-5 overview__single" +
                    (isHover === 3 ? " overview__single-active" : " ")
                  }
                  onMouseEnter={() => setIsHover(3)}
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
        
                <div
                  className={
                    "mb-5 overview__single" +
                    (isHover === 4 ? " overview__single-active" : " ")
                  }
                  onMouseEnter={() => setIsHover(4)}
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

                <div
                  className={
                    "overview__single" +
                    (isHover === 5 ? " overview__single-active" : " ")
                  }
                  onMouseEnter={() => setIsHover(5)}
                >
                  <div className="overview__thumb">
                    <Image src={six} alt="Image" priority />
                  </div>
                  <div className="overview__content">
                    <h4>Proven Track Record</h4>
                    <p className="tertiary-text">
                    Trusted by countless clients for consistently delivering successful results.
                    </p>
                  </div>
                </div>
              {/* col- 2 ends */}

            </div>
            {/* row ends */}

            </div>
                     
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div>
        <div className="container">
          <hr className="horizon" />
        </div>
      </div>
    </>
  );
};

export default Demo;