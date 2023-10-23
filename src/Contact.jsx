import React, { useState } from "react";
import Navbar from "./Navbar";
import SemiFoter from "./SemiFoter";
import Footer from "./Footer";
const Contact=()=>{
    const[name,setName]=useState({
        name:"",
        email:"",
        messege:""
    })
    const[btn,setBtn]=useState(null);
    const Abc=(e)=>{
      let val=  e.target.value;
      let nam= e.target.name;
       setName(
        ((pre)=>{
     return {
        ...pre,
        [nam]:val
     }
        })
       )
    
    }
    let Change=()=>{
       setBtn(  alert(`${name.name }
    ${name.email}
    ${name.messege}`))
          if(alert){
            setBtn("")
          }
       
    
    }

    return(
        <>
        <Navbar/>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d111256.59449753244!2d71.60760985240914!3d29.377064566186267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x393b90c46c611ad5%3A0xfcdf0da8e103f862!2sBahawalpur%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1697103948938!5m2!1sen!2s" width="100%" height="450" style={{border:"0",marginTop:"40px"}} allowFullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        <div className="form" style={{height:"400px"}}>

        <div className="container text-center mt-5">
        
    
            <div className="col-12">
                <input type="text" name="name" placeholder="Enter your name" className="col-6 p-2" value={btn} onChange={Abc}/>
            </div>
            <div className="col-12">
                <input type="email" name="email" placeholder="Enter your Email" className="col-6 mt-4 p-2" value={btn} onChange={Abc}/>
            </div>
            <div className="col-12">
                <textarea cols={73} rows={7} value={btn} name="messege" className="mt-4 area"  onChange={Abc}></textarea>
            </div>
            <div className="col-7 justify-content-center align-items-center">
                <button className="bg-primary text-white mt-4 col-md-2 col-3 p-1 pe-1 ps-2 ms-3 p-2" onClick={Change}>SEND</button>
            </div>
        </div>
        </div>
        <SemiFoter/>
        <Footer/>
        
        </>
    )
}
export default Contact;