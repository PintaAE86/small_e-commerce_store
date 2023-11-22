import React, { useEffect } from 'react'
import axios from 'axios';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { selectedProduct } from '../redux/actions/productAction';

const ProductDetail = () => {
  const { productId } = useParams();
  const products = useSelector((state) => state.product)
  const dispatch = useDispatch();
  console.log('product id',productId)
  const getDetails = async () => {
    try {
      const response = await axios.get(`https://fakestoreapi.com/products/${productId}`);
      dispatch(selectedProduct(response.data))
      console.log(response);
    } catch (error) {
      console.log('Error occured while gettting product details:', error)
    }
  }
  useEffect(()=>{
    getDetails();
  },[])

  return (
    <div>
      <h1>
        ProductDetail
        </h1>
      </div>
  )
}

export default ProductDetail;