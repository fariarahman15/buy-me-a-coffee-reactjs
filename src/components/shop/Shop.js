import React, { useEffect, useState } from 'react';
import Item from '../item/Item';
import './Shop.css'

const Shop = () => {
    const [items, setItems] = useState([]);

    useEffect(()=>{
      fetch('coffeedb.json')
      .then(res => res.json()) 
      .then(data => setItems(data));
    },[]);
  
    return (
        <div className="item-container">
            {
                items.map(item => <Item key= {item.id} item ={item}></Item>)
            }
            
        </div>
    );
};

export default Shop;