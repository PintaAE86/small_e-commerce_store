import React, {useEffect} from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';

import ProductComponent from './ProductComponent';
import { setProducts } from '../redux/actions/productAction'

const ProductListing = () => {
  const products = useSelector((state) => state)
  const dispatch = useDispatch();
  const fetchProducts = async () => {
    try{
      const response = await axios.get('https://fakestoreapi.com/products');
      dispatch(setProducts(response.data));
    } catch(error) {
      console.log('Error fetching data:', error);
    }

  }

  useEffect(()=>{
    fetchProducts();
  },[])

  console.log(products)
  return (
    <div className='ui grid container'  style={{ marginTop: '20px' }}>
        <ProductComponent />
    </div>
  )
}

export default ProductListing;