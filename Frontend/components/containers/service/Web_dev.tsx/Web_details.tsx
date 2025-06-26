import React from 'react'
import Image from "next/image";
import Link from "next/link";
import poster from "@/public/images/services/service-poster-web.jpg";
import one from "@/public/images/services/web-info-one.png";
import two from "@/public/images/services/web-info-two.png";
import ServiceContact from '../../ServiceContact';

function Web_details() {
  return (
    <div>
        <section className="section py-5 s-details sticky-parent">
      <div className="container">
        <div className="row gaper">
          <div className="col-12 col-lg-8">
            <div className="s-details__content sticky-item">
              <div className="poster poster-img slide-top">
                <Image src={poster} alt="Image" priority />
              </div>
              <div className="text-group slide-top">
                <p>
                Web development is the process of creating and maintaining websites. it is the effort
                done in the background to make a website appear nice, function quickly and provide a
                pleasant experience for the users. We specialize in creating custom websites and applications
                that are tailored to meet your unique needs. We pride ourselves on delivering quality solutions
                to our clients, ensuring their satisfaction and success in this digital world.
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
                Your website is the digital face of your business, and it needs to leave a lasting impression. We specialize in creating dynamic, responsive, and high-performance websites that are tailored to meet your unique business needs.
                </p>
                <p>Our Web Development Services:</p>
                <ol>
                    <li>Ongoing Support & Maintenance: We offer continued maintenance and updates to ensure your website remains secure and up-to-date.</li>
                  <li>
                  Custom Website Design & Development: We craft unique websites that are built specifically to suit your brand and business goals.
                  </li>
                  <li>
                    {" "}
                    E-commerce Solutions: Secure and scalable online stores designed to provide seamless shopping experiences for your customers.
                  </li>
                  <li>
                  Mobile-Friendly Design: Optimized websites that work flawlessly across desktops, tablets, and smartphones.
                  </li>
                  <li>
                  Interactive Features: From contact forms to booking systems, we add interactive elements that engage users and streamline your business processes.
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

export default Web_details