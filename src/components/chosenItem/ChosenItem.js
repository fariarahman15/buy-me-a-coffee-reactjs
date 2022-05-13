import React from 'react';

const ChosenItem = ({cart, handleChosenItem}) => {
        
    return (
        <div>
            <button onClick={()=>handleChosenItem(cart)}>Choose One for me</button>
            <button>Reset</button>
            <h5></h5>
            
        </div>
    );
};

export default ChosenItem;