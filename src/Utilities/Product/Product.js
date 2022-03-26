import React from 'react';
import "./Product.css"

const Product = (props) => {
    console.log(props);
    const{name, price, img} = props.product;
    return (
        <div className='product-container'>
            <img src={img} alt="" />
            <div className='product-info'>
                <h4>{name}</h4>
                <p>{price}</p>
            </div>
            <div className='button'>
                <p>Click Here</p>

            </div>
        </div>
    );
};

export default Product;