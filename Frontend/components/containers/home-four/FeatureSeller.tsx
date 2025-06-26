import Image from "next/image";
import Link from "next/link";
import { featureSellerData } from "@/public/data/feature-seller";

const FeatureSeller = () => {
  return (
    <section className="section pb-0 feature fade-wrapper fade-top">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section__header text-start">
              <h2 className="title title-animation mt-12">What You Will Learn</h2>
              <p>By the end of your internship, you will have developed key skills, including:</p>
            </div>
          </div>
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
    </section>
  );
};

export default FeatureSeller;
