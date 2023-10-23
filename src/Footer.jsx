import React from 'react'
import {AiFillFacebook} from "react-icons/ai"
import {IoLogoYoutube} from "react-icons/io"
import {AiFillInstagram} from "react-icons/ai"
const Footer = () => {
  return (
    <>
       <div className='footer'>
        <div className='container'>
            <div className='row gy-5 ps-sm-0 pe-sm-0 ps-3 pe-3'>
                <div className='col-md-3 col-6'>
                    <h3>zeeshan Rafiq</h3>
                    <p>i am a frontend and also the react developer i build responsive website</p>
                </div>
                <div className='col-md-3 col-6'>
                    <p>i work hard for the life is subbess</p>
                    <input type='text' placeholder='Enter your name' className='p-2'/>
                    <button className='bg-primary text-white mt-2 ps-2 pe-2 p-2'>Subscribe</button>
                </div>
                <div className='col-md-3 col-6'>
                    <h5>Follow us</h5>
                    <AiFillFacebook className='fs-4'/>
                    <IoLogoYoutube className='fs-4 ms-2'/>
                    <AiFillInstagram className='fs-4 ms-2'/>
                </div>
                <div className='col-md-3 col-6'>
                    <h6>call us</h6>
                    <p>03041700470</p>
                </div>
            </div>
        </div>
       </div>
    </>
  )
}

export default Footer
