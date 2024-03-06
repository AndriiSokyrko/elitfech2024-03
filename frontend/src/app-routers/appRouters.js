import React from 'react';
import {Route, Routes} from "react-router-dom/dist";
import Shops from "../components/shops/shops";
import Cart from "../components/cart/cart";

function AppRouters(props) {
    return (
            <Routes>
                <Route path="/" element={<Shops/>}/>
                <Route path="/shops" element={<Shops/>}/>
                <Route path="/cart" element={<Cart/>}/>
            </Routes>
    )

}

export default AppRouters;