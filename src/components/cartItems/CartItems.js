import React from 'react';
import './CartItems.css'

const CartItems = ({coffee}) => {
    const {image, title, price} = coffee;
    return (
        <div>
            <div className="cart-list">
                <img className="cart-list-img" src={image} alt=""/>
                <h5>{title}</h5>
                <h6>Price: ${price}</h6>
            </div>
        </div>
        
    );
};

export default CartItems;