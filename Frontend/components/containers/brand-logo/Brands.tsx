"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";
import One from "@/public/images/partner/loveall_logo.png";
import Two from "@/public/images/partner/creato_logo.webp";
import Three from "@/public/images/partner/l_3.webp";
import Four from "@/public/images/partner/c_4.webp";
import Five from "@/public/images/partner/c17.webp";
import Six from "@/public/images/partner/c18.webp";
import Seven from "@/public/images/partner/c19.webp";
import Eight from "@/public/images/partner/c20.webp";
import Nine from "@/public/images/partner/c21.webp";
import Ten from "@/public/images/partner/c22.webp";
import Eleven from "@/public/images/partner/c23.webp";
import Twelve from "@/public/images/partner/c24.webp";
import Thirteen from "@/public/images/partner/c25.webp";
import Fourteen from "@/public/images/partner/c26.webp";
import Fifteen from "@/public/images/partner/c27.webp";
import Sixteen from "@/public/images/partner/c28.webp";
import Seventeen from "@/public/images/partner/c29.webp";
import Eighteen from "@/public/images/partner/c30.webp";
import Nineteen from "@/public/images/partner/c1.webp";
import Twenty from "@/public/images/partner/c2.webp";
import Twentyone from "@/public/images/partner/c3.webp";
import Twentytwo from "@/public/images/partner/c4.webp";
import Twentythree from "@/public/images/partner/c5.webp";
import Twentyfour from "@/public/images/partner/c6.webp";
import Twentyfive from "@/public/images/partner/c7.webp";
import Twentysix from "@/public/images/partner/c8.webp";
import Twentyseven from "@/public/images/partner/c9.webp";
import Twentyeight from "@/public/images/partner/c10.webp";
import Twentynine from "@/public/images/partner/c11.webp";
import Thirty from "@/public/images/partner/c12.webp";


const Partner = () => {
  const pathname = usePathname();
  const isHomeTwoRoute = pathname === "/index-two";

  return (
    <div className={"partner " + (isHomeTwoRoute ? " pb-0" : " ")}>
      <div className="container" >
        <div className="row justify-content-center">
            <div className="section__header ">
                <h2 className="title sub-title-two ">
                  Our Clients
                </h2>
              <p style={{textAlign:'start'}}>Our clients are at the heart of everything we do. We take pride in collaborating with a diverse range of businesses, helping them achieve their goals through our tailored solutions. From startups to established brands, we are committed to delivering exceptional results that drive growth and success. Explore our valued partnerships and see how we have helped brands thrive in the digital landscape.</p>
            </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="partner-grid-item mb-5 row row-cols-3 row-cols-md-3 row-cols-lg-4 g-4">

              
                <div className="partner__slider-single col ">
                  <Image src={One} alt="Image" priority />
                </div>
              
              
                <div className="partner__slider-single col ">
                  <Image src={Two} alt="Image" priority />
                </div>
              
                <div className="partner__slider-single col ">
                  <Image src={Three} alt="Image" priority />
                </div>
              
                <div className="partner__slider-single col ">
                  <Image src={Four} alt="Image" priority />
                </div>
              
                <div className="partner__slider-single col ">
                  <Image src={Five} alt="Image" priority />
                </div>
              
                <div className="partner__slider-single col ">
                  <Image src={Six} alt="Image" priority />
                </div>
              
                <div className="partner__slider-single col ">
                  <Image src={Seven} alt="Image" priority />
                </div>
              
                <div className="partner__slider-single col ">
                  <Image src={Eight} alt="Image" priority />
                </div>
              
                <div className="partner__slider-single col ">
                  <Image src={Nine} alt="Image" priority />
                </div>
              
                <div className="partner__slider-single col ">
                  <Image src={Ten} alt="Image" priority />
                </div>
              
                <div className="partner__slider-single col ">
                  <Image src={Eleven} alt="Image" priority />
                </div>
              
                <div className="partner__slider-single col ">
                  <Image src={Twelve} alt="Image" priority />
                </div>
              
                <div className="partner__slider-single col ">
                  <Image src={Thirteen} alt="Image" priority />
                </div>
              
                <div className="partner__slider-single col ">
                  <Image src={Fourteen} alt="Image" priority />
                </div>
              
                <div className="partner__slider-single col ">
                  <Image src={Fifteen} alt="Image" priority />
                </div>
              
                <div className="partner__slider-single col ">
                  <Image src={Sixteen} alt="Image" priority />
                </div>
              
                <div className="partner__slider-single col ">
                  <Image src={Seventeen} alt="Image" priority />
                </div>
              
                <div className="partner__slider-single col ">
                  <Image src={Eighteen} alt="Image" priority />
                </div>
             
                <div className="partner__slider-single col ">
                  <Image src={Nineteen} alt="Image" priority />
                </div>
              
                <div className="partner__slider-single col ">
                  <Image src={Twenty} alt="Image" priority />
                </div>
              
                <div className="partner__slider-single col ">
                  <Image src={Twentyone} alt="Image" priority />
                </div>
              
                <div className="partner__slider-single col ">
                  <Image src={Twentytwo} alt="Image" priority />
                </div>
              
                <div className="partner__slider-single col ">
                  <Image src={Twentythree} alt="Image" priority />
                </div>
              
                <div className="partner__slider-single col ">
                  <Image src={Twentyfour} alt="Image" priority />
                </div>
              
                <div className="partner__slider-single col ">
                  <Image src={Twentyfive} alt="Image" priority />
                </div>
             
                <div className="partner__slider-single col ">
                  <Image src={Twentysix} alt="Image" priority />
                </div>
              
                <div className="partner__slider-single col ">
                  <Image src={Twentyseven} alt="Image" priority />
                </div>
              
                <div className="partner__slider-single col ">
                  <Image src={Twentyeight} alt="Image" priority />
                </div>
      
                <div className="partner__slider-single col ">
                  <Image src={Twentynine} alt="Image" priority />
                </div>
              
                <div className="partner__slider-single col ">
                  <Image src={Thirty} alt="Image" priority />
                </div>
              
                
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partner;
