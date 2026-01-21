"use client";
import Image from "next/image";
import BannerImg from "@/public/images/flumenxbanner.webp"; 

const HomeBanner = () => {
  return (
    <div style={{ position: 'relative', width: '100%', height: '100vh', overflow: 'hidden' }}>
      <a href="/about-us">
        <Image 
          src={BannerImg} 
          alt="Banner Image" 
          fill
          priority
          style={{ objectFit: "cover" }}
          quality={100}
        />
      </a>
    </div>
  );
};

export default HomeBanner;