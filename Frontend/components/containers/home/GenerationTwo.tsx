import Image from "next/image";
import Link from "next/link";
import genThumb from "@/public/images/audible-img.jpg";

const GenerationTwo = () => {
  return (
    <section className="section gen-two pb-0">
      <div className="container">
        <div className="row align-items-center gaper">
          <div className="col-12 col-lg-5 order-last order-lg-first">
            <div className="gen-two__thumb">
              <div className="reveal-img parallax-img">
                <Image src={genThumb} alt="Image" priority />
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6 offset-lg-1 col-xxl-5 offset-xxl-2">
            <div className="section__content">
              <span className="sub-title">Audible</span>
              <h2 className="title title-animation">
              A Creative Space Where Sound and Technology Unite
              </h2>
              <p>
              We offers a creative hub where sounds and technology collide. The music studio serves as a refuge for both audiophiles and artists.
              </p>
              <div className="section__content-cta">
                {/* <a href="shop" className="btn btn--primary">
                  Get started
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GenerationTwo;
