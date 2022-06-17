import React from "react";
import { useDispatch, useSelector } from "react-redux";
//import action
import { setProducts } from "../actions/productActions";
import ProductComponent from "./ProductComponent";
//for fetch data
import axios from 'axios';
import { useEffect } from "react";

const ProductListing=()=>{
    const products = useSelector((state) => state);

    const dispatch=useDispatch();

     const fetchProducts=async()=>{
      
      const response = await axios
        .get('https://fakestoreapi.com/products')
        .catch((error) => {
          console.log("error", error);
        });
        //send data to 
      dispatch(setProducts(response.data));
     }

     useEffect(()=>{
      fetchProducts();
     },[]);
     
     console.log("proooooooo",products);
    return(
      <div className="ui grid continer">
        <ProductComponent/>
        
      </div>

    )
}
export default ProductListing;

//https://www.youtube.com/watch?v=kK_Wqx3RnHk
//https://www.youtube.com/watch?v=0ZJgIjIuY7U
//https://www.youtube.com/watch?v=FUKpWgRyPlU
//https://www.youtube.com/watch?v=tQ80uAyqVyI&list=PLC3y8-rFHvwheJHvseC3I0HuYI2f46oAK&index=28
