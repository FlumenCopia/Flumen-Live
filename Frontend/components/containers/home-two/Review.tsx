"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";
import One from "@/public/images/t-one.png";
import Two from "@/public/images/t-two.png";
import Three from "@/public/images/t-three.png";

const Review = () => {
  const pathname = usePathname();
  const isAbout = pathname === "/about-us" || pathname === "/services";

  return (
    <section className={`section review ${isAbout ? " lilu-review" : ""}`} >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-5">
            <div className="section__header text-center">
              <span className="sub-title-two">Review</span>
              <h2 className="title title-animation" style={{color:'#57efe0'}}>Our User Review</h2>
              <p>
                AI chatbots can generate analytics and insights on user
                interactions,
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <Swiper
              slidesPerView={1}
              spaceBetween={24}
              slidesPerGroup={1}
              speed={1200}
              loop={true}
              roundLengths={true}
              centeredSlides={false}
              centeredSlidesBounds={false}
              modules={[Autoplay, Pagination]}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              pagination={{
                el: ".review-pagination",
                clickable: true,
              }}
              breakpoints={{
                992: {
                  slidesPerView: 3,
                },
                576: {
                  slidesPerView: 2,
                },
              }}
              className="review__slider"
            >
              <SwiperSlide> 
                <div className="review__slider-single">
                  <p style={{color:'#b1b0b6'}}>
                  FlumenX&apos;s strategic creativity boosted our online presence. Their responsiveness and results make them a top choice for digital marketing.
                  </p>
                  <div className="review__meta">
                    <div className="content">
                      <h5>Rohini Suresh</h5>
                      <p className="tertiary-text" style={{color:'#b1b0b6'}}>Client</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="review__slider-single">
                  <p style={{color:'#b1b0b6'}}>
                  Thanks for the incredible team with an awesome service. Happy to know about such passionate people Really satisfied by your service.
                  </p>
                  <div className="review__meta">
                    <div className="content">
                      <h5>Arya Jayachandran</h5>
                      <p className="tertiary-text" style={{color:'#b1b0b6'}}>Client</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="review__slider-single">
                  <p style={{color:'#b1b0b6'}}>
                  Good service with energetic professionals. I like the branding service. Affordable package.also they custom logos with new ideas.  
                  </p>
                  <div className="review__meta">
                    <div className="content">
                      <h5>Akshay Gopal V J</h5>
                      <p className="tertiary-text" style={{color:'#b1b0b6'}}>Client</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="review__slider-single">
                  <p style={{color:'#b1b0b6'}}>
                  best services for digital marketing.and well experience employees
                  FlumenX is best digital marketing company in trivandrum
                  </p>
                  <div className="review__meta">
                    <div className="content">
                      <h5>Sreejith Sreeju</h5>
                      <p className="tertiary-text" style={{color:'#b1b0b6'}}>Client</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="review__slider-single">
                  <p style={{color:'#b1b0b6'}}>
                  Top digital marketing agency in Kerala. Excellent for website development and lead generation. Highly recommend for online marketing and branding.
                  </p>
                  <div className="review__meta">
                    <div className="content">
                      <h5>Gokul S K</h5>
                      <p className="tertiary-text" style={{color:'#b1b0b6'}}>Client</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="section__cta">
              <div className="slider-pagination-group slider-dots review-pagination d-flex justify-content-center"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Review;
