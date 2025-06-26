import Image from "next/image";
import Link from "next/link";
import Thumb from "@/public/images/learnhub-img-1.png";
import ThumbTwo from "@/public/images/overview/four.png";



const Learnhub_Text = () => {
  return (
    <section className="mt-5 h-unlock">

            {/* <div className="mt-5 p-5"> 
              <p style={{fontWeight:'500' , color:'var(--quinary-color)'}}>
                    At FlumenCopia, we believe in empowering the next generation of creative minds and industry leaders. 
                    Our internship programs are thoughtfully designed to provide hands-on experience, practical skills, and invaluable
                    mentorship across various domains. Whether you are passionate about <b>videography</b>, <b>digital marketing</b>, <b>web development,</b>
                    or <b>branding</b>, our internships offer the perfect platform to learn, grow, and launch your career.
                    Explore our opportunities and take the first step toward turning your ambitions into achievements!
              
            </p>
            </div> */}

      <div className="container">
        <div className="row gaper align-items-center">
          <div className="col-12 col-lg-6">
            <div className="h-unlock__thumb reveal-img parallax-img">
              <Image src={Thumb} alt="Image" priority />
              <div className="h-u-t-content">
                <h3>
                  Nurturing
                  <br /> Talents And
                  <br /> Fostering
                  <br/> Creativity
                </h3> 
              </div>
            </div>
          </div>

           

          <div className="col-12 col-lg-6 col-xl-5 offset-xl-1">
            <div className="section__content">
              {/* <div className="s-thumb">
                <Image src={ThumbTwo} alt="Image" priority />
              </div> */}
              <h2 className="title title-animation">
             Unlock Your Potential
              </h2>
              <p>
              Join us and take the first step toward building a career you are passionate about. Explore our programs and become
              part of a team that values learning, creativity, and innovation. <br/> <br/>
                    <ul className="career_list">
                        <li style={{ color:'var(--quinary-color)'}}>Work on live projects to build a strong portfolio.</li>
                        <li style={{ color:'var(--quinary-color)'}}>Learn from experienced professionals who guide you every step of the way.</li>
                        <li style={{ color:'var(--quinary-color)'}}>Gain in-demand skills and industry insights to kickstart your career.</li>
                        <li style={{ color:'var(--quinary-color)'}}>Build connections with industry leaders and like-minded peers.</li>
                    </ul>
              </p>
              
              {/* <div className="section__content-cta">
                <a href="sign-in" className="btn btn--primary">
                  Get Started
                </a>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Learnhub_Text;

