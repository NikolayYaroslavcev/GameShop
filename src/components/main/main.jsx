import React from 'react';
import './main.css'
import {HomePage} from "../../pages/home-page";
import {GamePage} from "../../pages/game-page";

export const Main = () => {
    return (
        <div>
            <HomePage/>
            <GamePage/>
        </div>
    );
};

