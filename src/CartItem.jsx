import React from 'react'
import {AiFillDelete} from "react-icons/ai"
import { globleContext } from './Context'


const CartItem = ({id,name,price,image,maxStock,quantity,color,coloring}) => {
    const{removeItem}=globleContext()

    
  return (
    <>
      <div className='container'>
        <div className='row justify-content-between'>
            <div className='col-lg-3'>
        
                <img src={image} alt='nothing' width="600px" className='col-lg-2 img-fluid'/>
                <h6>{name}</h6>
                
                
            </div>
            <div className='col-lg-2'>
                <h6>{price}</h6>
            </div>
            <div className='col-lg-2'>
                <h6>{quantity}</h6>
            </div>
            <div className='col-lg-2'>{price*quantity}</div>
            <div className='col-lg-2'>
                <AiFillDelete className='text-danger fs-4' onClick={()=>removeItem(id)}/>
            </div>
        </div>
      </div>
   
    </>
  )
}

export default CartItem
