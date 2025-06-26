"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import one from "@/public/images/service-slider/slide-img-1.png";
import two from "@/public/images/service-slider/slide-img-2.png";
import three from "@/public/images/service-slider/slide-img-3.png";
import four from "@/public/images/service-slider/slide-img-4.png";
import five from "@/public/images/service-slider/slide-img-5.png";
import six from "@/public/images/service-slider/slide-img-6.png";
import seven from "@/public/images/service-slider/slide-img-7.png";
import eight from "@/public/images/service-slider/slide-img-8.png";

import Frame from "@/public/images/enquire-frame1.png";

const ServiceSlider = () => {
  const slider = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ele = slider.current;

    if (window.innerWidth >= 992 && ele) {
      gsap.registerPlugin(ScrollTrigger);

      const rightSections = gsap.utils.toArray(".service-slider__item");

      const pin = gsap.to(rightSections, {
        xPercent: -100 * (rightSections.length - 3),
        ease: "none",
        scrollTrigger: {
          trigger: ele,
          pin: true,
          invalidateOnRefresh: true,
          start: "center center-=100",
          scrub: 1,
          end: () => "+=" + (slider.current?.offsetWidth || 0),
          markers: false,
        },
      });

      return () => {
        pin.kill();
      };
    }
  }, []);

  return (
    <div className="service-slider_wrapper" ref={slider}>
      <div className="service-slider">
        <div className="service-slider__item">
          {/* <a href="services"> */}
            <Image src={one} alt="Image" priority />
          {/* </a> */}
        </div>
        <div className="service-slider__item">
          {/* <a href="services"> */}
            <Image src={two} alt="Image" priority />
          {/* </a> */}
        </div>
        <div className="service-slider__item">
          {/* <a href="services"> */}
            <Image src={three} alt="Image" priority />
          {/* </a> */}
        </div>
        <div className="service-slider__item">
          {/* <a href="services"> */}
            <Image src={four} alt="Image" priority />
          {/* </a> */}
        </div>
        <div className="service-slider__item">
          {/* <a href="services"> */}
            <Image src={five} alt="Image" priority />
          {/* </a> */}
        </div>
        <div className="service-slider__item">
          {/* <a href="services"> */}
            <Image src={six} alt="Image" priority />
          {/* </a> */}
        </div>
        <div className="service-slider__item">
          {/* <a href="services"> */}
            <Image src={seven} alt="Image" priority />
          {/* </a> */}
        </div>
        <div className="service-slider__item">
          {/* <a href="services"> */}
            <Image src={eight} alt="Image" priority />
          {/* </a> */}
        </div>
        <div className="service-slider__item">
          <a className="video-frame video-btn" href="services">
            <Image src={Frame} alt="Image" priority />
            <i className="bi bi-arrow-down-right text-white"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ServiceSlider;
