"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import one from "@/public/images/home-seven/one.png";
import two from "@/public/images/home-seven/two.png";
import three from "@/public/images/home-seven/three.png";
import four from "@/public/images/home-seven/four.png";
import five from "@/public/images/home-seven/five.png";

const CaseStudySeven = () => {
  const [isActive, setIsActive] = useState(0);
  return (
    <section className="section h-s-case hg-i">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-6 col-lg-5">
            <div className="section__header text-center">
              <h2 className="mt-12 title title-animation">Related</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="h-s-case-wrapper">
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
                <a href="case-study-single">Ai Club x</a>
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
                <a href="case-study-single">Robo x pro</a>
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
                <a href="case-study-single">Chatbot</a>
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
                <a href="case-study-single">Soal xp</a>
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
        </div>
        <div
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
        </div>
      </div>
    </section>
  );
};

export default CaseStudySeven;
