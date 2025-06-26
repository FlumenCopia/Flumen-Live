import Image from "next/image";
import Bot from "@/public/images/email-marketing/email-img.jpg";
import One from "@/public/images/email-small-two.png";
import Two from "@/public/images/wave.png";
import Three from "@/public/images/email-small-one.png";


const Email_details = () => {
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
            {/* <span className="sub-title-two">Chat Bot</span> */}
            <h2 className="title title-animation">
            Getting Started with Email Marketing
            </h2>
            <p>
              Email marketing is a digital marketing technique that leverages email to communicate with potential and existing customers.
              It is an effective tool for promoting products, building customer loyalty, nurturing leads, and educating subscribers about
              the benefits of a business. Email marketing is one of the most effective ways to engage with an audience and drive conversions.

<ul >
  <li  style={{ color: 'var(--quinary-color)'}}>Cost-Effective - No high advertising costs like PPC or social media ads.</li>
  <li style={{ color: 'var(--quinary-color)'}}> Personalized Communication - Send targeted emails based on user behavior and preferences.</li>
  <li style={{ color: 'var(--quinary-color)'}}>Increases Customer Retention - Helps in customer engagement and brand loyalty.</li>
</ul>




              {/* Here is a detailed breakdown of the essentials and benefits of email marketing: */}


            </p>
            {/* <div className="section__content-cta">
              <div className="easy__cta">
                <div className="easy__cta-single">
                  <div className="content">
                    <p>Promotional Email Marketing</p>
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
                    <p>Engagement and Relationship-Building Emails</p>
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

export default Email_details