import React, { useState } from 'react'

const Image = ({img=[{url:" "}]}) => {
  const[image,setImage]=useState(img[0].url)
return(
    <>
      <div className='container'>
        <div className='row justify-content-end'>
             <div className='col-lg-3'>
                {
                    img.map(current=>{
                    return(
                    
           <figure>
            <img src={current.url} alt={current.filename} className='img-fluid' onClick={()=>setImage(current.url)}/>
        </figure>
                    
                    )
                    })
                }
             </div>
             <div className='col-lg-7'>
              <img src={image} className='img-fluid'/>
             </div>
        </div>
      </div>
    </>
)
}

export default Image
