import React,{useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import {useParams} from "react-router-dom";
import { selectedProduct } from "../actions/productActions";

const ProductDetail = () => {
  const product = useSelector((state) => 
    state.product
  );
  
 
  const {productId}=useParams();
  const dispach=useDispatch();
  console.log(productId);
  const fetchProductDetail=async()=>{
    const response=await
     axios
       .get("https://fakestoreapi.com/products/${productId}")
       .catch((err) => {
        console.log("Err",err);
       });
       dispach(selectedProduct(response.data));
  }
   useEffect(()=>{

     if(productId && productId !=="")fetchProductDetail();

   })
  return (
    <div className="ui grid container">
      <div className=" ui placeholder segment">
        <div>
          
        </div>


      </div>
      
    </div>
  );
};
export default ProductDetail;
