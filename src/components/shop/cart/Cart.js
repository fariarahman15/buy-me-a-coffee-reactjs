import React from 'react';

const Cart = ({handleChosenItem}) => {
    // const handleChosenItem = (cart) =>{
    //     if (cart.length > 0){
    //         const randomOne = cart[Math.floor(Math.random() * cart.length)]
    //         console.log(randomOne);

    // }

    return (
        <div>
            <button onClick={handleChosenItem(cart)}>Choose One for Me</button>
            <button>Reset</button>
        </div>
    );
};

export default Cart;