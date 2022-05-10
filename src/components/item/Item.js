import React from 'react';
import './item.css'
import { BsFillCartPlusFill } from 'react-icons/bs';

    const Item = (props) => {
        const {image, title, price} = props.item;


    return (
        <div className="item">
            <img className="item-img" src={image} alt=""/>
            <h2>{title}</h2>
            <h4>Price: ${price}</h4>
            <button className="addToCart-btn">Add to Cart <BsFillCartPlusFill className="icon"/></button>
        </div>
    );

    };


export default Item;