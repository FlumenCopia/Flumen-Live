import React from 'react'
import Link from "next/link";

function ServiceContact() {
  return (
    <div>
       <div className="s-details-contact slide-top">
                        <h3 className="text-white fw-7 mb-2">Contact Us</h3>
                    <div className="m-contact__form" >
                      <form action="#" method="post">

                        <div className="input-single mb-3" >
                          <input className='form-control' type="text" name="c-name" id="cName" placeholder="Your Name" required />
                        </div>

                        <div className="input-single mb-3">
                          <input className='form-control' type="email" name="c-Email" id="cEmail" placeholder="Your Email" required />
                        </div>

                        <div className="input-single mb-3">
                          <input className='form-control' type="text" name="c-number" id="cnumber" placeholder="Phone Number" required />
                        </div>

                        <div className=" text-center">
                          <button type="submit" className="btn btn--primary service-detail-contact" style={{padding:'10px'}}>
                            Submit Now
                          </button>
                        </div>

                      </form>
                    </div>
          </div>
    </div>
  )
}

export default ServiceContact