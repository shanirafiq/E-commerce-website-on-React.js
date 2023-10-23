import React, { useState } from 'react'

import { globleContext } from './Context';



const Increment = () => {
  const{AddtoCart,singleProduct}=globleContext();
  const{category,company,description,id,image,name,price,reviews,shipping,stars,stock,colors}=singleProduct;
  // console.log(product)
  
    const[count,setCount]=useState(1);
   const Dec=()=>{
    count>1? setCount(count-1):setCount(1)
   }
   const Incre=()=>{
stock > count?setCount(count+1):setCount(stock)
   }
  return (
    <>
    <div className='fw-bolder fs-2 gap-3 mt-4'>
      <AiOutlineMinus onClick={Dec}/>
      <span className='pt-2 ms-4'>{count} </span>
      <IoIosAdd className='ms-4' onClick={Incre}/>
      </div>
      <Link to="/cart" onClick={()=>AddtoCart(id,colors,price,product)}>
      
      <button className='bg-primary text-white mt-1 ps-2 pe-2 p-2'>Add Card</button>
      </Link>
    </>
  )
}

export default Increment
