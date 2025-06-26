import Image from "next/image";
import Link from "next/link";
import { caseStudyData } from "@/public/data/case-study-items";

const RelatedCaseStudy = () => {
  return (
    <section className="section h-s-case-alter fade-wrapper ">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section__header--secondary">
              <div className="row align-items-center gaper">
                <div className="col-12 col-lg-5">
                  <div className="section__header mb-0 text-center text-lg-start">
                    <h2 className="title mt-12 title-animation">
                      Related Projects
                    </h2>
                  </div>
                </div>
                <div className="col-12 col-lg-7">
                  <div className="text-center text-lg-end">
                    <a href="case-study" className="btn btn--primary">
                      View More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row gaper">
          {caseStudyData.slice(0, 4).map((item) => {
            return (
              <div className="col-12 col-md-6 fade-top" key={item.id}>
                <div className="h-s-case-single topy-tilt">
                  <div className="thumb">
                    <a href="case-study-single">  
                      <Image src={item.image} alt="Image" priority />
                    </a>
                  </div>
                  <div className="h-case-content">
                    <div className="case-title">
                      <h2 className="light-title">
                        <a href="case-study-single">{item.title}</a>
                      </h2>
                    </div>
                    <div className="h-c-continent">
                      <p>{item.description}</p>
                      <a href="case-study-single" className="cta">
                        <span className="arrow"></span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default RelatedCaseStudy;
