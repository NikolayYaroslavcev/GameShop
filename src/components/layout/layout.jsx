import React from 'react';
import {Outlet} from "react-router-dom";
import {Header} from "../header";
import {Main} from "../main";
import './layout.css';

export const Layout = () => {
    return (
        <div className='layout-wrapper'>
            <Header/>
                <Outlet/>
        </div>
    );
};