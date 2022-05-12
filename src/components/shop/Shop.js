import React, { useEffect, useState } from 'react';
import CartItems from '../cartItems/CartItems';
import Item from '../item/Item';
import './Shop.css'

const Shop = () => {
    const [items, setItems] = useState([]);
    const [cart, setCart] = useState([]);
    
     

    const handleCart = (item) =>{
        if (cart.indexOf(item) === -1 ){
            const newCart = [...cart,item];
            setCart(newCart);
            
        }
        
    }

    

    

    // const handleChosenItem = (cart) =>{
    //     if (cart.length > 0){
    //         const randomOne = cart[Math.floor(Math.random() * cart.length)]
    //         console.log(randomOne);

    // }

    useEffect(()=>{
      fetch('coffeedb.json')
      .then(res => res.json()) 
      .then(data => setItems(data));
    

      if (cart.length > 0){
        const randomOne = cart[Math.floor(Math.random() * cart.length)]
        console.log(randomOne);
    }
    
    
    },[]);
  
    return (
        <div className="main-container">
            <div className="item-container">
                {
                    items.map(item => <Item key = {item.id} item = {item} handleCart={handleCart}></Item>)
                }
            </div>

            <div className="cart">
            <h1>this is cart</h1>
            {
                    cart.map(coffee => <CartItems key={coffee.id} coffee={coffee}></CartItems>)
                    
            }
            
            
            
            
        </div>

            
            
        </div>
    );
};

export default Shop;
