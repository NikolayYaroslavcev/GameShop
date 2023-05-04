import React, {useCallback, useState} from 'react';
import './cart-block.css'
import {BsCart3} from "react-icons/bs";
import {useSelector} from "react-redux";
import {CartMenu} from "../cart-menu";
import {calcTotalPrice} from "../../../utils/utils";
import {ItemInCart} from "../item-in-cart";
import {useNavigate} from "react-router-dom";


export const CartBlock = () => {
    const [isCartMenuVisible, setIsCartMenuVisible] = useState(false)
    const items = useSelector(state => state.cart.itemsInCart)
    const totalPrice = calcTotalPrice(items)
    const navigate = useNavigate();
    const onClickToggleHandler = () => {
        setIsCartMenuVisible(!isCartMenuVisible)
    }

    const handelClick = useCallback(() => {
        setIsCartMenuVisible(false)
        navigate('/order');
    },[navigate])

    return (
        <div className='cart-block'>
            <ItemInCart quantity={items.length}/>
            <BsCart3 size={25} className='cart-block__icon' onClick={onClickToggleHandler}/>
            {totalPrice && <span className='cart-block__total-price'>{totalPrice} руб.</span>}
            {isCartMenuVisible && <CartMenu items={items} onClick={handelClick} onClickToggleHandler={onClickToggleHandler}/>}
        </div>
    );
};
