import React, { useState } from 'react'
import {AiOutlineCheck} from "react-icons/ai"
import Increment from './Increment'
import { globleContext } from './Context'
import {AiOutlineMinus} from "react-icons/ai"
import {IoIosAdd} from "react-icons/io"
import { Link } from 'react-router-dom';


    const AddCard = ({product}) => {
      console.log(product.image);
      const{AddtoCart,singleProduct}=globleContext();
      const{category,company,description,id,image,name,price,reviews,shipping,stars,stock,colors}=singleProduct;
    //  const[coloring,setColoring]=useState(colors)
    

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
      
          <span className='mt-4 ms-2'> colors: </span> 
             {/* {colors.map((current,index)=>{
                return <button className='ms-3 p-2 rounded-4 position-relative' style={{background:current}}
                onClick={()=>setColoring(current)}>
                {coloring===current? <AiOutlineCheck className=" text-white fs-6"
                />:null} 
                
                 </button>
            })} */}
            <div className='fw-bolder fs-2 gap-3 mt-4'>
      <AiOutlineMinus onClick={Dec}/>
      <span className='pt-2 ms-4'>{count} </span>
      <IoIosAdd className='ms-4' onClick={Incre}/>
      </div>
      <Link to="/cart" onClick={()=>AddtoCart(id,price,stock,count,name,product)}>
      
      <button className='bg-primary text-white mt-1 ps-2 pe-2 p-2'>Add Card</button>
      </Link>
    </>
  )
}

export default AddCard
