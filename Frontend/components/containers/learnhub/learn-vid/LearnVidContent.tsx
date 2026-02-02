import Image from "next/image";
import Link from "next/link";
import poster from "@/public/images/case-details/poster.png";
import one from "@/public/images/case-details/learn-vid-one.png";
import two from "@/public/images/case-details/learn-vid-two.jpg";
import three from "@/public/images/case-details/learn-vid-three.jpg";
import quote from "@/public/images/case-details/quote1.png";
import { FeatureVidData } from "@/public/data/FeatureVidData";

const LearnVidContent = () => {
  return (
    <>
      <section className="mt-5 case-details">
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
                        Videography & Editing
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
                          Welcome to Videography & Editing Learn Hub
                          </h3>
                          <p>
                          Unlock your potential in the ever-evolving world of videography with hands-on experience and expert guidance. Videography Learn Hub is your gateway to mastering the skills needed to excel in web development. Whether you are just starting out or looking to sharpen your expertise, our internship program is designed to offer practical learning opportunities, industry insights, and the chance to work on real-world projects.
                          </p>
                        </div>
                        <div className="text-group">
                          <h3 className="title-animation fw-6 text-black mt-12">
                          Why Choose Our Videography & Editing Internship?
                          </h3>
                          <p>
                          At Video Learn Hub, we believe in learning by doing. Our program is built to offer immersive experiences that go beyond theory, allowing you to:
                          </p>
                          <ul>
                            <li><span style={{fontWeight:'300'}}>Comprehensive Learning Experience:</span>Our internship covers every stage of the video production process, from conceptualizing ideas during pre-production to mastering technical skills in production and polishing content in post-production. You will gain expertise in camera operation, lighting techniques, sound design, editing software, and advanced post-production tools like Adobe Premiere Pro, Final Cut Pro, and After Effects.</li>
                            <li><span style={{fontWeight:'300'}}>Hands-On Practical Training:</span> You will work on real-world projects, not just simulations. Whether it is shooting promotional content, creating social media campaigns, or crafting narrative-driven videos, you will develop a portfolio that demonstrates your ability to handle real-world challenges and deliver professional results.</li>
                            <li><span style={{fontWeight:'300'}}>Guidance from Industry Professionals:</span>Learn from experienced mentors who have extensive industry expertise. Our professionals provide personalized guidance, share insider tips, and ensure you are up to date with the latest trends and techniques in videography and editing.</li>
                            <li><span style={{fontWeight:'300'}}>Creative Collaboration:</span> Working in a team environment, you will develop collaboration and communication skills, which are crucial in the video production industry. From brainstorming ideas to executing projects, you will gain experience in teamwork and networking with creative professionals.</li>
                            <li><span style={{fontWeight:'300'}}>Special Focus on Storytelling and Branding:</span> Our program emphasizes not just technical skills but also the art of storytelling. You will learn how to craft compelling narratives that resonate with audiences and align with brand identities, a critical skill for creating impactful videos.</li>
                          </ul>
                          <div className="img-group fade-wrapper">
                            <div className="poster-img mb-0 fade-top">
                              <Image src={one} alt="Image" priority />
                            </div>
                            <div className="poster-img mb-0 fade-top display-none">
                              <Image src={two} alt="Image" priority />
                            </div>
                            <div className="poster-img mb-0 fade-top display-none">
                              <Image src={three} alt="Image" priority />
                            </div>
                          </div>
                          <p>
                          Our Videography & Editing Internship offers a unique opportunity to gain hands-on experience, build your portfolio, and work on real-world projects. Guided by industry professionals, you will refine your technical skills, unleash your creativity, and explore your unique style. With access to professional tools and the chance to contribute to impactful campaigns, this internship is perfect for anyone looking to grow their expertise and stand out in the competitive media industry.
                          </p>
                        </div>
                        <div className="text-group">
                          <div className="quote-group">
                            <Image src={quote} alt="Image" priority />
                            <div className="content">
                              <q className="primary-text text-white">
                              The magic of editing is in taking raw footage and creating something unforgettable.  </q>
                              <p className="tertiary-text">Walter Murch</p>
                            </div>
                          </div>
                          <p>
                          Whether you are a beginner or seeking to expand your expertise, our internship provides the mentorship, resources, and industry insights to help you grow into a confident videography and editor. By the end of the program, you will have a strong portfolio, a deep understanding of the videography and editor, and the skills employers are looking for in today&apos;s competitive digital landscape.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-5 py-1 feature fade-wrapper fade-top">
                        <div className="section__header text-group text-start">
                            <h2 className="title title-animation mt-12">What You Will Learn</h2>
                            <p>By the end of your internship, you will have developed key skills, including:</p>
                        </div>
                        <div className="row gaper">
                                  {FeatureVidData.map((item) => {
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
                                <div className="section__header text-start my-5">
                                      <h2 className="title title-animation mt-12">Who Can Apply?</h2>
                                      <p>This internship is ideal for students, recent graduates, or anyone looking to transition into a
                                        career in videography and editor. Whether you have a background in videography and editor or are
                                        new to the field, our program is designed to support learners at various levels.</p>
                                </div>
                                <div className="section__header text-start my-5">
                                      <h2 className="title title-animation mt-12">How to Apply</h2>
                                      <p>Ready to kick-start your videography and editor journey? Apply now by submitting your resume and
                                        portfolio, or reach out to us with any questions. We look forward to helping you grow your skills
                                        and advance your career in videography and editor.</p>
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

export default LearnVidContent;
