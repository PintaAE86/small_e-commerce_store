//it will be each product we will list on our website
import React from 'react'
import { useSelector } from 'react-redux';

const ProductComponent = () => {
  //where all the reducers are combined (index.js) allProduct is assigned the state from reducers
    const products = useSelector((state) => state.allProducts.products);
    const {id, title} = products[0]
  return (
    <div className='four column wide'>
      <div className='ui link cards'>
        <div className='card'>
          <div className='image'></div>
          <div className='content'>
            <div className='header'>{title}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductComponent;
