"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const PricingPlan = () => {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section className="section pricing mb-5 pb-0 fade-wrapper pr-i">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-7 col-xxl-6">
            <div className="section__header text-center">
              <h2 className="title mt-12 title-animation">
              From Concept to Completion
              </h2>
              <p>
                {" "}
                Delivering Unmatched Quality, Driving Results That Matter
              </p>
              {/* <div className="section__content-cta">
                <button
                  aria-label="get monthly price"
                  className={
                    "price-btn monthly-price " +
                    (isYearly ? " " : " price-btn-active")
                  }
                  onClick={() => setIsYearly(false)}
                >
                  Monthly
                </button>
                <button
                  aria-label="get annual price"
                  className={
                    "price-btn yearly-price " +
                    (isYearly ? " price-btn-active" : " ")
                  }
                  onClick={() => setIsYearly(true)}
                >
                  Annually
                </button>
              </div> */}
            </div>
          </div>
        </div>
        <div className="row align-items-start gaper">
          <div className="col-12 col-md-6 col-xl-4">
            <div className="pricing__single topy-tilt fade-top">
              <div className="pricing__intro">
                {/* <span className="primary-text">Free</span> */}
                {isYearly ? (
                  <h2 className="light-title yearly">
                    $0.00
                    <span>/ yearly</span>
                  </h2>
                ) : (
                  // <i className ="fa fa-handshake" style={{color: '#fff'}}></i>
                  
                  <h2 className="light-title-1 monthly" style={{fontSize: '30px'}}>
                  Our Promises<br/>
                  {/* <Image src=""/> */}
                  </h2>
                )}
              </div>
              
              <hr />
              <div className="pricing__content">
                <ul>
                  <li>
                    <i className="material-symbols-outlined">check_circle</i>
                    Innovative solutions tailored to your needs.
                  </li>
                  <li>
                    <i className="material-symbols-outlined">check_circle</i>
                    A dedicated team focused on your success.
                  </li>
                  <li>
                    <i className="material-symbols-outlined">check_circle</i>
                    On-time delivery with meticulous attention to detail.
                  </li>
                  <li>
                    <i className="material-symbols-outlined">check_circle</i>
                    Continuous support to ensure long-term growth.
                  </li>
                </ul>
              </div>
              {/* <div className="pricing__cta section__cta">
                <a href="shop" className="btn btn--secondary">
                  Get started
                </a>
              </div> */}
            </div>
          </div>
          <div className="col-12 col-md-6 col-xl-4">
            <div className="pricing__single pricing__single-active topy-tilt fade-top">
              <div className="pricing__intro">
                {/* <span className="primary-text">Standard</span> */}
                {isYearly ? (
                  <h2 className="light-title yearly">
                    $30.00
                    <span>/ yearly</span>
                  </h2>
                ) : (
                  <h2 className="light-title-1 monthly" style={{fontSize: '30px'}}>
                    Our Objectives
         
                  </h2>
                )}
              </div>
              <hr />
              <div className="pricing__content">
                <ul>
                  <li>
                    <i className="material-symbols-outlined">check_circle</i>
                    Enhance your online presence and visibility.
                  </li>
                  <li>
                    <i className="material-symbols-outlined">check_circle</i>
                    Boost customer engagement with impactful strategies.
                  </li>
                  <li>
                    <i className="material-symbols-outlined">check_circle</i>
                    Deliver measurable outcomes that drive business growth.
                  </li>
                  <li>
                    <i className="material-symbols-outlined">check_circle</i>
                    Build lasting partnerships through trust and collaboration.
                  </li>
                </ul>
              </div>
              {/* <div className="pricing__cta section__cta">
                <a href="shop" className="btn btn--primary">
                  Get started
                </a>
              </div> */}
            </div>
          </div>
          <div className="col-12 col-md-6 col-xl-4">
            <div className="pricing__single topy-tilt fade-top">
              <div className="pricing__intro">
                {/* <span className="primary-text premium">Premium</span> */}
                {isYearly ? (
                  <h2 className="light-title yearly">
                    $50.00
                    <span>/ yearly</span>
                  </h2>
                ) : (
                  <h2 className="light-title-1 monthly" style={{fontSize: '30px'}}>
                     Our Approach
                  </h2>
                )}
              </div>
              <hr />
              <div className="pricing__content">
                <ul>
                  <li>
                    <i className="material-symbols-outlined">check_circle</i>
                    Understanding your unique goals and challenges.
                  </li>
                  <li>
                    <i className="material-symbols-outlined">check_circle</i>
                    Crafting tailored strategies with data-driven insights.
                  </li>
                  <li>
                    <i className="material-symbols-outlined">check_circle</i>
                    Implementing innovative solutions with precision.
                  </li>
                  <li>
                    <i className="material-symbols-outlined">check_circle</i>
                    Tracking and optimizing for continuous improvement.
                  </li>
                </ul>
              </div>
              {/* <div className="pricing__cta section__cta">
                <a href="shop" className="btn btn--secondary">
                  Get started
                </a>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingPlan;
