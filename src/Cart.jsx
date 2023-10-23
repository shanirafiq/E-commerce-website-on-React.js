import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import SemiFooter from './SemiFoter'
import { globleContext } from './Context'
import CartItem from './CartItem'
import { Link } from 'react-router-dom'

const Cart = () => {
  const{cart,Clear}=globleContext();
  console.log(cart);
  const{id,amount,price,image,name,maxStock,quantity,color}=cart
  console.log(id,name);

  return (
    <>
      <Navbar/>
      <div className='container'>
        <div className='row justify-content-between ps-4 py-5'>
          <div className='col-lg-2'>
          <p>ITEMS</p>
          </div>
          <div className='col-lg-2'>
          <p>Price</p>
          </div>
          <div className='col-lg-2'>
          <p>Quantity</p>
          </div>
          <div className='col-lg-2'>
          <p>Subtotal</p>
          </div>
          <div className='col-lg-2'>
          <p>Remove</p>
          </div>
          </div>
          <hr/>
       
            {
              cart.map((current,index)=>{
               const{id,name,price,image,maxStock,quantity,color,coloring}=current;
               return <CartItem key={current.id}
                {...current}
                id={id}
                name={name}
                price={price}
                image={image}
                maxStock={maxStock}
                quantity={quantity}
                color={color}
                coloring={coloring}

               />

              })
            }
            <div className='row mt-5 justify-content-between'>
        <div className='col-lg-3'>
        <Link to="/product">
            <button className='bg-primary text-white p-2 fs-6'>Continue Shopping</button>
            </Link>
        </div>
        <div className='col-lg-3'>
            <button className='bg-danger text-white ms-5 p-2 fs-6' onClick={Clear}>Clear Cart</button>
        </div>
      </div>
          
        </div>
       
      
      
      <SemiFooter/>
      <Footer/>
    </>
  )
}

export default Cart
