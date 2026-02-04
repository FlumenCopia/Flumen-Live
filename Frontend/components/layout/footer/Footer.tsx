"use client";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import { color } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const deviceWidth = window.innerWidth;

    if (document.querySelector(".footer") && deviceWidth >= 768) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".footer",
          start: "top center",
          end: "+=40%",
          scrub: 0.5,
          pin: false,
        },
      });

      tl.to(".footer__content .light-title span", {
        "--opacity": 1,
        "--transformY": 0,
        duration: 3,
        ease: "power1.inOut",
      });

      tl.to(".footer-thumb-one img", {
        transform: "rotate(-24deg)",
        x: "0px",
        opacity: 1,
        duration: 3,
        ease: "power1.inOut",
      });

      tl.to(".footer-thumb-two img", {
        y: "0px",
        opacity: 1,
        duration: 3,
        ease: "power1.inOut",
      });
    }
  }, []);

  return (
    <footer className="footer">
      <div className="container">
        <div className="row justify-content-center section">
          <div className="col-12 col-md-9 col-lg-9 col-xl-10 col-xxl-9">
            <div className="footer__content text-center">
              <h2 className="light-title fw-7 title-animation">
                Embrace The Future with <span style={{color:'#57efe0'}}>FlumenX</span>
              </h2>
              <div className="footer__content-cta">
                <a href="/contact-us" className="btn btn--primary">
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </div>


        
        
        <div className="row">
          <div className="col-12">
            <div className="footer__nav">
              <div className="row gaper">
                <div className="col-12 col-lg-4">
                  <div className="footer__nav-logo text-center text-lg-start">
                    <a href="/" aria-label="home page" title="logo">
                      <Image src="/images/flumenx-logo2.webp" width={180}
      height={60} alt="Image" priority />
                      
                    </a>
                  </div>
                </div>
                <div className="col-12 col-lg-8">
                  <div className="footer__nav-list">
                    <ul className="justify-content-center justify-content-lg-end">
                      <li>
                        <a href="/">Home</a>
                      </li>
                      <li>
                        <a href="/about-us">About Us</a>
                      </li>
                      <li>
                        <a href="/services">Services</a>
                      </li>
                      <li>
                        <a href="/learnhub">LearnHub</a>
                      </li>
                      <li>
                        <a href="/blog">Blog</a>
                      </li>
                      <li>
                        <a href="/career">Career</a>
                      </li>
                      <li>
                        <a href="/contact-us">Contact Us</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="footer__copyright">
              <div className="row gaper">
                <div className="col-12 col-lg-6">
                  <div className="footer__copyright-content text-center text-lg-start">
                    <p style={{color:'var(--quinary-color)'}}>
                      Copyright &copy;{" "}
                      <span id="copyrightYear">{currentYear}</span>{" "}
                      <a href="/" className='link_copyright'>FlumenX</a>. All Rights Reserved
                    </p>
                  </div>
                </div>
                <div className="col-12 col-lg-6">
                  <div className="footer__copyright-social justify-content-center justify-content-lg-end">
                    <p className="tertiary-text d-none d-lg-block">
                      Follow Us :
                    </p>
                    <div className="social">
                      <a
                        href="https://www.facebook.com/profile.php?id=61564341603272"
                        target="_blank"
                        aria-label="share us on facebook"
                        title="facebook"
                      >
                        <i className="bi bi-facebook"></i>
                      </a>
                      <a
                        href="https://www.linkedin.com/company/flumencopia/"
                        target="_blank"
                        aria-label="share us on linkedin"
                        title="linkedin"
                      >
                        <i className="bi bi-linkedin"></i>
                      </a>
                      <a
                        href="https://www.instagram.com/flumen_x/"
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
        </div>
      </div>
      <div className="footer-thumb-one">
        <Image src="/images/footer/footer-img-2.jpg" width={180}
      height={60} alt="Image" priority />
      </div>
      <div className="footer-thumb-two">
        <Image src="/images/footer/footer-img-1.jpg" width={180}
      height={60} alt="Image" priority />
      </div>
    </footer>
  );
};

export default Footer;
