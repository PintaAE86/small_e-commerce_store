//it will be each product we will list on our website
import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'; 


const ProductComponent = () => {
  //where all the reducers are combined (index.js) allProduct is assigned the state from reducers
    const products = useSelector((state) => state.allProducts.products);
    const listOfProducts = products.map((items, index) => {
      const {id, title, image, price, category} = items;
      return (
      <div className='four wide column' key={id}>
        <Link to={`/product/${id}`}>

      <div className='ui link cards'>


        <div className='card '>
        <div className='image'>
            <img src={image} alt={title}/>
          </div>
          <div className='content'>
            <div className='header'>{title}</div>
            <div className='meta price'>$ {price}</div>
            <div className='meta'>{category}</div>
          </div>

        </div>
      </div>
      </Link>
    </div>

    )})
  return (
    <>
    {listOfProducts}
    </>
  )
}

export default ProductComponent;
