import Image from "next/image";
import Link from "next/link";
import thumb from "@/public/images/contact/contact-img-thumb.jpg";
import mail from "@/public/images/contact/mail-icon.png";
import phone from "@/public/images/contact/phone-icon.png";
import location from "@/public/images/contact/location-icon.png";

const ContactSection = () => {
  return (
    <div className=" mt-5 m-contact fade-wrapper">
      
      <div className="container">
        <div className="row gaper section pt-0">
          <div className="col-12 col-sm-6 col-lg-4">
            <div className="m-contact__single fade-top">
              <div className="thumb">
                <Image src={mail} alt="Image" priority />
              </div>
              <div className="content">
                <h3>Email</h3>
                <p>
                  <a href="mailto:info@flumencopia.com">
                   info@flumencopia.com
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-lg-4">
            <div className="m-contact__single fade-top">
              <div className="thumb">
                <Image src={phone} alt="Image" priority />
              </div>
              <div className="content">
                <h3>Phone</h3>
                <p>
                  <a href="tel:+916282721984">+91 88486 08726</a>
                </p>
                <p>
                  <a href="tel:+918907634900">+91 89076 34900</a>
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-lg-4">
            <div className="m-contact__single fade-top">
              <div className="thumb">
                <Image src={location} alt="Image" priority />
              </div>
              <div className="content">
                <h3>Location</h3>
                <p>
                  <a href="tel:219-555-0114" target="_blank">
                  Gautham villa T.c 7/82, Kanjirampara P.O, Kanjirampara 
                  Thiruvananthapuram, Kerala 695030
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-5 mx-5 px-5">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3945.7740060554584!2d76.9760539747744!3d8.521309291521172!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05bbb55893c6cb%3A0x37eaccd10e7097f6!2sMiscArchive!5e0!3m2!1sen!2sin!4v1734327537830!5m2!1sen!2sin" width="100" height="300" style={{border:"0"}} loading="lazy" ></iframe>
      </div>

        <div className="row gaper align-items-center section">
          <div className="col-12 col-lg-6 col-xl-6">
            <div className="m-contact__form" >
              <h3 className="title-animation fw-7 text-black mt-12">
                 IF YOU HAVE ANY QUERIES, MESSAGE US NOW
              </h3>
              <form action="#" method="post">
                <div className="input-single">
                  <input
                    type="text"
                    name="c-name"
                    id="cName"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div className="input-single">
                  <input
                    type="email"
                    name="c-Email"
                    id="cEmail"
                    placeholder="Your Email"
                    required
                  />
                </div>
                <div className="input-single">
                  <input
                    type="text"
                    name="c-number"
                    id="cnumber"
                    placeholder="Phone Number"
                    required
                  />
                </div>
                <div className="input-single">
                  <textarea
                    name="c-message"
                    id="cMessage"
                    cols={30}
                    rows={10}
                    placeholder="Type A Message"
                  ></textarea>
                </div>
                <div className="section__content-cta text-center">
                  <button type="submit" className="btn btn--primary">
                    Submit Now
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="col-12 col-lg-6 col-xl-5 offset-xl-1">
            <div className="m-contact__thumb reveal-img ">
              <Image src={thumb} alt="Image" priority />
            </div>
          </div>
        </div>
      </div>
     
    </div>
  );
};

export default ContactSection;
