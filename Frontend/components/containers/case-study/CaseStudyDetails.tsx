import Image from "next/image";
import Link from "next/link";
import poster from "@/public/images/case-details/poster.png";
import one from "@/public/images/case-details/one.png";
import two from "@/public/images/case-details/two.png";
import three from "@/public/images/case-details/three.png";
import quote from "@/public/images/case-details/quote1.png";
import { featureSellerData } from "@/public/data/feature-seller";

const CaseStudyDetails = () => {
  return (
    <>
      <section className="section case-details">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="case-details__inner">
                {/* <div className="poster-img mb-0 slide-top">
                  <Image src={poster} alt="Image" priority />
                </div> */}
                <div className="case-details-meta">
                  <div className="row gaper align-items-center">
                    <div className="col-12 col-xl-5">
                      <div className="case-meta-left">
                        <h2 className="title-animation fw-7 text-black">
                          Web Development
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="case-details__content sticky-parent">
                  <div className="row gaper">
                    <div className="col-12 col-lg-2">
                      <div className="case-d-content-left sticky-item">
                        <p className="tertiary-text text-black">Share</p>
                        <div className="social">
                          <a
                            href="https://www.facebook.com/profile.php?id=61564341603272&mibextid=ZbWKwL"
                            target="_blank"
                            aria-label="share us on facebook"
                            title="facebook"
                          >
                            <i className="bi bi-facebook"></i>
                          </a>
                          
                          <a
                            href="https://www.linkedin.com/company/flumencopia/ "
                            target="_blank"
                            aria-label="share us on pinterest"
                            title="linkedin"
                          >
                            <i className="bi bi-linkedin"></i>
                          </a>
                          <a
                            href="https://www.instagram.com/flumen_x/ "
                            target="_blank"
                            aria-label="share us on instagram"
                            title="instagram"
                          >
                            <i className="bi bi-instagram"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-lg-10">
                      <div className="case-d-content-right sticky-item">
                        <div className="text-group">
                          <h3 className="title-animation fw-6 text-black mt-12">
                           Welcome to Web Learn Hub
                          </h3>
                          <p>
                          Unlock your potential in the ever-evolving world of web development with hands-on experience and expert guidance. Web Learn Hub is your gateway to mastering the skills needed to excel in web development. Whether you are just starting out or looking to sharpen your expertise, our internship program is designed to offer practical  opportunities, industry insights, and the chance to work on real-world projects.
                          </p>
                        </div>
                        <div className="text-group">
                          <h3 className="title-animation fw-6 text-black mt-12">
                          Why Choose Our Web Development Internship?
                          </h3>
                          <p>
                          At Web Learn Hub, we believe in learning by doing. Our program is built to offer immersive experiences that go beyond theory, allowing you to:
                          </p>
                          <ul>
                            <li><span style={{fontWeight:'300'}}>Gain Practical Experience:</span> Work alongside seasoned developers on live projects, gaining exposure to various stages of the web development process—from coding and debugging to deploying fully functional websites.</li>
                            <li><span style={{fontWeight:'300'}}>Master Key Technologies:</span> Dive deep into essential programming languages and tools like HTML, CSS, JavaScript, and popular frameworks such as React, Node.js, and more.</li>
                            <li><span style={{fontWeight:'300'}}>Build Your Portfolio:</span> As part of the program, you will have the opportunity to create your own projects and contribute to others, building a professional portfolio that demonstrates your capabilities to future employers.</li>
                            <li><span style={{fontWeight:'300'}}>Collaborate with Experts:</span> You will work in a team environment where collaboration is key. Learn how to communicate effectively, share ideas, and tackle challenges together with other talented individuals.</li>
                            <li><span style={{fontWeight:'300'}}>Stay Ahead in the Industry:</span> Our curriculum is updated regularly to ensure you are learning the latest industry trends and technologies, keeping you competitive in today &apos;s fast-paced digital world.</li>
                          </ul>
                          <div className="img-group fade-wrapper">
                            <div className="poster-img mb-0 fade-top">
                              <Image src={one} alt="Image" priority />
                            </div>
                            <div className="poster-img mb-0 fade-top">
                              <Image src={two} alt="Image" priority />
                            </div>
                            <div className="poster-img mb-0 fade-top">
                              <Image src={three} alt="Image" priority />
                            </div>
                          </div>
                          <p>
                          Our web development internship is designed to give you more than just theoretical knowledge. It offers a hands-on, immersive learning experience that prepares you for real-world challenges in the web development industry. You will work on live projects, gain practical coding skills, and collaborate with experienced professionals. Our program focuses on empowering you with the latest technologies and best practices, ensuring you are well-equipped to excel in today &apos; s competitive job market. Whether you are looking to build your portfolio or master full-stack development, this internship provides the tools, mentorship, and experience you need to succeed.
                          </p>
                        </div>
                        <div className="text-group">
                          <div className="quote-group">
                            <Image src={quote} alt="Image" priority />
                            <div className="content">
                              <q className="primary-text text-white">
                                And the day came when the risk to remain tight
                                in a bud was more painful than the risk it took
                                to blossom.
                              </q>
                              <p className="tertiary-text">Alen Marlo</p>
                            </div>
                          </div>
                          <p>
                          Whether you are a beginner or seeking to expand your expertise, our internship provides the mentorship, resources, and industry insights to help you grow into a confident web developer. By the end of the program, you will have a strong portfolio, a deep understanding of the web development process, and the skills employers are looking for in today&apos;s competitive digital landscape.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="section pb-0 feature fade-wrapper fade-top">
                        <div className="section__header text-group text-start">
                            <h2 className="title title-animation mt-12">What You Will Learn</h2>
                            <p>By the end of your internship, you will have developed key skills, including:</p>
                        </div>
                        <div className="row gaper">
                                  {featureSellerData.map((item) => {
                                    return (
                                      <div
                                        className="col-12 col-md-6 col-lg-4 col-xxl-3 fade-top"
                                        key={item.id}
                                      >
                                        <div className="feature__single topy-tilt">
                                          <div className="thumb">
                                            <Image src={item.author} alt="Image" priority />
                                            <span className="check">
                                              <i className="bi bi-check2"></i>
                                            </span>
                                          </div>
                                          <div className="thumb-content">
                                            <p className="fw-6 text-white">{item.authorName}</p>
                                          </div>
                                          <hr />
                                          <div className="feature__thumb">
                                            <p>{item.description}</p>
                                          </div>
                                        </div>
                                      </div>
                                    );
                                  })}
                                </div>
                                <div className="section__header text-start">
                                      <h2 className="title title-animation mt-12">Who Can Apply?</h2>
                                      <p>This internship is ideal for students, recent graduates, or anyone looking to transition into a career in web development. Whether you have a background in programming or are new to the field, our program is designed to support learners at various levels.</p>
                                </div>
                                <div className="section__header text-start">
                                      <h2 className="title title-animation mt-12">How to Apply</h2>
                                      <p>Ready to kick-start your web development journey? Apply now by submitting your resume and portfolio, or reach out to us with any questions. We look forward to helping you grow your skills and advance your career in web development.</p>
                                </div>
                    </div>


              </div>
            </div>
          </div>
        </div>
      </section>
      <div>
        <div className="container">
          <hr className="horizon" />
        </div>
      </div>
    </>
  );
};

export default CaseStudyDetails;
