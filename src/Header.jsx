import React from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

const Header = ({text,img}) => {
  return (
    <>
    <div className='header'>


    <div className='container'>
        <div className='row gy-4 text-sm-start text-center ps-2 pe-2'>
            <div className='col-md-6 col-12'>
               <p className='text-primary fw-bold'>welcome</p>
               <p className='display-5 fw-bold'>{text}</p>
               <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying</p>
               <button className='bg-primary text-white ps-3 pe-3 pt-2 pb-2 rounded'>Shop Now</button>

            </div>
            <div className='col-md-6 col-12'>
                <img src={img}
                alt='nothing' className='col-9 img-fluid rounded '/>
            </div>
        </div>
    </div>
    </div>
    </>
  )
}

export default Header
