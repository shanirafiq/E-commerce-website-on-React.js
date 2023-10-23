import React from 'react'
import { Link } from 'react-router-dom'
 import { useParams } from 'react-router-dom'
const ApI="https://api.pujakaitem.com/api/products"

const ListView = ({image,category,price,name,id}) => {
    const {Id}=useParams()
  return (
    <>
      <div classNameName='col-lg-10 d-flex justify-content-center mx-auto'>
      <Link to={`/pages/${id}`}>
      <div className="card mb-3" style={{width: "540px"}}>
  <div className='row'>
    <div className="col-md-4">
      <img src={image} className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">{category}</h5>
        <p className="card-text">{name}</p>
        <p className="card-text"><small className="text-body-secondary">{price}</small></p>
      </div>
    </div>
    </div>
  
</div>
 </Link>
      </div>
     
    </>
  )
}

export default ListView
