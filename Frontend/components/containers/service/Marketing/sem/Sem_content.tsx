import Image from "next/image";
import Bot from "@/public/images/sem/sem-image.jpg";
import One from "@/public/images/sem-small-two.jpg";
import Two from "@/public/images/wave.png";
import Three from "@/public/images/seo-small-one.png";


const Sem_content = () => {
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
            Getting Started with Search Engine Marketing
            </h2>
            <p>
            Search Engine Marketing (SEM) is a powerful digital marketing strategy designed to enhance a business&apos;s online visibility and attract high-intent customers. By leveraging paid advertising platforms, SEM places your website at the forefront of search engine results pages (SERPs) when users search for relevant keywords. Unlike organic search efforts, SEM delivers immediate results, making it an essential tool for businesses aiming to drive targeted traffic, generate leads, and boost sales in a competitive digital landscape. With SEM, you can reach your audience precisely where and when they are searching for your products or services, ensuring maximum return on investment (ROI) and measurable success.


            </p>
            {/* <div className="section__content-cta">
              <div className="easy__cta">
                <div className="easy__cta-single">
                  <div className="content">
                    <p>Pay-Per-Click (PPC) Advertising</p>
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
                    <p> Search Engine Optimization (SEO)</p>
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

export default Sem_content