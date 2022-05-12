import React from 'react';

const ChosenItem = () => {
    const Item = ({item, handleCart}) => {
        const {image, title, price, id} = item;
    return (
        <div className="item">
            <img className="item-img" src={image} alt=""/>
            <h2>{title}</h2>
            <h4>Price: ${price}</h4>
            <button onClick={()=>handleCart(item)} className="addToCart-btn">Add to Cart <BsFillCartPlusFill className="icon"/></button>
        </div>
    );
};

export default ChosenItem;