"use client";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";

const TextSliderGenerator = () => {
  return (
    <section className="text-slider-large-wrapper  pb-0">
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
        className="text-slider-large"
      >
        <SwiperSlide>
          <div className="text-slider__single">
            <h2 className="large-title">
              <a href="services">
                Unlock
                <span className="text-stroke" data-text="Potential">
                  {" "}
                  Potential
                </span>
              </a>
            </h2> 
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="text-slider__single">
            <h2 className="large-title">
              <a href="services">
              Unlock
                <span className="text-stroke" data-text="Potential">
                  {" "}
                  Potential
                </span>
              </a>
            </h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="text-slider__single">
            <h2 className="large-title">
              <a href="services">
                Unlock
                <span className="text-stroke" data-text="Potential">
                  {" "}
                  Potential
                </span>
              </a>
            </h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="text-slider__single">
            <h2 className="large-title">
              <a href="services">
                Unlock
                <span className="text-stroke" data-text="Potential">
                  {" "}
                  Potential
                </span>
              </a>
            </h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="text-slider__single">
            <h2 className="large-title">
              <a href="services">
                Unlock
                <span className="text-stroke" data-text="Potential">
                  {" "}
                  Potential
                </span>
              </a>
            </h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="text-slider__single">
            <h2 className="large-title">
              <a href="services">
                Unlock
                <span className="text-stroke" data-text="Potential">
                  {" "}
                  Potential
                </span>
              </a>
            </h2>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default TextSliderGenerator;
