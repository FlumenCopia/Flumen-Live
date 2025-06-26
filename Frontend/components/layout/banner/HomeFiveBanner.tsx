"use client";
import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Thumb from "@/public/images/banner/about-bg-img2.png";
import smThumb from "@/public/images/banner/about-1-2.png";
import Frame from "@/public/images/frames-one.png";

const HomeFiveBanner = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const deviceWidth = window.innerWidth;

    if (deviceWidth >= 768) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".banner-five",
          start: "top top",
          end: "+=20%",
          scrub: 1,
          pin: false,
        },
      });

      tl.to(".banner__five-content h1", {
        y: "390px",
        scale: 1.5,
        zIndex: -1,
        opacity: "0.2",
        duration: 3,
      });

      tl.to(
        ".banner__five-content img",
        {
          scale: 1.3,
          duration: 2,
        },
        0
      );

      tl.to(
        ".b-f-s-thumb",
        {
          y: "-200px",
          duration: 2,
        },
        0
      );
    }
  }, []);

  return (
    <section className="banner-five">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="banner__five-content">
              <h1 className="title-animation">DIGITAL EXCELLENCE</h1>
              <div className="banner-five__thumb text-center">
                <Image src={Thumb} alt="Image" priority />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="b-five-wrapper">
        <Swiper
          slidesPerView="auto"
          spaceBetween={24}
          speed={8000}
          loop={true}
          centeredSlides={false}
          modules={[Autoplay]}
          autoplay={{
            delay: 1,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          className="b-text-slider"
        >
          <SwiperSlide>
            <div className="single">
              <p className="l-t">ABOUT US</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="single">
              <p className="l-t">ABOUT US</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="single">
              <p className="l-t">ABOUT US</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="single">
              <p className="l-t">ABOUT US</p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      
      <div className="b-f-s-thumb">
        <Image src={smThumb} alt="Image" priority />
      </div>
      <a className="scroll-position-btn" href="#scrollPosition">
        <Image src={Frame} alt="Image" priority />
        <i className="bi bi-arrow-down"></i>
      </a>
    </section>
  );
};

export default HomeFiveBanner;
