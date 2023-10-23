import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import PageNavigation from './PageNavigation';
import { globleContext } from './Context'
import Image from './Image';
import AddCard from './AddCard';
import Increment from './Increment';
import SemiFoter from './SemiFoter';




const ApI="https://api.pujakaitem.com/api/products"
const Pages = () => {
  const {Id}=useParams();
  const {getSingleProduct,products, isSingleLoading, singleProduct}=globleContext();
  console.log(singleProduct);
const{category,company,description,id,image,name,price,reviews,shipping,stars,stock,colors}=singleProduct;
useEffect(()=>{
  getSingleProduct(`${ApI}?id=${Id}`)
},[])
if(isSingleLoading){
  return <h2>is Loading....</h2>
}
  return (
    <>
    <Navbar/>
          <PageNavigation title={name}/>
          <div className='page'>
          <div className='container'>
            <div className='row'>
            <div className='col-lg-6'>
            <div className='product_image'>
              <Image img={image}/>
              </div>
              </div>
              <div className='col-lg-6 d-flex flex-column justify-content-center'>
                product data 
               <div className='product_data'>
              <h2>{name}</h2>
              <h6>Deal of the day :{price}</h6>
              <p>{description}</p>
              <p>{stock>0? "in stock":"not available"}</p>
              <p>Available {stock}</p>
              <p>ID is : {Id}</p>
              <p>Brand {company}</p>
              <hr/>
              
              <AddCard colors={colors}
                product={singleProduct}
              />
             

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

export default Pages;
