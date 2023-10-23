import React from 'react'

const productReducer = (state,action) =>{
    if(action.type==="set-loading"){
        return {
            ...state,
            isLoading:true
        }
    }
    if(action.type==="error-api"){
        return{
            ...state,
            isError:true,
            isLoading:false
        }
    }
    if(action.type==="product-item"){
        const featuredData=action.payload.filter((current)=>{
          return current.featured===true
        })
        return{
            ...state,
            isLoading:false,
            products:action.payload,
            featured:featuredData,
            
        }
       
    }
    if(action.type=="set-singleLoading"){
     return {
        ...state,
        isSingleLoading:true,
     }  
      
    }
    if(action.type==="singleError"){
        return {
            ...state,
            isSingleLoading:false,
            isError:true,

        }
    }
    if(action.type==="set_single"){
        return{
            ...state,
            isSingleLoading:false,
            singleProduct:action.payload,
        }
    }
    if(action.type==="fullData"){

        return {
            ...state,
            isLoading:false,
            products:action.payload,
            filterProduct:action.payload
        }
    
    }
    if(action.type==="fuulError"){
     return{
        isError:true
     }
    }
    // if(action.type=="update_filter"){
    // const {name,value}=action.payload;
    // return {
    //     ...state,
    //     filteration:{
    //         ...state.filterValue,
    //         [name]:value
    //     }
    // }
    // }
    // if(action.type==="filter_product"){
    //     let{  filterProduct}=state;
    //     let tempFilter=[...filterProduct]
    //     const{text}=state.filteration;
    //     if(text){
    //         tempFilter=tempFilter.filter((current)=>{
    //             return current.name.toLowerCase().includes(text)
    //         })
    //     }
    //     return{
    //         ...state,
    //         filterProduct:tempFilter
    //     }
    // }
    if(action.type==="Add to Cart"){
        let{id,price,stock,count,product}=action.payload;
        console.log(product);
        let carProduct={
            id:id,
            name:product.name,
            maxStock:stock,
           quantity:count,
            price,
            image:product.image[0].url
    
        }
      return{
        ...state,
        cart:[...state.cart,carProduct]
      }  

    }
if(action.type==="Remove_item"){
    let updateData=state.cart.filter((current)=>current.id!==action.payload)
    return{
        ...state,
        cart:updateData,
    }
}
if(action.type==="Clear"){
    return{
        ...state,
        cart:[]
    }
}
if(action.type=== "total_card"){
    let items=state.cart.reduce((initial,current)=>{
let {quantity}=current;
initial=initial+quantity
return initial
    },0)
    return {
        ...state,
        total_item:items
        
    }
}
    return state


}


export default productReducer
