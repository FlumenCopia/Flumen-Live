import Image from "next/image";
import Bot from "@/public/images/email-marketing/email-imgone.png";
import One from "@/public/images/smm-small-one.png";
import Two from "@/public/images/wave.png";
import Three from "@/public/images/smm-small-img-two.png";


const Smm_data = () => {
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
            Getting Started with Social Media Marketing
            </h2>
            <p>
            Social Media Marketing (SMM) is a powerful strategy for businesses to connect with their audience, build brand
            awareness, and drive engagement through platforms like Facebook, Instagram, Twitter, LinkedIn, and TikTok. By
            leveraging targeted content, engaging posts, and strategic ad campaigns, social media marketing helps businesses
            reach potential customers, foster relationships, and ultimately boost sales. In today&apos;s digital age, having
            a strong social media presence is crucial for staying competitive, fostering brand loyalty, and driving business
            growth. Whether you are a small startup or an established company, social media marketing offers limitless opportunities
            to connect with your target audience and grow your brand.
            </p>
            {/* <div className="section__content-cta">
              <div className="easy__cta">
                <div className="easy__cta-single">
                  <div className="content">
                    <p>Organic Social Media Marketing</p>
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
                    <p>Paid Social Media Advertising</p>
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

export default Smm_data