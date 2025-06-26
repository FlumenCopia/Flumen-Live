"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import one from "@/public/images/home-seven/dm-seo.jpg";
import two from "@/public/images/home-seven/dm-sem.jpg";
import three from "@/public/images/home-seven/dm-smm.jpg";
import four from "@/public/images/home-seven/dm-email.jpg";
import five from "@/public/images/home-seven/five.png";

export const ExpandServices = () => {
const [isActive, setIsActive] = useState(0);
  return (
    <section className="mt-5 h-s-case hg-i">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-6 col-lg-5">
            <div className="section__header text-center">
              <h2 className="mt-12 title title-animation"> Grow Your Impact </h2>
              <p>
              Elevate Your Brand With Our Advanced Marketing Solutions :
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="h-s-case-wrapper d-flex justify-content-center">
        <div
          className={
            "h-s-case-single" +
            (isActive === 0 ? " h-s-case-single-active" : " ")
          }
          onClick={() => setIsActive(0)}
        >
          <div className="thumb">
            <Image src={one} alt="Image" priority />
          </div>
          <div className="h-case-content">
            <div className="case-title">
              <h2 className="light-title">
                <a href="/services/digital_marketing/seo">SEO</a>
              </h2>
            </div>
            <div className="h-c-continent">
              <p>
              Search Engine Optimization :
                Enhance your website&apos;s visibility on search engines to
                ensure long-term growth and better online discoverability.
              </p>
              <a href="/services/digital_marketing/seo" className="cta">
                <span className="arrow"></span>
              </a>
            </div>
          </div>
        </div>
        <div
          className={
            "h-s-case-single" +
            (isActive === 1 ? " h-s-case-single-active" : " ")
          }
          onClick={() => setIsActive(1)}
        >
          <div className="thumb">
            <Image src={two} alt="Image" priority />
          </div>
          <div className="h-case-content">
            <div className="case-title">
              <h2 className="light-title">
                <a href="/services/digital_marketing/sem">SEM</a>
              </h2>
            </div>
            <div className="h-c-continent">
              <p>
              Search Engine Marketing :
                Boost your online presence with targeted ads on search engines.
                reach the right audience with precision.
              </p>
              <a href="/services/digital_marketing/sem" className="cta">
                <span className="arrow"></span>
              </a>
            </div>
          </div>
        </div>
        <div
          className={
            "h-s-case-single" +
            (isActive === 2 ? " h-s-case-single-active" : " ")
          }
          onClick={() => setIsActive(2)}
        >
          <div className="thumb">
            <Image src={three} alt="Image" priority />
          </div>
          <div className="h-case-content">
            <div className="case-title">
              <h2 className="light-title">
                <a href="/services/digital_marketing/smm">SMM</a>
              </h2>
            </div>
            <div className="h-c-continent">
              <p>
              Social Media Marketing :
                Strengthen your brand identity with creative and engaging social media campaigns 
                and stay connected with your audience.
              </p>
              <a href="/services/digital_marketing/smm" className="cta">
                <span className="arrow"></span>
              </a>
            </div>
          </div>
        </div>
        <div
          className={
            "h-s-case-single" +
            (isActive === 3 ? " h-s-case-single-active" : " ")
          }
          onClick={() => setIsActive(3)}
        >
          <div className="thumb">
            <Image src={four} alt="Image" priority />
          </div>
          <div className="h-case-content">
            <div className="case-title">
              <h2 className="light-title">
                <a href="/services/digital_marketing/email_marketing">EMAIL <br/> MARKETING</a>
              </h2>
            </div>
            <div className="h-c-continent">
              <p>
              Email Marketing :
                Build meaningful relationships and drive engagement with your audience through personalized email campaigns.
                
              </p>
              <a href="/services/digital_marketing/email_marketing" className="cta">
                <span className="arrow"></span>
              </a>
            </div>
          </div>
        </div>
        {/* <div
          className={
            "h-s-case-single" +
            (isActive === 4 ? " h-s-case-single-active" : " ")
          }
          onClick={() => setIsActive(4)}
        >
          <div className="thumb">
            <Image src={five} alt="Image" priority />
          </div>
          <div className="h-case-content">
            <div className="case-title">
              <h2 className="light-title">
                <a href="case-study-single">Manto ai</a>
              </h2>
            </div>
            <div className="h-c-continent">
              <p>
                AI-powered inpainting algorithms seamlessly restore the beauty
                and completeness
              </p>
              <a href="case-study-single" className="cta">
                <span className="arrow"></span>
              </a>
            </div>
          </div>
        </div> */}
      </div>
    </section>

  )
}
export default ExpandServices;