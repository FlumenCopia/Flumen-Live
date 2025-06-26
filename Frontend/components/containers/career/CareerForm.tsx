import Image from "next/image";
import one from "@/public/images/career-form-img.jpg";
import two from "@/public/images/cart-two.png";

const CareerForm = () => {

  return (
    <section className="checkout-m fade-wrapper career-input " style={{backgroundColor: '#116265'}}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section__header">
              <h2 className="text-center text-white title-animation mt-5 " style={{fontSize:'30px', lineHeight:'38px', fontWeight:'500'}}>
                Apply To Join Flumencopia
              </h2>
            </div>
          </div>
        </div>
        <div className="row gaper">
          <div className="col-12 col-lg-7">
            <div className="checkout-m__form">
              <div className="intro">
                {/* <h4>Shipping Address</h4> */}
              </div>
              <form action="#" method="post">
                <div className="input-group">
                  <div className="input-single">
                    <input
                      type="text"
                      name="check-name"
                      id="checkName"
                      placeholder="Your Name*"
                      required
                    />
                  </div>
                  <div className="input-single">
                    <input
                      type="email"
                      name="check-email"
                      id="checkemail"
                      placeholder="Your Email*"
                      required
                    />
                  </div>
                </div>
                <div className="input-group">
                  <div className="input-single">
                    <input
                      type="number"
                      name="check-number"
                      id="checkNumber"
                      placeholder="Phone Number*"
                      required
                    />
                  </div>
                  <div className="input-single">
                        <select className="form-select " id="jobrole" name="job-role" required style={{backgroundColor : '#fff', borderRadius: '8px', padding:'18px 20px'}}>
                            <option >Position You&apos;re Applying For*</option>
                            <option value="Digital Marketer">Digital Marketer</option>
                            <option value="Web Developer" >Web Developer</option>
                            <option value="Graphic Designer">Graphic Designer</option>
                            <option value="Video Editor">Video Editor</option>
                        </select>
                  </div>
                </div>
                <div className="input-group">
                    <div className="input-single">
                            <select className="form-select " id="jobstatus" name="job-status" required style={{backgroundColor : '#fff', borderRadius: '8px', padding:'18px 20px'}}>
                                <option >Current Employment Status*</option>
                                <option value="Employed">Employed</option>
                                <option value="Unemployed" >Unemployed</option>
                                <option value="Fresher">Fresher</option>
                                <option value="Freelancer">Freelancer</option>
                                <option value="Student">Student</option>
                            </select>
                    </div>
                    <div className='input-single-2' style={{border:'none'}}> 
                        {/* <p style={{color: '#0c0c0c80'}}>Upload Your Resume Here In PDF Format</p> */}
                        <label htmlFor="myfile" style={{color:'white', fontSize:'15px'}}>Upload Your Resume :</label> <br/>
                        <input className="pb-3 ps-1" type="file" id="myfile" accept="application/pdf" placeholder="Upload Resume" name="myfile" style={{color:'#fff', textTransform: 'none'}} />
                    </div>
                </div>
                <div className="input-single">
                  <textarea
                    name="check-address"
                    id="checkaddress"
                    cols={30}
                    rows={10}
                    placeholder="Your Address*"
                  ></textarea>
                </div>
                <div className="section__cta text-start d-flex justify-content-center pb-5">
                  <button type="submit" className="btn btn--primary">
                   Apply Now
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="col-12 col-lg-5 order-first order-lg-last">
            {/* <div className="checkout-m__content fade-top"> */}
              <Image src={one} alt="image" />
            {/* </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerForm;
