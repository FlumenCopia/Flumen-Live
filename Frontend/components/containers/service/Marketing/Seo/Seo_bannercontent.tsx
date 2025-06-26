import Image from "next/image";
import Link from "next/link";
import bannerThumb from "@/public/images/banner/seo-image-one.png";
import Frame from "@/public/images/frame-three.png";


const Seo_bannercontent = () => {
  return (
    <section className="banner-two banner-seo">
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-10 col-lg-6">
          <div className="banner-two__content">
            <h1 className="title-animation">
               <span>Search Engine Optimization</span> 
            </h1>
            <p className="primary-text">
            Empower Your Business with Tailored SEO Strategies for Long-Term Success
            </p>
            <div className="section__content-cta">
              <a href="/contact-us" className="btn btn--primary">
                Get Started
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="banner-two__thumb ">
      <Image src={bannerThumb} alt="Image" priority />
    </div>
    {/* <a className="scroll-position-btn" href="#scrollPosition">
      <Image src={Frame} alt="Image" priority />
      <i className="bi bi-arrow-down"></i>
    </a> */}
  </section>
  )
}

export default Seo_bannercontent