import React from 'react';

import { useState } from 'react';
import { useEffect } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] =useState([]);
    // const [rNumber, setRnumber]=useState();

    // console.log(rNumber);
    // const [selectedProduct, setProduct]=useState({});
    useEffect(()=>{
      fetch('product.json')
      .then(res => res.json())
      .then(data => setProducts(data))
    }
      ,[])

    //   useEffect(()=>{
    //     const randomNumber = Math.floor(Math.random()*cart.length);
    //     setRnumber(randomNumber);
    //   },[])

    const buttonHandler =(selectedProduct)=>{
        // setCart(selectedProduct);
        const id =selectedProduct.id;
        const result = cart.find((selectedProduct)=>selectedProduct.id===id);
        if(!result){
            const newCart = [...cart, selectedProduct];
            setCart(newCart);
        }

    }

    // Random Number
    

    return (
      <div className='all-products'>
        <div className='product'>
        {
          products.map(product=>
          <Product key={product.id} product={product} handler={buttonHandler}></Product>)
        }
        </div>
        <div className='product-summary'>
            <div className='selected-products'>
                <h2>Selected Products:</h2>
            </div>
            {
                cart.map(product=><Cart key={product.id} product={product}></Cart>)
            }
        </div>
        <div>
           
        </div>
      </div>
    );
};

export default Shop;