import React from 'react'
import { Link } from 'react-router-dom'

const GridCard = ({image,category,price,name,id}) => {
  return (
    <>
     
        <div className="col-lg-4 bg-white">
        <Link to={`/pages/${id}`}>
        
                                <figure className="product-img ">
                                  <img src={image} alt="nothing" width="400px" className="img-fluid card-img-top "/>
                                  <figcaption className="caption">{category}</figcaption>
                                </figure>
                                <div className="d-flex justify-content-around text-black">
                                  <p>{name}</p>
                                  <p className="text-primary">{price}</p>
                                </div>
                                </Link>
                              </div> 
                             
    </>
  )
}

export default GridCard
