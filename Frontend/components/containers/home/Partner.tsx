"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";
import Five from "@/public/images/partner/c17.webp";
import Six from "@/public/images/partner/c18.webp";
import Seven from "@/public/images/partner/c19.webp";
import Nine from "@/public/images/partner/c21.webp";
import Thirteen from "@/public/images/partner/c25.webp";
import Fourteen from "@/public/images/partner/c26.webp";
import Fifteen from "@/public/images/partner/c27.webp";
import Seventeen from "@/public/images/partner/c29.webp";

import Link from "next/link";

const Partner = () => {
  const pathname = usePathname();
  const isHomeTwoRoute = pathname === "/index-two";

  return (
    <div className={"mt-5 mb-2 pb-2 partner" + (isHomeTwoRoute ? " pb-0" : " ")} >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-5">
            <div className="section__header text-center">
              <h2 className="title sub-title-two mt-0 title-animation">
                Our Clients
              </h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="partner-grid-item row row-cols-3 row-cols-md-3 row-cols-lg-4 g-4">

              
                <div className="partner__slider-single col mb-3">
                  <Image src={Nine} alt="Image" priority />
                </div>
              
              
                <div className="partner__slider-single col mb-3">
                  <Image src={Seventeen} alt="Image" priority />
                </div>
              
                <div className="partner__slider-single col mb-3">
                  <Image src={Thirteen} alt="Image" priority />
                </div>
              
                <div className="partner__slider-single col mb-3">
                  <Image src={Fourteen} alt="Image" priority />
                </div>
              
                <div className="partner__slider-single col mb-3">
                  <Image src={Five} alt="Image" priority />
                </div>
              
                <div className="partner__slider-single col mb-3">
                  <Image src={Fifteen} alt="Image" priority />
                </div>
              
                <div className="partner__slider-single col mb-3">
                  <Image src={Six} alt="Image" priority />
                </div>
              
                <div className="partner__slider-single col mb-3">
                  <Image src={Seven} alt="Image" priority />
                </div>
            
            </div>
          </div>
        </div>
      </div>
      <div className="section__content-cta" style={{display:'flex', justifyContent:'center', marginTop:'75px'}}>
        <a href="/clients" className="btn btn--primary">
         Showcase More
        </a>
     </div>
    </div>
  );
};

export default Partner;
