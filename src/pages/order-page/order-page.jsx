import React from 'react';
import './order-page.css'
import {useSelector} from "react-redux";
import {calcTotalPrice} from "../../utils/utils";
import {OrderItem} from "../../components/main/order-item";

export const OrderPage = () => {
    const items = useSelector(state => state.cart.itemsInCart)

    if (items.length === 0) {
        return <h1>Ваша корзана пуста</h1>
    }

    return (
        <section className='order-page'>
            <div className="order-page__left">
                {items.map(game => <OrderItem game={game}/>)}
            </div>
            <div className="order-page__right">
                <div className="order-page__total-price">
                    <span>
                        {items.length} товаров на сумму {calcTotalPrice(items)} руб.</span>
                </div>
            </div>
        </section>
    );
};
