import React from 'react';
import './item-in-cart.css'


export const ItemInCart = ({quantity = 0}) => {

    return (
        quantity > 0 &&
        <div className='item-in-cart'>
            {quantity}
        </div>
    );
};
