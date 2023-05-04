import React from 'react';
import './cart-menu.css'
import {calcTotalPrice} from "../../../utils/utils";
import {Button} from "../../main/button";
import {CartItem} from "../cart-item";
import { IoCloseSharp } from 'react-icons/io5';


export const CartMenu = ({items, onClick,onClickToggleHandler}) => {
    return (
        <div className='cart-menu'>
            <div className="cart-menu__games-list">
                {items.length > 0 ? items.map(game =>
                    <CartItem key={game.id}
                              id={game.id}
                              title={game.title}
                              price={game.price}/>
                ) : "Корзина пуста"}
            </div>
            {items.length > 0 &&
                <div className="cart-menu__arrange">
                    <div className="cart-menu__total-price">
                        <span>Итого:</span>
                        <span>{calcTotalPrice(items)} руб.</span>
                    </div>
                    <Button type='primary' size='m' onClick={onClick}>
                        Оформить заказ
                    </Button>
                </div>
            }
            <div className='cart-menu__icon' onClick={onClickToggleHandler}><IoCloseSharp/></div>
        </div>
    );
};
