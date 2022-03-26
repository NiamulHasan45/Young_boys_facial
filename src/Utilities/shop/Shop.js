import React from 'react';

import { useState } from 'react';
import { useEffect } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] =useState([]);
    const [choiceCart, setChoiceCart] =useState([]);
    const [number, setNumber]=useState([]);

    // console.log(rNumber);
    // const [selectedProduct, setProduct]=useState({});
    useEffect(()=>{
      fetch('product.json')
      .then(res => res.json())
      .then(data => setProducts(data))
    }
      ,[])

    const buttonHandler =(selectedProduct)=>{
        // setCart(selectedProduct);
        const id =selectedProduct.id;
        const result = cart.find((selectedProduct)=>selectedProduct.id===id);
        if(!result){
          if(cart.length<4){
            const newCart = [...cart, selectedProduct];
            setCart(newCart);
          }
          else{
            alert("Maximum exceeded1");
          }
        }

    }

    // Warning when more than four
    

    // Random Number
    const randomNumber =(cart)=>{
        console.log(cart.length);
       if(cart.length){
        const number= Math.ceil(Math.random()*(cart.length));
        setNumber(number);
        const fNumber = number-1;
        const product = cart[fNumber];
        setChoiceCart([product])
       }
    }
    // Empty Cart
    const emptyCart =(cart)=>{
        setCart([]);
        setChoiceCart([])
    }
    

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
            <div className='random-empty-button'>
                <button onClick={()=>randomNumber(cart)}>Make choice</button>
                <button onClick={()=> emptyCart(cart)}>Empty Cart</button>
            </div>
            {
                choiceCart.map(product=><Cart key={product.id} product={product}></Cart>)
            }
        </div>
      </div>
    );
};

export default Shop;