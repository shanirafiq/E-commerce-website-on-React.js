import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { NavLink } from "react-router-dom";
import {BsCartDash} from "react-icons/bs"
import { globleContext } from "./Context";


const Navbar=()=>{
  const{total_item}=globleContext();
  console.log(total_item);

    return(
        <>
      
        
    <nav className="navbar navbar-expand-lg bg-body-tertiary p-3">    
  <div className="container">
    <a className="navbar-brand" href="#">Zeeshan Rafiq</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse text-center" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 pe-5 mb-lg-0">
        <li className="nav-item md-pe-5 pe-0 pt-lg-0 pt-4">
          <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item md-pe-5 ps-md-3 pe-0 pt-lg-0 pt-5">
          <NavLink className="nav-link" aria-current="page" to="/about">About</NavLink>
        </li>
        <li className="nav-item md-pe-5 ps-md-3  pe-0 pt-lg-0 pt-5">
          <NavLink className="nav-link" aria-current="page" to="/product">Product</NavLink>
        </li>
        <li className="nav-item md-pe-5 ps-md-3  pe-0  pt-lg-0 pt-5">
          <NavLink className="nav-link " aria-current="page" to="/contact">Contact</NavLink>
        </li>
        <li className="ms-md-4 ms-1 ps-md-3  pt-lg-0 pt-4"> 
        <button className="bg-primary mt-2 ps-3 pe-3 p-1 text-white">Login</button>
        </li>
        
        <li className="cart-troly-main ms-md-4 ms-1 pt-lg-1 pt-5 ">
            <NavLink to="cart">
              <BsCartDash className="cart-troly mt-2"/>
              <span className="total-item">{total_item}</span>
            </NavLink>
        </li>
      
      </ul>
   
    </div>
  </div>
  
</nav>

        </>
    )
}
export default Navbar