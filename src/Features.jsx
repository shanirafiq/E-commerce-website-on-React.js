import React from 'react'
import { globleContext } from './Context'
import Card from './Card';

const Features = () => {
    const {isLoading,featured}=globleContext();
    console.log( featured);
    if(isLoading){
        return <h2>.....loading</h2>
    }
  return (
    <>
      <div className='bg-light'>
       
    <div className='features'>
      <div className='container'>
      <h5 className='text-primary text-center col-2 py-1'>check now</h5>
      <h4 className=' text-capitalize col-4 py-3 text-center pe-5'>our features services</h4>
        <div className='row align-items-center  justify-content-center gap-4'>
     
        {featured.map((current)=>{
           return <Card key={current.id}
                         {...current}

            />
        })}
        </div>
      </div>

      </div>
      </div>
    
    </>
  )
}

export default Features
