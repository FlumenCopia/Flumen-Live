"use client";
import { useState, SetStateAction } from "react";
import Image from "next/image";
import Link from "next/link";
import one from "@/public//images/category/one.png";
import two from "@/public//images/category/two.png";
import three from "@/public//images/category/three.png";
import four from "@/public//images/category/four.png";


function ImgStrip() {
  return (
    <div>
          <div className="row gaper fade-wrapper category">
          <div className="col-12 col-sm-6 col-lg-3">
            <div className="category-overview__single fade-top">
              <a href="shop">
                <span>Ai</span>
                <Image src={one} alt="Images" priority />
              </a>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-lg-3">
            <div className="category-overview__single fade-top">
              <a href="shop">
                <span>3D</span>
                <Image src={two} alt="Images" priority />
              </a>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-lg-3">
            <div className="category-overview__single fade-top">
              <a href="shop">
                <span>Stock</span>
                <Image src={three} alt="Images" priority />
              </a>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-lg-3">
            <div className="category-overview__single fade-top">
              <a href="shop">
                <span>Logos</span>
                <Image src={four} alt="Images" priority />
              </a>
            </div>
          </div>
        </div>
    </div>
  )
}

export default ImgStrip