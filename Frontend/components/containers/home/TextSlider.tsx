"use client";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";
import Star from "@/public/images/star.png";

const TextSlider = () => {
  return (
    <section className="text-slider-wrapper">
      <Swiper
        slidesPerView="auto"
        spaceBetween={24}
        speed={10000}
        loop={true}
        centeredSlides={false}
        modules={[Autoplay]}
        autoplay={{
          delay: 1,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        className="text-slider"
      >
        <SwiperSlide>
          <div className="text-slider__single">
          <Image src={Star} alt="Image" priority />
            <h2 className="light-title text-animate">
              <span >Click</span>
            </h2>
            <Image src={Star} alt="Image" priority />
            <h2 className="light-title text-animate">
              <span  className="text-stroke" data-text="Engage">
                Engage
              </span>
            </h2>
            <Image src={Star} alt="Image" priority />
            <h2 className="light-title text-animate">
              <span >Grow</span>
            </h2>
          </div>
        </SwiperSlide>


        <SwiperSlide>
          <div className="text-slider__single">
          <Image src={Star} alt="Image" priority />
            <h2 className="light-title text-animate">
              <span  className="text-stroke" data-text="Click">
                Click
              </span>
            </h2>
            <Image src={Star} alt="Image" priority />
            <h2 className="light-title text-animate">
              <span >Engage</span>
            </h2>
            <Image src={Star} alt="Image" priority />
            <h2 className="light-title text-animate">
              <span  className="text-stroke" data-text="Grow">
                Grow
              </span>
            </h2>
          </div>
        </SwiperSlide>
        
        <SwiperSlide>
          <div className="text-slider__single">
          <Image src={Star} alt="Image" priority />
            <h2 className="light-title text-animate">
              <span >Click</span>
            </h2>
            <Image src={Star} alt="Image" priority />
            <h2 className="light-title text-animate">
              <span  className="text-stroke" data-text="Engage">
                Engage
              </span>
            </h2>
            <Image src={Star} alt="Image" priority />
            <h2 className="light-title text-animate">
              <span >Grow</span>
            </h2>
          </div>
        </SwiperSlide>


        <SwiperSlide>
          <div className="text-slider__single">
          <Image src={Star} alt="Image" priority />
            <h2 className="light-title text-animate">
              <span  className="text-stroke" data-text="Click">
                Click
              </span>
            </h2>
            <Image src={Star} alt="Image" priority />
            <h2 className="light-title text-animate">
              <span >Engage</span>
            </h2>
            <Image src={Star} alt="Image" priority />
            <h2 className="light-title text-animate">
              <span  className="text-stroke" data-text="Grow">
                Grow
              </span>
            </h2>
          </div>
        </SwiperSlide>

      </Swiper>
    </section>
  );
};

export default TextSlider;
