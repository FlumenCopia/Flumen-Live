import Image from "next/image";
import Bot from "@/public/images/seo/seo-one.png";
import One from "@/public/images/seo-small-two.png";
import Two from "@/public/images/wave.png";
import Three from "@/public/images/seo-small-one.png";


const Seo_data = () => {
  return (




    <section className="section easy easy--secondary position-relative">
    <div className="container">
      <div className="row gaper align-items-center">
        <div className="col-12 col-lg-6 col-xl-5">
          <div className="easy__thumb dir-rtl reveal-img d-block parallax-img">
            <Image src={Bot} alt="Image" className="" />
          </div>
        </div>
        <div className="col-12 col-lg-6 col-xl-6 offset-xl-1">
          <div className="section__content">
            <span className="sub-title-two">Chat Bot</span>
            <h2 className="title title-animation">
            Getting Started with Search Engine Optimization
            </h2>
            <p>
            Search Engine Optimization (SEO) is a vital digital marketing strategy aimed at enhancing the visibility of a website in search engine results pages (SERPs). By optimizing website content, structure, and technical aspects, SEO helps businesses attract more organic traffic, improving their ranking on search engines like Google. Whether you are running a personal blog, an e-commerce store, or a corporate website, SEO is crucial for ensuring your online presence reaches the right audience. The ultimate goal is to drive more qualified visitors to your website, increasing conversions and achieving business success.



            </p>
            {/* <div className="section__content-cta">
              <div className="easy__cta">
                <div className="easy__cta-single">
                  <div className="content">
                    <p>On-Page SEO</p>
                  </div>
                  <div className="thumb">
                    <Image src={One} alt="Image" priority />
                  </div>
                </div>
                <div className="easy__cta-single easy__cta-single-alt">
                  <div className="thumber">
                    <Image src={Two} alt="Image" priority />
                  </div>
                  <div className="content">
                    <p>Off-Page SEO</p>
                  </div>
                  <div className="thumb">
                    <Image src={Three} alt="Image" priority />
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Seo_data