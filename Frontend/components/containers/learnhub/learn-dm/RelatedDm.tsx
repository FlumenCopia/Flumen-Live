import Image from "next/image";
import Link from "next/link";
import { RelatedData_Dm } from "@/public/data/Learnhub-Related/RelatedData_Dm";

const RelatedDm = () => {
  return (
    <section className="mt-3 mb-5 pb-2 h-s-case-alter fade-wrapper ">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section__header--secondary">
              <div className="row align-items-center gaper">
                <div className="col-12 col-lg-5">
                  <div className="section__header mb-0 text-center text-lg-start">
                    <h2 className="title mt-12 title-animation">
                      Related Courses
                    </h2>
                  </div>
                </div>
                <div className="col-12 col-lg-7">
                  <div className="text-center text-lg-end">
                    <a href="/learnhub" className="btn btn--primary">
                      View More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row gaper">
          {RelatedData_Dm.slice(0, 4).map((item) => {
            return (
              <div className="col-12 col-md-4 fade-top" key={item.id}>
                <div className="h-s-case-single topy-tilt">
                  <div className="thumb">
                    <a href={item.link}>  
                      <Image src={item.image} alt="Image" className="image-blur" priority />
                    </a>
                  </div>
                  <div className="h-case-content">
                    <div className="case-title">
                      <h2 className="light-title" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.45)' ,color: '#fff' }}>
                        <a href={item.link}><span className="related-learnhub">{item.title}</span></a>
                      </h2>
                    </div>
                    <div className="h-c-continent">
                      <p style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.45)' ,color: '#fff' }}> {item.description} </p>
                      <a href={item.link} className="cta">
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

export default RelatedDm;
