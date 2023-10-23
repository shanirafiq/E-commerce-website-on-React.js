import React from 'react'
import { Link } from 'react-router-dom'
import FormatPrice from './FormatPrice'

const Card = (current) => {
   const {id,name,company,price,image,colors,category}=current
  return (
    <>
  
  <div className='col-md-3 col-sm-6 col-12 mx-sm-auto mx-auto ps-sm-0 ps-5 justify-content-center'>
     <Link to={`/pages/${id}`}>
   
     <div class="card" style={{width: "16rem"}}>
     <figure>
  <img src={image} class="card-img-top" alt="nothing"/>
  <figcaption className='caption'>{category}</figcaption>
  
  </figure>
  <div class="card-body d-flex justify-content-around text-decoration-none">
    <h5 class="card-title text-decoration-none">{name}</h5>
    <p className='text-primary'><FormatPrice price={price}/></p>
  </div>
</div>
 </Link>
</div>
 
     
   
    </>
  )
}

export default Card
