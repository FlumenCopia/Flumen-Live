import React from 'react'
import Image from "next/image";
import Link from "next/link";
import poster from "@/public/images/services/service-poster-design.jpg";
import one from "@/public/images/services/design-info-one.jpg";
import two from "@/public/images/services/design-info-two.jpg";
import ServiceContact from '../../ServiceContact';

function Design_details() {
  return (
    <div>
        <section className="section s-details sticky-parent">
      <div className="container">
        <div className="row gaper">
          <div className="col-12 col-lg-8">
            <div className="s-details__content sticky-item">
              <div className="poster poster-img slide-top">
                <Image src={poster} alt="Image" priority />
              </div>
              <div className="text-group slide-top">
                <p>
                Designs That Speak Volumes. <br/>
                We believe that great design is the foundation of powerful communication. Our graphic
                design services are tailored to elevate your brand, create lasting impressions, and effectively convey your
                message. From concept to creation, we deliver visuals that captivate and inspire.
                </p>
              </div>
              {/* <div className="text-group slide-top">
                <h4>AI image generation techniques can also fill in missing</h4>
                <p>
                  where dreams and reality intertwine to create surreal and
                  mesmerizing visuals. And when it comes to filling in missing
                  or damaged parts of images, our AI-powered inpainting
                  algorithms seamlessly restore the beauty and completeness of
                  your pictures.
                </p>
                <p>
                  And when it comes to filling in missing or damaged parts of
                  images, our AI-powered inpainting algorithms seamlessly
                  restore the beauty and completeness of your pictures.
                </p>
              </div> */}
              <div className="img-group fade-wrapper">
                <div className="poster-img mb-0 fade-top">
                  <Image src={one} alt="Image" priority />
                </div>
                <div className="poster-img mb-0 fade-top">
                  <Image src={two} alt="Image" priority />
                </div>
              </div>

              <div className="text-group slide-top">
              <p>
                Our designs combine innovation and strategy to resonate with your audience.
                We customize every design to reflect your unique brand identity.
                From print to digital, we cover all your graphic design needs under one roof.
                We ensure every element, from colors to typography, aligns with your vision.
              </p>
                <p> Services we offer:</p>
                <ol>
                <li>
                    Brand Identity Design:
                    Craft a unique and cohesive brand presence with custom logos, color palettes, typography, and more.
                </li>

                <li>Marketing Collateral:
                    Boost your campaigns with stunning brochures, flyers, posters, and other print and digital materials.
                </li>

                <li>
                    Social Media Graphics: Create eye-catching visuals for social media platforms, from posts and banners to story templates.
                </li>
    
                <li>
                    Website and App Design: Enhance user experience with visually appealing layouts and graphics for websites and mobile applications.
                </li>
    
                <li>
                    Infographics and Illustrations: Simplify complex ideas with engaging infographics and custom illustrations tailored to your needs.
                </li>

                    </ol>
                  </div>
            </div>
          </div>
          
          <div className="col-12 col-lg-4">
            <div className="s-details__sidebar sticky-item">
              <div className="s-details-single text-center slide-top sb-i">
                <h3 className="fw-7 text-white">Get the Service</h3>
                <div className="section__content-cta">
                  <a href="/contact-us" className="btn btn--primary">
                    Get Started
                  </a>
                </div>
              </div>

             <ServiceContact/>

            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default Design_details