import React from 'react';

import { useState } from 'react';
import { useEffect } from 'react';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    useEffect(()=>{
      fetch('product.json')
      .then(res => res.json())
      .then(data => setProducts(data))
    }
      ,[])
    return (
      <div className='all-products'>
        <div className='product'>
        {
          products.map(product=>
          <Product key={product.id} product={product}></Product>)
        }
        </div>
        <div className='product-summary'>
            <h1>Summary</h1>
        </div>
      </div>
    );
};

export default Shop;