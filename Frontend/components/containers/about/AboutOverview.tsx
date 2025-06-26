import Image from "next/image";
import one from "@/public/images/o-one1.png";
import two from "@/public/images/o-two2.png";
import three from "@/public/images/o-three3.png";

const AboutOverview = () => {
  return (
    <section className="section overview-two fade-wrapper m-4">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-xl-7">
            <div className="section__header section__content text-center">
              <span className="sub-title">Our Values</span>
              <h2 className="title title-animation">
              The Principles That Guide Our Work
              </h2>
              <p>
              &quot; Empowering brands with innovative digital marketing strategies that drive growth and connection. &quot;
              </p>
            </div>
          </div>
        </div>
        <div className="row align-items-center justify-content-center gaper">
          <div className="col-12 col-sm-9 col-md-6 col-xl-4">
            <div className="overview-two__single text-center fade-top">
              <div className="thumb">
                <Image src={one} alt="Image" priority />
              </div>
              <div className="content">
                <h4 className="text-black">Social Responsibility</h4>
                <p className="tertiary-text">
                Our team actively contributes to the community by sharing knowledge and resources to support ethical digital transformation.
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-9 col-md-6 col-xl-4">
            <div className="overview-two__single text-center fade-top">
              <div className="thumb">
                <Image src={two} alt="Image" priority />
              </div>
              <div className="content">
                <h4 className="text-black">Transparency and Honesty</h4>
                <p className="tertiary-text">
                We ensure that all marketing campaigns provide clear and accurate information. Misleading advertisements, clickbait, or false claims are strictly avoided.
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-9 col-md-6 col-xl-4">
            <div className="overview-two__single text-center fade-top">
              <div className="thumb">
                <Image src={three} alt="Image" priority />
              </div>
              <div className="content">
                <h4 className="text-black">Fair Competition</h4>
                <p className="tertiary-text">
                Ethical SEO and marketing strategies are employed without engaging in practices like keyword stuffing, black-hat tactics, or plagiarizing content.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutOverview;
