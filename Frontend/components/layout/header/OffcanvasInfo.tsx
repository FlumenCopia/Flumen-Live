import Image from "next/image";
import Link from "next/link";
import logo from "@/public/images/flumen-icon2.png";

const OffcanvasInfo = ({ isOpen, setIsOpen }: any) => {
  return (
    <>
      <div
        className={"offcanvas-info" + (isOpen ? " offcanvas-info-active" : " ")}
      >
        <div className="offcanvas-info__inner">
          <div className="offcanvas-info__intro">
            <div className="offcanvas-info__logo">
              <a href="/">
                <Image src={logo} alt="Image" priority />
              </a>
            </div>
            <h4>Intelligent Conversations Made Simple</h4>
          </div>
          <div className="offcanvas-info__content">
            <h5>Contact Us</h5>
            <ul>
              <li>
                <a href="mailto:info@flumencopia.com">info@flumencopia.com</a>
              </li>
              <li>
                <a href="tel:+918848608726">+91 88486 08726  </a><span style={{color:'#b1b0b6'}}> , </span>
                <a href="tel:+918907634900">+91 89076 34900</a>
              </li>
              <li>
                <a
                  href="https://maps.app.goo.gl/inYkBrxFHWXKwLa47"
                  target="_blank"
                >
                  Gautham villa T.c 7/82, Kanjirampara P.O, 
                  Kanjirampara Thiruvananthapuram, Kerala 695030.
                </a>
              </li>
            </ul>
          </div>

          {/* <div className="offcanvas-info__form ">
            <p>Subscribe to newsletter</p>
            <form action="#" method="post" autoComplete="off">
              <div className="subscribe-form">
                <input
                  type="email"
                  name="subscribe-newsletter"
                  id="subscribeNewsletter"
                  placeholder="Email"
                  required
                />
                <button
                  type="submit"
                  aria-label="subscribe newsletter"
                  title="subscribe newsletter"
                >
                  <i className="material-symbols-outlined">send</i>
                </button>
              </div>
            </form>
          </div> */}

          <div className="offcanvas-info__footer">
            <p className="tertiary-text">Follow Us :</p>
            <div className="social">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                aria-label="share us on facebook"
                title="facebook"
              >
                <i className="bi bi-facebook"></i>
              </a>
              <a
                href="https://www.linkedin.com/company/flumencopia/"
                target="_blank"
                aria-label="share us on pinterest"
                title="linkedin"
              >
                <i className="bi bi-linkedin"></i>
              </a>
              <a
                href="https://www.instagram.com/flumencopia?igsh=OXAyOGZ5eXZ3cGV3"
                target="_blank"
                aria-label="share us on instagram"
                title="instagram"
              >
                <i className="bi bi-instagram"></i>
              </a>
            </div>
          </div>
        </div>
        <button
          className="close-offcanvas-info"
          aria-label="close offcanvas info"
          onClick={() => setIsOpen(false)}
        >
          <i className="bi bi-x-lg"></i>
        </button>
      </div>
      <div
        className={
          "offcanvas-info-backdrop " +
          (isOpen ? " offcanvas-info-backdrop-active" : " ")
        }
        onClick={() => setIsOpen(false)}
      ></div>
    </>
  );
};

export default OffcanvasInfo;
