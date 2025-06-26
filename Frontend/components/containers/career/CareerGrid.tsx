import React from 'react'
import Image from "next/image";
import career1 from "@/public/images/career/career-icon-1.png";
import career2 from "@/public/images/career/career-icon-2.png";
import career3 from "@/public/images/career/career-icon-3.png";
import career4 from "@/public/images/career/career-icon-4.png";
import career5 from "@/public/images/career/career-icon-5.png";
import career6 from "@/public/images/career/career-icon-6.png";


const CareerGrid = () => {
  return (
    <div className='container'>
        <div className='row '>
 
            <div className=' career-wrap col-sm-4 p-5'>
                <div className= 'd-flex justify-content-center'>
                    <Image width="80" height="80"  src={career1} alt="Image" priority  style={{borderRadius:'50%',border:"1px solid black", padding:'10px'}}/>
                </div>                
                <h4 className='text-center'>Exposure</h4>
                <p>
                Experience unparalleled opportunities to work on diverse, impactful projects across industries. You will 
                gain practical insights, broaden your expertise, and stay ahead in an ever-evolving professional landscape.
                Every task is a chance to learn, grow, and showcase your talents.
                </p>
            </div>

            <div className=' career-wrap col-sm-4 p-5'>
                <div className= 'd-flex justify-content-center'>
                    <Image width="80" height="80"  src={career2} alt="Image" priority  style={{borderRadius:'50%',border:"1px solid black", padding:'10px'}}/>
                </div>
                <h4 className='text-center'>Mentorship</h4>
                <p>
                Our experienced mentors are here to guide you every step of the way, offering personalized advice and support.
                They will help you sharpen your skills, navigate challenges, and achieve your career goals. At our company, 
                mentorship is not just guidance—it is a partnership for your growth.

                </p>
            </div>

            <div className=' career-wrap-sec col-sm-4 p-5 '>
                <div className= 'd-flex justify-content-center'>
                    <Image width="80" height="80"  src={career3} alt="Image" priority  style={{borderRadius:'50%',border:"1px solid black", padding:'10px'}}/>
                </div>
                <h4 className='text-center'>Be heard</h4>
                <p>
                We value every voice and encourage open dialogue across all levels of the organization. Your ideas, feedback
                and suggestions are not just welcomed but actively sought out. Together, we create an environment where innovation
                thrives and everyone feels valued.
                </p>
            </div>

            <div className=' career-wrap-section career-wrap-mobi col-sm-4 p-5'>
                <div className= 'd-flex justify-content-center'>
                    <Image width="80" height="80"  src={career4} alt="Image" priority  style={{borderRadius:'50%',border:"1px solid black", padding:'10px'}}/>
                </div>
                <h4 className='text-center'>Equality</h4>
                <p>
                We are committed to providing equal opportunities, fostering respect, and celebrating individual differences.
                In our workplace, everyone has a chance to excel and contribute meaningfully.
                </p>
            </div>

            <div className=' career-wrap-section career-wrap-mobi col-sm-4 p-5'>
                <div className= 'd-flex justify-content-center'>
                    <Image width="80" height="80"  src={career5} alt="Image" priority  style={{borderRadius:'50%',border:"1px solid black", padding:'10px'}}/>
                </div>
                <h4 className='text-center'>Ownership</h4>
                <p>
                We empower you to take ownership of your work and lead initiatives with confidence. Every team member is trusted
                to make impactful decisions and drive meaningful outcomes. When you succeed, we all succeed—your contributions truly matter.
                </p>
            </div>

            <div className=' career-wrap-none col-sm-4 p-5'>
                <div className= 'd-flex justify-content-center'>
                    <Image width="80" height="80"  src={career6} alt="Image" priority  style={{borderRadius:'50%',border:"1px solid black", padding:'10px'}}/>
                </div>
                <h4 className='text-center'>Transparency</h4>
                <p>
                Open communication is the foundation of our company culture. We ensure that everyone is informed about key decisions,
                plans, and changes. By fostering transparency, we build trust and create a collaborative environment where everyone
                is aligned.
                </p>
            </div>

        </div>

    </div>
    
  )
}

export default CareerGrid