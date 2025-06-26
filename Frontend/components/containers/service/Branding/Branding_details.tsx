import Image from "next/image";
import Link from "next/link";
import poster from "@/public/images/services/brand-poster.png";
import one from "@/public/images/services/brand-one.png";
import two from "@/public/images/services/brand-two.jpg";
import ServiceContact from "../../ServiceContact";

function Branding_details() {
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
                We provide the best brand strategies with a wide range of options. We process and
                communicate a unique selling proposition that sets your product or services apart from
                the competition. Our techniques include logos, taglines, color codes, specific USPs, and all.
                We create and disseminate the brand name, its qualities, and its personality. Brand strategy
                is important because not only is it what makes a strong feedback on consumers, but it also lets
                your customers and clients know what to expect from your company. It is a way of standing 
                yourself out from the competition, and it clarifies what makes you the better choice.
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
                Your brand is more than just a logo — it is your identity, your story, and your promise to customers. 
                We help businesses create compelling, consistent, and impactful brand identities that resonate with their audience.
                </p>
                <ol>
                  <li>
                    Logo Design: Unique and professional logos that reflect your brand&apos;s values.
                  </li>
                  <li>
                    {" "}
                    Brand Strategy: Comprehensive strategies to define your brand&apos;s mission, vision, and positioning.
                  </li>
                  <li>
                  Visual Identity Design: Cohesive design elements, including color schemes, typography, and imagery.
                  </li>
                  <li>
                  Brand Guidelines: Ensure consistency across all platforms with detailed brand usage guidelines.
                  </li>
                  <li>
                  Rebranding: Modernize and revitalize your existing brand to stay relevant in a competitive market.
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

export default Branding_details