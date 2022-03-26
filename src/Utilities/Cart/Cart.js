import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const {name, img}= props.product;
    return (
        <div>
            {/* <div>
                <h3>Selected Products</h3>
            </div> */}
            <div className='finalProduct'>
                <img src={img} alt="" />
                <h4>{name}</h4>
            </div>
        </div>
    );
};

export default Cart;