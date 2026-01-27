import Image from "next/image";
import Link from "next/link";
import GenThumb from "@/public/images/branding.png";

const Generation = () => {
  return ( 
    <section className="section-1 gen pb-5">
      <div className="container">
        <div className="row align-items-center gaper">
          <div className="col-12 col-lg-5 col-xxl-4">
            <div className="section__content">
              <span className="sub-title">Branding</span>
              <h2 className="title title-animation">
               Elevate Your Brand with Creative Graphic Design
              </h2>
              <p>
               Transform your brand&apos;s visual identity with our innovative graphic design services. We create compelling graphics that capture attention and convey your message effectively.
              </p>
              <div className="section__content-cta">
                <a href="/services/branding" className="btn btn--primary">
                  More
                </a>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-7 col-xxl-7 offset-xxl-1">
            <div className="gen__thumb">
              <div className=" parallax-img">
                <Image src={GenThumb} alt="Image" className="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section__content-cta  " style={{display:'flex', justifyContent:'center', marginTop:'125px'}}>
        <a href="/services" className="btn btn--primary">
          More Services
        </a>
     </div>
    </section>
  );
};

export default Generation;
