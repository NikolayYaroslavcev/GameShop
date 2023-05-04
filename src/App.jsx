import React from 'react';
import { HomePage } from "./pages/home-page";
import { Layout } from "./components/layout";
import { GamePage } from "./pages/game-page";
import { Route, Routes } from "react-router-dom";
import {OrderPage} from "./pages/order-page";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route index element={<HomePage/>}/>
                <Route path='/:title' element={<GamePage/>}/>
                <Route path='order' element={<OrderPage/>}/>
            </Route>
        </Routes>
    );
}

export default App;