import React from 'react';
import './game-buy.css'
import {Button} from "../button";
import {deleteItemFromCart, setItemInCart} from "../../../app/cart/reducer";
import {useDispatch, useSelector} from "react-redux";


export const GameBuy = ({game}) => {
    const items = useSelector(state => state.cart.itemsInCart)
    const dispatch = useDispatch();
    const isItemInCart = items.some(item => item.id === game.id)

    const handlerClick = (e) => {
        e.stopPropagation();
        if (isItemInCart) {
            dispatch(deleteItemFromCart(game.id))
        } else {
            dispatch(setItemInCart(game))
        }
    }
    return (
        <div className='game-buy'>
            <span className='game-buy__price'>{game.price} руб.</span>
            <Button onClick={handlerClick} type={isItemInCart ? 'secondary' : 'primary'}>
                {isItemInCart ? "Убрать из карзины" : 'В корзину'}
            </Button>
        </div>
    );
};

