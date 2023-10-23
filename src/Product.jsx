// import React, { useContext, useEffect, useReducer, useState } from "react";
import Navbar from "./Navbar";
import SemiFoter from "./SemiFoter";
import Footer from "./Footer";
import axios from "axios"
import { globleContext } from "./Context";
import {BsFillGridFill} from "react-icons/bs"
import {FaListOl} from "react-icons/fa"
import GridCard from "./GridCard";
import ListView from "./ListView";
// import {  useState,useParams } from 'react-router-dom';
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Search from "./Search";



const Product=()=>{
  // const {Id}=useParams()
  const { isLoading ,isError,products}=globleContext()
  const{ category,colors,company,description,id,image,name,price}=products
  const[show,setShow]=useState(true)
  const[showOne,setShowOne]=useState(false)
  const[value,setValue]=useState("")
  const [items,setItems]=useState("")
  const[length,setLength]=useState(products.length)

  let Handler=(cata)=>{
    let pro=products.filter((elem)=>{
         return elem.category===cata
      })
      setFilter(pro)
      console.log(pro);
   }
   
const Handling=()=>{
  setShowOne(!showOne)
  setShow(false)
  
}
const HandlerOne=()=>{
  setShow(!show)
  setShowOne(false)
}

const Sorting=()=>{

  let user=document.getElementById("sort")
  let sortVal=user.options[user.selectedIndex].value;
  
  if(sortVal==="z-a"){
    products.sort((a,b)=>a.name.localeCompare(b.name))
  }
  else if(sortVal==="a-z"){
    products.sort((a,b)=>b.name.localeCompare(a.name))
  }
  else if(sortVal==="highest"){
    products.sort((a,b)=>a.price-b.price)
  }
  else if(sortVal==="lowest"){
    products.sort((a,b)=>b.price-a.price)
  }
  

}
useEffect(()=>{
  console.log("hi");
},[value,items,length])
  


   
    return(
        <>
        <Navbar/>
          <div className="container mt-5">
            <div className="row gap-3  text-white justify-content-center">
              <div className="col-lg-3 bg-light text-black">
            <div className="search text-center mt-5">
              <input type="search" placeholder="search" value={items} onChange={(e)=>setItems(e.target.value)}
                className="ps-2 pe-2 p-2"
              />
            </div>
       <div className='items'>
       <h4 className='text-primary py-5 text-center'>catagoryWise</h4>
      <hr/>
      <div className='curser-pointer'>
<h6 className='fw-bold text-center py-4' style={{cursor:"pointer"}} onClick={()=>Handler("mobile")}>Mobiles</h6>
<h6 className='fw-bold text-center py-4' style={{cursor:"pointer"}}>Laptops</h6>
<h6 className='fw-bold text-center py-4' style={{cursor:"pointer"}}>Mobiles</h6>
<h6 className='fw-bold text-center py-4' style={{cursor:"pointer"}}>Computers</h6>
<h6 className='fw-bold text-center py-4' style={{cursor:"pointer"}}>accessories</h6>

<h6 className='fw-bold text-center pt-5' style={{cursor:"pointer"}}>watch</h6>
</div>

        
    
       </div>
              </div>
              <div className="col-lg-8">

              <div className="container">

              <div className="row border border-3 border-primary text-black rounded-5 p-3">

              
                   
                <div className="col-lg-4">
                  <BsFillGridFill onClick={HandlerOne}/>
                  <FaListOl className="ms-2" onClick={Handling}/>
                </div> 
                <div className="col-lg-4 text-center"> number of items{length}</div>
                <div className="col-lg-4 text-end">
                  <select id="sort" onClick={Sorting} onChange={(e)=>setValue(e.target.value)}>
                  
                    <option value="highest">highest</option>
                    <option disabled></option>
                    <option value="lowest">lowest</option>
                    <option disabled></option>
                    <option value="a-z">a-z</option>
                    <option disabled></option>
                    <option value="z-a">z-a</option>
                    <option disabled></option>
                  </select>
                </div> 
              
                     
                   </div>
                   </div>
                  
                   <div className="col-lg-12 text-white mt-3">
                    <div className="row justify-content-center">
                    
       { products.filter((elem,index)=>{
       if(items==""){
       return elem
       }
        else if(elem.name.toLowerCase().includes(items.toLowerCase())){
          return elem.name;
        }
        }).map((current,index)=>{
                            const{id,name,company,price,image,description,category}=current
                           return(
                            <>

                       { (show ) && 
                         <GridCard image={image}
                            category={category}
                            price={price}
                            name={name}
                            key={index} 
                            id={id}
                            {...current}
                            />
                       }
                       {
                        showOne &&   
                            <ListView
                           image={image}
                            category={category}
                            price={price}
                            name={name}
                              key={index}
                              id={id}
                              {...current}
                            
                            />
                        
                       }
                      
                       
                            </>
                           )
                          })
                    }
                  
                    
              
              
                   </div>
                   </div> 
                   </div>
                   </div>
                   </div>
               
                    
            
      
        <SemiFoter/>
       
        <Footer/>
      
        </>
        
    )

    
}

export default Product;