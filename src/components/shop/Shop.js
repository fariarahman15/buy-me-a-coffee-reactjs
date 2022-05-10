import React, { useEffect, useState } from 'react';
import Cart from '../cart/Cart';
import Item from '../item/Item';
import './Shop.css'

const Shop = () => {
    const [items, setItems] = useState([]);

    const handleCart = (id) =>{
        console.log("add to cart", id);
    }

    useEffect(()=>{
      fetch('coffeedb.json')
      .then(res => res.json()) 
      .then(data => setItems(data));
    },[]);
  
    return (
        <div className="main-container">
            <div className="item-container">
                {
                    items.map(item => <Item key = {item.id} item = {item} handleCart={handleCart}></Item>)
                }
            </div>
            <Cart> </Cart>
            
        </div>
    );
};

export default Shop;
