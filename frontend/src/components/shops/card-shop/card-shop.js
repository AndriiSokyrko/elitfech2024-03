import React from 'react';
import "./card-shop.scss"

function CardShop({shop, setActiveShop}) {
    return (
        <li className="shop-item" onClick={()=> setActiveShop(shop.idShop)}>{shop.title} </li>
    );
}

export default CardShop;