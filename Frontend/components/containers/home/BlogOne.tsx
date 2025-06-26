"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import one from "@/public/images/blog/blog-1.jpg";
import two from "@/public/images/blog/blog-2.jpg";
import three from "@/public/images/blog/blog-3.jpg";

const BlogOne = () => {
  const [isHover, setIsHover] = useState(0);

  return (
    <section className="section blog">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section__header--secondary">
              <div className="row align-items-center gaper">
                <div className="col-12 col-lg-8">
                  <div className="section__header mb-0 text-center text-lg-start">
                    <h2 className="title mt-12 title-animation">
                      Blog
                    </h2>
                    <p> Our blog is your go-to resource for the latest insights, trends, and tips in digital marketing,
                        web development, and design.</p>
                  </div>
                </div>
                <div className="col-12 col-lg-4">
                  <div className="text-center text-lg-end">
                    <a href="blog" className="btn btn--primary">
                      View More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row gaper fade-wrapper">
          <div className="col-12 col-md-6 col-xl-4 fade-top">
            <div
              className={
                "blog__single topy-tilt" +
                (isHover === 0 ? " blog__single-active" : " ")
              }
              onMouseEnter={() => setIsHover(0)}
            >
              <div className="blog__single-thumb">
                <a href="">
                  <Image src={one} alt="Image" priority />
                </a>
              </div>
              <div className="blog__single-content">
                <div className="blog__single-meta">
                  <span>April 18, 2023</span>
                  <a href="">0 Comments</a>
                </div>
                <h4>
                  <a href="">
                  How to Boost Your Brand with Strategic Digital Marketing
                  </a>
                </h4>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-xl-4 fade-top">
            <div
              className={
                "blog__single topy-tilt" +
                (isHover === 1 ? " blog__single-active" : " ")
              }
              onMouseEnter={() => setIsHover(1)}
            >
              <div className="blog__single-thumb">
                <a href="">
                  <Image src={two} alt="Image" priority />
                </a>
              </div>
              <div className="blog__single-content">
                <div className="blog__single-meta">
                  <span>April 18, 2023</span>
                  <a href="">0 Comments</a>
                </div>
                <h4>
                  <a href="">
                  Custom Web Development for Business Growth
                  </a>
                </h4>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-xl-4 fade-top">
            <div
              className={
                "blog__single topy-tilt" +
                (isHover === 2 ? " blog__single-active" : " ")
              }
              onMouseEnter={() => setIsHover(2)}
            >
              <div className="blog__single-thumb">
                <a href="">
                  <Image src={three} alt="Image" priority />
                </a>
              </div>
              <div className="blog__single-content">
                <div className="blog__single-meta">
                  <span>April 18, 2023</span>
                  <a href="">0 Comments</a>
                </div>
                <h4>
                  <a href="">
                  Why Graphic Design Matters for Your Online Success
                  </a>
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogOne;
