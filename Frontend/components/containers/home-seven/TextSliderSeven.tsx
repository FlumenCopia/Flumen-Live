"use client";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";

const TextSliderSeven = () => {
  return (
    <div className="h-seven-text-wrapper my-5">
      <div className="text-slider-large-wrapper">
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
              <h2 className="large-title" style={{color:'var(--primary-color)'}}>
                {/* <a href="services"> */}
                Trusted
                  <span className="text-stroke" data-text="Partners">
                    {" "}
                    Partners
                  </span>
                {/* </a> */}
              </h2>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="text-slider__single">
              <h2 className="large-title" style={{color:'var(--primary-color)'}}>
                {/* <a href="services"> */}
                Client
                  <span className="text-stroke" data-text="Success">
                    {" "}
                    Success
                  </span>
                {/* </a> */}
              </h2>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="text-slider__single">
              <h2 className="large-title" style={{color:'var(--primary-color)'}}>
                {/* <a href="services"> */}
                Trusted
                  <span className="text-stroke" data-text="Partners">
                    {" "}
                    Partners
                  </span>
                {/* </a> */}
              </h2>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="text-slider__single">
              <h2 className="large-title" style={{color:'var(--primary-color)'}}>
                {/* <a href="services"> */}
                Client
                  <span className="text-stroke" data-text="Success">
                    {" "}
                    Success
                  </span>
                {/* </a> */}
              </h2>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="text-slider__single">
              <h2 className="large-title" style={{color:'var(--primary-color)'}}>
                {/* <a href="services"> */}
                Trusted
                  <span className="text-stroke" data-text="Partners">
                    {" "}
                    Partners
                  </span>
                {/* </a> */}
              </h2>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="text-slider__single">
              <h2 className="large-title" style={{color:'var(--primary-color)'}}>
                {/* <a href="services"> */}
                Client
                  <span className="text-stroke" data-text="Success">
                    {" "}
                    Success
                  </span>
                {/* </a> */}
              </h2>
            </div>
          </SwiperSlide>
        </Swiper>
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
            reverseDirection: true,
          }}
          className="text-slider-large-rtl"
        >
          <SwiperSlide>
            <div className="text-slider__single">
              <h2 className="large-title" style={{color:'var(--primary-color)'}}>
                {/* <a href="services"> */}
                Featured
                  <span className="text-stroke" data-text="Brands">
                    {" "}
                    Brands
                  </span>
                {/* </a> */}
              </h2>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="text-slider__single">
              <h2 className="large-title" style={{color:'var(--primary-color)'}}>
                {/* <a href="services"> */}
                Successful
                  <span className="text-stroke" data-text="Partnerships">
                    {" "}
                    Partnerships
                  </span>
                {/* </a> */}
              </h2>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="text-slider__single">
              <h2 className="large-title" style={{color:'var(--primary-color)'}}>
                {/* <a href="services"> */}
                Featured
                  <span className="text-stroke" data-text="Brands">
                    {" "}
                    Brands
                  </span>
                {/* </a> */}
              </h2>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="text-slider__single">
              <h2 className="large-title" style={{color:'var(--primary-color)'}}>
                {/* <a href="services"> */}
                Successful
                  <span className="text-stroke" data-text="Partnerships">
                    {" "}
                    Partnerships
                  </span>
                {/* </a> */}
              </h2>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="text-slider__single">
              <h2 className="large-title" style={{color:'var(--primary-color)'}}>
                {/* <a href="services"> */}
                Featured
                  <span className="text-stroke" data-text="Brands">
                    {" "}
                    Brands
                  </span>
                {/* </a> */}
              </h2>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="text-slider__single">
              <h2 className="large-title" style={{color:'var(--primary-color)'}}>
                {/* <a href="services"> */}
                Successful
                  <span className="text-stroke" data-text="Partnerships">
                    {" "}
                    Partnerships
                  </span>
                {/* </a> */}
              </h2>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default TextSliderSeven;
