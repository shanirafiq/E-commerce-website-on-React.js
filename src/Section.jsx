import React from 'react'
import {SiJsdelivr} from "react-icons/si"
import {MdIncompleteCircle} from "react-icons/md"
import {MdLocalShipping} from "react-icons/md"
import {GiSecretBook} from "react-icons/gi"
const Section = () => {
  return (
  <>
    <div className='section'>
      <div className='container'>
        <div className='row g-5 gap-3 align-items-center justify-content-center'>
            <div className='col-md-3 col-10 bg-light shadow d-flex flex-column justify-content-center align-items-center' style={{height:"200px"}}>
              <SiJsdelivr className=' text-primary display-4 bg-white p-3'/>
              <p className='py-3 text-capitalize'>super fast free delivery</p>
            </div>
            
            <div className='col-md-3  col-10 '>
              <div className='row  bg-light  align-items-center' style={{height:"90px"}}>
                <div className='col-3'>
                  <MdIncompleteCircle className=' text-primary display-4 bg-white p-3'/>
                </div>
                <div className='col-9 pt-3'>
                  <p>Non-content shipping</p>
                </div>
              </div>
              <div className='row mt-4  bg-light align-items-center' style={{height:"90px"}}>
                <div className='col-3'>
                  <MdLocalShipping className=' text-primary display-4 bg-white p-3'/>
                </div>
                <div className='col-9 pt-3'>
                  <p>Non-content shipping</p>
                </div>
              </div>
            </div>
            <div className='col-md-3 col-10 bg-light shadow d-flex flex-column justify-content-center align-items-center' style={{height:"200px"}}>
            <GiSecretBook className='text-primary display-4 bg-white p-3'/>
            <p>super fast and secure system</p>
             
            </div>
        </div>
      </div>
    </div>
  
  </>
  )
}

export default Section
