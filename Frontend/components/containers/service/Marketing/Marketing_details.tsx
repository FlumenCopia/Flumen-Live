import React from 'react'
import Image from "next/image";
import Link from "next/link";
import poster from "@/public/images/services/dm-posters-one.png";
import one from "@/public/images/services/dm-info-one.png";
import two from "@/public/images/services/dm-info-two.png";
import ServiceContact from '../../ServiceContact';

function Marketing_details() {
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
                Partnering with FlumenCopia will maximize the potential of digital marketing like no other in the market. 
                From the moment you work with us, you&apos;ll notice the change. Our dedicated team will conduct a comprehensive
                analysis to help you identify areas where your business can grow. <br/></p>
                <p>We pride ourselves on our open communication 
                channels and standard operating procedures, which ensure you receive frequent marketing updates.In todays ever-changing
                market, it&apos;s crucial to reach out to new customers and clients. Building a professional online presence is one of the
                best ways to connect with them.
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
                Reach your target audience and grow your business with our comprehensive digital marketing solutions.
                 We deliver tailored strategies to enhance your online visibility and drive measurable results.
                </p>
                <ol>
                  <li>
                  Content Marketing: Engaging blogs, videos, and infographics to attract and retain your audience.
                  </li>
                  <li>
                    {" "}
                    Social Media Marketing: Build your brand on platforms like Facebook, Instagram, and LinkedIn.
                  </li>
                  <li>
                  Analytics & Reporting: Data-driven insights to optimize your marketing strategies.
                  </li>
                  <li>
                  Customized strategies tailored to your business goals.
                  </li>
               <li>
                    Proven track record of increasing engagement and ROI.
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

export default Marketing_details