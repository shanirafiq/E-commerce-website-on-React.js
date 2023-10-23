import axios from "axios";
import { useContext, useEffect, useReducer } from "react";
import { createContext } from "react";
import reducer from "./Reducer/productReducer";
import { json } from "react-router-dom";


const create=createContext();

let API="https://api.pujakaitem.com/api/products"
let initialState={
    isLoading:false,
    isError:false,
    products:[],
    featured:[],
    isSingleLoading:false,
    singleProduct:{},
    filterProduct:[],
    filteration:{
        text:"",
    },
      cart:[],
    
    total_item:"",
    // total_amount:"",
    // shipping_fee:5000,

    
    
}
const AppProvider=({children})=>{
    const[state,dispatch]=useReducer(reducer,initialState)
    const getApi=async (url)=>{
        dispatch({type:"set-loading"})
        try{
            let res=await axios.get(url)
            let products= await res.data;
            dispatch({
                type:"product-item",
                payload:products
            })
        }
   catch(error){
dispatch({
    type:"error-api",

})
   }
           
    }
    // get single product 
      const getSingleProduct=async(url)=>{
        dispatch({type:"set-singleLoading"})
     try{
        let res=await axios.get(url)
        let singleProduct=await res.data;
        console.log(singleProduct.id);
         dispatch({
            type:"set_single",
            payload:singleProduct
         })
     }
     catch(error){
dispatch({type:"singleError"})
     }

      }
      //full project

      const fullProduct=(url)=>{
        try{
            const get=axios.get(url)
            const result=get.data;
            dispatch({
                type:"fullData",
                payload:result
            })
        }
        catch(error){
            dispatch({
                type:"fuulError",
            })
        }
       
      }
    //   const Sorting=()=>{
    //     dispatch({type:"sorting"})
    //   }
    //   full project
    // update filter Value
    // const filterValue=(event)=>{
    //     let name=event.target.name;
    //     let value=event.target.value;
    //     dispatch({
    //         type:"update_filter",
    //         payload:{name,value},
    //     })
    // }
    const AddtoCart=(id,price,stock,count,name,product)=>{
     dispatch({type:"Add to Cart",payload:{id,price,stock,count,name,product}})
    }
    useEffect(()=>{
      
        // dispatch({type:"filter_product"})
       getApi(API)
       fullProduct(API)

    
    },[])
    // useEffect(()=>{
    //   dispatch({
    //     type:"sortedElem",
    //     payload:products
    //   })
    // },[state.sortingVal])
   const removeItem=(id)=>{
     dispatch({
        type:"Remove_item",
        payload:id
     })
    }
    useEffect(()=>{
        dispatch({
            type: "total_card"
        })
    },[state.cart])
    const Clear=()=>{
        dispatch({
            type:"Clear"
        })
    }

return(
    <>
        <create.Provider value={{...state,getSingleProduct,fullProduct,AddtoCart,removeItem
        ,Clear}}>
            {children}
        </create.Provider>
    </>
)
}
const globleContext=()=>{
    return useContext(create)
}
export {globleContext,AppProvider};