import React from 'react';
import './header.css'
import {Link} from "react-router-dom";
import {CartBlock} from "./cart-block";
import {ReactComponent as Icon} from '../../assets/steam.svg';

export const Header = () => {
    return (
        <div className='header'>
           <div className="wrapper">
               <Link to='/' className='header__store-title'>
                   <div className='header__store-icon'><Icon/><span>Game Store</span> </div>
               </Link>
           </div>
            <div className="wrapper header__cart-btn-wrapper">
              <CartBlock/>
            </div>
        </div>
    );
};

