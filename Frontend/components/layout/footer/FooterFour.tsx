import Image from "next/image";
import Link from "next/link";
import Logo from "public/images/logo.png";

const FooterFour = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer footer-seven hg-i">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="footer__nav">
              <div className="row gaper align-items-center">
                <div className="col-12 col-lg-3">
                  <div className="footer__nav-logo text-center text-lg-start">
                    <a href="/" aria-label="home page" title="logo">
                      <Image src={Logo} alt="Image" priority />
                    </a>
                  </div>
                </div>
                <div className="col-12 col-lg-6">
                  <div className="footer__nav-list">
                    <ul className="justify-content-center">
                      <li>
                        <a href="/">Home</a>
                      </li>
                      <li>
                        <a href="about-us">About Us</a>
                      </li>
                      <li>
                        <a href="shop">Shop</a>
                      </li>
                      <li>
                        <a href="blog">Blog</a>
                      </li>
                      <li>
                        <a href="contact-us">Contact Us</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-12 col-lg-3">
                  <div className="social justify-content-lg-end">
                    <a
                      href="https://www.facebook.com/"
                      target="_blank"
                      aria-label="share us on facebook"
                      title="facebook"
                    >
                      <i className="bi bi-facebook"></i>
                    </a>
                    <a
                      href="https://www.twitter.com/"
                      target="_blank"
                      aria-label="share us on twitter"
                      title="twitter"
                    >
                      <i className="bi bi-twitter"></i>
                    </a>
                    <a
                      href="https://www.linkedin.com/"
                      target="_blank"
                      aria-label="share us on pinterest"
                      title="linkedin"
                    >
                      <i className="bi bi-linkedin"></i>
                    </a>
                    <a
                      href="https://www.instagram.com/"
                      target="_blank"
                      aria-label="share us on instagram"
                      title="instagram"
                    >
                      <i className="bi bi-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="footer__copyright">
              <div className="row gaper align-items-center">
                <div className="col-12 col-lg-6">
                  <div className="footer__copyright-content text-center text-lg-start">
                    <p>
                      Copyright &copy;{" "}
                      <span id="copyrightYear">{currentYear}</span>{" "}
                      <a href="/">Aikeu</a>. All Rights Reserved
                    </p>
                  </div>
                </div>
                <div className="col-12 col-lg-6">
                  <div className="footer__copyright-social justify-content-center justify-content-lg-end">
                    <div className="offcanvas-info__form align-items-start align-items-lg-center justify-content-center justify-content-lg-end">
                      <h5 className="d-none d-xl-block">Subscribe To</h5>
                      <form action="#" method="post" autoComplete="off">
                        <div className="subscribe-form">
                          <input
                            type="email"
                            name="subscribe-newsletterTwo"
                            id="subscribeNewsletterTwo"
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
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterFour;
