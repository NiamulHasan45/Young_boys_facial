import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import "./Product.css"

const Product = (props) => {
    const{handler, product}=props;
    const{name, price, img} = props.product;
    return (
        <div className='product-container'>
            <img src={img} alt="" />
            <div className='product-info'>
                <h2>{name}</h2>
                <p>Price:${price}</p>
            </div>
            <button onClick={()=>handler(product)} className='button'>
                <p>Click here</p>
                <FontAwesomeIcon icon={faCartPlus}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;