import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
//import action
import { setProducts } from "../actions/productActions";
import ProductComponent from "./ProductComponent";
//for fetch data
import axios from 'axios';
import { useEffect } from "react";

const ProductListing=()=>{
    const products=useSelector((state)=>state);

    const dispach=useDispatch();

     const fetchProducts=async()=>{
      
      const response = await axios
        .get('https://fakestoreapi.com/products')
        .catch((error) => {
          console.log("error", error);
        });
        //send data to 
      dispach(setProducts(response.data));
     }

     useEffect(()=>{
      fetchProducts();
     },[])
     console.log("proooooooo",products);
    return(
      <div className="ui grid continer">
        <ProductComponent/>
        
      </div>

    )
}
export default ProductListing;
