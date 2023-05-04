import React from 'react';
import './order-item.css'
import {useDispatch} from "react-redux";
import {GameCover} from "../game-cover";
import {MdDeleteOutline} from 'react-icons/md'
import {deleteItemFromCart} from "../../../app/cart/reducer";


export const OrderItem = ({game}) => {
    const dispath = useDispatch();

    const handleClick = ()=> {
        dispath(deleteItemFromCart(game.id))

    }

    return (
        <div className='order-item'>
            <div className="order-item__cover">
                <GameCover image={game.image}/>
            </div>
            <div className="order-item__title">
                <span>{game.title}</span>
            </div>
            <div className="order-item__price">
                <span>{game.price} руб.</span>
                <MdDeleteOutline size={25} className='cart-item__delete-icon' onClick={handleClick}/>
            </div>
        </div>
    );
};

