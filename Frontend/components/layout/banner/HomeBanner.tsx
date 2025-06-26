"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import One from "@/public/images/banner/large-slider/slider-one.06f4884d.jpg";
import Two from "@/public/images/banner/large-slider/slider-two.bf775e97.jpg";
import Three from "@/public/images/banner/large-slider/slider-three.b7c7765a.jpg";
import Four from "@/public/images/banner/large-slider/slider-four.930d33f7.jpg";
import Five from "@/public/images/banner/large-slider/slider-five.c86d99cc.jpg";
import SmOne from "@/public/images/banner/small-slider/sm-slider-one.jpg";
import SmTwo from "@/public/images/banner/small-slider/sm-slider-two.jpg";
import SmThree from "@/public/images/banner/small-slider/sm-slider-three.jpg";
import SmFour from "@/public/images/banner/small-slider/sm-slider-four.jpg";
import SmFive from "@/public/images/banner/small-slider/sm-slider-five.jpg";
import ThumbOne from "@/public/images/banner/mini-image-home.jpg";
import Frame from "@/public/images/enquire-frame1.png";
import SidebarCart from "../header/SidebarCart";
import { inherits } from "util";


const HomeBanner = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleCart = () => {
    setIsCartOpen(true);
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const deviceWidth = typeof window !== 'undefined' ? window.innerWidth : 0;
    
    if (deviceWidth >= 768) {
      const bannerElement = document.querySelector('.banner');
      if (bannerElement) {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: bannerElement,
            start: 'top top',
            end: '+=40%',
            scrub: 1,
            pin: false,
          },
        });

        tl.to('.banner-thumb-one img', {
          transform: 'rotate(14deg)',
          x: '300px',
          opacity: 1,
          duration: 3,
        });

        tl.to('.banner .banner-anime', {
          '--transformY': '300px',
          opacity: 0,
          duration: 3,
        });
      }
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  useEffect(() => {
    const parentItems = document.querySelectorAll('.navbar__item--has-children');
    
    parentItems.forEach(parentItem => {
      const childItems = parentItem.querySelectorAll('.active-sub');
      if (childItems.length > 0) {
        parentItem.classList.add('active-parent');
      }
    });
  }, []);

  return (
    <section className="banner bg-img">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-sm-8 col-md-7 col-lg-7 col-xxl-6">
            <div className="banner__content text-center">
              <h1 className="">
                Elevate Your<span>Brand</span> With{" "}
                <span className="banner-anime .outline-title" style={{color:'#116265', }}>Flumencopia</span>
              </h1>
            </div>
          </div>
        </div>
      </div>
      <Swiper
        slidesPerView="auto"
        spaceBetween={24}
        speed={5000}
        loop={true}
        centeredSlides={false}
        modules={[Autoplay]}
        autoplay={{
          delay: 1,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
          reverseDirection: false,
        }}
        className="banner__large-slider"
      >
        <SwiperSlide>
          <div className="banner__large-slider__single">
            <Image src={One} alt="Image" priority />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="banner__large-slider__single">
            <Image src={Two} alt="Image" priority />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="banner__large-slider__single">
            <Image src={Three} alt="Image" priority />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="banner__large-slider__single">
            <Image src={Four} alt="Image" priority />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="banner__large-slider__single">
            <Image src={Five} alt="Image" priority />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="banner__large-slider__single">
            <Image src={One} alt="Image" priority />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="banner__large-slider__single">
            <Image src={Two} alt="Image" priority />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="banner__large-slider__single">
            <Image src={Three} alt="Image" priority />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="banner__large-slider__single">
            <Image src={Four} alt="Image" priority />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="banner__large-slider__single">
            <Image src={Five} alt="Image" priority />
          </div>
        </SwiperSlide>
      </Swiper>
      <Swiper
        slidesPerView={1}
        spaceBetween={24}
        speed={20000}
        loop={true}
        centeredSlides={false}
        modules={[Autoplay]}
        autoplay={{
          delay: 1,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
          reverseDirection: true,
        }}
        className="banner__small-slider"
      >
        <SwiperSlide>
          <div className="banner__small-slider__single">
            <Image src={SmOne} alt="Image" priority />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="banner__small-slider__single">
            <Image src={SmTwo} alt="Image" priority />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="banner__small-slider__single">
            <Image src={SmThree} alt="Image" priority />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="banner__small-slider__single">
            <Image src={SmFour} alt="Image" priority />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="banner__small-slider__single">
            <Image src={SmFive} alt="Image" priority />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="banner__small-slider__single">
            <Image src={SmOne} alt="Image" priority />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="banner__small-slider__single">
            <Image src={SmTwo} alt="Image" priority />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="banner__small-slider__single">
            <Image src={SmThree} alt="Image" priority />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="banner__small-slider__single">
            <Image src={SmFour} alt="Image" priority />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="banner__small-slider__single">
            <Image src={SmFive} alt="Image" priority />
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="banner-thumb-one">
        <Image src={ThumbOne} alt="Image" priority />
      </div>

      <button onClick={handleCart}>
        <div className="scroll-position-btn">
          <Image src={Frame} alt="Image" priority />
          <a href={"/contact-us"}><i className="fa fa-envelope scroll-btn-home" style={{  color:'#116265'}}></i> </a>
        </div>
      </button>
      {/* <SidebarCart isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen} /> */}
    </section>
  );
};

export default HomeBanner;
