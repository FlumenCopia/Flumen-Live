"use client";

import Image from "next/image";
import DesktopBanner from "@/public/images/flumenxbanner.webp";
import MobileBanner from "@/public/images/flumenx-mobilebanner.webp";

const HomeBanner = () => {
  return (
    <section className="home-banner-wrapper">
      <a href="/about-us" aria-label="About us">
        <picture>
          {/* Mobile Banner */}
          <source
            media="(max-width: 768px)"
            srcSet={MobileBanner.src}
          />

          {/* Desktop Banner */}
          <Image
            src={DesktopBanner}
            alt="Home Banner"
            fill
            priority
            quality={90}
            sizes="100vw"
            style={{ objectFit: "cover" }}
          />
        </picture>
      </a>
    </section>
  );
};

export default HomeBanner;
