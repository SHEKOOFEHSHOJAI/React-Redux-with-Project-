import React,{useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import {useParams} from "react-router-dom";
import {
  selectedProduct,
  removeSelectedProduct,
} from "../actions/productActions";


//GET PRODUCT

const ProductDetail = () => {
  const {productId}=useParams();
  
  const product = useSelector((state) => 
    state.product
  );
  
 const { image, title, price, categery, description } = product;


  //SEND  TO SELECTEDPRODUCT IN ACTIONTYPE

  const dispach=useDispatch();

  console.log(productId);

  //FETCH DATA

  const fetchProductDetail=async(id)=>{
    const response=await
     axios
       .get(`https://fakestoreapi.com/products/${id}`)

       .catch((err) => {
        console.log("Err",err);
       });

       dispach(selectedProduct(response.data));
  }


   useEffect(()=>{

     if(productId && productId !=="")
     fetchProductDetail(productId);
     return () => {
       dispach(removeSelectedProduct());
     };

   },[productId])

  return (
    <div className="ui grid container">
      {Object.keys(product).length === 0 ? (
        <div>...Loading</div>
      ) : (
        <div className="ui placeholder segment">
          <div className="ui two column stackable center aligned grid">
            <div className="ui vertical divider">AND</div>
            <div className="middle aligned row">
              <div className="column lp">
                <img className="ui fluid image" src={image} alt=""/>
              </div>
              <div className="column rp">
                <h1>{title}</h1>
                <h2>
                  <a className="ui teal tag label" href="">${price}</a>
                </h2>
                <h3 className="ui brown block header">{categery}</h3>
                <p>{description}</p>
                <div className="ui vertical animated button" tabIndex="0">
                  <div className="hidden content">
                    <i className="shop icon"></i>
                  </div>
                  <div className="visible content">Add to Cart</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default ProductDetail;
