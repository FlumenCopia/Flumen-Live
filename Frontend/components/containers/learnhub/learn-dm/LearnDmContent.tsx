import Image from "next/image";
import Link from "next/link";
import poster from "@/public/images/case-details/poster.png";
import one from "@/public/images/case-details/learn-dm-one.jpg";
import two from "@/public/images/case-details/learn-dm-two.jpg";
import three from "@/public/images/case-details/learn-dm-three.jpg";
// import four from "@/public/images/case-details/learn-dm-four.jpg";
import quote from "@/public/images/case-details/quote1.png";
import { dmData } from "@/public/data/dm-data";


const LearnDmContent = () => {
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
                          Digital Marketing
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
                            href="https://www.instagram.com/flumencopia?igsh=OXAyOGZ5eXZ3cGV3 "
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
                           Welcome to Digital Marketing Learn Hub
                          </h3>
                          <p>
                          Unlock your potential in the ever-evolving world of Digital Marketing with hands-on experience and expert guidance. Digital Marketing Learn Hub is your gateway to mastering the skills needed to excel in Digital Marketing. Whether you are just starting out or looking to sharpen your expertise, our internship program is designed to offer practical  opportunities, industry insights, and the chance to work on real-world projects.
                          </p>
                        </div>
                        <div className="text-group">
                          <h3 className="title-animation fw-6 text-black mt-12">
                          Why Choose Our Digital Marketing Internship?
                          </h3>
                          <p>
                          At Digital Marketing Learn Hub, we believe in learning by doing. Our program is built to offer immersive experiences that go beyond theory, allowing you to:
                          </p>
                          <ul>
                            <li><span style={{fontWeight:'300'}}>Hands-On Learning with Real Projects:</span> Our internship offers you the chance to work on live campaigns for real businesses, giving you a firsthand understanding of industry challenges and strategies. You will use top industry tools like Google Ads, Meta Business Suite, and Google Analytics, gaining practical skills in SEO, content marketing, and performance analysis.</li>
                            <li><span style={{fontWeight:'300'}}>Learn from Industry Experts:</span> Under the guidance of experienced professionals, you will receive personalized feedback and mentorship to enhance your learning. Our mentors bring years of experience and proven success in running impactful marketing campaigns, ensuring you gain valuable insights and practical knowledge.</li>
                            <li><span style={{fontWeight:'300'}}>Stay Ahead with Emerging Trends:</span> We emphasize training on the latest digital marketing trends, such as AI-driven strategies, video marketing, and influencer collaborations. With our focus on adapting to platform updates and algorithm changes, you will remain competitive in the ever-evolving digital landscape.</li>
                            <li><span style={{fontWeight:'300'}}>Networking and Career Growth Opportunities:</span> Our program connects you with industry professionals, influencers, and peers, expanding your network for future collaborations. High-performing interns may also receive recommendations or offers for full-time positions within our organization or partner companies.</li>
                            <li><span style={{fontWeight:'300'}}>Flexible and Supportive Environment:</span> With options for in-office, remote, or hybrid internships, we provide flexibility to match your lifestyle. Our supportive work environment fosters creativity, innovation, and collaboration, empowering you to explore your potential and refine your skills.</li>
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
                            {/* <div className="poster-img mb-0 fade-top display-none">
                              <Image src={four} alt="Image" priority />
                            </div> */}
                          </div>
                          <p>
                          Our Digital Marketing internship is designed to give you more than just theoretical knowledge. It offers a hands-on,
                          immersive learning experience that prepares you for real-world challenges in the web development industry. You will work
                          on live projects, gain practical coding skills, and collaborate with experienced professionals. Our program focuses on
                          empowering you with the latest technologies and best practices, ensuring you are well-equipped to excel in today &apos; s
                          competitive job market. Whether you are looking to build your portfolio this internship provides the tools, mentorship, and experience you need to succeed.
                          </p>
                        </div>
                        <div className="text-group">
                          <div className="quote-group">
                            <Image src={quote} alt="Image" priority />
                            <div className="content">
                              <q className="primary-text text-white">
                              Marketing is no longer about the stuff you make but the stories you tell
                              </q>
                              <p className="tertiary-text">Seth Godin</p>
                            </div>
                          </div>
                          <p>
                          Whether you are a beginner or seeking to expand your expertise, our internship provides the mentorship, resources,
                          and industry insights to help you grow into a confident web developer. By the end of the program, you will have a
                          strong portfolio, a deep understanding of the digital marketing  process, and the skills employers are looking for in
                          today&apos;s competitive digital landscape.
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
                                  {dmData.map((item) => {
                                    return (
                                      <div
                                        className="col-12 col-sm-6 col-md-6 col-lg-4 col-xxl-3 fade-top"
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
                                      <p>This internship is ideal for students, recent graduates, or anyone looking to transition into a career in Digital Marketing. Whether you have a background in programming or are new to the field, our program is designed to support learners at various levels.</p>
                                </div>
                                <div className="section__header text-start my-5">
                                      <h2 className="title title-animation mt-12">How to Apply</h2>
                                      <p>Ready to kick-start your  Digital Marketing journey? Apply now by submitting your resume and portfolio, or reach out to us with any questions. We look forward to helping you grow your skills and advance your career in Digital Marketing.</p>
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

export default LearnDmContent;
