import React from 'react';
import './item.css'

    const Item = (props) => {
        const {image, title, price} = props.item;


    return (
        <div className="item">
            <img className="item-img" src={image} alt=""/>
            <h2>{title}</h2>
            <h4>Price: ${price}</h4>
            <button>Add your Coffee</button>
        </div>
    );

    };


export default Item;