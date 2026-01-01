import React from 'react'
import Image from "next/image";
import Link from "next/link";
import poster from "@/public/images/services/service-poster-video.jpg";
import one from "@/public/images/services/video-info-one.jpg";
import two from "@/public/images/services/video-info-two.jpg";
import ServiceContact from '../../ServiceContact';

function Video_details() {
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
                Bring Your Vision to Life with Professional Video Production.
                At FlumenX, we specialize in creating high-quality, impactful videos that capture attention and
                tell your story. Whether it&apos;s promotional content, corporate storytelling, or event coverage, our team
                ensures every frame reflects your brand&apos;s essence.
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
                
                <p>Our Video Production Services Include:</p>
                <ol>
                    <li>Concept Development: From brainstorming creative ideas to crafting compelling storylines, we help you
                         bring your vision to life.</li>
                  <li>Pre-Production Planning: Custom Website Design & Development: We meticulously plan every detail,
                    from scriptwriting and storyboarding to location scouting and scheduling, ensuring a seamless production process.</li>
                  <li>{" "}Diverse Content Creation:
                    Whether it&apos;s brand promos, social media ads, product showcases, or corporate videos, we tailor each
                    project to your unique goals.</li>
                    <li>Creative Excellence: We combine storytelling expertise with technical precision to deliver videos that resonate.</li>
                    <li>Customized Solutions: Every video is crafted to align with your brand identity and target audience.</li>
                    <li>Timely Delivery: Our efficient process ensures your projects are delivered on schedule without compromising quality.</li>

                  
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

export default Video_details